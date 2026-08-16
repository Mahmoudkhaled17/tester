import { Immutable } from 'jimu-core'
import { constructSettingsPerView, resetConfig, setValuesForView } from '../src/common/utils'

import type { JimuMapView } from 'jimu-arcgis'
import {
  LrsLayerType,
  ModeType,
  type LrsLayer,
  highlightColor
} from 'widgets/shared-code/lrs'
import { calculateAlignmentPosition, getCodedValueLabel, getDataRecordFromObjId, getPointFromPolyline } from '../src/runtime/utils/utils'

jest.mock('../../../shared-code/lib/lrs/utilities/widget-settings-utils', () => ({
  getDefaultEvent: jest.fn(),
  getDefaultNetwork: jest.fn().mockReturnValue({
    serviceId: 1,
    name: 'CountyLog'
  }),
  getDefaultAttributeSet: jest.fn()
}))

const immutable = Immutable as unknown as (value: unknown) => any

const mockSettingsPerView = immutable({
  networkLayers: [],
  eventLayers: [],
  intersectionLayers: [],
  defaultEvent: { serviceId: -1, name: '' },
  highlightStyle: { routeColor: highlightColor, width: 3 },
  defaultPointAttributeSet: '',
  defaultLineAttributeSet: '',
  attributeSets: { attributeSet: [] },
  lineEventToggle: false,
  pointEventToggle: false,
  defaultNetwork: { serviceId: -1, name: '' }
})

const mockConfig = immutable({
  lrsLayers: [],
  networkLayers: [],
  eventLayers: [],
  intersectionLayers: [],
  defaultPointAttributeSet: '',
  defaultLineAttributeSet: '',
  lineEventToggle: false,
  pointEventToggle: false
})

describe('constructSettingsPerView', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should construct default settings preview correctly', () => {
    const settings = constructSettingsPerView()
    expect(settings).toEqual({
      networkLayers: [],
      eventLayers: [],
      intersectionLayers: [],
      defaultEvent: { serviceId: -1, name: '' },
      highlightStyle: { routeColor: highlightColor, width: 3 },
      defaultPointAttributeSet: '',
      defaultLineAttributeSet: '',
      attributeSets: { attributeSet: [] },
      lineEventToggle: false,
      pointEventToggle: false,
      defaultNetwork: { serviceId: -1, name: '' }
    })
  })
})

describe('setValuesForView', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockLrsLayers = immutable([
    { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'CountyLog', layerType: LrsLayerType.Network },
    { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'Access_Control', layerType: LrsLayerType.Event },
    { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'Intersection', layerType: LrsLayerType.Intersection }
  ] as LrsLayer[])

  it('should set network, event, and intersection layers when getLayers is true', () => {
    const settingsPerView = setValuesForView(mockSettingsPerView, mockLrsLayers, true)
    expect(settingsPerView.networkLayers).toEqual(['CountyLog'])
    expect(settingsPerView.eventLayers).toEqual(['Access_Control'])
    expect(settingsPerView.intersectionLayers).toEqual(['Intersection'])
  })

  it('should not change layers when getLayers is false', () => {
    const updated = setValuesForView(mockSettingsPerView, mockLrsLayers, false)
    expect(updated.networkLayers).toEqual([])
    expect(updated.eventLayers).toEqual([])
    expect(updated.intersectionLayers).toEqual([])
  })

  it('should set defaultEvent, highlightStyle, defaultPointAttributeSet, defaultLineAttributeSet, attributeSets, lineEventToggle, pointEventToggle, and defaultNetwork', () => {
    const updated = setValuesForView(mockSettingsPerView, mockLrsLayers, true)
    expect(updated.defaultEvent).toBeDefined()
    expect(updated.highlightStyle).toEqual({ routeColor: highlightColor, width: 3 })
    expect(updated.defaultPointAttributeSet).toBe('')
    expect(updated.defaultLineAttributeSet).toBe('')
    expect(updated.attributeSets).toEqual({ attributeSet: [] })
    expect(updated.lineEventToggle).toBe(false)
    expect(updated.pointEventToggle).toBe(false)
    expect(updated.defaultNetwork).toBeDefined()
    expect(updated.defaultNetwork).toEqual({ serviceId: 1, name: 'CountyLog'})
  })

  it('should set networkLayers, eventLayers and intersection layers to empty arrays when no layers are provided and getLayers is true', () => {
    const updated = setValuesForView(mockSettingsPerView, immutable([] as LrsLayer[]), true)
    expect(updated.networkLayers).toEqual([])
    expect(updated.eventLayers).toEqual([])
    expect(updated.intersectionLayers).toEqual([])
  })

  it('should not change networkLayers, eventLayers and intersection layers when getLayers is false', () => {
    const updated = setValuesForView(mockSettingsPerView, immutable([] as LrsLayer[]), false)
    expect(updated.networkLayers).toEqual([])
    expect(updated.eventLayers).toEqual([])
    expect(updated.intersectionLayers).toEqual([])
  })

  it('when settingsPerView is null should return default constructSettingsPerView', () => {
    const updated = setValuesForView(null, immutable([] as LrsLayer[]), false)
    expect(updated.defaultEvent).toEqual(mockSettingsPerView.defaultEvent)
  })

})

describe('resetConfig', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should reset configuration to default values', () => {
    const updated = resetConfig(mockConfig, ModeType.Layer)
    expect(updated.networkLayers).toEqual([])
    expect(updated.eventLayers).toEqual([])
    expect(updated.intersectionLayers).toEqual([])
    expect(updated.defaultPointAttributeSet).toBe('')
    expect(updated.defaultLineAttributeSet).toBe('')
    expect(updated.lineEventToggle).toEqual(false)
    expect(updated.pointEventToggle).toEqual(false)
    expect(updated.highlightStyle).toEqual({ routeColor: highlightColor, width: 3 })
  })

  it('should handle null configuration gracefully', () => {
    const updated = resetConfig(null, ModeType.Layer)
    expect(updated).toEqual({})
  })
})

describe('getCodedValueLabel', () => {
  it('should return the correct label for a coded value with string type', () => {
    const fieldName = 'status'
    const value = '1'
    const fieldInfos = [
      {
        name: 'status',
        domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
      }
    ]
    expect(getCodedValueLabel(fieldName, value, fieldInfos as __esri.Field[])).toBe('1 - Active')
  })

  it('should return empty string if coded value is not found', () => {
    const fieldName = 'status'
    const value = '3'
    const fieldInfos = [
      {
        name: 'status',
        domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
      }
    ]
    expect(getCodedValueLabel(fieldName, value, fieldInfos as __esri.Field[])).toEqual('')
  })

  it('should return empty string if field name does not match', () => {
    const fieldName = 'county'
    const value = '1'
    const fieldInfos = [
      {
        name: 'status',
        domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
      }
    ]
    expect(getCodedValueLabel(fieldName, value, fieldInfos as __esri.Field[])).toEqual('')
  })
  it('should return empty string if types for code do not match', () => {
    const fieldName = 'status'
    const value = '1'
    const fieldInfos = [
      {
        name: 'status',
        domain: { type: 'coded-value', codedValues: [ { code: 1, name: 'Active' }, { code: 2, name: 'Inactive' } ] }
      }
    ]
    expect(getCodedValueLabel(fieldName, value, fieldInfos as __esri.Field[])).toEqual('')
  })
  it('should return the correct label for a coded value when types for code match', () => {
    const fieldName = 'status'
    const value = 1
    const fieldInfos = [
      {
        name: 'status',
        domain: { type: 'coded-value', codedValues: [ { code: 1, name: 'Active' }, { code: 2, name: 'Inactive' } ] }
      }
    ]
    expect(getCodedValueLabel(fieldName, value, fieldInfos as __esri.Field[])).toBe('1 - Active')
  })
})

describe('getPointFromPolyline', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return an empty graphic when attributes are not provided', () => {
    const attributes: any = null
    const selectedPoint = { type: 'point', x: 100, y: 200, spatialReference: { wkid: 4326 } }
    const measure = '10'
    const measureFields = [{ label: 'Measure', value: 'measureField' }]
    const result = getPointFromPolyline(attributes, measure, measureFields, selectedPoint as __esri.Point)
    expect(result).toEqual({})
  })

  it('should return an empty graphic when selected point is not provided', () => {
    const attributes: any = {
      ROUTE_ID: "34900002361000001",
      ROUTE_NAME: "IR 2361",
      ROUTE_NUMBER: null,
      ROUTE_TYPE: null,
      Measure: 0
    }
    const selectedPoint: __esri.Point = null
    const measure = '10'
    const measureFields = [{ label: 'Measure', value: 'measureField' }]
    const result = getPointFromPolyline(attributes, measure, measureFields, selectedPoint)
    expect(result).toEqual({})
  })

  it('should return an empty graphic when measure fields are not provided', () => {
    const attributes: any = {
      ROUTE_ID: "34900002361000001",
      ROUTE_NAME: "IR 2361",
      ROUTE_NUMBER: null,
      ROUTE_TYPE: null,
      Measure: 0
    }
    const selectedPoint = { type: 'point', x: 100, y: 200, spatialReference: { wkid: 4326 } }
    const measure = '10'
    const measureFields: Array<{ label: string, value: string }> = null
    const result = getPointFromPolyline(attributes, measure, measureFields, selectedPoint as __esri.Point)
    expect(result).toEqual({})
  })
})

describe('getDataRecordFromObjId', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return the correct record when objectId matches', () => {
    const mockRecords = [
      { getData: () => ({ OBJECTID: 1, name: 'Feature 1' }) },
      { getData: () => ({ OBJECTID: 2, name: 'Feature 2' }) },
      { getData: () => ({ OBJECTID: 3, name: 'Feature 3' }) }
    ]
    const objectId = 2
    const objectIdFieldName = 'OBJECTID'
    const result = getDataRecordFromObjId(mockRecords, objectId, objectIdFieldName)
    expect(result).toEqual(mockRecords[1])
  })

  it('should return undefined if records passed have a length of 0', () => {
    const mockRecords: any[] = []
    const objectId = 2
    const objectIdFieldName = 'OBJECTID'
    const result = getDataRecordFromObjId(mockRecords, objectId, objectIdFieldName)
    expect(result).toBeUndefined()
  })

  it('should return undefined when objectId field name does not match', () => {
    const mockRecords = [
      { getData: () => ({ OBJECTID: 1, name: 'Feature 1' }) },
      { getData: () => ({ OBJECTID: 2, name: 'Feature 2' }) },
      { getData: () => ({ OBJECTID: 3, name: 'Feature 3' }) }
    ]
    const objectId = 2
    const objectIdFieldName = 'OBJECTID123'
    const result = getDataRecordFromObjId(mockRecords, objectId, objectIdFieldName)
    expect(result).toBeUndefined()
  })

  it('should return undefined when objectId does not match', () => {
    const mockRecords = [
      { getData: () => ({ OBJECTID: 1, name: 'Feature 1' }) },
      { getData: () => ({ OBJECTID: 2, name: 'Feature 2' }) },
      { getData: () => ({ OBJECTID: 3, name: 'Feature 3' }) }
    ]
    const objectId = 9
    const objectIdFieldName = 'OBJECTID'
    const result = getDataRecordFromObjId(mockRecords, objectId, objectIdFieldName)
    expect(result).toBeUndefined()
  })

  it('should return undefined when records is null', () => {
    const mockRecords: any = null
    const objectId = 9
    const objectIdFieldName = 'OBJECTID'
    const result = getDataRecordFromObjId(mockRecords, objectId, objectIdFieldName)
    expect(result).toBeUndefined()
  })

  it('should return undefined when objectid is null', () => {
    const mockRecords = [
      { getData: () => ({ OBJECTID: 1, name: 'Feature 1' }) },
      { getData: () => ({ OBJECTID: 2, name: 'Feature 2' }) },
      { getData: () => ({ OBJECTID: 3, name: 'Feature 3' }) }
    ]
    const objectId: any = null
    const objectIdFieldName = 'OBJECTID'
    const result = getDataRecordFromObjId(mockRecords, objectId, objectIdFieldName)
    expect(result).toBeUndefined()
  })

  it('should return undefined when objectid field name is null', () => {
    const mockRecords = [
      { getData: () => ({ OBJECTID: 1, name: 'Feature 1' }) },
      { getData: () => ({ OBJECTID: 2, name: 'Feature 2' }) },
      { getData: () => ({ OBJECTID: 3, name: 'Feature 3' }) }
    ]
    const objectId = 2
    const objectIdFieldName: any = null
    const result = getDataRecordFromObjId(mockRecords, objectId, objectIdFieldName)
    expect(result).toBeUndefined()
  })
})

describe('calculateAlignmentPosition', () => {

  const mockWindow = { innerWidth: 800, innerHeight: 600 }

  it('should return undefined if view is not provided', () => {
    calculateAlignmentPosition(100, 200, null, { width: 300, height: 400 }, mockWindow)
    expect(calculateAlignmentPosition(100, 200, null, { width: 300, height: 400 }, mockWindow)).toBeUndefined()
  })

  it('should return null if popup is fully visible within the viewport', () => {
    const mockView = {} as JimuMapView
    expect(calculateAlignmentPosition(100, 200, mockView, { width: 300, height: 400 }, mockWindow)).toBeNull()
  })

  it('should adjust x coordinates if popup goes beyond the right edge of the viewport', () => {
    const mockView = {} as JimuMapView
    const result = calculateAlignmentPosition(800, 300, mockView, { width: 200, height: 200 }, mockWindow)
    expect(result).toEqual({ x: mockWindow.innerWidth - 200, y: 300 })
  })

  it ('should adjust y coordinate if popup goes beyond the bottom edge of the viewport', () => {
    const mockView = {} as JimuMapView
    const result = calculateAlignmentPosition(200, 500, mockView, { width: 200, height: 200 }, mockWindow)
    expect(result).toEqual({ x: 200, y: mockWindow.innerHeight - 200 })
  })

  it('should adjust x coordinate if popup goes beyond the left edge of the viewport', () => {
    const mockView = {} as JimuMapView
    const result = calculateAlignmentPosition(-50, 200, mockView, { width: 200, height: 200 }, mockWindow)
    expect(result).toEqual({ x: 0, y: 200 })
  })

  it('should adjust y coordinate if popup goes beyond the top edge of the viewport', () => {
    const mockView = {} as JimuMapView
    const result = calculateAlignmentPosition(200, -50, mockView, { width: 200, height: 200 }, mockWindow)
    expect(result).toEqual({ x: 200, y: 0 })
  })

  it('should adjust both x and y coordinates if popup goes beyond multiple edges of the viewport', () => {
    const mockView = {} as JimuMapView
    const result = calculateAlignmentPosition(750, 550, mockView, { width: 100, height: 100 }, mockWindow)
    expect(result).toEqual({ x: mockWindow.innerWidth - 100, y: mockWindow.innerHeight - 100 })
  })

  it('should adjust coordinates to (0,0) if popup is larger than the viewport', () => {
    const mockView = {} as JimuMapView
    const result = calculateAlignmentPosition(100, 100, mockView, { width: 900, height: 700 }, mockWindow)
    expect(result).toEqual({ x: 0, y: 0 })
  })

  it('should return undefined if window is not provided', () => {
    const mockView = {} as JimuMapView
    expect(calculateAlignmentPosition(100, 200, mockView, { width: 300, height: 400 }, null)).toBeUndefined()
  })
})