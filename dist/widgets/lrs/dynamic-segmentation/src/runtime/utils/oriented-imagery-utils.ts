import { getNearestCoordinate, union } from 'widgets/shared-code/lrs'

export interface PolylineSegment {
  start: __esri.Point
  end: __esri.Point
  startM: number
  endM: number
}

interface FootprintMeasureResult {
  measure: number
  toMeasure: number
}

/**
 * Calculates the projection parameter for a point onto a line segment.
 * The parameter represents where the point projects onto the line:
 */
function calculateProjectionParameter (
  point: __esri.Point,
  segmentStart: __esri.Point,
  segmentEnd: __esri.Point
): number {
  const dx = segmentEnd.x - segmentStart.x
  const dy = segmentEnd.y - segmentStart.y
  const len2 = dx * dx + dy * dy

  // Segment has zero length?
  if (len2 === 0) return 0

  // Calculate projection parameter
  return ((point.x - segmentStart.x) * dx + (point.y - segmentStart.y) * dy) / len2
}

/**
 * Calculates the shortest distance from a point to a line segment.
 */
function pointToSegmentDistance (point: __esri.Point, segmentStart: __esri.Point, segmentEnd: __esri.Point): number {
  // Get projection parameter and clamp to segment bounds
  const t = calculateProjectionParameter(point, segmentStart, segmentEnd)
  const clamped = Math.max(0, Math.min(1, t))

  // Calculate closest point on segment
  const px = segmentStart.x + clamped * (segmentEnd.x - segmentStart.x)
  const py = segmentStart.y + clamped * (segmentEnd.y - segmentStart.y)

  return Math.hypot(point.x - px, point.y - py)
}

/**
 * Finds the polyline segment that is closest to a given point.
 * Iterates through all segments in all paths of the route geometry to find the best match.
 */
function findSegmentContainingPoint (routeGeom: __esri.Polyline, point: __esri.Point | undefined): PolylineSegment | null {
  if (!point || !routeGeom || routeGeom.type !== 'polyline') return null
  let best: { seg: PolylineSegment, dist: number } | null = null

  // Iterate through all paths in the polyline
  for (let p = 0; p < routeGeom.paths.length; p++) {
    const path = routeGeom.paths[p]

    // Iterate through all segments in the current path
    for (let i = 0; i < path.length - 1; i++) {
      const segmentStart = routeGeom.getPoint(p, i)
      const segmentEnd = routeGeom.getPoint(p, i + 1)
      if (!segmentStart || !segmentEnd) continue

      // Create segment with M-values from geometry or fallback to indices
      const seg: PolylineSegment = { start: segmentStart, end: segmentEnd, startM: (segmentStart as any).m ?? i, endM: (segmentEnd as any).m ?? (i + 1) }
      const dist = pointToSegmentDistance(point, segmentStart, segmentEnd)

      // Keep track of the closest segment
      if (!best || dist < best.dist) best = { seg, dist }
    }
  }
  return best?.seg || null
}

/**
 * Calculates the ratio (0 to 1) of where a point projects onto a segment.
 * The ratio represents how far along the segment the point's projection falls.
 */
function calculateRatio (point: __esri.Point, segment: PolylineSegment): number {
  const t = calculateProjectionParameter(point, segment.start, segment.end)
  return Math.max(0, Math.min(1, t))
}

/**
 * Interpolates the measure value at a given ratio along a segment.
 * Uses linear interpolation between the segment's start and end M-values.
 */
function interpolateMValue (segment: PolylineSegment, ratio: number): number {
  return segment.startM + (segment.endM - segment.startM) * ratio
}

/**
 * Calculates the measure for a given point on a route polyline.
 */
export function calculateMeasureFromPoint (point: __esri.Point, routeGeom: __esri.Polyline): number {
  if (!point || !routeGeom || routeGeom.type !== 'polyline') return NaN

  // Find the closest segment
  const segment = findSegmentContainingPoint(routeGeom, point)
  if (!segment) return NaN

  // Calculate ratio along the segment and interpolate M-value
  const ratio = calculateRatio(point, segment)
  return interpolateMValue(segment, ratio)
}

/**
 * Creates an OiTrackRecord from an oriented imagery feature and its nearest coordinate on the route.
 */
export function createOiTrackRecordFromFeature (
  feature: __esri.Graphic,
  nearestCoordinate: __esri.Point | undefined,
  routeGeometry: __esri.Polyline,
  id: number
): { measure: number, geometry: __esri.Point | undefined, footprint: __esri.Geometry | null, id: number, isFootprint: boolean, objectId?: number } {
  const oiTrackRecord = {
    measure: 0,
    geometry: nearestCoordinate,
    footprint: null,
    id,
    isFootprint: false,
    objectId: Number(feature.getObjectId())
  }

  // Calculate the measure value along the route
  const segment = findSegmentContainingPoint(routeGeometry, nearestCoordinate)
  if (segment && nearestCoordinate) {
    const ratio = calculateRatio(nearestCoordinate, segment)
    const mValue = interpolateMValue(segment, ratio)
    oiTrackRecord.measure = mValue
  }

  return oiTrackRecord
}

/**
 * Gets the first point from a polyline
 */
function getFirstPoint (polyline: __esri.Polyline): __esri.Point | undefined {
  if (!polyline || polyline.paths.length === 0) return undefined
  return polyline.getPoint(0, 0)
}

/**
 * Gets the last point from a polyline
 */
function getLastPoint (polyline: __esri.Polyline): __esri.Point | undefined {
  if (!polyline || polyline.paths.length === 0) return undefined
  const lastPathIndex = polyline.paths.length - 1
  const lastPointIndex = polyline.paths[lastPathIndex].length - 1
  return polyline.getPoint(lastPathIndex, lastPointIndex)
}

/**
 * Calculates the measure at a specific point on the route
 */
async function calculateMeasureAtPoint (
  point: __esri.Point | undefined,
  routeGeometry: __esri.Polyline
): Promise<number> {
  if (!point) return 0

  const nearestCoord = await getNearestCoordinate(routeGeometry, point)
  const segment = findSegmentContainingPoint(routeGeometry, nearestCoord?.coordinate)

  if (segment && nearestCoord?.coordinate) {
    const ratio = calculateRatio(nearestCoord.coordinate, segment)
    return interpolateMValue(segment, ratio)
  }

  return 0
}

/**
 * Calculates the from/to measure range for a footprint feature intersection with a route.
 */
export async function calculateFootprintMeasureRange (
  intersectedGeometry: __esri.Geometry,
  routeGeometry: __esri.Polyline
): Promise<FootprintMeasureResult> {
  if (intersectedGeometry.type !== 'polyline') {
    return { measure: 0, toMeasure: 0 }
  }

  const polyline = intersectedGeometry as __esri.Polyline

  // Get the first and last points of the intersection polyline
  const firstPoint = getFirstPoint(polyline)
  const lastPoint = getLastPoint(polyline)

  // Calculate measures at both endpoints
  const [measure, toMeasure] = await Promise.all([
    calculateMeasureAtPoint(firstPoint, routeGeometry),
    calculateMeasureAtPoint(lastPoint, routeGeometry)
  ])

  // Ensure measure <= toMeasure (swap if reversed)
  if (toMeasure < measure) {
    return { measure: toMeasure, toMeasure: measure }
  }

  return { measure, toMeasure }
}

/**
 * Merges overlapping footprint records and unions their geometries.
 */
export async function mergeOverlappingFootprints<T extends { measure: number, toMeasure?: number, geometry: __esri.Geometry, footprint: __esri.Geometry }> (
  footprintRecords: T[]
): Promise<T[]> {
  const mergedFootprints: T[] = []
  // Sort by starting measure to process in linear order
  const sorted = [...footprintRecords].sort((a, b) => a.measure - b.measure)

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i]
    if (mergedFootprints.length === 0) {

      // First footprint - add directly
      mergedFootprints.push({ ...current })
    } else {
      const last = mergedFootprints[mergedFootprints.length - 1]
      if (current.measure <= (last.toMeasure ?? last.measure)) {

        // Overlapping - extend the measure range
        last.toMeasure = Math.max(last.toMeasure ?? last.measure, current.toMeasure ?? current.measure)

        try {
          // Union the geometries to combine coverage areas
          const unionedIntersection = await union(last.geometry as __esri.GeometryUnion, current.geometry as __esri.GeometryUnion)
          if (unionedIntersection) {
            last.geometry = unionedIntersection
          }

          const unionedFootprint = await union(last.footprint as __esri.GeometryUnion, current.footprint as __esri.GeometryUnion)
          if (unionedFootprint) {
            last.footprint = unionedFootprint
          }
        } catch (e) {
          // If union fails, keep the existing geometry
        }
      } else {
        // Not overlapping - add as new separate footprint
        mergedFootprints.push({ ...current })
      }
    }
  }

  return mergedFootprints
}

/**
 * Recursively searches for an OrientedImageryLayer by ID in a layer collection.
 */
export function getOrientedImageryLayer (layerList: __esri.ReadonlyCollection<__esri.Layer>, layerId: string): __esri.OrientedImageryLayer | null {
  for (const currLayer of layerList) {
    if (currLayer.type === 'oriented-imagery' && currLayer.id === layerId) {
      return currLayer as __esri.OrientedImageryLayer
    } else if (currLayer.type === 'group') {
      // Recursively search within group layers
      const found = getOrientedImageryLayer((currLayer as __esri.GroupLayer).layers, layerId)
      if (found) return found
    }
  }
  return null
}

/**
 * Finds the footprint feature layer associated with an oriented imagery layer.
 */
export function getOrientedImageryFootprintLayer (oiLayer: __esri.OrientedImageryLayer, layerList: __esri.ReadonlyCollection<__esri.Layer>): __esri.FeatureLayer | null {
  const groupLayers = layerList.filter(l => l.type === 'group')

  // Find the group layer that contains the oriented imagery layer
  for (const groupLayer of groupLayers) {
    const foundLayer = (groupLayer as __esri.GroupLayer).layers.find(l => l.id === oiLayer.id)
    if (foundLayer) {
      // Within this group, find the polygon feature layer (footprint layer)
      return (groupLayer as __esri.GroupLayer).allLayers.find(l => (l as __esri.FeatureLayer).geometryType === 'polygon') as __esri.FeatureLayer
    }
  }
  return null
}