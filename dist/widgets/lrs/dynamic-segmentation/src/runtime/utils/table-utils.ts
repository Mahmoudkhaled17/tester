import { isDefined, type LrsLayer, getLayer, fetchEnterpriseFieldGroup, normalizeFieldName, fetchEnterpriseContingentValues, fieldsWithContingentValues, LrsLayerType } from 'widgets/shared-code/lrs'
import { EventType, type SubtypeLayers, type DynSegFieldInfo, type AttributeSetParam } from '../../config'
import type { ImmutableArray } from 'seamless-immutable'
import { DynSegFields } from '../../constants'
import { DataSourceManager } from 'jimu-core'
import { getAttributeFieldSchema, getAttributeFieldSettings, getIntersectionNameSeparator, getLayerName, getLayerType, isEditableType } from './layer-utils'

export function getFieldInfo (featureLayer: __esri.FeatureLayer, lrsLayers: ImmutableArray<LrsLayer>, subTypeLayers: SubtypeLayers[]): DynSegFieldInfo[] {
  if (!isDefined(featureLayer) || !isDefined(lrsLayers) || lrsLayers.length === 0) { return [] }

  const dataSourceManager = DataSourceManager.getInstance()
  const eventIdFields = new Set<string>()
  const intersectionIdFields = new Set<string>()
  const intersectionNameFields = new Set<string>()
  const intersectionRouteIdFields = new Set<string>()
  const eventOIDFields = new Map<string, string>()
  lrsLayers.forEach((layer) => {
    if (layer.layerType === LrsLayerType.Event) {
      // Collect eventId fields and OID fields for later use. None event layers won't have these fields
      const eventIdFieldName = layer?.eventInfo?.eventIdFieldName || ''
      eventIdFields.add(eventIdFieldName)

      // Get OID field for the layer
      const ds = dataSourceManager.getDataSource(layer.useDataSource.dataSourceId)
      eventOIDFields.set(getLayerName(layer), ds.getIdField())
    } else if (layer.layerType === LrsLayerType.Intersection) {
      // Collect intersectionId fields for later use. Only intersection layers have this field
      const intersectionIdFieldName = layer?.intersectionInfo?.intersectionIdFieldNameSchema?.name || ''
      intersectionIdFields.add(intersectionIdFieldName)

      const intersectionNameFieldName = layer?.intersectionInfo?.intersectionNameFieldNameSchema?.name || ''
      intersectionNameFields.add(intersectionNameFieldName)

      const intersectionRouteIdFieldName = layer?.intersectionInfo?.routeIdFieldSchema?.name || ''
      intersectionRouteIdFields.add(intersectionRouteIdFieldName)

      // Get OID field for the layer
      const ds = dataSourceManager.getDataSource(layer.useDataSource.dataSourceId)
      eventOIDFields.set(getLayerName(layer), ds.getIdField())
    } else if (layer.layerType === LrsLayerType.UtilityNetwork) {
      // Get OID field so it is excluded from the attribute table
      const ds = dataSourceManager.getDataSource(layer.useDataSource?.dataSourceId)
      if (ds) {
        eventOIDFields.set(getLayerName(layer), ds.getIdField())
      }
    }
  })

  const fieldInfos: DynSegFieldInfo[] = []
  const fields = featureLayer.fields
  let fieldIndex = 0
  fields.forEach((field) => {
    if (!field.alias.includes('.')) {
      if (field.alias === DynSegFields.typeAlias) {
        const fieldInfo: DynSegFieldInfo = {
          index: fieldIndex,
          featureFieldName: field.name,
          featureFieldAlias: field.alias,
          eventName: '',
          originalFieldName: field.alias,
          eventLayerId: '',
          visible: true,
          exclude: false,
          editable: false,
          EventType: EventType.Undefined,
          isSubtypeField: false,
          isEventIdField: false,
          isIntersectionIdField: false,
          isIntersectionNameField: false,
          isIntersectionRouteIdField: false,
          isOidField: false,
          isUNField: false,
          displayField: '',
          originalFieldAlias: field.alias,
          eventAlias: ''
        }
        fieldInfos.push(fieldInfo)
      } else {
        const fieldInfo: DynSegFieldInfo = {
          index: fieldIndex,
          featureFieldName: field.name,
          featureFieldAlias: field.alias,
          eventName: '',
          originalFieldName: field.alias,
          eventLayerId: '',
          visible: false,
          exclude: true,
          editable: false,
          EventType: EventType.Undefined,
          isSubtypeField: false,
          isEventIdField: false,
          isIntersectionIdField: false,
          isIntersectionNameField: false,
          isIntersectionRouteIdField: false,
          isOidField: false,
          isUNField: false,
          displayField: '',
          originalFieldAlias: '',
          eventAlias: ''
        }
        fieldInfos.push(fieldInfo)
      }
    } else if (field.alias.includes('.')) {
      const tableName = field.alias.split('.')[0]
      const attributeName = field.alias.split('.')[1]
      const lrsLayer = lrsLayers.find(layer => getLayerName(layer) === tableName)
      if (!isDefined(lrsLayer)) {
        return
      }
      const attributeSetting = getAttributeFieldSettings(lrsLayer, attributeName)
      const fieldSchemaAttribute = getAttributeFieldSchema(lrsLayer, attributeName)
      const isEventIdField = eventIdFields.has(attributeName)
      const isIntersectionIdField = intersectionIdFields.has(attributeName)
      const isIntersectionNameField = intersectionNameFields.has(attributeName)
      const isIntersectionRouteIdField = intersectionRouteIdFields.has(attributeName)
      const intersectionLayerSeparators = getIntersectionNameSeparator(lrsLayer)
      const oidField = eventOIDFields.get(getLayerName(lrsLayer))
      const isOidField = oidField === attributeName
      const isEditable = isEditableType(lrsLayer)
      const eventType = getLayerType(lrsLayer)
      const fieldInfo: DynSegFieldInfo = {
        index: fieldIndex,
        featureFieldName: field.name,
        featureFieldAlias: field.alias,
        eventName: tableName,
        eventAlias: getLayerName(lrsLayer),
        originalFieldName: attributeName,
        originalFieldAlias: isDefined(attributeSetting) ? attributeSetting?.field?.alias : fieldSchemaAttribute?.alias,
        eventLayerId: lrsLayer.serviceId.toString(),
        visible: true,
        exclude: isEventIdField || isOidField,
        editable: !isEventIdField && !isOidField && isEditable,
        EventType: eventType,
        isSubtypeField: isSubtypeField(lrsLayer.serviceId.toString(), field.name, subTypeLayers),
        isEventIdField: isEventIdField,
        isIntersectionIdField: isIntersectionIdField,
        isIntersectionNameField: isIntersectionNameField,
        isIntersectionRouteIdField: isIntersectionRouteIdField,
        intersectionSeparators: intersectionLayerSeparators,
        isOidField: isOidField,
        isUNField: lrsLayer.layerType === LrsLayerType.UtilityNetwork,
        displayField: lrsLayer.displayField
      }
      fieldInfos.push(fieldInfo)
    }
    fieldIndex++
  })
  return fieldInfos
}

export function isSubtypeField (eventId: string, fieldName: string, subTypeLayers: SubtypeLayers[]): boolean {
  if (!isDefined(subTypeLayers)) { return false }
  const subTypeLayer = subTypeLayers.find(layer => layer.id === eventId)
  if (isDefined(subTypeLayer)) {
    if (!isDefined(subTypeLayer.subtypeField)) { return false }
    return subTypeLayer.subtypeField.toUpperCase() === fieldName.toUpperCase()
  }
  return false
}

export function getAttributesByTable (fieldInfos: DynSegFieldInfo[], record: __esri.Graphic, tableName: string, getOiDField: boolean): Map<string, string | number | Date> {
  const attributes = new Map<string, string | number | Date>()
  if (isDefined(fieldInfos) && isDefined(record) && fieldInfos.length > 0) {
    fieldInfos.forEach((field) => {
      if (field.eventName === tableName) {
        if (field.isOidField) {
          if (getOiDField) {
            attributes.set(field.featureFieldName, record.attributes[field.featureFieldName])
          }
        } else {
          // Table uses feature field name for the record
          attributes.set(field.originalFieldName, record.attributes[field.featureFieldName])
        }
      }
    })
  }
  if (isDefined(record)) {
    attributes.set(DynSegFields.routeIdName, record.attributes[DynSegFields.routeIdName])
    attributes.set(DynSegFields.fromDateName, record.attributes[DynSegFields.fromDateName])
    attributes.set(DynSegFields.toDateName, record.attributes[DynSegFields.toDateName])
    attributes.set(DynSegFields.fromMeasureName, record.attributes[DynSegFields.fromMeasureName])
    attributes.set(DynSegFields.toMeasureName, record.attributes[DynSegFields.toMeasureName])
  }
  return attributes
}

export function getSubtypeFieldsToUpdate (value: string | number, fieldInfo: DynSegFieldInfo, record: __esri.Graphic, subTypeInfo: SubtypeLayers[]): Map<string, string | number> {
  const fieldMap = new Map<string, string | number>()
  if (fieldInfo?.isSubtypeField) {
    const subtype = subTypeInfo.find(s => s.id === fieldInfo.eventLayerId)
    if (isDefined(record) && isDefined(record?.attributes) && isDefined(subtype) && isDefined(subtype.subtypes) && subtype.subtypes.length > 0 ) {
      const defaultValues = subtype.subtypes.find(s => s.code === value)?.defaultValues
      if (isDefined(defaultValues)) {
        Object.keys(defaultValues).forEach((key) => {
          if (key in record.attributes) {
            const currentValue = record.attributes[key]
            if (currentValue !== defaultValues[key]) {
              fieldMap.set(key, defaultValues[key])
            }
          }
        })
        return fieldMap
      }
    }
  }
  return fieldMap
}

export async function getLayerMap (lrsLayers: ImmutableArray<LrsLayer>, attributeSet: AttributeSetParam[]): Promise<Map<string, __esri.Layer>> {
  const layerMap = new Map<string, any>()
  await Promise.all(attributeSet.map(async (set) => {
    const event = lrsLayers.find((layer) => layer.serviceId.toString() === set.layerId)
    if (isDefined(event)) {

      await getLayer(event.useDataSource).then((eventLayer) => {
        layerMap.set(event.serviceId.toString(), eventLayer)
      })
    }
  }))
  return layerMap
}

export async function getFieldGroups (LayerMap: Map<string, __esri.Layer>, lrsLayers: ImmutableArray<LrsLayer>, attributeSet: AttributeSetParam[]): Promise<Map<string, any>> {
  const fieldGroups = new Map<string, any>()
  await Promise.all(attributeSet.map(async (set) => {
    const event = lrsLayers.find((layer) => layer.serviceId.toString() === set.layerId)
    const eventLayer = LayerMap.get(event.serviceId.toString())
    if (isDefined(event) && isDefined(eventLayer)) {
      await fetchEnterpriseFieldGroup(eventLayer)

        .then((groups) => {
          if (groups?.length > 0) {
            const fieldGroup = groups.map((group) => ({
              name: group.name,
              isEditingRestrictive: group.isEditingRestrictive,
              fields: group.fieldNames.names.map((fieldName: string) =>
                normalizeFieldName(fieldName?.toLocaleUpperCase())
              )
            }))
            fieldGroups.set(event.serviceId.toString(), fieldGroup)
          }
        })
    }
  }))
  return fieldGroups
}

export async function getContingentValues (LayerMap: Map<string, __esri.Layer>, lrsLayers: ImmutableArray<LrsLayer>, attributeSet: AttributeSetParam[]): Promise<Map<string, any>> {
  const contingencies = new Map<string, any>()
  await Promise.all(attributeSet.map(async (set) => {
    const event = lrsLayers.find((layer) => layer.serviceId.toString() === set.layerId)
    const eventLayer = LayerMap.get(event.serviceId.toString())
    if (isDefined(event) && isDefined(eventLayer)) {
      await fetchEnterpriseContingentValues(eventLayer)
        .then((response) => {
          contingencies.set(event.serviceId.toString(), response)
        })
    }
  }))
  return contingencies
}

export function getValidValues (fieldGroups, eventFields: __esri.Field[], record: __esri.Graphic, fieldName: string) {
  const validValues = []
  const contingentValueFields = fieldsWithContingentValues(fieldGroups)
  if (!contingentValueFields.has(fieldName)) return []
  if (!fieldGroups || (fieldGroups.length === 0)) return []
  const invalidValues = []
  if (fieldGroups?.length > 0) {
    for (const fieldGroup of fieldGroups) {
      const contingencies = fieldGroup?.contingencies
      const fieldNames = fieldGroup?.fields
      if (contingencies && fieldNames?.includes(fieldName)) {
        for (const contingency of contingencies) {
          let contingentValue = null
          let contingentValueOk = false
          const keys = Object.keys(contingency.values)
          keys?.forEach((key) => {
            const value = contingency.values[key]
            if (key === fieldName) {
              if (value.objectType === 'code') {
                contingentValue = value.codedValue?.code
              }
            } else {
              if (value.objectType === 'code') {
                const code = value.codedValue?.code
                eventFields.some((info) => {
                  if (info.alias.split('.')[1] === key) {
                    const activeCode = record.attributes[info.name]
                    if (activeCode === code) {
                      contingentValueOk = true
                    } else if (activeCode === null) {
                      contingentValueOk = true
                    }
                    return true
                  }
                  return false
                })
              }
            }
          })
          if (contingentValue !== null) {
            if (contingentValueOk) {
              validValues.push(contingentValue)
            } else {
              invalidValues.push(contingentValue)
            }
          }
        }
      }
    }
  }
  return validValues
}

export function getPendingEditsKey (record: __esri.Graphic, eventName: string): string {
  const objectRow = record.attributes[DynSegFields.objectIdName]
  const tableName = eventName
  return `${objectRow}.${tableName}`
}
