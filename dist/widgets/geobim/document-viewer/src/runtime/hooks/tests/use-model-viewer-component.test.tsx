import type { RefObject } from 'react'
import { renderHook, type RenderHookResult } from '@testing-library/react'
import type {
  ModelViewerError,
  SelectedBimDocument,
  ModelViewerContextType,
} from 'widgets/shared-code/geobim'
import { useModelViewerComponent } from '../use-model-viewer-component'

const useModelViewerMock = jest.fn<ModelViewerContextType, []>()
const useGeoBIMMock = jest.fn()

jest.mock(
  'widgets/shared-code/geobim',
  () => {
    return {
      __esModule: true,
      ModelViewerErrorCodes: {
        NOT_VIEWABLE: 'NOT_VIEWABLE',
      },
      useModelViewer: () => useModelViewerMock(),
      useGeoBIM: () => useGeoBIMMock(),
    }
  },
  {
    virtual: true,
  },
)

describe('useModelViewerComponent', () => {
  let renderResult: RenderHookResult<
    {
      viewerErrorMessage: string | null
      documentLoaded: boolean
    },
    {
      modelViewerWrapperRef: RefObject<HTMLDivElement | null>
      bimDocument: SelectedBimDocument | null
    }
  >

  const showModelViewerMock = jest.fn()
  const viewDocumentMock = jest.fn()

  const i18nMessage = jest.fn((id) => id)

  beforeEach(() => {
    class ResizeObserverMock {
      observe = jest.fn()
      unobserve = jest.fn()
      disconnect = jest.fn()
      constructor (callback: ResizeObserverCallback) {
        const entry = {
          contentRect: {
            width: 800,
            height: 600,
          },
        } as ResizeObserverEntry
        callback([entry], this)
      }
    }

    global.ResizeObserver =
      ResizeObserverMock as unknown as typeof ResizeObserver

    useModelViewerMock.mockImplementation(() => {
      return {
        showModelViewer: showModelViewerMock,
        viewDocument: viewDocumentMock,
        viewerError: null as ModelViewerError | null,
      } as unknown as ModelViewerContextType
    })

    useGeoBIMMock.mockImplementation(() => {
      return {
        geoBIMLoading: false,
        geoBIMInitialized: true,
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('returns initial state when no document is selected', () => {
    renderResult = renderHook(
      (options) =>
        useModelViewerComponent(
          options.modelViewerWrapperRef,
          options.bimDocument,
          i18nMessage,
        ),
      {
        initialProps: {
          modelViewerWrapperRef: {
            current: null,
          } as React.RefObject<HTMLDivElement | null>,
          bimDocument: null as SelectedBimDocument | null,
        },
      },
    )

    expect(renderResult.result.current.documentLoaded).toBe(false)
    expect(renderResult.result.current.viewerErrorMessage).toBeNull()
  })

  describe('when a document is selected', () => {
    const mockDocumentUrl = 'https://example.com/document.ifc'
    const mockSelectedBimDocument: SelectedBimDocument = {
      document: {
        url: mockDocumentUrl,
        issue: undefined,
        displayName: 'Test Document',
        fileName: 'document.ifc',
        isDefault: false,
      },
      selectedIds: ['id1', 'id2'],
    }

    beforeEach(() => {
      renderResult = renderHook(
        (options) =>
          useModelViewerComponent(
            options.modelViewerWrapperRef,
            options.bimDocument,
            i18nMessage,
          ),
        {
          initialProps: {
            modelViewerWrapperRef: {
              current: {} as HTMLDivElement,
            } as React.RefObject<HTMLDivElement | null>,
            bimDocument: mockSelectedBimDocument,
          },
        },
      )
    })

    test('the correct document is viewed', () => {
      expect(renderResult.result.current.documentLoaded).toBe(true)
      expect(renderResult.result.current).toBeDefined()
      expect(showModelViewerMock).toHaveBeenCalledWith(true)
      expect(viewDocumentMock).toHaveBeenCalledWith(
        mockDocumentUrl,
        undefined,
        ['id1', 'id2'],
        undefined,
      )
    })

    describe('and then no document is selected', () => {
      beforeEach(() => {
        renderResult.rerender({
          modelViewerWrapperRef: {
            current: {} as HTMLDivElement,
          } as React.RefObject<HTMLDivElement | null>,
          bimDocument: null,
        })
        viewDocumentMock.mockClear()
      })

      test('the viewer is not shown', () => {
        expect(renderResult.result.current.documentLoaded).toBe(false)
        expect(viewDocumentMock).not.toHaveBeenCalled()
      })
    })
  })
})
