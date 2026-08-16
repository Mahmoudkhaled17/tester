import { type AcquireLockResponse, type DetailedLockInfo, LockAcquireStatus, LockAction, type LrsLocksInfo, type NetworkInfo, type RouteInfo } from 'widgets/shared-code/lrs'
import { createLockInfoFromParams, getErrorMessage, getNameOrId, getNameOrIdFromUnavailableLock, getOperationDate, getWhereClause } from '../src/runtime/utils/edit-utils'
import { DynSegFields } from '../src/constants'
import type { RouteInfoFromDataAction } from '../src/config'
import type { DataSource } from 'jimu-core'

// contains test cases for edit-utils functions.

jest.mock('widgets/shared-code/lrs', () => ({
  ...jest.requireActual('widgets/shared-code/lrs'),
  formatMessage: jest.fn((intl, id, values) => intl.formatMessage({}, id, values))
}))

describe('getNameOrId', () => {
  it('should return lineName if lineName exists', () => {
    const routeInfo = {
      routeId: '{72442059-93C6-4E3D-86E2-9E482FC49AEC}',
      routeName: 'MLV-130 R1',
      lineId: '{393C1707-58AD-4F61-9626-ACB593F2F4E9}',
      lineName: 'Dripping Springs to Smithville',
      fromMeasure: 0,
      toMeasure: 10
    } as unknown as RouteInfo
    expect(getNameOrId(routeInfo)).toBe('Dripping Springs to Smithville')
  })
  it('should return lineId if lineName does not exist', () => {
    const routeInfo = {
      routeId: '{72442059-93C6-4E3D-86E2-9E482FC49AEC}',
      routeName: 'MLV-130 R1',
      lineId: '{393C1707-58AD-4F61-9626-ACB593F2F4E9}',
      lineName: '',
      fromMeasure: 0,
      toMeasure: 10
    } as unknown as RouteInfo
    expect(getNameOrId(routeInfo)).toBe('{393C1707-58AD-4F61-9626-ACB593F2F4E9}')
  })
  it('should return route name if neither lineName nor lineId exist', () => {
    const routeInfo = {
      routeId: '{72442059-93C6-4E3D-86E2-9E482FC49AEC}',
      routeName: 'MLV-130 R1',
      lineId: '',
      lineName: '',
      fromMeasure: 0,
      toMeasure: 10
    } as unknown as RouteInfo
    expect(getNameOrId(routeInfo)).toBe('MLV-130 R1')
  })
  it('should return routeId if neither lineName, lineId nor routeName exist', () => {
    const routeInfo = {
      routeId: '{72442059-93C6-4E3D-86E2-9E482FC49AEC}',
      routeName: '',
      lineId: '',
      lineName: '',
      fromMeasure: 0,
      toMeasure: 10
    } as unknown as RouteInfo
    expect(getNameOrId(routeInfo)).toBe('{72442059-93C6-4E3D-86E2-9E482FC49AEC}')
  })
  it('should return empty string if all properties are empty', () => {
    const routeInfo = {
      routeId: '',
      routeName: '',
      lineId: '',
      lineName: '',
      fromMeasure: 0,
      toMeasure: 10
    } as unknown as RouteInfo
    expect(getNameOrId(routeInfo)).toBe('')
  })
  it('should return empty string if routeInfo is empty', () => {
    const routeInfo = {
      routeId: null,
      routeName: '',
      lineId: '',
      lineName: '',
      fromMeasure: 0,
      toMeasure: 10
    } as unknown as RouteInfo
    expect(getNameOrId(routeInfo)).toBe('') // check with Eric
  })
})

describe('getNameOrIdFromUnavailableLock', () => {
  it('should return routeName if routeName exists', () => {
    const lock = {
      routeId: '{72442059-93C6-4E3D-86E2-9E482FC49AEC}',
      routeName: 'MLV-130 R1',
      lineName: 'Dripping Springs to Smithville',
      lineId: '{393C1707-58AD-4F61-9626-ACB593F2F4E9}',
      layerId: 10,
      lrsNetworkId: 1,
      lrsNetworkName: 'Engineering Network',
      user: 'user1',
      versionName: 'v1',
      versionGuid: '{12345678-1234-1234-1234-123456789012}',
      lockDate: 1625155200000,
      eventFeatureClassName: 'Events',
      releasableStatus: 'releasable'
    } as unknown as DetailedLockInfo
    expect(getNameOrIdFromUnavailableLock(lock)).toBe('MLV-130 R1')
  })
  it('should return lineName if routeName does not exist', () => {
    const lock = {
      routeId: '{72442059-93C6-4E3D-86E2-9E482FC49AEC}',
      routeName: '',
      lineName: 'Dripping Springs to Smithville',
      lineId: '{393C1707-58AD-4F61-9626-ACB593F2F4E9}',
      layerId: 10,
      lrsNetworkId: 1,
      lrsNetworkName: 'Engineering Network',
      user: 'user1',
      versionName: 'v1',
      versionGuid: '{12345678-1234-1234-1234-123456789012}',
      lockDate: 1625155200000,
      eventFeatureClassName: 'Events',
      releasableStatus: 'releasable'
    } as unknown as DetailedLockInfo
    expect(getNameOrIdFromUnavailableLock(lock)).toBe('Dripping Springs to Smithville')
  })
  it('should return routeId if neither routeName nor lineName exist', () => {
    const lock = {
      routeId: '{72442059-93C6-4E3D-86E2-9E482FC49AEC}',
      routeName: '',
      lineName: '',
      lineId: '{393C1707-58AD-4F61-9626-ACB593F2F4E9}',
      layerId: 10,
      lrsNetworkId: 1,
      lrsNetworkName: 'Engineering Network',
      user: 'user1',
      versionName: 'v1',
      versionGuid: '{12345678-1234-1234-1234-123456789012}',
      lockDate: 1625155200000,
      eventFeatureClassName: 'Events',
      releasableStatus: 'releasable'
    } as unknown as DetailedLockInfo
    expect(getNameOrIdFromUnavailableLock(lock)).toBe('{72442059-93C6-4E3D-86E2-9E482FC49AEC}')
  })
  it('should return lineId if neither routeName, lineName nor routeId exist', () => {
    const lock = {
      routeId: '',
      routeName: '',
      lineName: '',
      lineId: '{393C1707-58AD-4F61-9626-ACB593F2F4E9}',
      layerId: 10,
      lrsNetworkId: 1,
      lrsNetworkName: 'Engineering Network',
      user: 'user1',
      versionName: 'v1',
      versionGuid: '{12345678-1234-1234-1234-123456789012}',
      lockDate: 1625155200000,
      eventFeatureClassName: 'Events',
      releasableStatus: 'releasable'
    } as unknown as DetailedLockInfo
    expect(getNameOrIdFromUnavailableLock(lock)).toBe('{393C1707-58AD-4F61-9626-ACB593F2F4E9}')
  })
  it('should return empty string if all properties are empty', () => {
    const lock = {
      routeId: '',
      routeName: '',
      lineName: '',
      lineId: '',
      layerId: 0,
      lrsNetworkId: 0,
      lrsNetworkName: '',
      user: '',
      versionName: '',
      versionGuid: '',
      lockDate: 0,
      eventFeatureClassName: '',
      releasableStatus: ''
    } as unknown as DetailedLockInfo
    expect(getNameOrIdFromUnavailableLock(lock)).toBe('') // check with Eric
  })
})

describe('getOperationDate', () => {
  it('should return activeDate if provided', () => {
    const activeDate = new Date('2023-01-01')
    const result = getOperationDate(undefined, activeDate)
    expect(result).toBe(activeDate)
  })

  it('should return date from networkDS queryParams.time if activeDate is not provided', () => {
    const mockDate = new Date('2022-12-31').getTime()
    const networkDS = {
      getCurrentQueryParams: jest.fn().mockReturnValue({ time: [mockDate, mockDate + 1000] })
    }
    const result = getOperationDate(networkDS as any, undefined)
    expect(result.getTime()).toBe(mockDate)
  })

  it('should return current date if networkDS has no time extent', () => {
    const now = Date.now()
    const networkDS = {
      getCurrentQueryParams: jest.fn().mockReturnValue({})
    }
    const result = getOperationDate(networkDS as any, undefined)
    expect(result.getTime()).toBe(now)
  })

  it('should return null if neither activeDate nor networkDS is provided', () => {
    const result = getOperationDate(undefined, undefined)
    expect(result).toBeNull()
  })
})

describe('getWhereClause', () => {
  it('should generate correct where clause for a given date', () => {
    const mockDS = {
      // getOperationDate will use activeDate, so this is not used
    }
    const activeDate = new Date('2023-05-10T12:00:00Z')
    const where = getWhereClause(mockDS as any, activeDate)
    const isoDate = activeDate.toISOString().slice(0, 10)
    const dateUTC = `TIMESTAMP '${isoDate}'`

    expect(where).toContain(`${DynSegFields.fromDateName.toUpperCase()} <= ${dateUTC}`)
    expect(where).toContain(`${DynSegFields.toDateName.toUpperCase()} IS NULL`)
    expect(where).toContain(`${DynSegFields.fromDateName.toUpperCase()} IS NULL`)
    expect(where).toContain(`${DynSegFields.toDateName.toUpperCase()} >= ${dateUTC}`)
    expect(where).toContain(`${DynSegFields.fromDateName.toUpperCase()} < ${dateUTC}`)
    expect(where).toContain(`${DynSegFields.toDateName.toUpperCase()} > ${dateUTC}`)
  })

  it('should use date from networkDS if activeDate is not provided', () => {
    const mockDate = new Date('2022-01-01T00:00:00Z').getTime()
    const mockDS = {
      getCurrentQueryParams: jest.fn().mockReturnValue({ time: [mockDate, mockDate + 1000] })
    }
    const where = getWhereClause(mockDS as any, undefined)
    const isoDate = new Date(mockDate).toISOString().slice(0, 10)
    const dateUTC = `TIMESTAMP '${isoDate}'`
    expect(where).toContain(dateUTC)
  })

  it('should use current date if neither activeDate nor networkDS time is provided', () => {
    const now = new Date()
    const isoDate = now.toISOString().slice(0, 10)
    const dateUTC = `TIMESTAMP '${isoDate}'`
    const mockDS = {
      getCurrentQueryParams: jest.fn().mockReturnValue({})
    }
    const where = getWhereClause(mockDS as any, undefined)
    expect(where).toContain(dateUTC)
  })

  it('should handle empty networkDS and activeDate', () => {
    const where = getWhereClause(undefined, undefined)
    expect(where).toContain('1=1')
   })
})

describe('createLockInfoFromParams', () => {
  const mockNetworkInfo = {
    datasetName: 'CountyLog Euclidean',
    networkUrl: "https://pruthasvm.esri.com/server/rest/services/RH_Data/MapServer/exts/LRServer/networkLayers/35",
    lrsNetworkId: 1,
    supportsLines: false
  } as NetworkInfo

  const routeInfoFromDataAction = {
    routeId: '36000000052000001',
    routeName: null,
    fromMeasure: 0,
    toMeasure: 10,
    networkInfo: mockNetworkInfo
  } as unknown as RouteInfoFromDataAction

  const lrsLayers = [
    { serviceId: 1, name: 'Signal stayput' },
    { serviceId: 2, name: 'Lane stayput' }
  ]

  it('should create lock info for route when supportsLines is false', async () => {
    const result = await createLockInfoFromParams(
      routeInfoFromDataAction,
      lrsLayers as any,
      '36000000052000001',
      {} as any,
      '1'
    )
    expect(result.networkId).toEqual([1])
    expect(result.routeOrLineId).toEqual(['36000000052000001'])
    expect(result.eventServiceLayerIds).toEqual(['1'])
    expect(result.isLine).toEqual([false])
    expect(result.status).toBe(LockAcquireStatus.EsriSuccess)
    expect(result.lockAction).toBe(LockAction.Query)
    expect(result.routeInfo.routeId).toBe('36000000052000001')
    expect(result.routeInfo.routeName).toBeNull()
    expect(result.routeInfo.fromMeasure).toBe(0)
    expect(result.routeInfo.toMeasure).toBe(10)
  })

  it('should create lock info for route when supportsLines is true', async () => {

    const mockQuery = jest.fn().mockResolvedValue({
      records: [
        {
          feature: {
            attributes: {
              LINE_ID: 'MOCK_LINE_ID'
            }
          }
        }
      ]
    })

    const mockNetworkDS = {
      query: mockQuery
    }

    const mockNetworkInfo = {
      datasetName: 'CountyLog Euclidean',
      networkUrl: "https://pruthasvm.esri.com/server/rest/services/RH_Data/MapServer/exts/LRServer/networkLayers/35",
      lrsNetworkId: 1,
      supportsLines: true,
      routeIdFieldSchema: {
        name: 'ROUTE_ID',
        alias: 'Route ID'
      },
      lineIdFieldSchema: {
        name: 'LINE_ID',
        alias: 'Line ID'
      }
    } as NetworkInfo

    const routeInfoFromDataAction = {
      routeId: '36000000052000001',
      routeName: null,
      fromMeasure: 0,
      toMeasure: 10,
      networkInfo: mockNetworkInfo
    } as unknown as RouteInfoFromDataAction

    const lrsLayers = [
      { serviceId: 1, name: 'Signal stayput' },
      { serviceId: 2, name: 'Lane stayput' }
    ]

    const result = await createLockInfoFromParams(
      routeInfoFromDataAction,
      lrsLayers as any,
      '36000000052000001',
      mockNetworkDS as unknown as DataSource,
      '1'
    )
    expect(result.networkId).toEqual([1])
    expect(result.routeOrLineId).toEqual(['MOCK_LINE_ID'])
    expect(result.eventServiceLayerIds).toEqual(['1'])
    expect(result.isLine).toEqual([true])
    expect(result.status).toBe(LockAcquireStatus.EsriSuccess)
    expect(result.lockAction).toBe(LockAction.Query)
    expect(result.routeInfo.routeId).toBe('36000000052000001')
    expect(result.routeInfo.routeName).toBeNull()
    expect(result.routeInfo.fromMeasure).toBe(0)
    expect(result.routeInfo.toMeasure).toBe(10)
  })
})

describe('getErrorMessage', () => {

  const intl = {
    formatMessage: jest.fn((_opts, id, values) => `${id}:${JSON.stringify(values)}`)
  }

  const featureDS = {
    getGDBVersion: jest.fn().mockReturnValue('sde.DEFAULT')
  }
  const lockInfo = {
    routeInfo: { routeId: 'RID1', routeName: 'Route 1', lineId: '', lineName: '' },
    details: [{ lrsNetworkName: 'Network1' }]
  }

  it('should return success message for route lock', () => {
    const response = { acquireStatus: LockAcquireStatus.EsriSuccess }
    const result = getErrorMessage(response as AcquireLockResponse, lockInfo as LrsLocksInfo, featureDS, intl)
    expect(result.toastMsg).toContain('YouAcquiredLockOnRoute')
    expect(result.toastMsgType).toBe('info')
  })

  it('should return success message for line lock', () => {
    const lockInfoLine = {
      ...lockInfo,
      routeInfo: { routeId: 'RID1', routeName: '', lineId: 'LID1', lineName: '' }
    }
    const response = { acquireStatus: LockAcquireStatus.EsriSuccess }
    const result = getErrorMessage(response as AcquireLockResponse, lockInfoLine as LrsLocksInfo, featureDS, intl)
    expect(result.toastMsg).toContain('YouAcquiredLockOnLine')
    expect(result.toastMsgType).toBe('info')
  })

  it('should return reconcile required message', () => {
    const response = { acquireStatus: LockAcquireStatus.EsriReconcileRequired }
    const result = getErrorMessage(response as AcquireLockResponse, lockInfo as LrsLocksInfo, featureDS, intl)
    expect(result.toastMsg).toContain('ReconcileRequired')
    expect(result.toastMsgType).toBe('danger')
  })

  it('should return unavailable lock message without version', () => {
    const response = {
      acquireStatus: LockAcquireStatus.EsriCouldNotAcquireAllLocks,
      unavailableLocks: [{
        versionName: '',
        user: 'testUser',
        routeName: 'Route 1'
      }]
    }
    const result = getErrorMessage(response as AcquireLockResponse, lockInfo as LrsLocksInfo, featureDS, intl)
    expect(result.toastMsg).toContain('UnavailableLockOnRouteWithoutVersion')
    expect(result.toastMsgType).toBe('danger')
  })

  it('should return unavailable lock message with version', () => {
    const response = {
      acquireStatus: LockAcquireStatus.EsriCouldNotAcquireAllLocks,
      unavailableLocks: [{
        versionName: 'v1',
        user: 'testUser',
        routeName: 'Route 1'
      }]
    }
    const result = getErrorMessage(response as AcquireLockResponse, lockInfo as LrsLocksInfo, featureDS, intl)
    expect(result.toastMsg).toContain('UnavailableLockOnRoute')
    expect(result.toastMsgType).toBe('danger')
  })

  it('should return empty message for unknown status', () => {
    const response = { acquireStatus: 'UnknownStatus' }
    const result = getErrorMessage(response as AcquireLockResponse, lockInfo as LrsLocksInfo, featureDS, intl)
    expect(result.toastMsg).toBe('')
    expect(result.toastMsgType).toBe('info')
  })
})