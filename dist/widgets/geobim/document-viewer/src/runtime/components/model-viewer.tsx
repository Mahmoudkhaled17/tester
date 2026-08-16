/** @jsx JSX */
/** @jsxFrag React.Fragment */
import type { JSX } from 'react'
import { React, type IMThemeVariables } from 'jimu-core'
import { Alert, Typography } from 'jimu-ui'
import {
  type SelectedBimDocument,
  type defaultSharedMessages,
  ReactModelViewer,
  hidableContainerStyle,
} from 'widgets/shared-code/geobim'
import { useModelViewerComponent } from '../hooks/use-model-viewer-component'
import type defaultMessages from '../translations/default'
import {
  modelViewerWrapper,
  modelViewerAlert,
  noDocumentMessage,
} from '../styles'
const { useRef } = React

interface ModelViewerProps {
  bimDocument: SelectedBimDocument | null
  theme: IMThemeVariables
  i18nMessage: (
    id:
      | keyof typeof defaultMessages
      | keyof typeof defaultSharedMessages.default,
  ) => string
}

const ModelViewer = (props: ModelViewerProps): JSX.Element => {
  const { bimDocument, theme, i18nMessage } = props
  const modelViewerWrapperRef = useRef<HTMLDivElement | null>(null)
  const { viewerErrorMessage, documentLoaded } = useModelViewerComponent(
    modelViewerWrapperRef,
    bimDocument,
    i18nMessage,
  )

  return (
    <div ref={modelViewerWrapperRef} css={modelViewerWrapper(theme)}>
      {viewerErrorMessage !== null && (
        <div css={modelViewerAlert(theme)}>
          <Alert
            text={viewerErrorMessage}
            aria-live="polite"
            open
            size="medium"
            type="warning"
            withIcon
          />
        </div>
      )}
      {viewerErrorMessage === null && !documentLoaded && (
        <Typography
          variant="body"
          color="paperHint"
          css={noDocumentMessage(theme)}
        >
          {i18nMessage('noDocument')}
        </Typography>
      )}
      <div css={hidableContainerStyle(theme, viewerErrorMessage !== null)}>
        <ReactModelViewer />
      </div>
    </div>
  )
}

export default ModelViewer
