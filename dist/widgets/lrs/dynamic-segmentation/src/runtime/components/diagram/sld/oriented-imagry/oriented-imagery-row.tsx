/** @jsx jsx */
import { type IMState, jsx, ReactRedux } from 'jimu-core'
import React from 'react'
import type { MeasureRange, OiTrackRecord, OrientedImageryInfo } from '../../../../../config'
import { OrientedImageryItem } from './oriented-imagery-item'
import { useDynSegRuntimeState } from '../../../../state'
import classNames from 'classnames'
import { getOrientedImageryFootprintLayer, createOiTrackRecordFromFeature, calculateFootprintMeasureRange, mergeOverlappingFootprints, calculateMeasureFromPoint } from '../../../../utils/oriented-imagery-utils'
import { getXFromM, getMFromX } from '../../../../utils/diagram-utils'
import { crossSymbol, loadSymbolUtils } from '../../../../utils/symbols'
import { SLD_OI_CROSS_SIZE } from '../../../../../constants'
import { createPoint, getNearestCoordinate, intersection, projectGeometry } from 'widgets/shared-code/lrs'

export interface OrientedImageryRowProps {
  measureRange: MeasureRange
  contentWidth: number
  containerWidth: number
  scrollPos: number
  orientedImageryInfo: OrientedImageryInfo
  isActive: boolean
  onPanToMeasure?: (measure: number, zoom?: number) => void
}

export function OrientedImageryRow (props: OrientedImageryRowProps) {
  const { measureRange, contentWidth, containerWidth, scrollPos, orientedImageryInfo, isActive, onPanToMeasure } = props
  const { currentRouteInfo, jimuMapView, networkDS, orientedImageryWidgetId, searchTolerance, searchUnit } = useDynSegRuntimeState()
  const [oiTrackRecords, setOiTrackRecords] = React.useState<OiTrackRecord[]>([])
  const [oiFootprintTrackRecords, setOiFootprintTrackRecords] = React.useState<OiTrackRecord[]>([])
  const [selectedMeasure, setSelectedMeasure] = React.useState<number>(NaN)
  const crossSymbolRef = React.useRef<HTMLDivElement>(null)
  const prevLayerIdRef = React.useRef<string>(null)
  const crossSymbolRenderedRef = React.useRef<boolean>(false)
  const onPanToMeasureRef = React.useRef(onPanToMeasure)
  React.useEffect(() => { onPanToMeasureRef.current = onPanToMeasure }, [onPanToMeasure])

  const selectedPoint = ReactRedux.useSelector((state: IMState) => { return state.widgetsState[orientedImageryWidgetId]?.oiSelectedPoint ?? null })
  const imageLoaded = ReactRedux.useSelector((state: IMState) => { return state.widgetsState[orientedImageryWidgetId]?.oiViewerImageLoaded ?? false })
  const selectedImageId = ReactRedux.useSelector((state: IMState) => { return state.widgetsState[orientedImageryWidgetId]?.oiSelectedImageId ?? null })

  // Memoize footprint layer lookup for performance
  const footprintLayer = React.useMemo(() => {
    if (!orientedImageryInfo?.layer || !jimuMapView?.view?.map.allLayers) return null
    return getOrientedImageryFootprintLayer(orientedImageryInfo.layer, jimuMapView.view.map.allLayers)
  }, [orientedImageryInfo?.layer, jimuMapView?.view?.map.allLayers])

  // Generates id for each item
  const getId = (record: OiTrackRecord, isFootprint: boolean): string => {
    return `oriented-imagery-${record.id}-${isFootprint ? 'footprint' : 'point'}`
  }

  // Set selected measure when clicking on item
  const onSelect = (selectedMeasure: number) => {
    setSelectedMeasure(selectedMeasure)
  }

  // Clear records when layer changes
  React.useEffect(() => {
    const currentLayerId = orientedImageryInfo?.layer?.id
    if (currentLayerId !== prevLayerIdRef.current) {
      setOiTrackRecords([])
      setOiFootprintTrackRecords([])
      setSelectedMeasure(NaN)
      crossSymbolRenderedRef.current = false
      prevLayerIdRef.current = currentLayerId
    }
  }, [orientedImageryInfo?.layer?.id])

  // Query and process OI point features
  React.useEffect(() => {
    let aborted = false
    const run = async () => {
      if (!currentRouteInfo?.geometry || !orientedImageryInfo?.layer) {
        setOiTrackRecords([])
        return
      }
      try {
        // Ensure layer is loaded
        if (!orientedImageryInfo.layer.loaded) {
          await orientedImageryInfo.layer.load()
        }

        // Query oriented imagery features that intersect route for given distance
        const q = orientedImageryInfo.layer.createQuery()
        q.geometry = currentRouteInfo.geometry
        q.spatialRelationship = 'intersects'
        q.distance = searchTolerance || 50
        q.units = searchUnit || 'feet'

        const objectIds = await orientedImageryInfo.layer.queryObjectIds(q)
        if (aborted) return
        if (!objectIds || objectIds.length === 0) {
          setOiTrackRecords([])
          return
        }

        const objectIdPageSize = 100
        const batchSize = 10
        let index = 0
        setOiTrackRecords([])

        for (let offset = 0; offset < objectIds.length; offset += objectIdPageSize) {
          if (aborted) return
          const pageIds = objectIds.slice(offset, offset + objectIdPageSize)
          const pageQuery = orientedImageryInfo.layer.createQuery()
          pageQuery.objectIds = pageIds
          pageQuery.returnGeometry = true
          pageQuery.outFields = [orientedImageryInfo.layer.objectIdField]
          pageQuery.outSpatialReference = currentRouteInfo.geometry.spatialReference

          const res = await orientedImageryInfo.layer.queryFeatures(pageQuery)
          if (aborted) return

          for (let i = 0; i < res.features.length; i += batchSize) {
            if (aborted) return
            const batch = res.features.slice(i, i + batchSize)
            const batchResults = await Promise.all(batch.map(async f => {
              const nearest = await getNearestCoordinate(currentRouteInfo.geometry, f.geometry as __esri.Point)
              return createOiTrackRecordFromFeature(f, nearest?.coordinate, currentRouteInfo.geometry, index++)
            }))
            setOiTrackRecords(prev => prev.concat(batchResults))
            await new Promise<void>(resolve => { setTimeout(resolve, 0) })
          }
        }
      } catch (err) {
        if (!aborted) setOiTrackRecords([])
      }
    }
    run()
    return () => { aborted = true }
  }, [currentRouteInfo, orientedImageryInfo.layer, networkDS, searchTolerance, searchUnit])

  // Query and process footprint features
  React.useEffect(() => {
    let aborted = false

    const run = async () => {
      if (!footprintLayer || !currentRouteInfo?.geometry) {
        setOiFootprintTrackRecords([])
        return
      }

      try {
        // Ensure footprint layer is loaded
        if (!footprintLayer.loaded) {
          await footprintLayer.load()
        }
        if (aborted) return

        // Query footprint features that intersect route
        const query = footprintLayer.createQuery()
        query.geometry = currentRouteInfo.geometry
        query.spatialRelationship = "intersects"

        const objectIds = await footprintLayer.queryObjectIds(query)
        if (aborted) return
        if (!objectIds || objectIds.length === 0) {
          setOiFootprintTrackRecords([])
          return
        }

        const objectIdPageSize = 100
        const batchSize = 5 // Smaller batch for footprints due to expensive geometry operations
        const footprintRecords: OiTrackRecord[] = []
        setOiFootprintTrackRecords([])

        for (let offset = 0; offset < objectIds.length; offset += objectIdPageSize) {
          if (aborted) return
          const pageIds = objectIds.slice(offset, offset + objectIdPageSize)
          const pageQuery = footprintLayer.createQuery()
          pageQuery.objectIds = pageIds
          pageQuery.returnGeometry = true
          pageQuery.outFields = [footprintLayer.objectIdField]
          pageQuery.outSpatialReference = currentRouteInfo.geometry.spatialReference

          const features = await footprintLayer.queryFeatures(pageQuery)
          if (aborted) return

          const featureList = features?.features ?? []
          for (let i = 0; i < featureList.length; i += batchSize) {
            if (aborted) return
            const batch = featureList.slice(i, i + batchSize)
            const batchResults = await Promise.all(
              batch.map(async (feature, idx) => {
                const intersectedGeom = await intersection(feature.geometry as __esri.Polygon, currentRouteInfo.geometry)
                const { measure, toMeasure } = await calculateFootprintMeasureRange(intersectedGeom, currentRouteInfo.geometry)

                return {
                  measure,
                  toMeasure,
                  geometry: intersectedGeom,
                  footprint: feature.geometry,
                  id: offset + i + idx,
                  isFootprint: true,
                } as OiTrackRecord
              })
            )
            footprintRecords.push(...batchResults)
            setOiFootprintTrackRecords(prev => prev.concat(batchResults))
            await new Promise<void>(resolve => { setTimeout(resolve, 0) })
          }
        }
        if (aborted) return

        // Merge overlapping footprints and union their geometries
        const mergedFootprints = await mergeOverlappingFootprints(footprintRecords)
        if (!aborted) {
          setOiFootprintTrackRecords(mergedFootprints)
        }
      } catch (err) {
        if (!aborted) {
          setOiFootprintTrackRecords([])
        }
      }
    }

    run()
    return () => { aborted = true }
  }, [currentRouteInfo, footprintLayer])

  // Clear selected measure when image is not loaded in OI viewer
  React.useEffect(() => {
    if (!imageLoaded) {
      setSelectedMeasure(NaN)
      crossSymbolRenderedRef.current = false
    }
  }, [imageLoaded])

  // Recalculate selectedMeasure when selectedPoint or currentRouteInfo changes
  React.useEffect(() => {
    let aborted = false

    async function calculateSelectedMeasure () {
      if (!selectedPoint || !currentRouteInfo?.geometry || !imageLoaded) {
        setSelectedMeasure(NaN)
        return
      }

      try {
        // create point object
        const point = await createPoint(selectedPoint)
        if (aborted) return

        const projectedPoint = await projectGeometry(point, currentRouteInfo.geometry.spatialReference) as __esri.Point
        if (aborted) return

        if (projectedPoint.type !== 'point') {
          setSelectedMeasure(NaN)
          return
        }

        // Check if projected point intersects any footprint features
        let intersectsFootprint = false
        for (const footprint of oiFootprintTrackRecords) {
          if (footprint.footprint && footprint.footprint.type === 'polygon') {
            try {
              const geom = footprint.footprint as __esri.Polygon
              const intersectionResult = await intersection(geom, projectedPoint)
              if (intersectionResult) {
                intersectsFootprint = true
                break
              }
            } catch {
              continue
            }
          }
        }

        // Only calculate measure if point intersects a footprint
        if (!intersectsFootprint) {
          if (!aborted) {
            setSelectedMeasure(NaN)
          }
          return
        }

        // Calculate measure from selected point
        const mValue = calculateMeasureFromPoint(projectedPoint, currentRouteInfo.geometry)
        if (!aborted && mValue >= measureRange.from && mValue <= measureRange.to) {
          setSelectedMeasure(mValue)
        }
      } catch (err) {
        if (!aborted) {
          setSelectedMeasure(NaN)
        }
      }
    }

    calculateSelectedMeasure()
    return () => { aborted = true }
  }, [selectedPoint, imageLoaded, currentRouteInfo, measureRange.from, measureRange.to, oiFootprintTrackRecords])

  // Auto-pan to selected image or point if outside visible range
  React.useEffect(() => {
    if (!onPanToMeasureRef.current) return

    // Calculate the visible measure range based on scroll position and container width
    const visibleFromM = getMFromX(scrollPos, measureRange, contentWidth)
    const visibleToM = getMFromX(scrollPos + containerWidth, measureRange, contentWidth)

    // Collect both measures if they exist
    let selectedImageMeasure: number = NaN
    let selectedPointMeasure: number = NaN

    // Get selected image measure
    if (imageLoaded && selectedImageId) {
      const selectedImageRecord = oiTrackRecords.find(record =>
        record.objectId === selectedImageId
      )
      if (selectedImageRecord && !isNaN(selectedImageRecord.measure)) {
        selectedImageMeasure = selectedImageRecord.measure
      }
    }

    // Get selected point measure
    if (imageLoaded && !isNaN(selectedMeasure)) {
      selectedPointMeasure = selectedMeasure
    }

    // Determine if we need to pan and to what measure
    const hasImageMeasure = !isNaN(selectedImageMeasure)
    const hasPointMeasure = !isNaN(selectedPointMeasure)

    if (hasImageMeasure && hasPointMeasure) {
      // Both exist - check if either is outside visible range
      const imageOutside = selectedImageMeasure < visibleFromM || selectedImageMeasure > visibleToM
      const pointOutside = selectedPointMeasure < visibleFromM || selectedPointMeasure > visibleToM

      if (imageOutside || pointOutside) {
        // Calculate the distance between the two measures
        const measureDistance = Math.abs(selectedImageMeasure - selectedPointMeasure)
        const currentVisibleMeasureRange = visibleToM - visibleFromM

        // Check if both measures can fit in the current visible range
        // Add 20% padding to ensure both are comfortably visible
        const requiredRange = measureDistance * 1.2

        if (requiredRange > currentVisibleMeasureRange) {
          // Need to zoom out to fit both measures
          // Calculate the zoom factor needed
          const currentZoom = contentWidth / containerWidth
          const newZoom = (currentVisibleMeasureRange / requiredRange) * currentZoom

          // Pan to the midpoint with the new zoom
          const midpoint = (selectedImageMeasure + selectedPointMeasure) / 2
          onPanToMeasureRef.current(midpoint, Math.max(1, newZoom))
        } else {
          // Both can fit in current zoom, just pan to midpoint
          const midpoint = (selectedImageMeasure + selectedPointMeasure) / 2
          onPanToMeasureRef.current(midpoint)
        }
      }
    } else if (hasImageMeasure) {
      // Only image exists - check if outside visible range
      if (selectedImageMeasure < visibleFromM || selectedImageMeasure > visibleToM) {
        onPanToMeasureRef.current(selectedImageMeasure)
      }
    } else if (hasPointMeasure) {
      // Only point exists - check if outside visible range
      if (selectedPointMeasure < visibleFromM || selectedPointMeasure > visibleToM) {
        onPanToMeasureRef.current(selectedPointMeasure)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImageId, selectedMeasure, imageLoaded])

  // Render cross at location of selected point.
  React.useEffect(() => {
    const renderCrossSymbol = async () => {
      if (!imageLoaded || isNaN(selectedMeasure) || !crossSymbolRef.current) {
        crossSymbolRenderedRef.current = false
        return
      }

      // Skip if already rendered to avoid unnecessary re-renders
      if (crossSymbolRenderedRef.current) {
        return
      }

      // Set immediately to prevent race conditions
      crossSymbolRenderedRef.current = true

      // Clear previous content
      crossSymbolRef.current.innerHTML = ''

      // Render the cross symbol
      const symbolUtils = await loadSymbolUtils()
      await symbolUtils.renderPreviewHTML(crossSymbol, {
        node: crossSymbolRef.current,
        size: SLD_OI_CROSS_SIZE
      })
    }

    renderCrossSymbol()
  }, [imageLoaded, selectedMeasure])

  // Render a cross symbol at the selected point
  const renderCross = () => {
    if (imageLoaded && !isNaN(selectedMeasure) && measureRange && contentWidth) {
      const x = getXFromM(selectedMeasure, measureRange, contentWidth)
      return (
        <div
          ref={crossSymbolRef}
          style={{
            position: 'absolute',
            left: x - (SLD_OI_CROSS_SIZE / 2),
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: SLD_OI_CROSS_SIZE,
            height: SLD_OI_CROSS_SIZE,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )
    }
  }

  return (
    <div className={classNames('sld-row d-flex', isActive ? 'active' : 'inactive')} style={{ width: contentWidth, flexDirection: 'row', position: 'relative' }}>
      {oiTrackRecords.map((pf, idx) => (
        <OrientedImageryItem
          key={pf.id}
          record={pf}
          id={getId(pf, false)}
          measureRange={measureRange}
          contentWidth={contentWidth}
          onSelect={onSelect}
          layer={orientedImageryInfo.layer}
          selectedImageId={imageLoaded ? selectedImageId : undefined}
          isActive={isActive}
        />
      ))}
      {oiFootprintTrackRecords.map((pf) => (
        <OrientedImageryItem
          key={pf.id}
          record={pf}
          id={getId(pf, true)}
          measureRange={measureRange}
          contentWidth={contentWidth}
          onSelect={onSelect}
          layer={footprintLayer || orientedImageryInfo.layer}
          selectedImageId={imageLoaded ? selectedImageId : undefined}
          isActive={isActive}
        />
      ))}
      {renderCross()}
    </div>
  )
}