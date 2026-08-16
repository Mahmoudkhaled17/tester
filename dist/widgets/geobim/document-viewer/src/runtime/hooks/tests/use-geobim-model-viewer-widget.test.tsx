import { act, renderHook, type RenderHookResult } from '@testing-library/react'
import {
  useGeoBimModelViewerWidget,
  type GeoBimModelViewerWidgetContextType,
} from '../use-geobim-model-viewer-widget'
import type { DocumentSelectionContextType } from '../use-document-selection'
import type { SelectedBimDocument } from 'widgets/shared-code/geobim'

const TEST_GEOBIM_CONFIG = {
  apsModelViewerVersion: '1.2.3',
}
jest.mock(
  'widgets/shared-code/geobim',
  () => ({
    useGeoBIM: jest.fn().mockImplementation(() => ({
      geoBIMLoading: false,
      geoBIMInitialized: true,
      mapWidgetLoaded: true,
      geoBIMConfigLoaded: true,
      geoBIMConfig: TEST_GEOBIM_CONFIG,
    })),
  }),
  {
    virtual: true,
  },
)

let useDocumentSelectionMock: DocumentSelectionContextType
jest.mock('../use-document-selection', () => ({
  useDocumentSelection: jest
    .fn()
    .mockImplementation(() => useDocumentSelectionMock),
}))

jest.mock('../use-selected-feature-linked-document', () => ({
  useSelectedFeatureLinkedDocument: jest.fn(),
}))

describe('useGeoBimModelViewerWidget', () => {
  let selectedBimDocument: SelectedBimDocument = {
    document: null,
    selectedIds: [],
  }

  let renderResult: RenderHookResult<
    GeoBimModelViewerWidgetContextType,
    {
      widgetId: string
    }
  >

  const i18nMessage = jest.fn((id: string) => id)
  const getApsAuthTokenMock = jest.fn()

  beforeEach(() => {
    selectedBimDocument = {
      document: {
        displayName: 'Test Document',
        url: 'urn:testdocument',
        isDefault: true,
        fileName: 'TestDocument.rvt',
      },
      selectedIds: ['bim1', 'bim2'],
    }
    useDocumentSelectionMock = {
      bimDocument: selectedBimDocument,
      documentLoading: false,
      multipleFeatureSelectionWarning: false,
      cancelMultipleFeatureSelectionWarning: jest.fn(),
    }
    act(() => {
      renderResult = renderHook(() =>
        useGeoBimModelViewerWidget(
          'widget1',
          false,
          getApsAuthTokenMock,
          i18nMessage,
        ),
      )
    })
  })

  it('returns correct context values', () => {
    expect(renderResult.result.current.modelViewerTitle).toBe(
      selectedBimDocument.document?.displayName,
    )
    expect(renderResult.result.current.documentLoading).toBe(
      useDocumentSelectionMock.documentLoading,
    )
    expect(renderResult.result.current.widgetLoading).toBe(false)
    expect(renderResult.result.current.multipleFeatureSelectionWarning).toBe(
      useDocumentSelectionMock.multipleFeatureSelectionWarning,
    )
    expect(
      renderResult.result.current.cancelMultipleFeatureSelectionWarning,
    ).toBe(useDocumentSelectionMock.cancelMultipleFeatureSelectionWarning)
  })

  it('returns the correct Model Viewer version', () => {
    expect(renderResult.result.current.modelViewerOptions?.version).toBe(
      TEST_GEOBIM_CONFIG.apsModelViewerVersion,
    )
  })

  describe('when multiple features are selected', () => {
    beforeEach(() => {
      useDocumentSelectionMock.multipleFeatureSelectionWarning = true
      act(() => {
        renderResult.rerender()
      })
    })

    it('returns correct model viewer title', () => {
      expect(renderResult.result.current.modelViewerTitle).toBe(
        'widgetTitle', // Default widget title
      )
    })
  })
})
