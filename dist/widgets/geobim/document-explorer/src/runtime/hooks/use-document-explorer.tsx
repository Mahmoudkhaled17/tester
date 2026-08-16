import { React } from 'jimu-core'
import {
  GeoBimFeatureServiceError,
  type IRepositoryItem,
  type NodeRepositoryItem,
  useDocuments,
  useGeoBIM,
  getFeatureAttribute,
  type IDocument,
  useJobs,
  type SelectedFolders,
} from 'widgets/shared-code/geobim'
import {
  DocumentsContext,
  type DocumentsContextType,
} from '../providers/documents-provider'
const { useContext, useState, useCallback, useMemo, useEffect } = React

const PROJECT_ID_ATTRIBUTE = 'projectId'

interface SearchResults {
  tree: NodeRepositoryItem | null
  // NOTE: searchTerm is used to create unique keys for repeated nodes in the search tree.
  //       If search is later updated with more advanced options, ensure searchTerm gets
  //       updated accordingly!
  searchTerm: string
}

interface UseDocumentsExplorerContextType {
  setDocumentSearchText: (text: string) => void
  setFilterView: (isFiltered: boolean) => void
  zoomToDocumentInMap: (document: IDocument | null) => void
  selectedDocument: IDocument | null
  selectedDocumentHasFeature: boolean
  root: NodeRepositoryItem | null
  rootItems: IRepositoryItem[] | null
  widgetLoading: boolean
  geoBIMError: GeoBimFeatureServiceError
  selectedRootItem: NodeRepositoryItem | null
  searchResults: SearchResults | null
  searchActive: boolean
  searchUpdating: boolean
  accessError: boolean
  isFilteredView: boolean
  selectedFolders: SelectedFolders[] | null
}

const useDocumentExplorer = (): UseDocumentsExplorerContextType => {
  const documentsContext = useContext<DocumentsContextType | undefined>(
    DocumentsContext,
  )
  if (documentsContext === undefined) {
    throw new Error('Must call useDocumentExplorer inside of DocumentsProvider')
  }
  const {
    selectedDocument,
    selectedDocumentHasFeature,
    zoomToDocumentInMap,
    clearDocumentSelection,
  } = documentsContext
  const { selectedFeatures, geoBIMError, currentGeoBIMView, mapWidgetLoaded } =
    useGeoBIM()
  const { searchRepository, getRoot, useDocumentsReady } =
    useDocuments()
  const { getSelectedFolders } = useJobs()
  // NOTE: Only local state for the widget is kept in hooks. All shared state is in the Store.
  const [root, setRoot] = useState<NodeRepositoryItem | null>(null)
  const [rootItems, setRootItems] = useState<IRepositoryItem[] | null>(null)
  const [rootUpdating, setRootUpdating] = useState<boolean>(true)
  const [searchText, setSearchText] = useState<string>('')
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null)
  const [searchActive, setSearchActive] = useState<boolean>(false)
  const [searchUpdating, setSearchUpdating] = useState<boolean>(false)
  const [accessError, setAccessError] = useState<boolean>(false)
  const [selectedFolders, setSelectedFolders] = useState<
    SelectedFolders[] | null
  >(null)
  const [selectedFoldersUpdating, setSelectedFoldersUpdating] =
    useState<boolean>(false)
  const [isFilteredView, setIsFilteredView] = useState<boolean>(false)

  const selectedRootItem = useMemo((): NodeRepositoryItem | null => {
    if (selectedFeatures.length !== 1 || rootItems === null) {
      // only support single selection for now
      return null
    }
    const selectedFeature = selectedFeatures[0]
    // TODO: Replace with an explicit check for a BIM Project feature (see Issue #5269)
    const rootItemId = getFeatureAttribute(
      selectedFeature.feature,
      PROJECT_ID_ATTRIBUTE,
    ) as string
    for (const item of rootItems) {
      if (item.id === rootItemId) {
        // (root items will never be documents)
        return item as NodeRepositoryItem
      }
    }
    return null
  }, [rootItems, selectedFeatures])

  useEffect(() => {
    let stale = false

    async function updateSelectedFolders () {
      if (!useDocumentsReady) {
        setSelectedFolders(null)
        return
      }

      if (isFilteredView && selectedFolders === null) {
        setSelectedFoldersUpdating(true)
        const folders = await getSelectedFolders()
        if (!stale) {
          setSelectedFolders(folders)
          setSelectedFoldersUpdating(false)
        }
      }
    }
    void updateSelectedFolders()

    return () => {
      stale = true
    }
  }, [
    useDocumentsReady,
    isFilteredView,
    selectedFolders,
    getSelectedFolders,
    setSelectedFolders,
    setSelectedFoldersUpdating,
  ])

  useEffect(
    function updateRoot () {
      let unloading = false

      const getTreeRootItems = async (): Promise<void> => {
        if (
          (!useDocumentsReady || currentGeoBIMView == null) &&
          geoBIMError === GeoBimFeatureServiceError.NONE
        ) {
          // root still needs to update
          setRoot(null)
          setRootItems(null)
          setRootUpdating(true)
          return
        }
        if (
          geoBIMError === GeoBimFeatureServiceError.MULTIPLE_FEATURE_SERVICES ||
          geoBIMError === GeoBimFeatureServiceError.NO_FEATURE_SERVICE
        ) {
          // nothing to show user when feature service isn't set up properly
          setRoot(null)
          setRootItems(null)
          setRootUpdating(false)
          return
        }
        setRootUpdating(true)

        const currentRoot = await getRoot(
          isFilteredView ? (selectedFolders ?? undefined) : undefined,
        )
        const currentAccessError = currentRoot === null
        const currentRootItems = currentRoot?.children ?? null

        if (!unloading) {
          setRoot(currentRoot)
          setRootItems(currentRootItems)
          if (!selectedFoldersUpdating) {
            setRootUpdating(false)
          }
          setAccessError(currentAccessError)
        }
      }
      void getTreeRootItems()

      return (): void => {
        unloading = true
      }
    },
    [
      currentGeoBIMView,
      geoBIMError,
      getRoot,
      useDocumentsReady,
      isFilteredView,
      selectedFolders,
      selectedFoldersUpdating,
    ],
  )

  useEffect(
    function searchDocuments () {
      let unloading = false

      const getSearchResults = async (): Promise<void> => {
        if (root === null || searchText === '' || !useDocumentsReady) {
          setSearchActive(false)
          setSearchResults(null)
          setSearchUpdating(false)
          if (root === null) {
            // clear selection if there are no documents
            clearDocumentSelection()
          }
          return
        }
        setSearchActive(true)
        setSearchUpdating(true)
        const rootItem = selectedRootItem ?? root
        const results = await searchRepository(
          rootItem,
          searchText,
          isFilteredView,
        )
        if (!unloading) {
          clearDocumentSelection() // clear selections from before search
          setSearchResults({ tree: results, searchTerm: searchText })
          setSearchUpdating(false)
        }
      }
      void getSearchResults()

      return (): void => {
        unloading = true
      }
    },
    [
      clearDocumentSelection,
      root,
      searchRepository,
      searchText,
      selectedRootItem,
      useDocumentsReady,
      isFilteredView,
    ],
  )

  const setDocumentSearchText = useCallback(
    (text: string | null | undefined): void => {
      if (text == null) {
        setSearchText('')
      } else {
        setSearchText(text)
      }
    },
    [],
  )

  const setFilterView = useCallback((isFiltered: boolean): void => {
    setIsFilteredView(isFiltered)
  }, [])

  const widgetLoading = useMemo((): boolean => {
    // don't show widget as loading if map is not yet available
    if (!mapWidgetLoaded) return false

    return rootUpdating
  }, [mapWidgetLoaded, rootUpdating])

  // memoize context and wrap all callback functions in useCallback()
  const useDocumentExplorerReturn: UseDocumentsExplorerContextType =
    useMemo(() => {
      return {
        setDocumentSearchText,
        setFilterView,
        zoomToDocumentInMap,
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
      }
    }, [
      setDocumentSearchText,
      setFilterView,
      zoomToDocumentInMap,
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
    ])
  return useDocumentExplorerReturn
}

export { useDocumentExplorer, type UseDocumentsExplorerContextType }
