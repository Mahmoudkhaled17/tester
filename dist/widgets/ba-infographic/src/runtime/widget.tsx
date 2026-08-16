/* eslint-disable no-useless-assignment */
/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { React, type AllWidgetProps, getAppStore, jsx, css, SessionManager, type IMState, type UseUtility, UtilityManager, proxyUtils, loadArcGISJSAPIModule } from 'jimu-core'
import { JimuDraw, JimuDrawCreationMode, type JimuDrawVisibleElements } from 'jimu-ui/advanced/map'
import { ArcgisInfographic, ArcgisInfographicWorkflow, ArcgisInfographicModal } from '../../node_modules/@arcgis/business-analyst-components/dist/components'
import { defineCustomElements } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/loader'

import PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol'

// import * as projection from 'esri/geometry/projection' removed for arcgis core v5
import SpatialReference from 'esri/geometry/SpatialReference'

import { ACLUtils } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/ACLUtils'
import { GEClient } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/util/mobile/GEClient'

import { getStyle } from './lib/style'
import D from '../utils/dbg-log'
import { Mode } from '../config'
import BAMapActions from './ba-map-actions'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import defaultMessages from './translations/default'
import 'calcite-components' // Needed to pull calcite in for ArcGis* components
import { Container, Modal, ModalBody, ModalHeader, Paper, Button, Loading, LoadingType } from 'jimu-ui'
import { CustomWidgetPlaceholder } from './custom-placeholder'
import baIcon from './assets/BAInfographic20.svg'
import baIconWhite from './assets/whiteBALogo.svg'

import Debounce from '../utils/debounce'
import MapSearch from './map-search'
import { getActiveHierarchyId, getCountries, getValidHierarchies } from '../countries'
import type { TravelModeOptions } from '../setting/setting'
import type { DrivetimeOptions } from '../../node_modules/@arcgis/business-analyst-components/dist/stencil-components/dist/collection/base-util'
import type Point from 'esri/geometry/Point'
import { appConfigUtils } from 'jimu-core'

import { collectServiceTokens, configureOAuth } from './oauth-util'

//import { RESTHorizontalAlignment } from 'arcgis-charts-components'
// import '../ba-app-state.js'
import BaAppState from '../ba-app-state.js'
// import { cache } from 'react'

export enum InfoBufferType { ring = 'ring', drivetime = 'drivetime', walktime = 'walktime' }
enum BaSearchType { all = '0', address = '1', boundary = '2' }

interface ExtraProps {
  browserSizeMode: any
  workflowRuntimeSelectedFeatureObject: any
}
interface ReportInfo {
  id: string
  name: string
}

interface InfographicOptions {
  bufferType: InfoBufferType
  bufferUnits: string
  bufferSizes: number[]
  travelModeOptions?: TravelModeOptions
}

interface Options {
  bufferType: InfoBufferType
  bufferUnits: string
  bufferSizes: number[]
  infographicOptions: InfographicOptions
}

enum Steps {
  Search = 'search',
  Buffers = 'buffers',
  Infographic = 'infographic'
}
enum StepNumber {
  Search = 1,
  Buffers = 2,
  Infographic = 3
}
enum NavButtons {
  Previous = 'previous',
  Next = 'next',
  Infographic = 'infographic'
}

enum MaxBuffers {
  Rings = 1000,
  DriveMinutes = 300,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  DriveMile = 300,
  DriveKm = 482.8,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  WalkMinutes = 300,
  WalkMile = 27,
  WalkKm = 43.45
}

const defaultFillSymbol = {
  color: [245, 172, 70, 0.4],
  outline: {
    color: [204, 50, 2, 0.7],
    width: 1
  }
}

export interface BAInfographicWidgetProps extends AllWidgetProps<any>, ExtraProps {
  collapsed?: boolean
}

export default class Widget extends React.PureComponent<BAInfographicWidgetProps,
  any> {
  _isMounted = false
  _widgetElement: any
  static WidgetRegistry: any = {}
  widgetOuterDivRef: React.RefObject<HTMLDivElement>
  private readonly mapActions: BAMapActions
  private jimuMapView: JimuMapView
  addedResizeListener: boolean
  availableHierarchies: any
  geoenrichmentServiceUrl: string
  routingUtilityUrl: string
  getBackgroundColorFromProps: boolean
  hasAcceptedBuffers: boolean
  initializedEvents: any
  lastSiteObjectType: string
  logStyle: string[]
  portalOnlineGEProxy: boolean
  presetInfographicId: string
  searchResultString: string
  sessionToken: string = null
  syncId: string
  widgetMapStartingUp: boolean
  widgetOuterDivId: string
  workflowBuffersDebouncer: Debounce
  workflowBuffersUpdateDelayed: any
  workflowId: string
  workflowIntroTextReportsRowId: string
  workflowModalInfographicId: string
  workflowNextButtonId: string
  workflowPrevButtonId: string
  workflowReportListId: string
  workflowRunInfographicId: string
  workflowRuntimeSearchId: string
  workflowRuntimeSearchRowId: string
  workflowStepperId: string
  _lastSiteObjectType: string
  _presetBuffersHaveChanged: boolean
  _standardInfographicsDict: any
  _cachedInfographicOptions: any
  _lastOptionsConfig: string
  _lastAppliedPresetSearch: string
  _projectionModule: typeof __esri.projectOperator = null
  _widgetHasInitialized: boolean = false
  showViewStatesPanel: boolean = false
  //state
  _service: any
  _baAppStateId: string
  _baAppStoreName: string | undefined = BaAppState.BA_WIDGET_STORE // default store ID
  _onReadyNotificationsTodo: any[] = []

  // App State service component instance and store ID
  _compName = 'Widget' + this.props.id
  _topDivId: string
  _isOnPremisesGEKey: string = 'env_isOnPremisesGE'
  _isEnterprisePortalKey: string = 'env_isEnterprisePortal'
  _searchScopeKey: string = 'searchScope'
  _searchScopeLockedKey: string = 'searchScopeLocked'
  _tokenRequiredCallbackKey: string = 'tokenRequiredCallback'
  _useLatestDataSourceKey: string = 'useLatestDataSource'
  _cachedInfographicKey: string = 'presetCachedInfographic'
  _presetCachedRuntimeResourceUrlKey: string = 'presetCachedRuntimeResourceUrl'

  // Loading event listeners (bound for add/remove)
  private _onBaLoading: any
  private _onBaLoadingStart: any
  private _onBaLoadingEnd: any
  // Loader hysteresis controls
  private readonly _loadingMinShowMs: number = 2000
  private _loadingHideTimer: any = null
  private _loadingShownAt: number | null = null
  private _processingLoadingEvent = false
  private _loadingEventTimer: any = null
  _baAppStateServiceComponent: any
  _baAppStateInitialized: boolean = false

  private isElementDisplayed ( elem: Element ): boolean {
    if ( !elem || !( elem as HTMLElement ).ownerDocument ) {
      return false
    }

    const htmlElem = elem as HTMLElement
    const style = window.getComputedStyle( htmlElem )
    if ( style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0' ) {
      return false
    }

    return htmlElem.getClientRects().length > 0
  }

  // private syncViewStatesPanelVisibilityOnStartup (): void {
  //   const _delayedSync = () => {
  //     const viewStatesElements = Array.from( document.querySelectorAll( 'ba-view-states' ) )
  //
  //     const hasVisibleOtherWidgetPanel = viewStatesElements.some( ( elem ) => {
  //       const ownerWidgetId = elem.getAttribute( 'data-owner-widget-id' )
  //       if ( ownerWidgetId && ownerWidgetId === this.props.id ) {
  //         return false
  //       }
  //       const widgetOwner: any = document.getElementById( ownerWidgetId )
  //       if ( widgetOwner ) {
  //         return widgetOwner.showViewStatesPanel === true
  //       }
  //       return this.isElementDisplayed( elem )
  //     } )
  //
  //     if ( hasVisibleOtherWidgetPanel && this.showViewStatesPanel ) {
  //       console.log( '%c WIDGET: syncViewStatesPanelVisibilityOnStartup: hiding this =', 'color:yellow;font-size:13pt', this.props.id, hasVisibleOtherWidgetPanel, ', this.showViewStatesPanel =', this.showViewStatesPanel )
  //       this.showViewStatesPanel = false
  //       this.forceUpdate()
  //     } else {
  //       console.log( '%c WIDGET: syncViewStatesPanelVisibilityOnStartup: no other visible panels, this =', 'color:yellow;font-size:13pt', this.props.id, hasVisibleOtherWidgetPanel, ', this.showViewStatesPanel =', this.showViewStatesPanel )
  //     }
  //   }
  //   setTimeout( _delayedSync, 0 )
  // }

  /**
   * Normalizes a URL string by removing dot segments ("." and "..") from the pathname.
   * Example:
   *   https://host/app/../widgets/x.html -> https://host/widgets/x.html
   */
  private removeDotDotSegments ( urlString: string ): string {
    try {
      // When urlString is absolute, base is ignored; when it's relative, use current origin.
      const url = new URL( urlString, ( window as any )?.location?.origin )

      const segments = url.pathname.split( '/' )
      const out: string[] = []
      for ( const seg of segments ) {
        if ( !seg || seg === '.' ) continue
        if ( seg === '..' ) {
          out.pop()
          continue
        }
        out.push( seg )
      }

      url.pathname = '/' + out.join( '/' )
      return url.toString()
    } catch ( e ) {
      // If the string isn't a valid URL, return it unchanged.
      return urlString
    }
  }

  private getDefaultReportSymbol () {
    return {
      color: [...defaultFillSymbol.color],
      outline: {
        color: [...defaultFillSymbol.outline.color],
        width: defaultFillSymbol.outline.width
      }
    }
  }

  private getSerializableReportSymbol ( symbol?: any ) {
    if ( !symbol ) {
      return undefined
    }

    if ( typeof symbol === 'string' ) {
      try {
        return JSON.parse( symbol )
      } catch ( error ) {
        console.warn( 'Failed to parse report symbol string:', error )
        return undefined
      }
    }

    if ( typeof symbol?.toJSON === 'function' ) {
      return symbol.toJSON()
    }

    try {
      return JSON.parse( JSON.stringify( symbol ) )
    } catch ( error ) {
      console.warn( 'Failed to serialize report symbol:', error )
      return undefined
    }
  }

  // NOTE: When a new Experience Builder app is created, widget gets called before setting, so any new
  // props.config values here must be defaulted
  constructor ( props ) {
    super( props )

    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this
    this.widgetOuterDivRef = React.createRef()
    Widget.WidgetRegistry[this.props.id] = this

    this.getBackgroundColorFromProps = true
    this.addedResizeListener = false

    try {
      defineCustomElements( window )
    } catch ( error ) {
      console.warn( 'Failed to define business analyst custom elements:', error )
    }

    this.state = {
      countries: null,
      isLoading: false,
      showLoader: false,
      isSearchPopoverOpen: false,
      baSearchType: props.config.baSearchType,
      numSteps: 0,
      currentStep: StepNumber.Search,
      searchTabStatus: {},
      bufferTabStatus: {},
      nextButtonStatus: { disabled: 'disabled' },
      infographicTabStatus: {},
      infographicTabVisited: false,
      initializedGEUrl: false, // The geoenrichmentServiceUrl needs to initialize asynchronously before rendering widget
      edited: false,
      tabArray: [''],
      stencilPropChangeConnected: null,
      openModal: false,
      infographicOptions: null,
      presetSearchObject: null,
      workflowRuntimeSearchSelectedObject: null,
      workflowRuntimeSelectedReport: null,
      workflowRuntimeBuffer: null,
      showInfographicModal: false,
      containerWindowSizeChanged: null,
      overrideWithLatestHierarchy: false,
      // must use typeof here instead of ACLUtils.isDef as buffers allow null values
      workflowRuntimeRingsBuffer1: typeof props.config.workflowRingsBuffer1 !== 'undefined' ? props.config.workflowRingsBuffer1 : 1,
      workflowRuntimeRingsBuffer2: typeof props.config.workflowRingsBuffer2 !== 'undefined' ? props.config.workflowRingsBuffer2 : 3,
      workflowRuntimeRingsBuffer3: typeof props.config.workflowRingsBuffer3 !== 'undefined' ? props.config.workflowRingsBuffer3 : 5,
      workflowRuntimeRingsBufferUnit: typeof props.config.workflowRingsBufferUnit !== 'undefined' ? props.config.workflowRingsBufferUnit : 'miles',
      workflowRuntimeDrivetimeBuffer1: typeof props.config.workflowDrivetimeBuffer1 !== 'undefined' ? props.config.workflowDrivetimeBuffer1 : 5,
      workflowRuntimeDrivetimeBuffer2: typeof props.config.workflowDrivetimeBuffer2 !== 'undefined' ? props.config.workflowDrivetimeBuffer2 : 10,
      workflowRuntimeDrivetimeBuffer3: typeof props.config.workflowDrivetimeBuffer3 !== 'undefined' ? props.config.workflowDrivetimeBuffer3 : 15,
      workflowRuntimeDrivetimeBufferUnit: typeof props.config.workflowDrivetimeBufferUnit !== 'undefined' ? props.config.workflowDrivetimeBufferUnit : 'minutes',
      workflowRuntimeWalktimeBuffer1: typeof props.config.workflowWalktimeBuffer1 !== 'undefined' ? props.config.workflowWalktimeBuffer1 : 5,
      workflowRuntimeWalktimeBuffer2: typeof props.config.workflowWalktimeBuffer2 !== 'undefined' ? props.config.workflowWalktimeBuffer2 : 10,
      workflowRuntimeWalktimeBuffer3: typeof props.config.workflowWalktimeBuffer3 !== 'undefined' ? props.config.workflowWalktimeBuffer3 : 15,
      workflowRuntimeWalktimeBufferUnit: typeof props.config.workflowWalktimeBufferUnit !== 'undefined' ? props.config.workflowWalktimeBufferUnit : 'minutes',
      workflowSelectedGeographyLevels: undefined,
      selectedCountry: typeof props.config.sourceCountry !== 'undefined' ? props.config.sourceCountry : 'US',
      availableHierarchies: typeof props.config.availableHierarchies !== 'undefined' ? props.config.availableHierarchies : null,
      selectedHierarchy: typeof props.config.selectedHierarchy !== 'undefined' ? props.config.selectedHierarchy : null,
      displayBuffers: undefined,
      spinnerBackgroundColor: undefined,
      maxDriveBuffer: MaxBuffers.DriveMinutes,
      maxWalkBuffer: MaxBuffers.WalkMinutes,
      workflowRuntimeSelectedFeatureObjectFirstTime: !!props.workflowRuntimeSelectedFeatureObject, // Used to signal if a feature has already been selected
      mapViewReady: false,
      portalUrl: props.portalUrl,
      geocodeUrl: props.portalSelf?.helperServices && props.portalSelf.helperServices.geocode && props.portalSelf.helperServices.geocode[0].url,
      hasPrivileges: false, // Verify user has geoenrichment and network analysis privileges OR configured to use proxy
      runInfographicConfig: null,
      mapSearchbarEnabled: props.config.searchbarEnabled ?? true,
      defaultReport: props.config.defaultReport,
      proxyToManyRequests: false, // Verify request limit exceeded through proxy
      signInRequired: false, // Used if user needs to sign in to access proxy
      isOnPremisesGE: false,
      stUseTrafficEnabled: true, // always true - does not change
      stUseTrafficChecked: props.config.useTrafficChecked,
      stStandardInfographicID: props.config.standardInfographicID,
      routingUtilityUrl: props.portalSelf?.helperServices?.routingUtilities?.url,
      forceReRender: false
    }

    this._topDivId = 'top-div-' + this.props.id
    this._baAppStateId = 'baAppState-' + this.props.id
    this.workflowId = 'workflow-component-' + this.props.id
    this.workflowStepperId = 'workflow-stepper-' + this.props.id
    this.workflowIntroTextReportsRowId = 'workflowIntroTextReportsRow' + this.props.id
    this.presetInfographicId = 'preset-infographic-' + this.props.id
    this.workflowModalInfographicId = 'workflow-modal-' + this.props.id
    this.workflowRuntimeSearchId = 'workflow-runtime-search-' + this.props.id
    this.workflowRuntimeSearchRowId = 'workflow-runtime-search-row-' + this.props.id
    this.workflowReportListId = 'workflow-report-list-' + this.props.id
    this.widgetOuterDivId = 'widget-outer-div-' + this.props.id

    this.hasAcceptedBuffers = false
    this._presetBuffersHaveChanged = false
    this._lastAppliedPresetSearch = null
    this.initializedEvents = false
    this.widgetMapStartingUp = true
    this.syncId = 'baSync' + Date.now()
    this.logStyle = ['color:yellow;font-size:8pt;', 'color:#ff40ff;font-size:8pt;', 'color:#00aabb;font-size:8pt;']

    // Debouncer for workflow buffer changes
    this.workflowBuffersDebouncer = new Debounce( self )

    this.workflowBuffersUpdateDelayed = this.workflowBuffersDebouncer.debounce( this.updateBufferOptionsAndMap.bind( this ), 500 )

    this.onPropertyChange( 'syncBufferSettings', false )

    // debug logging set to true
    D.showDebugConsoleLogs = false

    this.getGeoenrichmentServiceUrl()


    const rawPopupCallbackUrl = this.props.context.folderUrl + 'dist/runtime/assets/oauth-callback.html'
    const popupCallbackUrl = this.removeDotDotSegments( rawPopupCallbackUrl )

    configureOAuth( {
      appId: "arcgisonline",
      popup: true,
      popupCallbackUrl
    } )
  }

  private getWidgetRootElement () {
    return document.querySelector( `.ba-infographic-${this.props.id}` )
  }

  private eventIsFromThisWidget ( event: Event ): boolean {
    const root = this.getWidgetRootElement()
    if ( !root ) {
      return false
    }
    const composedPath = ( event as any ).composedPath?.()
    return Array.isArray( composedPath ) && composedPath.includes( root )
  }

  private readonly _onSearchPopupOpened = ( event: Event ) => {
    if ( this.eventIsFromThisWidget( event ) ) {
      this.updateState( 'isSearchPopoverOpen', true )
    }
  }

  private readonly _onSearchPopupClosed = ( event: Event ) => {
    if ( this.eventIsFromThisWidget( event ) ) {
      this.updateState( 'isSearchPopoverOpen', false )
    }
  }

  private readonly _onInfographicPlayerMessage = ( event: MessageEvent ) => {
    const data: any = event?.data

    if ( !data || data.action !== 'player-closed' ) {
      return
    }

    const isWorkflowInline = this.props.config.widgetMode === Mode.Workflow && this.props.config.workflowRunInWidget
    if ( !isWorkflowInline || !this.state?.showInfographicModal || !this.state?.runInfographicConfig ) {
      return
    }

    this.closeWorkflowModal()
  }

  private closeWorkflowModal () {
    this.updateState( 'runInfographicConfig', null )
    this.updateState( 'showInfographicModal', false, () => this.buildInfographicOptions() )
  }

  private findAttachPointElements ( rootNode: any, attachPoint: string ): HTMLElement[] {
    const results: HTMLElement[] = []
    const queue: any[] = []

    if ( rootNode ) {
      queue.push( rootNode )
    }

    while ( queue.length > 0 ) {
      const current = queue.shift()
      if ( !current || typeof current.querySelectorAll !== 'function' ) {
        continue
      }

      const found = current.querySelectorAll( `[data-attach-point="${attachPoint}"]` )
      if ( found && found.length > 0 ) {
        found.forEach( ( el: HTMLElement ) => results.push( el ) )
      }

      const descendants = current.querySelectorAll( '*' )
      descendants.forEach( ( el: any ) => {
        if ( el?.shadowRoot ) {
          queue.push( el.shadowRoot )
        }
      } )
    }

    return results
  }

  private syncRunInWidgetHeaderVisibility () {
    // console.log( '%c WIDGET syncRunInWidget...', 'color:orange;font-size:13pt;' )
    if ( this.props.config.widgetMode !== Mode.Workflow || !this.props.config.workflowRunInWidget ) {
      return
    }

    if ( !this.state?.showInfographicModal || !this.state?.runInfographicConfig ) {
      return
    }

    const applyHeaderVisibility = ( attempt: number ) => {
      if ( this.props.config.widgetMode !== Mode.Workflow || !this.props.config.workflowRunInWidget ) {
        return
      }
      if ( !this.state?.showInfographicModal || !this.state?.runInfographicConfig ) {
        return
      }

      const modal: any = document.getElementById( this.workflowModalInfographicId )
      if ( !modal ) {
        if ( attempt < 10 ) {
          setTimeout( () => { applyHeaderVisibility( attempt + 1 ) }, 120 )
        }
        return
      }

      const titleDivs = this.findAttachPointElements( modal, '_titleDiv' )
      const areasSelectDivs = this.findAttachPointElements( modal, '_areasSelectDiv' )
      const zoomSelectDivs = this.findAttachPointElements( modal, '_zoomSelectDiv' )

      titleDivs.forEach( ( el ) => {
        el.style.display = ''
      } )
      areasSelectDivs.forEach( ( el ) => {
        el.style.display = ''
      } )
      // zoomSelectDivs.forEach( ( el ) => {
      //   el.style.display = 'none'
      // } )

      if ( zoomSelectDivs.length === 0 && attempt < 10 ) {
        setTimeout( () => { applyHeaderVisibility( attempt + 1 ) }, 120 )
      }
    }

    requestAnimationFrame( () => { applyHeaderVisibility( 0 ) } )
  }

  private enforceRunInWidgetDisplayHeaderSetting () {
    const { workflowRunInWidget, displayHeader } = this.props.config
    if ( workflowRunInWidget && displayHeader !== true ) {
      this.onPropertyChange( 'displayHeader', true )
    }
  }

  private isLoadingEventFromThisWidget ( event: Event ): boolean {
    if ( this.eventIsFromThisWidget( event ) ) {
      return true
    }

    const detail: any = ( event as any )?.detail
    const eventWidgetId = detail?.widgetId || detail?.componentId || detail?.id || detail?.context?.widgetId
    return !!eventWidgetId && eventWidgetId === this.props.id
  }

  private getGeoEnrichmentServiceRoot ( url: string ): string {
    try {
      // Extract the root service URL for GeoEnrichment endpoint
      // e.g., "https://host/arcgis/rest/services/World/GeoEnrichmentServer" or
      //       "https://host/sharing/servers/rest/services/World/GeoEnrichmentServer"
      const match = url.match( /(.*\/GeoEnrichmentServer)/i )
      return match ? match[1] : url
    } catch ( e ) {
      return url
    }
  }

  private isArcgisOnlineUrl ( urlString: string ): boolean {
    try {
      const parsed = new URL( urlString )
      const hostname = parsed.hostname.toLowerCase()
      return hostname === 'arcgis.com' || hostname.endsWith( '.arcgis.com' )
    } catch ( e ) {
      return false
    }
  }

  private async detectBaEnterpriseGeoenrichment (): Promise<boolean> {
    try {
      if ( !this.geoenrichmentServiceUrl || !ACLUtils.hasText( this.geoenrichmentServiceUrl ) ) {
        return false
      }

      if ( this.isArcgisOnlineUrl( this.geoenrichmentServiceUrl ) ) {
        return false
      }

      const serviceRoot = this.getGeoEnrichmentServiceRoot( this.geoenrichmentServiceUrl )
      const tokParam = this.getTokenParam()
      const urls: string[] = [`${serviceRoot}?f=pjson`]
      if ( tokParam ) {
        urls.push( `${serviceRoot}?f=pjson${tokParam}` )
      }

      for ( const url of urls ) {
        const response = await fetch( url )

        // For secured enterprise deployments, unsigned users will commonly get 401/403.
        // If this is a non-AGO URL and auth is required, treat it as on-premises GE.
        if ( response.status === 401 || response.status === 403 ) {
          return true
        }

        if ( response.ok ) {
          const data = await response.json()
          // Check if this is a BA Enterprise portal (ProductType: "Enterprise")
          // This indicates on-premises BA Enterprise with on-premises geoenrichment
          if ( data?.ProductType === 'Enterprise' ) {
            return true
          }
        }
      }

      // Non-AGO + non-proxy GE URL is most likely Enterprise/on-prem; avoid false negatives
      // when metadata endpoint is inaccessible without authentication.
      return true
    } catch ( error ) {
      console.warn( 'Failed to detect BA Enterprise geoenrichment:', error )
      // If detection call fails for non-AGO URL, assume on-premises instead of failing closed.
      return true
    }
  }

  async getGeoenrichmentServiceUrl () {
    const rawGeoenrichmentServiceUrl = await this.getUrlOfUseUtility( this.props.config.geoenrichmentConfig?.useUtility )

    this.geoenrichmentServiceUrl = proxyUtils.getWhetherUseProxy() ? proxyUtils.getProxyUrl( rawGeoenrichmentServiceUrl ) || rawGeoenrichmentServiceUrl : rawGeoenrichmentServiceUrl

    let gePrivilege = false
    let networkAnalysisPrivilege = false

    if ( !this.geoenrichmentServiceUrl || !ACLUtils.hasText( this.geoenrichmentServiceUrl ) ) {
      this.geoenrichmentServiceUrl = this.props.portalSelf?.helperServices && this.props.portalSelf.helperServices.geoenrichment && this.props.portalSelf.helperServices.geoenrichment.url
    }

    // Determine if a Portal proxy is setup for GE service by looking for 'sharing/servers', '/appservices/', or 'usrsvcs/servers'  in path.  If so assume it is pointing to AGO GE service
    this.portalOnlineGEProxy = this.geoenrichmentServiceUrl && ( this.geoenrichmentServiceUrl.includes( 'sharing/servers' ) || this.geoenrichmentServiceUrl.includes( '/appservices/' ) || this.geoenrichmentServiceUrl.includes( 'usrsvcs/servers' ) )

    // Determine if on-premises GeoEnrichment is configured by checking the service's ProductType
    // This is more reliable than URL pattern matching for BA Enterprise scenarios
    const canBeOnPremisesGE = this.geoenrichmentServiceUrl && ACLUtils.hasText( this.geoenrichmentServiceUrl ) && !this.portalOnlineGEProxy && !this.isArcgisOnlineUrl( this.geoenrichmentServiceUrl )
    let isOnPremisesGE = false
    if ( canBeOnPremisesGE ) {
      isOnPremisesGE = await this.detectBaEnterpriseGeoenrichment()
    }
    this.updateState( 'isOnPremisesGE', isOnPremisesGE )

    // On BA Enterprise with on-premises GE, require Creator user type and above.
    // We use create-item privilege as the gate since Viewer user types do not include it.
    if ( isOnPremisesGE ) {
      if ( this.props.user ) {
        const privileges: string[] = ( this.props.user.privileges || [] ) as any
        const canCreateContent = privileges.includes( 'portal:user:createItem' )
        gePrivilege = canCreateContent
        networkAnalysisPrivilege = canCreateContent
      } else {
        // Let sign-in UX handle anonymous users.
        gePrivilege = true
        networkAnalysisPrivilege = true
      }
    } else if ( !this.portalOnlineGEProxy && this.props.user ) {
      // For ArcGIS Online GE / Enterprise configured to use online GE,
      // keep existing GE + network analysis privilege checks.
      const privileges: string[] = this.props.user.privileges as any

      privileges.forEach( ( privilege: string ) => {
        if ( privilege === 'premium:user:geoenrichment' ) {
          gePrivilege = true
        } else if ( privilege === 'premium:user:networkanalysis' ) {
          networkAnalysisPrivilege = true
        }
      } )
    } else {
      gePrivilege = true
      networkAnalysisPrivilege = true
    }

    if ( this.portalOnlineGEProxy ) {
      // const tok = SessionManager.getInstance().getMainSession()?.token
      const tokParam = this.getTokenParam()
      const url = this.geoenrichmentServiceUrl + '/Geoenrichment/countries?f=pjson&appID=esriexperiencebuilder' + tokParam
      await fetch( url )
        .then( async ( response ) => {
          if ( response.status === 429 ) {
            this.updateState( 'proxyToManyRequests', true )
          } else if ( response.status === 403 ) {
            this.updateState( 'signInRequired', true )
          } else if ( response.status === 200 ) {
            const responseJson = await response.json()
            if ( responseJson.error && responseJson.error.code === 403 ) {
              this.updateState( 'signInRequired', true )
            } else {
              this.updateState( 'signInRequired', false )
            }
          }
        } )
    }

    this.updateState( 'hasPrivileges', gePrivilege && networkAnalysisPrivilege )

    this.updateState( 'initializedGEUrl', true )
  }

  static mapExtraStateProps = ( state: IMState, props: AllWidgetProps<any> ): ExtraProps => {
    return {
      browserSizeMode: state.browserSizeMode,
      workflowRuntimeSelectedFeatureObject: props?.mutableStateProps?.workflowRuntimeSelectedFeatureObject
    }
  }

  getToken () {
    if ( !this.sessionToken ) {
      if ( SessionManager ) {
        this.sessionToken = SessionManager.getInstance()?.getMainSession()?.token
      }
    }
    return this.sessionToken
  }

  getTokenParam () {
    let tokParam = ''
    const tok = this.getToken()
    if ( tok && ACLUtils.hasText( tok ) ) {
      tokParam = '&token=' + tok
    }
    return tokParam
  }

  getKeys ( obj: any ) {
    let k; const keys = []
    for ( k in obj ) {

      if ( Object.prototype.hasOwnProperty.call( obj, k ) ) {
        keys.push( k )
      }
    }
    return keys
  }

  _defaultReportIsValid ( report: ReportInfo ): boolean {
    return ( report && report.id && report.id.length > 0 && report.name && report.name.length > 0 )
  }

  shallowObjectComparisonAreEqual ( obj1, obj2 ) {
    if ( !obj1 && !obj2 ) return true
    if ( ( !obj1 && obj2 ) || ( !obj2 && obj1 ) ) return false

    // PERFORMANCE: Fast path for same reference
    if ( obj1 === obj2 ) return true

    const keys1 = this.getKeys( obj1 )
    const keys2 = this.getKeys( obj2 )

    // PERFORMANCE: Early exit if key counts differ
    if ( keys1.length !== keys2.length ) return false

    return keys1.every( ( key ) => {
      const hasProp = Object.prototype.hasOwnProperty.call( obj2, key )
      if ( !hasProp ) return false
      // object props compare true if they are both objects (shallow)
      if ( typeof obj1[key] === 'object' ) {
        return ( obj2[key] && typeof obj2[key] === 'object' )
      } else {
        return ( hasProp && obj1[key] === obj2[key] )
      }
    } )
  }

  preloadData () {
    this.buildInfographicOptions()
    this.addEventListeners()
    this.countSteps()
    this.initDefaultTab()
    this.initDefaultBufferTab()
  }

  loadPresetSearch () {
    const { presetSearchSelectedObject, workflowSearchSelectedObject } = this.props.config
    const rawPresetSearch = presetSearchSelectedObject || workflowSearchSelectedObject

    if ( rawPresetSearch && this._lastAppliedPresetSearch !== rawPresetSearch ) {
      this.onSiteObjectChanged( { origin: 'settingsPreset', data: rawPresetSearch } )
    }
  }

  initDefaultTab () {
    /** IMPORTANT: Makes sure the UI is updated */
    requestAnimationFrame( () => {
      const stepper: any = document.getElementById( this.workflowStepperId )

      this.disableStepperTabs()

      this.stepGoTo( stepper, StepNumber.Search )
    } )
  }

  initDefaultBufferTab ( force = false ) {
    requestAnimationFrame( () => {
      const { workflowAvailableBufferRings, workflowAvailableBufferDrivetime, workflowAvailableBufferWalktime, workflowRingsBuffer1, workflowRingsBuffer2, workflowRingsBuffer3 } = this.props.config
      const workflowBuffersArray = this.getWorkflowBuffers()
      if ( ACLUtils.notDef( workflowBuffersArray.buffer ) || force ) {
        if ( ACLUtils.isDef( workflowAvailableBufferRings ) && workflowAvailableBufferRings ) {
          this.updateWorkflowBufferState( 'workflowRuntimeBuffer', InfoBufferType.ring )
          this.handleWorkflowBufferChange( 'workflowRuntimeRingsBuffer1', workflowRingsBuffer1, InfoBufferType.ring )
          this.handleWorkflowBufferChange( 'workflowRuntimeRingsBuffer2', workflowRingsBuffer2, InfoBufferType.ring )
          this.handleWorkflowBufferChange( 'workflowRuntimeRingsBuffer3', workflowRingsBuffer3, InfoBufferType.ring )
        } else if ( ACLUtils.isDef( workflowAvailableBufferDrivetime ) && workflowAvailableBufferDrivetime ) {
          this.updateWorkflowBufferState( 'workflowRuntimeBuffer', InfoBufferType.drivetime )
        } else if ( ACLUtils.isDef( workflowAvailableBufferWalktime ) && workflowAvailableBufferWalktime ) {
          this.updateWorkflowBufferState( 'workflowRuntimeBuffer', InfoBufferType.walktime )
        }
      }
    } )
  }

  initDefaultBufferVal ( propName, val, bufferType ) {
    requestAnimationFrame( () => {
      const { [propName]: name } = this.props.config
      if ( ACLUtils.notDef( name ) ) {
        this.handleWorkflowBufferChange( propName, val, bufferType )
      }
    } )
  }

  disableStepperTabs () {
    const stepper: any = document.getElementById( this.workflowStepperId )
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this

    const _disableStepperTabs = () => {
      for ( let ii = 1; ii <= 3; ii++ ) {
        const id = this.workflowStepperId + '-' + ii
        const stepperItem = document.getElementById( id )
        // Disable clicking on the stepper tabs
        const header = ACLUtils.queryElement.call( self, '.stepper-item-header', stepperItem )
        if ( header ) { header.style['pointer-events'] = 'none' }
      }
    }

    if ( stepper && stepper['s-p'].length > 0 ) {
      Promise.all( stepper['s-p'] ).then(
        () => {
          _disableStepperTabs()
        } )
    } else {
      _disableStepperTabs()
    }
  }
  // Reprojects geometry (locations and boundaries) to target spatial reference if needed
  // See: client/extensions/widgets/shared-code/lib/lrs/utilities/geometry-utils.ts
  async projectGeometry ( geometry: any, spatialReference: __esri.SpatialReference ): Promise<__esri.Geometry> {
    if ( !geometry ) {
      return Promise.resolve( null )
    }
    if ( geometry.spatialReference?.wkid !== spatialReference?.wkid ) {
      if ( !this._projectionModule || !this._projectionModule.isLoaded() ) {
        this._projectionModule = await loadArcGISJSAPIModule( 'esri/geometry/operators/projectOperator' )
        if ( !this._projectionModule.isLoaded() ) {
          await this._projectionModule.load()
        }
      }

      if ( this._projectionModule && this._projectionModule.isLoaded() ) {
        geometry = this._projectionModule.execute( geometry, spatialReference )
      }
    }

    return Promise.resolve( geometry )
  }

  /**
   * Takes a new hierarchy and syncs the available and selected geography levels from props
   *
   * compares new hierarchy geography levels to props.config.selectedGeographyLevels.  If any
   * of the new hierarchy levels were previously selected, they remain selected.
   *
   * If none of the props selected levels are in the new hierarchy levels, then selected levels will
   * be all the new hierarchy levels.
   *
   * Sets both availableGeographyLevels and selectedGeographyLevels in props.
   * Sets workflowSelectedGeographyLevels in state to match selectedGeographyLevels in props.
   *
   * IMPORTANT: This does NOT update state.activeGeographyLevels which is only updated through user interaction.
   * @param hierarchy
   */
  _syncGeographyLevels = ( hierarchy ) => {

    if ( hierarchy && hierarchy.geographyLevels && hierarchy.geographyLevels.length > 0 ) {
      // update selected states for updated geography levels without losing previous selected states
      const newLevels = hierarchy.geographyLevels
      const newlySelected = []
      const active = this.props.config.selectedGeographyLevels
      const avail = this.props.config.availableGeographyLevels
      // update selected levels list
      if ( active && active.length > 0 ) {
        for ( let ii = 0; ii < newLevels.length; ii++ ) {
          const l = newLevels[ii]
          const existing = avail.includes( l )
          // if the same level was purposely not selected before this, then deselect it
          if ( !existing || ( existing && active.includes( l ) ) ) {
            newlySelected.push( l )
          }
        }
      }
      this.onPropertyChange( 'availableGeographyLevels', newLevels )
      this.onPropertyChange( 'selectedGeographyLevels', newlySelected )

      this.updateState( 'availableGeographyLevels', newLevels )
      this.updateState( 'workflowSelectedGeographyLevels', newlySelected )
    }
  }

  onPropertyChange = ( name, value ) => {
    const { config } = this.props
    if ( !config || ( Object.prototype.hasOwnProperty.call( config, name ) && typeof value !== 'undefined' && value === config[name] ) ) {
      return
    }
    config.set( name, value )
  }
  componentWillUnmount () {
    this._isMounted = false
    // Remove global listeners
    if ( this._onBaLoading ) window.removeEventListener( 'ba-loading', this._onBaLoading as EventListener )
    if ( this._onBaLoadingStart ) window.removeEventListener( 'ba-loading-start', this._onBaLoadingStart as EventListener )
    if ( this._onBaLoadingEnd ) window.removeEventListener( 'ba-loading-end', this._onBaLoadingEnd as EventListener )
    window.removeEventListener( 'selectorPopupOpened', this._onSearchPopupOpened )
    window.removeEventListener( 'selectorPopupClosed', this._onSearchPopupClosed )
    window.removeEventListener( 'message', this._onInfographicPlayerMessage as EventListener )
    // Clear any pending loader hide timer
    if ( this._loadingHideTimer ) {
      clearTimeout( this._loadingHideTimer )
      this._loadingHideTimer = null
    }
    // Clear any pending loading event timer
    if ( this._loadingEventTimer ) {
      clearTimeout( this._loadingEventTimer )
      this._loadingEventTimer = null
    }
  }

  async componentDidMount () {
    // Listen for BA App State ready event
    window.addEventListener( 'ba-app-state-ready', () => {
      this.onAppStateReady()
    } )

    this._isMounted = true
    this.enforceRunInWidgetDisplayHeaderSetting()
    window.addEventListener( 'selectorPopupOpened', this._onSearchPopupOpened )
    window.addEventListener( 'selectorPopupClosed', this._onSearchPopupClosed )
    window.addEventListener( 'message', this._onInfographicPlayerMessage as EventListener )
    // Code from 'componentWillMount'
    const { baSearchType } = this.props.config
    const token = this.getToken()

    // sync searchType
    if ( this.state.baSearchType !== baSearchType ) {
      const t = typeof baSearchType === 'undefined' ? BaSearchType.all : baSearchType
      this.updateState( 'baSearchType', t )
    }
    if ( !this.state.defaultReport ||
      ( this.state.defaultReport && this.state.defaultReport.id !== this.props.config.defaultReport.id ) ||
      ( this.state.defaultReport && this.state.defaultReport.name !== this.props.config.defaultReport.name ) ) {
      this.updateState( 'defaultReport', this.props.config.defaultReport )
    }
    if ( !this.state.countries ) {
      // Show loading while we resolve GE URL and fetch countries/hierarchies
      this.updateState( 'isLoading', true )
      // Wait for the async ge service URL
      await this.getGeoenrichmentServiceUrl()

      const geUrl = this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : 'https://geoenrich.arcgis.com/arcgis/rest/services/World/GeoEnrichmentServer'
      // Now wait for the list of countries (with hierarchies)
      try {
        const c: any = await getCountries( this.props.config.langCode, geUrl, token )

        if ( c ) {
          const hierarchies = getValidHierarchies( this.props.config.sourceCountry, c )
          this.availableHierarchies = hierarchies
          this.onPropertyChange( 'availableHierarchies', hierarchies )
          this.updateState( 'availableHierarchies', hierarchies )

          if ( !this.props.config.selectedHierarchy ) {
            // update new widget selectedHierarchy to the default
            const def = hierarchies.find( o => o.default )
            if ( def ) {
              this.updateState( 'selectedHierarchy', def )
              this.onPropertyChange( 'selectedHierarchy', def.ID )
              this._syncGeographyLevels( def )
            }
          } else {
            const h = hierarchies.find( o => o.ID === this.props.config.selectedHierarchy )
            this.updateState( 'selectedHierarchy', h )
            this._syncGeographyLevels( h )
          }
          this.updateState( 'countries', c )
        }
      } finally {
        this.updateState( 'isLoading', false )
      }
    }

    this.preloadData()

    // Initialize standard infographics for the source country
    this.updateStandardInfographics( this.props.config.sourceCountry, token )

    const { defaultReport, autoSelectLatestDataSource } = this.props.config
    if ( autoSelectLatestDataSource === true ) {
      if ( this.state.overrideWithLatestHierarchy === false ) {
        this.updateState( 'overrideWithLatestHierarchy', true )
      }
    } else {
      this.updateState( 'overrideWithLatestHierarchy', false )
    }
    if ( this._defaultReportIsValid( defaultReport ) ) {
      const wfElem: any = document.getElementById( this.workflowId )
      if ( wfElem && typeof wfElem.setDefaultReport === 'function' ) {
        wfElem.setDefaultReport( defaultReport as ReportInfo )
      }
    }
  }

  // Called when BA App State is found (already exists) or if created: when it has been added
  // to the DOM and is ready
  onAppStateReady () {
    // The service component should be keyed by the widget id to support multiple widgets
    if ( !this._baAppStateServiceComponent ) {
      this._baAppStateServiceComponent = BaAppState.getServiceComponent( this.getWidgetOuterDiv(), this._baAppStateId )
    }
  }

  // prev => previous 'props.config'
  presetBufferSettingsHasChanged ( prev ) {

    const { presetBuffer, presetRingsBuffer1, presetRingsBuffer2, presetRingsBuffer3, presetRingsBufferUnit, syncBufferSettings } = this.props.config
    const { presetDrivetimeBuffer1, presetDrivetimeBuffer2, presetDrivetimeBuffer3, presetDrivetimeBufferUnit } = this.props.config
    const { presetWalktimeBuffer1, presetWalktimeBuffer2, presetWalktimeBuffer3, presetWalktimeBufferUnit } = this.props.config

    if ( syncBufferSettings ) {
      this.onPropertyChange( 'syncBufferSettings', false )
      return true
    }

    // Handle case when widget is initiated before props are set in settings
    if ( typeof prev.presetBuffer === 'undefined' ) return false

    if ( prev.presetBuffer !== presetBuffer ) return true
    if ( prev.presetRingsBuffer1 !== presetRingsBuffer1 ) return true
    if ( prev.presetRingsBuffer2 !== presetRingsBuffer2 ) return true
    if ( prev.presetRingsBuffer3 !== presetRingsBuffer3 ) return true
    if ( prev.presetDrivetimeBuffer1 !== presetDrivetimeBuffer1 ) return true
    if ( prev.presetDrivetimeBuffer2 !== presetDrivetimeBuffer2 ) return true
    if ( prev.presetDrivetimeBuffer3 !== presetDrivetimeBuffer3 ) return true
    if ( prev.presetWalktimeBuffer1 !== presetWalktimeBuffer1 ) return true
    if ( prev.presetWalktimeBuffer2 !== presetWalktimeBuffer2 ) return true
    if ( prev.presetWalktimeBuffer3 !== presetWalktimeBuffer3 ) return true
    if ( prev.presetRingsBufferUnit !== presetRingsBufferUnit ) return true
    if ( prev.presetDrivetimeBufferUnit !== presetDrivetimeBufferUnit ) return true
    if ( prev.presetWalktimeBufferUnit !== presetWalktimeBufferUnit ) return true
    return false
  }

  updateBufferOptionsAndMap () {
    const { workflowEnableSearch, workflowSearchSelectedObject } = this.props.config
    const { workflowRuntimeSearchSelectedObject } = this.state
    const options: Options = this.buildInfographicOptions() as Options
    const info: any = options?.infographicOptions
    const dto: any = info?.drivetimeOptions

    const searchObj = ACLUtils.isDef( workflowRuntimeSearchSelectedObject ) ? JSON.parse( workflowRuntimeSearchSelectedObject ) : !workflowEnableSearch && ACLUtils.isDef( workflowSearchSelectedObject ) ? JSON.parse( workflowSearchSelectedObject ) : undefined
    if ( searchObj && this.mapActions ) {
      // render map location and buffers
      const data = {
        lat: searchObj.lat,
        lon: searchObj.lon,
        bufferType: info?.bufferType,
        bufferUnits: info?.bufferUnits,
        bufferSizes: info?.bufferSizes,
        drivetimeOptions: info?.bufferType === 'drivetime' ? dto : undefined
      }
      this.mapActions.renderLocation( data )
    }
  }

  updateWorkflowBufferState ( name: string, value: any ) {
    // updates the state related to a workflow buffer setting immediately, but
    // when that is done it updates the options and map (if available) using debouncer
    this.updateState( name, value, this.workflowBuffersUpdateDelayed() )
  }

  handleWorkflowBufferChange ( name: string, value: any, bufferType: any ) {
    this.updateWorkflowBufferState( name, value )
    if ( name === 'workflowRuntimeDrivetimeBufferUnit' || name === 'workflowRuntimeWalktimeBufferUnit' ) {
      this.setMaxBuffers( bufferType, value )
    } else {
      this.setMaxBuffers( bufferType )
    }
  }

  // Max values based on limitations of GE
  // Drive time (minutes): 300
  // Drive time (miles): 300
  // Drive time (km): 482.8
  // Walk time (minutes): 540
  // Walk time (miles): 27
  // Walk time (km): 43.45

  setMaxBuffers ( bufferType, bufferUnit = null ) {
    const { workflowRuntimeDrivetimeBufferUnit, workflowRuntimeWalktimeBufferUnit } = this.state
    const useUnit = ACLUtils.isDef( bufferUnit ) ? bufferUnit : bufferType === InfoBufferType.drivetime ? workflowRuntimeDrivetimeBufferUnit : workflowRuntimeWalktimeBufferUnit

    if ( ( bufferType === InfoBufferType.drivetime ) && ACLUtils.isDef( useUnit ) ) {
      if ( useUnit === 'minutes' ) {
        this.updateState( 'maxDriveBuffer', MaxBuffers.DriveMinutes )
        this.enforceMax( InfoBufferType.drivetime, MaxBuffers.DriveMinutes )
      } else if ( useUnit === 'miles' ) {
        this.updateState( 'maxDriveBuffer', MaxBuffers.DriveMile )
        this.enforceMax( InfoBufferType.drivetime, MaxBuffers.DriveMile )
      } else if ( useUnit === 'kilometers' ) {
        this.updateState( 'maxDriveBuffer', MaxBuffers.DriveKm )
        this.enforceMax( InfoBufferType.drivetime, MaxBuffers.DriveKm )
      }
    }
    if ( ( bufferType === InfoBufferType.walktime ) && ACLUtils.isDef( useUnit ) ) {
      if ( useUnit === 'minutes' ) {
        this.updateState( 'maxWalkBuffer', MaxBuffers.WalkMinutes )
        this.enforceMax( InfoBufferType.walktime, MaxBuffers.WalkMinutes )
      } else if ( useUnit === 'miles' ) {
        this.updateState( 'maxWalkBuffer', MaxBuffers.WalkMile )
        this.enforceMax( InfoBufferType.walktime, MaxBuffers.WalkMile )
      } else if ( useUnit === 'kilometers' ) {
        this.updateState( 'maxWalkBuffer', MaxBuffers.WalkKm )
        this.enforceMax( InfoBufferType.walktime, MaxBuffers.WalkKm )
      }
    }
  }

  enforceMax ( bufferType, max ) {
    const { workflowRuntimeDrivetimeBuffer1, workflowRuntimeDrivetimeBuffer2, workflowRuntimeDrivetimeBuffer3, workflowRuntimeWalktimeBuffer1, workflowRuntimeWalktimeBuffer2, workflowRuntimeWalktimeBuffer3 } = this.state

    if ( bufferType === InfoBufferType.drivetime ) {
      if ( workflowRuntimeDrivetimeBuffer1 > max ) this.updateState( 'workflowRuntimeDrivetimeBuffer1', max )
      if ( workflowRuntimeDrivetimeBuffer2 > max ) this.updateState( 'workflowRuntimeDrivetimeBuffer2', max )
      if ( workflowRuntimeDrivetimeBuffer3 > max ) this.updateState( 'workflowRuntimeDrivetimeBuffer3', max )
    } else if ( bufferType === InfoBufferType.walktime ) {
      if ( workflowRuntimeWalktimeBuffer1 > max ) this.updateState( 'workflowRuntimeWalktimeBuffer1', max )
      if ( workflowRuntimeWalktimeBuffer2 > max ) this.updateState( 'workflowRuntimeWalktimeBuffer2', max )
      if ( workflowRuntimeWalktimeBuffer3 > max ) this.updateState( 'workflowRuntimeWalktimeBuffer3', max )
    }
  }

  getWorkflowBuffers () {
    const { workflowEnableUserConfigBuffers, workflowBuffer, workflowRingsBuffer1, workflowRingsBuffer2, workflowRingsBuffer3, workflowRingsBufferUnit, workflowDrivetimeBuffer1, workflowDrivetimeBuffer2, workflowDrivetimeBuffer3, workflowDrivetimeBufferUnit, workflowWalktimeBuffer1, workflowWalktimeBuffer2, workflowWalktimeBuffer3, workflowWalktimeBufferUnit } = this.props.config
    const { workflowRuntimeBuffer, workflowRuntimeRingsBuffer1, workflowRuntimeRingsBuffer2, workflowRuntimeRingsBuffer3, workflowRuntimeRingsBufferUnit, workflowRuntimeDrivetimeBuffer1, workflowRuntimeDrivetimeBuffer2, workflowRuntimeDrivetimeBuffer3, workflowRuntimeDrivetimeBufferUnit, workflowRuntimeWalktimeBuffer1, workflowRuntimeWalktimeBuffer2, workflowRuntimeWalktimeBuffer3, workflowRuntimeWalktimeBufferUnit } = this.state
    let workflowBufferArray
    if ( ACLUtils.isDef( workflowEnableUserConfigBuffers ) && workflowEnableUserConfigBuffers === false ) {
      workflowBufferArray = {
        buffer: workflowBuffer,
        ringsBuffer1: workflowRingsBuffer1,
        ringsBuffer2: workflowRingsBuffer2,
        ringsBuffer3: workflowRingsBuffer3,
        ringsBufferUnit: workflowRingsBufferUnit,
        drivetimeBuffer1: workflowDrivetimeBuffer1,
        drivetimeBuffer2: workflowDrivetimeBuffer2,
        drivetimeBuffer3: workflowDrivetimeBuffer3,
        drivetimeBufferUnit: workflowDrivetimeBufferUnit,
        walktimeBuffer1: workflowWalktimeBuffer1,
        walktimeBuffer2: workflowWalktimeBuffer2,
        walktimeBuffer3: workflowWalktimeBuffer3,
        walktimeBufferUnit: workflowWalktimeBufferUnit
      }
    } else {
      workflowBufferArray = {
        buffer: workflowRuntimeBuffer,
        ringsBuffer1: workflowRuntimeRingsBuffer1,
        ringsBuffer2: workflowRuntimeRingsBuffer2,
        ringsBuffer3: workflowRuntimeRingsBuffer3,
        ringsBufferUnit: workflowRuntimeRingsBufferUnit,
        drivetimeBuffer1: workflowRuntimeDrivetimeBuffer1,
        drivetimeBuffer2: workflowRuntimeDrivetimeBuffer2,
        drivetimeBuffer3: workflowRuntimeDrivetimeBuffer3,
        drivetimeBufferUnit: workflowRuntimeDrivetimeBufferUnit,
        walktimeBuffer1: workflowRuntimeWalktimeBuffer1,
        walktimeBuffer2: workflowRuntimeWalktimeBuffer2,
        walktimeBuffer3: workflowRuntimeWalktimeBuffer3,
        walktimeBufferUnit: workflowRuntimeWalktimeBufferUnit
      }
    }
    return workflowBufferArray
  }

  addResizeListener () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this
    if ( !this.addedResizeListener ) {
      const outer = document.getElementById( self.widgetOuterDivId )
      if ( outer ) {
        this.addedResizeListener = true
        const resizeOb = new ResizeObserver( function ( entries ) {
          //self.updateState('containerWindowSizeChanged', new Date().getTime().toString())
          self.setHeightInfographicTree()
        } )
        resizeOb.observe( outer )
      }
    }
  }

  // TM
  // called just before Render
  static getDerivedStateFromProps ( props, state ) {
    // Get the Widget instance
    const inst = Widget.WidgetRegistry[props.id]
    if ( inst ) {
      // sync props and state
      if ( inst.props.config.useTrafficEnabled !== inst.state.stUseTrafficEnabled ) {
        inst.updateState( 'stUseTrafficEnabled', inst.props.config.useTrafficEnabled )
      }
      if ( inst.props.config.useTrafficChecked !== inst.state.stUseTrafficChecked ) {
        inst.updateState( 'stUseTrafficChecked', inst.props.config.useTrafficChecked )
      }
    }
    return null // No change to state
  }

  updateWorkflowComponent () {
    const wfElem = document.getElementById( this.workflowId ) as any
    if ( wfElem && typeof wfElem.setDrivetimeOptions === 'function' ) {
      // pass our config dto to the workflow element
      const dto: DrivetimeOptions = {
        travelModeData: this.props.config.travelModeData,
        offsetTime: this.props.config.offsetTime || 0,
        offsetHr: this.props.config.offsetHr || '0',
        offsetDay: this.props.config.offsetDay || 'Monday',
        travelDirection: this.props.config.travelDirection || 'Away From Facility',
        trafficType: this.props.config.trafficType || 'live',
        useTrafficEnabled: true, // always true
        useTrafficChecked: this.props.config.useTrafficChecked || false
      }
      wfElem.setDrivetimeOptions( dto )
    }
  }

  // Service token handler called from components when they need a service token.
  async onInfographicNeedsServiceToken ( context, symbol, serviceUrls ) {
    const serviceTokens = await collectServiceTokens( serviceUrls )
    context.onServiceTokens( symbol, serviceTokens )
  }

  // This function ensures the BaAppState service component is in the DOM and ready to be used.
  // If it is not found, it will be added to the top of the widget's container div.  This allows
  // the widget and all child components to use the same BA App State service for syncing state
  // across multiple separate instances of the widget and with the settings panel (which is
  // sandboxed from the main widget component and cannot access the service component directly).
  //
  insertBaAppStateServiceComponent () {
    if ( !this._baAppStateServiceComponent ) {
      const svc = BaAppState.getServiceComponent( this.getWidgetOuterDiv(), this._baAppStateId )
      if ( !svc ) {
        requestAnimationFrame( () => {
          if ( !this._baAppStateServiceComponent ) {

            const baState = BaAppState.getServiceComponent( this.getWidgetOuterDiv(), this._baAppStateId )
            if ( !baState ) {

              const topDiv = document.getElementById( this._topDivId )
              if ( topDiv ) {
                // Insert the BAAppState component
                const topHtml = `<ba-app-state id="${this._baAppStateId}"></ba-app-state>`
                topDiv.insertAdjacentHTML( 'afterbegin', topHtml )

                // force a re-render to ensure the component is found and ready for use
                // and that we go through componentDidUpdate to sync the service info
                this.updateState( 'forceReRender', new Date().getTime().toString() )
              }
            } else {
              this._baAppStateServiceComponent = baState
            }
          }
        } )
      } else {
        this._baAppStateServiceComponent = svc
      }
    }
  }
  componentDidUpdate ( prevProps, prevState ) {

    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this

    if (
      self.props.config.workflowRunInWidget !== prevProps.config.workflowRunInWidget ||
      self.props.config.displayHeader !== prevProps.config.displayHeader
    ) {
      self.enforceRunInWidgetDisplayHeaderSetting()
    }

    if (
      ( prevState?.showInfographicModal !== this.state.showInfographicModal ) ||
      ( prevState?.runInfographicConfig !== this.state.runInfographicConfig ) ||
      ( self.props.config.workflowRunInWidget !== prevProps.config.workflowRunInWidget )
    ) {
      self.syncRunInWidgetHeaderVisibility()
    }

    //
    // Sync BA App State service component with our props.  This is needed to support Settings.tsx
    // which cannot access the state service component directly due to sandboxing.  The Widget runtime
    // is the mediator for syncing state between the two.
    //
    // this._baAppStateId
    const svc: any = BaAppState.getServiceComponent( this.getWidgetOuterDiv(), this._baAppStateId )
    if ( svc && this._baAppStoreName ) {
      const normalizeScope = ( value: any ): BaSearchType => {
        if ( value === 'address' || value === BaSearchType.address ) return BaSearchType.address
        if ( value === 'boundary' || value === BaSearchType.boundary ) return BaSearchType.boundary
        return BaSearchType.all
      }
      const deriveScope = ( cfg: any ): BaSearchType => {
        return normalizeScope( ( typeof cfg?.appSearchScope !== 'undefined' && cfg?.appSearchScope !== null )
          ? cfg.appSearchScope
          : cfg?.baSearchType )
      }
      const deriveLock = ( cfg: any, scope: BaSearchType ): boolean => {
        return ( typeof cfg?.appSearchScopeLocked === 'boolean' )
          ? cfg.appSearchScopeLocked
          : scope !== BaSearchType.all
      }

      //
      // ExB BA Widget 26.1 update:
      // In this version of ExB BA widget, we are using the xstate state machine managed by the
      // ba-app-state service JS web component.  For 26.R01 we handle only the following states:
      //
      //     - searchScope:  for the search dropdown that makes sure what is in settings gets
      //                     applied to the search component.  Scope is set either in settings or
      //                     dynamically by the user in the UI (if not locked).
      //     - searchScopeLocked: to lock the search scope dropdown to prevent user changes
      //                     the option is set in settings.  Settings is the only place to change
      //                     this value - otherwise the lock is off and the UI allows any type of search.
      //     - tokenRequiredCallback:  this is the callback function that the service will call when
      //                     a service token is needed.
      //
      // TOKEN CB:
      // Sync the service token callback to point to the widget's handler (if it is not already set).
      // This handles initial startup and the case where the widget is re-rendered and the service
      // token callback gets lost.  By checking before setting, we avoid unnecessary updates to the
      // service which would trigger unnecessary events to any other widgets listening to the same service.
      const svToken = svc.getState( this._baAppStoreName, this._tokenRequiredCallbackKey )
      const cb = self.onInfographicNeedsServiceToken.bind( self )
      // Check if svToken callback is the same as cb
      if ( svToken !== cb ) {
        svc.setState( this._baAppStoreName, this._tokenRequiredCallbackKey, cb )
      }
      // update the 'use latest data source' toggle state
      const useLatestFlag: boolean = !!this.props.config.autoSelectLatestDataSource
      svc.setState( this._baAppStoreName, this._useLatestDataSourceKey, useLatestFlag )

      if ( !this._widgetHasInitialized ) {
        const newScope = deriveScope( this.props.config )
        const newScopeLocked = deriveLock( this.props.config, newScope )

        svc.setState( this._baAppStoreName, this._searchScopeKey, newScope )
        svc.setState( this._baAppStoreName, this._searchScopeLockedKey, newScopeLocked )

        this._widgetHasInitialized = true
      }
      // Sync the cached infographic data if applies
      const cachedObj = this.props.config.presetCachedInfographicObject

      if ( cachedObj ) {
        const cachedData = svc.getState( this._baAppStoreName, this._cachedInfographicKey, this.props.id )
        if ( !cachedData || JSON.stringify( cachedData ) !== JSON.stringify( cachedObj ) ) {
          BaAppState.logTemp( 'Syncing cached infographic data to BA App State for widget id ' + this.props.id, cachedObj )

          // console.log( '%c WIDGET SET CI state =', 'color:yellow;font-size:13pt', svc, this.props.id )

          svc.setState( this._baAppStoreName, this._cachedInfographicKey, cachedObj, this.props.id )

          // If there is a cached URL, we also need to process it and set the runtime URL in state
          if ( cachedObj.url ) {
            const runtimeUrl: string = appConfigUtils.processResourceUrl( cachedObj.url )
            // console.log( '%c WIDGET SET CI url state =', 'color:yellow;font-size:13pt', svc, this.props.id, cachedObj )

            if ( runtimeUrl ) {
              svc.setState( this._baAppStoreName, this._presetCachedRuntimeResourceUrlKey, runtimeUrl, this.props.id )
            } else {
              svc.setState( this._baAppStoreName, this._presetCachedRuntimeResourceUrlKey, undefined, this.props.id )
            }
          }
        }
      } else {
        // console.log( '%c WIDGET Clear CI state =', 'color:yellow;font-size:13pt', svc, this.props.id )

        // clear the state info for the cached object (supporting onClearCache)
        svc.setState( this._baAppStoreName, this._cachedInfographicKey, cachedObj, this.props.id )
        svc.setState( this._baAppStoreName, this._presetCachedRuntimeResourceUrlKey, undefined, this.props.id )
      }

      //
      // Check if the searchScope and searchScopeLocked in the service are different from props, if so
      // update service to match props
      const searchScope = svc.getState( this._baAppStoreName, this._searchScopeKey, this.props.id )
      const searchScopeLocked = svc.getState( this._baAppStoreName, this._searchScopeLockedKey, this.props.id )
      const nextScope = deriveScope( self.props.config )
      const prevScope = deriveScope( prevProps.config )
      const nextLock = deriveLock( self.props.config, nextScope )
      const prevLock = deriveLock( prevProps.config, prevScope )

      // Always reconcile scope with persisted config. Service can be reset by other
      // lifecycle events without a corresponding props change.
      const scopeIsChanging = nextScope !== prevScope
      if ( scopeIsChanging || nextScope !== searchScope ) {
        svc.setState( this._baAppStoreName, this._searchScopeKey, nextScope, this.props.id )
      }
      // SEARCH SCOPE LOCKED:
      const scopeLockIsChanging = nextLock !== prevLock
      if ( scopeLockIsChanging || nextLock !== searchScopeLocked ) {
        svc.setState( this._baAppStoreName, this._searchScopeLockedKey, nextLock, self.props.id )
      }
    }
    this.checkIfReadyNotificationsTodo()

    const baStateElem = BaAppState.getServiceComponent( this.getWidgetOuterDiv(), this._baAppStateId )
    // console.log( '%c WIDGET svc =', 'color:yellow;font-size:13pt', baStateElem, this.props.id )

    if ( baStateElem ) {
      if ( !this._baAppStateServiceComponent ) {
        this._baAppStateServiceComponent = baStateElem
      }
    } else {
      // This inserts the BaAppState service component first time only at the top of the widget
      this.insertBaAppStateServiceComponent()
    }

    // Loader hysteresis: ensure a minimum visible duration when turning off
    if ( prevState && prevState.isLoading !== this.state.isLoading ) {
      if ( this.state.isLoading ) {
        // Going from false -> true: show immediately and record timestamp
        if ( this._loadingHideTimer ) {
          clearTimeout( this._loadingHideTimer )
          this._loadingHideTimer = null
        }
        this._loadingShownAt = Date.now()
        if ( !this.state.showLoader ) {
          // Avoid extra setState if already visible
          this.setState( { showLoader: true } )
        }
      } else {
        // Going from true -> false: hide after min duration
        const now = Date.now()
        const shownAt = this._loadingShownAt || now
        const elapsed = now - shownAt
        const remain = Math.max( 0, this._loadingMinShowMs - elapsed )

        if ( this._loadingHideTimer ) {
          clearTimeout( this._loadingHideTimer )
          this._loadingHideTimer = null
        }

        if ( remain > 0 ) {
          this._loadingHideTimer = setTimeout( () => {
            this._loadingHideTimer = null
            // Only hide if still not loading
            if ( !this.state.isLoading && this.state.showLoader ) {
              this.setState( { showLoader: false } )
            }
          }, remain )
        } else if ( this.state.showLoader ) {
          this.setState( { showLoader: false } )
        }
      }
    }

    const {
      workflowEnableSearch, workflowEnableUserConfigBuffers, workflowEnableInfographicChoice,
      workflowRingsBuffer1, workflowRingsBuffer2, workflowRingsBuffer3, workflowDrivetimeBuffer1,
      workflowDrivetimeBuffer2, workflowDrivetimeBuffer3, workflowWalktimeBuffer1,
      workflowWalktimeBuffer2, workflowWalktimeBuffer3, workflowRingsBufferUnit,
      workflowDrivetimeBufferUnit, workflowWalktimeBufferUnit
    } = self.props.config

    const {
      widgetMode, sourceCountry, baSearchType, runReportOnClick, reportList, displayHeader,
      igBackgroundColor, selectedGeographyLevels, searchbarEnabled, useTrafficEnabled, useTrafficChecked,
      viewMode, headerColor, headerTextColor, zoomLevel, allowExport, pdf, imageExport, dynamicHtml, excel
    } = self.props.config

    const {
      workflowSearchSelectedObject, presetSearchSelectedObject, workflowAvailableBufferRings,
      workflowAvailableBufferDrivetime, workflowAvailableBufferWalktime
    } = self.props.config

    const {
      stencilPropChangeConnected, selectedCountry, showInfographicModal, currentStep,
      workflowRuntimeSearchSelectedObject, workflowRuntimeSelectedFeatureObjectFirstTime,
      workflowRuntimeBuffer, mapSearchbarEnabled
    } = self.state

    const { workflowRuntimeSelectedFeatureObject, user } = self.props

    const popover = document.getElementById( this.widgetOuterDivId )
    if ( popover ) {
      const ancestor = popover.closest( 'div.popper-box' )
      if ( ancestor ) {
        popover.style.height = '100%'
      }
    }
    self._presetBuffersHaveChanged = self.props.config.presetBuffersHaveChanged // || self.presetBufferSettingsHasChanged(prevProps.config)

    if ( typeof searchbarEnabled !== 'undefined' && searchbarEnabled !== mapSearchbarEnabled ) {
      const showMapSearch = searchbarEnabled
      self.updateState( 'mapSearchbarEnabled', searchbarEnabled, () => {
        // update the map search controls
        if ( self.mapActions ) {
          if ( showMapSearch ) {
            self.mapActions.showSearch = true
            self.mapActions.initSearchControl()
          } else {
            MapSearch.removeSearchbars()
          }
        }
      } )
    }

    // If user has changed, re-initialize GE URL which also checks permissions/privileges
    if ( self.props.user !== prevProps.user ) {
      self.updateState( 'initializedGEUrl', false )
      self.getGeoenrichmentServiceUrl()
    }
    if ( useTrafficEnabled !== prevProps.config.useTrafficEnabled ) {
      self.updateState( 'stUseTrafficEnabled', useTrafficEnabled )
    }
    if ( useTrafficChecked !== prevProps.config.useTrafficChecked ) {
      self.updateState( 'stUseTrafficChecked', useTrafficChecked )
    }
    // sync the workflow element drivetime options with our config
    self.updateWorkflowComponent()

    const langCode = getAppStore().getState().appContext.locale || 'en'

    if ( self.props.config !== prevProps.config ) {
      self.preloadData()
    }
    if ( self.state.baSearchType !== baSearchType ) {
      const t = typeof baSearchType === 'undefined' ? BaSearchType.all : baSearchType
      self.updateState( 'baSearchType', t )
    }


    // Geography levels
    function _delaySetActiveLevels () {
      const wfElem = ACLUtils.queryElementById.call( self, self.workflowId )
      if ( wfElem ) {
        wfElem.setActiveLevels( selectedGeographyLevels )
      }
    }

    // Geography levels: order of precedence:
    // 1. props.config.selectedGeographyLevels
    // 2. state.workflowSelectedGeographyLevels
    // 3. selectedGeographyLevels from settings changes
    if ( self.props.config.selectedGeographyLevels
      && ( !self.state.workflowSelectedGeographyLevels || !self.shallowObjectComparisonAreEqual( self.state.workflowSelectedGeographyLevels, self.props.config.selectedGeographyLevels ) ) ) {
      // update from props
      setTimeout( _delaySetActiveLevels, 300 )
      self.updateState( 'workflowSelectedGeographyLevels', self.props.config.selectedGeographyLevels )
    }

    // Default report
    if ( ( !self.state.defaultReport && self.props.config.defaultReport ) ||
      ( self.state.defaultReport && self.props.config.defaultReport && self.state.defaultReport.id !== self.props.config.defaultReport.id ) ||
      ( self.state.defaultReport && self.props.config.defaultReport && self.state.defaultReport.name !== self.props.config.defaultReport.name ) ) {
      self.updateState( 'defaultReport', self.props.config.defaultReport, () => {
        // Update the workflow component default report to match
        const wfElem: any = document.getElementById( self.workflowId )
        if ( wfElem && wfElem.setDefaultReport ) {
          wfElem.setDefaultReport( self.props.config.defaultReport as ReportInfo )
        }
      } )
    }

    //self.updateTabStatusStates()
    self.addResizeListener()
    self.setOverflowVisible()

    if ( !stencilPropChangeConnected ) {
      const id = '#' + self.props.id
      const elem = document.querySelector( id )
      if ( elem ) {
        // @ts-expect-error: Unreachable code error
        elem.onPropChange( self.onSettingChanged, self )
        self.updateState( 'stencilPropChangeConnected', true )
        //self.stencilPropChangeConnected = true
      }
    }
    if ( sourceCountry !== selectedCountry ) {
      self.updateState( 'selectedCountry', sourceCountry )
      // Update standard infographics when country changes
      self.updateStandardInfographics( sourceCountry, self.getToken() )
    }

    if ( widgetMode === Mode.Workflow ) {
      // set buffer tab content selected states
      const ringTabTitle = document.getElementById( 'tab-title-rings-' + self.props.id )
      const dtTabTitle = document.getElementById( 'tab-title-drive-' + self.props.id )
      const wtTabTitle = document.getElementById( 'tab-title-walk-' + self.props.id )
      const ringTab = document.getElementById( 'tab-rings-' + self.props.id )
      const dtTab = document.getElementById( 'tab-drive-' + self.props.id )
      const wtTab = document.getElementById( 'tab-walk-' + self.props.id )
      if ( ringTabTitle && dtTabTitle && wtTabTitle && ringTab && dtTab && wtTab ) {
        ringTabTitle.removeAttribute( 'selected' )
        dtTabTitle.removeAttribute( 'selected' )
        wtTabTitle.removeAttribute( 'selected' )
        ringTab.removeAttribute( 'selected' )
        dtTab.removeAttribute( 'selected' )
        wtTab.removeAttribute( 'selected' )

        if ( workflowRuntimeBuffer === InfoBufferType.ring ) {
          ringTabTitle.setAttribute( 'selected', '' )
          ringTab.setAttribute( 'selected', '' )
        } else if ( workflowRuntimeBuffer === InfoBufferType.drivetime ) {
          dtTabTitle.setAttribute( 'selected', '' )
          dtTab.setAttribute( 'selected', '' )
        } else if ( workflowRuntimeBuffer === InfoBufferType.walktime ) {
          wtTabTitle.setAttribute( 'selected', '' )
          wtTab.setAttribute( 'selected', '' )
        }
      }

      const obj = workflowSearchSelectedObject ? JSON.parse( workflowSearchSelectedObject ) : undefined
      const showBuffers = ( !obj || ( self.isLocationType( obj.type ) ) )
      self.updateState( 'displayBuffers', showBuffers )
    } else {
      // Preset mode only
      //
      // Watch the search object changes so we can update a linked map
      if ( self._presetBuffersHaveChanged ) {
        if ( self.mapActions ) {
          self.mapActions.updateMapBuffers()
          self._presetBuffersHaveChanged = false
        }
        self.onPropertyChange( 'presetBuffersHaveChanged', false ) // reset
      }
      const presetSearchHasChanged = prevProps.config.presetSearchSelectedObject !== presetSearchSelectedObject

      // PERFORMANCE: Only process if preset payload changed or buffers changed
      if ( presetSearchHasChanged || self._presetBuffersHaveChanged ) {
        // Skip duplicate processing when payload has already been applied
        if ( self._presetBuffersHaveChanged || ( presetSearchSelectedObject && presetSearchSelectedObject !== self._lastAppliedPresetSearch ) ) {
          // Clear cache before calling onSiteObjectChanged since config changed
          self._cachedInfographicOptions = null
          self._lastOptionsConfig = null
          self.onSiteObjectChanged( { origin: 'settingsPreset', data: presetSearchSelectedObject } )
        }
      }
    }

    if ( self.getBackgroundColorFromProps || prevProps.config.igBackgroundColor !== igBackgroundColor ) {
      self.getBackgroundColorFromProps = false
      self.updateState( 'spinnerBackgroundColor', igBackgroundColor )
    }

    // If display or export settings change while a workflow modal is active, close it so it can
    // be reopened with fresh options based on the new settings.
    const workflowModalRefreshSettingChanged =
      prevProps.config.viewMode !== viewMode ||
      prevProps.config.igBackgroundColor !== igBackgroundColor ||
      prevProps.config.displayHeader !== displayHeader ||
      prevProps.config.headerColor !== headerColor ||
      prevProps.config.headerTextColor !== headerTextColor ||
      prevProps.config.zoomLevel !== zoomLevel ||
      prevProps.config.allowExport !== allowExport ||
      prevProps.config.pdf !== pdf ||
      prevProps.config.imageExport !== imageExport ||
      prevProps.config.dynamicHtml !== dynamicHtml ||
      prevProps.config.excel !== excel

    if ( workflowModalRefreshSettingChanged && showInfographicModal && self.state?.runInfographicConfig ) {
      self.closeWorkflowModal()
    }

    if ( ( ( prevProps.config.runReportOnClick !== runReportOnClick ) || ( prevProps.config.widgetMode !== widgetMode ) ) && self.mapActions ) {
      // Only turn on for Preset mode
      self.mapActions.allowMapClicks( widgetMode === Mode.Preset && runReportOnClick )
    }

    if ( prevProps.config.workflowSearchSelectedObject !== workflowSearchSelectedObject ) {
      // Workflow search results changed
      // TODO: package up the results and pass to onSiteObjectChanged
      self.onSiteObjectChanged( { origin: 'settingsWorkflow', data: workflowSearchSelectedObject } )
    }

    if ( prevProps.workflowRuntimeSelectedFeatureObject !== workflowRuntimeSelectedFeatureObject || workflowRuntimeSelectedFeatureObjectFirstTime ) {
      self.updateState( 'workflowRuntimeSelectedFeatureObjectFirstTime', false )
      // Workflow search results changed
      self.onMapChanges( workflowRuntimeSelectedFeatureObject, self )
    }

    // Stepper tab change
    const stepper = document.getElementById( self.workflowStepperId ) as any
    if ( stepper ) {
      self.disableStepperTabs()

      // handle modal close event tab sync with our currentStep
      if ( prevState.showInfographicModal !== showInfographicModal ) {
        if ( stepper['s-p'].length > 0 ) {
          const promise = stepper['s-p'][0] as Promise<any>
          promise.then(
            () => {
              self.stepGoTo( stepper, currentStep )
            } )
        }
      }

      const goToFirstStep = ( stepper: any ) => {
        if ( stepper['s-p'].length > 0 ) {
          const promise = stepper['s-p'][0] as Promise<any>
          promise.then(
            () => {
              self.stepGoTo( stepper, 1 )
              self.updateState( 'currentStep', 1 )
            } )
        } else {
          self.stepGoTo( stepper, 1 )
          self.updateState( 'currentStep', 1 )
        }
      }

      if ( prevProps.config.workflowAvailableBufferRings !== workflowAvailableBufferRings || prevProps.config.workflowAvailableBufferDrivetime !== workflowAvailableBufferDrivetime || prevProps.config.workflowAvailableBufferWalktime !== workflowAvailableBufferWalktime ) {
        self.initDefaultBufferTab( true )
      }

      if ( prevProps.config.workflowRingsBuffer1 !== workflowRingsBuffer1 ) self.initDefaultBufferVal( 'workflowRuntimeRingsBuffer1', workflowRingsBuffer1, InfoBufferType.ring )
      if ( prevProps.config.workflowRingsBuffer2 !== workflowRingsBuffer2 ) self.initDefaultBufferVal( 'workflowRuntimeRingsBuffer2', workflowRingsBuffer2, InfoBufferType.ring )
      if ( prevProps.config.workflowRingsBuffer3 !== workflowRingsBuffer3 ) self.initDefaultBufferVal( 'workflowRuntimeRingsBuffer3', workflowRingsBuffer3, InfoBufferType.ring )
      if ( prevProps.config.workflowDrivetimeBuffer1 !== workflowDrivetimeBuffer1 ) self.initDefaultBufferVal( 'workflowRuntimeDrivetimeBuffer1', workflowDrivetimeBuffer1, InfoBufferType.drivetime )
      if ( prevProps.config.workflowDrivetimeBuffer2 !== workflowDrivetimeBuffer2 ) self.initDefaultBufferVal( 'workflowRuntimeDrivetimeBuffer2', workflowDrivetimeBuffer2, InfoBufferType.drivetime )
      if ( prevProps.config.workflowDrivetimeBuffer3 !== workflowDrivetimeBuffer3 ) self.initDefaultBufferVal( 'workflowRuntimeDrivetimeBuffer3', workflowDrivetimeBuffer3, InfoBufferType.drivetime )
      if ( prevProps.config.workflowWalktimeBuffer1 !== workflowWalktimeBuffer1 ) self.initDefaultBufferVal( 'workflowRuntimeWalktimeBuffer1', workflowWalktimeBuffer1, InfoBufferType.walktime )
      if ( prevProps.config.workflowWalktimeBuffer1 !== workflowWalktimeBuffer1 ) self.initDefaultBufferVal( 'workflowRuntimeWalktimeBuffer2', workflowWalktimeBuffer2, InfoBufferType.walktime )
      if ( prevProps.config.workflowWalktimeBuffer1 !== workflowWalktimeBuffer1 ) self.initDefaultBufferVal( 'workflowRuntimeWalktimeBuffer3', workflowWalktimeBuffer3, InfoBufferType.walktime )
      if ( prevProps.config.workflowRingsBufferUnit !== workflowRingsBufferUnit ) self.initDefaultBufferVal( 'workflowRuntimeRingsBufferUnit', workflowRingsBufferUnit, InfoBufferType.ring )
      if ( prevProps.config.workflowDrivetimeBufferUnit !== workflowDrivetimeBufferUnit ) self.initDefaultBufferVal( 'workflowRuntimeDrivetimeBufferUnit', workflowDrivetimeBufferUnit, InfoBufferType.drivetime )
      if ( prevProps.config.workflowWalktimeBufferUnit !== workflowWalktimeBufferUnit ) self.initDefaultBufferVal( 'workflowRuntimeWalktimeBufferUnit', workflowWalktimeBufferUnit, InfoBufferType.walktime )

      if ( prevState.workflowRuntimeSearchSelectedObject !== workflowRuntimeSearchSelectedObject ) {
        if ( !self.stepIsVisible( Steps.Search ) ) {
          goToFirstStep( stepper )
        }
      }

      // Workflow Allow Search was toggled
      if ( prevProps.config.workflowEnableSearch !== workflowEnableSearch ) {
        goToFirstStep( stepper )
      }

      // Workflow User Configured Buffers was toggled
      if ( prevProps.config.workflowEnableUserConfigBuffers !== workflowEnableUserConfigBuffers ) {
        goToFirstStep( stepper )
      }

      // Workflow Allow Infographic Choice was toggled
      if ( prevProps.config.workflowEnableInfographicChoice !== workflowEnableInfographicChoice ) {
        goToFirstStep( stepper )
      }
      //  * Note on regarding addEventListener with calcite components:
      //     Adam Tirella said that in React, their component event hookup using
      //     component element attributes wont work.  They have another library that
      //     needs to be used to enable the attribute event hookup:

      //     https://developers.arcgis.com/calcite-design-system/frameworks/#calcite-components-react

      //     He said they are shipping that library along side of their calcite components Q1
    }
    const searchElem = document.getElementById( self.workflowRuntimeSearchId )
    self.buildInfographicOptions() // moved from the render() function

    if ( widgetMode === Mode.Workflow ) {
      if ( searchElem ) {
        // @ts-expect-error: Unreachable code error
        searchElem.setColorTheme( 'light' )
        // @ts-expect-error: Unreachable code error
        // eslint-disable-next-line @typescript-eslint/unbound-method
        searchElem.onPropChange( self.onBASearchResultChange, self )
      }
      const reportsElem = document.getElementById( self.workflowReportListId )
      if ( reportsElem ) {
        const tok = self.getToken()
        const activeH = getActiveHierarchyId( self.props.config.selectedHierarchy, self.props.config.autoSelectLatestDataSource )
        // @ts-expect-error: Unreachable code error
        reportsElem.initialize( user.username, tok, window.jimuConfig.hostEnv, sourceCountry, activeH, langCode, JSON.stringify( reportList ) )
        return true
      }
      return false
    }
  }
  getWidgetOuterDiv (): HTMLDivElement | null {
    return this.widgetOuterDivRef.current
  }

  // Need to dynamically set the height of the Arcgis Infographic Tree to take into account
  // the intro text.  This needs to be done when the tab is selected as the row then becomes
  // available and can have the height detected
  setHeightInfographicTree () {
    const reportTree = document.getElementById( this.workflowReportListId )

    if ( !reportTree ) return

    let workflowHt
    let suggestionHeight = 150
    let introReportsRowHeight = 0
    const widgetElem = document.getElementById( this.widgetOuterDivId )
    const introReportsRowElem = document.getElementById( this.workflowIntroTextReportsRowId )
    if ( introReportsRowElem && introReportsRowElem.clientHeight > 0 ) {
      introReportsRowHeight = introReportsRowElem.clientHeight
    }
    if ( widgetElem ) {
      workflowHt = widgetElem.clientHeight
      if ( workflowHt > 220 ) {
        suggestionHeight = workflowHt - 200
      }
    }
    let reportsHeight = suggestionHeight - introReportsRowHeight + 158

    // Enforce a minimum height, and hide if too small
    if ( widgetElem ) {
      workflowHt = widgetElem.clientHeight
      if ( workflowHt < 175 ) {
        reportsHeight = 0
      } else if ( workflowHt <= 220 ) {
        reportsHeight = 40
      }
    }

    reportTree.style.setProperty( 'height', reportsHeight + 'px' )
  }

  localeString ( string ) {
    return this.props.intl.formatMessage( {
      id: string,
      defaultMessage: defaultMessages[string]
    } )
  }

  localeHtmlString ( string ) {
    const translated = ( this.props.intl as any )?.messages?.[string]
    if ( typeof translated === 'string' ) {
      return translated
    }
    return defaultMessages[string] || ''
  }

  promptSignIn () {
    SessionManager.getInstance().signIn()
  }

  isLocationType ( v ) {
    if ( typeof v !== 'string' ) {
      return false
    }
    return ( v && ( v?.toLowerCase() === 'location' || v?.toLowerCase() === 'point' ) )
  }

  getLatLon ( obj ) {
    const results = undefined
    if ( obj ) {
      if ( obj.lat && obj.lon ) {
        return { latitude: obj.lat, longitude: obj.lon }
      } else if ( obj.latitude && obj.longitude ) {
        return { latitude: obj.latitude, longitude: obj.longitude }
      }
    }
    return results
  }

  // Replacement for getLatLon that can projects coordinates if needed.
  // Note: This is async and must be awaited.
  //
  // Input: obj = geometry object with either lat/lon or x/y
  // Output: { latitude, longitude } or undefined
  //
  async getReprojectedLatLon ( obj ) {
    const results = undefined
    if ( obj ) {
      const hasLatLon = ( obj.lat != null && obj.lon != null ) || ( obj.latitude != null && obj.longitude != null )
      if ( !hasLatLon && obj.geometry && obj.geometry.x != null && obj.geometry.y != null ) {
        const outSr = new SpatialReference( { wkid: 3857 } )
        return await this.projectGeometry( obj.geometry, outSr )
      } else {
        if ( obj.lat && obj.lon ) {
          return { latitude: obj.lat, longitude: obj.lon }
        } else if ( obj.latitude && obj.longitude ) {
          return { latitude: obj.latitude, longitude: obj.longitude }
        }
      }
    }
    return results
  }

  // * onMapChanges
  //    *      Handles updates from map actions including
  //    *      feature click, and search results
  //    * @param results = { type, latitude, longitude, rings, displayName }
  //    *
  onMapChanges ( results, context ) {
    switch ( results.type ) {
      case 'point': {
        if ( context ) {
          if ( context.onSiteObjectChanged ) {
            const obj = { origin: 'mapClick', data: results }
            context.onSiteObjectChanged( obj )
          }
        }
        break
      }
      case 'polygon': {
        if ( context ) {
          if ( context.onSiteObjectChanged ) {
            const obj = { origin: 'mapClick', data: results }
            context.onSiteObjectChanged( obj )
          }
        }
        break
      }
    }
  }

  onBASearchResultChange ( context: any, stateObj: any ) {
    const result = { origin: 'basearch', ctx: context, state: stateObj } as any
    context.onSiteObjectChanged( result )
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // onSiteObjectChanged()
  //
  // When we change the location or boundary being used for reports, the
  // notification goes through here.  The call can come from one of these sources:
  //
  //  1) The 'onBASearchResultChange' callback [just above] that comes from arcgis-ba-search OnPropChange
  //  2) A notification from Settings that the search result has changed (using user.props.config)
  //  3) Another source is a direct callback from the map-actions handler when the user clicks
  //     on a linked map, or when the user selects a search result from the embedded
  //     map-search control.
  //
  // In either case, we take the search result and set the state variables,
  // which then triggers another render in the widget.  At the same time,
  // we notify the MapActions that we need to update the buffers or geometry
  // showing on the linked map. The buffer display on the map is dependent on
  // the either 1) workflow settings preset the buffers or 2) in workflow the
  // user has viewed the buffer step and accepted the buffers by clicking Next
  //
  async onSiteObjectChanged ( result: any ) {
    if ( !result ) return

    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this
    const { selectedHierarchy } = self.props.config
    self.lastSiteObjectType = result.origin
    let searchObject: any = {}

    switch ( result.origin ) {
      //
      // arcgis-ba-search RESULTS
      case ( 'basearch' ): {
        // const context = result.ctx
        const stateObj = result.state
        let mapLocation: any
        let mapBoundary: any
        //
        // search results location
        if ( self.isLocationType( stateObj.searchResults.type ) ) {
          const location = await self.getReprojectedLatLon( stateObj.searchResults.location )
          searchObject = {
            type: 'location',
            name: stateObj.searchResults.name,
            address: stateObj.searchResults.address,
            lat: location?.latitude,
            lon: location?.longitude
          }
          mapLocation = location
          //
          // search results geography
        } else if ( stateObj.searchResults.type === 'geography' ) {
          // Map polygon is rendered in BA Map Actions, change color there and here if needed
          const reportSymbol = self.getDefaultReportSymbol()

          const g: any = {
            type: 'polygon',
            rings: stateObj.searchResults.geometry,
            spatial: { wkid: 102100 },
            latitude: 34.055561,
            longitude: -117.182602
          }
          searchObject = {
            type: 'geography',
            name: stateObj.searchResults.title,
            areaId: stateObj.searchResults.areaId,
            geography: {
              sourceCountry: stateObj.searchResults.attributes.CountryAbbr,
              levelId: stateObj.searchResults.attributes.DataLayerID,
              hierarchy: selectedHierarchy,
              id: stateObj.searchResults.areaId,
              attributes: stateObj.searchResults.attributes,
              symbol: reportSymbol
            },
            geometry: g
          }
          mapBoundary = g
        }

        if ( self.props.config.widgetMode === Mode.Preset && self.state.presetSearchObject && self.shallowObjectComparisonAreEqual( self.state.presetSearchObject, searchObject ) ) {
          return
        }

        if ( self.mapActions ) {
          if ( mapLocation ) {
            // render map location and buffers
            const options: Options = self.buildInfographicOptions() as Options
            const info: any = options?.infographicOptions
            const dto: any = info?.drivetimeOptions
            const data = {
              lat: mapLocation?.latitude,
              lon: mapLocation?.longitude,
              bufferType: info?.bufferType,
              bufferUnits: info?.bufferUnits,
              bufferSizes: info?.bufferSizes,
              drivetimeOptions: info?.bufferType === 'drivetime' ? dto : undefined
            }
            self.mapActions.renderLocation( data )
          } else if ( mapBoundary ) {
            self.mapActions.renderBoundary( mapBoundary )
          }
        }
        if ( self.props.config.widgetMode === Mode.Preset ) {
          self.updateState( 'workflowRuntimeSearchSelectedObject', null )
          self.updateState( 'presetSearchObject', searchObject )
        } else {
          self.updateState( 'presetSearchObject', null )
          self.updateState( 'workflowRuntimeSearchSelectedObject', JSON.stringify( searchObject ) )
        }
        break
      }
      case ( 'settingsPreset' ): {
        if ( !result.data ) { return }

        self._lastAppliedPresetSearch = result.data

        const d = JSON.parse( result.data )

        // PERFORMANCE: Skip processing if data hasn't changed
        if ( self.state.presetSearchObject && self.shallowObjectComparisonAreEqual( self.state.presetSearchObject, d ) ) {
          return
        }

        const location = await self.getReprojectedLatLon( d )

        if ( self.isLocationType( d.type ) ) {
          if ( self.mapActions ) {
            // render map location and buffers
            const options: Options = self.buildInfographicOptions() as Options
            const info: any = options?.infographicOptions
            const dto: any = info?.drivetimeOptions

            const loc = {
              lat: location?.latitude,
              lon: location?.longitude,
              bufferType: info?.bufferType,
              bufferUnits: info?.bufferUnits,
              bufferSizes: info?.bufferSizes,
              drivetimeOptions: info?.bufferType === 'drivetime' ? dto : undefined
            }
            self.mapActions.renderLocation( loc )
          }
        } else if ( d.type === 'geography' ) {
          // TODO: check if projection is needed here on rings to a valid wkid
          if ( self.mapActions ) {
            const g: any = {
              type: 'polygon',
              rings: d.geometry?.rings,
              spatial: { wkid: 102100 },
              latitude: 34.055561,
              longitude: -117.182602
            }
            self.mapActions.renderBoundary( g )
          }
        }

        self.updateState( 'workflowRuntimeSearchSelectedObject', null )
        self.updateState( 'presetSearchObject', d )
        break
      }
      case ( 'settingsWorkflow' ): {
        if ( !result?.data ) { return }
        const d = JSON.parse( result.data )
        const location = await self.getReprojectedLatLon( d )
        // search results location
        if ( self.isLocationType( d.type ) ) {
          searchObject = {
            type: 'location',
            name: d.name,
            address: d.address,
            lat: location?.latitude,
            lon: location?.longitude
          }
          if ( self.mapActions ) {
            // render map location and buffers
            const options: Options = self.buildInfographicOptions() as Options
            const info: any = options?.infographicOptions
            const dto: any = info?.drivetimeOptions
            const data = {
              lat: location?.latitude,
              lon: location?.longitude,
              bufferType: info?.bufferType,
              bufferUnits: info?.bufferUnits,
              bufferSizes: info?.bufferSizes,
              drivetimeOptions: info?.bufferType === 'drivetime' ? dto : undefined
            }
            self.mapActions.renderLocation( data )
          }
          //
          // search results geography
        } else if ( d.type === 'geography' ) {
          // Map polygon is rendered in BA Map Actions, change color there and here if needed
          const reportSymbol = self.getDefaultReportSymbol()

          const g: any = {
            type: 'polygon',
            rings: d.geometry?.rings,
            spatial: { wkid: 102100 },
            latitude: 34.055561,
            longitude: -117.182602
          }
          searchObject = {
            type: 'geography',
            name: d.areaName,
            areaId: d.areaId,
            geography: d.geography || undefined,
            geometry: g,
            symbol: reportSymbol
          }
          if ( self.mapActions ) {
            self.mapActions.renderBoundary( g )
          }
        }
        self.updateState( 'presetSearchObject', null )
        self.updateState( 'workflowRuntimeSearchSelectedObject', JSON.stringify( searchObject ) )
        break
      }
      //
      // MAP WIDGET SEARCH CONTROL results (always a location)
      case ( 'mapSearch' ): {
        if ( !result?.data ) { return }

        // Resulting data from the embedded map search control is always a
        // location search result, or undefined if cleared
        const d = result.data
        const location = await self.getReprojectedLatLon( d )

        // package the search result for props
        if ( self.isLocationType( d.type ) ) {
          searchObject = {
            type: 'location',
            name: d.displayName,
            address: '',
            lat: location?.latitude,
            lon: location?.longitude
          }
          if ( self.props.config.widgetMode === Mode.Preset ) {
            //
            // Preset Mode
            // changes using map search only affect the runtime items
            self.updateState( 'presetSearchObject', d )
            //
          } else {
            //
            // Workflow Mode
            self.updateState( 'presetSearchObject', null )
            self.updateState( 'workflowRuntimeSearchSelectedObject', JSON.stringify( searchObject ) )
          }

          if ( self.mapActions ) {
            // render map location and buffers
            const options: Options = self.buildInfographicOptions() as Options
            const info: any = options?.infographicOptions
            const dto: any = info?.drivetimeOptions
            const data = {
              lat: location?.latitude,
              lon: location?.longitude,
              bufferType: info?.bufferType,
              bufferUnits: info?.bufferUnits,
              bufferSizes: info?.bufferSizes,
              drivetimeOptions: info?.bufferType === 'drivetime' ? dto : undefined
            }
            self.mapActions.renderLocation( data )
          }
        }
        break
      }
      //
      // USER CLICKED MAP FEATURE
      case ( 'mapClick' ): {
        if ( !result?.data ) { return }
        /* result contains:
         {
         origin: 'mapClick',
         data: response
         }
         */
        if ( result?.data ) {
          const location = await self.getReprojectedLatLon( result.data )

          switch ( result.data.type ) {
            //
            // point feature click
            case ( 'point' ): {
              const mapName = self.localeString( 'mapFeature' )
              const displayName = ( result.data.displayName && ACLUtils.hasText( result.data.displayName ) ) || ( ACLUtils.isDef( result.data.displayName ) && ACLUtils.isNumber( result.data.displayName ) ) ? result.data.displayName.toString() : mapName
              const attributes = result.data.attributes ? result.data.attributes : {}

              // const projection = await loadArcGISJSAPIModule( 'esri/geometry/projection' )
              // projection.load().then( () => {
              //   const projectedGeometry = projection.project( result.data.geometry, new SpatialReference( { wkid: 3857 } ) )
              const point: Point = location as Point

              searchObject = {
                type: 'location',
                name: displayName,
                address: '',
                lat: point?.latitude,
                lon: point?.longitude,
                attributes
              }
              // In Preset mode, store in presetSearchObject; in Workflow mode, use workflowRuntimeSearchSelectedObject
              if ( self.props.config.widgetMode === Mode.Preset ) {
                self.updateState( 'presetSearchObject', searchObject )
              } else {
                self.updateState( 'presetSearchObject', null )
                self.updateState( 'workflowRuntimeSearchSelectedObject', JSON.stringify( searchObject ) )
              }

              if ( self.mapActions ) {
                // render map location and buffers
                const options: Options = self.buildInfographicOptions() as Options
                const info: any = options?.infographicOptions
                const dto: any = info?.drivetimeOptions
                const data = {
                  lat: point?.latitude,
                  lon: point?.longitude,
                  bufferType: options?.bufferType,
                  bufferUnits: options?.bufferUnits,
                  bufferSizes: options?.bufferSizes,
                  drivetimeOptions: options?.bufferType === 'drivetime' ? dto : undefined
                }
                self.mapActions.renderLocation( data, true )
              }
              // } )
              break
            }
            //
            // polygon feature click
            case ( 'polygon' ): {
              const mapName = self.localeString( 'mapFeature' )
              const displayName = ( result.data.displayName && ACLUtils.hasText( result.data.displayName ) ) || ( ACLUtils.isDef( result.data.displayName ) && ACLUtils.isNumber( result.data.displayName ) ) ? result.data.displayName.toString() : mapName
              const attributes = result.data.attributes ? result.data.attributes : {}
              const rings = result.data.rings
              if ( typeof rings !== 'undefined' ) {
                const dSpatial = result.data.spatial
                const reportSymbol = self.getSerializableReportSymbol( result.data.symbol )

                const g: any = {
                  type: 'polygon',
                  rings,
                  spatial: dSpatial,
                  latitude: location?.latitude,
                  longitude: location?.longitude
                }
                searchObject = {
                  type: 'geography',
                  name: displayName,
                  areaId: undefined,
                  attributes,
                  geometry: g,
                  ...reportSymbol && { symbol: reportSymbol }
                }

                // In Preset mode, store in presetSearchObject; in Workflow mode, use workflowRuntimeSearchSelectedObject
                if ( self.props.config.widgetMode === Mode.Preset ) {
                  self.updateState( 'presetSearchObject', searchObject )
                } else {
                  self.updateState( 'presetSearchObject', null )
                  self.updateState( 'workflowRuntimeSearchSelectedObject', JSON.stringify( searchObject ) )
                }

                if ( self.mapActions ) {
                  // render map location and buffers
                  const data = {
                    lat: location?.latitude,
                    lon: location?.longitude,
                    geom: g
                  }
                  self.mapActions.renderBoundary( data, true )
                }
              }
              break
            }
            case ( 'click' ): {
              // Resulting data from the embedded map search control is always a
              // location search result, or undefined if cleared
              const d = result.data
              if ( !location ) return

              // package the search result for props
              searchObject = {
                type: 'location',
                name: d.title,
                address: '',
                lat: location.latitude,
                lon: location.longitude
              }
              if ( self.props.config.widgetMode === Mode.Preset ) {
                //
                // Preset Mode
                // changes using map search only affect the runtime items
                const presetObj = {
                  displayName: searchObject.name,
                  latitude: searchObject.lat,
                  longitude: searchObject.lon,
                  type: 'point'
                }
                self.updateState( 'presetSearchObject', presetObj )
                //
              } else {
                //
                // Workflow Mode
                self.updateState( 'presetSearchObject', null )
                self.updateState( 'workflowRuntimeSearchSelectedObject', JSON.stringify( searchObject ) )
              }

              if ( self.mapActions ) {
                // render map location and buffers
                const options: Options = self.buildInfographicOptions() as Options
                const info: any = options?.infographicOptions
                const dto: any = info?.drivetimeOptions
                const data = {
                  lat: location.latitude,
                  lon: location.longitude,
                  bufferType: options?.bufferType,
                  bufferUnits: options?.bufferUnits,
                  bufferSizes: options?.bufferSizes,
                  drivetimeOptions: options?.bufferType === 'drivetime' ? dto : undefined
                }
                self.mapActions.renderLocation( data, true )
              }
              break
            }
          }
        }
        break
      }
      case ( 'drawnPolygon' ): {
        if ( result?.data ) {
          const rings = result.data.rings
          if ( typeof rings !== 'undefined' ) {
            // Map polygon is rendered in BA Map Actions, change color there and here if needed
            const reportSymbol = self.getDefaultReportSymbol()

            const g: any = {
              type: 'polygon',
              rings,
              spatial: result.data.spatial,
              latitude: result.data.latitude,
              longitude: result.data.longitude
            }
            searchObject = {
              type: 'geography',
              name: ACLUtils.capitalizeFirst( self.localeString( 'polygon' ) ),
              areaId: undefined,
              attributes: {},
              geometry: g,
              symbol: reportSymbol
            }

            // Added timeout, to prevent draw polygon button from remaining active
            setTimeout( () => {
              self.updateState( 'presetSearchObject', null )
              self.updateState( 'workflowRuntimeSearchSelectedObject', JSON.stringify( searchObject ) )
            }, 100 )

            if ( self.mapActions ) {
              // render map location and buffers
              const data = {
                lat: undefined,
                lon: undefined,
                rings,
                spatial: result.data.spatial
              }
              self.mapActions.renderBoundary( data )
            }
          }
        }
        break
      }
    }
  }

  // updateState changes the state to the new value, unless the
  // old and new values are the same, then it does nothing
  updateState ( name: string, value: any, callback?: any ) {
    // Prevent updating a state before the component is mounted
    if ( !this._isMounted ) { return }
    let isSame: boolean

    const before = this.state[name]
    const after = value
    if ( typeof this.state[name] === 'object' ) {
      isSame = this.shallowObjectComparisonAreEqual( before, after )
    } else {
      isSame = before === after
    }
    if ( !isSame ) {
      this.setState( ( prevState ) => ( {
        ...prevState,
        [name]: value
      } ), callback )
    }
  }

  activeViewChangeHandler ( jmv: JimuMapView, context: any ) {
    const self = context
    const forceRender = !this.jimuMapView

    if ( !forceRender ) {
      self.updateState( 'mapViewReady', false )
    }

    this.jimuMapView = jmv
    if ( jmv && jmv.view ) {
      jmv.view.when( function ( event ) {
        // Map interaction setup

        self.mapActions = new BAMapActions(
          context.props.id,
          jmv.mapWidgetId,
          self.showSearch,
          window.jimuConfig.hostEnv,
          self.onMapChanges,
          context,
          self.localeString( 'find-address-or-place' ),
          self.geoenrichmentServiceUrl,
          self.state.geocodeUrl
        )
        if ( self.state.bufferSizes ) {
          const sSizes = self.state.bufferSizes.split( ',' )
          const nSizes = []
          for ( let ii = 0; ii < sSizes.length; ii++ ) {
            nSizes[ii] = parseFloat( sSizes[ii] )
          }
        }

        // TODO: hook up the state toggle here
        // self.mapActions.allowMapClicks(self.state.runReportOnClick)
        self.mapActions.allowMapClicks( self.props.config.widgetMode === Mode.Preset && self.props.config.runReportOnClick )
        self.mapActions.showSearch = typeof self.props.config.searchbarEnabled === 'undefined' ? true : self.props.config.searchbarEnabled
        self.mapActions.initialize( jmv.view )

        // Load preset search object location on map
        self.loadPresetSearch()

        if ( !self.stencilPropChangeConnected ) {
          const id = '#' + self.props.id
          const elem = document.querySelector( id )

          if ( elem ) {
            // @ts-expect-error: Unreachable code error
            elem.onPropChange( self.onSettingChanged, self.state )
            self.stencilPropChangeConnected = true
          }
        }

        if ( forceRender ) {
          self.updateState( 'mapViewReady', true )
        }
      } )
    }
  }

  isOkToRenderBuffers () {
    const doPresetRender = this.widgetMapStartingUp
    this.widgetMapStartingUp = false

    return ( ( this.props.config.widgetMode === Mode.Preset && ( doPresetRender || this.lastSiteObjectType === 'mapSearch' || this._presetBuffersHaveChanged || this.lastSiteObjectType === 'mapClick' ) ) ||
      ( this.props.config.widgetMode === Mode.Workflow && ( !this.stepIsVisible( Steps.Buffers ) || this.hasAcceptedBuffers ) ) )
  }

  isEmpty ( obj ) {
    if ( obj == null ) return true
    if ( obj.length > 0 ) return false
    if ( obj.length === 0 ) return true
    if ( typeof obj === 'number' ) return false
    if ( typeof obj !== 'object' ) return true
    for ( const key in obj ) {
      if ( Object.prototype.hasOwnProperty.call( obj, key ) ) return false
    }
    return true
  }

  _igReady (): any {
    const { widgetMode, workflowEnableSearch, workflowSearchSelectedObject, workflowSelectedReport, presetSelectedReport } = this.props.config
    const { workflowRuntimeSearchSelectedObject, workflowRuntimeSelectedReport } = this.state

    function _fail ( reason: string ) {
      D.log( 'Config not valid', reason )
      return false
    }
    const vData: any = this.validateInfographicData( false )
    if ( !vData ) { return _fail( 'infographic data is not valid' ) }

    if ( widgetMode === Mode.Preset ) {
      const hasReport = ACLUtils.hasText( presetSelectedReport ) ? presetSelectedReport : undefined

      if ( hasReport === undefined ) { return _fail( 'selected report is undefined' ) }

      return true
      //
    } else {
      const searchObject = ACLUtils.isDef( workflowRuntimeSearchSelectedObject ) ? JSON.parse( workflowRuntimeSearchSelectedObject ) : !workflowEnableSearch && ACLUtils.isDef( workflowSearchSelectedObject ) ? JSON.parse( workflowSearchSelectedObject ) : undefined
      const resultType = ( searchObject && searchObject.type ) ? searchObject.type : undefined
      const hasReport = ACLUtils.hasText( workflowRuntimeSelectedReport ) ? workflowRuntimeSelectedReport : workflowSelectedReport && ACLUtils.hasText( workflowSelectedReport ) ? workflowSelectedReport : undefined

      if ( resultType === 'geography' ) {
        if ( searchObject && searchObject.geometry && hasReport ) {
          return true
        } else {
          return _fail( 'geometry or selected report is undefined' )
        }
      } else {
        if ( searchObject && hasReport ) {
          const location = this.getLatLon( searchObject )
          if ( location?.latitude && location?.longitude ) { return true } else _fail( 'lat/lon or selected report is undefined' )
        } else {
          return _fail( 'lat/lon or selected report is undefined' )
        }
      }
    }
  }

  _ready (): any {
    const { widgetMode, workflowEnableSearch, workflowSearchSelectedObject, presetSelectedReport } = this.props.config
    const { presetSearchObject } = this.state

    function _fail ( reason: string ) {
      D.log( 'Config not valid', reason )
      return false
    }

    if ( widgetMode === Mode.Preset ) {
      const searchObject = presetSearchObject
      const resultType = ( searchObject && searchObject.type ) ? searchObject.type : undefined
      const hasReport = ACLUtils.hasText( presetSelectedReport ) ? presetSelectedReport : undefined

      if ( hasReport === undefined ) { return _fail( 'selected report is undefined' ) }
      if ( resultType === undefined ) { return _fail( 'location type is undefined' ) }
      return true
    } else {
      //return true
      const searchObject = !workflowEnableSearch && ACLUtils.isDef( workflowSearchSelectedObject ) ? JSON.parse( workflowSearchSelectedObject ) : undefined
      const resultType = ( searchObject && searchObject.type ) ? searchObject.type : undefined
      if ( searchObject ) {
        if ( resultType === 'boundary' ) {
          if ( searchObject && searchObject.geometry ) {
            return true
          } else {
            return _fail( 'geometry or selected report is undefined' )
          }
        } else {
          if ( searchObject ) {
            const location = this.getLatLon( searchObject )
            if ( location?.latitude && location?.longitude ) { return true } else _fail( 'lat/lon or selected report is undefined' )
          } else {
            return _fail( 'search details are undefined' )
          }
        }
      } else if ( workflowEnableSearch ) {
        return true
      } else {
        return _fail( 'search object is undefined' )
      }
    }
  }

  workflowRunInfographic () {
    if ( this._igReady() ) {
      // display modal infographic popup
      this.updateState( 'showInfographicModal', true )
    }
  }

  reportSelectedHandler ( ev: any ) {
    const { widgetMode, workflowEnableInfographicChoice } = this.props.config

    const report = ev.detail.report || ev.detail

    if ( widgetMode === Mode.Workflow && workflowEnableInfographicChoice ) {
      this.updateState( 'workflowRuntimeSelectedReport', report.id )
      this.updateState( 'workflowRuntimeSelectedReportName', report.name )
    } else if ( widgetMode === Mode.Workflow ) {
      this.updateState( 'workflowSelectedReport', report.id )
      this.updateState( 'workflowSelectedReportName', report.name )
    } else {
      this.updateState( 'presetSelectedReport', report.id )
      this.updateState( 'presetSelectedReportName', report.name )
    }
    if ( report.reportID && report.reportID !== this.state.stStandardInfographicID ) {
      this.onPropertyChange( 'standardInfographicID', report.reportID )
      this.updateState( 'stStandardInfographicID', report.reportID )
    }
  }

  addEventListeners () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this
    if ( !this.initializedEvents ) {
      this.initializedEvents = true

      // Report changed event for workflow mode
      window.addEventListener( 'reportSelected', ( event ) => {
        self.reportSelectedHandler( event )
      } )

      // listen to fullscreen button
      window.addEventListener( 'message', ( event ) => {
        if ( event.data.action === 'fullscreen-enter' ) {
          //if (event.data.componentId === this.props.id) {
          self.updateState( 'showInfographicModal', true, () => self.buildInfographicOptions() )
          //}
        } else if ( event.data.action === 'fullscreen-exit' ) {
          //if (event.data.componentId === this.props.id) {
          self.updateState( 'showInfographicModal', false, () => self.buildInfographicOptions() )
          //}
        }
      } )

      // Listen for loading events emitted by BA Stencil components
      // Expected events (from components):
      //  - 'ba-loading' with detail:boolean (true=start, false=end)
      //  - 'ba-loading-start' (no detail)
      //  - 'ba-loading-end' (no detail)
      // Make handlers once so we can remove them on unmount.
      this._onBaLoading = ( ev: any ) => {
        if ( !self._isMounted || self._processingLoadingEvent ) return
        if ( !self.isLoadingEventFromThisWidget( ev ) ) return
        const val = typeof ev?.detail === 'boolean' ? ev.detail : !!ev?.detail?.loading

        // Debounce loading events to prevent rapid state changes
        if ( self._loadingEventTimer ) clearTimeout( self._loadingEventTimer )
        self._loadingEventTimer = setTimeout( () => {
          self._processingLoadingEvent = true
          self.updateState( 'isLoading', val, () => {
            self._processingLoadingEvent = false
          } )
        }, 100 )
      }
      this._onBaLoadingStart = ( ev: any ) => {
        if ( !self._isMounted || self._processingLoadingEvent ) return
        if ( !self.isLoadingEventFromThisWidget( ev ) ) return
        self._processingLoadingEvent = true
        self.updateState( 'isLoading', true, () => {
          self._processingLoadingEvent = false
        } )
      }
      this._onBaLoadingEnd = ( ev: any ) => {
        if ( !self._isMounted || self._processingLoadingEvent ) return
        if ( !self.isLoadingEventFromThisWidget( ev ) ) return
        self._processingLoadingEvent = true
        self.updateState( 'isLoading', false, () => {
          self._processingLoadingEvent = false
        } )
      }

      window.addEventListener( 'ba-loading', this._onBaLoading as EventListener )
      window.addEventListener( 'ba-loading-start', this._onBaLoadingStart as EventListener )
      window.addEventListener( 'ba-loading-end', this._onBaLoadingEnd as EventListener )
    }
  }
  updateStandardInfographics ( country: string, token: string ) {
    const USCountry = 'US'
    const isUSA = country === USCountry
    const isPresetMode = this.props?.config?.widgetMode === Mode.Preset

    if ( isUSA ) {
      // we only update the infographic id list if it's not there, or if we are changing from
      // another country to US
      const dictNeedsUpdate = !this._standardInfographicsDict || this._standardInfographicsDict.country !== USCountry || !this._standardInfographicsDict.list || Object.keys( this._standardInfographicsDict.list ).length <= 0
      if ( GEClient ) {
        if ( dictNeedsUpdate ) {
          // load hard coded standard infographic list while we wait
          this._standardInfographicsDict = GEClient.preStdInfographicIds
          // Show loader while we fetch the live standard infographic list (preset mode only)
          if ( isPresetMode && !this.state.isLoading ) {
            this.updateState( 'isLoading', true )
          }
          // request updated standard list
          GEClient.requestStandardInfographicIds( country, token, window.jimuConfig.hostEnv )
            .then( ( results: any ) => {
              if ( results ) {
                this._standardInfographicsDict = results
              }
            } )
            .catch( ( err: any ) => {
              console.warn( 'Failed to fetch standard infographic ids', err )
            } )
            .finally( () => {
              if ( isPresetMode ) {
                this.updateState( 'isLoading', false )
              }
            } )
        }
      }
    } else {
      // placeholder empty list
      this._standardInfographicsDict = { country: country, list: {} }
      if ( isPresetMode && this.state.isLoading ) {
        // ensure loader not left on if non-US country has no standard list to fetch
        this.updateState( 'isLoading', false )
      }
    }
  }

  /** buildInfographicOptions
   * doStateUpdate =  performs an 'updateState' call for infographicOptions
   * */
  buildInfographicOptions ( doStateUpdate: boolean = true ) {
    const {
      widgetMode, viewMode, displayHeader, zoomLevel, fullscreen, excel,
      imageExport, pdf, dynamicHtml, igBackgroundColor, headerColor, headerTextColor,
      runReportOnClick
    } = this.props.config
    const {
      presetBuffer, presetRingsBuffer1, presetRingsBuffer2, presetRingsBuffer3,
      presetRingsBufferUnit, presetDrivetimeBuffer1, presetDrivetimeBuffer2,
      presetDrivetimeBuffer3, presetDrivetimeBufferUnit, presetWalktimeBuffer1,
      presetWalktimeBuffer2, presetWalktimeBuffer3, presetWalktimeBufferUnit, travelModeData,
      travelDirection, trafficType, offsetTime,
      offsetDay, offsetHr
    } = this.props.config
    const { infographicOptions, showInfographicModal } = this.state

    // PERFORMANCE: Cache options to avoid rebuilding when config hasn't changed
    const configHash = JSON.stringify( {
      widgetMode, presetBuffer, presetRingsBuffer1, presetRingsBuffer2, presetRingsBuffer3,
      presetRingsBufferUnit, presetDrivetimeBuffer1, presetDrivetimeBuffer2, presetDrivetimeBuffer3,
      presetDrivetimeBufferUnit, presetWalktimeBuffer1, presetWalktimeBuffer2, presetWalktimeBuffer3,
      presetWalktimeBufferUnit, viewMode, displayHeader, showInfographicModal,
      stUseTrafficChecked: this.state.stUseTrafficChecked
    } )

    if ( this._cachedInfographicOptions && this._lastOptionsConfig === configHash ) {
      return this._cachedInfographicOptions
    }

    const workflowBuffers = this.getWorkflowBuffers()

    let options; let buffer1; let buffer2; let buffer3; let bufferType: InfoBufferType; let units
    const showFullscreen = widgetMode === Mode.Preset && !showInfographicModal ? fullscreen : false

    let bufferArray = []

    if ( widgetMode === Mode.Preset ) {
      bufferType = presetBuffer
      buffer1 = bufferType === InfoBufferType.ring ? presetRingsBuffer1 : bufferType === InfoBufferType.drivetime ? presetDrivetimeBuffer1 : presetWalktimeBuffer1
      buffer2 = bufferType === InfoBufferType.ring ? presetRingsBuffer2 : bufferType === InfoBufferType.drivetime ? presetDrivetimeBuffer2 : presetWalktimeBuffer2
      buffer3 = bufferType === InfoBufferType.ring ? presetRingsBuffer3 : bufferType === InfoBufferType.drivetime ? presetDrivetimeBuffer3 : presetWalktimeBuffer3
      units = bufferType === InfoBufferType.ring ? presetRingsBufferUnit : bufferType === InfoBufferType.drivetime ? presetDrivetimeBufferUnit : presetWalktimeBufferUnit

      options = {
        bufferType,
        bufferUnits: units
      }
    } else {
      bufferType = workflowBuffers.buffer
      buffer1 = bufferType === InfoBufferType.ring ? workflowBuffers.ringsBuffer1 : bufferType === InfoBufferType.drivetime ? workflowBuffers.drivetimeBuffer1 : workflowBuffers.walktimeBuffer1
      buffer2 = bufferType === InfoBufferType.ring ? workflowBuffers.ringsBuffer2 : bufferType === InfoBufferType.drivetime ? workflowBuffers.drivetimeBuffer2 : workflowBuffers.walktimeBuffer2
      buffer3 = bufferType === InfoBufferType.ring ? workflowBuffers.ringsBuffer3 : bufferType === InfoBufferType.drivetime ? workflowBuffers.drivetimeBuffer3 : workflowBuffers.walktimeBuffer3
      units = bufferType === InfoBufferType.ring ? workflowBuffers.ringsBufferUnit : bufferType === InfoBufferType.drivetime ? workflowBuffers.drivetimeBufferUnit : workflowBuffers.walktimeBufferUnit
      options = {
        bufferType,
        bufferUnits: units
      }
    }

    if ( !this.isEmpty( buffer1 ) ) {
      bufferArray.push( Number( buffer1 ) )
    }
    if ( !this.isEmpty( buffer2 ) ) {
      bufferArray.push( Number( buffer2 ) )
    }
    if ( !this.isEmpty( buffer3 ) ) {
      bufferArray.push( Number( buffer3 ) )
    }
    if ( bufferArray.length === 0 ) {
      if ( bufferType === InfoBufferType.ring ) {
        bufferArray = [1, 3, 5]
      } else {
        bufferArray = [5, 10, 15]
      }
    }

    const sharedOptions = {
      bufferSizes: bufferArray,
      drivetimeOptions: {
        travelModeData: travelModeData, // Support both object and string from service
        offsetTime,
        offsetHr,
        offsetDay,
        travelDirection,
        trafficType,
        useTrafficEnabled: true,
        useTrafficChecked: this.state.stUseTrafficChecked
      },
      viewMode,
      report: {
        showHeader: displayHeader,
        showZoomLevel: !zoomLevel,
        showFullscreen
      },
      export: {
        excel,
        image: imageExport,
        pdf,
        dynamicHtml
      },
      style: {
        igBackgroundColor,
        headerColor,
        headerTextColor
      },
      map: {
        runReportOnClick,
        showSearch: false
      }
    }
    function _optionsHasChanged ( a, b ) {
      if ( a && b ) {
        if ( a.bufferSizes.length === b.bufferSizes.length ) {
          for ( let ii = 0; ii < a.bufferSizes.length; ii++ ) {
            if ( a.bufferSizes[ii] !== b.bufferSizes[ii] ) { return true }
          }
          if ( a.bufferType !== b.bufferType ) { return true }
          if ( a.bufferUnits !== b.bufferUnits ) { return true }
          return false
        } else { return true }
      } else { return true }
    }

    const combinedOptions = Object.assign( {}, options, sharedOptions )
    if ( _optionsHasChanged( infographicOptions, combinedOptions ) && doStateUpdate ) {
      this.updateState( 'infographicOptions', combinedOptions )
    }

    const result = {
      bufferType,
      bufferUnits: units,
      bufferSizes: bufferArray,
      infographicOptions: combinedOptions
    }

    // PERFORMANCE: Cache the result
    this._cachedInfographicOptions = result
    this._lastOptionsConfig = JSON.stringify( {
      widgetMode, presetBuffer: this.props.config.presetBuffer,
      presetRingsBuffer1: this.props.config.presetRingsBuffer1,
      presetRingsBuffer2: this.props.config.presetRingsBuffer2,
      presetRingsBuffer3: this.props.config.presetRingsBuffer3,
      presetRingsBufferUnit: this.props.config.presetRingsBufferUnit,
      stUseTrafficChecked: this.state.stUseTrafficChecked
    } )

    return result
  }

  // Used by ba-map-actions
  getMapSettings () {
    return {
      bufferSizes: undefined,
      bufferUnits: undefined,
      bufferType: undefined
    }
  }

  countSteps () {
    const { widgetMode, workflowEnableSearch, workflowEnableUserConfigBuffers, workflowEnableInfographicChoice } = this.props.config
    const { numSteps, tabArray, displayBuffers } = this.state
    let newNumSteps = 0
    if ( widgetMode === Mode.Workflow ) {
      if ( workflowEnableSearch ) {
        newNumSteps = newNumSteps + 1
        tabArray.push( 'search' )
      }
      if ( workflowEnableUserConfigBuffers && displayBuffers ) {
        newNumSteps = newNumSteps + 1
        tabArray.push( 'buffers' )
      }
      if ( workflowEnableInfographicChoice ) {
        newNumSteps = newNumSteps + 1
        tabArray.push( 'infographics' )
      }
      if ( numSteps !== newNumSteps ) {
        this.updateState( 'numSteps', newNumSteps )
      }
    }
  }

  resetSteps () {
    const index = this.stepGetFirstVisible()
    if ( index > 0 ) {
      const stepper = document.getElementById( this.workflowStepperId ) as any
      if ( stepper ) {
        //this.stepGoTo(stepper, index)
        const index = this.stepGetFirstVisible()
        this.stepSetContentVisible( index )
      }
    }
  }
  //get url from the selected utility
  async getUrlOfUseUtility ( useUtility: UseUtility ): Promise<string> {
    if ( !useUtility ) {
      return Promise.resolve( '' )
    }
    return UtilityManager.getInstance().getUrlOfUseUtility( useUtility )
      .then( ( url ) => {
        return Promise.resolve( url )
      } )
  }

  getCredentials () {
    const { user } = this.props
    const token = this.getToken()
    return [user?.username, token]
  }

  validateInfographicData ( announce?: boolean ) {
    let reportLoc, searchObj, reportId
    const { selectedCountry, workflowRuntimeSelectedReport, workflowRuntimeSearchSelectedObject, presetSearchObject } = this.state
    const { user } = this.props
    const { presetSelectedReport, selectedHierarchy, widgetMode, workflowSearchSelectedObject, workflowSelectedReport, presetSearchSelectedObject, viewMode, autoSelectLatestDataSource } = this.props.config
    const token = this.getToken()
    let logged = false
    let selectedHierarchyConfig = selectedHierarchy

    const langCode = getAppStore().getState().appContext.locale || 'en'

    const _logErr = ( msg ) => {
      if ( typeof announce !== 'undefined' && announce ) {
        if ( !logged ) {
          logged = true
          console.groupCollapsed( '%c BA Widget infographic warning:', 'color:#bf551e;font-size:8pt' )
        }
      }
    }
    const useLatestData = autoSelectLatestDataSource

    try {
      if ( ACLUtils.hasText( window.jimuConfig.hostEnv ) ) {
        if ( ( ACLUtils.hasText( user?.username ) && ACLUtils.hasText( token ) ) || this.portalOnlineGEProxy ) {
          if ( ACLUtils.hasText( selectedCountry ) && ACLUtils.hasText( langCode ) ) {
            //
            if ( widgetMode === Mode.Preset ) {
              if ( ACLUtils.hasText( presetSelectedReport ) ) {
                reportId = presetSelectedReport
                if ( presetSearchObject !== null ) {
                  searchObj = presetSearchObject
                } else if ( ACLUtils.hasText( workflowRuntimeSearchSelectedObject ) ) {
                  searchObj = JSON.parse( workflowRuntimeSearchSelectedObject )
                } else if ( presetSearchSelectedObject != null ) {
                  searchObj = JSON.parse( presetSearchSelectedObject )
                  if ( typeof selectedHierarchyConfig === 'undefined' ) {
                    selectedHierarchyConfig = useLatestData ? '' : searchObj?.geography?.hierarchy
                  }
                }
              } else {
                _logErr( ' missing Preset Report ID' )
              }
              if ( !searchObj ) {
                _logErr( ' missing presetSearchObject state' )
              }
            } else {
              if ( ACLUtils.hasText( workflowRuntimeSelectedReport ) || ACLUtils.hasText( workflowSelectedReport ) ) {
                reportId = ACLUtils.hasText( workflowRuntimeSelectedReport ) ? workflowRuntimeSelectedReport : workflowSelectedReport
                if ( ACLUtils.isDef( workflowRuntimeSearchSelectedObject ) ) {
                  searchObj = JSON.parse( workflowRuntimeSearchSelectedObject )
                } else {
                  if ( ACLUtils.isDef( workflowSearchSelectedObject ) ) {
                    searchObj = JSON.parse( workflowSearchSelectedObject )
                  }
                }
                if ( !searchObj ) {
                  _logErr( ' workflow is missing either [workflowRuntimeSearchSelectedObject or workflowSearchSelectedObject]' )
                }
              } else {
                _logErr( ' missing Workflow Report ID' )
              }
            }

            if ( ACLUtils.isDef( searchObj ) ) {
              if ( searchObj.type ) {
                //
                // Location
                if ( this.isLocationType( searchObj.type ) ) {
                  const location = this.getLatLon( searchObj )
                  if ( location?.latitude && location?.longitude ) {
                    reportLoc = location.longitude + ', ' + location.latitude

                    const bufferOptions = this.buildInfographicOptions( false )
                    const data = {
                      env: window.jimuConfig.hostEnv,
                      username: user?.username,
                      token,
                      locationName: searchObj.name || searchObj.displayName || searchObj.address,
                      country: selectedCountry,
                      selectedHierarchy: selectedHierarchyConfig,
                      langCode,
                      report: reportId,
                      location: reportLoc,
                      buffers: bufferOptions,
                      viewMode,
                      attributes: JSON.stringify( searchObj.attributes ? searchObj.attributes : {} )
                    }
                    return data
                  }
                  //
                  // geography or boundary
                } else if ( searchObj.type === 'geography' ) {
                  const hasGeographyObject = !!searchObj.geography

                  // Correct hierarchy only when a standard-geography payload exists.
                  // Geometry-only polygons (drawn/map-selected) do not include searchObj.geography.
                  if ( hasGeographyObject ) {
                    if ( useLatestData ) {
                      searchObj.geography.hierarchy = ''
                      if ( searchObj.geography.attributes ) {
                        searchObj.geography.attributes.DatasetID = ''
                        searchObj.geography.attributes.Hierarchy = ''
                      }
                    } else if ( typeof ( searchObj.geography?.hierarchy ) !== 'undefined' && searchObj.geography.hierarchy !== selectedHierarchyConfig ) {
                      searchObj.geography.hierarchy = selectedHierarchyConfig
                    }
                  }

                  const reportSymbol = this.getSerializableReportSymbol( searchObj.symbol || searchObj.geography?.symbol ) || this.getDefaultReportSymbol()
                  const bufferOptions = this.buildInfographicOptions( false )
                  const data: any = {
                    env: window.jimuConfig.hostEnv,
                    username: user?.username,
                    token,
                    locationName: searchObj.name || searchObj.displayName || ACLUtils.capitalizeFirst( this.localeString( 'polygon' ) ),
                    country: selectedCountry,
                    selectedHierarchy: useLatestData ? '' : selectedHierarchyConfig,
                    langCode,
                    report: reportId,
                    buffers: bufferOptions,
                    viewMode,
                    attributes: JSON.stringify( searchObj.attributes ? searchObj.attributes : ( searchObj.geography?.attributes || {} ) ),
                    symbol: reportSymbol
                  }
                  if ( hasGeographyObject ) {
                    data.geography = JSON.stringify( searchObj.geography )
                  }
                  if ( searchObj.geometry ) {
                    data.geometry = JSON.stringify( searchObj.geometry )
                  }
                  return data
                } else {
                  _logErr( ' invalid search result type' )
                }
              } else {
                _logErr( ' invalid search results type' )
              }
            } else {
              _logErr( ' missing search results' )
            }
          } else {
            _logErr( ' missing langCode or country' )
          }
        } else {
          _logErr( ' missing username/token' )
        }
      } else {
        _logErr( ' invalid environment' )
      }
      console.groupEnd()
    } catch ( ex ) {
    }
    return undefined
  }

  // - - - - - - - - -
  // Helper functions
  hasSearchResult () {
    return this.state.workflowRuntimeSearchSelectedObject || this.props.config.workflowSearchSelectedObject
  }

  handleDrawEnd ( e: any ) {
    if ( e?.geometry?.type === 'polygon' ) {
      this.mapActions.onDrawnPolygon( e )
    } else if ( e.geometry?.type === 'point' ) {
      this.mapActions.onDrawnPoint( e )
    }
  }

  // - - - - - - - - -
  // Stepper functions
  //
  // Note: Stepper tabs may be visible/hidden, completed, or active
  //
  // Individual tab visibility
  stepIsVisible ( step: string ) {

    if ( this.props.config.widgetMode !== Mode.Workflow ) return false

    switch ( step ) {
      case ( Steps.Search ): {
        return this.props.config.workflowEnableSearch
      }
      case ( Steps.Buffers ): {
        if ( !this.props.config.workflowEnableUserConfigBuffers ) return false

        const hasSearch = this.hasSearchResult()
        if ( !hasSearch ) return true

        if ( this.state.workflowRuntimeSearchSelectedObject ) {
          const obj = JSON.parse( this.state.workflowRuntimeSearchSelectedObject )
          return ( obj && this.isLocationType( obj.type ) )
        } else if ( this.props.config.workflowSearchSelectedObject ) {
          const obj = JSON.parse( this.props.config.workflowSearchSelectedObject )
          return ( obj && this.isLocationType( obj.type ) )
        } else return false
      }
      case ( Steps.Infographic ): {
        return this.props.config.workflowEnableInfographicChoice
      }
      default:
        return false
    }
  }

  // Switches focus to the tab number adjusted by tab visibility
  stepGoTo ( stepper: any, index: number ) {
    if ( !stepper || ( index < 1 || index > 3 ) ) return
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this
    this.workflowBuffersDebouncer.cancel()

    function _goto ( id: number ) {
      if ( typeof id === 'undefined' ) {
        return
      }

      if ( stepper['s-p'].length > 0 ) {
        const promise = stepper['s-p'][0] as Promise<any>
        promise.then(
          () => {
            stepper.goToStep( id )
          } )
      } else {
        stepper.goToStep( id )
      }

      // Account for when search tab is turned off
      const bufferStepNumber = self.stepIsVisible( Steps.Search ) ? 2 : 1

      if ( id !== bufferStepNumber && self.state.currentStep === bufferStepNumber ) {
        // Leaving Buffers step
        self.hasAcceptedBuffers = true

        // In this case, if we are in Workflow Mode with a point location and have
        // not previously rendered the buffers, we render them now
        if ( self.props.config.widgetMode === Mode.Workflow && self.mapActions ) {
          // check the search object to see if it is a point location
          const { workflowEnableSearch, workflowSearchSelectedObject } = self.props.config
          const { workflowRuntimeSearchSelectedObject } = self.state
          const searchObj = ACLUtils.isDef( workflowRuntimeSearchSelectedObject ) ? JSON.parse( workflowRuntimeSearchSelectedObject ) : !workflowEnableSearch && ACLUtils.isDef( workflowSearchSelectedObject ) ? JSON.parse( workflowSearchSelectedObject ) : undefined
          if ( searchObj ) {
            const options: Options = self.buildInfographicOptions() as Options
            const info: any = options?.infographicOptions
            const dto: any = info?.drivetimeOptions
            const data = {
              lat: searchObj.lat,
              lon: searchObj.lon,
              bufferType: options?.bufferType,
              bufferUnits: options?.bufferUnits,
              bufferSizes: options?.bufferSizes,
              drivetimeOptions: options?.bufferType === 'drivetime' ? dto : undefined
            }
            self.mapActions.renderLocation( data )
          }
        }
      }
    }
    let n: number = 1
    const tabs: any = {}
    if ( this.stepIsVisible( 'search' ) ) { tabs.search = n++ }
    if ( this.stepIsVisible( 'buffers' ) ) { tabs.buffers = n++ }
    if ( this.stepIsVisible( 'infographic' ) ) { tabs.infographic = n++ }
    switch ( index ) {
      case ( StepNumber.Search ): {
        if ( typeof tabs.search !== 'undefined' ) {
          _goto( tabs.search )
        } else if ( typeof tabs.buffers !== 'undefined' ) {
          _goto( tabs.buffers )
        } else if ( typeof tabs.infographic !== 'undefined' ) {
          _goto( tabs.infographic )
        }
        break
      }
      case ( StepNumber.Buffers ): {
        if ( typeof tabs.buffers !== 'undefined' && typeof tabs.search !== 'undefined' ) {
          _goto( tabs.buffers )
        } else if ( typeof tabs.infographic !== 'undefined' ) {
          _goto( tabs.infographic )
        }
        break
      }
      case ( StepNumber.Infographic ): {
        if ( typeof tabs.infographic !== 'undefined' ) { _goto( tabs.infographic ) }
        break
      }
    }
    this.stepSetContentVisible( index )
  }

  stepSetAllHidden () {
    for ( let ii = 1; ii <= 3; ii++ ) {
      const id = this.workflowStepperId + '-' + ii
      const stepperItem = document.getElementById( id )
      const content = ACLUtils.queryElement.call( this, '.stepper-item-content', stepperItem )
      if ( content ) { content.style.display = 'none' }
    }
  }

  stepSetContentVisible ( step ) {
    this.stepSetAllHidden()

    // Get list of visible steps (some may be hidden)
    const visibleSteps = []
    for ( let ii = 1; ii <= 3; ii++ ) {
      const id = this.workflowStepperId + '-' + ii
      const visibleItem = document.getElementById( id )
      if ( visibleItem ) {
        visibleSteps.push( id )
      }
    }

    if ( step > visibleSteps.length ) {
      return
    }

    const stepperItem = document.getElementById( visibleSteps[step - 1] )
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this
    function _delay () {
      // display content
      const content = ACLUtils.queryElement.call( self, '.stepper-item-content', stepperItem )
      if ( content ) {
        content.style.display = 'flex'
      } else {
        if ( stepperItem['s-p'].length > 0 ) {
          const promise = stepperItem['s-p'][0] as Promise<any>
          promise.then(
            () => {
              const content = ACLUtils.queryElement.call( self, '.stepper-item-content', stepperItem )
              if ( content ) { content.style.display = 'flex' }
            } )
        }
      }
      self.setHeightInfographicTree()
    }
    setTimeout( _delay, 0 )

    return stepperItem
  }

  stepGoToVisible ( direction ) {
    if ( this.props.config.widgetMode !== Mode.Workflow ) return

    const { currentStep } = this.state
    const stepper = document.getElementById( this.workflowStepperId ) as any
    let newStep

    this.workflowBuffersDebouncer.cancel()

    const n: number = currentStep as number
    if ( direction === 'next' ) {
      if ( n < 3 ) {
        newStep = n + 1
      }
    } else if ( direction === 'prev' ) {
      if ( n > 1 ) {
        newStep = n - 1
      }
    }
    if ( newStep ) {
      this.updateState( 'currentStep', newStep )
      this.stepGoTo( stepper, newStep )
      // if we have a map and we are going to the Buffers tab
      // set the flag so that the buffers get rendered
      if ( newStep === StepNumber.Buffers && this.mapActions ) {
        this.hasAcceptedBuffers = true
      }
    }
  }

  stepCompleted ( step: Steps ) {
    if ( this.props.config.widgetMode !== Mode.Workflow ) return false
    // TODO: implementation
    switch ( step ) {
      case ( Steps.Search ): {
        break
      }
      case ( Steps.Buffers ): {
        break
      }
      case ( Steps.Infographic ): {
        break
      }
    }
  }

  stepOptions ( step: Steps ) {
    if ( !step || this.props.config.widgetMode !== Mode.Workflow ) return ''
    // TODO: implementation
    switch ( step ) {
      case ( Steps.Search ): {
        break
      }
      case ( Steps.Buffers ): {
        break
      }
      case ( Steps.Infographic ): {
        break
      }
    }
  }

  stepIsLast ( step: number ) {
    if ( !step || this.props.config.widgetMode !== Mode.Workflow ) return false

    const visibleSteps = this.getVisibleSteps()

    return step === visibleSteps.length
  }

  stepGetFirstVisible () {
    return ( this.stepIsVisible( Steps.Search ) ) ? StepNumber.Search : ( this.stepIsVisible( Steps.Buffers ) ) ? StepNumber.Buffers : ( this.stepIsVisible( Steps.Infographic ) ) ? StepNumber.Infographic : 0
  }

  stepIsFirst ( step: number ) {
    if ( !step || this.props.config.widgetMode !== Mode.Workflow ) return false

    // If first step
    return step === 1
  }

  stepCurrentName () {
    let stepName
    if ( this.props.config.widgetMode === Mode.Workflow ) {
      const { currentStep } = this.state
      const steps: Steps[] = [undefined, Steps.Search, Steps.Buffers, Steps.Infographic]
      if ( typeof currentStep !== 'undefined' ) {
        const n: number = currentStep as number
        if ( n >= 1 && n <= 3 ) {
          stepName = steps[n]
          if ( this.stepIsVisible( stepName ) ) {
            return stepName
          }
        }
      }
    }
    return undefined
  }

  // - - - - - - - - - - -
  // Nav button functions
  navButtonIsVisible ( button: NavButtons ) {
    if ( this.props.config.widgetMode !== Mode.Workflow ) return false

    const { currentStep } = this.state
    if ( !currentStep ) return false

    let isVisible: boolean = false

    const visibleSteps = this.getVisibleSteps()

    switch ( button ) {
      case ( NavButtons.Previous ): {
        isVisible = currentStep !== 1
        break
      }
      case ( NavButtons.Next ): {
        isVisible = currentStep !== visibleSteps.length
        break
      }
      case ( NavButtons.Infographic ): {
        // infographic button is only visible if we are
        // ready and on the last visible step
        //const last: boolean = this.stepIsLast(this.stepCurrentName())
        //isVisible = (this._igReady() && last)
        isVisible = currentStep === visibleSteps.length
        break
      }
    }
    return isVisible
  }

  navButtonAppearance ( button: NavButtons ) {
    if ( this.props.config.widgetMode !== Mode.Workflow ) return undefined
    // the appearance is either 'outline' (secondary) or 'solid' (primary)
    const primary: any = { appearance: 'solid' }
    const secondary: any = { appearance: 'outline' }
    let style: any

    switch ( button ) {
      case ( NavButtons.Previous ): {
        style = ( !this.navButtonIsVisible( NavButtons.Next ) && !this.navButtonIsVisible( NavButtons.Infographic ) ) ? primary : secondary
        break
      }
      case ( NavButtons.Next ): {
        // appearance
        const obj = ( !this.navButtonIsVisible( NavButtons.Infographic ) ) ? primary : secondary
        // if there is no query text, the Next button should be disabled
        if ( this.state.currentStep === StepNumber.Search ) {
          if ( !ACLUtils.hasText( this.searchResultString ) ) {
            // disable the Next button
            obj.disabled = ''
          }
        }
        style = obj
        break
      }
      case ( NavButtons.Infographic ): {
        style = primary
        if ( !this._igReady() ) {
          style.disabled = ''
        }
        break
      }
      // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
      default:
        return undefined
    }

    return style
  }

  // Returns an array of the currently visible steps
  // e.g. [Steps.Search, Steps.Infographic] if buffers are auto-enabled
  getVisibleSteps () {
    const visibleSteps = []

    if ( this.stepIsVisible( Steps.Search ) ) {
      visibleSteps.push( Steps.Search )
    }
    if ( this.stepIsVisible( Steps.Buffers ) ) {
      visibleSteps.push( Steps.Buffers )
    }
    if ( this.stepIsVisible( Steps.Infographic ) ) {
      visibleSteps.push( Steps.Infographic )
    }

    return visibleSteps
  }
  // - - - - - - - - - - -

  // This code is dependent on Exb's class names not changing. BE CAREFUL WITH CHANGING THIS CODE.
  setOverflowVisible () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    const self = this

    requestAnimationFrame( () => {
      requestAnimationFrame( () => {
        let elem = document.getElementById( self.widgetOuterDivId )

        // Traverse up to find the exb widget container
        while ( elem && !elem.hasAttribute( 'data-widgetid' ) && elem.getAttribute( 'data-widgetid' ) !== self.props.id ) {
          elem = elem.parentElement
          const grandParentNode = elem?.parentElement
          if ( grandParentNode ) {
            // Only set minHeight/minWidth if not collapsed
            if ( !self.props.collapsed ) {
              if ( self.props.config.widgetMode === Mode.Workflow ) {
                //grandParentNode.style.minHeight = '375px'
                grandParentNode.style.minWidth = '325px'
              } else {
                grandParentNode.style.minHeight = '10px'
                grandParentNode.style.minWidth = '10px'
              }
            } else {
              grandParentNode.style.minHeight = ''
              grandParentNode.style.minWidth = ''
            }
          }
        }
        // Removing this logic so that it will work with collapsing widget controller
        // if ( elem ) {
        //   const computedStyle = window.getComputedStyle( elem )
        //   const width = parseInt( computedStyle.width )
        //   const height = parseInt( computedStyle.height )

        //   if ( width >= 200 && height >= 295 && computedStyle.overflow === 'hidden' ) {
        //     elem.style.overflow = 'visible'
        //   }
        // }

        elem = document.getElementById( self.widgetOuterDivId )
        while ( elem && !elem.classList.contains( 'floating-panel' ) ) {
          elem = elem.parentElement
          if ( elem && elem.classList.contains( 'floating-panel' ) ) {
            if ( !self.props.collapsed ) {
              if ( self.props.config.widgetMode === Mode.Workflow ) {
                //elem.style.minHeight = '375px'
                elem.style.minWidth = '350px'
              }
            } else {
              elem.style.minHeight = ''
              elem.style.minWidth = ''
            }
            elem.style.zIndex = '1'
          }
        }

        // Also clear minHeight/minWidth on any element in the parent chain if collapsed
        if ( self.props.collapsed ) {
          let clearElem = document.getElementById( self.widgetOuterDivId )
          while ( clearElem ) {
            clearElem.style.minHeight = ''
            clearElem.style.minWidth = ''
            clearElem = clearElem.parentElement
          }
        }

        // Reset elem to the starting point and traverse up to find the widget controller when fixed layout
        elem = document.getElementById( self.widgetOuterDivId )
        while ( elem && ( !elem.classList.contains( 'panel-content' ) ) ) {
          elem = elem.parentElement
          if ( elem && ( elem.classList.contains( 'panel-content' ) ) ) {
            elem.style.overflow = 'visible'
          }
        }

        // Reset elem to the starting point and traverse up to find the widget controller when fixed layout
        elem = document.getElementById( self.widgetOuterDivId )
        while ( elem && ( !elem.classList.contains( 'fixed-layout' ) ) ) {
          elem = elem.parentElement
          if ( elem && ( elem.classList.contains( 'fixed-layout' ) ) ) {
            elem.style.overflow = 'visible'
            elem = elem.parentElement
            if ( elem && ( elem.classList.contains( 'side' ) ) ) {
              elem.style.overflow = 'visible'
            }
          }
        }
      } )
    } )
  }

  infographicIsStandard ( reportId: string ) {
    if ( this._standardInfographicsDict &&
      this._standardInfographicsDict.list &&
      this._standardInfographicsDict.list[reportId] ) { return true }
    return false
  }

  getSelectedHierarchy ( reportId: string | undefined ): string {
    let selectedHierarchyId: string = this.props.config.selectedHierarchy ?
      this.props.config.selectedHierarchy : this.state.selectedHierarchy ? this.state.selectedHierarchy.ID : ''
    if ( selectedHierarchyId && selectedHierarchyId.length > 0 && reportId && reportId.length > 0 ) {
      if ( this.props.config.autoSelectLatestDataSource && this.infographicIsStandard( reportId ) ) {
        selectedHierarchyId = ''
      }
    }
    return selectedHierarchyId
  }
  // DOM element getters
  getWidgetElement (): any {
    if ( !this._widgetElement ) {
      this._widgetElement = document.querySelector( 'div[data-widgetid="' + this.props.id + '"]' )
    }
    return this._widgetElement
  }
  getModalElement (): any {
    const widget = this.getWidgetElement()
    if ( widget ) {
      const mid = 'workflow-modal-' + this.props.id
      const fid = ACLUtils.fixId( mid )
      const modal = ACLUtils.queryElement.call( self, fid, this._widgetElement ) as any
      return modal
    }
    return null
  }
  getWorkflowElement (): any {
    const widget = this.getWidgetElement()
    const fid = ACLUtils.fixId( 'workflow-' + this.props.id )
    const workflow = ACLUtils.queryElement.call( self, fid, widget ) as any
    return workflow
  }
  getInfographicElement (): any {
    const widget = this.getWidgetElement()
    const fid = ACLUtils.fixId( this.presetInfographicId )
    const info = ACLUtils.queryElement.call( self, fid, widget ) as any
    return info
  }
  //state
  // onElementReady = called by child components when they are loaded.  This is
  // setup in our JSX where the 'readyCallback' prop is passed to the child components
  // (search-step, buffers-step, infographics-step).
  //
  // The purpose of this function is to allow any component that has children
  // (ex: workflow) to set the BaAppStateId on child components once they are
  // ready to go.  That assures they have access to the same BaAppState as the
  // host/widget.
  //
  onElementReady ( elem: any ) {
    if ( this._baAppStateId ) {
      if ( elem ) {
        elem.setBaAppStateId( this._baAppStateId )
      }
    } else {
      // perform this later when BaAppState is ready
      this._onReadyNotificationsTodo.push( elem )
    }
  }

  checkIfReadyNotificationsTodo () {
    if ( this._onReadyNotificationsTodo.length > 0 && this._baAppStateId && this._service ) {
      this._onReadyNotificationsTodo.forEach( ( elem: any ) => {
        if ( elem ) {
          elem.setBaAppStateId( this._baAppStateId )
        }
      } )
      this._onReadyNotificationsTodo = []

    }
  }


  render () {
    const { id, theme, user, collapsed } = this.props

    const {
      widgetMode,
      workflowEnableSearch,
      workflowSearchSelectedObject,
      workflowRunInWidget,
      drawPointEnabled,
      drawPolygonEnabled,
      widgetPlaceholderTextToggle,
      widgetPlaceholderText
    } = this.props.config

    const {
      initializedGEUrl,
      showInfographicModal,
      workflowRuntimeSearchSelectedObject,
      presetSearchObject,
      hasPrivileges,
      runInfographicConfig,
      defaultReport,
      proxyToManyRequests,
      signInRequired,
      isOnPremisesGE
    } = this.state

    let searchObj
    const langCode = getAppStore().getState().appContext.locale || 'en'
    const token = this.getToken()

    // Get the BA App State service component that resides in the main document
    const showingModal: boolean = showInfographicModal
    const showingModalRun: boolean = ( showingModal && runInfographicConfig ) as boolean

    // Handle collapsed state for Widget Controller
    if ( collapsed ) {
      // Render only a minimal header or icon when collapsed
      return (
        <Paper className="jimu-widget widget-infographic-player ba-infographic-collapsed">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 40 }}>
            <img src={theme.sys.color.mode === 'dark' ? baIconWhite : baIcon} alt={this.localeString( '_widgetLabel' )} style={{ height: 24, marginRight: 8 }} />
            <span style={{ fontWeight: 600 }}>{this.localeString( '_widgetLabel' )}</span>
          </div>
        </Paper>
      )
    }

    // Render empty until GE Url is initialized
    if ( !initializedGEUrl ) {
      return ''
    }

    try {
      searchObj = widgetMode === Mode.Preset ? presetSearchObject : ACLUtils.isDef( workflowRuntimeSearchSelectedObject ) ? JSON.parse( workflowRuntimeSearchSelectedObject ) : !workflowEnableSearch && ACLUtils.isDef( workflowSearchSelectedObject ) ? JSON.parse( workflowSearchSelectedObject ) : undefined

      this.setOverflowVisible()

      this.searchResultString = ''
      if ( searchObj ) {
        const strName = ( searchObj.name && ACLUtils.hasText( searchObj.name ) ) ? searchObj.name : searchObj.displayName || null
        const strAddress = ( searchObj.address && ACLUtils.hasText( searchObj.address ) ) ? searchObj.address : null

        if ( this.isLocationType( searchObj.type ) ) {
          if ( strAddress ) {
            this.searchResultString = strAddress
          } else if ( strName ) {
            this.searchResultString = strName
          }
        } else {
          this.searchResultString = strName || ''
        }
      }
    } catch ( ex ) {
      console.log( "Widget render init error:", ex )
    }

    const igData: any = this.validateInfographicData()
    const isPreset = ( widgetMode === Mode.Preset )
    const isPresetNotReady = ( isPreset && !this._igReady() )
    const mainBackgroundSpinner: React.CSSProperties = {
      position: 'absolute',
      top: 'calc(50% - 18px)',
      left: 'calc(50% - 16px)',
      transform: 'scale(1.4)'
    }

    // const colors = {
    //   brand: theme.sys.color.primary.main,
    //   brandHover: theme.sys.color.primary.dark,
    //   brandPress: theme.sys.color.primary.dark,
    //   background: theme.sys.color.mode === 'dark' ? '#242424' : theme.ref.palette.white,
    //   foreground: theme.sys.color.mode === 'dark' ? '#000000' : theme.ref.palette.white,
    //   text: theme.ref.palette.black,
    //   text3: theme.sys.color.mode === 'dark' ? '#9f9f9f' : '#151515',
    //   textInverse: theme.ref.palette.black,
    //   border: theme.sys.color.primary.main
    // }

    let info, workflowConfigObj
    try {
      // sync options
      info = this.buildInfographicOptions( false )

      workflowConfigObj = {
        id,
        env: window.jimuConfig.hostEnv,
        geoenrichmentUrl: this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : null,
        username: user?.username,
        //colors,
        token,
        infographicOptions: info?.infographicOptions,
        useLatestDataSource: this.props.config.autoSelectLatestDataSource,
        ...this.props.config
      }

      // Set language from ExB
      workflowConfigObj.langCode = langCode
    } catch ( ex ) {
      console.log( "Widget render sync error:", ex )
    }
    // visibleElements
    const visibleElements = {} as JimuDrawVisibleElements
    visibleElements.createTools = {
      point: drawPointEnabled,
      polyline: false,
      polygon: drawPolygonEnabled,
      rectangle: false,
      circle: false
    }
    visibleElements.selectionTools = {
      'rectangle-selection': false,
      'lasso-selection': false
    }
    visibleElements.undoRedoMenu = false
    visibleElements.snappingControls = false

    // hide API setting icon for 10.1
    visibleElements.settingsMenu = false

    const clearSelectedFeature = () => {
      this.mapActions?.reset()
      this.updateState( 'workflowRuntimeSearchSelectedObject', undefined )
    }

    const baSearchResultFeatureChange = ( searchResult ) => {
      this.onSiteObjectChanged( { origin: 'basearch', ctx: searchResult.detail.detail.context, state: { searchResults: searchResult.detail.detail } } )
    }

    const handleRunInfographic = ( params ) => {
      const detail = params?.detail ? JSON.parse( JSON.stringify( params.detail ) ) : null

      if ( detail?.config ) {
        const existingInfographicOptions = detail.config.infographicOptions || {}
        const existingReportOptions = existingInfographicOptions.report || {}
        const infographicOptions: any = {
          ...existingInfographicOptions,
          report: {
            ...existingReportOptions,
            showHeader: workflowRunInWidget ? true : existingReportOptions.showHeader,
            showCloseButton: !!workflowRunInWidget,
            showZoomLevel: existingReportOptions.showZoomLevel,
            showFullscreen: existingReportOptions.showFullscreen
          }
        }

        // if ( workflowRunInWidget ) {
        //   infographicOptions.export = {
        //     excel: false,
        //     image: false,
        //     pdf: false,
        //     dynamicHtml: false,
        //     print: false
        //   }
        // }

        detail.config.infographicOptions = infographicOptions
      }

      this.updateState( 'runInfographicConfig', detail )
      this.updateState( 'showInfographicModal', true, () => { this.syncRunInWidgetHeaderVisibility() } )
    }

    const closeWorkflowInfographic = () => {
      this.closeWorkflowModal()
    }

    const renderWorkflowInfographicContent = ( contentHeight: string = '100%' ) => (
      <Paper css={css`background-color: transparent; height: 100%;`}>
        <div style={{ padding: '0px', height: contentHeight }}>
          <img src={require( './assets/largeBusy.gif' )} style={mainBackgroundSpinner}></img>
          <ArcgisInfographicModal
            baStateId={this._baAppStateId}
            modalId={'workflow-modal-' + this.props.id}
            config={runInfographicConfig?.config}
            portalUrl={this.state.portalUrl ? this.state.portalUrl : null}
            portalOnlineGEProxy={this.portalOnlineGEProxy}
            searchResultObj={runInfographicConfig?.searchResultObj}
            isOpen={showingModal}
            selectedReport={runInfographicConfig?.selectedReport}
            infographicOptions={runInfographicConfig?.config?.infographicOptions}
            selectedHierarchy={_selectedHier}
            useLatestDataSource={this.props.config.autoSelectLatestDataSource}
            standardInfographicID={this.state.stStandardInfographicID}
            readyCallback={( elem ) => { this.onElementReady.bind( this )( elem ) }}
          >
          </ArcgisInfographicModal>
        </div>
      </Paper>
    )

    // Needed to set the z-index on the widget to allow the infographic selector popup to be on top of other widgets, plus resize corner on
    // the controller widget

    const bufferTrigger = ( bufferTriggerParams ) => {
      this.hasAcceptedBuffers = true

      if ( bufferTriggerParams.detail.searchResultObj && this.mapActions ) {
        // render map location and buffers
        const data = {
          lat: bufferTriggerParams.detail.searchResultObj.lat,
          lon: bufferTriggerParams.detail.searchResultObj.lon,
          bufferType: bufferTriggerParams.detail.options.bufferType,
          bufferUnits: bufferTriggerParams.detail.options.bufferUnits,
          bufferSizes: bufferTriggerParams.detail.options.bufferSizes,
          drivetimeOptions: bufferTriggerParams.detail.options.bufferType === 'drivetime' ? bufferTriggerParams.detail.options.drivetimeOptions : undefined
        }
        // Format array to always have 3 values, null will be used if blank values are passed
        const formatArray = ( arr ) => {
          const returnArr = []
          for ( let i = 0; i < 3; i++ ) {
            if ( typeof ( arr[i] ) !== 'undefined' ) {
              returnArr.push( arr[i] )
            } else {
              returnArr.push( null )
            }
          }
          return returnArr
        }
        // Update the state of the Rings, Drive Time, Walk Time buffers when passed in
        this.updateState( 'workflowRuntimeBuffer', bufferTriggerParams.detail.options.bufferType )
        const sizeArray = formatArray( bufferTriggerParams.detail.options.bufferSizes )
        if ( bufferTriggerParams.detail.options.bufferType === InfoBufferType.ring ) {
          this.updateState( 'workflowRuntimeRingsBuffer1', sizeArray[0] )
          this.updateState( 'workflowRuntimeRingsBuffer2', sizeArray[1] )
          this.updateState( 'workflowRuntimeRingsBuffer3', sizeArray[2] )
          this.updateState( 'workflowRuntimeRingsBufferUnit', bufferTriggerParams.detail.options.bufferUnits )
        } else if ( bufferTriggerParams.detail.options.bufferType === InfoBufferType.drivetime ) {
          this.updateState( 'workflowRuntimeDrivetimeBuffer1', sizeArray[0] )
          this.updateState( 'workflowRuntimeDrivetimeBuffer2', sizeArray[1] )
          this.updateState( 'workflowRuntimeDrivetimeBuffer3', sizeArray[2] )
          this.updateState( 'workflowRuntimeDrivetimeBufferUnit', bufferTriggerParams.detail.options.bufferUnits )
        } else if ( bufferTriggerParams.detail.options.bufferType === InfoBufferType.walktime ) {
          this.updateState( 'workflowRuntimeWalktimeBuffer1', sizeArray[0] )
          this.updateState( 'workflowRuntimeWalktimeBuffer2', sizeArray[1] )
          this.updateState( 'workflowRuntimeWalktimeBuffer3', sizeArray[2] )
          this.updateState( 'workflowRuntimeWalktimeBufferUnit', bufferTriggerParams.detail.options.bufferUnits )
        }
        this.mapActions.renderLocation( data )
      }
    }

    const drawPointSymbol = new PictureMarkerSymbol( {
      width: 14,
      height: 26.6,
      xoffset: 0,
      yoffset: 12.6,
      url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAjCAYAAAB2KjFhAAACtUlEQVRIS+2WS0wTURSG/zvT0kpfkGJ4pGCViA1Em9CtCQVx5QIWhiVRo8GdSNypqHElkcgOlzVh5ap1X6nEiAkQXzGBxkSKtZC0jdTSB7SdMXdwRjudB+w5q5t7T775z3/OzR0CWbT4x90Glh0CMEx43g1C3FIKz6/zhKwDCJYrldBWZIaupSDiqsE/3mBjmGeMyXLF7GiBubEVhmN2sIY6KblS3kO58BvFX5soZrbA7eYCWY67vR2Z2aZJAoyqMTLMvLXN47a1eeRiUSrmUSrmhHSGNYA11oGtMyO3FcVOYnW9xHH9VKUAcw1MfHSc9HktzvYaEN34B6suymSxCwozsQ+ReHi6n7gG7/iNZvv88W6/Ikgdtl+Y2d6I5NfXqJQK/cQ1MPHQ1uZ5oFSeSFdWtn9Ky93b/olsYvURhUWcXef7TPamGmWXfM3oPeVAi8OIeDKLpWgSrxY3qvIY1gjCl5GOvn2jCLOaWUyN9sDX6aj5wNJaErdm3yNbKAlnurCp0W709ThVPQy+i+H+ixV92OlWC+bGe1VB4sHlx2GsxTPayqhPkyNdurB7gRWEFmPasBsXT+D6YIcu7MnLz5gLf9OG0e7Njp3ThV2bXsBSNKUNo518ftML6p1aUK+oZwfqJgVRIAXLg47E1acLgvkHgtGk1kYTJkfOCEMrxnI0hbuBZSTSeWlPd87kaprqeWwkUopVHxqmdTePYMqTdeRZ9d1svzARtLnODlmbO1XvoqpnhMBkaUAhHUM2/iVE6ONrZZjIoZ+6v6BiZhOZ7yufdjjOL7ybesAaZQog+qpX/R6oKayCqYCoKAmmpVCCaYBqYGpAAbabF8z+3yPxh0XsXJUycVPuYWm3IIyAFkhRmRowl/4hdU2uSFOZHFjv7PDm0xtC+9VAmspkwOAOxw1rgWj+H4uVH6hj08HSAAAAAElFTkSuQmCC'
    } )

    const hideDrawTools = () => {
      const container = document.getElementById( this.widgetOuterDivId )
      if ( !container ) return

      requestAnimationFrame( () => {
        const actionGroups = container.querySelectorAll( 'calcite-action-group' )
        if ( actionGroups.length > 1 ) {
          const firstGroup: any = actionGroups[0]
          firstGroup.style.borderInlineEndWidth = '0px'
          const secondGroup: any = actionGroups[1]
          secondGroup.style.display = 'none'
        }
      } )
    }

    const handleDrawToolCreated = ( e ) => {
      if ( e && e.getGraphicsLayer ) {
        const gl = e.getGraphicsLayer()
        if ( gl ) {
          gl.set( { listMode: 'hide', legendEnabled: 'false' } )
          hideDrawTools.call( this )
        }
      }
    }

    const effectivePortalUrl = this.state.portalUrl || this.props.portalUrl || this.props.portalSelf?.url || ''
    const isEnterprisePortal = ACLUtils.hasText( effectivePortalUrl ) && !this.isArcgisOnlineUrl( effectivePortalUrl )

    if ( !hasPrivileges ) {
      return (
        <Paper className="jimu-widget widget-infographic-player">
          <div className='esri-directions__sign-in-content' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%', width: '100%', padding: '25px', textAlign: 'center' }}>
            <div className='esri-widget__body' style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: this.localeHtmlString( 'noPermissionsOnPremMessage' ) }}>
            </div>
          </div>
        </Paper>
      )
    }

    if ( proxyToManyRequests ) {
      return (
        <Paper className="jimu-widget widget-infographic-player">
          <div className='esri-directions__sign-in-content'>
            <div className='esri-widget__body' dangerouslySetInnerHTML={{ __html: this.localeHtmlString( 'geRequestLimitExceeded' ) }}>
            </div>
          </div>
        </Paper>
      )
    }

    const defReport = this._defaultReportIsValid( defaultReport ) ? JSON.stringify( defaultReport ) : undefined
    let _selectedHier = this.getSelectedHierarchy( igData?.report )
    let useLatest
    let hierarchies; let validHierarchy; let hasValidHierarchy: boolean = true

    try {
      // Standard infographic dictionary is now updated in componentDidUpdate when country changes

      // We now check the report being used (only in Preset mode) for 'US' and
      // set the hierarchy to empty ('') if its a Standard infographic
      let skipHier = false
      useLatest = this.props.config.autoSelectLatestDataSource

      if ( useLatest && isPreset && igData && igData.report && igData.country === 'US' ) {
        if ( this._standardInfographicsDict && this._standardInfographicsDict.country === 'US' && this._standardInfographicsDict.list[igData.report] ) {
          _selectedHier = ''
          skipHier = true
        }
      }

      // attempt to verify the selectedHierarchy with available data sources
      if ( !skipHier && this.props.config.sourceCountry && _selectedHier && this.state.countries ) {
        hierarchies = getValidHierarchies( this.props.config.sourceCountry, this.state.countries )

        if ( hierarchies ) {
          validHierarchy = hierarchies.find( o => o.ID === _selectedHier )
          hasValidHierarchy = typeof validHierarchy !== 'undefined'
        }
      } else {
        _selectedHier = ''
      }
    } catch ( ex ) {
      console.log( "Widget render hierarchy error:", ex )
    }

    const isDarkTheme = theme?.sys?.color?.mode === 'dark'
    const isSearchPopoverOpen = !!this.state.isSearchPopoverOpen
    const showEnterpriseSigninMessage = isOnPremisesGE && isEnterprisePortal
    const showViewStatesPanel = this.showViewStatesPanel

    const svc: any = BaAppState.getServiceComponent( this.getWidgetOuterDiv(), this._baAppStateId )

    if ( svc ) {
      svc.setState( this._baAppStoreName, this._isOnPremisesGEKey, isOnPremisesGE )
      svc.setState( this._baAppStoreName, this._isEnterprisePortalKey, isEnterprisePortal )
    }

    return (
      <div id={this._topDivId} style={{ width: '100%', height: '100%' }}>
        <Paper
          ref={this.widgetOuterDivRef}
          css={getStyle( theme, this.props.id )}
          style={{
            position: 'relative',
            boxSizing: 'border-box',
            paddingBottom: showViewStatesPanel ? 'max(25%, 120px)' : 0
          }}
          className={`jimu-widget widget-infographic-player ba-infographic-${this.props.id}${isDarkTheme ? ' dark-theme' : ''}${isSearchPopoverOpen ? ' ba-search-popover-open' : ''}`} >
          {this.state.showLoader && (
            <div className='loading-container' style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}>
              <Loading type={LoadingType.Secondary} text={'Loading…'} />
            </div>
          )}
          {/* <img src={require('./assets/largeBusy.gif')} style={(isPreset && isPresetNotReady) ? spinnerHidden : mainBackgroundSpinner}></img> */}

          {/* {mapConnection} */}
          {Object.prototype.hasOwnProperty.call( this.props, 'useMapWidgetIds' ) && this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1 && ( <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={e => { this.activeViewChangeHandler( e, this ) }} /> )}
          {( user?.username || this.portalOnlineGEProxy ) && !signInRequired ? (
            <React.Fragment>
              {isPreset ? isPresetNotReady ? (
                <CustomWidgetPlaceholder iconSize='small' icon={theme.sys.color.mode === 'dark' ? baIconWhite : baIcon} label={this.localeString( '_widgetLabel' )} message={widgetPlaceholderTextToggle ? widgetPlaceholderText : ''} />
              ) : (
                <React.Fragment>
                  {!showingModal ? (
                    //{/*- - - - - INFOGRAPHIC/PRESET MODE - - - - - - - - - - - - - - - - - - - - - - */}
                    <ArcgisInfographic
                      id={this.presetInfographicId}
                      baStateId={this._baAppStateId}
                      env={window.jimuConfig.hostEnv}
                      username={igData.username}
                      token={token}
                      geoenrichmentUrl={this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : null}
                      portalUrl={this.state.portalUrl ? this.state.portalUrl : null}
                      portalOnlineGEProxy={this.portalOnlineGEProxy}
                      locationName={igData.locationName}
                      locationAttributes={igData.attributes ? igData.attributes : {}}
                      sourceCountry={igData.country}
                      selectedHierarchy={_selectedHier}
                      options={JSON.stringify( igData.buffers.infographicOptions )}
                      langCode={langCode}
                      reportId={igData.report}
                      reportLocation={igData.location}
                      reportgeometry={igData.geometry}
                      reportgeography={igData.geography}
                      reportsymbol={igData.symbol ? JSON.stringify( igData.symbol ) : undefined}
                      useLatestDataSource={this.props.config.autoSelectLatestDataSource}
                      standardInfographicID={this.state.stStandardInfographicID}
                      readyCallback={( elem ) => { this.onElementReady.bind( this )( elem ) }}
                    >
                    </ArcgisInfographic>
                  ) : (
                    <Modal className='d-flex justify-content-between' isOpen={showingModal} role='dialog' style={{ width: '100vw', height: '100vh', maxWidth: 'unset', margin: '0 auto' }}>
                      <ModalHeader toggle={() => {
                        this.updateState( 'showInfographicModal', false )
                      }}></ModalHeader>
                      <ModalBody>
                        <Paper css={css`background-color: transparent;`}>
                          <div slot="content" style={{ padding: '0px', height: '100%' }}>
                            <img src={require( './assets/largeBusy.gif' )} style={mainBackgroundSpinner}></img>
                            <ArcgisInfographic
                              id={this.presetInfographicId}
                              baStateId={this._baAppStateId}
                              env={window.jimuConfig.hostEnv}
                              username={igData.username}
                              token={token}
                              geoenrichmentUrl={this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : null}
                              portalUrl={this.state.portalUrl ? this.state.portalUrl : null}
                              portalOnlineGEProxy={this.portalOnlineGEProxy}
                              locationName={igData.locationName}
                              locationAttributes={igData.attributes ? igData.attributes : {}}
                              sourceCountry={igData.country}
                              selectedHierarchy={_selectedHier}
                              options={JSON.stringify( igData.buffers.infographicOptions )}
                              langCode={langCode}
                              reportId={igData.report}
                              reportLocation={igData.location}
                              reportgeometry={igData.geometry}
                              reportgeography={igData.geography}
                              reportsymbol={igData.symbol ? JSON.stringify( igData.symbol ) : undefined}
                              useLatestDataSource={this.props.config.autoSelectLatestDataSource}
                              standardInfographicID={this.state.stStandardInfographicID}
                              readyCallback={( elem ) => { this.onElementReady.bind( this )( elem ) }}
                            >
                            </ArcgisInfographic>
                          </div>
                        </Paper>
                      </ModalBody>
                    </Modal>
                  )}
                </React.Fragment>
              )
                : (
                  //{/*- - - - - WORKFLOW MODE - - - - - - - - - - - - - - - - - - - - - - -*/}
                  hasValidHierarchy
                    ? (
                      <React.Fragment>
                        <div className='containerStyle'>
                          {/*- - - - - WORKFLOW MODE - - - - - - - - - - - - - - - - - - - - - - -*/}
                          <Container>
                            {/* <Row> */}
                            <div style={{ display: workflowRunInWidget && showingModalRun ? 'none' : 'block', height: '100%' }}>
                              <ArcgisInfographicWorkflow
                                id={this.workflowId}
                                baStateId={this._baAppStateId}
                                token={token}
                                config={JSON.stringify( workflowConfigObj )}
                                env={window.jimuConfig.hostEnv}
                                geoenrichmentUrl={this.geoenrichmentServiceUrl ? this.geoenrichmentServiceUrl : null}
                                portalUrl={this.state.portalUrl ? this.state.portalUrl : null}
                                geocodeUrl={this.state.geocodeUrl ? this.state.geocodeUrl : null}
                                portalOnlineGEProxy={this.portalOnlineGEProxy}
                                routingUtilityUrl={this.state.routingUtilityUrl}
                                onSelectedFeatureClear={clearSelectedFeature}
                                onBuffersUpdate={bufferTrigger}
                                langCode={langCode}
                                selectedFeatureResult={JSON.stringify( { detail: searchObj } )}
                                onBaSearchFeatureChange={baSearchResultFeatureChange}
                                onRunInfographic={handleRunInfographic}
                                defaultReport={defReport}
                                useLatestDataSource={this.props.config.autoSelectLatestDataSource}
                                standardInfographicID={this.state.stStandardInfographicID}
                                readyCallback={( elem ) => { this.onElementReady.bind( this )( elem ) }}
                              >
                                <div slot="draw-components">
                                  {Object.prototype.hasOwnProperty.call( this.props, 'useMapWidgetIds' ) && this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1 && this.jimuMapView && ( drawPointEnabled || drawPolygonEnabled ) &&
                                    <JimuDraw
                                      jimuMapView={this.jimuMapView}
                                      operatorWidgetId={this.props.id}
                                      disableSymbolSelector={true}
                                      drawingOptions={{
                                        creationMode: JimuDrawCreationMode.Single,
                                        updateOnGraphicClick: false,
                                        visibleElements
                                      }}
                                      defaultSymbols={{
                                        pointSymbol: drawPointSymbol
                                      }}
                                      uiOptions={{
                                        isHideBgColor: true,
                                        isHideBorder: true
                                      }}
                                      onDrawingFinished={( e ) => { this.handleDrawEnd( e ) }}
                                      onJimuDrawCreated={handleDrawToolCreated}
                                    />
                                  }
                                </div>
                                {!workflowRunInWidget && (
                                  <div slot="infographic-modal">
                                    <Modal className='d-flex justify-content-between' isOpen={showingModalRun} role='dialog' style={{ width: '100vw', height: '100vh', maxWidth: 'unset', margin: '0 auto' }}>
                                      <ModalHeader toggle={closeWorkflowInfographic}></ModalHeader>
                                      <ModalBody>
                                        {renderWorkflowInfographicContent()}
                                      </ModalBody>
                                    </Modal>
                                  </div>
                                )}
                              </ArcgisInfographicWorkflow>
                            </div>
                            {workflowRunInWidget && showingModalRun && (
                              <div style={{ height: '100%' }}>
                                {renderWorkflowInfographicContent()}
                              </div>
                            )}
                            {/* </Row> */}
                          </Container>
                        </div>
                      </React.Fragment>
                    )
                    : (
                      // show message about using deprecated hierarchy
                      <div className='esri-directions__sign-in-content'>
                        <div className='esri-widget__body' style={{ padding: '30px' }} dangerouslySetInnerHTML={{ __html: this.localeHtmlString( 'deprecatedHierarchy' ) }}>
                        </div>
                      </div>
                    )
                )
              }
            </React.Fragment>
          ) : (
            <div className='esri-directions__sign-in-content' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '100%', width: '100%', padding: '0 24px', textAlign: 'center' }}>
              <div className='esri-widget__body' style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: this.localeHtmlString( showEnterpriseSigninMessage ? 'signinInfoEnterprise' : 'signinInfo' ) }}>
              </div>
              <div className='esri-widget__heading' style={{ marginTop: '20px' }} role='heading'>
                {this.localeString( 'signinReq' )}
              </div>
              <Button
                type='primary'
                style={{ width: 'auto' }}
                onClick={() => { this.promptSignIn() }}
                aria-label={this.localeString( 'signin' )}>
                {this.localeString( 'signin' )}
              </Button>
            </div>
          )}
          {showViewStatesPanel && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: '25%',
                minHeight: '120px',
                zIndex: 5,
                borderTop: '1px solid rgba(0, 0, 0, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                overflow: 'hidden'
              }}
            >
              {React.createElement( 'ba-view-states', {
                'data-owner-widget-id': this.props.id,
                style: {
                  display: 'block',
                  width: '100%',
                  height: '100%'
                }
              } )}
            </div>
          )}
        </Paper>
      </div>

    )
  }
}
