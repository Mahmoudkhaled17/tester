/** @jsx jsx */
import { React, jsx, hooks, type ImmutableArray, Immutable, defaultMessages as jimuUIDefaultMessages, type ImmutableObject, type FieldSchema } from 'jimu-core'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { Select } from 'jimu-ui'
import defaultMessages from './translations/default'
import { equalsIgnoreCase, getConfigValue, lrsDefaultMessages, type LrsLayer, LrsLayerType, ModeType, type ReferentProperties } from 'widgets/shared-code/lrs'
import type { SettingChangeFunction } from 'jimu-for-builder'
import type { IMConfig } from '../config'

interface Props {
  widgetId: string
  index: number
  config: IMConfig
  activeMapViewId: string
  onSettingChange: SettingChangeFunction
}

export function ReferentItemConfig (props: Props) {
  const { widgetId, index, config, activeMapViewId, onSettingChange } = props

  const useConfigValue = (key: string, fallback: any) => {
    return React.useMemo(() => {
      return getConfigValue(config, key, activeMapViewId) || fallback
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, activeMapViewId])
  }

  const lrsLayers = useConfigValue('lrsLayers', []) as ImmutableArray<LrsLayer>
  const referentItem = lrsLayers[index]

  const getI18nMessage = hooks.useTranslation(defaultMessages, lrsDefaultMessages, jimuUIDefaultMessages)
  const [itemLabel, setItemLabel] = React.useState(referentItem?.name)

  const getReferentProperties = (referentItem: ImmutableObject<LrsLayer>): ImmutableObject<ReferentProperties> => {

    if (!referentItem) {
      return Immutable({}) as ImmutableObject<ReferentProperties>
    }

    switch (referentItem.layerType) {
      case LrsLayerType.Event:
        return referentItem.eventInfo.referentProperties
      case LrsLayerType.Intersection:
        return referentItem.intersectionInfo.referentProperties
      case LrsLayerType.CalibrationPoint:
        return referentItem.calibrationPointInfo.referentProperties
      case LrsLayerType.Addressing:
        return referentItem.addressingInfo.referentProperties
      case LrsLayerType.NonLrs:
        return referentItem.nonLrsInfo.referentProperties
      default:
        return Immutable({}) as ImmutableObject<ReferentProperties>
    }
  }

  const referentProperties = React.useMemo(() => {
    if (referentItem) {
      return getReferentProperties(referentItem)
    }
    return {} as ReferentProperties
  }, [referentItem])

  const [selectedField, setSelectedField] = React.useState(referentProperties?.layerFields[0]?.name)

  React.useEffect(() => {
    // Update if label has changed.
    if (referentItem?.name && itemLabel !== referentItem?.name) {
      setItemLabel(referentItem?.name)
      setSelectedField(referentProperties?.layerFields[0]?.name)
    }
    if (referentItem?.displayField) {
      if (referentProperties?.layerFields.find(field => equalsIgnoreCase(field.name, referentItem.displayField))) {
        setSelectedField(referentItem?.displayField)
      } else {
        setSelectedField(referentProperties?.layerFields[0]?.name)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referentItem?.name])

  const onLayerChanged = React.useCallback((index: number, updatedLayerItems, dsUpdateRequired = false) => {
    let layers: ImmutableArray<LrsLayer> = lrsLayers ?? Immutable([])
    layers = Immutable.set(layers, index, updatedLayerItems)

    // Update widget json
    if (config.mode === ModeType.Map) {
      const mapViewId = activeMapViewId
      const mapViewConfig = config.mapViewsConfig?.[mapViewId]
      const updatedMapViewsConfig = mapViewConfig.set('lrsLayers', layers)
      const updatedConfig = config.setIn(['mapViewsConfig', mapViewId], updatedMapViewsConfig)
      console.log('updateConfig', updatedConfig)
      onSettingChange({
        id: widgetId,
        config: updatedConfig,
      })
    } else {
      onSettingChange({
        id: widgetId,
        config: config.set('lrsLayers', layers),
      })
    }
  }, [lrsLayers, config, activeMapViewId, onSettingChange, widgetId])

  const renderFields: () => React.JSX.Element[] = () => {
    const layerFields: FieldSchema[] = referentProperties?.layerFields as any
    if (layerFields?.length === 0) return []
    const fieldsDiv = []
    layerFields.forEach((field, i) => {
      fieldsDiv.push(<option key={i} value={field.name}>{field.alias}</option>)
    })
    return fieldsDiv
  }

  const onPropertyChanged = (value) => {
    setSelectedField(value)
    const newItem = referentItem.set('displayField', value)
    onLayerChanged(index, newItem, false)
  }

  return (
    <SettingSection role='group' aria-label={getI18nMessage('configureDisplayField')} title={getI18nMessage('configureDisplayField')}>
        <SettingRow flow='wrap'>
          <Select
            aria-label={getI18nMessage('configureDisplayField')}
            className='w-100'
            size='sm'
            value={selectedField}
            onChange={e => { onPropertyChanged(e.target.value) }}
          >
          {renderFields()}
        </Select>
      </SettingRow>
    </SettingSection>
  )
}