/** @jsx jsx */
import { React, jsx, type AllWidgetProps, DataSourceManager, type DataSource, type IMState, getAppStore, WidgetState, type ImmutableArray, Immutable, type ImmutableObject } from 'jimu-core'
import { type IMConfig, OperationType, type SettingsPerView } from '../config'
import defaultMessages from './translations/default'
import { defaultMessages as jimuUIDefaultMessages, Paper } from 'jimu-ui'
import iconSBR from './../../icon.svg'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { AddSinglePointEvent } from './components/add-single-point-event'
import { AddMultiplePointEvents } from './components/add-multiple-point-events'
import { checkConflictPrevention, findFirstArcgisMapWidgetId, getConfigValue, getModeType, GraphicsLayerManager, isDefined, isInWidgetController, LrsWidgetPlaceholder, type LrsLayer, LrsLayerType, MapViewLoader, ModeType, lrsDefaultMessages, type RouteInfo, SpatialReferenceFrom } from 'widgets/shared-code/lrs'
import { constructSettingsPerView, setValuesForView } from '../common/utils'
import { getAppConfigAction } from 'jimu-for-builder'

interface ExtraProps {
  selectedRouteInfo: RouteInfo
  selectedNetworkDataSource: DataSource
}

export interface State {
  hideTitle: boolean
  jimuMapView: JimuMapView
  operationType: OperationType
  graphicsManager: GraphicsLayerManager | null
  routeInfoFromDataAction: RouteInfo
  networkDataSourceFromDataAction: DataSource
  activeMapViewId: string
  activeLrsLayers: ImmutableArray<LrsLayer>
  settingPerView?: ImmutableObject<SettingsPerView>
  isConflictPreventionEnabled: boolean
}

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig> & ExtraProps, State> {
  static mapExtraStateProps = (state: IMState,
    props: AllWidgetProps<IMConfig>): ExtraProps => {
    return {
      selectedRouteInfo: props?.mutableStateProps?.selectedRouteInfo,
      selectedNetworkDataSource: props?.mutableStateProps?.selectedNetworkDataSource
    }
  }

  widgetOuterDivId: string

  constructor (props) {
    super(props)

    this.state = {
      hideTitle: false,
      jimuMapView: undefined,
      operationType: OperationType.single,
      graphicsManager: null,
      routeInfoFromDataAction: null,
      networkDataSourceFromDataAction: null,
      activeMapViewId: '',
      activeLrsLayers: this.props.config.lrsLayers,
      settingPerView: constructSettingsPerView(),
      isConflictPreventionEnabled: false
    }
    this.widgetOuterDivId = 'widget-outer-div-' + this.props.id
  }

  supportedLrsLayerTypes: ImmutableArray<LrsLayerType> = Immutable([
    LrsLayerType.Network,
    LrsLayerType.Event,
    LrsLayerType.PointEvent,
    LrsLayerType.Intersection,
    LrsLayerType.Addressing,
    LrsLayerType.PointEvent,
    LrsLayerType.NonLrsPoint,
    LrsLayerType.NonLrs,
    LrsLayerType.CalibrationPoint
  ])

  componentDidMount (): void {
    if (this.props.mutableStatePropsVersion?.selectedDataSource) {
      this.setState({
        networkDataSourceFromDataAction: this.props.selectedNetworkDataSource
      })
    } else if (this.props.mutableStatePropsVersion?.selectedRouteInfo) {
      this.setState({
        routeInfoFromDataAction: this.props.selectedRouteInfo
      })
    }

    const isInWdigetController = isInWidgetController(this.widgetOuterDivId)
    this.setState({ hideTitle: isInWdigetController })
    this.setState({ operationType: this.props.config.defaultType || OperationType.single })
    this.setSettingsPerView()
  }

  componentWillUnmount (): void {
    this.removeGraphicLayers()
  }

  componentDidUpdate (prevProps: AllWidgetProps<IMConfig>, prevState: State): void {
    if (prevState.jimuMapView !== this.state.jimuMapView && isDefined(this.state.jimuMapView)) {
      // Remove any exisiting graphic layers.
      this.removeGraphicLayers()

      // Add new graphic layers.
      this.createGraphicLayers()
    }
    const currentWidgetState = getAppStore()?.getState()?.widgetsRuntimeInfo[this.props.id]?.state
    if (currentWidgetState === WidgetState.Opened || !currentWidgetState) {
      if (this.props?.selectedNetworkDataSource) {
        if ((!prevProps || !prevProps.mutableStatePropsVersion || !prevProps.mutableStatePropsVersion.selectedNetworkDataSource ||
          prevProps?.mutableStatePropsVersion?.selectedNetworkDataSource !== this.props.mutableStatePropsVersion?.selectedNetworkDataSource)) {
          this.setState({
            networkDataSourceFromDataAction: this.props.selectedNetworkDataSource
          })
        }
      }
      // if featureRecord found and prev selected record is not matching with the current then only load the RouteInfo for selected feature
      if (this.props?.selectedRouteInfo) {
        const rteInfo: any = this.props?.selectedRouteInfo
        if (rteInfo && (!prevProps || !prevProps.mutableStatePropsVersion || !prevProps.mutableStatePropsVersion.selectedRouteInfo ||
          prevProps?.mutableStatePropsVersion?.selectedRouteInfo !== this.props.mutableStatePropsVersion?.selectedRouteInfo)) {
          this.setState({
            routeInfoFromDataAction: this.props.selectedRouteInfo
          })
        }
      }
    }

    if (this.state.activeLrsLayers !== prevState.activeLrsLayers) {
      // If the active LRS layers have changed, we need to update the graphic layers.
      const operationType = getConfigValue(this.props.config, 'defaultType', this.state.activeMapViewId, OperationType.single)
      this.setState({ operationType: operationType })
    }

    if (this.state.activeLrsLayers !== prevState.activeLrsLayers) {
      this.setSettingsPerView()
    }

    const { config } = this.props
    const lrsLayers = !config.mode || config.mode === ModeType.Map ? this.state.activeLrsLayers : config.lrsLayers
    if (lrsLayers.length > 0) {
      checkConflictPrevention(lrsLayers[0].lrsUrl).then((isEnabled) => {
        const newValue = isEnabled === null ? false : isEnabled
        if (this.state.isConflictPreventionEnabled !== newValue) {
          this.setState({ isConflictPreventionEnabled: newValue })
        }
      })
    }
  }

  setSettingsPerView = async () => {
    // Get lrs layers and settings for current map view.
    const { config } = this.props
    const lrsLayers = !config.mode || config.mode === ModeType.Map ? this.state.activeLrsLayers : config.lrsLayers
    const isRuntime = !isDefined(config.settingsPerView?.[this.state.activeMapViewId])
    let settingPerView = config.settingsPerView?.[this.state.activeMapViewId] || constructSettingsPerView()
    if (lrsLayers && lrsLayers.length > 0) {
      settingPerView = await setValuesForView(settingPerView, lrsLayers, true, isRuntime)
      this.setState({ settingPerView })
      const newConfig = config.setIn(['settingsPerView', this.state.activeMapViewId], settingPerView)
      getAppConfigAction().editWidgetConfig(this.props.id, newConfig).exec()
    }
  }

  removeGraphicLayers (): void {
    if (this.state.graphicsManager) {
      this.state.graphicsManager.destroy()
      this.setState({ graphicsManager: null })
    }
  }

  createGraphicLayers (): void {
    if (isDefined(this.state.jimuMapView)) {
      this.removeGraphicLayers()
      const graphicsManager = new GraphicsLayerManager({
        jimuMapView: this.state.jimuMapView,
        createHover: true,
        createPicked: true,
        createFlash: true,
        createCoordinate: true
      })
      this.setState({ graphicsManager: graphicsManager })
    }
  }

  clearGraphics (): void {
    this.state.graphicsManager.clearHoverGraphic()
      this.state.graphicsManager.clearPickedGraphic()
      this.state.graphicsManager.clearFlashGraphic()
      this.state.graphicsManager.clearCoordinateGraphic()
  }

  resetDataAction (): void {
    this.setState({ routeInfoFromDataAction: null })
    this.setState({ networkDataSourceFromDataAction: null })
  }


  onActiveViewChange = (activeJimuMapView: JimuMapView) => {
    if (!(activeJimuMapView && activeJimuMapView.view)) {
      return
    }
    this.waitForChildDataSourcesReady(activeJimuMapView).finally(() => {
      this.setState({ jimuMapView: activeJimuMapView })
    })
  }

  waitForChildDataSourcesReady = async (jmv: JimuMapView): Promise<DataSource> => {
    await jmv?.whenAllJimuLayerViewLoaded()
    const ds = DataSourceManager.getInstance().getDataSource(jmv?.dataSourceId)
    if (ds?.isDataSourceSet() && !ds.areChildDataSourcesCreated()) {
      return ds.childDataSourcesReady().then(() => ds).catch(err => ds)
    }
    return Promise.resolve(ds)
  }

  handleOperationTypeChange = (value: OperationType) => {
    this.setState({ operationType: value })
    this.clearGraphics()
  }

  getI18nMessage = (id: string, values?: { [key: string]: any }) => {
    const messages = Object.assign({}, defaultMessages, jimuUIDefaultMessages, lrsDefaultMessages)
    return this.props.intl.formatMessage(
      { id: id, defaultMessage: messages[id] }, values
    )
  }

  handleLrsLayersChanged = (lrsLayers: ImmutableArray<LrsLayer>) => {
    this.setState({ activeLrsLayers: lrsLayers })
  }

  handleViewChange = (view: JimuMapView) => {
    if (view) {
      this.setState({ activeMapViewId: view.id })
    }
    const operationType = getConfigValue(this.props.config, 'defaultType', this.state.activeMapViewId, OperationType.single)
    this.setState({ operationType: operationType })
  }

  private getConfigValues (config: IMConfig, settingPerView: any, activeMapViewId: string): { [key: string]: any } {
    const configKeys = {
      networkLayers: settingPerView.networkLayers,
      eventLayers: settingPerView.eventLayers,
      intersectionLayers: settingPerView.intersectionLayers,
      defaultEvent: settingPerView.defaultEvent,
      defaultNetwork: settingPerView.defaultNetwork,
      defaultMethod: settingPerView.defaultMethod,
      defaultAttributeSet: settingPerView.defaultAttributeSet,
      attributeSets: settingPerView.attributeSets,
      hideEvent: settingPerView.hideEvent,
      hideNetwork: settingPerView.hideNetwork,
      hideType: settingPerView.hideType,
      hideMethod: settingPerView.hideMethod,
      hideAttributeSet: settingPerView.hideAttributeSet,
      hideMeasures: settingPerView.hideMeasures,
      hideDates: settingPerView.hideDates,
      useRouteStartEndDate: settingPerView.useRouteStartEndDate,
      hideAddToDominantRouteOption: settingPerView.hideAddToDominantRouteOption,
      enableAddToDominantRouteOption: settingPerView.enableAddToDominantRouteOption,
      notAllowOverrideEventReplacement: settingPerView.notAllowOverrideEventReplacement,
      defaultReferentConfig: settingPerView.defaultReferentConfig,
      coordinateConfig: settingPerView.coordinateConfig
    }

    return Object.entries(configKeys).reduce<{ [key: string]: any }>((acc, [key, defaultValue]) => {
      acc[key] = getConfigValue(config, key, activeMapViewId, defaultValue)
      return acc
    }, {})
  }

  render () {
    const { config, id, intl } = this.props
    let { useMapWidgetIds } = this.props
    const { mapViewsConfig } = config

    const lrsLayers = !config.mode || config.mode === ModeType.Map ? this.state.activeLrsLayers : config.lrsLayers
    const configValues = this.getConfigValues(config, this.state.settingPerView, this.state.activeMapViewId)

    // destructure config values.
    const {
      networkLayers,
      eventLayers,
      intersectionLayers,
      defaultEvent,
      defaultNetwork,
      defaultMethod,
      defaultAttributeSet,
      attributeSets,
      hideEvent,
      hideNetwork,
      hideType,
      hideMethod,
      hideAttributeSet,
      hideDates,
      useRouteStartEndDate,
      hideAddToDominantRouteOption,
      enableAddToDominantRouteOption,
      notAllowOverrideEventReplacement,
      defaultReferentConfig,
      coordinateConfig
    } = configValues


    const isMapMode = getModeType(config.mode, lrsLayers)
    const { jimuMapView, operationType } = this.state
    const hasConfig = networkLayers && networkLayers.length > 0 && eventLayers && eventLayers.length > 0

    if (!useMapWidgetIds) {
      const appConfig = getAppStore()?.getState()?.appConfig
      useMapWidgetIds = findFirstArcgisMapWidgetId(appConfig)
    }

    const defaultNetworkLayer = lrsLayers?.find((layer) => layer.name === defaultNetwork)
    const finalCoordinateConfig = {
      spatialReferenceType: coordinateConfig?.spatialReferenceType ?? SpatialReferenceFrom.Map,
      searchUnits: coordinateConfig?.searchUnits ?? defaultNetworkLayer?.networkInfo?.unitsOfMeasure ?? 'esriMiles',
      searchRadius: coordinateConfig?.searchRadius ?? defaultNetworkLayer?.networkInfo?.searchRadius ?? 1,
      ...coordinateConfig
    }

    return (
      <Paper variant='flat' shape="none" className="jimu-widget runtime-add-point-event surface-1 border-0">
        <div
          id={this.widgetOuterDivId}
          role='region'
          aria-label={this.getI18nMessage('_widgetLabel')}
          className="widget-outer-div h-100 w-100 d-flex"
        >
          <JimuMapViewComponent useMapWidgetId={useMapWidgetIds?.[0]} onActiveViewChange={this.onActiveViewChange} />
          {isMapMode && (
            <MapViewLoader
              config={config}
              widgetId={id}
              supportedLrsLayerTypes={this.supportedLrsLayerTypes}
              useMapWidgetIds={useMapWidgetIds}
              mapViewsConfig={mapViewsConfig}
              jimuMapView={jimuMapView}
              outputDataSourceType='none'
              onLrsLayersChanged={this.handleLrsLayersChanged}
              onViewChange={this.handleViewChange}
            />
          )}
          {operationType === OperationType.single && hasConfig && (
            <AddSinglePointEvent
              intl={intl}
              widgetId={id}
              lrsLayers={lrsLayers}
              JimuMapView={jimuMapView}
              operationType={operationType}
              onOperationTypeChanged={this.handleOperationTypeChange}
              eventLayers={eventLayers}
              networkLayers={networkLayers}
              instersectionLayers={intersectionLayers}
              defaultEvent={defaultEvent}
              defaultMethod={defaultMethod}
              graphicsManager={this.state.graphicsManager}
              conflictPreventionEnabled={this.state.isConflictPreventionEnabled}
              hideEvent={hideEvent}
              hideNetwork={hideNetwork}
              hideType={hideType}
              hideMethod={hideMethod}
              hideDates={hideDates}
              hideTitle={this.state.hideTitle}
              useRouteStartEndDate={useRouteStartEndDate}
              networkDataSourceFromDataAction={this.state.networkDataSourceFromDataAction}
              routeInfoFromDataAction={this.state.routeInfoFromDataAction}
              onResetDataAction={this.resetDataAction.bind(this)}
              onClearGraphic={this.clearGraphics.bind(this)}
              hideAddToDominantRouteOption={hideAddToDominantRouteOption}
              enableAddToDominantRouteOption={enableAddToDominantRouteOption}
              notAllowOverrideEventReplacement={notAllowOverrideEventReplacement}
              referentConfig={defaultReferentConfig}
              coordinateConfig={finalCoordinateConfig}
            />
          )}
          {operationType === OperationType.multiple && hasConfig && (
            <AddMultiplePointEvents
              intl={intl}
              widgetId={id}
              lrsLayers={lrsLayers}
              jimuMapView={this.state.jimuMapView}
              operationType={operationType}
              onOperationTypeChanged={this.handleOperationTypeChange}
              networkLayers={networkLayers}
              defaultNetwork={defaultNetwork}
              defaultMethod={defaultMethod}
              defaultAttributeSet={defaultAttributeSet}
              attributeSets={attributeSets}
              graphicsManager={this.state.graphicsManager}
              conflictPreventionEnabled={this.state.isConflictPreventionEnabled}
              hideNetwork={hideNetwork}
              hideMethod={hideMethod}
              hideType={hideType}
              hideAttributeSet={hideAttributeSet}
              hideDates={hideDates}
              hideTitle={this.state.hideTitle}
              useRouteStartEndDate={useRouteStartEndDate}
              networkDataSourceFromDataAction={this.state.networkDataSourceFromDataAction}
              routeInfoFromDataAction={this.state.routeInfoFromDataAction}
              onResetDataAction={this.resetDataAction.bind(this)}
              onClearGraphic={this.clearGraphics.bind(this)}
              hideAddToDominantRouteOption={hideAddToDominantRouteOption}
              enableAddToDominantRouteOption={enableAddToDominantRouteOption}
              notAllowOverrideEventReplacement={notAllowOverrideEventReplacement}
              referentConfig={defaultReferentConfig}
              coordinateConfig={finalCoordinateConfig}
            />
          )}
          {!hasConfig && (
            <LrsWidgetPlaceholder
              icon={iconSBR}
              widgetLabel={this.getI18nMessage('_widgetLabel')}
              warningMessage={this.getI18nMessage('widgetWarning')}
            />
          )}
        </div>
      </Paper>
    )
  }
}
