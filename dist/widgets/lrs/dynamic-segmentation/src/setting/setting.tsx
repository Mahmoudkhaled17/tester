/** @jsx jsx */
import {
  Immutable,
  type ImmutableArray,
  type ImmutableObject,
  React,
  jsx
} from 'jimu-core'
import { Select, hooks, defaultMessages as jimuUIDefaultMessages } from 'jimu-ui'
import type { SettingChangeFunction, AllWidgetSettingProps } from 'jimu-for-builder'
import type { IMConfig } from '../config'
import defaultMessages from './translations/default'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import { type LrsLayer, LrsLayerType, isDefined, isConflictPreventionEnabled, ModeType, lrsDefaultMessages, LrsLoader, EmptyPlaceholder, getAttributeSets, type MapViewConfig, getDefaultAttributeSet } from 'widgets/shared-code/lrs'
import { constructSettingsPerView, getNetworkDefaultScale, resetConfig, setValuesForView } from '../common/utils'
import { LayerConfig } from './layer-config'
import { DefaultSettings } from './default-settings'
import { OrientedImagerySettings } from './oriented-imagery-settings'


const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const { id, intl, widgetId, config, useMapWidgetIds, portalUrl, theme, onSettingChange } = props

  const [selectedIndex, setSelectedIndex] = React.useState(-1)
  const [mapViewIdMapSettings, setMapViewIdMapSettings] = React.useState<string>('')
  const [mapViewIdLayerSettings, setMapViewIdLayerSettings] = React.useState<string>('')
  const [idToNameMap, setIdToNameMap] = React.useState<{ [key: string]: string }>({})

  const useConfigRef = React.useRef(config)
  const isLocalUpdate = React.useRef(false)

  // Sync ref during render so all derived values and callbacks see the latest config.
  // When a local update is pending, keep the ref's ahead-of-Redux value until Redux catches up.
  if (!isLocalUpdate.current) {
    useConfigRef.current = config
  } else if (config.mapViewsConfig === useConfigRef.current.mapViewsConfig) {
    // Redux has caught up with our local update — safe to sync
    isLocalUpdate.current = false
    useConfigRef.current = config
  }

  const isMapMode = useConfigRef.current.mode === ModeType.Map
  const hasMap = useMapWidgetIds?.length > 0

  const hasConfig =
    (!isMapMode && useConfigRef.current.lrsLayers.length > 0) ||
    (isMapMode && useConfigRef.current.mapViewsConfig && Object.keys(useConfigRef.current.mapViewsConfig).length > 0)
  const hasLrsConfig =
    (!isMapMode && useConfigRef.current.lrsLayers && useConfigRef.current.lrsLayers.length !== 0) ||
    (isMapMode &&
      useConfigRef.current.settingsPerView &&
      useConfigRef.current.settingsPerView[mapViewIdMapSettings])
  const supportedLrsTypes = Immutable([
    LrsLayerType.Event,
    LrsLayerType.LineEvent,
    LrsLayerType.PointEvent,
    LrsLayerType.Network,
    LrsLayerType.Intersection,
    LrsLayerType.UtilityNetwork
  ])
  const requiredLrsTypes = Immutable([
    LrsLayerType.LineEvent,
    LrsLayerType.Network
  ])

  const getI18nMessage = hooks.useTranslate(defaultMessages, jimuUIDefaultMessages, lrsDefaultMessages)

  //#region useEffects
  React.useEffect(() => {
    if (useConfigRef.current.mode === undefined) {
      const newMode = useConfigRef.current.lrsLayers.length > 0 ? ModeType.Layer : ModeType.Map
      props.onSettingChange({
        id: widgetId,
        config: useConfigRef.current.set('mode', newMode)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //#endregion

  //#region utility
  const updateWidgetJson: SettingChangeFunction = React.useCallback((...args) => {
    const [changedWidgetJson, ...restArgs] = args
    const widgetJson = Object.assign({id: id, ...changedWidgetJson })
    onSettingChange(widgetJson, ...restArgs)
  }, [id, onSettingChange])

  const onMapSelectionChanged = React.useCallback((event) => {
    const selectedMapId = event.target.value
    setMapViewIdMapSettings(selectedMapId)
  }, [])
  //#endregion

  //#region LrsLoader
  const handleMapWidgetIdUpdated = (values: string[], mode: ModeType) => {
    isLocalUpdate.current = false
    props.onSettingChange({
      id: widgetId,
      config: resetConfig(useConfigRef.current, mode),
      useMapWidgetIds: values,
    })
  }

  const handleReset = React.useCallback((mode: ModeType) => {
    isLocalUpdate.current = false
    onSettingChange({
      id: widgetId,
      config: resetConfig(useConfigRef.current, mode),
      useDataSources: [],
    })
  }, [onSettingChange, widgetId])

  const handleSelectionChanged = React.useCallback((index: number, mapId: string) => {
    setSelectedIndex(index)
    if (isMapMode && mapId !== '') {
      setMapViewIdLayerSettings(mapId)
    }
  }, [isMapMode])

  const handleLrsLayersUpdated = React.useCallback(async (lrsLayers: ImmutableArray<LrsLayer>, allDataSources: any) => {
    // Update the configuration with the new LRS layers
    let updatedConfig = useConfigRef.current.set('lrsLayers', lrsLayers)

    const network = updatedConfig.lrsLayers.find((layer) => layer.layerType === LrsLayerType.Network)
    if (isDefined(network)) {
      const conflictPreventionEnabled = await isConflictPreventionEnabled(network.lrsUrl)
      updatedConfig = updatedConfig.setIn(['conflictPreventionEnabled'], conflictPreventionEnabled)

      const allAttributeSets = await getAttributeSets(network.lrsUrl, portalUrl)
      const defaultLineAttributeSet = getDefaultAttributeSet(Immutable(allAttributeSets), updatedConfig.defaultLineAttributeSet, false)
      const defaultPointAttributeSet = getDefaultAttributeSet(Immutable(allAttributeSets), updatedConfig.defaultPointAttributeSet, true)
      const defaultScale = getNetworkDefaultScale(network.networkInfo?.unitsOfMeasure)

      updatedConfig = updatedConfig.setIn(['attributeSets'], allAttributeSets)
        .setIn(['defaultLineAttributeSet'], defaultLineAttributeSet)
        .setIn(['defaultPointAttributeSet'], defaultPointAttributeSet)
        .setIn(['defaultDiagramScale'], defaultScale)
        .setIn(['defaultNetwork'], network.name)
    }

    // Save the updated configuration and data sources
    updateWidgetJson(
      {
      config: updatedConfig,
      useDataSources: Object.values(allDataSources.useDataSourceMap)
      },
      allDataSources.outputDataSources,
    )
  }, [portalUrl, updateWidgetJson])

  const isRunning = React.useRef(false)
  const waitForSemaphore = async () => {
    while (isRunning.current) {
      await new Promise((resolve) => { setTimeout(resolve, 10) }) // Wait for 10ms before checking again
    }
  }

  const handleMapViewsConfigUpdated = React.useCallback(async (
      mapViewsConfig: ImmutableObject<{ [jimuMapViewId: string]: ImmutableObject<MapViewConfig> }>,
      mapIdToNameMap: { [key: string]: string },
      allDataSources: any,
      update: boolean
    ) => {
    // Wait for the semaphore to be released
    // This prevents multiple calls to this function from running at the same time
    await waitForSemaphore()
    isRunning.current = true

    let updatedConfig = useConfigRef.current
    try {
      for (const mapId in mapViewsConfig) {
        if (!update) {
          if (!updatedConfig.mapViewsConfig?.[mapId]) {
            updatedConfig = updatedConfig.setIn(['mapViewsConfig', mapId], mapViewsConfig[mapId])
          }
          if (mapViewIdMapSettings === '') {
            setMapViewIdMapSettings(mapId)
          }
          setIdToNameMap(mapIdToNameMap)
        } else {
          // Update the configuration with the new map views configuration
          updatedConfig = updatedConfig.setIn(['mapViewsConfig', mapId], mapViewsConfig[mapId])

          // Update the LRS layers for the specific map view
          const mapViewConfig = mapViewsConfig[mapId]
          let settingForView = useConfigRef.current.settingsPerView?.[mapId] || constructSettingsPerView()


          const network = mapViewConfig.lrsLayers.find((layer) => layer.layerType === LrsLayerType.Network)
          if (isDefined(network)) {
            const conflictPreventionEnabled = await isConflictPreventionEnabled(network.lrsUrl)
            updatedConfig = updatedConfig.setIn(['conflictPreventionEnabled'], conflictPreventionEnabled)

            const allAttributeSets = await getAttributeSets(network.lrsUrl, portalUrl)
            const defaultLineAttributeSet = getDefaultAttributeSet(Immutable(allAttributeSets), settingForView.defaultLineAttributeSet, false)
            const defaultPointAttributeSet = getDefaultAttributeSet(Immutable(allAttributeSets), settingForView.defaultPointAttributeSet, true)
            const defaultScale = getNetworkDefaultScale(network.networkInfo?.unitsOfMeasure)

            settingForView = settingForView.setIn(['attributeSets'], allAttributeSets)
              .setIn(['defaultLineAttributeSet'], defaultLineAttributeSet)
              .setIn(['defaultPointAttributeSet'], defaultPointAttributeSet)
              .setIn(['defaultDiagramScale'], defaultScale)
              .setIn(['defaultNetwork'], network.name)
          }

          settingForView = await setValuesForView(settingForView, mapViewConfig.lrsLayers)

          if (!updatedConfig?.settingsPerView) {
            updatedConfig = updatedConfig.set('settingsPerView', Immutable({}))
          }
          const settingsPerView = updatedConfig.settingsPerView.set(mapId, settingForView)
          updatedConfig = updatedConfig.set('settingsPerView', settingsPerView)

          if (mapViewIdMapSettings === '') {
            setMapViewIdMapSettings(mapId)
          }
          setIdToNameMap(mapIdToNameMap)
        }
      }
      updateWidgetJson(
        {
        config: updatedConfig,
        useDataSources: Object.values(allDataSources.useDataSourceMap)
        },
        allDataSources.outputDataSources,
      )
    } finally {
      // Release the semaphore
      useConfigRef.current = updatedConfig
      isLocalUpdate.current = true
      isRunning.current = false
    }
  }, [mapViewIdMapSettings, portalUrl, updateWidgetJson])
 //#endregion

  return (
    <div className='setting-add-point-event h-100'>
      <div className='jimu-widget-setting setting-add-point-event__setting-content h-100'>
        <LrsLoader
          intl={intl}
          portalUrl={portalUrl}
          theme={theme}
          widgetId={widgetId}
          mode={useConfigRef.current.mode}
          useMapWidgetIds={useMapWidgetIds}
          lrsLayers={useConfigRef.current.lrsLayers}
          mapViewsConfig={useConfigRef?.current?.mapViewsConfig}
          supportedLrsTypes={supportedLrsTypes}
          requiredLrsTypes={requiredLrsTypes}
          outputDataSourceWidgetType='sld'
          onLrsLayersUpdated={handleLrsLayersUpdated}
          onMapViewsConfigUpdated={handleMapViewsConfigUpdated}
          onMapWidgetSelected={handleMapWidgetIdUpdated}
          onReset={handleReset}
          onSelectionChanged={handleSelectionChanged}>
          {selectedIndex > -1 &&
            <LayerConfig
              widgetId={widgetId}
              config={useConfigRef.current}
              index={selectedIndex}
              activeMapViewId={mapViewIdLayerSettings}
              onSettingChange={onSettingChange}
            />
          }
        </LrsLoader>
        {hasMap && hasLrsConfig && (
          <React.Fragment>
            {Object.keys(idToNameMap).length > 1 && (
              <SettingSection role='none'>
                <SettingRow flow='wrap' label={getI18nMessage('selectMapToEditSettings')}>
                  <Select className='w-100' size='sm' value={mapViewIdMapSettings} onChange={onMapSelectionChanged}>
                    {Object.keys(idToNameMap).map((mapId) => {
                      return (
                        <option key={mapId} value={mapId}>
                          {idToNameMap[mapId]}
                        </option>
                      )
                    })}
                  </Select>
                </SettingRow>
              </SettingSection>
            )}
          </React.Fragment>
        )}
        {hasConfig && hasLrsConfig && (
          <React.Fragment>
            <DefaultSettings intl={intl} widgetId={widgetId} config={useConfigRef.current} activeMapViewId={mapViewIdMapSettings} onSettingChange={onSettingChange} />
            <OrientedImagerySettings intl={intl} widgetId={widgetId} config={useConfigRef.current} activeMapViewId={mapViewIdMapSettings} onSettingChange={onSettingChange} />
          </React.Fragment>
        )}
        {!isMapMode && !hasConfig && !hasLrsConfig && <EmptyPlaceholder isMapMode={false} />}
        {isMapMode && !hasMap && <EmptyPlaceholder isMapMode={true} />}
      </div>
    </div>
  )
}


export default Setting
