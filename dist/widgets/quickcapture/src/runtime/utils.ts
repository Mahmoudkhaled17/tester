export const featureTypeMap = {
  esriGeometryPoint: "point",
  esriGeometryPolyline: "polyline",
  esriGeometryPolygon: "polygon",
}

export function generateGuid () {
  return (
    getGuidSection() +
    getGuidSection() +
    "-" +
    getGuidSection() +
    "-" +
    getGuidSection() +
    "-" +
    getGuidSection() +
    "-" +
    getGuidSection() +
    getGuidSection() +
    getGuidSection()
  )
}
const getGuidSection = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}
