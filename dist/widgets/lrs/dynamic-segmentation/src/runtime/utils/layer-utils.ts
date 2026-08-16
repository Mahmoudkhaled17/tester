import type { IMFieldSchema, ImmutableObject, ImmutableArray } from 'jimu-core'
import { type AttributeFieldSettings, type LrsLayer, LrsLayerType } from 'widgets/shared-code/lrs'
import { EventType } from '../../config'

export function getLayerName (lrsLayer: LrsLayer | ImmutableObject<LrsLayer>): string {
  return lrsLayer.layerType === LrsLayerType.Event
    ? lrsLayer.eventInfo.datasetName
    : getDatasetName(lrsLayer.name)
}

export function getDatasetName (layerName: string): string {
  const dotIndex = layerName.indexOf('.')
  return dotIndex !== -1 ? layerName.substring(dotIndex + 1) : layerName
}

export function getAttributeFieldSettings (lrsLayer: LrsLayer, attributeName: string): AttributeFieldSettings | undefined {
  return lrsLayer.layerType === LrsLayerType.Event
    ? lrsLayer.eventInfo?.attributeFields?.find((attribute) => attribute.field.name === attributeName)
    : undefined
}

export function getAttributeFieldSchema (lrsLayer: LrsLayer, attributeName: string): IMFieldSchema | undefined {
  if (lrsLayer.layerType === LrsLayerType.Event) {
    return lrsLayer.eventInfo?.lrsFields?.find((field) => field.name === attributeName)
  }

  if (lrsLayer.layerType === LrsLayerType.Intersection) {
    const field = lrsLayer.intersectionInfo?.referentProperties?.layerFields?.find((field) => field.name === attributeName)
    return field ? (field as unknown as IMFieldSchema) : undefined
  }

  if (lrsLayer.layerType === LrsLayerType.UtilityNetwork) {
    const field = lrsLayer.utilityNetworkInfo?.referentProperties?.layerFields?.find((field) => field.name === attributeName)
    return field ? (field as unknown as IMFieldSchema) : undefined
  }

  return undefined
}

export function isEditableType (lrsLayer: LrsLayer): boolean {
  return lrsLayer.layerType === LrsLayerType.Event
}

export function getLayerType (lrsLayer: LrsLayer): EventType {
  if (lrsLayer.layerType === LrsLayerType.Event) {
    return lrsLayer.eventInfo?.isPointEvent ? EventType.Point : EventType.Line
  }

  if (lrsLayer.layerType === LrsLayerType.Intersection) {
    return EventType.Intersection
  }

  return EventType.Point
}

export function getIntersectionLayers (lrsLayers: ImmutableArray<LrsLayer>, networkId: number): ImmutableArray<LrsLayer> {
  return lrsLayers.filter((layer) =>
    layer.layerType === LrsLayerType.Intersection &&
    layer.intersectionInfo?.parentNetworkId === networkId
  )
}

export function getDeviceJunctionLayers (lrsLayers: ImmutableArray<LrsLayer>): ImmutableArray<LrsLayer> {
  return lrsLayers.filter((layer) =>
    layer.layerType === LrsLayerType.UtilityNetwork &&
    layer.utilityNetworkInfo?.referentProperties?.isPoint
  )
}

export function getIntersectionNameSeparator (lrsLayer: LrsLayer): string[] {
  return lrsLayer.layerType === LrsLayerType.Intersection
    ? lrsLayer.intersectionInfo?.intersectingLayers?.map(layer => layer.nameSeparator) || []
    : []
}
