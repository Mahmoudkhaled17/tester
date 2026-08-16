/** @jsx jsx */
import {
  jsx,
  hooks,
  type DataSource,
  loadArcGISJSAPIModule
} from 'jimu-core'
import { useDynSegRuntimeState } from '../../state'
import 'calcite-components'

import defaultMessages from '../../translations/default'
import { geometryUtils, type JimuMapView } from 'jimu-arcgis'
import { Tooltip } from 'jimu-ui'
import Graphic from 'esri/Graphic'
import React from 'react'

export interface ZoomProps {
  jimuMapView: JimuMapView
  networkDS: DataSource
}

export function Zoom (props: ZoomProps) {
  const getI18nMessage = hooks.useTranslation(defaultMessages)
  const { records, selectedRecordIds, display } = useDynSegRuntimeState()
  const { jimuMapView, networkDS } = props
  const [isZoom, setIsZoom] = React.useState(false)

  React.useEffect(() => {
    if (selectedRecordIds.length === 0) setIsZoom(false)
    else setIsZoom(true)
  }, [selectedRecordIds, display])

  const onZoomClicked = async () => {
    const unionOperator: __esri.unionOperator = await loadArcGISJSAPIModule('esri/geometry/operators/unionOperator')
    const selectedGeometry = []
    //@ts-expect-error
    // TODO: support uniqueIds
    const objectIdFieldName = networkDS.layerDefinition.objectIdField
    if (selectedRecordIds && (selectedRecordIds.length > 0)) {
      records.forEach((record) => {
        const oid = record?.attributes[objectIdFieldName]
        if (selectedRecordIds.includes(oid)) {
          selectedGeometry.push(record.geometry)
        }
      })
    }
    const union = unionOperator.executeMany(selectedGeometry)

    geometryUtils.projectToSpatialReference([union], jimuMapView.view.spatialReference)
      .then((geometryInSR) => {
        const graphicInSR = new Graphic({
          geometry: geometryInSR[0]
        })
        if (graphicInSR?.geometry?.type === 'point') {
          jimuMapView?.view.goTo({
            target: geometryInSR[0] as __esri.Point, zoom: 100
          })
        } else {
          const expandExtent = graphicInSR.geometry.extent.expand(1.25)
          jimuMapView?.view.goTo({ target: expandExtent })
        }
      })
  }

  return (
    <Tooltip
      describeChild={true}
      placement='auto'
      title={getI18nMessage('ZoomLabel')}
      showArrow
      enterDelay={300}
      enterNextDelay={1000}>
      <calcite-action
        text={getI18nMessage('ZoomLabel')}
        icon='zoom-to-object'
        scale='m'
        onClick={onZoomClicked}
        disabled={isZoom ? undefined : true }
      />
    </Tooltip>
  )
}
