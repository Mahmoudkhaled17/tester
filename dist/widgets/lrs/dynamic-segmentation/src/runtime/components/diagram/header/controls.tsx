/** @jsx jsx */
import { hooks, jsx } from 'jimu-core'
import defaultMessages from '../../../translations/default'
import { Tooltip } from 'jimu-ui'
import type { MeasureRange } from 'widgets/lrs/dynamic-segmentation/src/config'
import 'calcite-components'

export interface ControlsProps {
  sidebarWidth: number
  bodyWidth: number
  contentWidth: number
  zoom: number
  measureRange: MeasureRange
  scrollPosition: number
  onZoomChange: (zoom: number) => void
  onNavForwardOrBack: (forward: boolean) => void
  onNavStartOrEnd: (end: boolean) => void
}

export function Controls (props: ControlsProps) {
  const { sidebarWidth, zoom, onZoomChange, onNavForwardOrBack, onNavStartOrEnd } = props
  const getI18nMessage = hooks.useTranslation(defaultMessages)

  const handleZoomOut = () => {
    if (zoom / 2 < 1) {
      onZoomChange(1)
    } else {
      onZoomChange(zoom / 2)
    }
  }

  const handleZoomIn = () => {
    // Double the zoom level on each click. Ruler.tsx now supports zoom
    // levels that exceed 1 unit of measure, so there is no upper limit on zoom.
    onZoomChange(zoom * 2)
  }

  const handleNavBack = () => {
    onNavForwardOrBack(false)
  }

  const handleNavForward = () => {
    onNavForwardOrBack(true)
  }

  const handleNavStart = () => {
    onNavStartOrEnd(false)
  }

  const handleNavEnd = () => {
    onNavStartOrEnd(true)
  }

  return (
  <div className="sidebar-header d-flex" style={{ width: sidebarWidth }}>
    <Tooltip
      placement='auto'
      title={getI18nMessage('navStart')}
      showArrow
      enterDelay={300}
      enterNextDelay={1000}>
      <div className="sidebar-icon">
        <calcite-icon
          icon="chevron-start"
          scale="m"
          textLabel={getI18nMessage('navStart')}
          onClick={handleNavStart}/>
      </div>
    </Tooltip>
    <Tooltip
      placement='auto'
      title={getI18nMessage('navBack')}
      showArrow
      enterDelay={300}
      enterNextDelay={1000}>
      <div className="sidebar-icon">
        <calcite-icon
          icon="chevron-left"
          scale="m"
          textLabel={getI18nMessage('navBack')}
          onClick={handleNavBack}/>
      </div>
    </Tooltip>
    <Tooltip
      placement='auto'
      title={getI18nMessage('zoomOut')}
      showArrow
      enterDelay={300}
      enterNextDelay={1000}>
      <div className="sidebar-icon">
        <calcite-icon
          icon="minus-circle"
          scale="m"
          textLabel={getI18nMessage('zoomOut')}
          onClick={handleZoomOut} />
      </div>
    </Tooltip>
    <Tooltip
      placement='auto'
      title={getI18nMessage('zoomIn')}
      showArrow
      enterDelay={300}
      enterNextDelay={1000}>
      <div className="sidebar-icon">
        <calcite-icon
        icon="plus-circle"
        scale="m"
        textLabel={getI18nMessage('zoomIn')}
        onClick={handleZoomIn} />
      </div>
    </Tooltip>
    <Tooltip
      placement='auto'
      title={getI18nMessage('navForward')}
      showArrow
      enterDelay={300}
      enterNextDelay={1000}>
      <div className="sidebar-icon">
        <calcite-icon
        icon="chevron-right"
        scale="m"
        textLabel={getI18nMessage('navForward')}
        onClick={handleNavForward}/>
      </div>
    </Tooltip>
    <Tooltip
      placement='auto'
      title={getI18nMessage('navEnd')}
      showArrow
      enterDelay={300}
      enterNextDelay={1000}>
      <div className="sidebar-icon">
        <calcite-icon
        icon="chevron-end"
        scale="m"
        textLabel={getI18nMessage('navEnd')}
        onClick={handleNavEnd}/>
      </div>
    </Tooltip>
  </div>
  )
}
