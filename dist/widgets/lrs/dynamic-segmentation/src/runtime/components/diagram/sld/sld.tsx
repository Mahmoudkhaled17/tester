/** @jsx jsx */
import {
  React, jsx
} from 'jimu-core'
import type { SubtypeLayers, MeasureRange, Track, TrackRecord, DynSegFieldInfo } from '../../../../config'
import { Body } from './body'
import { getAllDatasourceFromMapWidgetId } from 'widgets/shared-code/lrs'
import { useDynSegRuntimeState } from '../../../state'

export interface SldProps {
  trackMap: Map<string, Track>
  height: number
  containerWidth: number
  contentWidth: number
  measureRange: MeasureRange
  featureLayer: __esri.FeatureLayer
  subtypeLayers: SubtypeLayers[]
  scrollPos: number
  onItemClick: (trackRecord: TrackRecord, track: Track, fieldInfos: DynSegFieldInfo[]) => void
  onPanToMeasure?: (measure: number, zoom?: number) => void
}

export function Sld (props: SldProps) {
  const { trackMap, height, containerWidth, contentWidth, measureRange, featureLayer, subtypeLayers, scrollPos,onItemClick, onPanToMeasure } = props
  const { jimuMapView } = useDynSegRuntimeState()

  const allLayersDS = React.useMemo(() => {
    if (jimuMapView) {
      return getAllDatasourceFromMapWidgetId(jimuMapView.mapWidgetId)
    }
  }, [jimuMapView])

  return (
  <div
    className="sld"
    style={{ width: containerWidth, height: height }}>
    <Body
      allLayersDS={allLayersDS}
      trackMap={trackMap}
      contentWidth={contentWidth}
      containerWidth={containerWidth}
      measureRange={measureRange}
      featureLayer={featureLayer}
      subtypeLayers={subtypeLayers}
      scrollPos={scrollPos}
      onItemClick={onItemClick}
      onPanToMeasure={onPanToMeasure}/>
  </div>

  )
}
