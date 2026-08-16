/** @jsx jsx */
import { React, type IntlShape, jsx, type ImmutableArray, type DataSource, type ImmutableObject } from 'jimu-core'
import { DynSegHeader } from './dyn-seg-header'
import { DynSegRow } from './dyn-seg-row'
import type { SubtypeLayers, DynSegFieldInfo, RouteInfoFromDataAction, MessageProp } from '../../../config'
import { useDynSegRuntimeState } from '../../state'
import { useTheme } from 'jimu-theme'
import type { LrsLayer, NetworkInfo } from 'widgets/shared-code/lrs'
import 'calcite-components'

export interface DynSegTableProps {
  intl: IntlShape
  allowEditing?: boolean
  featureLayer: __esri.FeatureLayer
  records: __esri.Graphic[]
  measureHeaders: string[]
  fieldInfo: DynSegFieldInfo[]
  subTypeInfo: SubtypeLayers[]
  layerMap: Map<string, __esri.Layer>
  fieldGroups: Map<string, any>
  contingentValues: Map<string, any>
  networkInfo: ImmutableObject<NetworkInfo>
  currentRouteInfo: RouteInfoFromDataAction
  lrsLayers: ImmutableArray<LrsLayer>
  routeId: string
  networkDS: DataSource
  handleLockToast: (messageProp: MessageProp, reloadOnClose: boolean) => void
}

export function DynSegTable (props: DynSegTableProps) {
  const { intl, networkDS, allowEditing, routeId, lrsLayers, currentRouteInfo, networkInfo, featureLayer, records, measureHeaders, fieldInfo, subTypeInfo, layerMap, fieldGroups, contingentValues, handleLockToast } = props
  const { isLoading } = useDynSegRuntimeState()
  const theme = useTheme()

  React.useEffect(() => {
    if (!isLoading) {
      let retries = 0

      const applyStyles = () => {
        let tableUpdated = false
        let columnHeaderUpdated = false
        let rowHeaderUpdated = false
        let rowBorderUpdated = false

        // Update table container to enable scrolling (required for position:sticky)
        const tableElm = document.querySelector('.dyn-seg-table')
        if (tableElm && tableElm.shadowRoot) {
          const container = tableElm.shadowRoot.querySelector('.table-container')
          if (container) {
            (container as HTMLElement).style.height = '100%';
            (container as HTMLElement).style.overflow = 'auto'
            tableUpdated = true
          }
        }

        // Apply sticky top to ALL column header <th> cells.
        // position:sticky does not work on <tr>, it must be applied to <th>.
        // The corner cell (index 0) also gets left:0 to stay fixed on both axes.
        const columnHeaderElms = document.querySelectorAll('.dyn-seg-column-header')
        if (columnHeaderElms.length > 0) {
          columnHeaderElms.forEach((elm, index) => {
            const th = elm.shadowRoot?.querySelector<HTMLElement>('.content-cell')
            if (th) {
              th.style.position = 'sticky'
              th.style.top = '0'
              th.style.backgroundColor = theme.sys.color.surface.background
              if (index === 0) {
                th.style.left = '0'
                th.style.zIndex = '20' // corner cell sits above both axes
              } else {
                th.style.zIndex = '10'
              }
            }
          })
          columnHeaderUpdated = true
        }

        // Apply sticky left to all first-column data cells (measure column)
        const rowHeaders = document.querySelectorAll('.dyn-seg-row-header')
        if (rowHeaders.length > 0) {
          rowHeaders.forEach((elm) => {
            const td = elm.shadowRoot?.querySelector<HTMLElement>('.content-cell')
            if (td) {
              td.style.position = 'sticky'
              td.style.left = '0'
              td.style.zIndex = '5'
              td.style.backgroundColor = theme.sys.color.surface.background
              td.style.userSelect = 'none'
            }
          })
          rowHeaderUpdated = true
        }

        // Update last row border
        const rows = document.querySelectorAll('.dyn-seg-row')
        const lastRow = rows[rows.length - 1]
        if (lastRow) {
          const container = lastRow.shadowRoot?.querySelector('.interaction-container')
          if (container) {
            const td = container.lastChild
            if (td) {
              (td as HTMLElement).className = '';
              (td as HTMLElement).style.borderBlockEnd = `1px solid ${theme.sys.color.surface.background}`
            }
          }
          rowBorderUpdated = true
        }

        if (!(tableUpdated && columnHeaderUpdated && rowHeaderUpdated && rowBorderUpdated) && retries < 10) {
          retries++
          setTimeout(applyStyles, 1000)
        }
      }

      setTimeout(applyStyles, 1000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <calcite-table
      caption='Dynamic Segmentation Table'
      className='dyn-seg-table'
      bordered
      scale='s'
      layout='auto'
      style={{ height: '100%', width: '100%' }}
    >
    <DynSegHeader fieldInfo={fieldInfo}/>

    {records.map((record, index) => {
      return (
        <DynSegRow
          intl={intl}
          key={index}
          allowEditing={allowEditing}
          rowIndex={index}
          featureLayer={featureLayer}
          record={record}
          rangeHeader={measureHeaders[index]}
          fieldInfos={fieldInfo}
          lastIndex={records.length - 1}
          subTypeInfo={subTypeInfo}
          layerMap={layerMap}
          fieldGroups={fieldGroups}
          contingentValues={contingentValues}
          networkInfo={networkInfo}
          currentRouteInfo={currentRouteInfo}
          lrsLayers={lrsLayers}
          routeId={routeId}
          networkDS={networkDS}
          handleLockToast={handleLockToast}
        />
      )
    })}
    </calcite-table>
  )
}
