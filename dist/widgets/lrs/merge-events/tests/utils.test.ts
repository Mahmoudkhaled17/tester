import { DataLevel, type DataRecord, type DataRecordSet, type DataSource, DataSourceStatus, DataSourceTypes, Immutable } from 'jimu-core'
import { constructSettingsPerView, resetConfig, setValuesForView } from '../src/common/utils'
import { getDefaultEvent, ModeType, LrsLayerType, type LrsLayer } from 'widgets/shared-code/lrs'
import ExportJson from '../src/data-actions/merge-events'

jest.mock('../../../shared-code/lib/lrs/utilities/widget-settings-utils', () => ({
  getDefaultEvent: jest.fn()
}))

jest.mock('../../../shared-code/lib/lrs/utilities/locks-utils', () => ({
  isConflictPreventionEnabled: jest.fn().mockResolvedValue(true)
}))

const mockSettingsPerView = Immutable({
  networkLayers: [],
  eventLayers: [],
  intersectionLayers: [],
  defaultEvent: { serviceId: -1, name: '' },
  displayConfig: { hideEvent: false }
})

const mockConfig = Immutable({
  lrsLayers: [],
  networkLayers: [],
  eventLayers: [],
  intersectionLayers: []
})

describe('constructSettingsPerView', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should construct default settings preview correctly', () => {
    const settings = constructSettingsPerView()
    expect(settings).toEqual(mockSettingsPerView)
  })
})

describe('resetConfig', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should reset configuration to default values', () => {
    const updated = resetConfig(mockConfig, ModeType.Layer)
    expect(updated.mode).toBe(ModeType.Layer)
    expect(updated.lrsLayers).toEqual([])
    expect(updated.mapViewsConfig).toEqual({})
    expect(updated.settingsPerView).toEqual({})
    expect(updated.networkLayers).toEqual([])
    expect(updated.eventLayers).toEqual([])
    expect(updated.intersectionLayers).toEqual([])
    expect(updated.defaultEvent).toEqual({ index: -1, name: '' })
  })

  it('should handle null configuration gracefully', () => {
    const updated = resetConfig(null, ModeType.Layer)
    expect(updated).toEqual({})
  })
})

describe('setValuesForView', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockLrsLayers = Immutable<LrsLayer[]>([
    { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'CountyLog', layerType: LrsLayerType.Network },
    { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'Access_Control', layerType: LrsLayerType.Event },
    { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'Intersection', layerType: LrsLayerType.Intersection }
  ])

  it('should set network and event layers when getLayers is true', () => {
    const settingsPerView = setValuesForView(mockSettingsPerView, mockLrsLayers, true)
    expect(settingsPerView.networkLayers).toEqual(['CountyLog'])
    expect(settingsPerView.eventLayers).toEqual(['Access_Control'])
    expect(settingsPerView.intersectionLayers).toEqual(['Intersection'])
  })

  it('should not set network and event layers when getLayers is false', () => {
    const settingsPerView = setValuesForView(mockSettingsPerView, mockLrsLayers, false)
    expect(settingsPerView.networkLayers).toEqual([])
    expect(settingsPerView.eventLayers).toEqual([])
    expect(settingsPerView.intersectionLayers).toEqual([])
  })

  it('should set networkLayers, eventLayers, intersectionLayers, defaultEvent, hideEvent, hideNetwork, hideDate, useRouteStartDate', () => {
    (getDefaultEvent as jest.Mock).mockReturnValue({ serviceId: 0, name: 'Access_Control' })
    const updated = setValuesForView(mockSettingsPerView, mockLrsLayers, true)
    expect(updated.networkLayers).toEqual(['CountyLog'])
    expect(updated.eventLayers).toEqual(['Access_Control'])
    expect(updated.intersectionLayers).toEqual(['Intersection'])
    expect(updated.defaultEvent).toBeDefined()
  })

  it('should set networkLayers, eventLayers and intersection layers to empty arrays when no layers are provided and getLayers is true', () => {
    const updated = setValuesForView(mockSettingsPerView, Immutable<LrsLayer[]>([]), true)
    expect(updated.networkLayers).toEqual([])
    expect(updated.eventLayers).toEqual([])
    expect(updated.intersectionLayers).toEqual([])
  })

  it('should throw an error or handle gracefully when settingsPerView is null', () => {
    const updated = setValuesForView(null, Immutable<LrsLayer[]>([]), false)
    expect(updated).toEqual(mockSettingsPerView)
  })
})

describe('isSupportedDataAction', () => {
  let instance: ExportJson
  beforeEach(() => {
    instance = new ExportJson({} as any)
    jest.clearAllMocks()
  })
  it('should return false if more than one dataSet is provided', async () => {
    const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [{} as DataRecord, {} as DataRecord],
      dataSource: {} as DataSource,
      type: 'current'
    },
    {
      name: 'DataSet2',
      records: [{} as DataRecord, {} as DataRecord],
      dataSource: {} as DataSource,
      type: 'current'
    }]
    const dataLevel = DataLevel.Records
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if the single has empty record', async () => {
    const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [] as DataRecord[],
      dataSource: {} as DataSource,
      type: 'current'
    }]
    const dataLevel = DataLevel.Records
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if the dataSource is a DataSourceSet', async () => {
    const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [{} as DataRecord, {} as DataRecord],
      dataSource: { isDataSourceSet: () => true, isInAppConfig: () => true } as unknown as DataSource,
      type: 'current'
    }]
    const dataLevel = DataLevel.Records
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if the dataLevel is not Records', async () => {
    const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [{} as DataRecord, {} as DataRecord],
      dataSource: { isDataSourceSet: () => true, isInAppConfig: () => true, type: DataSourceTypes.FeatureLayer } as unknown as DataSource,
      type: 'current'
    }]
    const dataLevel = DataLevel.DataSource
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if the dataSource is not in app config and is not a layer', async () => {
    const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [{} as DataRecord, {} as DataRecord],
      dataSource: { isDataSourceSet: () => false, isInAppConfig: () => false, type: DataSourceTypes.CSV } as unknown as DataSource,
      type: 'current'
    }]
    const dataLevel = DataLevel.Records
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if data source is not ready', async () => {
    const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [{} as DataRecord, {} as DataRecord],
      dataSource: { isDataSourceSet: () => false, isInAppConfig: () => true, type: DataSourceTypes.FeatureLayer,
        getStatus: () => DataSourceStatus.NotReady } as unknown as DataSource,
      type: 'current'
    }]
    const dataLevel = DataLevel.Records
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if data source is empty', async () => {
    const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [] as DataRecord[],
      dataSource: null,
      type: 'current'
    }]
    const dataLevel = DataLevel.Records
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if data set is empty', async () => {
    const dataLevel = DataLevel.Records
    const isSupportedPromise = instance.isSupported(null, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if dataLevel is null', async () => {
    const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [{} as DataRecord, {} as DataRecord],
      dataSource: { isDataSourceSet: () => false, isInAppConfig: () => true, type: DataSourceTypes.FeatureLayer,
        getStatus: () => DataSourceStatus.Loaded } as unknown as DataSource,
      type: 'current'
    }]
    const dataLevel = null
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
  it('should return false if widgetId is null', async () => {
     const dataSets: DataRecordSet[] = [{
      name: 'DataSet1',
      records: [{} as DataRecord, {} as DataRecord],
      dataSource: { isDataSourceSet: () => false, isInAppConfig: () => true, type: DataSourceTypes.FeatureLayer,
        getStatus: () => DataSourceStatus.Loaded } as unknown as DataSource,
      type: 'current'
    }]
    const dataLevel = DataLevel.Records
    const isSupportedPromise = instance.isSupported(dataSets, dataLevel)
    await expect(isSupportedPromise).resolves.toBe(false)
  })
})