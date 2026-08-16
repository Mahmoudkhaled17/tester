/** @jsx jsx */
import {
  appActions,
  getAppStore,
  React,
  SessionManager,
  urlUtils,
  type AllWidgetProps,
  type FeatureLayerDataSource,
} from "jimu-core"
import { AlertPopup, Loading, LoadingType, WidgetPlaceholder } from "jimu-ui"
import type { IMConfig } from "../config"

import { defineCustomElements } from "@arcgis-quickcapture/core/dist/loader"

import "./style.css"

import FeatureLayer from "esri/layers/FeatureLayer"
import quickcaptureIcon from "../../icon.svg"

import type { PositionData } from "@arcgis-quickcapture/core/dist/classes/feature-data"
import type { Project } from "@arcgis-quickcapture/core/dist/classes/project"
import { getItem, getItemResource } from "@esri/arcgis-rest-portal"
import type GraphicsLayer from "esri/layers/GraphicsLayer"
import { JimuMapViewComponent, type JimuMapView } from "jimu-arcgis"
import { CloseCircleFilled } from "jimu-icons/filled/editor/close-circle"
import { useCallback, useEffect, useRef, type RefObject } from "react"
import {
  useQuickCaptureCore,
  type QuickCaptureCoreEvent,
} from "./hooks/use-quickcapture-core"
import { useSketchViewModel } from "./hooks/use-sketchviewmodel"
import defaultMessages from "./translations/default"
import { featureTypeMap, generateGuid } from "./utils"

defineCustomElements(window, {
  resourcesUrl: `${urlUtils.getFixedRootPath()}widgets/quickcapture/dist/runtime/`,
})

type QuickCaptureWidgetProps = AllWidgetProps<IMConfig> & {
  autoControlWidgetId?: string
  inAuthoringMode?: boolean
}

const customTranslationKeys = ["doneUpper", "nextUpper", "codedValueUserInputsNotImplemented", "dateTimeUserInputsNotImplemented", "rangeUserInputsNotImplemented", "waitingForLocation", "captured", "search", "editProjectUserInput", "addFreeText", "history", "removeFromHistory"]

const useLatest = <T,>(value: T): RefObject<T> => {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref
}

const QuickCaptureWidget = ({
  config,
  useMapWidgetIds,
  autoControlWidgetId,
  inAuthoringMode,
  ...props
}: QuickCaptureWidgetProps) => {
  const widgetId = props.widgetId

  const formatMessage = (id: string, values?: { [key: string]: any }): string => {
    return props.intl.formatMessage({
      id,
      defaultMessage: defaultMessages[id]
    }, values)
  }

  const customTranslations = React.useMemo<{ [key: string]: string }>(
    () => {
      return customTranslationKeys.reduce<{ [key: string]: string }>(
        (translations, key) => {
          translations[key] = props.intl.formatMessage({
            id: key,
            defaultMessage: defaultMessages[key],
          })
          return translations
        },
        {},
      )
    },
    [props.intl],
  )

  const [capturedMedia] = React.useState([])
  const capturedMediaRef = useLatest(capturedMedia)

  const [coreComponent, setCoreComponent] = React.useState(null)
  const coreComponentRef = useLatest(coreComponent)

  const [currentPosition, setCurrentPosition] =
    React.useState<GeolocationPosition | null>(null)

  const [customPosition, setCustomPosition] =
    React.useState<PositionData | null>(null)

  const [currentView, setCurrentView] = React.useState("core")
  const [activeTemplate, setActiveTemplate] = React.useState(null)
  const activeTemplateRef = useLatest(activeTemplate)

  const geolocationWatchIdRef = useRef<number | null>(null)

  const [mapDataSources, setMapDataSources] = React.useState<
    FeatureLayerDataSource[]
  >([])
  const mapDataSourcesRef = useLatest(mapDataSources)

  const [insufficientPermissions, setInsufficientPermissions] =
    React.useState(false)

  const intervalIdRef = useRef<number | null>(null)

  const [invalidProject, setInvalidProject] = React.useState(false)
  const [showInvalidProjectAlert, setShowInvalidProjectAlert] =
    React.useState(false)
    const [unsupportedGeometryType, setUnsupportedGeometryType] = React.useState(false)

  const [showLocationUnavailableAlert, setShowLocationUnavailableAlert] = React.useState(false)

  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView | null>(null)
  const jimuMapViewRef = useLatest(jimuMapView)

  const [loading, setLoading] = React.useState(false)

  // TODO: Look into using IndexedDB for a more robust storage solution
  const [featureQueue, setFeatureQueue] = React.useState<
    Array<{ graphic: __esri.Graphic; state: "WAITING" | "PROCESSING" }>
  >([])
  const featureQueueRef = useLatest(featureQueue)

  const portalUrl = props.portalUrl || "https://www.arcgis.com"

  const [projectJson, setProjectJson] = React.useState<Project | null>(null)
  const projectJsonRef = useLatest(projectJson)

  const [projectItem, setProjectItem] = React.useState<any>(null)

  const [templateImages, setTemplateImages] = React.useState<{
    [key: string]: { [key: string]: string }
  }>({})
  const [templateImagesLoaded, setTemplateImagesLoaded] = React.useState(false)

  const [updateJson, setUpdateJson] = React.useState(false)

  const sketchViewModelRef = useSketchViewModel({
    jimuMapView,
    activeTemplateRef,
    coreComponentRef,
    setCustomPosition,
    setFeatureQueue,
  })

  const getToken = (): string => {
    const session = SessionManager.getInstance()?.getMainSession()
    return session?.token
  }

  const autoControlWidgetIdRef = useLatest(autoControlWidgetId)
  useEffect(() => {
    if (autoControlWidgetId !== props.widgetId) {
      sketchViewModelRef.current?.cancel()
    }
  }, [autoControlWidgetId, props.widgetId, sketchViewModelRef])

  const mapWidgetIdsRef = useLatest(useMapWidgetIds)
  const captureModeRef = useLatest(config.captureMode)

  useEffect(() => {
    if (config.loading !== undefined) {
      setLoading(config.loading)
    }
    if (!config.projectId) {
      setProjectItem(null)
      setProjectJson(null)
      setInvalidProject(false)
      getAppStore().dispatch(
        appActions.widgetStatePropChange(
          props.widgetId,
          "invalidProject",
          false,
        ),
      )
      return
    }

    if (coreComponent && config?.captureMode !== coreComponent?.captureMode) {
      const shouldHideFooter = config.captureMode === "mapSketch"
      coreComponent.hideElements = shouldHideFooter
        ? Array.from(new Set([...coreComponent.hideElements, "footer"]))
        : coreComponent.hideElements.filter((element) => element !== "footer")
      coreComponent.captureMode = config.captureMode
    }

    const updateProject = async (newProjectId) => {
      const authSession =
        SessionManager.getInstance().getSessionByUrl(portalUrl)

      const response = await getItem(newProjectId, {
        authentication: authSession,
      }).catch((err) => {
        if (err.code === "GWM_0003") {
          console.error("Insufficient permissions for project item:", err)
          setInsufficientPermissions(true)
        } else {
          console.error("Error fetching project item:", err)
        }
        return null
      })

      if (!response) {
        return
      }

      if (
        !projectItem ||
        projectItem.id !== response.id ||
        response.modified > projectItem?.modified
      ) {
        setLoading(true)

        // Need to get update project json
        const newProjectJson = await getItemResource(newProjectId, {
          readAs: "json",
          fileName: "qc.project.json",
          authentication: authSession,
        })

        // Disable any existing camera functionality when loading the project
        newProjectJson?.templateGroups.forEach((group) => {
          group.templates.forEach((template) => {
            if (template.cameraInfo.mode !== "none") {
              template.cameraInfo.mode = "none"
            }
          })
        })

        setProjectItem(response)
        setProjectJson(newProjectJson)
        setUpdateJson(true)
      }

      // Save the current time as last modified and notify settings page
      getAppStore().dispatch(
        appActions.widgetStatePropChange(
          props.widgetId,
          "lastUpdated",
          Date.now(),
        ),
      )
    }
    updateProject(config.projectId)

    // Poll for updates every 5 minutes
    if (inAuthoringMode && !intervalIdRef.current) {
      intervalIdRef.current = window.setInterval(() => {
        updateProject(config.projectId)
      }, 300000)

      return () => {
        window.clearInterval(intervalIdRef.current)
        intervalIdRef.current = null
      }
    }
  }, [
    config,
    coreComponent,
    projectItem,
    inAuthoringMode,
    portalUrl,
    props.widgetId,
  ])

  useEffect(() => {
    if (!coreComponent) return

    coreComponent.projectItem = projectItem
  }, [coreComponent, projectItem])

  useEffect(() => {
    if (!updateJson || !coreComponent) {
      return
    }

    coreComponent.projectJson = projectJsonRef.current

    const loadProjectFeatureLayers = async (): Promise<void> => {
      const nextProjectJson = projectJsonRef.current

      if (!nextProjectJson) {
        coreComponent.layers = []
        return
      }

      setLoading(true)

      const dataSourceIds = [
        ...new Set(
          nextProjectJson.dataSources
            .map((dataSource) => dataSource.dataSourceId)
            .filter((dataSourceId) => !!dataSourceId),
        ),
      ]

      const loadedLayers = await Promise.all(
        dataSourceIds.map(async (dataSourceId) => {
          const dataSource = nextProjectJson.dataSources.find(
            (ds) => ds.dataSourceId === dataSourceId,
          )

          if (!dataSource?.url) {
            return null
          }

          const featureLayer = new FeatureLayer({
            url: dataSource.url,
          })

          await featureLayer.load()
          return featureLayer
        }),
      )

      coreComponent.layers = loadedLayers.filter((layer) => layer !== null)
      setLoading(false)
    }

    void loadProjectFeatureLayers().catch((error) => {
      getAppStore().dispatch(
        appActions.widgetStatePropChange(
          props.widgetId,
          "invalidProject",
          true,
        ),
      )
      setInvalidProject(true)
      setShowInvalidProjectAlert(true)
      setLoading(false)
      console.error("Error loading project feature layers:", error)
    })

    setTemplateImagesLoaded(false)
    setUpdateJson(false)
  }, [coreComponent, projectJsonRef, props.widgetId, updateJson])

  const getImageSource = React.useCallback(
    (projectId: string, image: string): string => {
      if (!templateImages[projectId] || !templateImages[projectId][image]) {
        return ""
      }
      return templateImages[projectId][image]
    },
    [templateImages],
  )

  const sendFeature = React.useCallback(
    async (featureToAdd, featureUrl) => {
      if (!projectJsonRef.current) {
        return
      }

      // Get the dataSource info from the project JSON
      const dataSource = projectJsonRef.current.dataSources.find(
        (ds) => ds.url === featureUrl,
      )

      // Get the feature layer
      const featureLayer = new FeatureLayer({
        url: dataSource.url,
      })

      // Try to find the map layer that matches this data source
      const mapDataSourceToRefresh = mapDataSourcesRef.current.find(
        (ds) => parseInt(ds.layerId) === featureLayer.layerId,
      )

      const globalId = `{${generateGuid()}}`

      try {
        const addResult = await featureLayer.applyEdits(
          {
            addFeatures: [featureToAdd],
            addAttachments: capturedMediaRef.current.length
              ? capturedMediaRef.current.map((media) => ({
                  feature: featureToAdd,
                  attachment: {
                    globalId: globalId,
                    name: `image_${Date.now()}`,
                    data: media,
                  },
                }))
              : [],
          },
          { globalIdUsed: true },
        )

        const record = mapDataSourceToRefresh.buildRecord({
          ...featureToAdd,
          attributes: {
            objectId: addResult.addFeatureResults[0].objectId,
            ...featureToAdd.attributes,
          },
        })

        setTimeout(() => {
          mapDataSourceToRefresh.afterAddRecord(record)
          ;(sketchViewModelRef.current.layer as GraphicsLayer).graphics.remove(
            featureToAdd,
          )
        }, 1000)
      } catch (err) {
        console.error("Error adding feature or attachment:", err)
      }
    },
    [capturedMediaRef, mapDataSourcesRef, projectJsonRef, sketchViewModelRef],
  )

  const handleSketchState = useCallback(
    (template) => {
      if (!template) {
        const incompleteFeatures = featureQueueRef.current.filter(
          (feature) => feature.state === "WAITING",
        )
        if (incompleteFeatures.length > 0) {
          incompleteFeatures.forEach((feature) => {
            sketchViewModelRef.current.layer.graphics.remove(feature.graphic)
            featureQueueRef.current = featureQueueRef.current.filter(
              (f) => f.graphic !== feature.graphic,
            )
          })
        }
        sketchViewModelRef.current.cancel()
        return
      }

      const svm = sketchViewModelRef.current
      const jmv = jimuMapViewRef.current

      if (!svm || !jmv) {
        return
      }

      if (template.displayInfo.image) {
        svm.pointSymbol = {
          type: "picture-marker",
          url: `${portalUrl}/sharing/rest/content/items/${config.projectId}/resources/images/${template.displayInfo.image}?token=${getToken()}`,
          width: "24px",
          height: "24px",
        }
      } else {
        // Set point symbol back to default
        svm.pointSymbol = {
          type: "simple-marker" as const,
          color: "aqua",
          size: "12px",
        }
      }

      svm.create(featureTypeMap[template.captureInfo.type])
    },
    [
      config.projectId,
      featureQueueRef,
      jimuMapViewRef,
      portalUrl,
      sketchViewModelRef,
    ],
  )

  useEffect(() => {
    if (!coreComponent) {
      return
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => { setCurrentPosition(position) },
      (error) => {
        console.error("Geolocation watch error:", error)
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 },
    )

    geolocationWatchIdRef.current = watchId

    return () => {
      if (geolocationWatchIdRef.current !== null) {
        navigator.geolocation.clearWatch(geolocationWatchIdRef.current)
        geolocationWatchIdRef.current = null
      }
    }
  }, [coreComponent])

  useEffect(() => {
    if (coreComponentRef.current) {
      coreComponentRef.current.updateActiveTemplate(activeTemplate)
    }
  }, [activeTemplate, coreComponentRef])

  const handleCoreFeatureCaptured = useCallback(
    (event: QuickCaptureCoreEvent) => {
      const waitingFeature = featureQueueRef.current.find(
        (feature) => feature.state === "WAITING",
      )

      if (waitingFeature) {
        waitingFeature.state = "PROCESSING"
      }

      const undoDelaySeconds =
        projectJsonRef.current?.preferences?.undoThreshold ?? 0

      setTimeout(async () => {
        const lastFeature = event?.target?.capturedFeatures?.shift?.()

        if (!lastFeature) {
          setFeatureQueue([...featureQueueRef.current])
          return
        }

        let feature
        const captureMode = captureModeRef.current

        if (captureMode === "locationSensor") {
          feature = lastFeature

          if (!feature?.position?.coords) {
            setFeatureQueue([...featureQueueRef.current])
            return
          }

          feature.geometry = {
            type: "point",
            x: feature.position.coords.longitude,
            y: feature.position.coords.latitude,
            spatialReference: {
              wkid: 4326,
            },
          }
        } else {
          feature = featureQueueRef.current.shift()?.graphic
        }

        setFeatureQueue([...featureQueueRef.current])

        if (!feature) {
          return
        }

        feature.attributes = lastFeature.json
        await sendFeature(feature, lastFeature.url)
      }, undoDelaySeconds * 1000)
    },
    [captureModeRef, featureQueueRef, projectJsonRef, sendFeature],
  )

  const handleLocationUnavailable = useCallback((event: QuickCaptureCoreEvent) => {
    setShowLocationUnavailableAlert(true)
  }, [])

  const handleCoreRequestMedia = useCallback((event: QuickCaptureCoreEvent) => {
    setActiveTemplate(event.target.activeTemplate)
    setCurrentView("camera")
  }, [])

  const handleCoreSketchToggle = useCallback(
    (event: QuickCaptureCoreEvent) => {
      setActiveTemplate(event.target.activeTemplate)

      const mapWidgetId = mapWidgetIdsRef.current?.[0]

      if (
        autoControlWidgetIdRef.current === mapWidgetId &&
        !event.target.activeTemplate
      ) {
        sketchViewModelRef.current.cancel()
        const action = appActions.releaseAutoControlMapWidget(mapWidgetId)
        getAppStore().dispatch(action)
      } else {
        const action = appActions.requestAutoControlMapWidget(
          mapWidgetId,
          widgetId,
        )
        getAppStore().dispatch(action)
      }

      handleSketchState(event.target.activeTemplate)
    },
    [
      autoControlWidgetIdRef,
      handleSketchState,
      mapWidgetIdsRef,
      sketchViewModelRef,
      widgetId,
    ],
  )

  const handleCoreUnsupportedGeometryType = useCallback(
    () => {
      setUnsupportedGeometryType(true)
    },
    [],
  )

  useQuickCaptureCore({
    customTranslations,
    onFeatureCaptured: handleCoreFeatureCaptured,
    onLocationUnavailable: handleLocationUnavailable,
    onRequestMedia: handleCoreRequestMedia,
    onSketchToggle: handleCoreSketchToggle,
    onUnsupportedGeometryType: handleCoreUnsupportedGeometryType,
    setCoreComponent,
  })

  // Pass updated current position to coreComponent
  useEffect(() => {
    if (!coreComponent) return
    coreComponent.currentPosition = currentPosition
  }, [coreComponent, currentPosition])

  // Pass updated custom position to coreComponent
  useEffect(() => {
    if (!coreComponent) return
    coreComponent.customPosition = customPosition
  }, [coreComponent, customPosition])

  useEffect(() => {
    if (coreComponent) {
      coreComponent.getImageSource = getImageSource
    }
  }, [coreComponent, getImageSource])

  useEffect(() => {
    const loadImageAsBase64 = (
      projectId: string,
      image: string,
    ): Promise<string> => {
      if (templateImages[projectId] && templateImages[projectId][image]) {
        return Promise.resolve(templateImages[projectId][image])
      }
      return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.crossOrigin = "anonymous"
        img.onload = () => {
          const canvas = Object.assign(document.createElement("canvas"), {
            width: img.width,
            height: img.height,
          })
          canvas.getContext("2d").drawImage(img, 0, 0)
          resolve(canvas.toDataURL())
        }
        img.onerror = reject
        img.src = `${portalUrl}/sharing/rest/content/items/${projectId}/resources/images/${image}?token=${getToken()}`
      })
    }

    // Check we are ready to load images
    if (getToken() && projectJson && !templateImagesLoaded) {
      projectJson.templateGroups.forEach((group) => {
        group.templates.forEach((template) => {
          if (template.displayInfo.image) {
            loadImageAsBase64(
              projectJson.itemId,
              template.displayInfo.image,
            ).then((dataUrl) => {
              setTemplateImages((prevImages) => ({
                ...prevImages,
                [projectJson.itemId]: {
                  ...(prevImages[projectJson.itemId] || {}),
                  [template.displayInfo.image]: dataUrl,
                },
              }))
            })
          }
        })
      })
      setTemplateImagesLoaded(true)
    }
  }, [templateImagesLoaded, templateImages, projectJson, portalUrl])

  const activeViewChangeHandler = async (jmv: JimuMapView) => {
    if (!jmv) {
      return
    }

    await jmv.whenAllJimuLayerViewLoaded()

    const mapLayerViews = jmv.getAllJimuLayerViews()

    if (mapLayerViews.length === 0) {
      return
    }

    const layerDataSources = []

    mapLayerViews.forEach(async (jlv) => {
      const layerDataSource =
        jlv.getLayerDataSource() || (await jlv.createLayerDataSource())
      layerDataSources.push(layerDataSource)
    })

    setMapDataSources(layerDataSources)
    setJimuMapView(jmv)
  }

  return (
    <div className="widget-demo jimu-widget">
              {(loading || !props.user) && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
              background: "transparent",
              zIndex: 20,
            }}
          >
            <Loading type={LoadingType.Secondary}></Loading>
          </div>
        )}
      <div
        className="quickcapture-container"
        style={{
          display: currentView === "core" ? "block" : "none",
          height: "100%",
          visibility: loading ? "hidden" : "visible",
        }}
      >
        {insufficientPermissions && (
          <div className="loading-error">
            <CloseCircleFilled size={"l"} />
            <p style={{ textAlign: "center" }}>
              {formatMessage("projectNotAccessiblePrefix")} (
              {props.user?.username ?? "Esri_Anonymous"}){" "}
              {formatMessage("projectNotAccessibleSuffix")}
            </p>
          </div>
        )}
        {invalidProject && (
          <div className="loading-error">
            <CloseCircleFilled size={"l"} />
            <p style={{ textAlign: "center" }}>
              {formatMessage("invalidProjectDescription")}
            </p>
          </div>
        )}
        {!projectJson && !loading && props.user && (
          <WidgetPlaceholder
            className="loading-error"
            message={formatMessage("_widgetLabel")}
            icon={quickcaptureIcon}
            widgetId={props.widgetId}
          />
        )}
        {!inAuthoringMode && invalidProject && (
          <AlertPopup
            title={formatMessage("invalidQuickCaptureProject")}
            isOpen={showInvalidProjectAlert}
            severity="warning"
            description={formatMessage("invalidProjectDescription")}
            withIcon
            hideCancel
            onClickOk={() => {
              setShowInvalidProjectAlert(false)
            }}
          />
        )}
          <AlertPopup
            title={formatMessage("unsupportedGeometryType")}
            isOpen={unsupportedGeometryType}
            severity="warning"
            description={formatMessage("unsupportedGeometryTypeDescription")}
            withIcon
            hideCancel
            onClickOk={() => {
              setUnsupportedGeometryType(false)
            }}
          />
          <AlertPopup
            title={formatMessage("locationUnavailable")}
            isOpen={showLocationUnavailableAlert}
            severity="warning"
            description={formatMessage("locationUnavailableDescription")}
            withIcon
            hideCancel
            onClickOk={() => {
              setShowLocationUnavailableAlert(false)
            }}
          />
      </div>
      {useMapWidgetIds && useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}
        />
      )}
    </div>
  )
}

QuickCaptureWidget.mapExtraStateProps = (state, props) => {
  const mapWidgetId = props.useMapWidgetIds?.[0]
  const inAuthoringMode = state?.appContext?.isInBuilder

  let autoControlWidgetId = ""


  if (state.mapWidgetsInfo && mapWidgetId) {
    autoControlWidgetId =
      state.mapWidgetsInfo[mapWidgetId]?.autoControlWidgetId || ""
  }

  return {
    autoControlWidgetId,
    inAuthoringMode,
  }
}

export default QuickCaptureWidget
