/** @jsx jsx */
import {
  classNames,
  css,
  type DataSource,
  type FeatureLayerDataSource,
  jsx,
  React
} from 'jimu-core'
import { type SubtypeLayers, type DynSegFieldInfo, type MeasureRange, type TrackRecord, EventType } from '../../../../config'
import { rgba } from 'polished'
import { isDefined } from 'widgets/shared-code/lrs'
import { Label } from 'jimu-ui'
import { getTheme } from 'jimu-theme'
import { SLD_ICON_WIDTH } from '../../../../constants'
import { getDisplayFieldInfo, getDisplayFieldValue, getEventIdField, getGraphic, getIntersectionIdField, getEventType, getIntersectionNameFieldValue, getSldItemLeft, getSldItemWidth, isColorLight as isColorLightUtil } from '../../../utils/diagram-utils'
import { renderPointSymbolToNode, renderLineSymbolToNode, getPointBackgroundColor, applyLineBackgroundColor, formatBackgroundColor, loadSymbolUtils } from '../../../utils/symbols'
import { useDynSegRuntimeDispatch, useDynSegRuntimeState } from '../../../state'
import 'calcite-components'

export interface ItemProps {
  eventDS: DataSource
  record: TrackRecord
  isActive: boolean
  fieldInfos: DynSegFieldInfo[]
  fields: __esri.Field[]
  contentWidth: number
  measureRange: MeasureRange
  trackIndex: number
  featureLayer: __esri.FeatureLayer
  subtypeLayers: SubtypeLayers[]
  onItemClick: (trackRecord: TrackRecord, fieldInfos: DynSegFieldInfo[], id: string, doubleClick: boolean) => void
  onItemHover: (trackRecord: TrackRecord, id: string) => void
  onItemHoverExit: () => void
}

export function Item (props: ItemProps) {
  const { eventDS, record, fieldInfos, fields, isActive, contentWidth, measureRange, trackIndex, subtypeLayers, onItemClick, onItemHover, onItemHoverExit } = props
  const ref = React.useRef(null)
  const labelRef = React.useRef<HTMLDivElement>(null)
  const theme = getTheme()
  const [backgroundColor, setBackgroundColor] = React.useState<__esri.Color>(null)
  const [symbolLoaded, setSymbolLoaded] = React.useState<boolean>(false)
  const [hasImage, setHasImage] = React.useState<boolean>(false)
  const [hoverTrackRecord, setHoverTrackRecord] = React.useState<TrackRecord>(null)
  const [isEdited, setIsEdited] = React.useState<boolean>(false)
  const [labelPosition, setLabelPosition] = React.useState<'left' | 'right'>('right')
  const [labelVisible, setLabelVisible] = React.useState<boolean>(false)
  const isRenderingRef = React.useRef<boolean>(false)
  const { selectedSldId, pendingEdits, currentRouteInfo } = useDynSegRuntimeState()
  const dispatch = useDynSegRuntimeDispatch()

  const handleOnMouseClick = (e) => {
    e.stopPropagation()
    dispatch({ type: 'SET_SELECTED_SLD_ID', value: getId() })
    onItemClick(record, fieldInfos, getId(), false)
  }

  const handleOnDoubleClick = (e) => {
    e.stopPropagation()
    dispatch({ type: 'SET_SELECTED_SLD_ID', value: getId() })
    onItemClick(record, fieldInfos, getId(), true)
  }

  const handleOnMouseEnter = (e) => {
    e.stopPropagation()
    const trackRecord = getHoverTrackRecord()
    onItemHover(trackRecord, getId())
  }

  const handleOnMouseLeave = (e) => {
    e.stopPropagation()
    onItemHoverExit()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      handleOnDoubleClick(e)
    }
  }

  const getHoverTrackRecord = (): TrackRecord => {
    if (isDefined(hoverTrackRecord) && !pendingEdits.has(getId())) {
      return hoverTrackRecord
    }
    const attributes = new Map<string, string | number | Date>()
    const displayField = getDisplayFieldInfo(fieldInfos, record)
    const eventIdField = getEventIdField(fieldInfos)
    const intersectionIdField = getIntersectionIdField(fieldInfos, record)
    attributes.set(displayField.originalFieldName, getDisplayFieldValue(fields, fieldInfos, record, subtypeLayers))
    if (isDefined(eventIdField)) {
      attributes.set(eventIdField.originalFieldName, record.attributes.get(eventIdField.originalFieldName))
    }
    if (isDefined(intersectionIdField) && !displayField.isIntersectionIdField) {
      attributes.set(intersectionIdField.originalFieldName, record.attributes.get(intersectionIdField.originalFieldName))
    }
    // Track record with reduced attributes for hover and background
    const TrackRecord: TrackRecord = {
      attributes: attributes,
      fromMeasure: record.fromMeasure,
      toMeasure: record.toMeasure,
      index: record.index,
      isPoint: record.isPoint,
      hasValue: record.hasValue,
      selected: record.selected,
      displayField: record.displayField,
      geometry: record.geometry,
      objectId: record.objectId,
      fieldInfos: fieldInfos,
      attributeBackgrounds: getHoverBackgrounds()
    }
    setHoverTrackRecord(TrackRecord)
    return TrackRecord
  }

  const getHoverBackgrounds = (): Map<string, string> => {
    const backgrounds = new Map<string, string>()
    const displayField = getDisplayFieldInfo(fieldInfos, record)
    const eventIdField = getEventIdField(fieldInfos)
    const intersectionIdField = getIntersectionIdField(fieldInfos, record)
    backgrounds.set(displayField.originalFieldName, rgba(backgroundColor.r, backgroundColor.g, backgroundColor.b, 0.5))
    if (isDefined(eventIdField)) {
      backgrounds.set(eventIdField.originalFieldName, 'transparent')
    }
    if (isDefined(intersectionIdField) && !displayField.isIntersectionIdField) {
      backgrounds.set(intersectionIdField.originalFieldName, 'transparent')
    }
    return backgrounds
  }

  React.useEffect(() => {
    const loadSymbol = async () => {
      if (isRenderingRef.current) return
      isRenderingRef.current = true
      try {
        if (record.isPoint && !symbolLoaded) {
          await setPointSymbol()
          setSymbolLoaded(true)
        } else if (!record.isPoint) {
          await setLineSymbol()
          setSymbolLoaded(true)
        }
      } finally {
        isRenderingRef.current = false
      }
    }

    if (isActive) {
      loadSymbol()
      // Always start with left position and reset visibility
      setLabelPosition('left')
      setLabelVisible(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, contentWidth])

  // Collision detection for point labels with smart positioning
  React.useEffect(() => {
    if (!isActive || !record.isPoint || !record.hasValue || !labelRef.current) {
      return
    }

    // Check if label should be shown (includes intersection layer check)
    if (!getShowLabel()) {
      return
    }

    const checkCollision = (): boolean => {
      if (!labelRef.current) return true

      const labelRect = labelRef.current.getBoundingClientRect()
      const rowElement = labelRef.current.closest('.sld-row')
      if (!rowElement) return true

      const myContainer = labelRef.current.parentElement
      const myId = getId()
      const padding = 2 // Padding in pixels for collision detection

      // Check if label is outside the parent container bounds
      const containerRect = rowElement.getBoundingClientRect()
      if (labelRect.left < containerRect.left || labelRect.right > containerRect.right) {
        return true // Consider it a collision if outside bounds
      }

      // Get all point icons and labels in the same row
      const icons = rowElement.querySelectorAll('.sld-item-point-active')
      const labels = rowElement.querySelectorAll('.sld-item-point-label-wrapper')
      let hasCollision = false

      // Check against all icons except our own
      icons.forEach((icon) => {
        if (icon.parentElement === myContainer) return // Skip own icon

        const iconRect = icon.getBoundingClientRect()
        const overlap = !(
          labelRect.right < iconRect.left - padding ||
          labelRect.left > iconRect.right + padding ||
          labelRect.bottom < iconRect.top - padding ||
          labelRect.top > iconRect.bottom + padding
        )

        if (overlap) {
          hasCollision = true
        }
      })

      // Check against other visible labels with priority consideration
      labels.forEach((label) => {
        if (label === labelRef.current) return // Skip self

        // Only check against labels that are actually visible
        const labelElement = label as HTMLElement
        const isVisible = labelElement.style.opacity !== '0' && labelElement.style.opacity !== ''
        if (!isVisible) return

        // Get the other label's container to determine its priority and position
        const otherContainer = label.parentElement
        const otherIcon = otherContainer?.querySelector('.sld-item-point-active')
        const otherId = otherIcon?.id

        // Determine priority based on ID (format: trackIndex-recordIndex)
        const myIndex = parseInt(myId.split('-')[1])
        const otherIndex = otherId ? parseInt(otherId.split('-')[1]) : Infinity

        // Determine the other label's position
        const otherLabelClasses = labelElement.className
        const otherIsLeft = otherLabelClasses.includes('label-left')
        const otherIsRight = otherLabelClasses.includes('label-right')

        let shouldCheckCollision = false

        if (labelPosition === 'left') {
          // When checking left: only defer to labels with higher priority (lower index)
          shouldCheckCollision = otherIndex < myIndex
        } else {
          // When checking right (fallback):
          // - Always check against labels on the left (they won't move)
          // - Only check against labels on the right if they have higher priority
          if (otherIsLeft) {
            shouldCheckCollision = true
          } else if (otherIsRight) {
            shouldCheckCollision = otherIndex < myIndex
          }
        }

        if (shouldCheckCollision) {
          const otherLabelRect = label.getBoundingClientRect()
          const overlap = !(
            labelRect.right < otherLabelRect.left - padding ||
            labelRect.left > otherLabelRect.right + padding ||
            labelRect.bottom < otherLabelRect.top - padding ||
            labelRect.top > otherLabelRect.bottom + padding
          )

          if (overlap) {
            hasCollision = true
          }
        }
      })

      return hasCollision
    }

    let rafId: number

    const determinePosition = () => {
      // Initially on left, check collision
      const leftCollision = checkCollision()

      if (!leftCollision) {
        // No collision on left, show it
        setLabelVisible(true)
        return
      }

      // Collision on left, try right
      setLabelPosition('right')

      // Wait for next frame after position change to check right side
      rafId = requestAnimationFrame(() => {
        const rightCollision = checkCollision()

        if (!rightCollision) {
          // No collision on right, show it
          setLabelVisible(true)
        }
        // collision on both sides, keep hidden (already false)
      })
    }

    // Check collision after a short delay to allow rendering
    const timer = setTimeout(determinePosition, 50)

    return () => {
      clearTimeout(timer)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, record.isPoint, record.hasValue, symbolLoaded, contentWidth, fields, fieldInfos, record, subtypeLayers])

  React.useEffect(() => {
    const loadSymbol = async () => {
      if (isRenderingRef.current) return
      isRenderingRef.current = true
      try {
        if (record.isPoint) {
          await setPointSymbol(true)
        } else if (!record.isPoint) {
          await setLineSymbol(true)
        }
      } finally {
        isRenderingRef.current = false
      }
    }

    if (pendingEdits.has(getId())) {
      loadSymbol()
      setIsEdited(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingEdits])

  const setPointSymbol = async (forceUpdate?: boolean) => {
    if (!record.hasValue) { return }
    const [graphic, symbolUtils] = await Promise.all([getGraphic(record, null, true), loadSymbolUtils()])
    const eventFS = eventDS as FeatureLayerDataSource
    await symbolUtils.getDisplayedSymbol(graphic, { renderer: eventFS.layer.renderer }).then(async (symbol) => {
      const newColor = await getPointBackgroundColor(
        graphic,
        eventFS.layer.renderer,
        backgroundColor,
        forceUpdate,
        { r: 255, g: 255, b: 255, a: 0 }
      )
      setBackgroundColor(newColor)

      if (!isDefined(symbol)) { return }
      const symbolJson = symbol.toJSON()
      await renderPointSymbolToNode(symbol, symbolJson, getId())
    })
  }

  const setLineSymbol = async (forceUpdate?: boolean) => {
    if (!record.hasValue) { return }
    const nodeHtml = document.getElementById(getId())
    if (isDefined(nodeHtml)) {
      const eventFS = eventDS as FeatureLayerDataSource
      const [graphic, symbolUtils] = await Promise.all([getGraphic(record, null, true), loadSymbolUtils()])
      await symbolUtils.getDisplayedSymbol(graphic, { renderer: eventFS.layer.renderer }).then(async (symbol) => {
        const newColor = await applyLineBackgroundColor(
          nodeHtml,
          graphic,
          eventFS.layer.renderer,
          backgroundColor,
          forceUpdate,
          { r: 255, g: 255, b: 255, a: 0 }
        )
        setBackgroundColor(newColor)

        const symbolJson = symbol?.toJSON()
        await renderLineSymbolToNode(
          symbol,
          symbolJson,
          nodeHtml,
          () => { setHasImage(true) }
        )
      })
    }
  }

  const getLineTextColor = (): string => {
    if (isDefined(backgroundColor)) {
      if (isColorLight(backgroundColor.r, backgroundColor.g, backgroundColor.b)) {
        return '#000'
      } else {
        return '#fff'
      }
    }
    return '#000'
  }

  const getBackgroundColor = (): string => {
    return formatBackgroundColor(backgroundColor, hasImage, 'transparent')
  }

  const getShowLabel = (): boolean => {
    // Only showing intersection labels for point events
    if (record.isPoint) {
      const eventType = getEventType(fieldInfos, record)
      return eventType === EventType.Intersection
    }

    // For everything else, must have a display value
    const displayValue = getDisplayFieldValue(fields, fieldInfos, record, subtypeLayers)
    if (displayValue === '') return false

    // For line events, show labels as normal
    return true
  }

  const isColorLight = (r: number, g: number, b: number): boolean => {
    return isColorLightUtil(r, g, b)
  }

  const getWidth = (): number => {
    return getSldItemWidth(record.fromMeasure, record.toMeasure, measureRange, contentWidth, record.isPoint, SLD_ICON_WIDTH)
  }

  const getLeft = (): number => {
    return getSldItemLeft(record.fromMeasure, measureRange, contentWidth, record.isPoint, SLD_ICON_WIDTH)
  }

  const getId = (): string => {
    return trackIndex + '-' + record.index
  }

  return (
  <div>
    {isActive && record.hasValue && record.isPoint && (
      <div
        className="sld-item-point-container"
        style={{ left: getLeft(), position: 'absolute' }}>
        <div
          id={getId()}
          className={classNames(
            'sld-item-point-active',
            selectedSldId === getId() ? 'sld-item-selected-point' : '',
            isEdited ? 'sld-item-edited-point' : '')}
          ref={ref}
          style={{ background: 'transparent' }}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          onClick={handleOnMouseClick}
          onDoubleClick={handleOnDoubleClick}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label={getDisplayFieldValue(fields, fieldInfos, record, subtypeLayers)}>
        </div>
        {getShowLabel() && (
          <div
            ref={labelRef}
            className={classNames('sld-item-point-label-wrapper', `label-${labelPosition}`)}
            style={{
              opacity: labelVisible ? 1 : 0,
              pointerEvents: labelVisible ? 'auto' : 'none'
            }}>
            <Label
              className="sld-item-point-label label3"
              centric={true}
              >
              {getIntersectionNameFieldValue(fieldInfos, record, currentRouteInfo)}
            </Label>
          </div>
        )}
      </div>
    )}
    {isActive && record.hasValue && !record.isPoint && (
      <div
        id={getId()}
        ref={ref}
        className={classNames(
          'sld-item-line-active',
          selectedSldId === getId() ? 'sld-item-selected-line' : '',
          isEdited ? 'sld-item-edited-line' : '')}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onClick={handleOnMouseClick}
        onDoubleClick={handleOnDoubleClick}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label={getDisplayFieldValue(fields, fieldInfos, record, subtypeLayers)}
        style={{ width: getWidth(), left: getLeft() }}>
          <div className="sld-item-label-wrapper">
            <Label
              className="sld-item-label title3"
              centric={true}
              style={{
                color: getLineTextColor(),
                background: getBackgroundColor(),
                visibility: getShowLabel() ? 'visible' : 'hidden'
              }}>
              {getDisplayFieldValue(fields, fieldInfos, record, subtypeLayers)}
            </Label>
          </div>
      </div>
    )}
    {!isActive && record.hasValue && record.isPoint && (
      <div
        id={getId()}
        className="sld-item-point-inactive"
        style={{ width: '24px', left: getLeft(), background: 'transparent' }}>
          <calcite-icon
            icon='bullet-point-large'
            scale='m'
            css={css`--calcite-icon-color: ${theme.sys.color.action.disabled.text};`}
          />
      </div>
    )}
    {!isActive && record.hasValue && !record.isPoint && (
      <div
        id={getId()}
        className="sld-item-line-inactive"
        style={{ width: getWidth(), left: getLeft() }}>
      </div>
    )}
  </div>
  )
}
