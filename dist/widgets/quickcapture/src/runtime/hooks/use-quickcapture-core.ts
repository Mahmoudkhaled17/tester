import type { ArcgisQuickCapture as HTMLArcgisQuickcaptureElement } from "@arcgis-quickcapture/core/dist/components/arcgis-quickcapture/customElement.d.ts"
import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

export type QuickCaptureCoreEvent = CustomEvent & {
  target: HTMLArcgisQuickcaptureElement
  currentTarget: HTMLArcgisQuickcaptureElement
}

interface UseQuickCaptureCoreProps {
  customTranslations?: { [key: string]: string }
  onFeatureCaptured: (event: QuickCaptureCoreEvent) => void
  onLocationUnavailable: (event: QuickCaptureCoreEvent) => void
  onRequestMedia: (event: QuickCaptureCoreEvent) => void
  onSketchToggle: (event: QuickCaptureCoreEvent) => void
  onUnsupportedGeometryType: (event: QuickCaptureCoreEvent) => void
  setCoreComponent: Dispatch<
    SetStateAction<HTMLArcgisQuickcaptureElement | null>
  >
}

export function useQuickCaptureCore ({
  customTranslations,
  onFeatureCaptured,
  onLocationUnavailable,
  onRequestMedia,
  onSketchToggle,
  onUnsupportedGeometryType,
  setCoreComponent,
}: UseQuickCaptureCoreProps): void {
  const [quickCaptureEl, setQuickCaptureEl] =
    useState<HTMLArcgisQuickcaptureElement | null>(null)

  useEffect(() => {
    let isCancelled = false

    const quickCaptureEl: HTMLArcgisQuickcaptureElement =
      document.createElement("arcgis-quickcapture")

    const documentElement = quickCaptureEl.ownerDocument?.documentElement
    const hasLangOrDir = Boolean(
      documentElement?.hasAttribute("lang") ||
      documentElement?.hasAttribute("dir"),
    )

    // Don't overwrite lang or dir if already set in the document
    if (!hasLangOrDir) {
      quickCaptureEl.locale = navigator.language || "en"
    }

    setQuickCaptureEl(quickCaptureEl)

    quickCaptureEl.addEventListener("arcgisFeatureCaptured", onFeatureCaptured)
    quickCaptureEl.addEventListener("arcgisLocationUnavailable", onLocationUnavailable)
    quickCaptureEl.addEventListener("arcgisRequestMedia", onRequestMedia)
    quickCaptureEl.addEventListener("arcgisSketchToggle", onSketchToggle)
    quickCaptureEl.addEventListener("arcgisUnsupportedGeometryType", onUnsupportedGeometryType)

    const container = document.getElementsByClassName(
      "quickcapture-container",
    )[0] as HTMLElement

    if (container) {
      container.appendChild(quickCaptureEl)
    }

    void quickCaptureEl.componentOnReady().then(() => {
      if (isCancelled) {
        return
      }

      setCoreComponent(quickCaptureEl)
    })

    return () => {
      isCancelled = true

      quickCaptureEl.removeEventListener(
        "arcgisFeatureCaptured",
        onFeatureCaptured,
      )
      quickCaptureEl.removeEventListener("arcgisLocationUnavailable", onLocationUnavailable)
      quickCaptureEl.removeEventListener("arcgisRequestMedia", onRequestMedia)
      quickCaptureEl.removeEventListener("arcgisSketchToggle", onSketchToggle)
      quickCaptureEl.removeEventListener("arcgisUnsupportedGeometryType", onUnsupportedGeometryType)
      quickCaptureEl.remove()
      setQuickCaptureEl(null)
      setCoreComponent(null)
    }
  }, [onFeatureCaptured, onLocationUnavailable, onRequestMedia, onSketchToggle, onUnsupportedGeometryType, setCoreComponent])

  useEffect(() => {
    if (!quickCaptureEl || !customTranslations) {
      return
    }

    quickCaptureEl.messageOverrides = customTranslations
  }, [quickCaptureEl, customTranslations])
}
