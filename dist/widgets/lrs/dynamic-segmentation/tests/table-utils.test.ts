import type SpatialReference from 'esri/geometry/SpatialReference'
import { getAttributesByTable, getFieldInfo, getLayerMap, getPendingEditsKey, getSubtypeFieldsToUpdate, getValidValues, isSubtypeField } from '../src/runtime/utils/table-utils'
import type { DynSegFieldInfo, SubtypeLayers } from '../src/config'
import { getLayer, type LrsLayer } from 'widgets/shared-code/lrs'
import type { ImmutableArray } from 'seamless-immutable'
import { DataSourceManager } from 'jimu-core'

jest.mock('widgets/shared-code/lrs', () => {
  return {
    ...jest.requireActual('widgets/shared-code/lrs'),
    getLayer: jest.fn()
  }
})

jest.spyOn(DataSourceManager, 'getInstance').mockReturnValue({
  getDataSource: jest.fn().mockImplementation((dataSourceId: string) => ({
    getIdField: jest.fn().mockReturnValue('OBJECTID')
  }))
} as any)

describe('getPendingEditsKey', () => {
  it('should return correct pending edits key', () => {
    const mockRecord = {
      attributes: {
        'SpecialNotes': 'Test note',
        'OBJECTID': 858,
        'RECORD_STATUS': 1,
        'EVENT_ID': null
      },
      geometry: {
        type: 'polyline',
        paths: [[[0, 0], [1, 1]]],
        spatialReference: { wkid: 102100 } as SpatialReference
      } as __esri.Polyline
    } as unknown as __esri.Graphic
    const eventName = 'CLEu_Turn_stayput'
    const key = getPendingEditsKey(mockRecord, eventName)
    expect(key).toBe('858.CLEu_Turn_stayput')
  })

  it('should return empty string if object id attribute is not found', ()=> {
    const mockRecord = {
      attributes: {
        'SpecialNotes': 'Test note',
        'RECORD_STATUS': 1,
        'EVENT_ID': null
      },
      geometry: {
        type: 'polyline',
        paths: [[[0, 0], [1, 1]]],
        spatialReference: { wkid: 102100 } as SpatialReference
      } as __esri.Polyline
    } as unknown as __esri.Graphic
    const eventName = 'CLEu_Turn_stayput'
    const key = getPendingEditsKey(mockRecord, eventName)
    expect(key).toBe('undefined.CLEu_Turn_stayput')
  })

  it('should return an empty string if object is null', () => {
    const mockRecord = {
      attributes: {
        'SpecialNotes': 'Test note',
        'OBJECTID': null,
        'RECORD_STATUS': 1,
        'EVENT_ID': null
      },
      geometry: {
        type: 'polyline',
        paths: [[[0, 0], [1, 1]]],
        spatialReference: { wkid: 102100 } as SpatialReference
      } as __esri.Polyline
    } as unknown as __esri.Graphic
    const eventName = 'CLEu_Turn_stayput'
    const key = getPendingEditsKey(mockRecord, eventName)
    expect(key).toBe('null.CLEu_Turn_stayput')
  })
})

describe('isSubTypeField', () => {
  const subTypeLayers: SubtypeLayers[] = [
    {
      id: '1',
      subtypeField: 'SubtypeField1',
      subtypes: [
        {
          code: 1, name: 'Type A'
        } as __esri.Subtype,
        {
          code: 2, name: 'Type B'
        } as __esri.Subtype,
      ]
    },
    {
      id: '2',
      subtypeField: 'SubtypeField2',
      subtypes: [
        {
          code: 1, name: 'Type A'
        } as __esri.Subtype,
        {
          code: 2, name: 'Type B'
        } as __esri.Subtype,
      ]
    }
  ]

  it('should return true for a valid subtype field', () => {
    const result = isSubtypeField('1', 'SubtypeField1', subTypeLayers)
    expect(result).toBe(true)
  })

  it('should return true for valid subtype field with case difference', () => {
    const result = isSubtypeField('1', 'subtypefield1', subTypeLayers)
    expect(result).toBe(true)
  })

  it('should return false for a non-subtype field', () => {
    const result = isSubtypeField('1', 'NonSubtypeField', subTypeLayers)
    expect(result).toBe(false)
  })

  it('should return false for an invalid event id', () => {
    const result = isSubtypeField('InvalidID', 'SubtypeField1', subTypeLayers)
    expect(result).toBe(false)
  })

  it('should return false if subTypeLayers is undefined', () => {
    const result = isSubtypeField('1', 'SubtypeField1', undefined)
    expect(result).toBe(false)
  })
})

describe('getAttributesByTable', () => {
  const fieldInfos = [
    { EventType: 'line', eventName: 'CLEu_Sample_stayput', isOidField: false, eventLayerId: '28', eventAlias: 'CLEu_Sample_stayput', featureFieldName: "WIDENING_POTENTIAL", originalFieldName: "WIDENING_POTENTIAL" },
    { EventType: 'line', eventName: 'CLEu_AccessCtrl_stayput', isOidField: true, eventLayerId: '9', eventAlias: 'CLEu_AccessCtrl_stayput', featureFieldName: "OBJECTID_7", originalFieldName: "OBJECTID_7" },
    { EventType: 'line', eventName: 'CLEu_BridgeL_stayput', isOidField: false, eventLayerId: '10', eventAlias: 'CLEu_BridgeL_stayput', featureFieldName: "EVENT_ID_7", originalFieldName: "EVENT_ID_7" },
    { EventType: 'Point', eventName: 'CLEu_Friction_stayput', isOidField: true, eventLayerId: '2', eventAlias: 'CLEu_Friction_stayput', featureFieldName: "X_SECTION", originalFieldName: "X_SECTION" },
    { EventType: 'Point', eventName: 'CLEu_RefPost_stayput', isOidField: false, eventLayerId: '3', eventAlias: 'CLEu_RefPost_stayput', featureFieldName: "SpecialNotes_4", originalFieldName: "SpecialNotes_4" },
  ] as unknown as DynSegFieldInfo[]

  const record = {
    attributes: {
      'EVENT_ID_7': '40332',
      'OBJECTID_7': 52,
      'X_SECTION': null,
      'WIDENING_POTENTIAL': null,
      'SpecialNotes_4': 'Test note',
      'RECORD_STATUS': 1,
      'EVENT_ID': null,
      route_id: '36000000052000001',
      from_measure: 0,
      to_measure: 100,
      from_date: 1398902400000,
      to_date: null
    },
    geometry: {
      type: 'polyline',
      paths: [[[0, 0], [1, 1]]],
      spatialReference: { wkid: 102100 } as SpatialReference
    } as __esri.Polyline
  } as unknown as __esri.Graphic

  const tableName = 'CLEu_Sample_stayput'

  it('should return attributes for the specified table', () => {
    const result = getAttributesByTable(fieldInfos, record, tableName, true)
    expect(result.size).toBe(6)
    expect(result.get('WIDENING_POTENTIAL')).toBe(null)
    expect(result.get('from_measure')).toBe(0)
    expect(result.get('to_measure')).toBe(100)
    expect(result.get('from_date')).toBe(1398902400000)
    expect(result.get('to_date')).toBe(null)
  })

  it('should return default fields - route id, from - to date, from - to measure if table name does not match any field info', () => {
    const tableName = 'CLEu_Signal_stayput'
    const result = getAttributesByTable(fieldInfos, record, tableName, true)
    expect(result.size).toBe(5)
  })

  it('should include OID field if getOiDField is true', () => {
    const result = getAttributesByTable(fieldInfos, record, 'CLEu_AccessCtrl_stayput', true)
    expect(result.size).toBe(6)
    expect(result.get('OBJECTID_7')).toBe(52)
  })

  it('should handle null fieldInfos gracefully', () => {
    const fieldInfos: DynSegFieldInfo[] | null = null
    const result = getAttributesByTable(fieldInfos, record, tableName, true)
    expect(result.size).toBe(5)
  })

  it('should handle null record gracefully', () => {
    const record: __esri.Graphic | null = null
    const result = getAttributesByTable(fieldInfos, record, tableName, true)
    expect(result.size).toBe(0)
  })
})

describe('getLayerMap', () => {
  const mockLayer = { id: 'layer1' }
  const lrsLayers = [
    {
      serviceId: 1,
      useDataSource: { dataSourceId: 'ds1' }
    },
    {
      serviceId: 2,
      useDataSource: { dataSourceId: 'ds2' }
    }
  ]

  const attributeSet = [
    { layerId: '1', fields: ['fieldA'] },
    { layerId: '2', fields: ['fieldB'] }
  ]

  beforeEach(() => {
    (getLayer as jest.Mock).mockClear()
    ;(getLayer as jest.Mock).mockResolvedValue(mockLayer)
  })

it('should return a map with layers for each attributeSet layerId', async () => {
    const result = await getLayerMap(lrsLayers as any, attributeSet as any)

    expect(result instanceof Map).toBe(true)
    expect(result.size).toBe(2)
    expect(result.get('1')).toBe(mockLayer)
    expect(result.get('2')).toBe(mockLayer)
    expect(getLayer).toHaveBeenCalledTimes(2)
  })

  it('should skip layers not found in lrsLayers', async () => {
    const missingAttributeSet = [
      { layerId: '3', fields: ['fieldC'] }
    ]
    const result = await getLayerMap(lrsLayers as any, missingAttributeSet as any)
    expect(result.size).toBe(0)
    expect(getLayer).not.toHaveBeenCalled()
  })

  it('should handle empty attributeSet', async () => {
    const result = await getLayerMap(lrsLayers as any, [] as any)
    expect(result.size).toBe(0)
    expect(getLayer).not.toHaveBeenCalled()
  })
})

describe('getFieldInfo', () => {

  it('should return an empty array if feature layer is not defined', () => {
    const featureLayer: __esri.FeatureLayer | null = null
    const lrsLayers = [
      {
        name: 'Atnuatr_stayput',
        layerType: 'EVENT',
        eventInfo: {
          eventIdFieldName: 'EVENT_ID',
          datasetName: "CLEu_Atnuatr_stayput",
          isPointEvent: true
        }
      },
      {
        name: "GuardRl stayput",
        eventInfo: {
          eventIdFieldName: 'EVENT_ID',
          datasetName: "CLEu_GuardRl_stayput",
          isPointEvent: false
        }
      },
      {
        name: 'Median stayput',
        eventInfo: {
          eventIdFieldName: 'EVENT_ID',
          datasetName: "CLEu_Median_stayput",
          isPointEvent: false
        }
      },
      {
        name: 'Redline',
        originName: 'Redline',
        eventInfo: {}
      }
    ]
    const subTypeLayers: SubtypeLayers[] = []
    const result = getFieldInfo(featureLayer as unknown as __esri.FeatureLayer, lrsLayers as unknown as ImmutableArray<LrsLayer>, subTypeLayers as unknown as SubtypeLayers[])
    expect(result).toEqual([])
  })

  it('should return correct field info for field.alias with or without dot', () => {
    const featureLayer = {
      type: 'feature',
      fields: [
        { name: 'OBJECTID', alias: 'OBJECTID', type: 'oid' },
        { name: 'DATE_ATTR_EFFECTIVE_2', alias: 'CLEu_BridgePt_stayput.DATE_ATTR_EFFECTIVE', type: 'date' },
        { name: 'EVENT_ID_5', alias: 'CLEu_TrfcCtSt_stayput.EVENT_ID', type: 'string' },
        { name: 'NONWP_LONGLOW_CRACKWIDTH_IN', alias: 'CLEu_Crack_stayput.NONWP_LONGLOW_CRACKWIDTH_IN', type: 'double' },
        { name: 'FEDERAL_AID', alias: 'CLEu_FedAid_stayput.FEDERAL_AID', type: 'small-integer' }
      ]
    } as unknown as __esri.FeatureLayer
    const lrsLayers = [
      {
        name: 'BridgePt stayput',
        serviceId: 1,
        layerType: 'EVENT',
        useDataSource: {
          dataSourceId: 'featureLayer_BridgePt_stayput',
          mainDataSourceId: 'featureLayer_BridgePt_stayput',
          rootDataSourceId: 'ds1',
        },
        eventInfo: {
          eventIdFieldName: 'DATE_ATTR_EFFECTIVE',
          datasetName: "CLEu_BridgePt_stayput",
          isPointEvent: true
        }
      },
      {
        name: "TrfcCtSt stayput",
        serviceId: 2,
        layerType: 'EVENT',
        useDataSource: {
          dataSourceId: 'featureLayer_TrfcCtSt_stayput',
          mainDataSourceId: 'featureLayer_TrfcCtSt_stayput',
          rootDataSourceId: 'ds2',
        },
        eventInfo: {
          eventIdFieldName: 'EVENT_ID',
          datasetName: "CLEu_TrfcCtSt_stayput",
          isPointEvent: false
        }
      },
      {
        name: 'Crack stayput',
        serviceId: 3,
        layerType: 'EVENT',
        useDataSource: {
          dataSourceId: 'featureLayer_Crack_stayput',
          mainDataSourceId: 'featureLayer_Crack_stayput',
          rootDataSourceId: 'ds3',
        },
        eventInfo: {
          eventIdFieldName: 'NONWP_LONGLOW_CRACKWIDTH_IN',
          datasetName: "CLEu_Crack_stayput",
          isPointEvent: false
        }
      },
      {
        name: 'Redline',
        serviceId: 4,
        originName: 'Redline',
        useDataSource: {
          dataSourceId: 'featureLayer_Redline',
          mainDataSourceId: 'featureLayer_Redline',
          rootDataSourceId: 'ds4',
        },
        eventInfo: {}
      }
    ]
    const subTypeLayers: SubtypeLayers[] = []
    const result = getFieldInfo(featureLayer as unknown as __esri.FeatureLayer, lrsLayers as unknown as ImmutableArray<LrsLayer>, subTypeLayers as unknown as SubtypeLayers[])
    expect(result[1]).toEqual({
      EventType: 'Point',
      eventName: 'CLEu_BridgePt_stayput',
      isOidField: false,
      eventLayerId: '1',
      eventAlias: 'CLEu_BridgePt_stayput',
      featureFieldName: 'DATE_ATTR_EFFECTIVE_2',
      featureFieldAlias: 'CLEu_BridgePt_stayput.DATE_ATTR_EFFECTIVE',
      originalFieldName: 'DATE_ATTR_EFFECTIVE',
      index: 1,
      intersectionSeparators: [],
      isEventIdField: true,
      isIntersectionIdField: false,
      isIntersectionNameField: false,
      isIntersectionRouteIdField: false,
      isSubtypeField: false,
      isUNField: false,
      originalFieldAlias: undefined,
      displayField: undefined,
      exclude: true,
      editable: false,
      visible: true
    })
  })

  it('should handle null lrsLayers gracefully', () => {
    const featureLayer = {
      type: 'feature',
      fields: [
        { name: 'OBJECTID', alias: 'OBJECTID', type: 'oid' },
        { name: 'DATE_ATTR_EFFECTIVE_2', alias: 'CLEu_BridgePt_stayput.DATE_ATTR_EFFECTIVE', type: 'date' },
        { name: 'EVENT_ID_5', alias: 'CLEu_TrfcCtSt_stayput.EVENT_ID', type: 'string' },
        { name: 'NONWP_LONGLOW_CRACKWIDTH_IN', alias: 'CLEu_Crack_stayput.NONWP_LONGLOW_CRACKWIDTH_IN', type: 'double' },
        { name: 'FEDERAL_AID', alias: 'CLEu_FedAid_stayput.FEDERAL_AID', type: 'small-integer' }
      ]
    } as unknown as __esri.FeatureLayer
    const lrsLayers: ImmutableArray<LrsLayer> | null = null
    const subTypeLayers: SubtypeLayers[] = []
    const result = getFieldInfo(featureLayer as unknown as __esri.FeatureLayer, lrsLayers as unknown as ImmutableArray<LrsLayer>, subTypeLayers as unknown as SubtypeLayers[])
    expect(result).toEqual([])
  })
})

describe('getSubtypeFieldsToUpdate', () => {
  const fieldInfo = {
    isSubtypeField: true,
    eventLayerId: '1'
  } as any

  const subTypeInfo = [
    {
      id: '1',
      subtypeField: 'METHOD',
      subtypes: [
        {
          code: 2,
          defaultValues: {
            SpecialNotes: 'Default Note',
            Status: 'Active',
            method: 0
          },
          name: 'Installed'
        },
        {
          code: 3,
          defaultValues: {
            SpecialNotes: 'Other Note',
            Status: 'Inactive',
            method: 1
          },
          name: 'Calculated'
        }
      ]
    }
  ] as unknown as SubtypeLayers[]

  it('should return fields to update when record values differ from subtype defaults', () => {
    const record = {
      attributes: {
        SpecialNotes: 'Old Note',
        Status: 'Inactive'
      }
    }
    const result = getSubtypeFieldsToUpdate(2, fieldInfo, record as any, subTypeInfo)
    expect(result.get('SpecialNotes')).toBe('Default Note')
    expect(result.get('Status')).toBe('Active')
    expect(result.size).toBe(2)
  })

  it('should return empty map if record values match subtype defaults', () => {
    const record = {
      attributes: {
        SpecialNotes: 'Default Note',
        Status: 'Active'
      }
    }
    const result = getSubtypeFieldsToUpdate(2, fieldInfo, record as any, subTypeInfo)
    expect(result.size).toBe(0)
  })

  it('should return empty map if fieldInfo is not a subtype field', () => {
    const nonSubtypeFieldInfo = { isSubtypeField: false, eventLayerId: '1' }
    const record = { attributes: { SpecialNotes: 'Old Note', Status: 'Inactive' } }
    const result = getSubtypeFieldsToUpdate(2, nonSubtypeFieldInfo as any, record as any, subTypeInfo)
    expect(result.size).toBe(0)
  })

  it('should return empty map if subtype code not found', () => {
    const record = { attributes: { SpecialNotes: 'Old Note', Status: 'Inactive' } }
    const result = getSubtypeFieldsToUpdate(99, fieldInfo, record as any, subTypeInfo)
    expect(result.size).toBe(0)
  })

  it('should return empty map if defaultValues is undefined', () => {
    const subTypeInfoNoDefaults = [
      {
        id: '1',
        subtypeField: 'TYPE',
        subtypes: [
          { code: 2 }
        ]
      }
    ]
    const record = { attributes: { SpecialNotes: 'Old Note', Status: 'Inactive' } }
    const result = getSubtypeFieldsToUpdate(2, fieldInfo, record as any, subTypeInfoNoDefaults as any)
    expect(result.size).toBe(0)
  })

  it('should return empty map if record is null', () => {
    const record: __esri.Graphic | null = null
    const result = getSubtypeFieldsToUpdate(2, fieldInfo, record, subTypeInfo)
    expect(result.size).toBe(0)
  })
})

describe('getValidValues', () => {
  const eventFields = [
    { name: 'pressurevalue', alias: 'P_OperatingPressureRange.pressurevalue' },
    { name: 'engtorouteid_9', alias: 'P_OperatingPressureRange.engtorouteid_9' },
    { name: 'fromrefoffset_10', alias: 'P_OperatingPressureRange.fromrefoffset_10' },
    { name: 'torefoffset_10', alias: 'P_OperatingPressureRange.torefoffset_10' }
  ] as any

  const record = {
    attributes: {
      'pressurevalue': 1,
      'engtorouteid_9': 2,
      'fromrefoffset_10': 3,
      'torefoffset_10': 4
    },
    geometry: {
      paths: [[[0, 0], [1, 1]]],
      spatialReference: { wkid: 102100 } as SpatialReference,
      type: 'polyline'
    } as __esri.Polyline
  } as __esri.Graphic

  const fieldGroups = [
    {
      fields: ['pressurevalue', 'engtorouteid_9'],
      contingencies: [
        {
          values: {
            pressurevalue: { objectType: 'code', codedValue: { code: 1 } },
            engtorouteid_9: { objectType: 'code', codedValue: { code: 2 } }
          }
        },
        {
          values: {
            pressurevalue: { objectType: 'code', codedValue: { code: 2 } },
            engtorouteid_9: { objectType: 'code', codedValue: { code: 3 } }
          }
        }
      ]
    }
  ]

  it('should return valid values for a field when contingencies match record attributes', () => {
    const result = getValidValues(fieldGroups, eventFields, record, 'pressurevalue')
    expect(result).toContain(1)
    expect(result).not.toContain(2)
  })

  it('should return empty array if field is not contingent', () => {
    const result = getValidValues(fieldGroups, eventFields, record, 'NonContingentField')
    expect(result).toEqual([])
  })

  it('should return empty array if fieldGroups is empty', () => {
    const result = getValidValues([], eventFields, record, 'pressurevalue')
    expect(result).toEqual([])
  })

  it('should return empty array if contingencies do not match record attributes', () => {
    const record2 = {
      attributes: {
        'pressurevalue': 3,
        'engtorouteid_9': 4
      }
    } as any
    const result = getValidValues(fieldGroups, eventFields, record2, 'pressurevalue')
    expect(result).toEqual([])
  })

  it('should mark contingentValueOk true if activeCode matches code', () => {
    const record = {
      attributes: {
        'pressurevalue': 2,
        'engtorouteid_9': 3
      }
    }
    const result = getValidValues(fieldGroups, eventFields, record as any, 'pressurevalue')
    expect(result).toContain(2)
  })
})