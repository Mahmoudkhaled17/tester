import { React } from 'jimu-core'
import {
  type DocumentRepositoryItem,
  isDocumentRepositoryItem,
  isNodeRepositoryItem,
  type NodeRepositoryItem,
  repositoryItemHasChildren,
  useDocuments,
  type SelectedFolders,
} from 'widgets/shared-code/geobim'
const { useMemo, useState, useCallback, useEffect } = React

interface UseTreeNodeContextType {
  onToggleExpanded: () => void
  nodeChildren: NodeRepositoryItem[]
  documentChildren: DocumentRepositoryItem[]
  loading: boolean
  accessError: boolean
  expanded: boolean
}

function useTreeNode (
  nodeItem: NodeRepositoryItem,
  autoExpand: boolean,
  selectedFolders: SelectedFolders[] | null,
): UseTreeNodeContextType {
  const { getChildren, useDocumentsReady } = useDocuments()
  const [loading, setLoading] = useState<boolean>(true)
  const [expanded, setExpanded] = useState<boolean>(false)
  const [expandedOnce, setExpandedOnce] = useState<boolean>(false)
  const [nodeChildren, setNodeChildren] = useState<NodeRepositoryItem[]>([])
  const [documentChildren, setDocumentChildren] = useState<
    DocumentRepositoryItem[]
  >([])
  const [accessError, setAccessError] = useState<boolean>(false)
  const [documentChildrenLoaded, setDocumentChildrenLoaded] =
    useState<boolean>(false)
  const nodeChildrenAlreadyLoaded = useMemo(() => {
    return repositoryItemHasChildren(nodeItem) && nodeItem.children !== null
  }, [nodeItem])
  const nodeDocumentChildrenRequiresSeparateLoading = useMemo(() => {
    if (autoExpand) {
      return false
    }
    const requiresSeparateLoading =
      selectedFolders != null &&
      selectedFolders.some((folders) =>
        folders.folders.some((folder) => folder.folderId === nodeItem.id),
      ) &&
      !documentChildrenLoaded
    return requiresSeparateLoading
  }, [selectedFolders, nodeItem, autoExpand, documentChildrenLoaded])
  const nodeChildrenFullyLoaded = useMemo(() => {
    return (
      nodeChildrenAlreadyLoaded && !nodeDocumentChildrenRequiresSeparateLoading
    )
  }, [nodeChildrenAlreadyLoaded, nodeDocumentChildrenRequiresSeparateLoading])

  // expand node if Node's children already loaded
  if (nodeChildrenFullyLoaded && !expandedOnce) {
    const nodes = nodeItem.children?.filter(isNodeRepositoryItem) ?? []
    const documents = nodeItem.children?.filter(isDocumentRepositoryItem) ?? []
    setNodeChildren(nodes)
    setDocumentChildren(documents)
    setExpandedOnce(true)

    if (autoExpand) {
      setExpanded(true)
    }
  }

  useEffect(
    function initNodeChildren () {
      let unloading = false

      const loadNodeChildren = async (): Promise<void> => {
        /* NOTE: Do not load children until first expanded
               otherwise the whole tree will load at once! */
        if (!expandedOnce || nodeChildrenFullyLoaded || !useDocumentsReady) {
          setLoading(false)
          return
        }

        setLoading(true)

        const children = await getChildren(nodeItem)
        if (unloading) return

        if (children === null) {
          setNodeChildren([])
          setDocumentChildren([])
          setAccessError(true)
          setLoading(false)
          setDocumentChildrenLoaded(true)
          return
        }

        const nodes =
          nodeItem.children === null
            ? children.filter(isNodeRepositoryItem)
            : children
                .filter(isNodeRepositoryItem)
                .filter((child) =>
                  nodeItem.children?.some((c) => c.id === child.id),
                )
        setNodeChildren(nodes)

        const documents = children.filter(isDocumentRepositoryItem)

        setDocumentChildren(documents)
        setDocumentChildrenLoaded(true)
        setAccessError(false)
        setLoading(false)
      }
      void loadNodeChildren()

      return () => {
        unloading = true
      }
    },
    [
      expandedOnce,
      getChildren,
      nodeChildrenAlreadyLoaded,
      nodeChildrenFullyLoaded,
      nodeItem,
      useDocumentsReady,
      nodeDocumentChildrenRequiresSeparateLoading
    ],
  )

  const onToggleExpanded = useCallback((): void => {
    setExpandedOnce((prevExpandedOnce) => {
      // only set to true on first expansion
      if (!prevExpandedOnce) {
        return true
      }
      return prevExpandedOnce
    })
    setExpanded((prevExpanded) => !prevExpanded)
  }, []) // (using updater functions removes dependencies)

  // memoize context and wrap all callback functions in useCallback()
  const useTreeNodeReturn: UseTreeNodeContextType = useMemo(
    () => ({
      onToggleExpanded,
      nodeChildren,
      documentChildren,
      loading,
      accessError,
      expanded,
    }),
    [
      accessError,
      documentChildren,
      expanded,
      loading,
      nodeChildren,
      onToggleExpanded,
    ],
  )

  return useTreeNodeReturn
}

export { useTreeNode, type UseTreeNodeContextType }
