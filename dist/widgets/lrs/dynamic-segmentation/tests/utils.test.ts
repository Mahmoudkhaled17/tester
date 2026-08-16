import { Immutable } from 'jimu-core'
import { constructSettingsPerView, getNetworkDefaultScale, resetConfig, setValuesForView } from '../src/common/utils'
import { DisplayType, AttributeInputType } from '../src/config'
import { type LrsLayer, LrsLayerType, ModeType } from 'widgets/shared-code/lrs'
import * as widgetSettingsUtils from '../../../shared-code/lib/lrs/utilities/widget-settings-utils'
import * as utils from '../src/common/utils'

const immutable = Immutable as unknown as (value: unknown) => any

jest.mock('../../../shared-code/lib/lrs/utilities/locks-utils', () => ({
  isConflictPreventionEnabled: jest.fn().mockResolvedValue(true)
}))

jest.spyOn(widgetSettingsUtils, 'getDefaultAttributeSet').mockReturnValue('All Points')
jest.spyOn(utils, 'getNetworkDefaultScale').mockReturnValue(1)

const mockSettingsPerView = immutable({
  defaultDisplayType: DisplayType.Table,
  attributeInputType: AttributeInputType.LineOnly,
  defaultPointAttributeSet: 'All Points',
  defaultLineAttributeSet: 'All Lines',
  mapHighlightColor: '#65adff',
  tableHighlightColor: '#65adff',
  defaultDiagramScale: 0,
  allowEditing: false,
  allowMerge: false,
  showEventStatistics: false,
  defaultNetwork: 'CountyLog'
})


describe('constructSettingsPerView', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should construct default settings preview correctly', () => {
    const settings = constructSettingsPerView()
    expect(settings).toEqual({
      defaultDisplayType: 'Table',
      attributeInputType: 'LineOnly',
      defaultPointAttributeSet: '',
      defaultLineAttributeSet: '',
      attributeSets: { attributeSet: [] },
      mapHighlightColor: '#65adff',
      tableHighlightColor: '#65adff',
      defaultDiagramScale: 3,
      showEventStatistics: false,
      allowMerge: false,
      allowEditing: true,
      defaultNetwork: '',
      orientedImageryWidgetId: '',
      searchTolerance: 50,
      searchUnit: 'feet'
    })
  })
})

describe('setValuesForView', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockLrsLayers = immutable([
    { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'CountyLog', layerType: LrsLayerType.Network },
    { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'Access_Control', layerType: LrsLayerType.Event }
  ] as LrsLayer[])

  it('should use default point and line attribute sets and default diagram scale when useRuntimeLayers is false', async () => {
    const settings = await setValuesForView(mockSettingsPerView, mockLrsLayers, false)
    expect(settings.defaultPointAttributeSet).toBe('All Points')
    expect(settings.defaultLineAttributeSet).toBe('All Lines')
    expect(settings.defaultDiagramScale).toBe(3)
  })

  it('should use fallbacks when settings are not defined', async () => {
    const emptySettings = mockSettingsPerView.set('mapHighlightColor', null).set('tableHighlightColor', null)
    const settings = await setValuesForView(emptySettings, mockLrsLayers, false)
    expect(settings.mapHighlightColor).toBe('#65adff')
    expect(settings.tableHighlightColor).toBe('#65adff')
  })

  it('should handle empty settingsPerView gracefully', async () => {
    const settings = await setValuesForView(null, mockLrsLayers, false)
    expect(settings.defaultDisplayType).toBe('Table')
    expect(settings.attributeInputType).toBe('LineOnly')
  })

  it('should set attributeSets, defaultPointAttributeSet, defaultLineAttributeSet, and defaultDiagramScale when useRuntimeLayers is true', async () => {
    const settings = await setValuesForView(mockSettingsPerView, mockLrsLayers, true)
    expect(settings.defaultPointAttributeSet).toBe('All Points')
    expect(settings.defaultDiagramScale).toBe(3) // should this evaluate to 3 or 0 when defaultDiagramScale is 0 in settings?
  })

  it('should set defaultNetwork to the network layer name if not defined in settings', async () => {
    const noDefaultNetworkSettings = mockSettingsPerView.set('defaultNetwork', '')
    const settings = await setValuesForView(noDefaultNetworkSettings, mockLrsLayers, false)
    expect(settings.defaultNetwork).toBe('CountyLog')
  })

  it('should retain defaultNetwork from settings if already defined', async () => {
    const settings = await setValuesForView(mockSettingsPerView, mockLrsLayers, false)
    expect(settings.defaultNetwork).toBe('CountyLog')
  })

  it('should handle missing network layer gracefully', async () => {
    const eventOnlyLayers = immutable([
      { id: '', serviceId: 0, lrsUrl: '', lrsId: '', useFieldAlias: false, name: 'Access_Control', layerType: LrsLayerType.Event }
    ] as LrsLayer[])
    const settings = await setValuesForView(mockSettingsPerView, eventOnlyLayers, true)
    expect(settings.defaultNetwork).toBe('CountyLog')
    expect(settings.attributeSets.attributeSet.length).toBe(0)
    expect(settings.defaultPointAttributeSet).toBe('All Points')
    expect(settings.defaultLineAttributeSet).toBe('All Lines')
    expect(settings.defaultDiagramScale).toBe(3)
  })
})

describe('resetConfig', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should reset configuration to default values', () => {
    const mockConfig = immutable({
      lrsLayers : [
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
        } as LrsLayer,
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
        } as LrsLayer,
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
        } as LrsLayer,
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
        } as LrsLayer,
      ],
      defaultDisplayType: DisplayType.Table,
      attributeInputType: AttributeInputType.LineOnly,
      attributeSets: { attributeSet: [] },
      defaultPointAttributeSet: '',
      defaultLineAttributeSet: '',
      mapHighlightColor: '#65adff',
      tableHighlightColor: '#65adff',
      defaultDiagramScale: 3,
      allowEditing: true,
      allowMerge: false,
      showEventStatistics: false,
      mode: ModeType.Layer,
      mapViewsConfig: {},
      settingsPerView: {},
      defaultNetwork: '',
      orientedImageryWidgetId: '',
      searchTolerance: 50,
      searchUnit: 'feet'
    })

    const expectedConfig = immutable({
      lrsLayers : [],
      defaultDisplayType: DisplayType.Table,
      attributeInputType: AttributeInputType.LineOnly,
      attributeSets: { attributeSet: [] },
      defaultPointAttributeSet: '',
      defaultLineAttributeSet: '',
      mapHighlightColor: '#65adff',
      tableHighlightColor: '#65adff',
      defaultDiagramScale: 3,
      allowEditing: true,
      allowMerge: false,
      showEventStatistics: false,
      mode: ModeType.Layer,
      mapViewsConfig: {},
      settingsPerView: {},
      defaultNetwork: '',
      orientedImageryWidgetId: '',
      searchTolerance: 50,
      searchUnit: 'feet'
    })

    const updated = resetConfig(mockConfig, ModeType.Layer)
    expect(updated).toEqual(expectedConfig)
  })

  it('should handle null configuration gracefully', () => {
    const updated = resetConfig(null, ModeType.Layer)
    expect(updated).toEqual({})
  })
})

describe('getNetworkDefaultScale', () => {

  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it ('should return 190080 when unit passed is esriUnits', () => {
    expect(getNetworkDefaultScale('esriInches')).toBe(190080)
  })

  it ('should return 3 if unit passed does not match expected unit', () => {
    expect(getNetworkDefaultScale('esriDegrees')).toBe(3)
  })

  it ('should return 3 if unit passed does not match expected unit', () => {
    expect(getNetworkDefaultScale(null)).toBe(3)
  })

})