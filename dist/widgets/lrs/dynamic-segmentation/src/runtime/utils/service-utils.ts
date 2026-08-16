import { type DataSource, type FeatureLayerDataSource, SessionManager, type ImmutableArray, DataSourceManager } from 'jimu-core'
import { type AttributeSet, type LrsLayer, requestService, isDefined, getLayer, QueryRouteMeasures } from 'widgets/shared-code/lrs'
import type { RouteInfoFromDataAction, LocationParam, AttributeSetParam, QueryAttributeSetResults } from '../../config'

export function getLocations (params: RouteInfoFromDataAction): LocationParam[] {
  const locations: LocationParam[] = []
  if (!params) {
    return []
  }
  if (params.routeId) {
    const location: LocationParam = {
      routeId: params.routeId
    }
    if (isDefined(params.fromMeasure) && !isNaN(params.fromMeasure)) {
      location.fromMeasure = params.fromMeasure
    }
    if (isDefined(params.toMeasure) && !isNaN(params.toMeasure)) {
      location.toMeasure = params.toMeasure
    }
    locations.push(location)
  }
  return locations
}

export function getAttributeSetParam (routeInfo: RouteInfoFromDataAction, lrsLayers: ImmutableArray<LrsLayer>, attributeSet: AttributeSet): AttributeSetParam[] {
    if (!attributeSet || !routeInfo || !routeInfo.networkInfo) {
    return []
  }
  const attributeSets: AttributeSetParam[] = []
  const dataSourceManager = DataSourceManager.getInstance()
  const lrsNetworkId = routeInfo.networkInfo.lrsNetworkId
  if (attributeSet) {
    attributeSet.layers.forEach((layer) => {
      const eventLayer = lrsLayers.find((lrsLayer) => lrsLayer.serviceId === layer.layerId)
      if (isDefined(eventLayer)) {
        const eventParentNetworkId = eventLayer?.eventInfo?.parentNetworkId
        if (lrsNetworkId === eventParentNetworkId) {
          const attributeSetParam: AttributeSetParam = {
            layerId: layer.layerId.toString(),
            fields: []
          }
          // Fields from attribute set
          layer.fields.forEach((field) => {
            attributeSetParam.fields.push(field.name)
          })
          // Fields from event layer
          attributeSetParam.fields.push(eventLayer.eventInfo.eventIdFieldName)
          const ds = dataSourceManager.getDataSource(eventLayer.useDataSource.dataSourceId)
          // TODO: support uniqueIds
          attributeSetParam.fields.push(ds.getIdField())
          attributeSets.push(attributeSetParam)
        }
      }
    })
  }

  return attributeSets
}

export function buildIntersectionAttributeSetParam (intersectionLayer: LrsLayer): AttributeSetParam {
  const intersectionFields = []

  // Add intersection display field.
  if (intersectionLayer?.intersectionInfo) {
    const displayField = intersectionLayer.intersectionInfo.referentProperties.allFieldsDetails.find(field => field.name === intersectionLayer.displayField || field.alias === intersectionLayer.displayField)?.name
    if (displayField) {
      intersectionFields.push(displayField)
    }
    if (displayField !== intersectionLayer.intersectionInfo?.intersectionIdFieldNameSchema.name &&
      displayField !== intersectionLayer.intersectionInfo?.intersectionIdFieldNameSchema.alias
    ) {
      intersectionFields.push(intersectionLayer.intersectionInfo?.intersectionIdFieldNameSchema.name)
    }
    if (displayField !== intersectionLayer.intersectionInfo?.intersectionNameFieldNameSchema.name &&
      displayField !== intersectionLayer.intersectionInfo?.intersectionNameFieldNameSchema.alias
    ) {
      intersectionFields.push(intersectionLayer.intersectionInfo?.intersectionNameFieldNameSchema.name)
    }
    if (displayField !== intersectionLayer.intersectionInfo?.routeIdFieldSchema.name &&
      displayField !== intersectionLayer.intersectionInfo?.routeIdFieldSchema.alias
    ) {
      intersectionFields.push(intersectionLayer.intersectionInfo?.routeIdFieldSchema.name)
    }
  }

  // Add object id field.
  const dataSourceManager = DataSourceManager.getInstance()
  const intersectionDS = dataSourceManager.getDataSource(intersectionLayer.useDataSource.dataSourceId)
  if (intersectionDS) {
    intersectionFields.push(intersectionDS.getIdField())
  }

  if (intersectionFields.length > 0) {
    const intersectionAttributeSet: AttributeSetParam = {
      layerId: intersectionLayer.serviceId.toString(),
      fields: intersectionFields
    }
    return intersectionAttributeSet
  }
  return null
}

export function buildDeviceJunctionAttributeSetParam (deviceJunctionLayer: LrsLayer): AttributeSetParam {
  if (deviceJunctionLayer?.utilityNetworkInfo) {

    const dataSourceManager = DataSourceManager.getInstance()
    const ds = dataSourceManager.getDataSource(deviceJunctionLayer.useDataSource.dataSourceId)
    const oid = ds.getIdField()
    const deviceJunctionAttributeSet: AttributeSetParam = {
      layerId: deviceJunctionLayer.serviceId.toString(),
      fields: [deviceJunctionLayer.displayField, oid]
    }
    return deviceJunctionAttributeSet
  }
  return null
}


export async function queryIntersections (
  routeInfo: RouteInfoFromDataAction,
  intersectionLayer: LrsLayer,
  networkDS: DataSource,
  tvd: Date,
  translate: boolean
): Promise< __esri.Graphic[]> {
  if (!routeInfo.routeId.length || !routeInfo.networkInfo) {
    return []
  }

  // Get data source for intersection layer
  const dataSourceManager = DataSourceManager.getInstance()
  const intersectionDS = dataSourceManager.getDataSource(intersectionLayer.useDataSource.dataSourceId) as FeatureLayerDataSource

  if (!isDefined(intersectionDS)) {
    return []
  }

  try {
    const layer = await getLayer(intersectionLayer.useDataSource)
    if (!layer) {
      return []
    }

    const routeIdFieldName = intersectionLayer.intersectionInfo.routeIdFieldSchema?.name
    if (!routeIdFieldName) {
      return []
    }

    // Build query to get intersecting features based on routeId
    const query = layer.createQuery()
    query.outFields = ['*']
    query.returnGeometry = true
    query.returnM = true

    // Honor any existing filters from the data source
    const currentQueryParams = intersectionDS.getCurrentQueryParams()
    const routeIdWhere = `${routeIdFieldName} LIKE '%${routeInfo.routeId}%'`

    if (currentQueryParams?.where && currentQueryParams.where !== '1=1') {
      query.where = `(${currentQueryParams.where}) AND (${routeIdWhere})`
    } else {
      query.where = routeIdWhere
    }

    // Set gdbVersion if available
    const originDs: FeatureLayerDataSource = networkDS as FeatureLayerDataSource
    const gdbVersion = originDs.getGDBVersion()
    if (gdbVersion) {
      query.gdbVersion = gdbVersion
    }

    const results = await layer.queryFeatures(query)

    if (results.features.length === 0) {
      return []
    }

    // Measures are based on first intersecting route. For features to be plotted correctly in the diagram,
    // we will need to translate the measures to the current route. If we are displaying attributes, then
    // we want to keep the original attributes the same.
    if (!translate) {
      return results.features
    }

    // Extract point geometries for measure lookup
    const points = results.features.map(feature => feature.geometry as __esri.Point)

    // Get correct measures for all intersection points in one call
    const measures = await QueryRouteMeasures(
      networkDS,
      routeInfo.networkInfo,
      points,
      tvd,
      routeInfo.routeId
    )

    // Update each feature with its correct measure
    const measureFieldName = intersectionLayer.intersectionInfo.measureFieldNameSchema?.name
    if (measureFieldName && measures.length === results.features.length) {
      results.features.forEach((feature, index) => {
        feature.attributes[measureFieldName] = measures[index]
      })
    }

    return results.features
  } catch (error) {
    return []
  }
}

export async function queryDeviceJunctions (
  routeInfo: RouteInfoFromDataAction,
  deviceJunctionLayer: LrsLayer,
  networkDS: DataSource
): Promise<__esri.Graphic[]> {
  if (!routeInfo.routeId.length || !routeInfo.networkInfo) {
    return []
  }

  const dataSourceManager = DataSourceManager.getInstance()
  const deviceJunctionDS = dataSourceManager.getDataSource(deviceJunctionLayer.useDataSource?.dataSourceId) as FeatureLayerDataSource

  if (!isDefined(deviceJunctionDS)) {
    return []
  }

  try {
    const layer = await getLayer(deviceJunctionLayer.useDataSource)
    if (!layer) {
      return []
    }

    const routeIdFieldName = deviceJunctionLayer.utilityNetworkInfo?.routeIdFieldNameSchema?.name
    if (!routeIdFieldName) {
      return []
    }

    const query = layer.createQuery()
    query.outFields = ['*']
    query.returnGeometry = true
    query.returnM = true

    const currentQueryParams = deviceJunctionDS.getCurrentQueryParams()
    const routeIdWhere = `${routeIdFieldName} LIKE '%${routeInfo.routeId}%'`

    if (currentQueryParams?.where && currentQueryParams.where !== '1=1') {
      query.where = `(${currentQueryParams.where}) AND (${routeIdWhere})`
    } else {
      query.where = routeIdWhere
    }

    const originDs: FeatureLayerDataSource = networkDS as FeatureLayerDataSource
    const gdbVersion = originDs.getGDBVersion()
    if (gdbVersion) {
      query.gdbVersion = gdbVersion
    }

    const results = await layer.queryFeatures(query)
    return results.features
  } catch (error) {
    return []
  }
}

export async function queryAttributeSets (
  networkDS: DataSource,
  routeInfo: RouteInfoFromDataAction,
  date: Date,
  attributeSet: AttributeSetParam[],
  historicMoment: number
): Promise<QueryAttributeSetResults> {
  if (!routeInfo.routeId.length) {
    return null
  }

  const url = routeInfo.networkInfo.networkUrl
  const REST = `${url}/queryAttributeSet`
  const token = await SessionManager.getInstance().getSessionByUrl(url).getToken(url)

  const location = getLocations(routeInfo)

  const originDs: FeatureLayerDataSource = networkDS as FeatureLayerDataSource
  let gdbVersion = originDs.getGDBVersion()
  if (!gdbVersion) {
    gdbVersion = ''
  }

  const dateRange: number[] = [date.getTime(), date.getTime()]

  const params = {
    f: 'json',
    token: token,
    locations: location,
    attributeSet: attributeSet,
    temporalViewDate: JSON.stringify(dateRange),
    gdbVersion: gdbVersion,
    historicMoment: historicMoment !== -1 ? historicMoment : ''
  }

  return requestService({ method: 'POST', url: REST, params: params })

    .then((results: QueryAttributeSetResults) => {
      if (!results) {
        return null
      }
      return results
    })
}
