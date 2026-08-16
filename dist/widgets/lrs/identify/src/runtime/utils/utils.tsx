import { isDefined } from '../../../../../shared-code/lib/lrs/utilities/utils'
import Graphic from 'esri/Graphic'
import type { Size } from 'jimu-ui'

interface MeasureField {
  value: string;
  label: string;
}
export function getCodedValueLabel (fieldName: string, value: string | number | Date, fieldInfos: __esri.Field[]): string {
  let label = ''
  const fieldMatch = fieldInfos?.find(info => info.name === fieldName)
  if (isDefined(fieldMatch) && isDefined(fieldMatch.domain) && fieldMatch.domain.type === 'coded-value') {
    const codedVals = fieldMatch.domain.codedValues
    const match = codedVals.find(c => {
      if (typeof c.code === 'string' && typeof value === 'string') {
        return c.code.toLowerCase() === value.toLowerCase()
      } else {
        return c.code === value
      }
    })

    if (match) {
      label = `${match.code} - ${match.name}`
    }
  }
  return label
}

export function getPointFromPolyline (attributes: any, measure?: string, measureFields?: MeasureField[], selectedPoint?: __esri.Point): Graphic {
  if (!attributes || attributes?.length === 0 || !selectedPoint || !measureFields || measureFields?.length === 0) {
    return {} as Graphic
  }
  if (measure) attributes[measureFields.at(0).value] = measure
  const feature = new Graphic({
    geometry: selectedPoint,
    attributes: attributes
  })
  return feature
}

export function getDataRecordFromObjId (records: any, objectId: number, objectIdFieldName: string) {
  for (let i = 0; i < records?.length; i++) {
    const id = records[i].getData()[objectIdFieldName]
    if (id === objectId) {
      return records[i]
    }
  }
  return undefined
}

export function calculateAlignmentPosition (
    x: number,
    y: number,
    view: any,
    size: Size,
    window: any
  ): any {
    if (!view || !window) {
      return undefined
    }

    const popupWidth = size.width
    const popupHeight = size.height
    const isFullyVisible = x >= 0 && y >= 0 &&
        (x + popupWidth) <= window.innerWidth &&
        (y + popupHeight) <= window.innerHeight

    if (!isFullyVisible) {
      // Adjust x-coordinate if the popup is going beyond the right edge of the viewport
      if (x + popupWidth > window.innerWidth) {
        x = window.innerWidth - popupWidth
      }

      // Adjust y-coordinate if the popup is going beyond the bottom edge of the viewport
      if (y + popupHeight > window.innerHeight) {
        y = window.innerHeight - popupHeight
      }

      // Adjust x-coordinate if the popup is going beyond the left edge of the viewport
      if (x < 0) {
        x = 0
      }

      // Adjust y-coordinate if the popup is going beyond the top edge of the viewport
      if (y < 0) {
        y = 0
      }
      return { x: x, y: y }
    }
    return null
  }