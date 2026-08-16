import type { LrsLayer } from 'widgets/shared-code/lrs'
import { getSubtypeLayers, reorderGraphicsLayer } from '../src/runtime/utils/feature-layer-utils'
import type { ImmutableArray, ImmutableObject } from 'jimu-core'
import type { AttributeSetParam } from '../src/config'

describe('getSubtypeLayers', () => {
  it('should return empty sub type layers if no matching event is found', async () => {
    const lrsLayers= [
      {
        serviceId: 0,
        originName: 'Atnuatr_stayput',
        layerType: 'EVENT',
        name: 'Atnuatr_stayput',
        useDataSource: {
          dataSourceId: 'featureLayer_Atnuatr_stayput_0',
          mainDataSourceId: 'featureLayer_Atnuatr_stayput_0',
          rootDataSourceId: 'ds1',
        }
      } as ImmutableObject<LrsLayer>,
      {
        serviceId: 1,
        originName: 'StateLog Euclidean',
        layerType: 'NETWORK',
        name: 'StateLog_Euclidean',
        useDataSource: {
          dataSourceId: 'featureLayer_StateLog_Euclidean_1',
          mainDataSourceId: 'featureLayer_StateLog_Euclidean_1',
          rootDataSourceId: 'ds2',
        }
      } as ImmutableObject<LrsLayer>,
      {
        serviceId: 2,
        originName: "Shouldr_stayput",
        layerType: 'EVENT',
        name: 'Shouldr_stayput',
        useDataSource: {
          dataSourceId: 'featureLayer_Shouldr_stayput_2',
          mainDataSourceId: 'featureLayer_Shouldr_stayput_2',
          rootDataSourceId: 'ds3',
        }
      } as ImmutableObject<LrsLayer>,
      {
        serviceId: 3,
        originName: 'Crack_stayput',
        layerType: 'EVENT',
        name: 'Crack_stayput',
        useDataSource: {
          dataSourceId: 'featureLayer_Crack_stayput_3',
          mainDataSourceId: 'featureLayer_Crack_stayput_3',
          rootDataSourceId: 'ds4',
        }
      } as ImmutableObject<LrsLayer>,
    ]
    const attributeSet: AttributeSetParam[] = [
      {
        layerId: '20',
        fields: ['RECORD_STATUS', 'ATTENUATOR_TYPE', 'ATTENUATOR_SIDE', 'ATTENUATOR_DIRECTION', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
      },
      {
        layerId: '10',
        fields: ['RECORD_STATUS', 'TURN_TYPE', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
      },
      {
        layerId: '12',
        fields: ['RECORD_STATUS', 'SHOULDER_TYPE', 'SHOULDER_WIDTH', 'X_SECTION', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
      },
      {
        layerId: '13',
        fields: ['RECORD_STATUS', 'NONWP_LONGLOW_FT', 'NONWP_LONGLOW_CRACKWIDTH_IN', 'NONWP_LONGLOW_CRACKDEPTH_IN', 'NONWP_LONGMED_FT', 'NONWP_LONGMED_CRACKWIDTH_IN']
      },
    ]
    const subtypeLayers = await getSubtypeLayers(lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(subtypeLayers.length).toBe(0)
  })
  it('should return empty sub type layers if lrsLayers is empty', async () => {
    const lrsLayers = []
    const attributeSet: AttributeSetParam[] = [
      {
        layerId: '20',
        fields: ['RECORD_STATUS', 'ATTENUATOR_TYPE', 'ATTENUATOR_SIDE', 'ATTENUATOR_DIRECTION', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
      },
      {
        layerId: '10',
        fields: ['RECORD_STATUS', 'TURN_TYPE', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
      },
      {
        layerId: '12',
        fields: ['RECORD_STATUS', 'SHOULDER_TYPE', 'SHOULDER_WIDTH', 'X_SECTION', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
      },
      {
        layerId: '13',
        fields: ['RECORD_STATUS', 'NONWP_LONGLOW_FT', 'NONWP_LONGLOW_CRACKWIDTH_IN', 'NONWP_LONGLOW_CRACKDEPTH_IN', 'NONWP_LONGMED_FT', 'NONWP_LONGMED_CRACKWIDTH_IN']
      },
    ]
    const subtypeLayers = await getSubtypeLayers(lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(subtypeLayers.length).toBe(0)
  })
  it('should return empty sub type layers if attributeSet is empty', async () => {
    const lrsLayers = [
      {
        serviceId: 0,
        originName: 'Atnuatr_stayput',
        layerType: 'EVENT',
        name: 'Atnuatr_stayput',
        useDataSource: {
          dataSourceId: 'featureLayer_Atnuatr_stayput_0',
          mainDataSourceId: 'featureLayer_Atnuatr_stayput_0',
          rootDataSourceId: 'ds1',
        }
      } as ImmutableObject<LrsLayer>,
      {
        serviceId: 1,
        originName: 'StateLog Euclidean',
        layerType: 'NETWORK',
        name: 'StateLog_Euclidean',
        useDataSource: {
          dataSourceId: 'featureLayer_StateLog_Euclidean_1',
          mainDataSourceId: 'featureLayer_StateLog_Euclidean_1',
          rootDataSourceId: 'ds2',
        }
      } as ImmutableObject<LrsLayer>,
    ]
    const attributeSet: AttributeSetParam[] = []
    const subtypeLayers = await getSubtypeLayers(lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(subtypeLayers.length).toBe(0)
  })
  it('should handle null lrsLayers', async () => {
    const lrsLayers = null
    const attributeSet: AttributeSetParam[] = []
    const subtypeLayers = await getSubtypeLayers(lrsLayers, attributeSet)
    expect(subtypeLayers.length).toBe(0)
  })
  it('should handle null attributeSet', async () => {
    const lrsLayers = [
      {
        serviceId: 0,
        originName: 'Atnuatr_stayput',
        layerType: 'EVENT',
        name: 'Atnuatr_stayput',
        useDataSource: {
          dataSourceId: 'featureLayer_Atnuatr_stayput_0',
          mainDataSourceId: 'featureLayer_Atnuatr_stayput_0',
          rootDataSourceId: 'ds1',
        }
      } as ImmutableObject<LrsLayer>,
      {
        serviceId: 1,
        originName: 'StateLog Euclidean',
        layerType: 'NETWORK',
        name: 'StateLog_Euclidean',
        useDataSource: {
          dataSourceId: 'featureLayer_StateLog_Euclidean_1',
          mainDataSourceId: 'featureLayer_StateLog_Euclidean_1',
          rootDataSourceId: 'ds2',
        }
      } as ImmutableObject<LrsLayer>,
    ]
    const attributeSet = null
    const subtypeLayers = await getSubtypeLayers(lrsLayers as unknown as ImmutableArray<LrsLayer>, attributeSet)
    expect(subtypeLayers.length).toBe(0)
  })
})

describe('reorderGraphicsLayer', () => {
  it('should reorder highlightLayer to the top if not already at the top', () => {
    const highlightLayer = { id: 'highlight' }
    const layers = [
      { id: 'layer1' },
      { id: 'layer2' },
      highlightLayer
    ]
    const reorder = jest.fn()
    const jimuMapView = {
      view: {
        map: {
          layers,
          reorder
        }
      }
    }

    layers.splice(1, 0, layers.pop())
    expect(layers[layers.length - 1]).not.toBe(highlightLayer)

    reorderGraphicsLayer(jimuMapView as any, highlightLayer as any)
    expect(reorder).toHaveBeenCalledWith(highlightLayer, layers.length - 1)
  })

  it('should not reorder if highlightLayer is already at the top', () => {
    const highlightLayer = { id: 'highlight' }
    const layers = [
      { id: 'layer1' },
      { id: 'layer2' },
      highlightLayer
    ]
    const reorder = jest.fn()
    const jimuMapView = {
      view: {
        map: {
          layers,
          reorder
        }
      }
    }

    expect(layers[layers.length - 1]).toBe(highlightLayer)

    reorderGraphicsLayer(jimuMapView as any, highlightLayer as any)
    expect(reorder).not.toHaveBeenCalled()
  })

  it('should do nothing if highlightLayer is not found', () => {
    const highlightLayer = { id: 'highlight' }
    const layers = [
      { id: 'layer1' },
      { id: 'layer2' }
    ]
    const reorder = jest.fn()
    const jimuMapView = {
      view: {
        map: {
          layers,
          reorder
        }
      }
    }

    reorderGraphicsLayer(jimuMapView as any, highlightLayer as any)
    expect(reorder).not.toHaveBeenCalled()
  })
})