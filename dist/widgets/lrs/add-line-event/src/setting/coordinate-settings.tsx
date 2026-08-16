/** @jsx jsx */
import { React, jsx, hooks, type IntlShape, type ImmutableArray } from 'jimu-core'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { CollapsablePanel, NumericInput, Select } from 'jimu-ui'
import defaultMessages from './translations/default'
import { type CoordinateConfig, getConfigValue, GetEsriUnits, GetUnits, lrsDefaultMessages, type LrsLayer, SpatialReferenceFrom, updateConfig, type DefaultInfo } from 'widgets/shared-code/lrs'
import type { IMConfig } from '../config'
import type { SettingChangeFunction } from 'jimu-for-builder'

interface Props {
  intl: IntlShape
  widgetId: string
  config: IMConfig
  activeMapViewId: string
  onSettingChange: SettingChangeFunction
}

export function CoordinateSettings (props: Props) {
  const { intl, widgetId, config, activeMapViewId, onSettingChange } = props
  const getI18nMessage = hooks.useTranslation(defaultMessages, lrsDefaultMessages)

  const useConfigValue = (key: string, fallback: any) => {
    return React.useMemo(() => {
      return getConfigValue(config, key, activeMapViewId) || fallback
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, activeMapViewId])
  }

  const lrsLayers = useConfigValue('lrsLayers', []) as ImmutableArray<LrsLayer>
  const coordinateConfig = useConfigValue('coordinateConfig', {}) as CoordinateConfig
  const defaultNetwork = useConfigValue('defaultNetwork', '') as DefaultInfo

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

  React.useEffect(() => {
    let needsUpdate = false
    const defaultNetworkInfo = lrsLayers?.find((layer) => layer.name === defaultNetwork?.name)?.networkInfo
    const updatedCoordinateConfig = { ...coordinateConfig }
    if (!coordinateConfig.spatialReferenceType) {
      updatedCoordinateConfig.spatialReferenceType = SpatialReferenceFrom.Map
      needsUpdate = true
    }
    if (!coordinateConfig.searchUnits) {
      updatedCoordinateConfig.searchUnits = defaultNetworkInfo?.unitsOfMeasure ?? GetEsriUnits(units[3], intl)
      needsUpdate = true
    }
    if (!coordinateConfig.searchRadius) {
      updatedCoordinateConfig.searchRadius = defaultNetworkInfo?.searchRadius ?? 1
      needsUpdate = true
    }
    if (needsUpdate) {
      updateConfig(
        widgetId,
        config,
        'coordinateConfig',
        updatedCoordinateConfig,
        activeMapViewId,
        onSettingChange
      )
    }
  }, [activeMapViewId, config, coordinateConfig, defaultNetwork?.name, intl, lrsLayers, onSettingChange, units, widgetId])

  const handleSpatialReferenceFromChange = (e: any) => {
    const updateCoordinateConfig = {...coordinateConfig, spatialReferenceType: e.target.value as SpatialReferenceFrom }
    updateConfig(widgetId, config, 'coordinateConfig', updateCoordinateConfig, activeMapViewId, onSettingChange)
  }

  const handleOffsetUnitChange = (e: any) => {
    const updateCoordinateConfig = {...coordinateConfig, searchUnits: e.target.value }
    updateConfig(widgetId, config, 'coordinateConfig', updateCoordinateConfig, activeMapViewId, onSettingChange)
  }

  const handleRadiusAccept = (value: number) => {
    const updateCoordinateConfig = {...coordinateConfig, searchRadius: value }
    updateConfig(widgetId, config, 'coordinateConfig', updateCoordinateConfig, activeMapViewId, onSettingChange)
  }

  return (
    <React.Fragment>
      <SettingSection className='px-4'>
        <CollapsablePanel
          role='group'
          level={1}
          type='default'
          wrapperClassName='mt-3'
          label={getI18nMessage('coordinateSettings')}
          defaultIsOpen={true}
          disabled={false}
          aria-label={getI18nMessage('coordinateSettings')}>
          <SettingRow flow='wrap' label={getI18nMessage('spatialReferenceType')}>
              <Select
                aria-label={getI18nMessage('spatialReferenceType')}
                className='w-100'
                size='sm'
                value={coordinateConfig?.spatialReferenceType || SpatialReferenceFrom.Map}
                onChange={handleSpatialReferenceFromChange}
              >
                <option value={SpatialReferenceFrom.Map}>{getI18nMessage('map')}</option>
                <option value={SpatialReferenceFrom.Lrs}>{getI18nMessage('lrs')}</option>
              </Select>
          </SettingRow>
          <SettingRow flow='wrap' label={getI18nMessage('searchUnits')}>
            <Select
              aria-label={getI18nMessage('searchUnits')}
              value={coordinateConfig?.searchUnits || units[0]}
              onChange={handleOffsetUnitChange}
              >
                {units.map((unit, i) => {
                  return <option key={i} value={GetEsriUnits(unit, intl)}>{unit}</option>
                })}
            </Select>
          </SettingRow>
          <SettingRow flow='wrap' label={getI18nMessage('radiusWithUnits', { units: GetUnits(coordinateConfig.searchUnits, intl) })}>
            <NumericInput
              size="sm"
              value={coordinateConfig?.searchRadius || 100}
              precision={3}
              onAcceptValue={handleRadiusAccept}
              aria-label={getI18nMessage('radiusWithUnits', { units: GetUnits(coordinateConfig.searchUnits, intl) })}
              className="w-100"
            />
          </SettingRow>
        </CollapsablePanel>
      </SettingSection>
    </React.Fragment>
  )
}