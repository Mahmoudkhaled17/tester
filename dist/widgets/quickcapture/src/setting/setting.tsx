/** @jsx jsx */
import {
  appActions,
  css,
  getAppStore,
  Immutable,
  loadArcGISJSAPIModules,
  React,
  ReactRedux,
  SupportedItemTypes,
  type IMState
} from "jimu-core"

import {
  MapWidgetSelector,
  SettingRow,
  SettingSection,
  SidePopper,
} from "jimu-ui/advanced/setting-components"

import type PortalItem from "esri/portal/PortalItem"
import { CloseOutlined } from "jimu-icons/outlined/editor/close"
import { Alert, AlertPopup, Button, Label, Loading, LoadingType, Radio } from "jimu-ui"
import { ItemSelector, ItemSelectorMode } from "jimu-ui/basic/item-selector"
import { Fragment, useCallback, useEffect } from "react"

import { MapViewManager } from "jimu-arcgis"
import defaultMessages from "./translations/default"

const Setting = (props) => {
  const { onSettingChange, id, config, useMapWidgetIds } = props

  const portalUrl = props.portalUrl || "https://www.arcgis.com"

  const [apiLoaded, setApiLoaded] = React.useState(false)
  const [captureMode, setCaptureMode] = React.useState<
    "mapSketch" | "locationSensor"
  >(config?.captureMode || "mapSketch")
  const [projectPortalItem, setProjectPortalItem] = React.useState(null)
  const [showItemSelector, setShowItemSelector] = React.useState(false)
  const [showInvalidProjectAlert, setShowInvalidProjectAlert] =
    React.useState(false)

  const isMapWidgetDataSourceEmpty = (mapWidgetId: string): boolean => {
    if (!mapWidgetId) {
      return true
    }
    const mapViews = MapViewManager.getInstance().getJimuMapViewGroup(mapWidgetId)?.jimuMapViews
    if (!mapViews) {
      return true
    }
    const isEmpty = (Object.keys(mapViews).length === 1 && !Object.values(mapViews)?.[0]?.dataSourceId)
    return isEmpty
  }

  const PortalItemRef = React.useRef<typeof PortalItem>(null)
  const triggerDivRef = React.useRef<HTMLDivElement>(null)

  const [lastUpdated, setLastUpdated] = React.useState<string | null>(null)
  const loadingProjectRef = React.useRef(false)

  const lastUpdatedTime = ReactRedux.useSelector(
    (state: IMState) =>
      state?.appStateInBuilder?.widgetsState?.[id]?.lastUpdated ??
      state?.widgetsState?.[id]?.lastUpdated,
  )

  const mapWidgetId = useMapWidgetIds?.[0] ?? ''
  const isEmptyDataSource = isMapWidgetDataSourceEmpty(mapWidgetId)

  const invalidProject = ReactRedux.useSelector((state: IMState) => {
    const invalidInBuilder =
      state?.appStateInBuilder?.widgetsState?.[id]?.invalidProject
    const invalidInRuntime = state?.widgetsState?.[id]?.invalidProject

    return Boolean(invalidInBuilder || invalidInRuntime)
  })

  const formatMessage = (id: string): string => {
    return props.intl.formatMessage({
      id,
      defaultMessage: defaultMessages[id],
    })
  }

  useEffect(() => {
    if (invalidProject && config?.projectId) {
      setShowInvalidProjectAlert(true)
    }
  }, [config?.projectId, invalidProject])

  useEffect(() => {
    if (!lastUpdatedTime) {
      return
    }

    const newDate = new Date(lastUpdatedTime)
    setLastUpdated(
      newDate.toLocaleTimeString([], {
        timeStyle: "short",
        hour12: true,
      }),
    )
  }, [lastUpdatedTime])

  const loadProject = useCallback(
    async (projectId: string) => {
      if (!PortalItemRef.current || !projectId) {
        loadingProjectRef.current = false
        return
      }

      // eslint-disable-next-line new-cap
      const portalItem = await new PortalItemRef.current({
        id: projectId,
        portal: {
          url: portalUrl,
        },
      }).load()

      setProjectPortalItem({
        id: projectId,
        modified: portalItem.modified,
        title: portalItem.title,
        thumbnailUrl: portalItem.thumbnailUrl,
        access: portalItem.access,
      })

      onSettingChange({
        id: id,
        config: config.set("projectId", projectId),
      })

      loadingProjectRef.current = false
    },
    [config, id, onSettingChange, portalUrl],
  )

  useEffect(() => {
    if (apiLoaded) {
      return
    }
    loadingProjectRef.current = true
    loadArcGISJSAPIModules(["esri/portal/PortalItem"]).then((modules) => {
      const [PortalItem] = modules as [typeof __esri.PortalItem]
      PortalItemRef.current = PortalItem
      loadProject(config?.projectId)
      setApiLoaded(true)
    })
  }, [apiLoaded, config?.projectId, loadProject])

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    console.log("Selected map widget IDs:", useMapWidgetIds)
    onSettingChange({
      id: id,
      useMapWidgetIds,
    })
  }

  const captureModeUpdated = (mode: "mapSketch" | "locationSensor") => {
    setCaptureMode(mode)
  }

  useEffect(() => {
    onSettingChange({
      id: id,
      config: config.set("captureMode", captureMode),
    })
  }, [captureMode, config, id, onSettingChange])

  const clearProject = () => {
    loadingProjectRef.current = false
    setShowInvalidProjectAlert(false)
    setLastUpdated(null)
    setProjectPortalItem(null)
    getAppStore().dispatch(
      appActions.widgetStatePropChange(id, "invalidProject", false),
    )
    onSettingChange({
      id: id,
      config: config.set("projectId", null),
    })
  }

  const settingsMenuStyle = css`
    .close-icon {
      visibility: hidden;
    }
    .selected-project {
      width: 100%;
      align-items: center;
      padding: 4px;
      display: flex;
      background-color: #444;
      gap: 8px;
      user-select: none;

      &:hover,
      &:focus,
      &:active {
        background-color: #585858;

        .close-icon {
          visibility: visible;
        }
      }

      span {
        width: 100%;
      }
    }
  `

  return (
    <Fragment>
      {(!apiLoaded || loadingProjectRef.current) && (
        <Loading type={LoadingType.Secondary}></Loading>
      )}

      <div
        className="widget-setting-js-api-widget"
        css={settingsMenuStyle}
        ref={triggerDivRef}
      >
        {apiLoaded && !loadingProjectRef.current && (
          <Fragment>
            <SettingSection>
              <SettingRow flow="wrap">
                <Button
                  block
                  color="primary"
                  onClick={(e) => {
                    setShowItemSelector(!showItemSelector)
                  }}
                >
                  {formatMessage("selectProject")}
                </Button>
              </SettingRow>
              {projectPortalItem?.thumbnailUrl && (
                <Fragment>
                  <SettingRow flow="wrap">
                    <div
                      className="selected-project"
                      onClick={(e) => {
                        setShowItemSelector(!showItemSelector)
                      }}
                    >
                      <img
                        style={{ minWidth: "80px", height: "53px" }}
                        src={projectPortalItem?.thumbnailUrl}
                        alt={projectPortalItem?.title}
                      />
                      <div
                        style={{
                          color: "white",
                          paddingBlock: "4px",
                          width: "100%",
                          wordBreak: "break-word",
                        }}
                      >
                        {projectPortalItem?.title}
                      </div>
                      <Button
                        type="tertiary"
                        icon
                        className="close-icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          clearProject()
                        }}
                      >
                        <CloseOutlined />
                      </Button>
                    </div>
                  </SettingRow>
                  {invalidProject && (
                    <SettingRow>
                      <Label style={{ color: "red" }}>
                        {formatMessage("invalidProject")}
                      </Label>
                    </SettingRow>
                  )}
                  <SettingRow>
                    <Label>
                      {formatMessage("checkedForUpdates")}: {lastUpdated}
                    </Label>
                  </SettingRow>
                </Fragment>
              )}
              <SettingRow flow="wrap" label={formatMessage("selectMapWidget")}>
                <MapWidgetSelector
                  useMapWidgetIds={props.useMapWidgetIds}
                  onSelect={onMapWidgetSelected}
                />
                <Label style={{ marginTop: "8px", color: "lightgray" }}>
                  {formatMessage("checkForLayersMessage")}
                </Label>
                {mapWidgetId && isEmptyDataSource && (
                  <Alert
                    type='warning'
                    text={formatMessage('noDataSourceWarning')}
                    closable={false}
                    withIcon={false}
                    aria-label={formatMessage('noDataSourceWarning')}
                  />
                )}
              </SettingRow>
            </SettingSection>
            <SettingSection title={formatMessage("captureMode")}>
              <SettingRow flow="no-wrap">
                <Label style={{ gap: "8px" }}>
                  <Radio
                    checked={captureMode === "mapSketch"}
                    onChange={() => {
                      captureModeUpdated("mapSketch")
                    }}
                  ></Radio>
                  {formatMessage("mapSketch")}
                </Label>
              </SettingRow>
              <SettingRow flow="no-wrap">
                <Label style={{ gap: "8px" }}>
                  <Radio
                    checked={captureMode === "locationSensor"}
                    onChange={() => {
                      captureModeUpdated("locationSensor")
                    }}
                  ></Radio>
                  {formatMessage("locationSensor")}
                </Label>
              </SettingRow>
              {captureMode === "locationSensor" && (
                  <Label style={{ marginTop: "8px", color: "lightgray" }}>
                    {formatMessage("onlyPointCaptureSupported")}
                  </Label>
                )}
            </SettingSection>
          </Fragment>
        )}
      </div>
      <SidePopper
        position="right"
        toggle={() => {
          setShowItemSelector(false)
        }}
        trigger={triggerDivRef.current}
        isOpen={showItemSelector}
        title={formatMessage("selectProject")}
      >
        <ItemSelector
          itemType={SupportedItemTypes.QuickCaptureProject}
          mode={ItemSelectorMode.Simple}
          portalUrl={portalUrl}
          selectedItems={
            projectPortalItem
              ? Immutable([projectPortalItem.id])
              : Immutable([])
          }
          onSelect={async (_, item) => {
            loadingProjectRef.current = true
            setLastUpdated(null)
            setProjectPortalItem(null)
            onSettingChange({
              id: id,
              config: config.set("loading", true).set("projectId", null),
            })

            await loadProject(item.id)
          }}
          onRemove={() => {
            setLastUpdated(null)
            setProjectPortalItem(null)
            onSettingChange({
              id: id,
              config: config.set("loading", false).set("projectId", null),
            })
          }}
        ></ItemSelector>
      </SidePopper>
      <AlertPopup
        isOpen={showInvalidProjectAlert}
        withIcon
        title={formatMessage("invalidProject")}
        description={formatMessage("invalidProjectDescription")}
        hideCancel
        onClickOk={clearProject}
        severity="error"
      />
    </Fragment>
  )
}

export default Setting
