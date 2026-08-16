/** @jsx jsx */
import { jsx, hooks } from 'jimu-core'
import defaultMessages from '../../translations/default'
import type { DynSegFieldInfo } from '../../../config'
import 'calcite-components'

export interface DynSegHeaderProps {
  fieldInfo: DynSegFieldInfo[]
}

export function DynSegHeader (props: DynSegHeaderProps) {
  const { fieldInfo } = props
  const getI18nMessage = hooks.useTranslation(defaultMessages)

  return (
    <calcite-table-row
      slot='table-header'
      className='dyn-seg-table-header'>
      <calcite-table-header
        heading={getI18nMessage('measureRange')}
        className='dyn-seg-column-header'
      />
      {fieldInfo.map((field, index) => {
        return field.visible && !field.exclude

          ? <calcite-table-header
            key={index}
            heading={field.originalFieldAlias}
            description={field.eventAlias}
            className='dyn-seg-column-header'
            />
          : null
      })}
    </calcite-table-row>
  )
}
