// @arcgis.core.identity
import esriId from "@arcgis/core/identity/IdentityManager"
import OAuthInfo from "@arcgis/core/identity/OAuthInfo"
import type Credential from "@arcgis/core/identity/Credential"

import { getLocale } from "@arcgis/core/intl"


//------------------------------------------------------------------------
//
// Configure
//
//------------------------------------------------------------------------

const authParams: Partial<OAuthInfo> = {
  appId: "arcgisonline"
}

/**
 * Configures the common OAuthInfo parameters (except portalUrl and locale).
 * @param params Parameters to configure.
 * appId - required. Defaults to "arcgisonline".
 * popup {boolean} - specifies how to show sign in dialog (in popup or in a separate window).
 *    In the case of popup, the application gets sign in credentials and continues working.
 *    In the case of no popup, the application will be restarted after sign in.
 *    For Business Analyst, the popup is preferable.
 * popupCallbackUrl - specifies relative URL to html file processing authorization callback
 *    when popup closes and authorization is applied.
 *    Defaults to "oauth-callback.html", that should be placed in the root application folder.
 * More parameters can be also specified except locale parameter, because locale will be overriden with
 * application locale when OAuthInfo is registered.
 */
export function configureOAuth ( params: Partial<OAuthInfo> ): void {
  // Avoid `Object.assign(...)` here because in some TS/module setups it can be typed incorrectly
  // and reported as "not callable". A simple copy works for our plain params object.
  for ( const key in params ) {
    if ( Object.prototype.hasOwnProperty.call( params, key ) ) {
      ( authParams as any )[key] = ( params as any )[key]
    }
  }

  //Object.assign(authParams as any, params)
  ( esriId as any ).normalizeWebTierAuth = true
}

//------------------------------------------------------------------------
//
// Get portal URL
//
//------------------------------------------------------------------------

const serverPromises: HashMap<Promise<string>> = {}

/**
 * Gets server URL.
 * @param serviceUrl Service or service layer URL.
 * @returns Server URL trimmed at "/rest/services" or null if this is not a service URL.
 */
export function getServerUrl ( serviceUrl: string ): string {
  const index = serviceUrl.indexOf( "/rest/services" )
  return index > 0 ? serviceUrl.slice( 0, index ) : null
}

/**
 * Gets portal URL.
 * @param serviceUrl Service or service layer URL.
 * @returns A promise resolved with portal URL if it is found.
 */
export function getPortalUrl ( serviceUrl: string ): Promise<string> {
  const serverUrl = getServerUrl( serviceUrl )
  if ( serverUrl ) {
    let promise = serverPromises[serverUrl]
    if ( !promise ) {
      promise = fetch( serverUrl + "/rest/info?f=json" ).then( async ( response ) => {
        const result = await response.json()
        return result.owningSystemUrl as string
      } )
      serverPromises[serverUrl] = promise
    }
    return promise
  }
  return null
}

//------------------------------------------------------------------------
//
// Registration
//
//------------------------------------------------------------------------

interface PortalInfo { portalUrl: string, oauthPromise?: Promise<Credential> }

const registeredPortals: HashMap<PortalInfo> = {}

/**
 * Tries register OAuthInfo for service layer.
 * @param serviceUrl Service or service layer URL.
 * @returns The promise resolved with portal URL if the server URL is recognized,
 * the portal was registered, and the sign in is needed.
 */
export function tryRegisterOAuth ( serviceUrl: string ): Promise<string> {
  const portalUrlPromise = getPortalUrl( serviceUrl )
  if ( portalUrlPromise ) {
    return portalUrlPromise.then( ( portalUrl ) => ( portalUrl && registerPortal( portalUrl ) ) || null )
  }
  return null
}

/**
 * Registers OAuthInfo for portal.
 * @param portalUrl Portal URL (without sharing/rest).
 * @returns Portal URL if the portal is registered and requires authentication.
 */
export function registerPortal ( portalUrl: string ): string {
  if ( getToken( portalUrl ) ) {
    // No need to register this portal because it is already known for identity manager.
    return null
  }
  if ( !registeredPortals[portalUrl] ) {
    esriId.registerOAuthInfos( [new OAuthInfo( { ...authParams, locale: getLocale(), portalUrl } )] )
    registeredPortals[portalUrl] = { portalUrl }
  }
  return registeredPortals[portalUrl].portalUrl
}

function getToken ( url?: string ): string {
  const credential = esriId.findCredential( url )
  return credential?.token
}

//------------------------------------------------------------------------
//
// Sign in
//
//------------------------------------------------------------------------

/**
 * Applies sign in on a service layer or a portal.
 * @param serviceOrPortalUrl Service or service layer URL or portal URL (without sharing/rest).
 * In the case of portal, it should be registered before with tryRegisterOAuth or registerPortal.
 * @param refreshPortalToken If true, the portal get credentials request is executed anyway to be sure that the token is refreshed.
 * @returns Sign in promise resolved when sign in is applied.
 */
export async function signIn ( serviceOrPortalUrl: string, refreshPortalToken?: boolean ): Promise<Credential> {
  const portalInfo = registeredPortals[serviceOrPortalUrl]
  let promise = refreshPortalToken ? null : portalInfo?.oauthPromise
  if ( !promise ) {
    promise = esriId.getCredential( serviceOrPortalUrl + ( portalInfo ? "/sharing" : "" ), {
      oAuthPopupConfirmation: false
    } )
    portalInfo && ( portalInfo.oauthPromise = promise )
  }
  return promise
}

export function signOutAllPortals (): void {
  esriId.destroyCredentials()
}

export async function collectServiceTokens ( serviceUrls: string[] ): Promise<HashMap<string>> {
  const serviceTokens: HashMap<string> = {}
  for ( const serviceUrl of serviceUrls ) {
    if ( getServerUrl( serviceUrl ) ) {
      await tryRegisterOAuth( serviceUrl )
    }
    await signIn( serviceUrl )
    serviceTokens[serviceUrl] = getToken( serviceUrl )
  }
  return serviceTokens
}
