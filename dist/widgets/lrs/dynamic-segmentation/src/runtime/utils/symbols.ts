import CIMSymbol from 'esri/symbols/CIMSymbol'
import { loadArcGISJSAPIModule } from 'jimu-core'
import { PX_TO_POINT_CONVERSION, SLD_ICON_WIDTH, SLD_ITEM_HEIGHT } from '../../constants'
import { trimPNG } from './diagram-utils'
import { isDefined } from 'widgets/shared-code/lrs'
import { rgba } from 'polished'

// Module-level immutable promises for symbol utilities
const symbolUtilsPromise: Promise<typeof __esri.symbolUtils> =
  loadArcGISJSAPIModule('esri/symbols/support/symbolUtils')
const jsonUtilsPromise: Promise<typeof __esri.symbolsSupportJsonUtils> =
  loadArcGISJSAPIModule('esri/symbols/support/jsonUtils')

/**
 * Load and cache symbolUtils module
 */
export async function loadSymbolUtils (): Promise<typeof __esri.symbolUtils> {
  return symbolUtilsPromise
}

/**
 * Load and cache jsonUtils module
 */
async function loadJsonUtils (): Promise<typeof __esri.symbolsSupportJsonUtils> {
  return jsonUtilsPromise
}

/**
 * Scale symbol layers for rendering in the diagram
 */
export function scaleSymbols (symbolLayers: any, isPoint: boolean): any {
  if (isPoint) {
    symbolLayers.forEach(symbol => {
      symbol.width = SLD_ICON_WIDTH
    })
  } else {
    let maxWidth = 0
    symbolLayers.forEach(symbol => {
      if (symbol.width > maxWidth) {
        maxWidth = symbol.width
      }
    })
    symbolLayers.forEach(symbol => {
      symbol.width = SLD_ITEM_HEIGHT - (maxWidth - symbol.width)
      symbol.capStyle = 'Butt'
      symbol.joinStyle = 'Round'
    })
  }
  return symbolLayers
}

/**
 * Remove any existing img elements from a node to prepare for new rendering
 */
function removePreviousImage (nodeHtml: HTMLElement): void {
  while (nodeHtml.firstChild) {
    nodeHtml.removeChild(nodeHtml.firstChild)
  }
}

/**
 * Apply a trimmed image as background to a node and remove the img element
 */
function applyTrimmedPointImage (nodeHtml: HTMLElement, trimWidth: number = SLD_ICON_WIDTH): void {
  const imageHtml = nodeHtml.getElementsByTagName('img')[0]
  if (imageHtml) {
    const imageTrimmed = trimPNG(imageHtml, trimWidth)
    imageHtml.src = imageTrimmed
    nodeHtml.style.backgroundImage = `url(${imageTrimmed})`
    nodeHtml.style.backgroundRepeat = 'no-repeat'
    nodeHtml.style.backgroundPosition = 'center'
    nodeHtml.removeChild(imageHtml)
  }
}

/**
 * Render a point symbol preview with standard sizing
 */
async function renderPointPreview (
  symbolUtilsMod: typeof __esri.symbolUtils,
  symbol: __esri.Symbol,
  nodeHtml: HTMLElement
): Promise<void> {
  const pointDiv = await symbolUtilsMod.renderPreviewHTML(symbol as any, {
    node: nodeHtml,
    size: SLD_ICON_WIDTH * PX_TO_POINT_CONVERSION
  })
  pointDiv.style.width = `${SLD_ICON_WIDTH}px`
  pointDiv.style.height = `${SLD_ICON_WIDTH}px`
}

/**
 * Prepare symbol JSON for rendering by scaling and converting to symbol object
 */
function prepareSymbolForRendering (
  jsonUtilsMod: typeof __esri.symbolsSupportJsonUtils,
  symbolJson: any,
  isMultiLayer: boolean
): __esri.Symbol {
  if (isMultiLayer) {
    const symbolLayers = symbolJson.symbol.symbolLayers
    symbolJson.symbolLayers = scaleSymbols(symbolLayers, true)
  } else {
    symbolJson.size = SLD_ICON_WIDTH
  }
  return jsonUtilsMod.fromJSON(symbolJson) as __esri.Symbol
}

/**
 * Render a point symbol to an HTML node
 */
export async function renderPointSymbolToNode (
  symbol: __esri.Symbol,
  symbolJson: any,
  nodeId: string
): Promise<void> {
  const [symbolUtilsMod, jsonUtilsMod] = await Promise.all([loadSymbolUtils(), loadJsonUtils()])

  const nodeHtml = document.getElementById(nodeId)
  if (!nodeHtml) return

  const symbolLayers = symbolJson?.symbol?.symbolLayers ?? null

  if (isDefined(symbolLayers)) {
    // Multi-layer symbol - scale and render
    symbol = prepareSymbolForRendering(jsonUtilsMod, symbolJson, true)
    removePreviousImage(nodeHtml)
    await renderPointPreview(symbolUtilsMod, symbol, nodeHtml)
    applyTrimmedPointImage(nodeHtml)
  } else if (symbol.type === 'picture-marker') {
    // Picture marker - render image directly
    const imageHtml = document.createElement('img')
    imageHtml.src = (symbol as any)?.url
    nodeHtml.style.backgroundImage = `url(${imageHtml.src})`
    nodeHtml.style.backgroundRepeat = 'no-repeat'
    nodeHtml.style.backgroundPosition = 'center'
    nodeHtml.style.backgroundSize = 'contain'
  } else if (isDefined(symbolJson)) {
    // Simple marker - change size and render
    symbol = prepareSymbolForRendering(jsonUtilsMod, symbolJson, false)
    removePreviousImage(nodeHtml)
    await renderPointPreview(symbolUtilsMod, symbol, nodeHtml)
    applyTrimmedPointImage(nodeHtml)
  }
}

/**
 * Render a line symbol to an HTML node
 */
export async function renderLineSymbolToNode (
  symbol: __esri.Symbol,
  symbolJson: any,
  nodeHtml: HTMLElement,
  onImageRendered?: () => void
): Promise<void> {
  const [symbolUtilsMod, jsonUtilsMod] = await Promise.all([loadSymbolUtils(), loadJsonUtils()])

  if (!isDefined(symbol)) return

  const symbolLayers = symbolJson?.symbol?.symbolLayers ?? null
  if (!isDefined(symbolLayers)) return

  if (symbolLayers.length > 1) {
    symbolJson.symbolLayers = scaleSymbols(symbolLayers, false)
    const scaledSymbol = jsonUtilsMod.fromJSON(symbolJson) as __esri.Symbol

    removePreviousImage(nodeHtml)

    await symbolUtilsMod.renderPreviewHTML(scaledSymbol as any, {
      node: nodeHtml,
      size: { width: nodeHtml.getBoundingClientRect().width * PX_TO_POINT_CONVERSION, height: SLD_ITEM_HEIGHT * PX_TO_POINT_CONVERSION },
      symbolConfig: { isSquareFill: true }
    })
    const imageHtml = nodeHtml.getElementsByTagName('img')[0]
    if (imageHtml && imageHtml.src !== '' && imageHtml.width !== 0) {
      const imageTrimmed = trimPNG(imageHtml)
      imageHtml.src = imageTrimmed
      nodeHtml.style.backgroundImage = `url(${imageTrimmed})`
      nodeHtml.style.backgroundPosition = 'center'
      nodeHtml.removeChild(imageHtml)
      if (onImageRendered) {
        onImageRendered()
      }
    } else if (imageHtml) {
      nodeHtml.removeChild(imageHtml)
    }
  }
}

/**
 * Get the background color for a point symbol from the graphic's renderer
 */
export async function getPointBackgroundColor (
  graphic: __esri.Graphic,
  renderer: __esri.Renderer,
  currentBackgroundColor?: __esri.Color,
  forceUpdate?: boolean,
  fallbackColor?: { r: number; g: number; b: number; a: number }
): Promise<__esri.Color> {

  if (isDefined(currentBackgroundColor) && !forceUpdate) {
    return currentBackgroundColor
  }

  const symbolUtilsMod = await loadSymbolUtils()
  const displayColor = await symbolUtilsMod.getDisplayedColor(graphic, { renderer: renderer as any })
  if (!isDefined(displayColor)) {
    return fallbackColor as __esri.Color
  }
  return displayColor
}

/**
 * Get the background color for a line symbol and apply it to the div
 */
export async function applyLineBackgroundColor (
  div: HTMLElement,
  graphic: __esri.Graphic,
  renderer: __esri.Renderer,
  currentBackgroundColor?: __esri.Color,
  forceUpdate?: boolean,
  fallbackColor?: { r: number; g: number; b: number; a: number }
): Promise<__esri.Color> {

  if (isDefined(currentBackgroundColor) && !forceUpdate) {
    div.style.background = rgba(currentBackgroundColor.r, currentBackgroundColor.g, currentBackgroundColor.b, currentBackgroundColor.a)
    return currentBackgroundColor
  }

  const symbolUtilsMod = await loadSymbolUtils()
  const displayColor = await symbolUtilsMod.getDisplayedColor(graphic, { renderer: renderer as any })
  let colorToUse: __esri.Color

  if (!isDefined(displayColor)) {
    colorToUse = fallbackColor as __esri.Color
  } else {
    colorToUse = displayColor
  }

  div.style.background = rgba(colorToUse.r, colorToUse.g, colorToUse.b, colorToUse.a)
  return colorToUse
}

/**
 * Format a background color as a CSS rgba string
 */
export function formatBackgroundColor (
  backgroundColor: __esri.Color | null,
  hasImage: boolean,
  fallbackColor: string = 'transparent'
): string {
  if (hasImage && isDefined(backgroundColor)) {
    return rgba(backgroundColor.r, backgroundColor.g, backgroundColor.b, backgroundColor.a)
  }
  if (isDefined(backgroundColor)) {
    return rgba(backgroundColor.r, backgroundColor.g, backgroundColor.b, backgroundColor.a)
  }
  return fallbackColor
}

// Red cross symbol for clicked point
export const crossSymbol = new CIMSymbol({
  data: {
    type: "CIMSymbolReference",
    symbol: {
      type: "CIMPointSymbol",
      symbolLayers: [
        {
          type: "CIMVectorMarker",
          enable: true,
          size: 10,
          frame: {
            xmin: -5,
            ymin: -5,
            xmax: 5,
            ymax: 5,
          },
          markerGraphics: [
            {
              type: "CIMMarkerGraphic",
              geometry: {
                rings: [
                  [
                    [0, 1.4142135623730951],
                    [3.585786437626905, 5],
                    [5, 3.585786437626905],
                    [1.4142135623730951, 0],
                    [5, -3.585786437626905],
                    [3.585786437626905, -5],
                    [0, -1.4142135623730951],
                    [-3.585786437626905, -5],
                    [-5, -3.585786437626905],
                    [-1.4142135623730951, 0],
                    [-5, 3.585786437626905],
                    [-3.585786437626905, 5],
                    [0, 1.4142135623730951],
                  ],
                ],
              },
              symbol: {
                type: "CIMPolygonSymbol",
                symbolLayers: [
                  {
                    type: "CIMSolidStroke",
                    enable: true,
                    width: 1,
                    color: [0, 0, 0, 100],
                  },
                  {
                    type: "CIMSolidFill",
                    enable: true,
                    color: [255, 0, 0, 255],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
})