import '@testing-library/jest-dom'
import { withStoreThemeIntlRender } from 'jimu-for-test'
import ModelViewerWidget from '../model-viewer-widget'

const useGeoBimModelViewerWidgetStub = {
  modelViewerTitle: 'Test Title',
  modelViewerOptions: {},
  bimDocument: null,
  documentLoading: false,
  widgetLoading: false,
  multipleFeatureSelectionWarning: false,
  cancelMultipleFeatureSelectionWarning: jest.fn(),
}
jest.mock('../../hooks/use-geobim-model-viewer-widget', () => ({
  useGeoBimModelViewerWidget: () => useGeoBimModelViewerWidgetStub,
}))

let modelViewerDisabledSelectorStub = false
jest.mock(
  'widgets/shared-code/geobim',
  () => ({
    useApsAuth: () => ({ getApsAuthToken: jest.fn() }),
    useGeoBIM: () => ({
      apsAuthenticated: true,
      userHasPermission: true,
      geoBIMInitialized: true,
    }),
    modelViewerDisabledSelector: () => modelViewerDisabledSelectorStub,
    setModelViewerDisabled: jest.fn(),
    ModelViewerProvider: ({ children }: any) => <div>{children}</div>,
    ApsLogIn: () => <div>ApsLogIn</div>,
    UserTypeNotPermissible: () => <div>UserTypeNotPermissible</div>,
    geoBIMWidgetContainerStyle: jest.fn(),
    loadingContainerStyle: jest.fn(),
    widgetHeaderStyle: jest.fn(),
    hidableContainerStyle: jest.fn(),
  }),
  {
    virtual: true,
  },
)

jest.mock('../model-viewer', () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="mock-model-viewer" />
  },
}))

jest.mock('../../styles', () => ({
  modelViewerBody: jest.fn(),
  modelViewerAlert: jest.fn(),
  multipleSelectionAlert: jest.fn(),
  noDocumentMessage: jest.fn(),
}))

const render = withStoreThemeIntlRender(false)
const theme = {} as any
const i18nMessage = (id: string) => id

describe('ModelViewerWidget', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the widget title', () => {
    const { getByText } = render(
      <ModelViewerWidget
        theme={theme}
        widgetId="test"
        i18nMessage={i18nMessage}
      />,
    )
    expect(getByText('Test Title')).toBeInTheDocument()
  })

  describe('while links are loading', () => {
    beforeEach(() => {
      useGeoBimModelViewerWidgetStub.documentLoading = true
    })

    it('does not disable the lock button while widget is locked', () => {
      modelViewerDisabledSelectorStub = true
      const { getBySelector } = render(
        <ModelViewerWidget
          theme={theme}
          widgetId="test"
          i18nMessage={i18nMessage}
        />,
      )
      const button = getBySelector('[data-test="document-lock-button"]')
      expect(button).not.toBeDisabled()
    })

    it('does disable the lock button while widget is not locked', () => {
      modelViewerDisabledSelectorStub = false
      const { getBySelector } = render(
        <ModelViewerWidget
          theme={theme}
          widgetId="test"
          i18nMessage={i18nMessage}
        />,
      )
      const button = getBySelector('[data-test="document-lock-button"]')
      expect(button).toBeDisabled()
    })
  })

  describe('when multiple features are selected', () => {
    beforeEach(() => {
      useGeoBimModelViewerWidgetStub.multipleFeatureSelectionWarning = true
      useGeoBimModelViewerWidgetStub.documentLoading = false
    })

    it('does disable the lock button while widget is not locked', () => {
      modelViewerDisabledSelectorStub = false
      const { getBySelector } = render(
        <ModelViewerWidget
          theme={theme}
          widgetId="test"
          i18nMessage={i18nMessage}
        />,
      )
      const button = getBySelector('[data-test="document-lock-button"]')
      expect(button).toBeDisabled()
    })
  })

  it('does not disable the lock button while widget is already locked', () => {
    modelViewerDisabledSelectorStub = true
    useGeoBimModelViewerWidgetStub.multipleFeatureSelectionWarning = true
    const { getBySelector } = render(
      <ModelViewerWidget
        theme={theme}
        widgetId="test"
        i18nMessage={i18nMessage}
      />,
    )
    const button = getBySelector('[data-test="document-lock-button"]')
    expect(button).not.toBeDisabled()
  })
})
