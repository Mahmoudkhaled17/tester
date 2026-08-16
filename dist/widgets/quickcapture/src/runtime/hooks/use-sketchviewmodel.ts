import type Point from "esri/geometry/Point"
import GraphicsLayer from "esri/layers/GraphicsLayer"
import SketchViewModel from "esri/widgets/Sketch/SketchViewModel"
import { useEffect, useMemo, useRef } from "react"

const layerId = "quickcapture-graphics-layer"

/**
 * Hook to manage SketchViewModel lifecycle and event handling.
 */
export function useSketchViewModel ({
  jimuMapView,
  activeTemplateRef,
  coreComponentRef,
  setCustomPosition,
  setFeatureQueue,
}) {
  // Initialize SketchViewModel ref
  const sketchViewModelRef = useRef(null)
  const customPositionMarkerRef = useRef(null)

  const defaultSymbol = useMemo(() => {
    return {
      type: "simple-marker" as const,
      color: "aqua",
      size: "12px",
    }
  }, [])

  useEffect(() => {
    if (!jimuMapView) return

    // Create a graphics layer
    let graphicsLayer = jimuMapView.view.map.findLayerById(layerId)
    if (!graphicsLayer) {
      graphicsLayer = new GraphicsLayer({
        id: layerId,
        title: "QuickCapture Graphics Layer",
      })
      jimuMapView.view.map.add(graphicsLayer)
    }

    if (sketchViewModelRef.current === null) {
      // Create new SketchViewModel
      sketchViewModelRef.current = new SketchViewModel({
        view: jimuMapView.view,
        layer: graphicsLayer,
        pointSymbol: defaultSymbol,
        creationMode: "continuous",
      })
    }

    const svm = sketchViewModelRef.current

    svm.on("update", (event) => {
      // If state is "active", custom position is just moving around
      // Need to make sure it is up-to-date when feature is created
      if (event.state === "active") {
        setCustomPosition({
          coords: {
            latitude: (event.graphics[0].geometry as Point).latitude,
            longitude: (event.graphics[0].geometry as Point).longitude,
          },
          timestamp: new Date().getTime(),
        })
      }
    })

    // New feature placed event
    svm.on("create", (event) => {
      if (event.state === "complete") {
        const clickedPosition = {
          coords: {
            latitude: (event.graphic.geometry as Point).latitude,
            longitude: (event.graphic.geometry as Point).longitude,
            accuracy: 0,
            altitudeAccuracy: 0,
          },
          timestamp: Date.now(),
        }

        if (activeTemplateRef.current) {
          if (
            coreComponentRef.current.activeButtonUserInputs.length > 0
          ) {
            // There are button user inputs, clear the cursor and wait for data
            setFeatureQueue((prev) => [
              ...prev,
              { graphic: event.graphic, state: "WAITING" },
            ])
            svm.cancel()
          } else {
            setFeatureQueue((prev) => [
              ...prev,
              { graphic: event.graphic, state: "PROCESSING" },
            ])
          }

          // Pass the position back to QuickCapture-Core
          coreComponentRef.current.generateFeatureFromPosition(
            clickedPosition,
            () => {
              console.log("Feature generation callback")
            },
          )
        } else {
          if (customPositionMarkerRef.current) {
            graphicsLayer.remove(customPositionMarkerRef.current)
          }

          customPositionMarkerRef.current = event.graphic
          // Set custom position
          setCustomPosition({
            coords: {
              latitude: clickedPosition.coords.latitude,
              longitude: clickedPosition.coords.longitude,
            },
            timestamp: Date.now(),
          })
        }
      }
      if (event.state === "cancel") {
        coreComponentRef.current.clearActiveTemplate()
      }
    })

    // Set the ref to the new SketchViewModel
    sketchViewModelRef.current = svm

    // Clean up on unmount
    return () => {
      sketchViewModelRef.current = null
    }
  }, [
    defaultSymbol,
    jimuMapView,
    activeTemplateRef,
    coreComponentRef,
    setCustomPosition,
    setFeatureQueue,
  ])

  return sketchViewModelRef
}
