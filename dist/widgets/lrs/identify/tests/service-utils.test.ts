import type { FeatureLayerDataSource } from 'jimu-core'
import { getDataRecord } from '../src/runtime/utils/service-utils'

describe('getDataRecord', () => {
  it('should return empty array if objectIds is an empty array', async () => {
    await expect(getDataRecord([], 'OBJECTID', {} as FeatureLayerDataSource)).resolves.toEqual([])
  })
  it('should return empty array if objectIds is null', async () => {
    await expect(getDataRecord(null, 'OBJECTID', {} as FeatureLayerDataSource)).resolves.toEqual([])
  })
  it('should return empty array if fieldname is an empty string', async () => {
    await expect(getDataRecord([1, 2, 3], '', {} as FeatureLayerDataSource)).resolves.toEqual([])
  })
  it('should return empty array if fieldname is null', async () => {
    await expect(getDataRecord([1, 2, 3], null, {} as FeatureLayerDataSource)).resolves.toEqual([])
  })
  it('should handle error gracefully if originDS is null', () => {
    expect(getDataRecord([1, 2, 3], 'OBJECTID', null)).resolves.toEqual([])
  })

  it('should query by object ids and return records', async () => {
    const records = [{ getId: () => 1 }, { getId: () => 2 }]
    const query = jest.fn().mockResolvedValue({ records })
    const originDS = { query } as unknown as FeatureLayerDataSource

    await expect(getDataRecord([1, 2], 'OBJECTID', originDS)).resolves.toEqual(records)
    expect(query).toHaveBeenCalledWith({
      where: 'OBJECTID IN (1,2)',
      outFields: ['*'],
      returnGeometry: true
    })
  })

  it('should return empty array when query returns an empty records array', async () => {
    const query = jest.fn().mockResolvedValue({ records: [] })
    const originDS = { query } as unknown as FeatureLayerDataSource

    await expect(getDataRecord([1, 2, 3], 'OBJECTID', originDS)).resolves.toEqual([])
  })

  it('should return undefined when query result has no records field', async () => {
    const query = jest.fn().mockResolvedValue({})
    const originDS = { query } as unknown as FeatureLayerDataSource

    await expect(getDataRecord([1, 2, 3], 'OBJECTID', originDS)).resolves.toBeUndefined()
  })

  it('should reject when originDS.query throws', async () => {
    const query = jest.fn().mockRejectedValue(new Error('query failed'))
    const originDS = { query } as unknown as FeatureLayerDataSource

    await expect(getDataRecord([1, 2, 3], 'OBJECTID', originDS)).rejects.toThrow('query failed')
  })
})