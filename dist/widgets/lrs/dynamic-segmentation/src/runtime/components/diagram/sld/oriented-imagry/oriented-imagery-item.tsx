/** @jsx jsx */
import { css, jsx } from 'jimu-core'
import { getTheme } from 'jimu-theme'
import { CalciteIcon } from 'calcite-components'
import { useDynSegRuntimeState } from '../../../../state'
import { getSldItemLeft, getSldItemWidth } from '../../../../utils/diagram-utils'
import { renderPointSymbolToNode, renderLineSymbolToNode, getPointBackgroundColor, applyLineBackgroundColor, formatBackgroundColor, loadSymbolUtils } from '../../../../utils/symbols'
import React from 'react'
import type { MeasureRange, OiTrackRecord } from '../../../../../config'
import * as locateBetweenOperator from 'esri/geometry/operators/locateBetweenOperator'
import { SLD_ICON_WIDTH, SLD_ITEM_HEIGHT } from '../../../../../constants'
import { createEsriGraphic, isDefined } from 'widgets/shared-code/lrs'
import classNames from 'classnames'

export interface OrientedImageryItemProps {
  id: string
  record: OiTrackRecord
  measureRange: MeasureRange
  contentWidth: number
  layer: __esri.OrientedImageryLayer | __esri.FeatureLayer
  selectedImageId?: number
  isActive: boolean
  onSelect: (selectedMeasure: number) => void
}

export const OrientedImageryItem: React.FC<OrientedImageryItemProps> = ({ id, record, measureRange, contentWidth, layer, selectedImageId, isActive, onSelect }) => {
  const { jimuMapView } = useDynSegRuntimeState()
  const theme = getTheme()
  const ref = React.useRef<HTMLDivElement>(null)
  const symbolLoadedRef = React.useRef<boolean>(false)
  const [backgroundColor, setBackgroundColor] = React.useState<__esri.Color>(null)
  const [hasImage, setHasImage] = React.useState<boolean>(false)
  const isFootprint = !!record.isFootprint
  const isSelected = !isFootprint && isDefined(selectedImageId) && record.objectId === selectedImageId

  // Memoize position calculations for performance
  const left = React.useMemo(() => {
    return getSldItemLeft(record.measure, measureRange, contentWidth, !isFootprint, SLD_ICON_WIDTH)
  }, [record.measure, measureRange, contentWidth, isFootprint])

  const width = React.useMemo(() => {
    if (isFootprint) {
      return getSldItemWidth(record.measure, record.toMeasure, measureRange, contentWidth, false, SLD_ICON_WIDTH)
    }
    return SLD_ICON_WIDTH
  }, [isFootprint, record.measure, record.toMeasure, measureRange, contentWidth])

  const createGraphic = React.useCallback(async (): Promise<__esri.Graphic> => {
    return createEsriGraphic(record.geometry, {}, layer)
  }, [record.geometry, layer])

  // Loads point symbols and sets it to the current node
  const setPointSymbol = React.useCallback(async (aborted?: boolean) => {
    if (!record.geometry || !layer || aborted) return

    try {
      const graphic = await createGraphic()
      if (aborted) return

      const symbolUtils = await loadSymbolUtils()
      if (aborted) return

      const symbol = await symbolUtils.getDisplayedSymbol(graphic, { renderer: layer.renderer })
      if (aborted) return

      const newColor = await getPointBackgroundColor(
        graphic,
        layer.renderer,
        backgroundColor,
        false,
        { r: 102, g: 178, b: 255, a: 1 }
      )
      if (!aborted) {
        setBackgroundColor(newColor)
      }

      if (!isDefined(symbol) || aborted) return

      const symbolJson = symbol.toJSON()
      await renderPointSymbolToNode(symbol, symbolJson, id)
    } catch (err) {
      if (!aborted) {
        setBackgroundColor({ r: 102, g: 178, b: 255, a: 1 } as __esri.Color)
      }
    }
  }, [record, layer, backgroundColor, id, createGraphic])

  // Loads line symbols and sets it to the current node
  const setLineSymbol = React.useCallback(async (aborted?: boolean) => {
    if (!record.geometry || !layer || aborted) return

    try {
      const nodeHtml = document.getElementById(id)
      if (!nodeHtml || aborted) return

      const graphic = await createGraphic()
      if (aborted) return

      const symbolUtils = await loadSymbolUtils()
      if (aborted) return

      const symbol = await symbolUtils.getDisplayedSymbol(graphic, { renderer: layer.renderer })
      if (aborted) return

      const newColor = await applyLineBackgroundColor(
        nodeHtml,
        graphic,
        layer.renderer,
        backgroundColor,
        false,
        { r: 102, g: 178, b: 255, a: 0.7 }
      )
      if (!aborted) {
        setBackgroundColor(newColor)
      }

      if (aborted) return

      const symbolJson = symbol?.toJSON()
      await renderLineSymbolToNode(
        symbol,
        symbolJson,
        nodeHtml,
        () => { if (!aborted) setHasImage(true) }
      )
    } catch (err) {
      if (!aborted) {
        setBackgroundColor({ r: 102, g: 178, b: 255, a: 0.7 } as __esri.Color)
      }
    }
  }, [record, layer, id, backgroundColor, createGraphic])

  // Load symbols for items (icons for points, bars for footprints)
  React.useEffect(() => {
    let aborted = false

    if (!isActive) {
      // Reset so symbols reload if the row becomes active again
      symbolLoadedRef.current = false
      return
    }

    const loadSymbol = async () => {
      if (symbolLoadedRef.current || !record.geometry || !layer) return

      // Set immediately to prevent race conditions on first load
      symbolLoadedRef.current = true

      try {
        if (isFootprint) {
          await setLineSymbol(aborted)
        } else {
          await setPointSymbol(aborted)
        }
      } catch (err) {
        if (!aborted) {
          symbolLoadedRef.current = false
        }
      }
    }

    loadSymbol()
    return () => { aborted = true }
  }, [isActive, isFootprint, record.geometry, layer, setLineSymbol, setPointSymbol])

  // Get background color for footprint layer
  const getBackgroundColor = (): string => {
    return formatBackgroundColor(backgroundColor, hasImage, 'rgba(102, 178, 255, 0.6)')
  }

  // Calculate target point from click for polyline
  const calculatePolylineTargetPoint = (e: React.MouseEvent, poly: __esri.Polyline): { point: __esri.Point | null, measure: number } => {
    if (!poly?.paths?.length || !ref.current) {
      return { point: null, measure: record.measure ?? 0 }
    }

    const divRect = ref.current.getBoundingClientRect()
    const clickX = e.clientX - divRect.left
    const mStart = record.measure ?? 0
    const mEnd = typeof record.toMeasure === 'number' ? record.toMeasure : mStart
    const mClicked = mStart + ((mEnd - mStart) * (clickX / (divRect.width || 1)))

    const firstPoint = poly.getPoint(0, 0)
    const result = locateBetweenOperator.executeMany([poly], mClicked, mClicked)

    if (result?.[0]?.type === 'multipoint' && result[0].points.length > 0) {
      const multipoint = result[0]
      firstPoint.x = multipoint.points[0][0]
      firstPoint.y = multipoint.points[0][1]
      return { point: firstPoint, measure: mClicked }
    }

    return { point: null, measure: mStart }
  }

  // Dispatch synthetic click events to the map view
  const dispatchSyntheticClick = (view: __esri.MapView, targetPoint: __esri.Point) => {
    const screenPt = view.toScreen(targetPoint)
    if (!screenPt) return

    const rect = view.container.getBoundingClientRect()
    const clientX = rect.left + screenPt.x
    const clientY = rect.top + screenPt.y

    const arcEvent: any = {
      type: 'click',
      mapPoint: targetPoint,
      x: screenPt.x,
      y: screenPt.y,
      button: 0,
      buttons: 0,
      native: new MouseEvent('click', { bubbles: true, cancelable: true, clientX, clientY }),
      fromOrientedImagery: true
    }

    // Try internal handler
    const internalHandler = (view as any)._onClick || (view as any)._handleClick
    if (typeof internalHandler === 'function') {
      try {
        internalHandler.call(view, arcEvent)
        arcEvent.__internalInvoked = true
      } catch { /* ignore */ }
    }

    // Try emit function
    const emitFn = (view as any)._emit || (view as any).emit
    if (typeof emitFn === 'function') {
      try {
        emitFn.call(view, 'click', arcEvent)
        arcEvent.__emitInvoked = true
      } catch { /* ignore */ }
    }

    // Dispatch pointer and mouse events
    const surface: HTMLElement = (view as any).surface || view.container.querySelector('.esri-view-surface') || view.container
    const dispatchPointer = (type: string) => {
      const evt = new PointerEvent(type, { bubbles: true, cancelable: true, clientX, clientY, pointerId: 1, pointerType: 'mouse', isPrimary: true, button: 0 })
      surface.dispatchEvent(evt)
    }

    dispatchPointer('pointermove')
    dispatchPointer('pointerdown')
    dispatchPointer('pointerup')
    surface.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, clientX, clientY }))

    if (!arcEvent.__internalInvoked && !arcEvent.__emitInvoked) {
      ;(view as any).mapViewSyntheticClickCount = ((view as any).mapViewSyntheticClickCount || 0) + 1
    }
  }

  // Handle click on oriented imagery item
  const handleClick = (e: React.MouseEvent) => {
    try {
      if (!jimuMapView?.view || !record?.geometry) return

      const view = jimuMapView.view as __esri.MapView
      let targetPoint: __esri.Point | null = null
      let selectedMeasure: number = record.measure ?? 0

      if (record.geometry.type === 'point') {
        targetPoint = record.geometry as __esri.Point
      } else if (record.geometry.type === 'polyline') {
        const result = calculatePolylineTargetPoint(e, record.geometry as __esri.Polyline)
        targetPoint = result.point
        selectedMeasure = result.measure
      }

      if (!targetPoint) return

      dispatchSyntheticClick(view, targetPoint)
      onSelect(selectedMeasure)
    } catch (err) {
      // Silently fail, not critical
    }
  }

  if (!isFootprint) {
    if (!isActive) {
      return (
        <div
          id={id}
          className="sld-item-point-inactive"
          style={{ width: '24px', left, background: 'transparent' }}>
          <CalciteIcon
            icon='bullet-point-large'
            scale='m'
            css={css`--calcite-icon-color: ${theme.sys.color.action.disabled.text};`}
          />
        </div>
      )
    }
    return (
      <div
        className="sld-item-point-container"
        style={{ left, position: 'absolute', zIndex: isSelected ? 12 : 1 }}>
        <div
          ref={ref}
          id={id}
          className={classNames('sld-item-oi-point-active', { 'sld-item-oi-point-selected': isSelected })}
          role="button"
          onClick={handleClick}
          onDoubleClick={handleClick}
          tabIndex={0}
        />
      </div>
    )
  } else {
    if (!isActive) {
      return (
        <div
          id={id}
          className="sld-item-line-inactive"
          style={{ width, left, position: 'absolute' }}
        />
      )
    }
    return (
      <div
        ref={ref}
        id={id}
        className='sld-item-line-active'
        style={{
          left,
          width,
          position: 'absolute',
          height: `${SLD_ITEM_HEIGHT}px`,
          background: getBackgroundColor(),
          borderRadius: '2px',
          zIndex: 0,
          opacity: 0.7
        }}
        onClick={handleClick}
        onDoubleClick={handleClick}
        role="button"
        tabIndex={0}
      />
    )
  }
}