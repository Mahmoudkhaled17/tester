/** @jsx jsx */
import { React, jsx, hooks, type IntlShape, getAppStore } from 'jimu-core'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { CollapsablePanel, Option, Select, Tooltip, NumericInput, defaultMessages as jimuUIDefaultMessages } from 'jimu-ui'
import defaultMessages from './translations/default'
import { getConfigValue, updateConfig } from 'widgets/shared-code/lrs'
import type { IMConfig } from '../config'
import type { SettingChangeFunction } from 'jimu-for-builder'
import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'

interface Props {
  intl: IntlShape
  widgetId: string
  config: IMConfig
  activeMapViewId: string
  onSettingChange: SettingChangeFunction
}

export function OrientedImagerySettings (props: Props) {
  const { widgetId, config, activeMapViewId, onSettingChange } = props
  const getI18nMessage = hooks.useTranslation(defaultMessages, jimuUIDefaultMessages)

  const useConfigValue = (key: string, fallback: any) => {
    return React.useMemo(() => {
      const value = getConfigValue(config, key, activeMapViewId)
      return value !== undefined ? value : fallback
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, activeMapViewId])
  }

  const orientedImageryWidgetId = useConfigValue('orientedImageryWidgetId', '')
  const searchTolerance = useConfigValue('searchTolerance', 50)
  const searchUnit = useConfigValue('searchUnit', 'esriSRUnit_Foot')

  const appState = getAppStore().getState()
  const widgets = appState.appStateInBuilder.appConfig.widgets

  const orientedImageryWidgets = React.useMemo(() => {
    const keys = Object.keys(widgets)
    return keys.filter(key => widgets[key].manifest.name === 'oriented-imagery-viewer')
      .map(key => ({
        id: key,
        label: widgets[key].label || widgets[key].manifest.label || 'Oriented Imagery Widget'
      }))
  }, [widgets])

  const hasOIWidget = React.useMemo(() => orientedImageryWidgets.length > 0, [orientedImageryWidgets])

  const setOrientedImageryWidget = (value: string) => {
    updateConfig(widgetId, config, 'orientedImageryWidgetId', value, activeMapViewId, onSettingChange)
  }

  const setSearchTolerance = (value: number) => {
    updateConfig(widgetId, config, 'searchTolerance', value, activeMapViewId, onSettingChange)
  }

  const setSearchUnit = (value: string) => {
    updateConfig(widgetId, config, 'searchUnit', value, activeMapViewId, onSettingChange)
  }

  if (!hasOIWidget) {
    updateConfig(widgetId, config, 'orientedImageryWidgetId', '', activeMapViewId, onSettingChange)
    return null
  }

  return (
    <React.Fragment>
      <SettingSection className="px-4">
        <CollapsablePanel
        role="group"
        level={1}
        type="default"
        wrapperClassName="mt-3"
        label={getI18nMessage('orientedImagerySettings')}
        defaultIsOpen={true}
        disabled={false}
        aria-label={getI18nMessage('orientedImagerySettings')}>
          <SettingRow className='w-100' flow="wrap" tag='label' label={
            <div className="d-flex justify-content-between align-items-center w-100">
              <span>{getI18nMessage('orientedImageryWidget')}</span>
              <Tooltip title={getI18nMessage('orientedImageryWidgetTooltip')} showArrow placement='left'>
                <span className="d-flex align-items-center">
                  <InfoOutlined />
                </span>
              </Tooltip>
            </div>
            }>
            <Select
              aria-label={getI18nMessage('orientedImageryWidget')}
              className='w-100'
              size='sm'
              value={orientedImageryWidgetId}
              onChange={(e) => { setOrientedImageryWidget(e.target.value) }}>
                <Option value="">{getI18nMessage('none')}</Option>
                {orientedImageryWidgets.map((widget) => (
                  <Option key={widget.id} value={widget.id}>{widget.label}</Option>
                ))}
            </Select>
          </SettingRow>
          {orientedImageryWidgetId && (
            <SettingRow className='w-100' flow="wrap" tag='label' label={
              <div className="d-flex justify-content-between align-items-center w-100">
                <span>{getI18nMessage('searchTolerance')}</span>
                <Tooltip title={getI18nMessage('searchToleranceTooltip')} showArrow placement='left'>
                  <span className="d-flex align-items-center">
                    <InfoOutlined />
                  </span>
                </Tooltip>
              </div>
              }>
              <div className="d-flex w-100" style={{ gap: '8px' }}>
                <NumericInput
                  aria-label={getI18nMessage('searchTolerance')}
                  className='flex-grow-1'
                  size='sm'
                  value={searchTolerance}
                  min={0}
                  onChange={(value) => { setSearchTolerance(value) }}
                />
                <Select
                  aria-label={getI18nMessage('searchUnit')}
                  style={{ minWidth: '120px' }}
                  size='sm'
                  value={searchUnit}
                  onChange={(e) => { setSearchUnit(e.target.value) }}>
                  <Option value="meters">{getI18nMessage('meters')}</Option>
                  <Option value="miles">{getI18nMessage('statuteMiles')}</Option>
                  <Option value="feet">{getI18nMessage('feet')}</Option>
                  <Option value="kilometers">{getI18nMessage('kilometers')}</Option>
                  <Option value="nautical-miles">{getI18nMessage('nauticalMiles')}</Option>
                  <Option value="us-nautical-miles">{getI18nMessage('usNauticalMiles')}</Option>
                </Select>
              </div>
            </SettingRow>
          )}
        </CollapsablePanel>
      </SettingSection>
    </React.Fragment>
  )
}
