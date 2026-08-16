/** @jsx jsx */
import {
  type DataSource,
  React,
  jsx,
  type ImmutableArray,
  type ImmutableObject,
  hooks,
  type IntlShape,
  type FeatureLayerDataSource,
  Immutable,
  ReactRedux,
  type IMState
} from 'jimu-core'
import {
  AttributeInputType,
  type MessageProp,
  type AttributeSetParam,
  type RouteInfoFromDataAction,
  DisplayType,
  type MeasureRange
} from '../../config'
import { type LrsLayer, isDefined, type AttributeSets, type NetworkInfo, GetUnits, queryRouteIdOrName, getAttributeSets, useLrsDate, IntellisenseTextInput, getRouteFromEndMeasures, RoutePickerPopup, type RouteInfo, getInitialRouteInfoState, getDateWithTZOffset, getDataSourceById, LrsLayerType, waitTime } from 'widgets/shared-code/lrs'
import { useDynSegRuntimeDispatch, useDynSegRuntimeState } from '../state'
import { Loader } from './loader'
import { createDynSegFeatureLayer, populateFeatureLayer, populateIntersectionFeatures } from '../utils/feature-layer-utils'
import { buildDeviceJunctionAttributeSetParam, buildIntersectionAttributeSetParam, getAttributeSetParam, queryAttributeSets, queryIntersections } from '../utils/service-utils'
import defaultMessages from '../translations/default'
import { MapViewManager, type JimuMapView } from 'jimu-arcgis'
import { Icon, Label } from 'jimu-ui'
import { Actions } from './actions/actions'
import { Toast } from './toast'
import { DynSegTableTask } from './table/dyn-seg-table-task'
import { DynSegDiagramTask } from './diagram/dyn-seg-diagram-task'
import { FieldCalcPopup } from './actions/fieldCalcPopup'
import { getOperationDate, getWhereClause } from '../utils/edit-utils'
import { DynSegFields } from '../../constants'
import iconSBR from './../../../icon.svg'
import { getTheme } from 'jimu-theme'
import { round } from 'lodash-es'
import { getDeviceJunctionLayers, getIntersectionLayers } from '../utils/layer-utils'
import { getOrientedImageryLayer } from '../utils/oriented-imagery-utils'
import 'calcite-components'

export interface DynamicSegmentationProps {
  widgetId: string
  allowMerge: boolean
  allowEditing: boolean
  conflictPreventionEnabled: boolean
  intl: IntlShape
  selectedNetworkDataSource: DataSource
  routeInfo: RouteInfoFromDataAction
  lrsLayers: ImmutableArray<LrsLayer>
  defaultNetwork: string
  attributeSets: ImmutableObject<AttributeSets>
  defaultPointAttributeSet: string
  defaultLineAttributeSet: string
  attributeInputType: AttributeInputType
  mapHighlightColor: string
  graphicsLayer: __esri.GraphicsLayer
  defaultDisplayType: DisplayType
  defaultDiagramScale: number
  jimuMapView: JimuMapView
  outputDataSources: ImmutableArray<string>
  showEventStatistics: boolean
  useMapWidgetIds?: ImmutableArray<string>
  orientedImageryWidgetId: string,
  searchTolerance: number,
  searchUnit: string,
  onResetDataAction:() => void
}

export function DynamicSegmentation (props: DynamicSegmentationProps) {
  const {
    widgetId,
    allowMerge,
    allowEditing,
    conflictPreventionEnabled,
    intl,
    selectedNetworkDataSource,
    routeInfo,
    lrsLayers,
    defaultNetwork,
    attributeSets,
    defaultPointAttributeSet,
    defaultLineAttributeSet,
    attributeInputType,
    mapHighlightColor,
    graphicsLayer,
    defaultDisplayType,
    defaultDiagramScale,
    jimuMapView,
    outputDataSources,
    showEventStatistics,
    useMapWidgetIds,
    orientedImageryWidgetId,
    searchTolerance,
    searchUnit,
    onResetDataAction
  } = props
  const getI18nMessage = hooks.useTranslation(defaultMessages)
  const [currentNetwork, setCurrentNetwork] = React.useState<LrsLayer>(lrsLayers.find(layer => layer.name === defaultNetwork))
  const [currentRouteIdOrName, setCurrentRouteIdOrName] = React.useState<string | null>(null)
  const [currentRouteInfo, setCurrentRouteInfo] = React.useState<RouteInfoFromDataAction>(null)
  const [dynSegFeatureLayer, setDynSegFeatureLayer] = React.useState<__esri.FeatureLayer>(null)
  const [routePickerItems, setRoutePickerItems] = React.useState<RouteInfo[]>([])
  const [attributeSet, setAttributeSet] = React.useState<AttributeSetParam[]>([])
  const [measureRange, setMeasureRange] = React.useState<MeasureRange>(null)
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false)
  const [refresh, setRefresh] = React.useState<boolean>(false)
  const [alertMessage, setAlertMessage] = React.useState<MessageProp>({ title: '', body: '', type: 'brand' })
  const [reloadOnClose, setReloadOnClose] = React.useState<boolean>(false)
  const { isLoading, pendingEdits, records, display, selectedRecordIds, selectedSldId, networkDS, orientedImageryInfo } = useDynSegRuntimeState()
  const [resultsMessage, setResultsMessage] = React.useState<string>('')
  const { activeDate } = useLrsDate()
  const dispatch = useDynSegRuntimeDispatch()
  const theme = getTheme()

  // Listen for selectedOiLayer changes from the oriented imagery widget
  const selectedOiLayerId = ReactRedux.useSelector((state: IMState) => {
    return orientedImageryWidgetId ? state.widgetsState[orientedImageryWidgetId]?.oiSelectedLayerId ?? null : null
  })

  // Update context state when selected layer from OI widget changes
  React.useEffect(() => {
    if (selectedOiLayerId && orientedImageryWidgetId) {
      // Only update if the layer has actually changed
      if (orientedImageryInfo?.layer?.layerId !== selectedOiLayerId) {
        const orientedImageryLayer = getOrientedImageryLayer(jimuMapView?.view?.map?.layers, selectedOiLayerId)
        dispatch({
          type: 'SET_ORIENTED_IMAGERY_INFO',
          value: { enabled: true, collapsed: false, layer: orientedImageryLayer}
        })
      }
    } else if (!selectedOiLayerId && orientedImageryWidgetId && orientedImageryInfo?.layer) {
      // Clear the layer if it becomes null and we currently have a layer
      dispatch({
        type: 'SET_ORIENTED_IMAGERY_INFO',
        value: { enabled: false, collapsed: true, layer: null}
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOiLayerId, orientedImageryWidgetId, dispatch])

  // Notify user of pending edits before leaving/refreshing page
  React.useEffect(() => {
    const unloadCallback = (event) => {
      if (pendingEdits.size > 0) {
        const e = event
        e.preventDefault()
        if (e) {
          e.returnValue = ''
        }
        return ''
      }
    }

    window.addEventListener('beforeunload', unloadCallback)
    return () => {
      window.removeEventListener('beforeunload', unloadCallback)
    }
  }, [pendingEdits])

  React.useEffect(() => {
    if (defaultDisplayType) {
      dispatch({ type: 'SET_DISPLAY', value: defaultDisplayType })
    }
    if (selectedNetworkDataSource) {
      dispatch({ type: 'SET_NETWORK_DS', value: selectedNetworkDataSource })
    }
    if (outputDataSources) {
      dispatch({ type: 'SET_OUTPUT_DATA_SOURCES', value: outputDataSources })
    }
    if (isDefined(jimuMapView)) {
      dispatch({ type: 'SET_CONFLICT_PREVENTION_ENABLED', value: conflictPreventionEnabled })
      dispatch({ type: 'SET_JIMU_MAP_VIEW', value: jimuMapView })
    }
    if (isDefined(graphicsLayer)) {
      dispatch({ type: 'SET_HIGHLIGHT_LAYER', value: graphicsLayer })
    }
    if (isDefined(mapHighlightColor)) {
      dispatch({ type: 'SET_HIGHLIGHT_COLOR', value: mapHighlightColor })
    }
    if (isDefined(orientedImageryWidgetId)) {
      dispatch({ type: 'SET_ORIENTED_IMAGERY_WIDGET_ID', value: orientedImageryWidgetId })
    }
    if (isDefined(searchTolerance)) {
      dispatch({ type: 'SET_SEARCH_TOLERANCE', value: searchTolerance })
    }
    if (isDefined(searchUnit)) {
      dispatch({ type: 'SET_SEARCH_UNIT', value: searchUnit })
    }
  }, [defaultDisplayType, selectedNetworkDataSource, outputDataSources, jimuMapView, conflictPreventionEnabled, graphicsLayer, mapHighlightColor, orientedImageryWidgetId, searchTolerance, searchUnit, dispatch])

  // Select the highest historic moment across all LRS layer data sources from Redux store.
  // When any historic moment changes (edit start/save/discard/undo/redo), trigger a re-query.
  const maxHistoricMoment = ReactRedux.useSelector((state: IMState) => {
    let max = -1
    lrsLayers?.forEach(layer => {
      const dsId = layer.useDataSource?.dataSourceId
      if (dsId) {
        const val = state.dataSourcesInfo?.[dsId]?.historicMoment
        if (typeof val === 'number' && val > max) {
          max = val
        }
      }
    })
    return max
  })

  const prevMaxHistoricMomentRef = React.useRef<number>(-1)
  const historicMomentTimerRef = React.useRef<ReturnType<typeof setTimeout>>(null)
  const queryExecutionCountRef = React.useRef(0)

  React.useEffect(() => {
    const changed = maxHistoricMoment !== prevMaxHistoricMomentRef.current

    prevMaxHistoricMomentRef.current = maxHistoricMoment
    if (changed && isDefined(currentRouteInfo)) {
      clearTimeout(historicMomentTimerRef.current)
      historicMomentTimerRef.current = setTimeout(() => {
        executeQueryAttributeSet(currentRouteInfo)
      }, 200)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxHistoricMoment])

  React.useEffect(() => {
    if (isDefined(activeDate) && isDefined(currentRouteInfo)) {
      executeQueryAttributeSet(currentRouteInfo)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDate])

  React.useEffect(() => {
    if (isDefined(currentRouteInfo)) {
      executeQueryAttributeSet(currentRouteInfo)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display])

  React.useEffect(() => {
    if (isDefined(selectedNetworkDataSource) && isDefined(routeInfo)) {
      const useRouteName = routeInfo.networkInfo.useRouteName
      dispatch({ type: 'SET_NETWORK_DS', value: selectedNetworkDataSource })
      setCurrentNetwork(lrsLayers.find(layer => layer.layerType === LrsLayerType.Network &&
        layer.networkInfo.lrsNetworkId === routeInfo.networkInfo.lrsNetworkId))
      setCurrentRouteIdOrName(useRouteName ? routeInfo.routeName : routeInfo.routeId)
      executeQueryAttributeSet(routeInfo, selectedNetworkDataSource)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeInfo])

  const setDefaultNetworkDataSource = React.useCallback(() => {
    let networkLayer = lrsLayers.find(layer => layer.name === defaultNetwork)
    if (!networkLayer) {
      // Default network not available, fall back to first network layer
      networkLayer = lrsLayers.find(layer => layer.layerType === LrsLayerType.Network)
    }

    if (networkLayer) {
      const dataSource = getDataSourceById(networkLayer.useDataSource?.dataSourceId)
      if (isDefined(dataSource) && isDefined(networkDS) && dataSource.id !== networkDS.id) {
        dispatch({ type: 'RESET_STATE', value: '' })
        dispatch({ type: 'SET_IS_LOADING', value: false })
        dispatch({ type: 'SET_NETWORK_DS', value: dataSource })
        setCurrentNetwork(networkLayer)
        setCurrentRouteIdOrName(null)
        setCurrentRouteInfo(null)
        setResults(null, [], null, false, '')
      }
      if (!isDefined(networkDS)) {
        dispatch({ type: 'SET_NETWORK_DS', value: dataSource })
        setCurrentNetwork(networkLayer)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lrsLayers, defaultNetwork, networkDS, dispatch])

  React.useEffect(() => {
    setDefaultNetworkDataSource()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lrsLayers, defaultNetwork])

  const getActiveMap = (): JimuMapView => {
    let returnVal = null
    if (useMapWidgetIds?.length > 0) {
      const mvManager: MapViewManager = MapViewManager.getInstance()
      const mapViewGroups = mvManager.getJimuMapViewGroup(useMapWidgetIds?.[0])
      if (mapViewGroups && mapViewGroups.jimuMapViews) {
        for (const id in mapViewGroups.jimuMapViews) {
          if (mapViewGroups.jimuMapViews[id].dataSourceId) {
            if (
              mapViewGroups.jimuMapViews[id].isActive ||
                mapViewGroups.jimuMapViews[id].isActive === undefined
            ) {
              returnVal = mapViewGroups.jimuMapViews[id]
            }
          }
        }
      }
    }
    return returnVal
  }

  const executeQueryAttributeSet = async (routeInfo: RouteInfoFromDataAction, selectedNetworkDataSource?: DataSource): Promise<void> => {
    queryExecutionCountRef.current += 1
    const executionId = queryExecutionCountRef.current
    dispatch({ type: 'RESET_STATE', action: '' })
    await queryAttributeSet(routeInfo, selectedNetworkDataSource, executionId)
  }

  const appendDeviceJunctionAttributeSet = (
    attributeSet: AttributeSetParam[]
  ) => {
    const deviceJunctionLayers = getDeviceJunctionLayers(lrsLayers)
    let nextAttributeSet = attributeSet

    for (const layer of deviceJunctionLayers) {
      const junctionAttributeSet = buildDeviceJunctionAttributeSetParam(layer)
      if (junctionAttributeSet) {
        nextAttributeSet = [...nextAttributeSet, junctionAttributeSet]
      }
    }

    return nextAttributeSet
  }

  const queryAttributeSet = async (routeInfo: RouteInfoFromDataAction, selectedNetworkDataSource?: DataSource, executionId?: number): Promise<void> => {
    const isStale = () => isDefined(executionId) && executionId !== queryExecutionCountRef.current
    const date = getOperationDate(networkDS, activeDate)
    let attributeSet = await getAttributeSet(routeInfo)
    attributeSet = appendDeviceJunctionAttributeSet(attributeSet)

    const ds = selectedNetworkDataSource || networkDS

    if (attributeSet.length === 0) {
      if (isStale()) return
      setResults(null, [], null, false, getI18nMessage('noAttributeSetEvents'))
      return Promise.resolve()
    }

    let mapView = jimuMapView
    if (!isDefined(mapView)) {
      mapView = getActiveMap()
    }

    if (!isDefined(mapView)) {
      // TODO: display error message in UI
      dispatch({ type: 'SET_IS_LOADING', value: false })
    }

    // Check if route exist in current tvd
    await doesRouteExist(ds, routeInfo, date).then(async (routeFound) => {
      if (!routeFound) {
        if (isStale()) return
        setResults(null, [], null, false, getI18nMessage('routeDoesNotExist'))
      } else {
        // Query attribute set
        await queryAttributeSets(ds, routeInfo, date, attributeSet, maxHistoricMoment).then(async (results) => {

          // Query intersections if in diagram mode and intersection layers are configured
          let finalAttributeSet = attributeSet
          const intersectionResults = []
          if (display === DisplayType.Diagram) {

            // Get all intersection layers for this network
            const intersectionLayers = getIntersectionLayers(lrsLayers, routeInfo.networkInfo.lrsNetworkId)
            for (const intersectionLayer of intersectionLayers) {
              // Always include intersection layer in attribute set so SLD can render an empty row when no intersections are found.
              const intersectionAttributeSet = buildIntersectionAttributeSetParam(intersectionLayer)
              if (intersectionAttributeSet) {
                // Intersections need to be at the end to ensure OID fields are not mixed up with queryAttributeSets results.
                finalAttributeSet = [...finalAttributeSet, intersectionAttributeSet]
              }

              // Query intersections all intersections related to the route.
              const records = await queryIntersections(routeInfo, intersectionLayer, ds, activeDate, true)
              if (records.length > 0) {
                // Store intersection features for later use in populateIntersectionFeatures
                intersectionResults.push({ features: records, layer: intersectionLayer })
              }
            }
          }

          // Create feature layer and populate with query attribute set results.
          const featureLayer = await createDynSegFeatureLayer(routeInfo.networkInfo, lrsLayers, finalAttributeSet, mapView)
          await populateFeatureLayer(results, featureLayer, routeInfo.networkInfo).then(async () => {

            // If there are intersection results, populate those as well
            if (intersectionResults && intersectionResults.length > 0) {
              for (const intersectionResult of intersectionResults) {
                await populateIntersectionFeatures(intersectionResult.features, intersectionResult.layer, lrsLayers, featureLayer, routeInfo)
              }
            }
            if (isStale()) return
            setResults(featureLayer, finalAttributeSet, routeInfo, true, '')
          })
        }).catch((err) => {
          if (isStale()) return
          setResults(null, [], null, false, getI18nMessage('queryAttributeSetError'))
        })
      }
    })
  }

  const setResults = (featureLayer: __esri.FeatureLayer, attributeSet: AttributeSetParam[], routeInfo: RouteInfoFromDataAction, hasResults: boolean, resultsMsg: string) => {
    setDynSegFeatureLayer(featureLayer)
    setAttributeSet(attributeSet)
    setCurrentRouteInfo(routeInfo)
    setResultsMessage(resultsMsg)
    dispatch({ type: 'SET_CURRENT_ROUTE_INFO', value: routeInfo })
    if (hasResults) {
      setMeasureRange({ from: routeInfo.fromMeasure, to: routeInfo.toMeasure })
      onResetDataAction()
      loadRecords(featureLayer)
    } else {
      dispatch({ type: 'SET_RECORDS', value: [] })
      dispatch({ type: 'SET_ORIGINAL_RECORDS', value: [] })
      dispatch({ type: 'SET_IS_LOADING', value: false })
    }
  }

  const doesRouteExist = (networkDS: DataSource, routeInfo: RouteInfoFromDataAction, date: Date): Promise<boolean> => {
    return new Promise(function (resolve, reject) {
      const featureLayer = networkDS as FeatureLayerDataSource
      if (!isDefined(featureLayer)) {
        resolve(false)
      }
      const routeIdOrName = routeInfo.networkInfo.useRouteName ? routeInfo.routeName : routeInfo.routeId
      queryRouteIdOrName(routeIdOrName.trim(), routeInfo.networkInfo, networkDS, false, true, '', date).then((result) => {
        if (isDefined(result) && result.features.length > 0) {
          resolve(true)
        } else {
          resolve(false)
        }
      }).catch((err) => {
        resolve(false)
      })
    })
  }

  const loadRecords = (featureLayer: __esri.FeatureLayer) => {
    if (!isDefined(featureLayer)) return
    const query = featureLayer.createQuery()
    query.outFields = ['*']
    query.returnGeometry = true
    query.where = getWhereClause(networkDS, activeDate)
    query.orderByFields = [DynSegFields.fromMeasureName]


    featureLayer.queryFeatures(query).then((results) => {
      dispatch({ type: 'SET_RECORDS', value: results.features })
      console.table('features', results.features.map(feature => feature.attributes))
      dispatch({ type: 'SET_ORIGINAL_RECORDS', value: results.features })
      if (results.features.length === 0) {
        setResultsMessage(getI18nMessage('noResults'))
        dispatch({ type: 'SET_IS_LOADING', value: false })
      } else {
        setResultsMessage('')
      }
    }).catch((err) => {
      setResultsMessage(getI18nMessage('errorLoadingRecords'))
      dispatch({ type: 'SET_RECORDS', value: [] })
      dispatch({ type: 'SET_ORIGINAL_RECORDS', value: [] })
      dispatch({ type: 'SET_IS_LOADING', value: false })
    })
  }


  const reloadRecords = () => {
    if (refresh) {
      setRefresh(false)
      waitTime(300).then(() => { executeQueryAttributeSet(currentRouteInfo) })
    }
    else if (isDefined(dynSegFeatureLayer)) {
      dispatch({ type: 'SET_RECORDS', value: [] })
      dispatch({ type: 'SET_ORIGINAL_RECORDS', value: [] })
      waitTime(100).then(() => { loadRecords(dynSegFeatureLayer) })
    }
  }

  const getAttributeSet = async (routeInfo: RouteInfoFromDataAction): Promise<AttributeSetParam[]> => {
    let currentAttributeSets = attributeSets
    if (!isDefined(currentAttributeSets)) {
      const url = lrsLayers.find((layer) => layer.id === routeInfo.networkInfo.id)?.lrsUrl
      currentAttributeSets = Immutable(await getAttributeSets(url, url))
    }
    const pointAttributeSet = currentAttributeSets.attributeSet.find((attributeSet) => attributeSet.title === defaultPointAttributeSet)
    const lineAttributeSet = currentAttributeSets.attributeSet.find((attributeSet) => attributeSet.title === defaultLineAttributeSet)
    let pointAttributeSetParam = []
    if (attributeInputType === AttributeInputType.LineAndPoint) {
      pointAttributeSetParam = getAttributeSetParam(routeInfo, lrsLayers, pointAttributeSet)
    }
    const lineAttributeSetParam = getAttributeSetParam(routeInfo, lrsLayers, lineAttributeSet)
    return pointAttributeSetParam.concat(lineAttributeSetParam)
  }

  const getDateRangeLabel = () => {
    const date = isDefined(networkDS) ? getOperationDate(networkDS, activeDate) : null
    const dateString = isDefined(date) ? date.toLocaleDateString() : ''
    return getI18nMessage('dateLabel', { date: dateString })
  }

  const getMeasureRange = () => {
    let fromM = NaN
    let toM = NaN
    if (isDefined(currentRouteInfo) && isDefined(currentNetwork)) {
      fromM = round(currentRouteInfo.fromMeasure, currentNetwork.networkInfo.measurePrecision)
      toM = round(currentRouteInfo.toMeasure, currentNetwork.networkInfo.measurePrecision)
    }

    if (isNaN(fromM) || isNaN(toM)) {
      return getI18nMessage('measureRangeNoValue')
    }
    const units = GetUnits(currentRouteInfo.networkInfo.unitsOfMeasure, intl)
    return getI18nMessage('measureRangeValue', { fromM: fromM, toM: toM, units: units })
  }

  const getRouteLabel = () => {
    if (isDefined(currentNetwork) && currentNetwork.networkInfo.useRouteName) {
      return getI18nMessage('routeNameLabel')
    } else {
      return getI18nMessage('routeIdLabel')
    }
  }

  const getNetworkInfo = (): ImmutableObject<NetworkInfo> => {
    if (isDefined(currentRouteInfo)) {
      return currentRouteInfo.networkInfo
    }
    return null
  }

  const handleSave = (messagePros: MessageProp) => {
    setAlertMessage(messagePros)
    setAlertOpen(true)

    // Only manually refresh when no edit session is active.
    if (maxHistoricMoment === -1) {
      setReloadOnClose(true)
      setRefresh(true)
    }
  }

  const handleToastClose = () => {
    setAlertOpen(false)
    if (alertMessage.type === 'success') {
      setAlertMessage({ title: '', body: '', type: 'brand' })
      if (reloadOnClose) {
        reloadRecords()
        setReloadOnClose(false)
      }
    }
  }

  const handleClick = (e) => {
    if (selectedRecordIds.length > 0) {
      dispatch({ type: 'SET_SELECTED_RECORD_IDS', value: [] })
    }
    if (selectedSldId !== '') {
      dispatch({ type: 'SET_SELECTED_SLD_ID', value: '' })
    }
  }

  const handleLockToast = (messageProp: MessageProp, reloadOnClose: boolean) => {
    if (messageProp.type === 'danger') {
      messageProp.time = 60000
    }
    setAlertMessage(messageProp)
    setAlertOpen(true)
    setReloadOnClose(reloadOnClose)
  }

  const extractRouteInfo = (
  record: __esri.Graphic,
  currentNetwork: LrsLayer,
  networkDS: DataSource
): RouteInfo => {
    const geometry = record.geometry
    const measures = getRouteFromEndMeasures(geometry)
    const routeId = record.attributes[currentNetwork?.networkInfo?.routeIdFieldName] ?? ''
    const routeName = record.attributes[currentNetwork?.networkInfo?.routeNameFieldName] ?? ''
    const fromDateRaw = record.attributes[currentNetwork?.networkInfo?.fromDateFieldName] ?? ''
    const toDateRaw = record.attributes[currentNetwork?.networkInfo?.toDateFieldName] ?? ''
    const fromDate = isDefined(fromDateRaw) ? getDateWithTZOffset(fromDateRaw, networkDS) : null
    const toDate = isDefined(toDateRaw) ? getDateWithTZOffset(toDateRaw, networkDS) : null
    const selectedPolyline = geometry as __esri.Polyline

    return {
      ...getInitialRouteInfoState(),
      routeId: routeId,
      routeName: routeName,
      fromMeasure: measures[0].m,
      toMeasure: measures[1].m,
      fromDate,
      toDate,
      selectedPolyline
    }
  }

  const handleRouteInputChange = (value: string) => {
    if (value?.length === 0) {
      setDefaultNetworkDataSource()
      setCurrentRouteInfo(null)
      setCurrentRouteIdOrName(null)
    }
  }

  const handleRouteAccept = (value: string, isValid: boolean) => {
    if (!isValid) {
      setResults(null, [], null, false, getI18nMessage('routeDoesNotExist'))
      return
    }

    if (value.trim() === '') {
      setResultsMessage('')
      dispatch({ type: 'RESET_STATE', value: '' })
      dispatch({ type: 'SET_IS_LOADING', value: false })
      return
    }

    const isRouteName = currentNetwork?.networkInfo?.useRouteName
    const networkInfo = Immutable(currentNetwork?.networkInfo)

    queryRouteIdOrName(value, networkInfo, networkDS, false, true, '', activeDate, !isRouteName, true)
      .then((result) => {
        if (result?.features?.length === 0) {
          setResults(null, [], null, false, getI18nMessage('routeDoesNotExist'))
          return
        }

        if (result?.features?.length === 1) {
          const routeInfo = extractRouteInfo(result?.features[0], currentNetwork, networkDS)
          const routeInfoFromDataAction: RouteInfoFromDataAction = {
            routeId: routeInfo.routeId ?? '',
            routeName: routeInfo.routeName ?? '',
            networkInfo: Immutable(currentNetwork?.networkInfo),
            fromMeasure: routeInfo.fromMeasure,
            toMeasure: routeInfo.toMeasure,
            geometry: routeInfo.selectedPolyline
          }
          executeQueryAttributeSet(routeInfoFromDataAction)
          setCurrentRouteIdOrName(value)
          return
        }

        // Multiple records
        const routeInfos: RouteInfo[] = result.features.map(record =>
          extractRouteInfo(record, currentNetwork, networkDS)
        )
        setRoutePickerItems(routeInfos)
      }
    )
  }

  const renderRouteInput = () => {
    const fieldName = currentNetwork?.networkInfo?.useRouteName ? currentNetwork?.networkInfo?.routeNameFieldSchema.name : currentNetwork?.networkInfo?.routeIdFieldSchema.name
    const fieldType = currentNetwork?.networkInfo?.useRouteName ? currentNetwork?.networkInfo?.routeNameFieldSchema.type : currentNetwork?.networkInfo?.routeIdFieldSchema.type

    return (
      <div className='d-flex' style={{ flexDirection: 'row' }}>
        <Label className='title3' size='sm' centric style={{ marginBottom: '0px', marginRight: '5px' }}>{getRouteLabel()}</Label>
        <IntellisenseTextInput
          defaultValue={currentRouteIdOrName}
          value={currentRouteIdOrName}
          dataSource={networkDS}
          widgetId={widgetId}
          fieldName={fieldName}
          fieldType={fieldType}
          isDataSourceReady={isDefined(networkDS)}
          onChange={handleRouteInputChange}
          onAccept={handleRouteAccept}
        />
      </div>
    )
  }

  const handleRoutePicked = (selectedRouteInfo: RouteInfo) => {
    setRoutePickerItems([])
    const useRouteName = currentNetwork?.networkInfo?.useRouteName
    setCurrentRouteIdOrName(useRouteName ? selectedRouteInfo.routeName : selectedRouteInfo.routeId)

    const routeInfo: RouteInfoFromDataAction = {
      routeId: selectedRouteInfo.routeId,
      routeName: selectedRouteInfo.routeName,
      networkInfo: Immutable(currentNetwork?.networkInfo),
      fromMeasure: selectedRouteInfo.fromMeasure,
      toMeasure: selectedRouteInfo.toMeasure,
      geometry: selectedRouteInfo.selectedPolyline
    }
    executeQueryAttributeSet(routeInfo)
  }

  return (
    <calcite-panel onClick={handleClick}>
      <div slot='header-content' className='d-flex' style={{ flexDirection: 'column', height: '40px' }}>
        {renderRouteInput()}
        <div className='d-flex' style={{ flexDirection: 'row' }}>
          <Label className='label3' size='sm' centric style={{ marginBottom: '0px' }}>{getDateRangeLabel()}</Label>
          <Label className='label3' size='sm' centric style={{ paddingLeft: '10px', marginBottom: '0px' }}>{getMeasureRange()}</Label>
        </div>
      </div>
      {display === DisplayType.Table && dynSegFeatureLayer && (
        <calcite-popover
          placement='auto-start'
          overlayPositioning='fixed'
          label={getI18nMessage('fieldCalculatorLabel')}
          heading={getI18nMessage('fieldCalculatorLabel')}
          referenceElement="field-calculator">
            <FieldCalcPopup
              dynSegFeatureLayer={dynSegFeatureLayer}
              intl={intl}
              lrsLayers={lrsLayers}
              attributeSet={attributeSet}
              networkDS={networkDS}
              networkInfo={getNetworkInfo()}
              currentRouteInfo={currentRouteInfo}
              routeId={isDefined(currentRouteInfo) ? currentRouteInfo.routeId : ''}
              handleLockToast={handleLockToast}
            />
        </calcite-popover>
      )}
      <Actions
        attributeSet={attributeSet}
        widgetId={widgetId}
        allowEditing={allowEditing}
        highlightColor={mapHighlightColor}
        onSave={handleSave}
        lrsLayers={lrsLayers}
        networkDS={networkDS}
        networkInfo={getNetworkInfo()}
        jimuMapView={jimuMapView}
        dynSegFeatureLayer={dynSegFeatureLayer}
        intl={intl}
        allowMerge={allowMerge}
        routeId={isDefined(currentRouteInfo) ? currentRouteInfo.routeId : ''}
        routeInfo={currentRouteInfo}
      />
      <div className='h-100'>
        <Loader
          isLoading={isLoading}
        />
        {alertOpen && (
          <Toast
            open={alertOpen}
            messageProp={alertMessage}
            onClose={handleToastClose}
          />
        )}
        {isDefined(dynSegFeatureLayer) && isDefined(currentRouteInfo) && records.length > 0 && (
          display === DisplayType.Table
            ? <DynSegTableTask
              intl={intl}
              allowEditing={allowEditing}
              featureLayer={dynSegFeatureLayer}
              records={records}
              lrsLayers={lrsLayers}
              attributeSet={attributeSet}
              networkInfo={currentRouteInfo.networkInfo}
              networkDS={networkDS}
              currentRouteInfo={currentRouteInfo}
              routeId={isDefined(currentRouteInfo) ? currentRouteInfo.routeId : ''}
              handleLockToast={handleLockToast}
            />
            : <DynSegDiagramTask
              intl={intl}
              allowEditing={allowEditing}
              widgetId={widgetId}
              featureLayer={dynSegFeatureLayer}
              records={records}
              lrsLayers={lrsLayers}
              attributeSet={attributeSet}
              measureRange={measureRange}
              defaultRange={defaultDiagramScale}
              networkInfo={currentRouteInfo.networkInfo}
              networkDS={networkDS}
              routeId={isDefined(currentRouteInfo) ? currentRouteInfo.routeId : ''}
              temporalViewDate={getOperationDate(networkDS, activeDate)}
              jimuMapView={jimuMapView}
              showEventStatistics={showEventStatistics}
            />
        )}
        {records.length === 0 && !isLoading && (
          <div className='d-flex'
            style={{
              padding: '2.5%',
              width: '100%',
              height: '100%',
              flexDirection: 'column'
            }}>
            {!resultsMessage && (<Icon
              icon={iconSBR}
              color={theme.sys.color.surface.overlayHint}
              className='w-50 h-50'
              style={{ margin: 'auto auto 0px auto' }} />)}
            <Label
              className='w-50 ml-auto label1'
              style={{
                color: theme.sys.color.surface.overlayHint,
                textAlign: 'center',
                margin: '10px auto auto auto'
              }}>
              {!resultsMessage && (<p>{getI18nMessage('dataActionMessage')}</p>)}
              <p>{resultsMessage}</p>
            </Label>
          </div>
        )}
        {routePickerItems.length > 1 && (
          <RoutePickerPopup
            routeInfos={routePickerItems}
            onRouteSelect={handleRoutePicked}
            isOpen={routePickerItems.length > 1}
            useRouteName={currentNetwork?.networkInfo?.useRouteName}
            measurePrecision={currentNetwork?.networkInfo?.measurePrecision}
            isFrom={true}
            jimuMapView={jimuMapView}
            showMeasure={false}
            onRouteSelectCancel={() => { setRoutePickerItems([]) }} />
        )}
      </div>
    </calcite-panel>
  )
}
