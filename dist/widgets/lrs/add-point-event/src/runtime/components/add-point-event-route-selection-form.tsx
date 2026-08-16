/** @jsx jsx */
import {
  React,
  jsx,
  type DataSource,
  type ImmutableObject,
  css,
  type IntlShape,
  type ImmutableArray
} from 'jimu-core'
import {
  type NetworkInfo,
  type RouteInfo,
  SearchMethod,
  getGeometryGraphic,
  getInitialRouteInfoState,
  getSimpleLineGraphic,
  getSimplePointGraphic,
  getDateWithoutTime,
  isDefined,
  SearchReferentForm,
  type LrsLayer,
  type RouteMeasurePickerInfo,
  type ReferentConfig,
  type GraphicsLayerManager,
  SearchCoordinatesForm,
  type CoordinateConfig
} from 'widgets/shared-code/lrs'
import type { JimuMapView } from 'jimu-arcgis'
import { RouteAndMeasureForm } from './route-and-measure-form'
import { AddPointEventDateForm } from './add-point-event-date-form'
import { colorCyan, colorGreen } from '../constants'
import { useImperativeHandle } from 'react'

export interface AddPointEventRouteSelectionFormProps {
  intl: IntlShape
  widgetId: string
  network: ImmutableObject<NetworkInfo>
  routeInfoFromDataAction: RouteInfo
  isReady: boolean
  networkDS: DataSource
  method: SearchMethod
  reset: boolean
  jimuMapView: JimuMapView
  graphicsManager: GraphicsLayerManager | null
  lockAquired: boolean
  hideDates: boolean
  useRouteStartEndDate: boolean
  revalidateRouteFromDataAction: boolean
  routeMeasurePickerInfo: RouteMeasurePickerInfo
  routeInfo: RouteInfo
  onResetDataAction: () => void
  onsubmit: (routeInfo: RouteInfo, networkDS: DataSource, network: ImmutableObject<NetworkInfo>, addToDominantRouteIsChecked: boolean) => void
  onRouteInfoUpdate: (routeInfo: RouteInfo) => void
  onValidationChanged: (isValid: boolean) => void
  onUpdateRouteMeasurePickerInfo: (updatedRouteMeasurePickerInfo: RouteMeasurePickerInfo) => void
  setTooltipMsg: (message: string) => void
  addToDominantRoute: boolean
  referentConfig: ReferentConfig
  coordinateConfig: ImmutableObject<CoordinateConfig>
  lrsLayers: ImmutableArray<LrsLayer>
  networkLayer: ImmutableObject<LrsLayer>
}

const getFormStyle = () => {
  return css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    .add-single-point-event-route-selection-form__content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      flex: 1 1 auto;
      overflow: auto;
    }
    .add-single-point-event-route-selection-form__actions {
      height: 100%;
    }
  `
}

export const AddPointEventRouteSelectionForm = React.forwardRef((props: AddPointEventRouteSelectionFormProps, ref) => {
  const {
    intl,
    widgetId,
    network,
    isReady,
    networkDS,
    routeInfoFromDataAction,
    method,
    reset,
    jimuMapView,
    graphicsManager,
    lockAquired,
    hideDates,
    useRouteStartEndDate,
    revalidateRouteFromDataAction,
    routeMeasurePickerInfo,
    routeInfo,
    onResetDataAction,
    onsubmit,
    onRouteInfoUpdate,
    onValidationChanged,
    onUpdateRouteMeasurePickerInfo,
    addToDominantRoute,
    referentConfig,
    coordinateConfig,
    lrsLayers,
    networkLayer,
    setTooltipMsg
  } = props

  useImperativeHandle(ref, () => ({
    handleNextClicked
  }))

  React.useEffect(() => {
    updateGraphics(routeInfo, false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeInfo])

  // Reset routeInfo when network changes.
  React.useEffect(() => {
    if (isDefined(network) && !revalidateRouteFromDataAction) {
      onRouteInfoUpdate(getInitialRouteInfoState())
      graphicsManager?.clearPickedGraphic()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network])

  React.useEffect(() => {
    if (reset) {
      onRouteInfoUpdate(getInitialRouteInfoState())
      graphicsManager?.clearPickedGraphic()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset])

  const handleNextClicked = () => {
    onsubmit(routeInfo, networkDS, network, addToDominantRoute)
  }

  // Graphics
  const updatePickedGraphic = (graphic: __esri.Graphic) => {
    if (!isDefined(graphic)) {
      graphicsManager?.clearPickedGraphic()
    } else {
      graphicsManager?.updatePickedGraphic(graphic)
    }
  }

  const updateGraphics = async (routeInfo: RouteInfo, flash: boolean) => {
    if (isDefined(routeInfo?.selectedPolyline) && flash) {
      graphicsManager?.flashGraphic(await getGeometryGraphic(await getSimpleLineGraphic(routeInfo.selectedPolyline), colorCyan))
    }
    if (isDefined(routeInfo?.selectedPoint)) {
      updatePickedGraphic(await getGeometryGraphic(await getSimplePointGraphic(routeInfo.selectedPoint), colorGreen))
    } else {
      graphicsManager?.clearPickedGraphic()
    }
    if (isDefined(jimuMapView)) {
      setTimeout(() => {
        jimuMapView.clearSelectedFeatures()
      }, 100)
    }
  }

  // Update routeInfo state changes.
  const handleRouteInfoUpdate = (newRouteInfo: RouteInfo, flash: boolean = false) => {
    onRouteInfoUpdate(newRouteInfo)
    updateGraphics(newRouteInfo, flash)
  }

  // Returns if the current input data is valid.
  const isValidRouteSelection = React.useCallback(() => {
    if (!lockAquired) {
      return false
    }

    if (!isDefined(routeInfo)) {
      return false
    }

    // Route id check.
    if (!routeInfo.validRoute) {
      return false
    }
    if (routeInfo.routeId?.length === 0) {
      return false
    }

    // Selected measure check.
    if (isNaN(routeInfo.selectedMeasure)) {
      return false
    }

    // From Measure check.
    if (isNaN(routeInfo.fromMeasure)) {
      return false
    }
    if (routeInfo.selectedMeasure < routeInfo.fromMeasure) {
      return false
    }

    // To Measure check.
    if (isNaN(routeInfo.toMeasure)) {
      return false
    }
    if (routeInfo.selectedMeasure > routeInfo.toMeasure) {
      return false
    }

    // Dates check.
    if (!isDefined(routeInfo.selectedFromDate) && !isDefined(routeInfo.selectedToDate)) {
      // No date selected.
      return false
    }

    const routeInfoFromDateWithoutTime: Date = getDateWithoutTime(routeInfo.fromDate)
    const routeInfoToDateWithoutTime: Date = getDateWithoutTime(routeInfo.toDate)
    const routeInfoSelectedFromDateWithoutTime: Date = getDateWithoutTime(routeInfo.selectedFromDate)
    const routeInfoSelectedToDateWithoutTime: Date = getDateWithoutTime(routeInfo.selectedToDate)

    if (isDefined(routeInfo.selectedFromDate) && !isDefined(routeInfo.selectedToDate)) {
      // Only from date provided.
      if (isDefined(routeInfo.fromDate) && routeInfoSelectedFromDateWithoutTime < routeInfoFromDateWithoutTime) {
        // Selected from date less than routes from date.
        return false
      }
      if (isDefined(routeInfo.toDate) && routeInfoSelectedFromDateWithoutTime > routeInfoToDateWithoutTime) {
        // Selected from date greater than routes to date.
        return false
      }
    }
    if (!isDefined(routeInfo.selectedFromDate) && isDefined(routeInfo.selectedToDate)) {
      // Only to date provided.
      if (isDefined(routeInfo.fromDate) && routeInfoSelectedToDateWithoutTime < routeInfoFromDateWithoutTime) {
        // Selected to date less than routes from date.
        return false
      }
      if (isDefined(routeInfo.toDate) && routeInfoSelectedToDateWithoutTime > routeInfoToDateWithoutTime) {
        // Selected to date greater than routes to date.
        return false
      }
    }
    if (isDefined(routeInfo.selectedFromDate) && isDefined(routeInfo.selectedToDate)) {
      // Both from and to date provided.
      if (routeInfoSelectedFromDateWithoutTime > routeInfoSelectedToDateWithoutTime) {
        return false
      }
      if (isDefined(routeInfo.fromDate) && routeInfoSelectedFromDateWithoutTime < routeInfoFromDateWithoutTime) {
        return false
      }
      if (isDefined(routeInfo.toDate) && routeInfoSelectedToDateWithoutTime > routeInfoToDateWithoutTime) {
        return false
      }
    }

    return true
  }, [routeInfo, lockAquired])

  React.useEffect(() => {
    if (routeInfoFromDataAction && method === SearchMethod.Coordinate) {
      handleRouteInfoUpdate(routeInfoFromDataAction)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeInfoFromDataAction])

  React.useEffect(() => {
    onValidationChanged(isValidRouteSelection() && isReady)
  }, [isReady, isValidRouteSelection, onValidationChanged])

  // Update routeMeasurePickerInfo state changes.
  const handleRouteMeasurePickerInfoUpdate = (
    newRouteMeasurePickInfo: RouteMeasurePickerInfo
  ) => {
    onUpdateRouteMeasurePickerInfo(newRouteMeasurePickInfo)
  }

  return (
    <div className='add-single-point-event-route-selection-form__content d-flex' css={getFormStyle()}>
      <div className='d-flex w-100'>
        {method === SearchMethod.Measure && (
          <RouteAndMeasureForm
            intl={intl}
            widgetId={widgetId}
            isReady={isReady}
            network={network}
            networkDS={networkDS}
            routeInfo={routeInfo}
            jimuMapView={jimuMapView}
            graphicsManager={graphicsManager}
            reset={reset}
            routeInfoFromDataAction={routeInfoFromDataAction}
            revalidateRouteFromDataAction={revalidateRouteFromDataAction}
            onResetDataAction={onResetDataAction}
            onRouteInfoUpdated={handleRouteInfoUpdate}
          />
        )}
        {method === SearchMethod.Coordinate && (
          <SearchCoordinatesForm
            intl={intl}
            widgetId={widgetId}
            routeInfo={routeInfo}
            network={network}
            networkDS={networkDS}
            lrsLayer={networkLayer}
            isFrom={true}
            isDataSourceReady={networkDS != null}
            onRouteInfoUpdated={handleRouteInfoUpdate}
            onRouteMeasurePickerInfoUpdated={handleRouteMeasurePickerInfoUpdate}
            graphicsManager={graphicsManager}
            reset={reset}
            type="add-point-event"
            routeMeasurePickerInfo={routeMeasurePickerInfo}
            jimuMapView={jimuMapView}
            coordinateConfig={coordinateConfig}
            setTooltipMsg={setTooltipMsg}
          />
        )}
        {method === SearchMethod.LocationOffset && (
          <SearchReferentForm
            intl={intl}
            widgetId={widgetId}
            networkDS={networkDS}
            routeInfo={routeInfo}
            jimuMapView={jimuMapView}
            graphicsManager={graphicsManager}
            onRouteInfoUpdated={handleRouteInfoUpdate}
            onRouteMeasurePickerInfoUpdated={handleRouteMeasurePickerInfoUpdate}
            routeMeasurePickerInfo={routeMeasurePickerInfo}
            isFrom={true}
            reset={reset}
            revalidateRouteFromDataAction={revalidateRouteFromDataAction}
            onResetDataAction={onResetDataAction}
            dataSource={networkDS}
            isDataSourceReady={networkDS != null}
            lrsLayers={lrsLayers}
            type='add-point-event'
            setTooltipMsg={setTooltipMsg}
            lrsNetworkLayer={networkLayer}
            referentConfig={referentConfig}
          />
        )}
      </div>
      <div className='d-flex w-100 h-100'>
        <AddPointEventDateForm
          hideDates={hideDates}
          useRouteStartEndDate={useRouteStartEndDate}
          routeInfo={routeInfo}
          reset={reset}
          onUpdateRouteInfo={handleRouteInfoUpdate }
        />
      </div>
  </div>
  )
})
