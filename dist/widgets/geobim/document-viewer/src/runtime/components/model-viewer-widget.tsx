/** @jsx JSX */
/** @jsxFrag React.Fragment */
import type { JSX } from 'react'
import {
  React,
  ReactRedux,
  type IMState,
  type IMThemeVariables,
} from 'jimu-core'
import { Loading, Button, Alert, Typography, Surface } from 'jimu-ui'
import type { Dispatch } from 'redux'
import { LockOutlined } from 'jimu-icons/outlined/editor/lock'
import { UnlockOutlined } from 'jimu-icons/outlined/editor/unlock'
import {
  useApsAuth,
  ModelViewerProvider,
  type defaultSharedMessages,
  modelViewerDisabledSelector,
  type ActionTypes,
  setModelViewerDisabled,
  geoBIMWidgetContainerStyle,
  loadingContainerStyle,
  useGeoBIM,
  widgetHeaderStyle,
  hidableContainerStyle,
  ApsLogIn,
  UserTypeNotPermissible,
} from 'widgets/shared-code/geobim'
import { useGeoBimModelViewerWidget } from '../hooks/use-geobim-model-viewer-widget'
import ModelViewer from './model-viewer'
import type defaultMessages from '../translations/default'
import {
  modelViewerBody,
  modelViewerAlert,
  multipleSelectionAlert,
  noDocumentMessage,
} from '../styles'
const { useSelector, useDispatch } = ReactRedux
const { useState } = React

export interface ModelViewerImplProps {
  theme: IMThemeVariables
  widgetId: string
  i18nMessage: (
    id:
      | keyof typeof defaultMessages
      | keyof typeof defaultSharedMessages.default,
    values?: { [key: string]: string },
  ) => string
}

const ModelViewerWidget = (props: ModelViewerImplProps): JSX.Element => {
  const { theme, widgetId, i18nMessage } = props
  const modelViewerDisabled = useSelector((state: IMState) =>
    modelViewerDisabledSelector(widgetId, state),
  )
  const { apsAuthenticated, userHasPermission, geoBIMInitialized } = useGeoBIM()
  const { getApsAuthToken } = useApsAuth()
  const dispatch = useDispatch<Dispatch<ActionTypes>>()
  const {
    modelViewerTitle,
    modelViewerOptions,
    modelViewerLoadError,
    bimDocument,
    documentLoading,
    widgetLoading,
    multipleFeatureSelectionWarning,
    cancelMultipleFeatureSelectionWarning,
  } = useGeoBimModelViewerWidget(
    widgetId,
    modelViewerDisabled,
    getApsAuthToken,
    i18nMessage,
  )
  /* track if a BIM document has ever been displayed in widget to
     prevent reloading of model viewer */
  const [hasBimDocumentDisplayed, setHasBimDocumentDisplayed] =
    useState<boolean>(false)
  if (!hasBimDocumentDisplayed && bimDocument) {
    setHasBimDocumentDisplayed(true)
  }
  const lockButtonDisabled =
    documentLoading ||
    !apsAuthenticated ||
    bimDocument == null ||
    multipleFeatureSelectionWarning ||
    modelViewerLoadError !== null
  const showMultipleFeatureSelectionWarning =
    multipleFeatureSelectionWarning && !widgetLoading
  const hideModelViewer =
    (widgetLoading && !hasBimDocumentDisplayed) ||
    showMultipleFeatureSelectionWarning ||
    modelViewerLoadError !== null
  const showUserPermissionDenied = !userHasPermission && geoBIMInitialized

  const getDocumentLockTooltip = (): string => {
    if (lockButtonDisabled) return i18nMessage('documentLockDisabledMessage')

    if (modelViewerDisabled) {
      return i18nMessage('documentLockedMessage')
    } else {
      return i18nMessage('documentUnlockedMessage')
    }
  }

  const toggleDocumentLock = (): void => {
    setModelViewerDisabled(widgetId, !modelViewerDisabled, dispatch)
  }

  const renderModelViewer = (): JSX.Element => {
    return (
      <div css={modelViewerBody(theme)}>
        {widgetLoading && modelViewerLoadError === null && (
          <div css={loadingContainerStyle(theme)}>
            <Loading />
          </div>
        )}
        {showMultipleFeatureSelectionWarning && (
          <>
            <Typography
              variant="body"
              color="paperHint"
              css={noDocumentMessage(theme)}
            >
              {i18nMessage('noDocument')}
            </Typography>
            <div css={multipleSelectionAlert(theme)}>
              <Alert
                text={i18nMessage('geobim_multipleFeatures')}
                aria-live="polite"
                closable={true}
                open={true}
                onClose={() => {
                  cancelMultipleFeatureSelectionWarning()
                }}
                size="medium"
                type="warning"
                withIcon
              />
            </div>
          </>
        )}
        <div css={hidableContainerStyle(theme, hideModelViewer)}>
          {modelViewerOptions !== null && (
            <ModelViewerProvider options={modelViewerOptions}>
              <ModelViewer
                bimDocument={bimDocument}
                theme={theme}
                i18nMessage={i18nMessage}
              />
            </ModelViewerProvider>
          )}
        </div>
        {modelViewerLoadError !== null && (
          <div css={modelViewerAlert(theme)}>
            <Alert
              text={modelViewerLoadError}
              aria-live="polite"
              closable={false}
              open={true}
              size="medium"
              type="warning"
              withIcon
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <div css={geoBIMWidgetContainerStyle(theme)}>
      <Surface
        level="overlay"
        variant="flat"
        elevation="none"
        css={widgetHeaderStyle(theme)}
      >
        <Typography variant="title1" color="overlayText">
          {modelViewerTitle}
        </Typography>
        <div title={getDocumentLockTooltip()}>
          <Button
            data-test="document-lock-button"
            type={modelViewerDisabled ? 'primary' : 'default'}
            onClick={() => {
              toggleDocumentLock()
            }}
            disabled={lockButtonDisabled && !modelViewerDisabled}
            icon={true}
          >
            {modelViewerDisabled ? <LockOutlined /> : <UnlockOutlined />}
          </Button>
        </div>
      </Surface>
      {showUserPermissionDenied && (
        <UserTypeNotPermissible
          userTypeNotPermissibleLinkText={i18nMessage('geobim_userTypeLink')}
          userTypeNotPermissibleText={i18nMessage('geobim_userTypeNote', {
            widget_name: i18nMessage('widgetTitle'),
          })}
          theme={theme}
        />
      )}
      {!apsAuthenticated && !showUserPermissionDenied && (
        <ApsLogIn
          logInLinkText={i18nMessage('geobim_logInLink')}
          loginMessageFirstLine={i18nMessage('geobim_logInText')}
          loginMessageSecondLine={i18nMessage('geobim_logInTip')}
          theme={theme}
        />
      )}
      {apsAuthenticated && !showUserPermissionDenied && (
        <>{renderModelViewer()}</>
      )}
    </div>
  )
}

export default ModelViewerWidget
