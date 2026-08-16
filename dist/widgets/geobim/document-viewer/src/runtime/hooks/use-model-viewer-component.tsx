import { React } from 'jimu-core'
import {
  ModelViewerErrorCodes,
  type SelectedBimDocument,
  useGeoBIM,
  useModelViewer,
  type defaultSharedMessages,
} from 'widgets/shared-code/geobim'
import type defaultMessages from '../translations/default'
const { useMemo, useState, useEffect } = React

interface ModelViewerDocumentsContextType {
  viewerErrorMessage: string | null
  documentLoaded: boolean
}

const useModelViewerComponent = (
  modelViewerWrapperRef: React.RefObject<HTMLDivElement | null>,
  bimDocument: SelectedBimDocument | null,
  i18nMessage: (
    id:
      | keyof typeof defaultMessages
      | keyof typeof defaultSharedMessages.default,
    values?: { [key: string]: string },
  ) => string,
): ModelViewerDocumentsContextType => {
  const { showModelViewer, viewDocument, viewerError } = useModelViewer()
  const { geoBIMLoading, geoBIMInitialized } = useGeoBIM()
  const [modelViewerWidth, setModelViewerWidth] = useState<number>(0)
  const [modelViewerHeight, setModelViewerHeight] = useState<number>(0)
  const currentModelViewerWrapperRef = modelViewerWrapperRef.current
  const documentUrl = bimDocument?.document?.url
  const documentSelectedIds = bimDocument?.selectedIds
  const issue = bimDocument?.document?.issue
  const documentLoaded = documentUrl != null
  const viewerComponentReady = !geoBIMLoading && geoBIMInitialized

  // (wrapped in useMemo to minimize state changes)
  const viewerVisible = useMemo(() => {
    return modelViewerWidth > 0 && modelViewerHeight > 0
  }, [modelViewerWidth, modelViewerHeight])

  useEffect(
    function observeModelViewerResize () {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { width, height } = entry.contentRect
          setModelViewerWidth(width)
          setModelViewerHeight(height)
        })
      })
      /* NOTE: Make sure currentModelViewerWrapperRef is the only dependency
               of this Effect to avoid unnecessary observe/unobserve calls! */
      if (currentModelViewerWrapperRef !== null) {
        resizeObserver.observe(currentModelViewerWrapperRef)
      }
      return () => {
        if (currentModelViewerWrapperRef !== null) {
          resizeObserver.unobserve(currentModelViewerWrapperRef)
        }
      }
    },
    [currentModelViewerWrapperRef],
  )

  useEffect(
    function setDocument () {
      if (viewerComponentReady && viewerVisible) {
        if (documentLoaded) {
          showModelViewer(true) // (ensure viewer is visible)
          viewDocument(
            documentUrl,
            undefined,
            documentSelectedIds ?? undefined,
            issue !== undefined ? [issue] : undefined,
          )
        } else {
          showModelViewer(false)
        }
      }
    },
    [
      documentSelectedIds,
      documentUrl,
      issue,
      showModelViewer,
      viewDocument,
      viewerComponentReady,
      viewerVisible,
      documentLoaded,
    ],
  )

  const viewerErrorMessage = useMemo(() => {
    if (viewerError === null) return null

    if (viewerError.errorCode === ModelViewerErrorCodes.NOT_VIEWABLE) {
      return i18nMessage('documentNotViewable')
    }
    if (viewerError.internalErrorCode != null) {
      // TODO: Translate error message?
      return `Code ${viewerError.internalErrorCode as string}: ${viewerError.message}`
    } else {
      return viewerError.message
    }
  }, [viewerError, i18nMessage])

  // memoize hook context and wrap all callback functions in useCallback()
  const modelViewerReturn: ModelViewerDocumentsContextType = useMemo(
    () => ({
      viewerErrorMessage,
      documentLoaded,
    }),
    [viewerErrorMessage, documentLoaded],
  )
  return modelViewerReturn
}

export { useModelViewerComponent }
