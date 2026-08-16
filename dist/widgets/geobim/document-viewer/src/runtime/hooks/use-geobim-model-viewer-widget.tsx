import { React } from 'jimu-core'
import {
  type defaultSharedMessages,
  useGeoBIM,
  type IModelViewerOptions,
  type SelectedBimDocument,
  type APSTokenAuth,
} from 'widgets/shared-code/geobim'
import { useDocumentSelection } from './use-document-selection'
import { useSelectedFeatureLinkedDocument } from './use-selected-feature-linked-document'
import type defaultMessages from '../translations/default'
const { useMemo, useState, useEffect } = React

interface GeoBimModelViewerWidgetContextType {
  modelViewerTitle: string
  modelViewerOptions: IModelViewerOptions | null
  modelViewerLoadError: string | null
  bimDocument: SelectedBimDocument | null
  documentLoading: boolean
  widgetLoading: boolean
  multipleFeatureSelectionWarning: boolean
  cancelMultipleFeatureSelectionWarning: () => void
}

const useGeoBimModelViewerWidget = (
  widgetId: string,
  modelViewerDisabled: boolean,
  getApsAuthToken: () => Promise<APSTokenAuth | null>,
  i18nMessage: (
    id:
      | keyof typeof defaultMessages
      | keyof typeof defaultSharedMessages.default,
    values?: { [key: string]: string },
  ) => string,
): GeoBimModelViewerWidgetContextType => {
  const {
    geoBIMLoading,
    geoBIMInitialized,
    mapWidgetLoaded,
    geoBIMConfigLoaded,
    geoBIMConfig,
  } = useGeoBIM()
  const {
    bimDocument,
    documentLoading,
    multipleFeatureSelectionWarning,
    cancelMultipleFeatureSelectionWarning,
  } = useDocumentSelection(widgetId, modelViewerDisabled)
  useSelectedFeatureLinkedDocument(widgetId)
  const [modelViewerOptions, setModelViewerOptions] =
    useState<IModelViewerOptions | null>(null)
  const [modelViewerLoadError, setModelViewerLoadError] = useState<
    string | null
  >(null)

  const modelViewerTitle = useMemo((): string => {
    if (
      bimDocument?.document == null ||
      multipleFeatureSelectionWarning ||
      modelViewerLoadError !== null
    ) {
      return i18nMessage('widgetTitle')
    }

    return bimDocument.document.displayName || i18nMessage('noDocumentTitle')
  }, [
    bimDocument,
    i18nMessage,
    multipleFeatureSelectionWarning,
    modelViewerLoadError,
  ])

  useEffect(
    function initModelViewerOptions () {
      if (geoBIMConfigLoaded) {
        if (
          geoBIMConfig?.apsModelViewerVersion == null ||
          geoBIMConfig.apsModelViewerVersion === ''
        ) {
          setModelViewerOptions(null)
          setModelViewerLoadError(i18nMessage('noModelViewerVersionMessage'))
          return
        }
        const options: IModelViewerOptions = {
          getAccessToken: async () => {
            const token = await getApsAuthToken() // getApsAuthToken is already wrapped in a useCallback()
            return {
              accessToken: token?.accessToken ?? null,
              expiresInSeconds: token?.expiresInSeconds ?? null,
            }
          },
          version: geoBIMConfig.apsModelViewerVersion,
        }
        setModelViewerLoadError(null)
        setModelViewerOptions(options)
      }
    },
    [geoBIMConfig, geoBIMConfigLoaded, getApsAuthToken, i18nMessage],
  )

  const widgetLoading = useMemo((): boolean => {
    // don't show widget loading if map is not yet available
    if (!mapWidgetLoaded) return false

    // loading state reloads model viewer documents, so prevent it during disabled state!
    if (modelViewerDisabled) return false

    return documentLoading || geoBIMLoading || !geoBIMInitialized
  }, [
    documentLoading,
    geoBIMInitialized,
    geoBIMLoading,
    mapWidgetLoaded,
    modelViewerDisabled,
  ])

  // memoize hook context and wrap all callback functions in useCallback()
  const modelViewerReturn: GeoBimModelViewerWidgetContextType = useMemo(
    () => ({
      modelViewerTitle,
      modelViewerOptions,
      modelViewerLoadError,
      bimDocument,
      documentLoading,
      widgetLoading,
      multipleFeatureSelectionWarning,
      cancelMultipleFeatureSelectionWarning,
    }),
    [
      modelViewerTitle,
      modelViewerOptions,
      bimDocument,
      documentLoading,
      widgetLoading,
      multipleFeatureSelectionWarning,
      cancelMultipleFeatureSelectionWarning,
      modelViewerLoadError,
    ],
  )

  return modelViewerReturn
}

export { useGeoBimModelViewerWidget, type GeoBimModelViewerWidgetContextType }
