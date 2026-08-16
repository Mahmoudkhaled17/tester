/** @jsx JSX */
/** @jsxFrag React.Fragment */
import type { JSX } from 'react'
import { React, type IMThemeVariables, lodash } from 'jimu-core'
import { SearchOutlined } from 'jimu-icons/outlined/editor/search'
import { Alert, Button, Loading, Surface, TextInput, Typography } from 'jimu-ui'
import { FilterCustomOutlined } from 'jimu-icons/outlined/editor/filter-custom'
import { SelectZoomToOutlined } from 'jimu-icons/outlined/gis/select-zoom-to'
import {
  type defaultSharedMessages,
  geoBIMWidgetContainerStyle,
  useGeoBIM,
  ApsLogIn,
  UserTypeNotPermissible,
  GeoBimFeatureServiceError,
  widgetHeaderStyle,
} from 'widgets/shared-code/geobim'
import { useDocumentExplorer } from '../hooks/use-document-explorer'
import type defaultMessages from '../translations/default'
import {
  documentsContainer,
  noTreeMessageContainer,
  noTreeMessageStyle,
  documentsLoadingContainer,
  treeContainer,
  searchBox,
  zoomToButton,
} from '../styles'
import TreeRoot from './tree/tree-root'
import TreeNode from './tree/tree-node'

const { useMemo } = React

const SEARCH_DEBOUNCE_TIME_MS = 700

export interface DocumentExplorerProps {
  i18nMessage: (
    id:
      | keyof typeof defaultMessages
      | keyof typeof defaultSharedMessages.default,
    values?: { [key: string]: string },
  ) => string
  theme: IMThemeVariables
}

const DocumentExplorer = (props: DocumentExplorerProps): JSX.Element => {
  const { i18nMessage, theme } = props
  const { apsAuthenticated, userHasPermission, geoBIMInitialized } = useGeoBIM()
  const {
    setDocumentSearchText,
    zoomToDocumentInMap,
    setFilterView,
    selectedDocument,
    selectedDocumentHasFeature,
    root,
    rootItems,
    widgetLoading,
    geoBIMError,
    selectedRootItem,
    searchResults,
    searchActive,
    searchUpdating,
    accessError,
    isFilteredView,
    selectedFolders,
  } = useDocumentExplorer()
  const zoomSelectDisabled =
    widgetLoading ||
    searchUpdating ||
    !selectedDocument ||
    !selectedDocumentHasFeature
  const showUserPermissionDenied = !userHasPermission && geoBIMInitialized

  const getZoomToButtonTip = (): string => {
    if (selectedDocument === null) {
      return i18nMessage('zoomSelectButtonNoSelection')
    }
    if (!selectedDocumentHasFeature) {
      return i18nMessage('zoomSelectButtonInvalidSelection')
    }
    return i18nMessage('zoomSelectButtonEnabled')
  }

  // wrap setDocumentSearchText in a debounce function to prevent excessive API calls
  const onSearchTextChange = useMemo(
    () => lodash.debounce(setDocumentSearchText, SEARCH_DEBOUNCE_TIME_MS),
    [setDocumentSearchText],
  )

  // NOTE: The "search" type in ExB TextInput is buggy, so we use "text" type here.
  const renderControls = (): JSX.Element => {
    return (
      <Surface
        level="overlay"
        variant="flat"
        elevation="none"
        css={widgetHeaderStyle(theme)}
      >
        <Button
          type={isFilteredView ? 'primary' : 'default'}
          disabled={widgetLoading || root === null}
          onClick={() => {
            setFilterView(!isFilteredView)
          }}
          title={
            isFilteredView
              ? i18nMessage('showUnfilteredView')
              : i18nMessage('showFilteredView')
          }
          icon={true}
        >
          <FilterCustomOutlined />
        </Button>

        <TextInput
          css={searchBox(theme)}
          type="text"
          allowClear={true}
          disabled={widgetLoading || root === null}
          prefix={
            <SearchOutlined
              color={theme.sys.color.divider.primary}
              currentColor={true}
            />
          }
          placeholder={i18nMessage('searchDocuments')}
          onChange={(event) => {
            onSearchTextChange(event.target.value)
          }}
        />

        <div css={zoomToButton(theme)} title={getZoomToButtonTip()}>
          <Button
            type="default"
            onClick={() => {
              zoomToDocumentInMap(selectedDocument)
            }}
            disabled={zoomSelectDisabled}
            icon={true}
          >
            <SelectZoomToOutlined />
          </Button>
        </div>
      </Surface>
    )
  }

  const renderTree = (): JSX.Element => {
    if (!widgetLoading && accessError) {
      return (
        <div
          key={'no-access'}
          css={noTreeMessageContainer(theme)}
          hidden={searchActive}
        >
          <Typography variant="inherit" color="paperHint">
            {i18nMessage('noAccess')}
          </Typography>
        </div>
      )
    }
    if (!widgetLoading && root === null) {
      return (
        <div
          key={'no-hub'}
          css={noTreeMessageContainer(theme)}
          hidden={searchActive}
        >
          <Typography
            variant="inherit"
            color="paperHint"
            css={noTreeMessageStyle(theme)}
          >
            {i18nMessage('noHub')}
          </Typography>
          {geoBIMError === GeoBimFeatureServiceError.NO_FEATURE_SERVICE && (
            <div>
              <Alert
                fullWidth={true}
                type="warning"
                withIcon={true}
                text={i18nMessage('noGeoBIMFeatureServiceError')}
              />
            </div>
          )}
          {geoBIMError ===
            GeoBimFeatureServiceError.MULTIPLE_FEATURE_SERVICES && (
            <div>
              <Alert
                fullWidth={true}
                type="warning"
                withIcon={true}
                text={i18nMessage('multipleGeoBIMFeatureServicesError')}
              />
            </div>
          )}
        </div>
      )
    }
    const key = `${root?.id ?? 'no-hub'}-${isFilteredView ? 'filtered' : 'unfiltered'}`
    return (
      <>
        <div
          hidden={!widgetLoading || searchActive}
          css={documentsLoadingContainer(theme)}
        >
          <Loading />
        </div>
        <TreeRoot
          key={key}
          i18nMessage={i18nMessage}
          theme={theme}
          root={root}
          rootItems={rootItems}
          autoExpand={false}
          selectedRootItem={selectedRootItem}
          hidden={widgetLoading || searchActive}
          isFilteredView={isFilteredView}
          selectedFolders={selectedFolders}
        />
      </>
    )
  }

  const renderSearchTree = (): JSX.Element | null => {
    if (!searchActive) return null

    if (searchUpdating) {
      return (
        <div css={documentsLoadingContainer(theme)}>
          <Loading />
        </div>
      )
    }
    if (searchResults?.tree == null) {
      return (
        <div css={noTreeMessageContainer(theme)}>
          <Typography variant="inherit" color="paperHint">
            {i18nMessage('noSearchResults')}
          </Typography>
        </div>
      )
    }
    // ensure unique key for each search to force rerender on new searches
    const key = `${searchResults.tree.id}-${searchResults.searchTerm}-${isFilteredView ? 'filtered' : 'unfiltered'}`
    return (
      <div css={treeContainer(theme)}>
        <TreeNode
          key={key}
          i18nMessage={i18nMessage}
          theme={theme}
          nodeItem={searchResults.tree}
          searchTerm={searchResults.searchTerm}
          autoExpand={true}
          isFilteredView={isFilteredView}
          selectedFolders={selectedFolders}
        />
      </div>
    )
  }

  return (
    <div css={geoBIMWidgetContainerStyle(theme)}>
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
        <>
          {renderControls()}
          <div css={documentsContainer(theme)}>
            {renderTree()}
            {renderSearchTree()}
          </div>
        </>
      )}
    </div>
  )
}

export default DocumentExplorer
