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
import type { JimuMapView } from 'jimu-arcgis'
import { RouteAndMeasureForm } from './route-and-measure-form'
import {
  type RouteInfo,
  type NetworkInfo,
  type LrsLayer,
  type RouteMeasurePickerInfo,
  SearchMethod,
  SearchReferentForm,
  type ReferentConfig,
  type GraphicsLayerManager,
  SearchCoordinatesForm,
  type CoordinateConfig
} from 'widgets/shared-code/lrs'
import { useImperativeHandle } from 'react'

export interface AddLineEventRouteSelectionFormProps {
  intl: IntlShape
  widgetId: string
  network: ImmutableObject<NetworkInfo>
  networkLayer: ImmutableObject<LrsLayer>
  event?: ImmutableObject<LrsLayer>
  dsReady: boolean
  networkDS: DataSource
  method: SearchMethod
  jimuMapView: JimuMapView
  graphicsManager: GraphicsLayerManager
  isFrom: boolean
  routeInfo: RouteInfo
  routeMeasurePickerInfo: RouteMeasurePickerInfo
  reset: boolean
  revalidateRouteFromDataAction: boolean
  canSpanRoutes: boolean
  onResetDataAction: () => void
  useStartMeasure: boolean
  useEndMeasure: boolean
  hideMeasures: boolean
  onUpdateRouteInfo: (updatedRouteInfo: RouteInfo, flash?: boolean) => void
  onUpdateRouteMeasurePickerInfo: (updatedRouteMeasurePickerInfo: RouteMeasurePickerInfo) => void
  onsubmit: (routeInfo: RouteInfo, networkDS: DataSource, network: ImmutableObject<NetworkInfo>, addToDominantRouteIsChecked: boolean) => void
  addToDominantRoute: boolean
  referentConfig: ReferentConfig
  coordinateConfig: ImmutableObject<CoordinateConfig>
  lrsLayers: ImmutableArray<LrsLayer>
  setTooltipMsg: (message: string) => void
}

const getFormStyle = () => {
  return css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    .add-line-event-route-selection-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      flex: 1 1 auto;
      overflow: auto;
      fontWeight: 500;
    }
  `
}

export const AddLineEventRouteSelectionForm = React.forwardRef((props: AddLineEventRouteSelectionFormProps, ref) => {
  const {
    intl,
    widgetId,
    network,
    event,
    networkDS,
    method,
    jimuMapView,
    graphicsManager,
    isFrom,
    routeInfo,
    routeMeasurePickerInfo,
    reset,
    revalidateRouteFromDataAction,
    canSpanRoutes,
    onResetDataAction,
    useStartMeasure,
    useEndMeasure,
    hideMeasures,
    onUpdateRouteInfo,
    onUpdateRouteMeasurePickerInfo,
    onsubmit,
    addToDominantRoute,
    referentConfig,
    coordinateConfig,
    lrsLayers,
    networkLayer,
    setTooltipMsg
  } = props

  // Update routeInfo state changes.
  const handleRouteInfoUpdate = (
    newRouteInfo: RouteInfo,
    flash: boolean = false
  ) => {
    onUpdateRouteInfo(newRouteInfo, flash)
  }

  // Update routeMeasurePickerInfo state changes.
  const handleRouteMeasurePickerInfoUpdate = (
    newRouteMeasurePickInfo: RouteMeasurePickerInfo
  ) => {
    onUpdateRouteMeasurePickerInfo(newRouteMeasurePickInfo)
  }

  useImperativeHandle(ref, () => ({
    handleNextClicked
  }))

  const handleNextClicked = () => {
    onsubmit(routeInfo, networkDS, network, addToDominantRoute)
  }

  return (
    <div className="add-line-event-route-selection-form d-flex" css={getFormStyle()}>
      <div className="d-flex w-100">
        {method === SearchMethod.Measure && (
          <RouteAndMeasureForm
            intl={intl}
            widgetId={widgetId}
            network={network}
            event={event}
            networkDS={networkDS}
            routeInfo={routeInfo}
            jimuMapView={jimuMapView}
            graphicsManager={graphicsManager}
            onRouteInfoUpdated={handleRouteInfoUpdate}
            onRouteMeasurePickerInfoUpdated={handleRouteMeasurePickerInfoUpdate}
            routeMeasurePickerInfo={routeMeasurePickerInfo}
            isFrom={isFrom}
            canSpanRoutes={canSpanRoutes}
            reset={reset}
            revalidateRouteFromDataAction={revalidateRouteFromDataAction}
            onResetDataAction={onResetDataAction}
            useStartMeasure={useStartMeasure}
            useEndMeasure={useEndMeasure}
            hideMeasures={hideMeasures}
          />
        )}
        {method === SearchMethod.Coordinate && (
          <SearchCoordinatesForm
            intl={intl}
            widgetId={widgetId}
            network={network}
            networkDS={networkDS}
            routeInfo={routeInfo}
            jimuMapView={jimuMapView}
            graphicsManager={graphicsManager}
            onRouteInfoUpdated={handleRouteInfoUpdate}
            onRouteMeasurePickerInfoUpdated={handleRouteMeasurePickerInfoUpdate}
            routeMeasurePickerInfo={routeMeasurePickerInfo}
            isFrom={isFrom}
            reset={reset}
            revalidateRouteFromDataAction={revalidateRouteFromDataAction}
            onResetDataAction={onResetDataAction}
            isDataSourceReady={networkDS != null}
            type='add-line-event'
            lrsLayer={networkLayer}
            coordinateConfig={coordinateConfig}
            canSpanRoutes={canSpanRoutes}
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
            onRouteInfoUpdated={handleRouteInfoUpdate}
            onRouteMeasurePickerInfoUpdated={handleRouteMeasurePickerInfoUpdate}
            routeMeasurePickerInfo={routeMeasurePickerInfo}
            isFrom={isFrom}
            reset={reset}
            revalidateRouteFromDataAction={revalidateRouteFromDataAction}
            onResetDataAction={onResetDataAction}
            dataSource={networkDS}
            isDataSourceReady={networkDS != null}
            lrsLayers={lrsLayers}
            type='add-line-event'
            setTooltipMsg={setTooltipMsg}
            lrsNetworkLayer={networkLayer}
            referentConfig={referentConfig}
            graphicsManager={graphicsManager}
            eventInfo={event?.eventInfo}
            />
         )}
      </div>
    </div>
  )
})
