/** @jsx jsx */
import {
  React,
  jsx,
  hooks,
  type IntlShape
} from 'jimu-core'
import defaultMessages from '../../translations/default'
import { useDynSegRuntimeState } from '../../state'
import { Tooltip } from 'jimu-ui'
import 'calcite-components'

export interface FieldCalculatorProps {
  dynSegFeatureLayer: __esri.FeatureLayer
  lrsLayers
  attributeSet
  intl: IntlShape
}

export function FieldCalculator (props: FieldCalculatorProps) {
  const getI18nMessage = hooks.useTranslation(defaultMessages)
  const { fieldInfo, display } = useDynSegRuntimeState()
  const [isDisable, setDisable] = React.useState(true)

  React.useEffect(() => {
    if (!fieldInfo || fieldInfo.length === 0) setDisable(true)
    else setDisable(undefined)
  }, [fieldInfo, display])

  return (
    <Tooltip
      describeChild={true}
      placement='auto'
      title={getI18nMessage('fieldCalculatorLabel')}
      showArrow
      enterDelay={300}
      enterNextDelay={1000}>
      <calcite-action
        disabled={isDisable}
        text={getI18nMessage('fieldCalculatorLabel')}
        icon='calculator'
        scale='m'
        id="field-calculator"
      />
    </Tooltip>
  )
}
