/** @jsx jsx */
import { React, jsx, hooks, type IntlShape, type ImmutableArray } from 'jimu-core'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { CollapsablePanel, Select } from 'jimu-ui'
import defaultMessages from './translations/default'
import { getConfigValue, GetEsriUnits, lrsDefaultMessages, type LrsLayer, type ReferentConfig, updateConfig } from 'widgets/shared-code/lrs'
import type { IMConfig } from '../config'
import type { SettingChangeFunction } from 'jimu-for-builder'
interface Props {
  intl: IntlShape
  widgetId: string
  config: IMConfig
  activeMapViewId: string
  onSettingChange: SettingChangeFunction
}

export function ReferentSettings (props: Props) {
  const { intl, widgetId, config, activeMapViewId, onSettingChange } = props
  const getI18nMessage = hooks.useTranslation(defaultMessages, lrsDefaultMessages)

  const useConfigValue = (key: string, fallback: any) => {
    return React.useMemo(() => {
      return getConfigValue(config, key, activeMapViewId) || fallback
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, activeMapViewId])
  }

  const units = React.useMemo(() => [
    getI18nMessage('inches'),
    getI18nMessage('feet'),
    getI18nMessage('yards'),
    getI18nMessage('miles'),
    getI18nMessage('nauticalMiles'),
    getI18nMessage('millimeters'),
    getI18nMessage('centimeters'),
    getI18nMessage('meters'),
    getI18nMessage('kilometers'),
    getI18nMessage('decimeters'),
    getI18nMessage('intFeet'),
    getI18nMessage('intMiles')
  ], [getI18nMessage])

  const getUnit = React.useCallback((unit?: string) => {
    if (unit) {
      return GetEsriUnits(units[unit], intl)
    }
    return GetEsriUnits(units[0], intl)
  }, [units, intl])

  const getFallbackReferentLayer = React.useCallback((lrsLayers) => {
     for (const layer of lrsLayers) {
        if (layer.isReferent) {
          return layer
        }
     }
  }, [])

  const lrsLayers = useConfigValue('lrsLayers', []) as ImmutableArray<LrsLayer>
  const referentLayers = React.useMemo(() => lrsLayers.filter(item => item.isReferent), [lrsLayers])
  const referentConfig = useConfigValue('defaultReferentConfig', null) as ReferentConfig

  React.useEffect(() => {
    if (referentLayers.length > 0) {
      const isValid = referentConfig?.defaultReferentLayer &&
        referentLayers.some((l) => l.id === referentConfig.defaultReferentLayer.id)
      if (!isValid) {
        const initialReferentConfig: ReferentConfig = {
          defaultReferentLayer: getFallbackReferentLayer(referentLayers),
          defaultOffsetUnit: referentConfig?.defaultOffsetUnit || getUnit()
        }
        updateConfig(widgetId, config, 'defaultReferentConfig', initialReferentConfig, activeMapViewId, onSettingChange)
      }
    }
  }, [config, activeMapViewId, referentLayers, getUnit, widgetId, onSettingChange, referentConfig, getFallbackReferentLayer])

  const setDefaultOffsetUnitChange = (event) => {
    const offsetUnit = event?.target?.value
    const newResults = {...referentConfig, defaultOffsetUnit: offsetUnit}
    updateConfig(widgetId, config, 'defaultReferentConfig', newResults, activeMapViewId, onSettingChange)
  }

  const setDefaultReferentChange = (event) => {
    const referentItemLayerId = event?.target?.value
    const referentItem = referentLayers.find((item) => item.id === referentItemLayerId)
    const newResults = {...referentConfig, defaultReferentLayer: referentItem}
    updateConfig(widgetId, config, 'defaultReferentConfig', newResults, activeMapViewId, onSettingChange)
  }

  const renderReferentDropdown = () => {
    if (referentLayers && referentLayers.length > 0 && referentConfig) {
      const effectiveReferentLayerId = referentLayers.some((l) => l.id === referentConfig?.defaultReferentLayer?.id)
        ? referentConfig.defaultReferentLayer.id
        : referentLayers[0]?.id
      return (
        <SettingRow flow="wrap" label={getI18nMessage('defaultReferent')}>
          <Select
              aria-label={getI18nMessage('defaultReferent')}
              value={effectiveReferentLayerId}
              onChange={setDefaultReferentChange}
            >
              {referentLayers.map((item, i) => {
                return <option key={i} value={item.id}>{item.name}</option>
              })}
          </Select>
        </SettingRow>
      )
    }
  }

  const renderOffsetUnitDropdown = () => {
    if (!referentConfig) return null
    return (
      <SettingRow flow="wrap" label={getI18nMessage('defaultOffsetUnit')}>
        <Select
            aria-label={getI18nMessage('defaultOffsetUnit')}
            value={referentConfig.defaultOffsetUnit || getUnit()}
            onChange={setDefaultOffsetUnitChange}
          >
          {units.map((unit, i) => {
            return <option key={i} value={GetEsriUnits(unit, intl)}>{unit}</option>
          })}
        </Select>
      </SettingRow>
    )
  }

  return (
    <React.Fragment>
      <SettingSection className='px-4'>
        <CollapsablePanel
          role='group'
          level={1}
          type='default'
          wrapperClassName='mt-3'
          label={getI18nMessage('locationOffsetSettings')}
          defaultIsOpen={true}
          disabled={false}
          aria-label={getI18nMessage('locationOffsetSettings')}>
          {renderReferentDropdown()}
          {renderOffsetUnitDropdown()}
        </CollapsablePanel>
      </SettingSection>
    </React.Fragment>
  )
}