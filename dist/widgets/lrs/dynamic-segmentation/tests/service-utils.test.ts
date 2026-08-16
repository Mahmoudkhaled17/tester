import type { AttributeSet, LrsLayer, NetworkInfo } from 'widgets/shared-code/lrs'
import type { LocationParam, RouteInfoFromDataAction } from '../src/config'
import { DataSourceManager, type ImmutableArray, type ImmutableObject } from 'jimu-core'
import { getAttributeSetParam, getLocations } from '../src/runtime/utils/service-utils'

jest.spyOn(DataSourceManager, 'getInstance').mockReturnValue({
  getDataSource: jest.fn().mockImplementation((dataSourceId: string) => ({
    getIdField: jest.fn().mockReturnValue('OBJECTID')
  }))
} as any)

describe('getLocations', () => {
  const networkUrl = "Test_Data/MapServer/exts/LRServer/networkLayers/35"
  it('should return locations array when valid routeId, fromMeasure and toMeasure is provided', () => {
    const params: RouteInfoFromDataAction = {
      fromMeasure: 0,
      toMeasure: 1.45,
      routeId: '96000002430000001',
      routeName: '',
      geometry: null,
      networkInfo: {
        datasetName: "CountyLog_Euclidean",
        networkUrl: networkUrl,
        objectIdFieldName: "OBJECTID",
        lrsNetworkId: 1,
        useRouteId: true,
        useRouteName: false
      } as ImmutableObject<NetworkInfo>
    }
    const locations: LocationParam[] = getLocations(params)
    expect(locations.length).toBe(1)
    expect(locations[0].routeId).toBe('96000002430000001')
    expect(locations[0].fromMeasure).toBe(0)
    expect(locations[0].toMeasure).toBe(1.45)
  })
  it('should return locations array with only routeId when valid routeId is provided but fromMeasure and toMeasure is not provided', () => {
    const params: RouteInfoFromDataAction = {
      routeId: '96000002430000001',
      routeName: '',
      geometry: null,
      networkInfo: {
        datasetName: "CountyLog_Euclidean",
        networkUrl: networkUrl,
        objectIdFieldName: "OBJECTID",
        lrsNetworkId: 1,
        useRouteId: true,
        useRouteName: false
      } as ImmutableObject<NetworkInfo>
    }
    const locations: LocationParam[] = getLocations(params)
    expect(locations.length).toBe(1)
    expect(locations[0].routeId).toBe('96000002430000001')
    expect(locations[0].fromMeasure).toBeUndefined()
    expect(locations[0].toMeasure).toBeUndefined()
  })
  it('should return empty locations array when routeId is not provided', () => {
    const params: RouteInfoFromDataAction = {
      routeName: '',
      geometry: null,
      networkInfo: {
        datasetName: "CountyLog_Euclidean",
        networkUrl: networkUrl,
        objectIdFieldName: "OBJECTID",
        lrsNetworkId: 1,
        useRouteId: true,
        useRouteName: false
      } as ImmutableObject<NetworkInfo>
    }
    const locations: LocationParam[] = getLocations(params)
    expect(locations.length).toBe(0)
  })
  it('should handle null params gracefully', () => {
    const params: RouteInfoFromDataAction = null
    const locations: LocationParam[] = getLocations(params)
    expect(locations.length).toBe(0)
  })
})

describe('getAttributeSetParam', () => {
  const networkUrl = "Test_Data/MapServer/exts/LRServer/networkLayers/35"
  const params: RouteInfoFromDataAction = {
    routeName: '',
    geometry: null,
    networkInfo: {
      datasetName: "CountyLog_Euclidean",
      networkUrl: networkUrl,
      objectIdFieldName: "OBJECTID",
      lrsNetworkId: 1,
      useRouteId: true,
      useRouteName: false
    } as ImmutableObject<NetworkInfo>
  }

  const attributeSet: AttributeSet = {
    title: 'All Line Events',
    layers: [
      {
        layerId: 2,
        layerName: 'BridgePt_stayput',
        fields: [
          {name: 'RECORD_STATUS', value: ''},
          {name: 'NBI', value: ''},
          {name: 'DATE_ATTR_EFFECTIVE', value: ''},
          {name: 'SpecialNotes', value: ''}
        ]
      },
      {
        layerId: 3,
        layerName: 'Lane_stayput',
        fields: [
          {name: 'RECORD_STATUS', value: ''},
          {name: 'LANE_WIDTH', value: '8'},
          {name: 'DATE_ATTR_EFFECTIVE', value: ''},
          {name: 'SpecialNotes', value: ''}
        ]
      },
      {
        layerId: 4,
        layerName: 'Speed_stayput',
        fields: [
          {name: 'RECORD_STATUS', value: ''},
          {name: 'SPEED_LIMIT', value: ''},
          {name: 'DIRECTION', value: ''},
          {name: 'SpecialNotes', value: ''}
        ]
      }
    ]
  } as AttributeSet

  const lrsLayers = [
    {
      serviceId: 1,
      originName: 'CountyLog Euclidean',
      layerType: 'NETWORK',
      name: 'CountyLog_Euclidean',
      useDataSource: {
        dataSourceId: 'featureLayer_CountyLog_Euclidean_1',
        mainDataSourceId: 'featureLayer_CountyLog_Euclidean_1',
        rootDataSourceId: 'ds1',
      },
      eventInfo: {}
    } as ImmutableObject<LrsLayer>,
    {
      serviceId: 2,
      originName: 'BridgePt_stayput',
      layerType: 'NETWORK',
      name: 'BridgePt stayput',
      useDataSource: {
        dataSourceId: 'featureLayer_BridgePt_stayput_1',
        mainDataSourceId: 'featureLayer_BridgePt stayput_1',
        rootDataSourceId: 'ds2',
      },
      eventInfo: {
        datasetName: "CLEu_BridgePt_stayput",
        parentNetworkId: 1,
        isPointEvent: true,
        canSpanRoutes: false,
        eventIdFieldName: "EVENT_ID",
      }
    } as ImmutableObject<LrsLayer>,
    {
      serviceId: 3,
      originName: 'Lane_stayput',
      layerType: 'EVENT',
      name: 'Lane stayput',
      useDataSource: {
        dataSourceId: 'featureLayer_Lane_stayput_1',
        mainDataSourceId: 'featureLayer_Lane_stayput_1',
        rootDataSourceId: 'ds3',
      },
      eventInfo: {
        datasetName: "CLEu_Lane_stayput",
        parentNetworkId: 1,
        isPointEvent: false,
        canSpanRoutes: false,
        eventIdFieldName: "EVENT_ID",
      }
    } as ImmutableObject<LrsLayer>,
    {
      serviceId: 4,
      originName: 'Speed_stayput',
      layerType: 'EVENT',
      name: 'Speed stayput',
      useDataSource: {
        dataSourceId: 'featureLayer_Speed_stayput_1',
        mainDataSourceId: 'featureLayer_Speed_stayput_1',
        rootDataSourceId: 'ds4',
      },
      eventInfo: {
        datasetName: "CLEu_Speed_stayput",
        parentNetworkId: 1,
        isPointEvent: false,
        canSpanRoutes: false,
        eventIdFieldName: "EVENT_ID",
      }
    } as ImmutableObject<LrsLayer>
  ]

  it('should return attribute set params for valid routeInfo and lrsLayers', () => {
    const attributeSets = getAttributeSetParam(params, lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(attributeSets.length).toBe(3)
  })

  it('should return empty attribute set params when lrsLayers is empty', () => {
    const lrsLayers: LrsLayer[] = []
    const attributeSets = getAttributeSetParam(params, lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(attributeSets.length).toBe(0)
  })

  it('should return empty attribute set params when routeInfo is null', () => {
    const params: RouteInfoFromDataAction = null
    const attributeSets = getAttributeSetParam(params, lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(attributeSets.length).toBe(0)
  })

  it('should return empty attribute set params when routeInfo.networkInfo is null', () => {
    const params: RouteInfoFromDataAction = {
      routeName: '',
      geometry: null,
      networkInfo: null
    }
    const attributeSets = getAttributeSetParam(params, lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(attributeSets.length).toBe(0)
  })

  it('should return empty attribute set if lrsNetworkId does not match with any eventParentNetworkId in lrsLayers', () => {
    const params: RouteInfoFromDataAction = {
      routeName: '',
      geometry: null,
      networkInfo: {
        datasetName: "StateLog_Euclidean",
        networkUrl: networkUrl,
        objectIdFieldName: "OBJECTID",
        lrsNetworkId: 4,
        useRouteId: true,
        useRouteName: false
      } as ImmutableObject<NetworkInfo>
    }
    const attributeSets = getAttributeSetParam(params, lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(attributeSets.length).toBe(0)
  })

})