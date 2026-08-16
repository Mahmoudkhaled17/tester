import { type DynSegFieldInfo, EventType, type SubtypeLayers, type Track, type TrackRecord } from '../src/config'
import { DynSegFields } from '../src/constants'
import { getCodedValueDomains, getCodedValueLabel, getMFromX, getSubtypeCodedValue, getXFromM, getDisplayField, getDisplayFieldType,
  getDisplayFieldInfo, getEventIdField, getIsPoint,
  getIntersectionIdField,
  getEventType,
  getObjectIdFieldName,
  getObjectIdValue,
  getZoomFromExtent,
  getHasValue,
  getAttributesByDiagram,
  isColumnBlank,
  isRowBlank,
  convertImageToCanvas,
  getAttributeSetDisplayField,
  mergeGeometry,
  getValue,
  canMerge,
  getSubtypeLabel,
  mergeTracks,
  trimCanvas,
  getSldItemLeft,
  getSldItemRight,
  getSldItemWidth,
  isColorLight
} from '../src/runtime/utils/diagram-utils'

const mockUnionOperator = {
    execute: jest.fn((geom1, geom2) => ({ merged: [geom1, geom2] }))
  }

  // Mock loadArcGISJSAPIModule to return our mockUnionOperator
  jest.mock('jimu-core', () => ({
    ...jest.requireActual('jimu-core'),
    loadArcGISJSAPIModule: jest.fn((moduleName: string) => {
      if (moduleName === 'esri/geometry/operators/unionOperator') {
        return mockUnionOperator
      }
      throw new Error('Unknown module')
    })
  }))

describe('getCodedValueLabel', () => {
  it('should return the correct label for a coded value with a string type', () => {
    const value = '1'
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    }
    expect(getCodedValueLabel(value, field as __esri.Field)).toBe('Active')
  })

  it('should return empty string if coded value is not found', () => {
    const value = '3'
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    }
    expect(getCodedValueLabel(value, field as __esri.Field)).toEqual('')
  })

  it('should return empty string if types for code do not match', () => {
    const value = '1'
    const field = {
      name: 'status',
        domain: { type: 'coded-value', codedValues: [ { code: 1, name: 'Active' }, { code: 2, name: 'Inactive' } ] }
    }
    expect(getCodedValueLabel(value, field as __esri.Field)).toEqual('')
  })

  it('should return the correct label for a coded value when types for code match', () => {
    const value = 1
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: 1, name: 'Active' }, { code: 2, name: 'Inactive' } ] }
    }
    expect(getCodedValueLabel(value, field as __esri.Field)).toBe('Active')
  })
})

describe('getCodedValueDomains', () => {
  it('should return the coded value domain for a field with a coded value domain', () => {
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: 1, name: 'Active' }, { code: 2, name: 'Inactive' } ] }
    }
    expect(getCodedValueDomains(field as __esri.Field)).toEqual(field.domain)
  })

  it('should return null if field has no domain', () => {
    const field = {
      name: 'status',
      domain: null as any
    }
    expect(getCodedValueDomains(field as __esri.Field)).toEqual(null)
  })

  it ('should return null if field domain is not coded value type', () => {
    const field = {
      name: 'status',
      domain: { type: 'range', minValue: 1, maxValue: 10 }
    }
    expect(getCodedValueDomains(field as __esri.Field)).toEqual(null)
  })

  it('should return null if field is undefined', () => {
    expect(getCodedValueDomains(undefined)).toEqual(null)
  })
})

describe('getXFromM', () => {
  const measureRange = { from: 100, to: 200 }
  const sldWidth = 500

  it('returns NaN if m is NaN', () => {
    expect(getXFromM(NaN, measureRange, sldWidth)).toBeNaN()
  })

  it('returns 0 when m is at the start of the measure range', () => {
    expect(getXFromM(100, measureRange, sldWidth)).toBe(0)
  })

  it('returns sldWidth when m is at the end of the measure range', () => {
    expect(getXFromM(200, measureRange, sldWidth)).toBe(sldWidth)
  })

  it('returns half the sldWidth when m is in the middle of the range', () => {
    expect(getXFromM(150, measureRange, sldWidth)).toBe(250)
  })

  it('floors the result when x is fractional', () => {
    expect(getXFromM(101, measureRange, sldWidth)).toBe(5)
    expect(getXFromM(199, measureRange, sldWidth)).toBe(495)
  })

  it('handles m less than the from value (extrapolates)', () => {
    expect(getXFromM(90, measureRange, sldWidth)).toBeLessThan(0)
  })

  it('handles m greater than the to value (extrapolates)', () => {
    expect(getXFromM(210, measureRange, sldWidth)).toBeGreaterThan(sldWidth)
  })

  it('should handle measure range empty', () => {
    expect(getXFromM(100, null, sldWidth)).toBe(NaN)
  })

  it('should handle sldWidth 0', () => {
    expect(getXFromM(100, measureRange, 0)).toBe(0)
  })
})

describe('getMFromX', () => {
  const measureRange = { from: 100, to: 200 }
  const sldWidth = 500

  it('returns NaN if x is NaN', () => {
    expect(getMFromX(NaN, measureRange, sldWidth)).toBeNaN()
  })

  it('returns from value when x is 0', () => {
    expect(getMFromX(0, measureRange, sldWidth)).toBe(measureRange.from)
  })

  it('returns to value when x is sldWidth', () => {
    expect(getMFromX(sldWidth, measureRange, sldWidth)).toBe(measureRange.to)
  })

  it('returns the midpoint measure when x is half the sldWidth', () => {
    expect(getMFromX(sldWidth / 2, measureRange, sldWidth)).toBe((measureRange.from + measureRange.to) / 2)
  })

  it('returns the correct measure for fractional x values', () => {
    expect(getMFromX(5, measureRange, sldWidth)).toBe(101)
    expect(getMFromX(495, measureRange, sldWidth)).toBe(199)
  })

  it('handles x less than 0 (extrapolates)', () => {
    expect(getMFromX(-10, measureRange, sldWidth)).toBeLessThan(measureRange.from)
  })

  it('handles x greater than sldWidth (extrapolates)', () => {
    expect(getMFromX(sldWidth + 10, measureRange, sldWidth)).toBeGreaterThan(measureRange.to)
  })

  it('should handle measure range empty', () => {
    expect(getMFromX(100, null, sldWidth)).toBe(NaN)
  })

  it('should handle sldWidth 0', () => {
    expect(getMFromX(100, measureRange, 0)).toBe(NaN)
  })
})

describe('getDisplayField', () => {
  const mockFields: __esri.Field[] = [
    { name: 'RECORD_STATUS_25', alias: 'CLEu_Turn_stayput.RECORD_STATUS', type: 'small-integer' } as __esri.Field,
    { name: 'TURN_TYPE', alias: 'CLEu_Turn_stayput.TURN_TYPE', type: 'string' } as __esri.Field,
    { name: 'DATE_ATTR_EFFECTIVE_24', alias: 'CLEu_Turn_stayput.DATE_ATTR_EFFECTIVE', type: 'date' } as __esri.Field,
    { name: 'OBJECTID_26', alias: 'CLEu_Turn_stayput.OBJECTID', type: 'integer' } as __esri.Field
  ]

  it ('should return the correct field based on displayField in record', () => {
    const record = {
      index: 0,
      displayField: 'TURN_TYPE'
    } as TrackRecord
    expect(getDisplayField(mockFields, record)).toEqual({ name: 'TURN_TYPE', alias: 'CLEu_Turn_stayput.TURN_TYPE', type: 'string' })
  })

  it ('should return null if no fields', () => {
    const mockFields: __esri.Field[] | null = null
    const record = {
      index: 0,
      displayField: 'TURN_TYPE'
    } as TrackRecord
    expect(getDisplayField(mockFields, record)).toEqual(undefined)
  })

  it ('should return null if no record', () => {
    const record: TrackRecord | null = null
    expect(getDisplayField(mockFields, record)).toEqual(undefined)
  })

  it('should return undefined when fields do not contain the record display field', () => {
    const record = {
      index: 0,
      displayField: 'MISSING_FIELD'
    } as TrackRecord
    expect(getDisplayField(mockFields, record)).toEqual(undefined)
  })
})

describe('getDisplayFieldType', () => {
  it('should return "subtype" if field is a subtype field', () => {

    const mockFieldInfos: DynSegFieldInfo = {
      originalFieldName: 'EVENT_ID',
      originalFieldAlias: 'Event ID',
      isSubtypeField: true,
      eventName: "CLEu_Lane_stayput",
      EventType: EventType.Line
    } as DynSegFieldInfo

    const mockField = { name: 'EVENT_ID_11', alias: 'CLEu_Lane_stayput.EVENT_ID', type: 'string' } as __esri.Field
    expect(getDisplayFieldType(mockField, mockFieldInfos)).toBe('subtype')
  })

  it ('should return "text" if field does not match any conditions', () => {
    const mockFieldInfos: DynSegFieldInfo = {
      originalFieldName: 'EVENT_ID',
      originalFieldAlias: 'Event ID',
      isSubtypeField: false,
      eventName: "CLEu_Crack_stayput",
      EventType: EventType.Line
    } as DynSegFieldInfo
    const mockField = { name: 'EVENT_ID_3', alias: 'CLEu_Crack_stayput.EVENT_ID', type: 'string' }
    expect(getDisplayFieldType(mockField as __esri.Field, mockFieldInfos)).toBe('text')
  })

  it ('should return "range" if field type is domain', () => {
    const mockFieldInfos: DynSegFieldInfo = {
      originalFieldName: 'EVENT_ID',
      originalFieldAlias: 'Event ID',
      isSubtypeField: false,
      eventName: "CLEu_Crack_stayput",
      EventType: EventType.Line
    } as DynSegFieldInfo
    const mockField = { name: 'EVENT_ID_3', alias: 'CLEu_Crack_stayput.EVENT_ID', domain: { type: 'range', minValue: 1, maxValue: 10 } }
    expect(getDisplayFieldType(mockField as __esri.Field, mockFieldInfos)).toBe('range')
  })

  it ('should return "text" if field is null', () => {
    const mockFieldInfos: DynSegFieldInfo = {
      originalFieldName: 'EVENT_ID',
      originalFieldAlias: 'Event ID',
      isSubtypeField: false,
      eventName: "CLEu_Crack_stayput",
      EventType: EventType.Line
    } as DynSegFieldInfo
    const mockField: __esri.Field | null = null
    expect(getDisplayFieldType(mockField, mockFieldInfos)).toBe("text")
  })

  it('should return subType if fieldInfo is not defined and featureLayer.subtypeField === field.name', () => {
    const mockFieldInfos: DynSegFieldInfo | null = null
    const mockField = { name: 'EVENT_ID_3', alias: 'CLEu_Crack_stayput.EVENT_ID', type: 'string' } as __esri.Field
    const mockFeatureLayer = { subtypeField: 'EVENT_ID_3'} as __esri.FeatureLayer
    expect(getDisplayFieldType(mockField, mockFieldInfos, mockFeatureLayer)).toBe('subtype')
  })

})

describe('getDisplayFieldInfo', () => {
 const mockFieldInfos: DynSegFieldInfo[] = [
  {
    originalFieldName: 'EVENT_ID',
    originalFieldAlias: 'EventID',
    isSubtypeField: false,
    eventName: "CLEu_TrafcSct_stayput",
    EventType: EventType.Line
  } as DynSegFieldInfo, {
      originalFieldName: 'OBJECTID',
      originalFieldAlias: '',
      isSubtypeField: false,
      eventName: "",
      EventType: 'Undefined'
  } as DynSegFieldInfo, {
      originalFieldName: 'SpecialNotes',
      originalFieldAlias: 'SpecialNotes',
      isSubtypeField: false,
      eventName: "CLEu_TrafcSct_stayput",
      EventType: 'Line'
  } as DynSegFieldInfo]

  it ('should return the correct fieldInfo when there is a match', () => {
    const record = {
      index: 0,
      displayField: 'EVENT_ID'
    } as TrackRecord
    expect(getDisplayFieldInfo(mockFieldInfos, record)).toEqual(mockFieldInfos[0])
  })

  it ('should return undefined when there is no match', () => {
    const record = {
      index: 0,
      displayField: 'TURN_TYPE'
    } as TrackRecord
    expect(getDisplayFieldInfo(mockFieldInfos, record)).toBeUndefined()
  })

  it ('should return undefined when record is null', () => {
    const record: TrackRecord | null = null
    expect(getDisplayFieldInfo(mockFieldInfos, record)).toEqual(undefined)
  })

  it ('should return undefined when mockFieldInfos is null', () => {
    const record = {
      index: 0,
      displayField: 'TURN_TYPE'
    } as TrackRecord
    expect(getDisplayFieldInfo(null, record)).toEqual(undefined)
  })
})

describe('getEventIdField', () => {
  const mockFieldInfos: DynSegFieldInfo[] = [
    {
      originalFieldName: 'EVENT_ID',
      originalFieldAlias: 'EventID',
      isSubtypeField: false,
      eventName: "CLEu_TrafcSct_stayput",
      EventType: EventType.Line,
      isEventIdField: true
    } as DynSegFieldInfo, {
        originalFieldName: 'OBJECTID',
        originalFieldAlias: '',
        isSubtypeField: false,
        eventName: "",
        EventType: 'Undefined'
    } as DynSegFieldInfo, {
        originalFieldName: 'SpecialNotes',
        originalFieldAlias: 'SpecialNotes',
        isSubtypeField: false,
        eventName: "CLEu_TrafcSct_stayput",
        EventType: 'Line'
    } as DynSegFieldInfo
  ]

  it ('should return the correct eventId fieldInfo', () => {
    expect(getEventIdField(mockFieldInfos)).toEqual(mockFieldInfos[0])
  })

  it ('should return undefined when there is no eventId fieldInfo', () => {
    const noEventIdFieldInfos = mockFieldInfos.filter(f => !f.isEventIdField)
    expect(getEventIdField(noEventIdFieldInfos)).toBeUndefined()
  })

  it('should return undefined when fieldInfos is null', () => {
    const fieldInfos: DynSegFieldInfo[] | null = null
    expect(getEventIdField(fieldInfos)).toBeUndefined()
  })
})

describe('getIntersectionIdField', () => {
  const record = { displayField: 'INTERSECTION_ID' } as TrackRecord
  const mockFieldInfos: DynSegFieldInfo[] = [
    {
      originalFieldName: 'EVENT_ID',
      originalFieldAlias: 'Event ID',
      eventName: 'LineEvent',
      EventType: EventType.Line,
      isEventIdField: true
    } as DynSegFieldInfo,
    {
      originalFieldName: 'INTERSECTION_ID',
      originalFieldAlias: 'Intersection ID',
      eventName: 'IntersectionEvent',
      EventType: EventType.Intersection,
      isIntersectionIdField: true
    } as DynSegFieldInfo
  ]

  it('should return the intersection id field info when present', () => {
    expect(getIntersectionIdField(mockFieldInfos, record)).toEqual(mockFieldInfos[1])
  })

  it('should return undefined when no intersection id field exists', () => {
    const withoutIntersection = mockFieldInfos.filter(f => !f.isIntersectionIdField)
    expect(getIntersectionIdField(withoutIntersection, record)).toBeUndefined()
  })

  it('should return undefined when fieldInfos is null', () => {
    expect(getIntersectionIdField(null, record)).toBeUndefined()
  })
})

describe('getEventType', () => {
  const record = { displayField: 'EVENT_ID' } as TrackRecord

  it('should return event type from event id field when present', () => {
    const fieldInfos: DynSegFieldInfo[] = [
      {
        originalFieldName: 'EVENT_ID',
        originalFieldAlias: 'Event ID',
        eventName: 'LineEvent',
        EventType: EventType.Line,
        isEventIdField: true
      } as DynSegFieldInfo,
      {
        originalFieldName: 'INTERSECTION_ID',
        originalFieldAlias: 'Intersection ID',
        eventName: 'IntersectionEvent',
        EventType: EventType.Intersection,
        isIntersectionIdField: true
      } as DynSegFieldInfo
    ]

    expect(getEventType(fieldInfos, record)).toBe(EventType.Line)
  })

  it('should return event type from intersection id field when event id field is missing', () => {
    const fieldInfos: DynSegFieldInfo[] = [
      {
        originalFieldName: 'INTERSECTION_ID',
        originalFieldAlias: 'Intersection ID',
        eventName: 'IntersectionEvent',
        EventType: EventType.Intersection,
        isIntersectionIdField: true
      } as DynSegFieldInfo
    ]

    expect(getEventType(fieldInfos, record)).toBe(EventType.Intersection)
  })

  it('should return null when neither event id nor intersection id field exists', () => {
    const fieldInfos: DynSegFieldInfo[] = [
      {
        originalFieldName: 'SOME_FIELD',
        originalFieldAlias: 'Some Field',
        eventName: 'AnyEvent',
        EventType: EventType.Point
      } as DynSegFieldInfo
    ]

    expect(getEventType(fieldInfos, record)).toBeNull()
  })
})

describe('getIsPoint', () => {
  const mockFieldInfos: DynSegFieldInfo[] = [
    {
      originalFieldName: 'EVENT_ID',
      originalFieldAlias: 'EventID',
      isSubtypeField: false,
      eventName: "CLEu_TrafcSct_stayput",
      EventType: EventType.Line,
      isEventIdField: true
    } as DynSegFieldInfo, {
        originalFieldName: 'OBJECTID',
        originalFieldAlias: '',
        isSubtypeField: false,
        eventName: "",
        EventType: 'Undefined'
    } as DynSegFieldInfo, {
        originalFieldName: 'SpecialNotes',
        originalFieldAlias: 'SpecialNotes',
        isSubtypeField: false,
        eventName: "CLEu_TrafcSct_stayput",
        EventType: 'Line'
    } as DynSegFieldInfo
  ]

  it ('should return false if event is a line event', () => {
    const tableName = 'CLEu_TrafcSct_stayput'
    expect(getIsPoint(mockFieldInfos, tableName)).toBe(false)
  })

  it ('should return true if event is a point event', () => {
    const pointFieldInfos: DynSegFieldInfo[] = [
      {
        originalFieldName: 'EVENT_ID',
        originalFieldAlias: 'EventID',
        isSubtypeField: false,
        eventName: "CLEu_BridgetPt_stayput",
        EventType: EventType.Point,
        isEventIdField: true
      } as DynSegFieldInfo,
        mockFieldInfos[1],
        mockFieldInfos[2]
    ]
    const tableName = 'CLEu_BridgetPt_stayput'
    expect(getIsPoint(pointFieldInfos, tableName)).toBe(true)
  })

  it ('should return false if fieldInfos is null', () => {
    const tableName = 'CLEu_BridgetPt_stayput'
    expect(getIsPoint(null, tableName)).toBe(false)
  })

  it ('should return false if no matching field is found', () => {
    const tableName = 'CLEu_BridgetPt_stayput'
    expect(getIsPoint(mockFieldInfos, tableName)).toBe(false)
  })
})

describe('getObjectIdFieldName', () => {
  const trackRecord: TrackRecord = {
    fieldInfos: [
      {
        featureFieldAlias : "CLEu_TrafcSct_stayput.EVENT_ID",
        featureFieldName: "OBJECTID_25",
        isEventIdField: false,
        isOidField: true
      } as DynSegFieldInfo,
      {
        featureFieldAlias : "Route ID",
        featureFieldName: "ROUTE_ID",
        isEventIdField: false,
        isOidField: false
      }
    ]
  } as TrackRecord

  it ('should return the correct objectId field name', () => {
    expect(getObjectIdFieldName(trackRecord)).toBe('OBJECTID_25')
  })

  it ('should return empty string if no oid field', () => {
    const noOidTrackRecord: TrackRecord = {
      fieldInfos: []
    } as TrackRecord
    expect(getObjectIdFieldName(noOidTrackRecord)).toBe('')
  })

  it(' should return empty string if trackRecord is null', () => {
    expect(getObjectIdFieldName(null)).toBe('')
  })
})

describe('getObjectIdValue', () => {
  it('should return NaN if trackRecord is null', () => {
    expect(getObjectIdValue(null)).toBeNaN()
  })

  it('should return NaN if attributes is null', () => {
    const trackRecord: TrackRecord = {
      attributes: null
    } as TrackRecord
    expect(getObjectIdValue(trackRecord)).toBeNaN()
  })
})

describe('getZoomFromExtent', () => {
  it('should return 1 when displayRatio < 1', () => {
    const result = getZoomFromExtent(0, 5, 20) // rangeDiff = 5, defaultRange = 20 → ratio = 0.25
    expect(result).toBe(1)
  })

  it('should return displayRatio when displayRatio = 1', () => {
    const result = getZoomFromExtent(0, 10, 10) // ratio = 1
    expect(result).toBe(1)
  })

  it('should return displayRatio when displayRatio > 1', () => {
    const result = getZoomFromExtent(0, 50, 10) // ratio = 5
    expect(result).toBe(5)
  })

  it('should handle negative fromM and toM correctly', () => {
    const result = getZoomFromExtent(-10, 10, 10) // rangeDiff = 20, defaultRange = 10 → ratio = 2
    expect(result).toBe(2)
  })

  it('should handle case where fromM > toM (negative rangeDiff)', () => {
    const result = getZoomFromExtent(20, 10, 10) // rangeDiff = -10, ratio = -1 → < 1 so returns 1
    expect(result).toBe(1)
  })

  it('should handle defaultRange being larger than rangeDiff', () => {
    const result = getZoomFromExtent(0, 30, 100) // ratio = 0.3
    expect(result).toBe(1)
  })

  it('should return NaN if defaultRange = 0 (division by zero)', () => {
    const result = getZoomFromExtent(0, 10, 0)
    expect(result).toBe(1)
  })

  it('should handle NaN inputs gracefully', () => {
    const result = getZoomFromExtent(NaN, 10, 5)
    expect(result).toBe(1)
  })
})

describe('getHasValue', () => {
  it ('should return true if the record has an event id value for the given tableName', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: [
        {
          featureFieldAlias : "CLEu_TrafcSct_stayput.EVENT_ID",
          featureFieldName: "OBJECTID_25",
          isEventIdField: false,
          isOidField: true,
          eventName: "CLEu_TrafcSct_stayput"
        } as DynSegFieldInfo,
        {
          featureFieldAlias : "Route ID",
          featureFieldName: "ROUTE_ID",
          isEventIdField: false,
          isOidField: false,
          eventName: ""
        }
      ]
    } as TrackRecord
    const record = {
      attributes: {
        OBJECTID_25: 1,
        ROUTE_ID: null
      }
    } as __esri.Graphic
    const tableName = 'CLEu_TrafcSct_stayput'
    expect(getHasValue(trackRecord.fieldInfos, record, tableName)).toBe(true)
  })

  it ('should return false event name does not match the table name', () => {
      const trackRecord: TrackRecord = {
        fieldInfos: [
          {
            featureFieldAlias : "CLEu_TrafcSct_stayput.EVENT_ID",
            featureFieldName: "OBJECTID_25",
            isEventIdField: false,
            isOidField: true,
            eventName: "CLEu_TrafcSct_stayput"
          } as DynSegFieldInfo,
          {
            featureFieldAlias : "Route ID",
            featureFieldName: "ROUTE_ID",
            isEventIdField: false,
            isOidField: false,
            eventName: ""
          }
        ]
      } as TrackRecord
      const record = {
        attributes: {
          OBJECTID_25: 1,
          ROUTE_ID: null
        }
      } as __esri.Graphic
      const tableName = 'CLEu_BridgePt_stayput'
      expect(getHasValue(trackRecord.fieldInfos, record, tableName)).toBe(false)
  })

  it ('should return false if field is not an oidField', () => {
      const trackRecord: TrackRecord = {
        fieldInfos: [
          {
            featureFieldAlias : "CLEu_TrafcSct_stayput.EVENT_ID",
            featureFieldName: "OBJECTID_25",
            isEventIdField: false,
            isOidField: false,
            eventName: "CLEu_TrafcSct_stayput"
          } as DynSegFieldInfo,
          {
            featureFieldAlias : "Route ID",
            featureFieldName: "ROUTE_ID",
            isEventIdField: false,
            isOidField: false,
            eventName: ""
          }
        ]
      } as TrackRecord
      const record = {
        attributes: {
          OBJECTID_25: 1,
          ROUTE_ID: null
        }
      } as __esri.Graphic
      const tableName = 'CLEu_TrafcSct_stayput'
      expect(getHasValue(trackRecord.fieldInfos, record, tableName)).toBe(false)
  })

  it ('should return false if eventOidValue is undefined', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: [
        {
          featureFieldAlias : "CLEu_TrafcSct_stayput.EVENT_ID",
          featureFieldName: "OBJECTID_25",
          isEventIdField: false,
          isOidField: true,
          eventName: "CLEu_TrafcSct_stayput"
        } as DynSegFieldInfo,
        {
          featureFieldAlias : "Route ID",
          featureFieldName: "ROUTE_ID",
          isEventIdField: false,
          isOidField: false,
          eventName: ""
        }
      ]
    } as TrackRecord
    const record = {
      attributes: {
        OBJECTID_25: undefined,
        ROUTE_ID: null
      }
    } as __esri.Graphic
    const tableName = 'CLEu_TrafcSct_stayput'
    expect(getHasValue(trackRecord.fieldInfos, record, tableName)).toBe(false)
  })

  it ('should return false if eventOidValue is an empty string', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: [
        {
          featureFieldAlias : "CLEu_TrafcSct_stayput.EVENT_ID",
          featureFieldName: "OBJECTID_25",
          isEventIdField: false,
          isOidField: true,
          eventName: "CLEu_TrafcSct_stayput"
        } as DynSegFieldInfo,
        {
          featureFieldAlias : "Route ID",
          featureFieldName: "ROUTE_ID",
          isEventIdField: false,
          isOidField: false,
          eventName: ""
        }
      ]
    } as TrackRecord
    const record = {
      attributes: {
        OBJECTID_25: '',
        ROUTE_ID: null
      }
    } as __esri.Graphic
    const tableName = 'CLEu_TrafcSct_stayput'
    expect(getHasValue(trackRecord.fieldInfos, record, tableName)).toBe(false)
  })

  it ('should return false if record exists but has not attributes', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: [
        {
          featureFieldAlias : "CLEu_TrafcSct_stayput.EVENT_ID",
          featureFieldName: "OBJECTID_25",
          isEventIdField: false,
          isOidField: true,
          eventName: "CLEu_TrafcSct_stayput"
        } as DynSegFieldInfo,
        {
          featureFieldAlias : "Route ID",
          featureFieldName: "ROUTE_ID",
          isEventIdField: false,
          isOidField: false,
          eventName: ""
        }
      ]
    } as TrackRecord
    const record = {
      attributes: {}
    } as __esri.Graphic
    const tableName = 'CLEu_TrafcSct_stayput'
    expect(getHasValue(trackRecord.fieldInfos, record, tableName)).toBe(false)
  })

  it ('should return false if fieldInfos has length 0', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: []
    } as TrackRecord
    const record = {
      attributes: {
        OBJECTID_25: 1,
        ROUTE_ID: null
      }
    } as __esri.Graphic
    const tableName = 'CLEu_TrafcSct_stayput'
    expect(getHasValue(trackRecord.fieldInfos, record, tableName)).toBe(false)
  })

  it ('should return false if fieldInfos is null', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: null
    } as TrackRecord
    const record = {
      attributes: {
        OBJECTID_25: 1,
        ROUTE_ID: null
      }
    } as __esri.Graphic
    const tableName = 'CLEu_TrafcSct_stayput'
    expect(getHasValue(trackRecord.fieldInfos, record, tableName)).toBe(false)
  })
})

describe('shouldSkipTrack', () => {
  it('should return false if record says event is a point event and fieldInfos says line event', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: [
        {
          featureFieldAlias : "CLEu_TrafcSct_stayput.EVENT_ID",
          featureFieldName: "OBJECTID_25",
          isEventIdField: false,
          isOidField: true,
          eventName: "CLEu_TrafcSct_stayput",
          EventType: EventType.Line
        } as DynSegFieldInfo,
        {
          featureFieldAlias : "Route ID",
          featureFieldName: "ROUTE_ID",
          isEventIdField: false,
          isOidField: false,
          eventName: ""
        }
      ]
    } as TrackRecord
    const record = {
      attributes: {
        OBJECTID_25: 1,
        ROUTE_ID: null,
        event_type: EventType.Point
      }
    } as __esri.Graphic
    const tableName = 'CLEu_TrafcSct_stayput'
    expect(getIsPoint(trackRecord.fieldInfos, tableName)).toBe(false)
    expect((record.attributes.event_type as EventType) === EventType.Point).toBe(true)
    expect((record.attributes.event_type as EventType) !== trackRecord.fieldInfos[0].EventType).toBe(true)
  })

  it('should return false if record says event is a line event and fieldInfos says point event', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: [
        {
          featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
          featureFieldName: "ACCESS_CONTROL",
          isEventIdField: false,
          isOidField: false,
          eventName: "CLEu_AccessCtrl_stayput",
          EventType: EventType.Line
        } as DynSegFieldInfo,
        {
          featureFieldAlias : "Route ID",
          featureFieldName: "ROUTE_ID",
          isEventIdField: false,
          isOidField: false,
          eventName: ""
        }
      ]
    } as TrackRecord
    const record = {
      attributes: {
        OBJECTID_25: 1,
        ROUTE_ID: null,
        event_type: EventType.Point
      }
    } as __esri.Graphic
    const tableName = 'CLEu_AccessCtrl_stayput'
    expect(getIsPoint(trackRecord.fieldInfos, tableName)).toBe(false)
    expect((record.attributes.event_type as EventType) === EventType.Point).toBe(true)
    expect((record.attributes.event_type as EventType) === trackRecord.fieldInfos[0].EventType).toBe(false)
  })

  it('should return true if record says event is a point event and fieldInfos says point event', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: [
        {
          featureFieldAlias : "CLEu_Friction_stayput.FRICTION_SYSTEM",
          featureFieldName: "FRICTION_SYSTEM",
          isEventIdField: false,
          isOidField: false,
          eventName: "CLEu_Friction_stayput",
          EventType: EventType.Point
        } as DynSegFieldInfo,
        {
          featureFieldAlias : "Route ID",
          featureFieldName: "ROUTE_ID",
          isEventIdField: false,
          isOidField: false,
          eventName: ""
        }
      ]
    } as TrackRecord
    const record = {
      attributes: {
        OBJECTID_25: 1,
        ROUTE_ID: null,
        event_type: EventType.Point
      }
    } as __esri.Graphic
    const tableName = 'CLEu_Friction_stayput'
    expect(getIsPoint(trackRecord.fieldInfos, tableName)).toBe(true)
    expect((record.attributes.event_type as EventType) === EventType.Point).toBe(true)
    expect((record.attributes.event_type as EventType) === trackRecord.fieldInfos[0].EventType).toBe(true) // take a look
  })

  it ('shoudld return false if no fieldInfos', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: null
    } as TrackRecord
    const tableName = 'CLEu_AccessCtrl_stayput'
    expect(getIsPoint(trackRecord.fieldInfos, tableName)).toBe(false)
  })

  it('should return false if no record', () => {
    const trackRecord: TrackRecord = {
      fieldInfos: [
        {
          featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
          featureFieldName: "ACCESS_CONTROL",
          isEventIdField: false,
          isOidField: false,
          eventName: "CLEu_AccessCtrl_stayput",
          EventType: EventType.Line
        } as DynSegFieldInfo,
        {
          featureFieldAlias : "Route ID",
          featureFieldName: "ROUTE_ID",
          isEventIdField: false,
          isOidField: false,
          eventName: ""
        }
      ]
    } as TrackRecord
    const tableName = 'CLEu_AccessCtrl_stayput'
    expect(getIsPoint(trackRecord.fieldInfos, tableName)).toBe(false)
  })
})

describe('getAttributesByDiagram', () => {
  it('should return the correct attributes for the given diagram', () => {
    const fieldInfos = [
      {
        featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
        featureFieldName: "ACCESS_CONTROL",
        isEventIdField: false,
        isOidField: false,
        eventName: "CLEu_AccessCtrl_stayput",
        EventType: EventType.Line
      } as DynSegFieldInfo,
      {
        featureFieldAlias : "Route ID",
        featureFieldName: "ROUTE_ID",
        isEventIdField: false,
        isOidField: false,
        eventName: ""
      } as DynSegFieldInfo,
      {
        featureFieldAlias : "CLEu_Friction_stayput.FRICTION_SYSTEM",
        featureFieldName: "FRICTION_SYSTEM",
        isEventIdField: false,
        isOidField: false,
        eventName: "CLEu_Friction_stayput",
        EventType: EventType.Point
      } as DynSegFieldInfo,
      {
        featureFieldAlias : "CLEu_Pvmnt_stayput.RECORD_STATUS",
        featureFieldName: "RECORD_STATUS_17",
        isEventIdField: false,
        isOidField: false,
        eventName: "CLEu_Pvmnt_stayput",
        originalFieldName: "RECORD_STATUS",
        EventType: EventType.Point
      } as DynSegFieldInfo
    ]
    const tableName = 'CLEu_Pvmnt_stayput'
    const attributesMap = new Map<string, string | number | Date>([
      ['RECORD_STATUS', 5],
      [DynSegFields.routeIdName, '96000002430000001'],
      [DynSegFields.fromDateName, '2020-01-01'],
      [DynSegFields.toDateName, '2021-01-01'],
      [DynSegFields.fromMeasureName, 10],
      [DynSegFields.toMeasureName, 20]
    ])
    const record = {
      attributes: attributesMap
    } as TrackRecord
    const getOidField = true
    const result = getAttributesByDiagram(fieldInfos, record, tableName, getOidField)
    expect(Object.fromEntries(result)).toEqual({
      RECORD_STATUS: 5,
      route_id: '96000002430000001',
      from_date: '2020-01-01',
      to_date: '2021-01-01',
      from_measure: 10,
      to_measure: 20
    })
  })

  it('should return the correct attributes for the given diagram', () => {
    const fieldInfos = [
      {
        featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
        featureFieldName: "ACCESS_CONTROL",
        isEventIdField: false,
        isOidField: false,
        eventName: "CLEu_AccessCtrl_stayput",
        EventType: EventType.Line
      } as DynSegFieldInfo,
      {
        featureFieldAlias : "Route ID",
        featureFieldName: "ROUTE_ID",
        isEventIdField: false,
        isOidField: false,
        eventName: ""
      } as DynSegFieldInfo,
      {
        featureFieldAlias : "CLEu_Friction_stayput.FRICTION_SYSTEM",
        featureFieldName: "FRICTION_SYSTEM",
        isEventIdField: false,
        isOidField: false,
        eventName: "CLEu_Friction_stayput",
        EventType: EventType.Point
      } as DynSegFieldInfo,
      {
        featureFieldAlias : "CLEu_Pvmnt_stayput.RECORD_STATUS",
        featureFieldName: "RECORD_STATUS_17",
        isEventIdField: false,
        isOidField: true,
        eventName: "CLEu_Pvmnt_stayput",
        originalFieldName: "RECORD_STATUS",
        EventType: EventType.Point
      } as DynSegFieldInfo
    ]
    const tableName = 'CLEu_Pvmnt_stayput'
    const attributesMap = new Map<string, string | number | Date>([
      ['RECORD_STATUS_17', 5],
      [DynSegFields.routeIdName, '96000002430000001'],
      [DynSegFields.fromDateName, '2020-01-01'],
      [DynSegFields.toDateName, '2021-01-01'],
      [DynSegFields.fromMeasureName, 10],
      [DynSegFields.toMeasureName, 20]
    ])
    const record = {
      attributes: attributesMap
    } as TrackRecord
    const getOidField = true
    const result = getAttributesByDiagram(fieldInfos, record, tableName, getOidField)
    expect(Object.fromEntries(result)).toEqual({
      RECORD_STATUS_17: 5,
      route_id: '96000002430000001',
      from_date: '2020-01-01',
      to_date: '2021-01-01',
      from_measure: 10,
      to_measure: 20
    })
  })

  it ('should handle null fieldInfos', () => {
    const fieldInfos: DynSegFieldInfo[] | null = null
    const attributesMap = new Map<string, string | number | Date>([
      ['RECORD_STATUS_17', 5],
      [DynSegFields.routeIdName, '96000002430000001'],
      [DynSegFields.fromDateName, '2020-01-01'],
      [DynSegFields.toDateName, '2021-01-01'],
      [DynSegFields.fromMeasureName, 10],
      [DynSegFields.toMeasureName, 20]
    ])
    const record = {
      attributes: attributesMap
    } as TrackRecord
    const getOidField = true
    const tableName = 'CLEu_Pvmnt_stayput'
    const result = getAttributesByDiagram(fieldInfos, record, tableName, getOidField)
    expect(Object.fromEntries(result)).toEqual(
    {
      "from_date": "2020-01-01",
      "from_measure": 10,
      "route_id": "96000002430000001",
      "to_date": "2021-01-01",
      "to_measure": 20
    }
  )
  })
})

describe('getSubtypeCodedValue', () => {
  it ('should return the correct coded value for the given subtype', () => {
    const fieldInfo = {
      featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
      featureFieldName: "ACCESS_CONTROL",
      isEventIdField: false,
      isOidField: false,
      eventName: "CLEu_AccessCtrl_stayput",
      EventType: EventType.Line,
      eventLayerId: '1'
    } as DynSegFieldInfo

    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: '',
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    expect(getSubtypeCodedValue(field, fieldInfo, subTypeLayers)).toEqual([{"label": "Type A", "value": 1}, {"label": "Type B", "value": 2}])
  })

  it('should return empty array if no matching subtype layer is found', () => {
    const fieldInfo = {
      featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
      featureFieldName: "ACCESS_CONTROL",
      isEventIdField: false,
      isOidField: false,
      eventName: "CLEu_AccessCtrl_stayput",
      EventType: EventType.Line,
      eventLayerId: '1'
    } as DynSegFieldInfo
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '2',
        subtypes: [
          {
            code: 3, name: 'Type C',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 4, name: 'Type D',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    expect(getSubtypeCodedValue(field, fieldInfo, subTypeLayers)).toEqual([])
  })

  it('should return empty array if fieldInfo is null', () => {
    const fieldInfo: DynSegFieldInfo | null = null
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    expect(getSubtypeCodedValue(field, fieldInfo, subTypeLayers)).toEqual([])
  })

  it('should return coded values from the feature layer if fieldInfo is null and feature layer is defined', () => {
    const fieldInfo: DynSegFieldInfo | null = null
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const featureLayer = { subtypes: [
      { code: 1, name: 'Type A' },
      { code: 2, name: 'Type B'}
    ] } as __esri.FeatureLayer
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    expect(getSubtypeCodedValue(field, fieldInfo, subTypeLayers, featureLayer)).toEqual([{"label": "Type A", "value": 1}, {"label": "Type B", "value": 2}])
  })
})

describe('isColumnBlank', () => {
  const mockImageData = {
    data: new Uint8ClampedArray([
      255, 0, 0, 255,
      0, 255, 0, 255,
      0, 0, 255, 255,
      255, 255, 255, 255
    ]),
    width: 2,
    height: 2
  } as ImageData

  it('should return false if any pixel in the column is not blank (alpha != 0)', () => {
    expect(isColumnBlank(mockImageData, 2, 0, 0, 2)).toBe(false)
    expect(isColumnBlank(mockImageData, 2, 1, 0, 2)).toBe(false)
  })

  it('should return true if all pixels in the column are blank (alpha == 0)', () => {
    const blankData = new Uint8ClampedArray([
      255, 0, 0, 0,
      0, 255, 0, 255,
      0, 0, 255, 0,
      255, 255, 255, 255
    ])
    const blankImageData = { ...mockImageData, data: blankData }
    expect(isColumnBlank(blankImageData as ImageData, 2, 0, 0, 2)).toBe(true)
    expect(isColumnBlank(blankImageData as ImageData, 2, 1, 0, 2)).toBe(false)
  })

  it('should return true for a single blank pixel in the column', () => {
    expect(isColumnBlank(mockImageData, 2, 1, 0, 0)).toBe(true)
    expect(isColumnBlank(mockImageData, 2, 1, 1, 2)).toBe(false)
  })
})

describe('isRowBlank', () => {
  const mockImageData = {
    data: new Uint8ClampedArray([
      255, 0, 0, 255,
      0, 255, 0, 255,
      0, 0, 255, 255,
      255, 255, 255, 255
    ]),
    width: 2,
    height: 2
  } as ImageData

  it('should return false if any pixel in the row is not blank (alpha != 0)', () => {
    expect(isRowBlank(mockImageData, 2, 0)).toBe(false)
    expect(isRowBlank(mockImageData, 2, 1)).toBe(false)
  })

  it('should return true if all pixels in the row are blank (alpha == 0)', () => {
    // Make row 1 alpha=0
    const blankData = new Uint8ClampedArray([
      255, 0, 0, 255,
      0, 255, 0, 255,
      0, 0, 255, 0,
      255, 255, 255, 0
    ])
    const blankImageData = { ...mockImageData, data: blankData }
    expect(isRowBlank(blankImageData as ImageData, 2, 1)).toBe(true)
    expect(isRowBlank(blankImageData as ImageData, 2, 0)).toBe(false)
  })

  it('should return true for a single blank pixel in the row', () => {
    const singlePixelData = new Uint8ClampedArray([
      255, 0, 0, 0,
      0, 255, 0, 0,
      0, 0, 255, 255,
      255, 255, 255, 255
    ])
    const singlePixelImageData = { ...mockImageData, data: singlePixelData }
    expect(isRowBlank(singlePixelImageData as ImageData, 2, 0)).toBe(true)
    expect(isRowBlank(singlePixelImageData as ImageData, 2, 1)).toBe(false)
  })

  it ('should return true for an empty image', () => {
    const emptyImageData = {
      data: new Uint8ClampedArray([]),
      width: 0,
      height: 0
    } as ImageData
    expect(isRowBlank(emptyImageData, 0, 0)).toBe(true)
  })
})

describe('convertImageToCanvas', () => {

  beforeAll(() => {
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      value: jest.fn(() => ({
        drawImage: jest.fn(),
        getImageData: jest.fn(() => ({ data: [255, 0, 0, 255] })),
        putImageData: jest.fn(),
        fillRect: jest.fn()
      })),
    })
  })
  it('should convert Image to HTMLCanvasElement and return canvas of image size', () => {
    const mockImageData = {
      "src": "http://example.com/test.png",
      "alt": "test image",
      "width": 200,
      "height": 100,
      "naturalWidth": 200,
      "naturalHeight": 100,
      "complete": true,
      "currentSrc": "http://example.com/test.png",
      "crossOrigin": null,
      "decoding": "auto",
      "loading": "eager",
      "sizes": "",
      "srcset": "",
      "useMap": "",
      "isMap": false,
      "referrerPolicy": "",
      "onload": null,
      "onerror": null
    } as unknown as HTMLImageElement
    const size = 10
    expect(convertImageToCanvas(mockImageData, size).width).toBe(mockImageData.width)
  })
  it('should convert Image to HTMLCanvasElement without size', () => {
    const mockImageData = {
      "src": "http://example.com/test.png",
      "alt": "test image",
      "width": 200,
      "height": 100,
      "naturalWidth": 200,
      "naturalHeight": 100,
      "complete": true,
      "currentSrc": "http://example.com/test.png",
      "crossOrigin": null,
      "decoding": "auto",
      "loading": "eager",
      "sizes": "",
      "srcset": "",
      "useMap": "",
      "isMap": false,
      "referrerPolicy": "",
      "onload": null,
      "onerror": null
    } as unknown as HTMLImageElement
    expect(convertImageToCanvas(mockImageData).width).toBe(mockImageData.width)
  })
  it('should convert Image to HTMLCanvasElement without size', () => {
    const mockImageData: HTMLImageElement | null = null
    expect(convertImageToCanvas(mockImageData).width).toBe(300)
  })
})

describe('getAttributeSetDisplayField', () => {
  it('should return the display field value from attributes if it exists', () => {
    const defaultDisplay = 'EVENT_ID'
    const layerId = '1'
    const attributes = [{
      layerId: '0',
      fields: ['RECORD_STATUS', 'SIGNAL_TYPE', 'SIGNAL_COMM', 'SIGNAL_MODE', 'SIGNAL_PHASE', 'SIGNAL_PREEMP', 'SIGNAL_DETECT', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }, {
      layerId: '1',
      fields: ['RECORD_STATUS', 'TURN_TYPE', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }, {
      layerId: '2',
      fields: ['RECORD_STATUS', 'POST_NAME', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }]
    expect(getAttributeSetDisplayField(defaultDisplay, layerId, attributes)).toBe('EVENT_ID')
  })
  it('should return first field in the attributes if display field does not exist', () => {
    const defaultDisplay = 'DIRECTION'
    const layerId = '1'
    const attributes = [{
      layerId: '0',
      fields: ['RECORD_STATUS_1', 'SIGNAL_TYPE', 'SIGNAL_COMM', 'SIGNAL_MODE', 'SIGNAL_PHASE', 'SIGNAL_PREEMP', 'SIGNAL_DETECT', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }, {
      layerId: '1',
      fields: ['RECORD_STATUS_2', 'TURN_TYPE', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }, {
      layerId: '2',
      fields: ['RECORD_STATUS_3', 'POST_NAME', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }]
    expect(getAttributeSetDisplayField(defaultDisplay, layerId, attributes)).toBe('RECORD_STATUS_2')
  })
  it('should return an empty string if no layer id is found', () => {
    const defaultDisplay = 'EVENT_ID'
    const layerId = '11'
    const attributes = [{
      layerId: '0',
      fields: ['RECORD_STATUS_1', 'SIGNAL_TYPE', 'SIGNAL_COMM', 'SIGNAL_MODE', 'SIGNAL_PHASE', 'SIGNAL_PREEMP', 'SIGNAL_DETECT', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }, {
      layerId: '1',
      fields: ['RECORD_STATUS_2', 'TURN_TYPE', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }, {
      layerId: '2',
      fields: ['RECORD_STATUS_3', 'POST_NAME', 'DATE_ATTR_EFFECTIVE', 'SpecialNotes', 'EVENT_ID', 'OBJECTID']
    }]
    expect(getAttributeSetDisplayField(defaultDisplay, layerId, attributes)).toBe('')
  })
  it('should return an empty string if attribute set is undefined', () => {
    const defaultDisplay = 'EVENT_ID'
    const layerId = '1'
    const attributes: any = null
    expect(getAttributeSetDisplayField(defaultDisplay, layerId, attributes)).toBe('')
  })
  it('should return an empty string if attribute set has length 0', () => {
    const defaultDisplay = 'EVENT_ID'
    const layerId = '1'
    const attributes: any[] = []
    expect(getAttributeSetDisplayField(defaultDisplay, layerId, attributes)).toBe('')
  })
})

describe('mergeGeometry', () => {
  it('should return geometry2 if geometry1 is null', () => {
    const geometry1: __esri.Geometry | null = null
    const geometry2 = {
      type: "polyline",
      paths: [[[0, 0], [1, 1]]]
    } as __esri.Polyline
    const unionOperator = {} as __esri.unionOperator
    expect(mergeGeometry(unionOperator, geometry1, geometry2)).toEqual(geometry2)
  })
  it('should return geometry1 if geometry2 is null', () => {
    const geometry1 = {
      type: "polyline",
      paths: [[[0, 0], [1, 1]]]
    } as __esri.Polyline
    const geometry2: __esri.Geometry | null = null
    const unionOperator = {} as __esri.unionOperator
    expect(mergeGeometry(unionOperator, geometry1, geometry2)).toEqual(geometry1)
  })
  it('should return null if both the geometries are null', () => {
    const geometry1: __esri.Geometry | null = null
    const geometry2: __esri.Geometry | null = null
    const unionOperator = {} as __esri.unionOperator
    expect(mergeGeometry(unionOperator, geometry1, geometry2)).toBeNull()
  })
  it('should return geometry1 if geometry2 is null', () => {
    const geometry1 = {
      type: "polyline",
      paths: []
    } as __esri.Polyline
    const geometry2: __esri.Geometry | null = null
    const unionOperator = {} as __esri.unionOperator
    expect(mergeGeometry(unionOperator, geometry1, geometry2)).toEqual(geometry1)
  })

})

describe('getValue', () => {
  it('should return empty string if fieldType is not found', () => {
    const fieldType = 'text'
    const value = 5
    const fieldInfo: DynSegFieldInfo | null = null
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const featureLayer = {
      subtypes: [
        { code: 1, name: 'Type A' },
        { code: 2, name: 'Type B'}
      ]
    } as __esri.FeatureLayer
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    expect(getValue(fieldType, field, fieldInfo, value, subTypeLayers, featureLayer)).toBe('5')
  })

  it('should return the correct value for a date field', () => {
    const fieldType = 'date'
    const value = 1672531199000 // corresponds to 2022-12-31T23:59:59.000Z
    const fieldInfo: DynSegFieldInfo | null = null
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const featureLayer = {
      subtypes: [
        { code: 1, name: 'Type A' },
        { code: 2, name: 'Type B'}
      ]
    } as __esri.FeatureLayer
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    expect(getValue(fieldType, field, fieldInfo, value, subTypeLayers, featureLayer)).toBe("1/1/2023")
  })

  it('should return empty string if field type is range', () => {
    const fieldType = 'number'
    const value = 10// corresponds to 2022-12-31T23:59:59.000Z
    const fieldInfo: DynSegFieldInfo | null = null
    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const featureLayer = {
      subtypes: [
        { code: 1, name: 'Type A' },
        { code: 2, name: 'Type B'}
      ]
    } as __esri.FeatureLayer
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    expect(getValue(fieldType, field, fieldInfo, value, subTypeLayers, featureLayer)).toBe('10')
  })

  it('should handle if type is date and value is invalid date', () => {
    const fieldType = 'date'
    const value = 'random date'
    const fieldInfo: DynSegFieldInfo | null = null
    const field: __esri.Field | null = null
    const subTypeLayers: SubtypeLayers[] | null = null
    const featureLayer: __esri.FeatureLayer | null = null
    expect(getValue(fieldType, field, fieldInfo, value, subTypeLayers, featureLayer)).toBe('Invalid Date')
  })

  it('should handle if type is date and value is null', () => {
    const fieldType = 'date'
    const value: any = null
    const fieldInfo: DynSegFieldInfo | null = null
    const field: __esri.Field | null = null
    const subTypeLayers: SubtypeLayers[] | null = null
    const featureLayer: __esri.FeatureLayer | null = null
    expect(getValue(fieldType, field, fieldInfo, value, subTypeLayers, featureLayer)).toBe('')
  })
})

describe('canMerge', () => {
  it('should return false if currentTrackRecord is a point', () => {
    const currentTrackRecord: TrackRecord = {
      isPoint: true,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', 5],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', 'Test note'],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.65076273],
        ['to_measure', 1.65076273]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    const record: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', null],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', null],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.65076273],
        ['to_measure', 2.06735993]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    expect(canMerge(currentTrackRecord, record)).toBe(false)
  })
  it('should return false if key and value do not match from current track record and record', () => {
    const currentTrackRecord: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', 5],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', 'Test note'],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.65076273],
        ['to_measure', 1.65076273]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    const record: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', null],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', null],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.65076273],
        ['to_measure', 2.06735993]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    expect(canMerge(currentTrackRecord, record)).toBe(false)
  })
  it('should return true if value for a specific key from record matches with the same key in current track record', () => {
    const currentTrackRecord: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', 5],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', 'Test note'],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.65076273],
        ['to_measure', 1.65076273]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    const record: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', 5],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', 'Test note'],
        ['from_date', 1398902400000],
        ['to_date', null]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    expect(canMerge(currentTrackRecord, record)).toBe(true)
  })
  it('should return true if all values in record for keys from track record match except for measure field values', () => {
    const currentTrackRecord: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', 5],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', 'Test note'],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.65076273],
        ['to_measure', 1.65076273]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    const record: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', 5],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', 'Test note'],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.5],
        ['to_measure', 1]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    expect(canMerge(currentTrackRecord, record)).toBe(true)
  })
  it('should return false if current track record is null', () => {
    const currentTrackRecord: TrackRecord | null = null
    const record: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', 5],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', 'Test note'],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.5],
        ['to_measure', 1]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    expect(canMerge(currentTrackRecord, record)).toBe(false)
  })
  it('should return false if record is null', () => {
    const currentTrackRecord: TrackRecord = {
      isPoint: false,
      attributes: new Map<string, string | number | Date>([
        ['RECORD_STATUS', 5],
        ['route_id', '96000002430000001'],
        ['SpecialNotes', 'Test note'],
        ['from_date', 1398902400000],
        ['to_date', null],
        ['from_measure', 1.65076273],
        ['to_measure', 1.65076273]
      ]),
      displayField: 'EVENT_ID'
    } as TrackRecord
    const record: TrackRecord | null = null
    expect(canMerge(currentTrackRecord, record)).toBe(false)
  })
})

describe('getSubtypeLabel', () => {
  it('should return the correct subtype label for the given code', () => {
    const fieldInfo = {
      featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
      featureFieldName: "ACCESS_CONTROL",
      isEventIdField: false,
      isOidField: false,
      eventName: "CLEu_AccessCtrl_stayput",
      EventType: EventType.Line,
      eventLayerId: '1'
    } as DynSegFieldInfo

    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    const value = 1
    expect(getSubtypeLabel(value, field, fieldInfo, subTypeLayers)).toBe('Type A')
  })

  it('should return an empty string if value is undefined', () => {
    const fieldInfo = {
      featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
      featureFieldName: "ACCESS_CONTROL",
      isEventIdField: false,
      isOidField: false,
      eventName: "CLEu_AccessCtrl_stayput",
      EventType: EventType.Line,
      eventLayerId: '1'
    } as DynSegFieldInfo

    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    const value: any = undefined
    expect(getSubtypeLabel(value, field, fieldInfo, subTypeLayers)).toBe('')
  })

  it('should return an empty string if no matching subtype layer is found', () => {
    const fieldInfo = {
      featureFieldAlias : "CLEu_AccessCtrl_stayput.ACCESS_CONTROL",
      featureFieldName: "ACCESS_CONTROL",
      isEventIdField: false,
      isOidField: false,
      eventName: "CLEu_AccessCtrl_stayput",
      EventType: EventType.Line,
      eventLayerId: '1'
    } as DynSegFieldInfo

    const field = {
      name: 'status',
      domain: { type: 'coded-value', codedValues: [ { code: '1', name: 'Active' }, { code: '2', name: 'Inactive' } ] }
    } as __esri.Field
    const subTypeLayers: SubtypeLayers[] = [
      {
        id: '1',
        subtypes: [
          {
            code: 1, name: 'Type A',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype,
          {
            code: 2, name: 'Type B',
            defaultValues: undefined,
            domains: undefined,
            toJSON: function () {
              throw new Error('Function not implemented.')
            },
            destroyed: false,
            initialized: false,
            declaredClass: ''
          } as unknown as __esri.Subtype
        ],
        subtypeField: ''
      }
    ]
    const value = 3
    expect(getSubtypeLabel(value, field, fieldInfo, subTypeLayers)).toBe('')
  })
})

describe('mergeTracks', () => {
  it ('should merge two track records if they represent same event segment', async () => {
    const trackMap = new Map<string, Track>()
    trackMap.set("CLEu_Signal_stayput",
      {
        eventType: EventType.Point,
        layerId: '4',
        layerName: 'CLEu_Signal_stayput',
        records: [
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0,
            toMeasure: 0.18
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0.18,
            toMeasure: 0.18
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0.18,
            toMeasure: 2.34
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 2.34,
            toMeasure: 3.8
          } as TrackRecord
        ],
        index: 0,
        isActive: false
      }
    )
    const mergedTracks = mergeTracks(trackMap)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records.length).toBe(1)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records[0].fromMeasure).toBe(0)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records[0].toMeasure).toBe(3.8)
  })

  it ('should merge two track records if all event attributes are same but measure are not continuous', async () => {
    const trackMap = new Map<string, Track>()
    trackMap.set("CLEu_Signal_stayput",
      {
        eventType: EventType.Point,
        layerId: '4',
        layerName: 'CLEu_Signal_stayput',
        records: [
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0.5,
            toMeasure: 0.35
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0.18,
            toMeasure: 0.20
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0.18,
            toMeasure: 3.1
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 2.34,
            toMeasure: 3.8
          } as TrackRecord
        ],
        index: 0,
        isActive: false
      }
    )
    const mergedTracks = mergeTracks(trackMap)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records.length).toBe(1)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records[0].fromMeasure).toBe(0.18)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records[0].toMeasure).toBe(3.8)
  })

  it ('should not merge two track records if they represent different event segments', async () => {
    const trackMap = new Map<string, Track>()
    trackMap.set("CLEu_Signal_stayput",
      {
        eventType: EventType.Point,
        layerId: '4',
        layerName: 'CLEu_Signal_stayput',
        records: [
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note4'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0,
            toMeasure: 0.35
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note3'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0.18,
            toMeasure: 0.2
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note2'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 0.5,
            toMeasure: 2.34
          } as TrackRecord,
          {
            attributes: new Map<string, any>([
              ['RECORD_STATUS', 5],
              ['route_id', '96000002430000001'],
              ['SpecialNotes', 'Test note1'],
              ['from_date', 1398902400000],
              ['to_date', null],
              ['from_measure', 1.65076273],
              ['to_measure', 1.65076273]
            ]),
            fromMeasure: 4.1,
            toMeasure: 5.2
          } as TrackRecord
        ],
        index: 0,
        isActive: false
      }
    )
    const mergedTracks = mergeTracks(trackMap)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records.length).toBe(4)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records[3].fromMeasure).toBe(4.1)
    expect((await mergedTracks).get("CLEu_Signal_stayput").records[3].toMeasure).toBe(5.2)
  })

  it('should return empty map if input map is empty', async () => {
    const trackMap = new Map<string, Track>()
    const mergedTracks = mergeTracks(trackMap)
    expect((await mergedTracks).size).toBe(0)
  })

  it('should return empty map if track map is null', async () => {
    const trackMap: Map<string, Track> | null = null
    const mergedTracks = mergeTracks(trackMap)
    expect((await mergedTracks).size).toBe(0)
  })
})

describe('trimCanvas', () => {

  function createCanvas (width: number, height: number): HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    return canvas
  }

  beforeEach(() => {
    // Reset getContext before each test to allow custom getImageData
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      configurable: true,
      writable: true,
      value: undefined
    })
  })

  it('should return a 1x1 canvas for a blank canvas', () => {
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      configurable: true,
      writable: true,
      value: jest.fn(() => ({
        getImageData: jest.fn((x, y, w, h) => ({
          width: w,
          height: h,
          data: new Uint8ClampedArray(w * h * 4)
        })),
        putImageData: jest.fn(),
        drawImage: jest.fn(),
        fillRect: jest.fn()
      })),
    })
    const canvas = createCanvas(10, 10)
    const trimmed = trimCanvas(canvas, 10)
    expect(trimmed.width).toBe(1)
    expect(trimmed.height).toBe(1)
  })

  it('should trim a canvas with content in the center', () => {
    const width = 10
    const height = 10
    const data = new Uint8ClampedArray(width * height * 4)
    // Draw a single opaque pixel at (5,5)
    data[(5 * width + 5) * 4 + 3] = 255
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      configurable: true,
      writable: true,
      value: jest.fn(() => ({
        getImageData: jest.fn((x, y, w, h) => ({
          width: w,
          height: h,
          data
        })),
        putImageData: jest.fn(),
        drawImage: jest.fn(),
        fillRect: jest.fn()
      })),
    })
    const canvas = createCanvas(width, height)
    const trimmed = trimCanvas(canvas, width)
    expect(trimmed.width).toBe(1)
    expect(trimmed.height).toBe(1)
  })

  it('should trim a canvas with a horizontal line', () => {
    const width = 10
    const height = 10
    const data = new Uint8ClampedArray(width * height * 4)
    // Draw a horizontal line at y=5
    for (let x = 2; x < 8; x++) {
      data[(5 * width + x) * 4 + 3] = 255
    }
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      configurable: true,
      writable: true,
      value: jest.fn(() => ({
        getImageData: jest.fn((x, y, w, h) => ({
          width: w,
          height: h,
          data
        })),
        putImageData: jest.fn(),
        drawImage: jest.fn(),
        fillRect: jest.fn()
      })),
    })
    const canvas = createCanvas(width, height)
    const trimmed = trimCanvas(canvas, width)
    expect(trimmed.width).toBe(6)
    expect(trimmed.height).toBe(1)
  })

  it('should trim a canvas with a vertical line', () => {
    const width = 10
    const height = 10
    const data = new Uint8ClampedArray(width * height * 4)
    // Draw a vertical line at x=4
    for (let y = 3; y < 7; y++) {
      data[(y * width + 4) * 4 + 3] = 255
    }
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      configurable: true,
      writable: true,
      value: jest.fn(() => ({
        getImageData: jest.fn((x, y, w, h) => ({
          width: w,
          height: h,
          data
        })),
        putImageData: jest.fn(),
        drawImage: jest.fn(),
        fillRect: jest.fn()
      })),
    })
    const canvas = createCanvas(width, height)
    const trimmed = trimCanvas(canvas, width)
    expect(trimmed.width).toBe(1)
    expect(trimmed.height).toBe(4)
  })
})

describe('getSldItemLeft', () => {
  const measureRange = { from: 0, to: 100 }
  const contentWidth = 200

  it('should return x for non-point items', () => {
    expect(getSldItemLeft(25, measureRange, contentWidth, false, 20)).toBe(50)
  })

  it('should center point items by icon width', () => {
    expect(getSldItemLeft(25, measureRange, contentWidth, true, 20)).toBe(40)
  })

  it('should return 0 when fromMeasure is NaN', () => {
    expect(getSldItemLeft(NaN, measureRange, contentWidth, false, 20)).toBe(0)
  })
})

describe('getSldItemRight', () => {
  const measureRange = { from: 0, to: 100 }
  const contentWidth = 200

  it('should return x for toMeasure when toMeasure is valid', () => {
    expect(getSldItemRight(80, 25, measureRange, contentWidth, false, 20)).toBe(160)
  })

  it('should fall back to left position when toMeasure is NaN', () => {
    expect(getSldItemRight(NaN, 25, measureRange, contentWidth, false, 20)).toBe(50)
  })

  it('should use centered left position for point fallback', () => {
    expect(getSldItemRight(NaN, 25, measureRange, contentWidth, true, 20)).toBe(40)
  })
})

describe('getSldItemWidth', () => {
  const measureRange = { from: 0, to: 100 }
  const contentWidth = 200

  it('should return positive width when right is greater than left', () => {
    expect(getSldItemWidth(10, 30, measureRange, contentWidth, false, 20)).toBe(40)
  })

  it('should return 1 when width is zero', () => {
    expect(getSldItemWidth(25, NaN, measureRange, contentWidth, true, 20)).toBe(1)
  })

  it('should return 1 when computed width is negative', () => {
    expect(getSldItemWidth(30, 10, measureRange, contentWidth, false, 20)).toBe(1)
  })
})

describe('isColorLight', () => {
  it('should return true for white', () => {
    expect(isColorLight(255, 255, 255)).toBe(true)
  })

  it('should return false for black', () => {
    expect(isColorLight(0, 0, 0)).toBe(false)
  })

  it('should return false for saturated red', () => {
    expect(isColorLight(255, 0, 0)).toBe(false)
  })
})