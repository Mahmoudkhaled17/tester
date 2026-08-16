System.register(["jimu-core/emotion","jimu-core/react","jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_react__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/api/axiosConfig.ts"
/*!********************************************!*\
  !*** ./your-extensions/api/axiosConfig.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: 'https://tester.152-53-231-71.sslip.io',
    headers: {
        'Content-Type': 'application/json',
    },
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ },

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "react"
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ },

/***/ "./node_modules/axios/lib/adapters/adapters.js"
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch.js */ "./node_modules/axios/lib/adapters/fetch.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");






/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 *
 * @type {Object<string, Function|Object>}
 */
const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  fetch: {
    get: _fetch_js__WEBPACK_IMPORTED_MODULE_3__.getFetch,
  },
};

// Assign adapter names for easier debugging and identification
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      // Null-proto descriptors so a polluted Object.prototype.get cannot turn
      // these data descriptors into accessor descriptors on the way in.
      Object.defineProperty(fn, 'name', { __proto__: null, value });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', { __proto__: null, value });
  }
});

/**
 * Render a rejection reason string for unknown or unsupported adapters
 *
 * @param {string} reason
 * @returns {string}
 */
const renderReason = (reason) => `- ${reason}`;

/**
 * Check if the adapter is resolved (function, null, or false)
 *
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */
const isResolvedHandle = (adapter) =>
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(adapter) || adapter === null || adapter === false;

/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 *
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */
function getAdapter(adapters, config) {
  adapters = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(adapters) ? adapters : [adapters];

  const { length } = adapters;
  let nameOrAdapter;
  let adapter;

  const rejectedReasons = {};

  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters[i];
    let id;

    adapter = nameOrAdapter;

    if (!isResolvedHandle(nameOrAdapter)) {
      adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

      if (adapter === undefined) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"](`Unknown adapter '${id}'`);
      }
    }

    if (adapter && (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(adapter) || (adapter = adapter.get(config)))) {
      break;
    }

    rejectedReasons[id || '#' + i] = adapter;
  }

  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(
      ([id, state]) =>
        `adapter ${id} ` +
        (state === false ? 'is not supported by the environment' : 'is not available in the build')
    );

    let s = length
      ? reasons.length > 1
        ? 'since :\n' + reasons.map(renderReason).join('\n')
        : ' ' + renderReason(reasons[0])
      : 'as no adapter specified';

    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"](
      `There is no suitable adapter to dispatch the request ` + s,
      _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"].ERR_NOT_SUPPORT
    );
  }

  return adapter;
}

/**
 * Exports Axios adapters and utility to resolve an adapter
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter,

  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters,
});


/***/ },

/***/ "./node_modules/axios/lib/adapters/fetch.js"
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/adapters/fetch.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getFetch: () => (/* binding */ getFetch)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_composeSignals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/composeSignals.js */ "./node_modules/axios/lib/helpers/composeSignals.js");
/* harmony import */ var _helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/trackStream.js */ "./node_modules/axios/lib/helpers/trackStream.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/progressEventReducer.js */ "./node_modules/axios/lib/helpers/progressEventReducer.js");
/* harmony import */ var _helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/resolveConfig.js */ "./node_modules/axios/lib/helpers/resolveConfig.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_estimateDataURLDecodedBytes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/estimateDataURLDecodedBytes.js */ "./node_modules/axios/lib/helpers/estimateDataURLDecodedBytes.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_sanitizeHeaderValue_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/sanitizeHeaderValue.js */ "./node_modules/axios/lib/helpers/sanitizeHeaderValue.js");













const DEFAULT_CHUNK_SIZE = 64 * 1024;

const { isFunction } = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8 = (str) =>
  encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

// Node's WHATWG URL parser returns `username` and `password` percent-encoded.
// Decode before composing the `auth` option so credentials such as
// `my%40email.com:pass` are sent as `my@email.com:pass`. Falls back to the
// original value for malformed input so a bad encoding never throws.
const decodeURIComponentSafe = (value) => {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(value)) {
    return value;
  }

  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};

const maybeWithAuthCredentials = (url) => {
  const protocolIndex = url.indexOf('://');
  let urlToCheck = url;
  if (protocolIndex !== -1) {
    urlToCheck = urlToCheck.slice(protocolIndex + 3);
  }
  return urlToCheck.includes('@') || urlToCheck.includes(':');
};

const factory = (env) => {
  const globalObject =
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].global !== undefined && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].global !== null
      ? _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].global
      : globalThis;
  const { ReadableStream, TextEncoder } = globalObject;

  env = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call(
    {
      skipUndefined: true,
    },
    {
      Request: globalObject.Request,
      Response: globalObject.Response,
    },
    env
  );

  const { fetch: envFetch, Request, Response } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);

  if (!isFetchSupported) {
    return false;
  }

  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);

  const encodeText =
    isFetchSupported &&
    (typeof TextEncoder === 'function'
      ? (
          (encoder) => (str) =>
            encoder.encode(str)
        )(new TextEncoder())
      : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));

  const supportsRequestStream =
    isRequestSupported &&
    isReadableStreamSupported &&
    test(() => {
      let duplexAccessed = false;

      const request = new Request(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          duplexAccessed = true;
          return 'half';
        },
      });

      const hasContentType = request.headers.has('Content-Type');

      if (request.body != null) {
        request.body.cancel();
      }

      return duplexAccessed && !hasContentType;
    });

  const supportsResponseStream =
    isResponseSupported &&
    isReadableStreamSupported &&
    test(() => _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isReadableStream(new Response('').body));

  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body),
  };

  isFetchSupported &&
    (() => {
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((type) => {
        !resolvers[type] &&
          (resolvers[type] = (res, config) => {
            let method = res && res[type];

            if (method) {
              return method.call(res);
            }

            throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](
              `Response type '${type}' is not supported`,
              _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NOT_SUPPORT,
              config
            );
          });
      });
    })();

  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isBlob(body)) {
      return body.size;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSpecCompliantForm(body)) {
      const _request = new Request(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin, {
        method: 'POST',
        body,
      });
      return (await _request.arrayBuffer()).byteLength;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArrayBufferView(body) || _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArrayBuffer(body)) {
      return body.byteLength;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isURLSearchParams(body)) {
      body = body + '';
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };

  const resolveBodyLength = async (headers, body) => {
    const length = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(headers.getContentLength());

    return length == null ? getBodyLength(body) : length;
  };

  return async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = 'same-origin',
      fetchOptions,
      maxContentLength,
      maxBodyLength,
    } = (0,_helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_7__["default"])(config);

    const hasMaxContentLength = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(maxContentLength) && maxContentLength > -1;
    const hasMaxBodyLength = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(maxBodyLength) && maxBodyLength > -1;
    const own = (key) => (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProp(config, key) ? config[key] : undefined);

    let _fetch = envFetch || fetch;

    responseType = responseType ? (responseType + '').toLowerCase() : 'text';

    let composedSignal = (0,_helpers_composeSignals_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );

    let request = null;

    const unsubscribe =
      composedSignal &&
      composedSignal.unsubscribe &&
      (() => {
        composedSignal.unsubscribe();
      });

    let requestContentLength;

    // AxiosError we raise while the request body is being streamed. Captured
    // by identity so the catch block can surface it directly, regardless of
    // how the runtime wraps the resulting fetch rejection (undici exposes it
    // as `err.cause`; some browsers drop the original error entirely).
    let pendingBodyError = null;

    const maxBodyLengthError = () =>
      new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](
        'Request body larger than maxBodyLength limit',
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_BAD_REQUEST,
        config,
        request
      );

    try {
      // HTTP basic authentication
      let auth = undefined;
      const configAuth = own('auth');

      if (configAuth) {
        const username = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSafeProp(configAuth, 'username') || '';
        const password = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSafeProp(configAuth, 'password') || '';
        auth = {
          username,
          password
        };
      }

      if (maybeWithAuthCredentials(url)) {
        const parsedURL = new URL(url, _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin);

        if (!auth && (parsedURL.username || parsedURL.password)) {
          const urlUsername = decodeURIComponentSafe(parsedURL.username);
          const urlPassword = decodeURIComponentSafe(parsedURL.password);
          auth = {
            username: urlUsername,
            password: urlPassword
          };
        }

        if (parsedURL.username || parsedURL.password) {
          parsedURL.username = '';
          parsedURL.password = '';
          url = parsedURL.href;
        }
      }

      if (auth) {
        headers.delete('authorization');
        headers.set(
          'Authorization',
          'Basic ' + btoa(encodeUTF8((auth.username || '') + ':' + (auth.password || '')))
        );
      }

      // Enforce maxContentLength for data: URLs up-front so we never materialize
      // an oversized payload. The HTTP adapter applies the same check (see http.js
      // "if (protocol === 'data:')" branch).
      if (hasMaxContentLength && typeof url === 'string' && url.startsWith('data:')) {
        const estimated = (0,_helpers_estimateDataURLDecodedBytes_js__WEBPACK_IMPORTED_MODULE_9__["default"])(url);
        if (estimated > maxContentLength) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      // Enforce maxBodyLength against known-size bodies before dispatch using
      // the body's *actual* size — never a caller-declared Content-Length,
      // which could under-report to slip an oversized body past the check.
      // Unknown-size streams return undefined here and are counted per-chunk
      // below as fetch consumes them.
      if (hasMaxBodyLength && method !== 'get' && method !== 'head') {
        const outboundLength = await getBodyLength(data);
        if (typeof outboundLength === 'number' && isFinite(outboundLength)) {
          requestContentLength = outboundLength;
          if (outboundLength > maxBodyLength) {
            throw maxBodyLengthError();
          }
        }
      }

      // A streamed body under maxBodyLength must be counted as fetch consumes
      // it; its size is never trusted from a caller-declared Content-Length.
      const mustEnforceStreamBody =
        hasMaxBodyLength && (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isReadableStream(data) || _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isStream(data));

      const trackRequestStream = (stream, onProgress, flush) =>
        (0,_helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_4__.trackStream)(
          stream,
          DEFAULT_CHUNK_SIZE,
          (loadedBytes) => {
            if (hasMaxBodyLength && loadedBytes > maxBodyLength) {
              throw (pendingBodyError = maxBodyLengthError());
            }
            onProgress && onProgress(loadedBytes);
          },
          flush
        );

      if (
        supportsRequestStream &&
        method !== 'get' &&
        method !== 'head' &&
        (onUploadProgress || mustEnforceStreamBody)
      ) {
        requestContentLength =
          requestContentLength == null ? await resolveBodyLength(headers, data) : requestContentLength;

        // A declared length of 0 is only trusted to skip the wrap when we are
        // not enforcing a stream limit (which must not rely on that header).
        if (requestContentLength !== 0 || mustEnforceStreamBody) {
          let _request = new Request(url, {
            method: 'POST',
            body: data,
            duplex: 'half',
          });

          let contentTypeHeader;

          if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
            headers.setContentType(contentTypeHeader);
          }

          if (_request.body) {
            const [onProgress, flush] =
              (onUploadProgress &&
                (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.progressEventDecorator)(
                  requestContentLength,
                  (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.progressEventReducer)((0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.asyncDecorator)(onUploadProgress))
                )) ||
              [];

            data = trackRequestStream(_request.body, onProgress, flush);
          }
        }
      } else if (
        mustEnforceStreamBody &&
        !isRequestSupported &&
        isReadableStreamSupported &&
        method !== 'get' &&
        method !== 'head'
      ) {
        data = trackRequestStream(data);
      } else if (
        mustEnforceStreamBody &&
        isRequestSupported &&
        !supportsRequestStream &&
        method !== 'get' &&
        method !== 'head'
      ) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](
          'Stream request bodies are not supported by the current fetch implementation',
          _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NOT_SUPPORT,
          config,
          request
        );
      }

      if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }

      // Cloudflare Workers throws when credentials are defined
      // see https://github.com/cloudflare/workerd/issues/902
      const isCredentialsSupported = isRequestSupported && 'credentials' in Request.prototype;

      // If data is FormData and Content-Type is multipart/form-data without boundary,
      // delete it so fetch can set it correctly with the boundary
      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFormData(data)) {
        const contentType = headers.getContentType();
        if (
          contentType &&
          /^multipart\/form-data/i.test(contentType) &&
          !/boundary=/i.test(contentType)
        ) {
          headers.delete('content-type');
        }
      }

      // Set User-Agent header if not already set (fetch defaults to 'node' in Node.js)
      headers.set('User-Agent', 'axios/' + _env_data_js__WEBPACK_IMPORTED_MODULE_10__.VERSION, false);

      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: (0,_helpers_sanitizeHeaderValue_js__WEBPACK_IMPORTED_MODULE_11__.toByteStringHeaderObject)(headers.normalize()),
        body: data,
        duplex: 'half',
        credentials: isCredentialsSupported ? withCredentials : undefined,
      };

      request = isRequestSupported && new Request(url, resolvedOptions);

      let response = await (isRequestSupported
        ? _fetch(request, fetchOptions)
        : _fetch(url, resolvedOptions));

      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(response.headers);

      // Cheap pre-check: if the server honestly declares a content-length that
      // already exceeds the cap, reject before we start streaming.
      if (hasMaxContentLength) {
        const declaredLength = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(responseHeaders.getContentLength());
        if (declaredLength != null && declaredLength > maxContentLength) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      const isStreamResponse =
        supportsResponseStream && (responseType === 'stream' || responseType === 'response');

      if (
        supportsResponseStream &&
        response.body &&
        (onDownloadProgress || hasMaxContentLength || (isStreamResponse && unsubscribe))
      ) {
        const options = {};

        ['status', 'statusText', 'headers'].forEach((prop) => {
          options[prop] = response[prop];
        });

        const responseContentLength = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(responseHeaders.getContentLength());

        const [onProgress, flush] =
          (onDownloadProgress &&
            (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.progressEventDecorator)(
              responseContentLength,
              (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.progressEventReducer)((0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.asyncDecorator)(onDownloadProgress), true)
            )) ||
          [];

        let bytesRead = 0;
        const onChunkProgress = (loadedBytes) => {
          if (hasMaxContentLength) {
            bytesRead = loadedBytes;
            if (bytesRead > maxContentLength) {
              throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                'maxContentLength size of ' + maxContentLength + ' exceeded',
                _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_BAD_RESPONSE,
                config,
                request
              );
            }
          }
          onProgress && onProgress(loadedBytes);
        };

        response = new Response(
          (0,_helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_4__.trackStream)(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }

      responseType = responseType || 'text';

      let responseData = await resolvers[_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].findKey(resolvers, responseType) || 'text'](
        response,
        config
      );

      // Fallback enforcement for environments without ReadableStream support
      // (legacy runtimes). Detect materialized size from typed output; skip
      // streams/Response passthrough since the user will read those themselves.
      if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
        let materializedSize;
        if (responseData != null) {
          if (typeof responseData.byteLength === 'number') {
            materializedSize = responseData.byteLength;
          } else if (typeof responseData.size === 'number') {
            materializedSize = responseData.size;
          } else if (typeof responseData === 'string') {
            materializedSize =
              typeof TextEncoder === 'function'
                ? new TextEncoder().encode(responseData).byteLength
                : responseData.length;
          }
        }
        if (typeof materializedSize === 'number' && materializedSize > maxContentLength) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      !isStreamResponse && unsubscribe && unsubscribe();

      return await new Promise((resolve, reject) => {
        (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_8__["default"])(resolve, reject, {
          data: responseData,
          headers: _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request,
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();

      // Safari can surface fetch aborts as a DOMException-like object whose
      // branded getters throw. Prefer our composed signal reason before reading
      // the caught error, preserving timeout vs cancellation semantics.
      if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        const canceledError = composedSignal.reason;
        canceledError.config = config;
        request && (canceledError.request = request);
        if (err !== canceledError) {
          // Non-enumerable to match native Error `cause` semantics so loggers
          // don't recurse into circular fetch internals (see #7205).
          Object.defineProperty(canceledError, 'cause', {
            __proto__: null,
            value: err,
            writable: true,
            enumerable: false,
            configurable: true,
          });
        }
        throw canceledError;
      }

      // Surface a maxBodyLength violation we raised while the request body was
      // being streamed. Matching by identity (rather than reading
      // `err.cause.isAxiosError`) keeps the error deterministic across runtimes
      // and avoids both prototype-pollution reads and mis-attributing a foreign
      // AxiosError that merely happened to land in `err.cause`.
      if (pendingBodyError) {
        request && !pendingBodyError.request && (pendingBodyError.request = request);
        throw pendingBodyError;
      }

      // Re-throw AxiosErrors we raised synchronously (data: URL / content-length
      // pre-checks, response size enforcement) without re-wrapping them.
      if (err instanceof _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        request && !err.request && (err.request = request);
        throw err;
      }

      if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
        const networkError = new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](
          'Network Error',
          _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NETWORK,
          config,
          request,
          err && err.response
        );
        // Non-enumerable to match native Error `cause` semantics so loggers
        // don't recurse into circular fetch internals (see #7205).
        Object.defineProperty(networkError, 'cause', {
          __proto__: null,
          value: err.cause || err,
          writable: true,
          enumerable: false,
          configurable: true,
        });
        throw networkError;
      }

      throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(err, err && err.code, config, request, err && err.response);
    }
  };
};

const seedCache = new Map();

const getFetch = (config) => {
  let env = (config && config.env) || {};
  const { fetch, Request, Response } = env;
  const seeds = [Request, Response, fetch];

  let len = seeds.length,
    i = len,
    seed,
    target,
    map = seedCache;

  while (i--) {
    seed = seeds[i];
    target = map.get(seed);

    target === undefined && map.set(seed, (target = i ? new Map() : factory(env)));

    map = target;
  }

  return target;
};

const adapter = getFetch();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adapter);


/***/ },

/***/ "./node_modules/axios/lib/adapters/xhr.js"
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/progressEventReducer.js */ "./node_modules/axios/lib/helpers/progressEventReducer.js");
/* harmony import */ var _helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/resolveConfig.js */ "./node_modules/axios/lib/helpers/resolveConfig.js");
/* harmony import */ var _helpers_sanitizeHeaderValue_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/sanitizeHeaderValue.js */ "./node_modules/axios/lib/helpers/sanitizeHeaderValue.js");












const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported &&
  function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = (0,_helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_9__["default"])(config);
      let requestData = _config.data;
      const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_7__["default"].from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;

      function done() {
        flushUpload && flushUpload(); // flush events
        flushDownload && flushDownload(); // flush events

        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

        _config.signal && _config.signal.removeEventListener('abort', onCanceled);
      }

      let request = new XMLHttpRequest();

      request.open(_config.method.toUpperCase(), _config.url, true);

      // Set the request timeout in MS
      request.timeout = _config.timeout;

      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_7__["default"].from(
          'getAllResponseHeaders' in request && request.getAllResponseHeaders()
        );
        const responseData =
          !responseType || responseType === 'text' || responseType === 'json'
            ? request.responseText
            : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request,
        };

        (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
          function _resolve(value) {
            resolve(value);
            done();
          },
          function _reject(err) {
            reject(err);
            done();
          },
          response
        );

        // Clean up request
        request = null;
      }

      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (
            request.status === 0 &&
            !(request.responseURL && request.responseURL.startsWith('file:'))
          ) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ECONNABORTED, config, request));
        done();

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError(event) {
        // Browsers deliver a ProgressEvent in XHR onerror
        // (message may be empty; when present, surface it)
        // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
        const msg = event && event.message ? event.message : 'Network Error';
        const err = new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](msg, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ERR_NETWORK, config, request);
        // attach the underlying event for consumers who want details
        err.event = event || null;
        reject(err);
        done();
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout
          ? 'timeout of ' + _config.timeout + 'ms exceeded'
          : 'timeout exceeded';
        const transitional = _config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_2__["default"];
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(
          new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ECONNABORTED,
            config,
            request
          )
        );
        done();

        // Clean up request
        request = null;
      };

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((0,_helpers_sanitizeHeaderValue_js__WEBPACK_IMPORTED_MODULE_10__.toByteStringHeaderObject)(requestHeaders), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }

      // Add withCredentials to request if needed
      if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = _config.responseType;
      }

      // Handle progress if needed
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_8__.progressEventReducer)(onDownloadProgress, true);
        request.addEventListener('progress', downloadThrottled);
      }

      // Not all browsers support upload events
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_8__.progressEventReducer)(onUploadProgress);

        request.upload.addEventListener('progress', uploadThrottled);

        request.upload.addEventListener('loadend', flushUpload);
      }

      if (_config.cancelToken || _config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_4__["default"](null, config, request) : cancel);
          request.abort();
          done();
          request = null;
        };

        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted
            ? onCanceled()
            : _config.signal.addEventListener('abort', onCanceled);
        }
      }

      const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_config.url);

      if (protocol && !_platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].protocols.includes(protocol)) {
        reject(
          new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
            'Unsupported protocol ' + protocol + ':',
            _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ERR_BAD_REQUEST,
            config
          )
        );
        done();
        return;
      }

      // Send the request
      request.send(requestData || null);
    });
  });


/***/ },

/***/ "./node_modules/axios/lib/axios.js"
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_2__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype, context, { allOwnKeys: true });

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend(instance, context, null, { allOwnKeys: true });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_2__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_8__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_9__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_13__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_14__["default"];

axios.formToJSON = (thing) => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ },

/***/ "./node_modules/axios/lib/cancel/CancelToken.js"
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then((cancel) => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = (onfulfilled) => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel,
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ },

/***/ "./node_modules/axios/lib/cancel/CanceledError.js"
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




class CanceledError extends _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
    this.name = 'CanceledError';
    this.__CANCEL__ = true;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ },

/***/ "./node_modules/axios/lib/cancel/isCancel.js"
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ },

/***/ "./node_modules/axios/lib/core/Axios.js"
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");












const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_6__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = (() => {
          if (!dummy.stack) {
            return '';
          }

          const firstNewlineIndex = dummy.stack.indexOf('\n');

          return firstNewlineIndex === -1 ? '' : dummy.stack.slice(firstNewlineIndex + 1);
        })();
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack) {
            const firstNewlineIndex = stack.indexOf('\n');
            const secondNewlineIndex =
              firstNewlineIndex === -1 ? -1 : stack.indexOf('\n', firstNewlineIndex + 1);
            const stackWithoutTwoTopLines =
              secondNewlineIndex === -1 ? '' : stack.slice(secondNewlineIndex + 1);

            if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
              err.stack += '\n' + stack;
            }
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this.defaults, config);

    const { transitional, paramsSerializer, headers } = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_6__["default"].assertOptions(
        transitional,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean),
          legacyInterceptorReqResOrdering: validators.transitional(validators.boolean),
          advertiseZstdAcceptEncoding: validators.transitional(validators.boolean),
          validateStatusUndefinedResolves: validators.transitional(validators.boolean),
        },
        false
      );
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer,
        };
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_6__["default"].assertOptions(
          paramsSerializer,
          {
            encode: validators.function,
            serialize: validators.function,
          },
          true
        );
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) {
      // do nothing
    } else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }

    _helpers_validator_js__WEBPACK_IMPORTED_MODULE_6__["default"].assertOptions(
      config,
      {
        baseUrl: validators.spelling('baseURL'),
        withXsrfToken: validators.spelling('withXSRFToken'),
      },
      true
    );

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].merge(headers.common, headers[config.method]);

    headers &&
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'query', 'common'], (method) => {
        delete headers[method];
      });

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_7__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      const legacyInterceptorReqResOrdering =
        transitional && transitional.legacyInterceptorReqResOrdering;

      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this), undefined];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled ? onFulfilled(newConfig) : newConfig;
      } catch (error) {
        if (!onRejected) {
          promise = Promise.reject(error);
          break;
        }

        try {
          const rejectedResult = onRejected.call(this, error);

          if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isThenable(rejectedResult)) {
            promise = Promise.resolve(rejectedResult).then(() =>
              _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_3__["default"].call(this, newConfig)
            );
          }
        } catch (rejectedError) {
          promise = Promise.reject(rejectedError);
        }

        break;
      }
    }

    if (!promise) {
      try {
        promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_3__["default"].call(this, newConfig);
      } catch (error) {
        promise = Promise.reject(error);
      }
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_5__["default"])(config.baseURL, config.url, config.allowAbsoluteUrls, config);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(
      (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config || {}, {
        method,
        url,
        data: config && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config, 'data') ? config.data : undefined,
      })
    );
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['post', 'put', 'patch', 'query'], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(
        (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config || {}, {
          method,
          headers: isForm
            ? {
                'Content-Type': 'multipart/form-data',
              }
            : {},
          url,
          data,
        })
      );
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  // QUERY is a safe/idempotent read method; multipart form bodies don't fit
  // its semantics, so no queryForm shorthand is generated.
  if (method !== 'query') {
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ },

/***/ "./node_modules/axios/lib/core/AxiosError.js"
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REDACTED: () => (/* binding */ REDACTED),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const REDACTED = '[REDACTED ****]';

function hasOwnOrPrototypeToJSON(source) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(source, 'toJSON')) {
    return true;
  }

  let prototype = Object.getPrototypeOf(source);

  while (prototype && prototype !== Object.prototype) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(prototype, 'toJSON')) {
      return true;
    }

    prototype = Object.getPrototypeOf(prototype);
  }

  return false;
}

// Build a plain-object snapshot of `config` and replace the value of any key
// (case-insensitive) listed in `redactKeys` with REDACTED. Walks through arrays
// and AxiosHeaders, and short-circuits on circular references.
function redactConfig(config, redactKeys) {
  const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
  const seen = [];

  const visit = (source) => {
    if (source === null || typeof source !== 'object') return source;
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(source)) return source;
    if (seen.indexOf(source) !== -1) return undefined;

    if (source instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      source = source.toJSON();
    }

    seen.push(source);

    let result;
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(source)) {
      result = [];
      source.forEach((v, i) => {
        const reducedValue = visit(v);
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(reducedValue)) {
          result[i] = reducedValue;
        }
      });
    } else {
      if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
        seen.pop();
        return source;
      }

      result = Object.create(null);
      for (const [key, value] of Object.entries(source)) {
        const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(reducedValue)) {
          result[key] = reducedValue;
        }
      }
    }

    seen.pop();
    return result;
  };

  return visit(config);
}

function stringifySafely(value) {
  try {
    return String(value);
  } catch (err) {
    return '';
  }
}

function aggregateErrorMessage(error) {
  const message = error.errors
    .map((entry) => {
      try {
        return entry && entry.message ? stringifySafely(entry.message) : stringifySafely(entry);
      } catch (err) {
        return '';
      }
    })
    .filter(Boolean)
    .join('; ');

  return message || error.name || 'AggregateError';
}

class AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    // `AggregateError` (thrown by Node on dual-stack/Happy-Eyeballs connection
    // failures) has an empty `message`; its detail lives in `errors[]`. Without
    // this, the wrapped error surfaces with a blank message (see #6721).
    let message = error.message;
    if (!message && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(error.errors) && error.errors.length) {
      message = aggregateErrorMessage(error);
    }

    const axiosError = new AxiosError(message, code || error.code, config, request, response);
    // Match native `Error` `cause` semantics: non-enumerable. The wrapped
    // error often carries circular internals (sockets, requests, agents), so
    // an enumerable `cause` makes structured loggers (pino/winston) and any
    // own-property walk throw "Converting circular structure to JSON".
    // Regression from #6982; see #7205. `__proto__: null` mirrors the
    // `message` descriptor below (prototype-pollution-safe descriptor).
    Object.defineProperty(axiosError, 'cause', {
      __proto__: null,
      value: error,
      writable: true,
      enumerable: false,
      configurable: true,
    });
    axiosError.name = error.name;

    // Preserve status from the original error if not already set from response
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }

    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(message, code, config, request, response) {
    super(message);

    // Make message enumerable to maintain backward compatibility
    // The native Error constructor sets message as non-enumerable,
    // but axios < v1.13.3 had it as enumerable
    Object.defineProperty(this, 'message', {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: message,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    this.name = 'AxiosError';
    this.isAxiosError = true;
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }

  toJSON() {
    // Opt-in redaction: when the request config carries a `redact` array, the
    // value of any matching key (case-insensitive, at any depth) is replaced
    // with REDACTED in the serialized snapshot. Undefined or empty leaves the
    // existing serialization behavior unchanged.
    const config = this.config;
    const redactKeys = config && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config, 'redact') ? config.redact : undefined;
    const serializedConfig =
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(redactKeys) && redactKeys.length > 0
        ? redactConfig(config, redactKeys)
        : _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(config);

    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: serializedConfig,
      code: this.code,
      status: this.status,
    };
  }
}

// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ECONNREFUSED = 'ECONNREFUSED';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';
AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = 'ERR_FORM_DATA_DEPTH_EXCEEDED';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ },

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js"
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");
/* harmony import */ var _helpers_sanitizeHeaderValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/sanitizeHeaderValue.js */ "./node_modules/axios/lib/helpers/sanitizeHeaderValue.js");






const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : (0,_helpers_sanitizeHeaderValue_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeHeaderValue)(String(value));
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const parameterNameRE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

function trimOWS(value) {
  let start = 0;
  let end = value.length;

  while (start < end) {
    const code = value.charCodeAt(start);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    start += 1;
  }

  while (end > start) {
    const code = value.charCodeAt(end - 1);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    end -= 1;
  }

  return start === 0 && end === value.length ? value : value.slice(start, end);
}

function decodeQuotedString(value) {
  const last = value.length - 1;

  if (last < 1 || value.charCodeAt(0) !== 0x22 || value.charCodeAt(last) !== 0x22) {
    return value;
  }

  let decoded = '';

  for (let i = 1; i < last; i++) {
    const code = value.charCodeAt(i);

    if (code === 0x22) {
      return value;
    }

    if (code === 0x5c) {
      i += 1;

      if (i >= last) {
        return value;
      }
    }

    decoded += value[i];
  }

  return decoded;
}

function parseParameters(value) {
  const parameters = Object.create(null);
  const str = String(value);
  let start = 0;
  let quoted = false;
  let escaped = false;

  function parseParameter(end) {
    const part = trimOWS(str.slice(start, end));
    const equals = part.indexOf('=');

    if (equals < 1) {
      return;
    }

    const name = trimOWS(part.slice(0, equals));

    if (!parameterNameRE.test(name)) {
      return;
    }

    const normalizedName = name.toLowerCase();

    if (
      normalizedName === '__proto__' ||
      normalizedName === 'constructor' ||
      normalizedName === 'prototype'
    ) {
      return;
    }

    const parameterValue = trimOWS(part.slice(equals + 1));
    parameters[normalizedName] = decodeQuotedString(parameterValue);
  }

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (quoted) {
      if (escaped) {
        escaped = false;
      } else if (code === 0x5c) {
        escaped = true;
      } else if (code === 0x22) {
        quoted = false;
      }
    } else if (code === 0x22) {
      quoted = true;
    } else if (code === 0x2c || code === 0x3b) {
      parseParameter(i);
      start = i + 1;
    }
  }

  parseParameter(str.length);

  return parameters;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true,
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        return;
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if (
        !key ||
        self[key] === undefined ||
        _rewrite === true ||
        (_rewrite === undefined && self[key] !== false)
      ) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(header) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSafeIterable(header)) {
      let obj = Object.create(null),
        dest,
        key;
      for (const entry of header) {
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(entry)) {
          throw new TypeError('Object iterator must return a key-value pair');
        }

        key = entry[0];

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(obj, key)) {
          dest = obj[key];
          obj[key] = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]];
        } else {
          obj[key] = entry[1];
        }
      }

      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(
        key &&
        this[key] !== undefined &&
        (!matcher || matchHeaderValue(this, this[key], key, matcher))
      );
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null &&
        value !== false &&
        (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON())
      .map(([header, value]) => header + ': ' + value)
      .join('\n');
  }

  getSetCookie() {
    const value = this.get('set-cookie');
    return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value : value == null || value === false ? [] : [value];
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static parseParameters(value) {
    return parseParameters(value);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals =
      (this[$internals] =
      this[$internals] =
        {
          accessors: {},
        });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    },
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ },

/***/ "./node_modules/axios/lib/core/InterceptorManager.js"
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null,
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ },

/***/ "./node_modules/axios/lib/core/buildFullPath.js"
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");






const malformedHttpProtocol = /^https?:(?!\/\/)/i;
const httpProtocolControlCharacters = /[\t\n\r]/g;

function stripLeadingC0ControlOrSpace(url) {
  let i = 0;
  while (i < url.length && url.charCodeAt(i) <= 0x20) {
    i++;
  }
  return url.slice(i);
}

function normalizeURLForProtocolCheck(url) {
  return stripLeadingC0ControlOrSpace(url).replace(httpProtocolControlCharacters, '');
}

// Redact the parts of a URL that can carry secrets before it is embedded in an
// error message. AxiosError.toJSON() serializes `message` verbatim and errors
// are commonly logged, while the opt-in `config.redact` model only cleans
// config keys — it cannot reach the message. Redact only the genuinely
// sensitive substrings — userinfo (credentials), query parameter values and
// fragment contents — with the same REDACTED marker the config redaction uses,
// while keeping the scheme, host, path and parameter names so the offending
// request stays accurately identifiable.
function redactFragment(fragment) {
  if (!fragment) {
    return fragment;
  }

  return fragment.replace(/(^|&)([^=&]*=)?[^&]+/g, (match, separator, parameterName = '') => {
    return `${separator}${parameterName}${_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__.REDACTED}`;
  });
}

function redactSensitiveURLParts(url) {
  const redactedURL = url.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__.REDACTED}@`);
  const fragmentIndex = redactedURL.indexOf('#');
  const urlWithoutFragment =
    fragmentIndex === -1 ? redactedURL : redactedURL.slice(0, fragmentIndex);
  const redactedURLWithoutFragment = urlWithoutFragment.replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__.REDACTED}`
  );

  if (fragmentIndex === -1) {
    return redactedURLWithoutFragment;
  }

  return `${redactedURLWithoutFragment}#${redactFragment(redactedURL.slice(fragmentIndex + 1))}`;
}

function assertValidHttpProtocolURL(url, config) {
  if (typeof url === 'string') {
    const normalizedURL = normalizeURLForProtocolCheck(url);
    if (malformedHttpProtocol.test(normalizedURL)) {
      throw new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
        `Invalid URL ${JSON.stringify(redactSensitiveURLParts(normalizedURL))}: missing "//" after protocol`,
        _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_INVALID_URL,
        config
      );
    }
  }
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls, config) {
  assertValidHttpProtocolURL(requestedURL, config);
  let isRelativeUrl = !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_1__["default"])(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
    assertValidHttpProtocolURL(baseURL, config);
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ },

/***/ "./node_modules/axios/lib/core/dispatchRequest.js"
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_3__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(config, config.transformRequest);

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_5__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].adapter, config);

  return adapter(config).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Expose the current response on config so that transformResponse can
      // attach it to any AxiosError it throws (e.g. on JSON parse failure).
      // We clean it up afterwards to avoid polluting the config object.
      config.response = response;
      try {
        response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(config, config.transformResponse, response);
      } finally {
        delete config.response;
      }

      response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(response.headers);

      return response;
    },
    function onAdapterRejection(reason) {
      if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          config.response = reason.response;
          try {
            reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(
              config,
              config.transformResponse,
              reason.response
            );
          } finally {
            delete config.response;
          }
          reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(reason.response.headers);
        }
      }

      return Promise.reject(reason);
    }
  );
}


/***/ },

/***/ "./node_modules/axios/lib/core/mergeConfig.js"
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => (thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? { ...thing } : thing);

const ownEnumerableKeys = (thing) => {
  if (Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor) {
    return Object.keys(thing).concat(
      Object.getOwnPropertySymbols(thing).filter(
        (symbol) => Object.getOwnPropertyDescriptor(thing, symbol).enumerable
      )
    );
  }
  return Object.keys(thing);
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config1 = config1 || {};
  config2 = config2 || {};

  // Use a null-prototype object so that downstream reads such as `config.auth`
  // or `config.baseURL` cannot inherit polluted values from Object.prototype.
  // `hasOwnProperty` is restored as a non-enumerable own slot to preserve
  // ergonomics for user code that relies on it.
  const config = Object.create(null);
  Object.defineProperty(config, 'hasOwnProperty', {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: false,
    writable: true,
    configurable: true,
  });

  function getMergedValue(target, source, prop, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].merge.call({ caseless }, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(a, b, prop, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, prop, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  function getMergedTransitionalOption(prop) {
    const transitional2 = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config2, 'transitional')
      ? config2.transitional
      : undefined;

    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(transitional2)) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(transitional2)) {
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(transitional2, prop)) {
          return transitional2[prop];
        }
      } else {
        return undefined;
      }
    }

    const transitional1 = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config1, 'transitional')
      ? config1.transitional
      : undefined;

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(transitional1) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(transitional1, prop)) {
      return transitional1[prop];
    }

    return undefined;
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config2, prop)) {
      return getMergedValue(a, b);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config1, prop)) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    allowedSocketPaths: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) =>
      mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true),
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(ownEnumerableKeys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') return;
    const merge = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const a = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config1, prop) ? config1[prop] : undefined;
    const b = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config2, prop) ? config2[prop] : undefined;
    const configValue = merge(a, b, prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  if (
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config2, 'validateStatus') &&
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(config2.validateStatus) &&
    getMergedTransitionalOption('validateStatusUndefinedResolves') === false
  ) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(config1, 'validateStatus')) {
      config.validateStatus = getMergedValue(undefined, config1.validateStatus);
    } else {
      delete config.validateStatus;
    }
  }

  return config;
}


/***/ },

/***/ "./node_modules/axios/lib/core/setFormDataHeaders.js"
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/setFormDataHeaders.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setFormDataHeaders)
/* harmony export */ });


const FORM_DATA_CONTENT_HEADERS = ['content-type', 'content-length'];

/**
 * Apply the headers generated by a FormData implementation to the request headers,
 * honoring the `formDataHeaderPolicy` option: with 'content-only', copy only the
 * content-* headers; otherwise merge all of them.
 *
 * @param {AxiosHeaders} headers - the request headers to mutate
 * @param {Object | null | undefined} formHeaders - headers produced by the FormData implementation
 * @param {String} [policy] - the resolved `formDataHeaderPolicy` config value
 *
 * @returns {void}
 */
function setFormDataHeaders(headers, formHeaders, policy) {
  if (policy !== 'content-only') {
    headers.set(formHeaders);
    return;
  }

  Object.entries(formHeaders || {}).forEach(([key, val]) => {
    if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
      headers.set(key, val);
    }
  });
}


/***/ },

/***/ "./node_modules/axios/lib/core/settle.js"
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      response.status >= 400 && response.status < 500 ? _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST : _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE,
      response.config,
      response.request,
      response
    ));
  }
}


/***/ },

/***/ "./node_modules/axios/lib/core/transformData.js"
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ },

/***/ "./node_modules/axios/lib/defaults/index.js"
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










const own = (obj, key) => (obj != null && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(obj, key) ? obj[key] : undefined);

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {
  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_2__["default"],

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [
    function transformRequest(data, headers) {
      const contentType = headers.getContentType() || '';
      const hasJSONContentType = contentType.indexOf('application/json') > -1;
      const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

      if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
        data = new FormData(data);
      }

      const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

      if (isFormData) {
        return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_6__["default"])(data)) : data;
      }

      if (
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data) ||
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReadableStream(data)
      ) {
        return data;
      }
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
        return data.buffer;
      }
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
        headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
        return data.toString();
      }

      let isFileList;

      if (isObjectPayload) {
        const formSerializer = own(this, 'formSerializer');
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data, formSerializer).toString();
        }

        if (
          (isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) ||
          contentType.indexOf('multipart/form-data') > -1
        ) {
          const env = own(this, 'env');
          const _FormData = env && env.FormData;

          return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
            isFileList ? { 'files[]': data } : data,
            _FormData && new _FormData(),
            formSerializer
          );
        }
      }

      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }

      return data;
    },
  ],

  transformResponse: [
    function transformResponse(data) {
      const transitional = own(this, 'transitional') || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const responseType = own(this, 'responseType');
      const JSONRequested = responseType === 'json';

      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isResponse(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReadableStream(data)) {
        return data;
      }

      if (
        data &&
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) &&
        ((forcedJSONParsing && !responseType) || JSONRequested)
      ) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;

        try {
          return JSON.parse(data, own(this, 'parseReviver'));
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_RESPONSE, this, null, own(this, 'response'));
            }
            throw e;
          }
        }
      }

      return data;
    },
  ],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].classes.Blob,
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': undefined,
    },
  },
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'query'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ },

/***/ "./node_modules/axios/lib/defaults/transitional.js"
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true,
  advertiseZstdAcceptEncoding: false,
  validateStatusUndefinedResolves: true,
});


/***/ },

/***/ "./node_modules/axios/lib/env/data.js"
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.19.0";

/***/ },

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js"
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder
    ? (value) => encoder.call(this, value, encode)
    : encode;

  return this._pairs
    .map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '')
    .join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ },

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js"
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ },

/***/ "./node_modules/axios/lib/helpers/bind.js"
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


/**
 * Create a bound version of a function with a specified `this` context
 *
 * @param {Function} fn - The function to bind
 * @param {*} thisArg - The value to be passed as the `this` parameter
 * @returns {Function} A new function that will call the original function with the specified `this` context
 */
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/buildURL.js"
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL),
/* harmony export */   encode: () => (/* binding */ encode)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
 * their plain counterparts (`:`, `$`, `,`, `+`).
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  url = url || '';

  const _options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(options)
    ? {
        serialize: options,
      }
    : options;

  // Read serializer options pollution-safely: own properties and methods on a
  // class/template prototype are honored, but values injected onto a polluted
  // Object.prototype are ignored.
  const _encode = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getSafeProp(_options, 'encode') || encode;
  const serializeFn = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getSafeProp(_options, 'serialize');

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params)
      ? params.toString()
      : new _AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, _options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/combineURLs.js"
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  if (!relativeURL) {
    return baseURL;
  }

  let end = baseURL.length;

  while (end > 0 && baseURL.charCodeAt(end - 1) === 47) {
    end--;
  }

  return baseURL.slice(0, end) + '/' + relativeURL.replace(/^\/+/, '');
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/composeSignals.js"
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/composeSignals.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




const composeSignals = (signals, timeout) => {
  signals = signals ? signals.filter(Boolean) : [];

  if (!timeout && !signals.length) {
    return;
  }

  const controller = new AbortController();

  let aborted = false;

  const onabort = function (reason) {
    if (!aborted) {
      aborted = true;
      unsubscribe();
      const err = reason instanceof Error ? reason : this.reason;
      controller.abort(
        err instanceof _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]
          ? err
          : new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](err instanceof Error ? err.message : err)
      );
    }
  };

  let timer =
    timeout &&
    setTimeout(() => {
      timer = null;
      onabort(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](`timeout of ${timeout}ms exceeded`, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ETIMEDOUT));
    }, timeout);

  const unsubscribe = () => {
    if (!signals) { return; }
    timer && clearTimeout(timer);
    timer = null;
    signals.forEach((signal) => {
      signal.unsubscribe
        ? signal.unsubscribe(onabort)
        : signal.removeEventListener('abort', onabort);
    });
    signals = null;
  };

  signals.forEach((signal) => {
    if (aborted) {
      return;
    }

    if (signal.aborted) {
      onabort.call(signal);
      return;
    }

    signal.addEventListener('abort', onabort, { once: true });
  });

  const { signal } = controller;

  signal.unsubscribe = () => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].asap(unsubscribe);

  return signal;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (composeSignals);


/***/ },

/***/ "./node_modules/axios/lib/helpers/cookies.js"
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasStandardBrowserEnv
  ? // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === 'undefined') return;

        const cookie = [`${name}=${encodeURIComponent(value)}`];

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(expires)) {
          cookie.push(`expires=${new Date(expires).toUTCString()}`);
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(path)) {
          cookie.push(`path=${path}`);
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(domain)) {
          cookie.push(`domain=${domain}`);
        }
        if (secure === true) {
          cookie.push('secure');
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(sameSite)) {
          cookie.push(`SameSite=${sameSite}`);
        }

        document.cookie = cookie.join('; ');
      },

      read(name) {
        if (typeof document === 'undefined') return null;
        // Match name=value by splitting on the semicolon separator instead of building a
        // RegExp from `name` — interpolating an unescaped string into a RegExp would let
        // metacharacters (e.g. `.+?` in an attacker-influenced cookie name) cause ReDoS or
        // match the wrong cookie. Browsers may serialize cookie pairs as either ";" or
        // "; ", so ignore optional whitespace before each cookie name.
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].replace(/^\s+/, '');
          const eq = cookie.indexOf('=');
          if (eq !== -1 && cookie.slice(0, eq) === name) {
            try {
              return decodeURIComponent(cookie.slice(eq + 1));
            } catch (e) {
              return cookie.slice(eq + 1);
            }
          }
        }
        return null;
      },

      remove(name) {
        this.write(name, '', Date.now() - 86400000, '/');
      },
    }
  : // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {},
      read() {
        return null;
      },
      remove() {},
    });


/***/ },

/***/ "./node_modules/axios/lib/helpers/estimateDataURLDecodedBytes.js"
/*!***********************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/estimateDataURLDecodedBytes.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ estimateDataURLDecodedBytes),
/* harmony export */   estimateDataURLBufferAllocation: () => (/* binding */ estimateDataURLBufferAllocation)
/* harmony export */ });
/**
 * Estimate data: URL byte lengths *without* allocating large buffers.
 * - Fetch percent-decodes a base64 body before decoding it.
 * - Node's Buffer.from(body, 'base64') sizes its backing allocation from the
 *   raw body, including ignored characters and content after padding.
 * - Non-base64 data is percent-decoded and then encoded as UTF-8.
 */
const isHexDigit = (charCode) =>
  (charCode >= 48 && charCode <= 57) ||
  (charCode >= 65 && charCode <= 70) ||
  (charCode >= 97 && charCode <= 102);

const isPercentEncodedByte = (str, i, len) =>
  i + 2 < len && isHexDigit(str.charCodeAt(i + 1)) && isHexDigit(str.charCodeAt(i + 2));

const hexValue = (charCode) => (charCode <= 57 ? charCode - 48 : (charCode & 0xdf) - 55);

const isBase64Char = (charCode) =>
  (charCode >= 65 && charCode <= 90) || // A-Z
  (charCode >= 97 && charCode <= 122) || // a-z
  (charCode >= 48 && charCode <= 57) || // 0-9
  charCode === 43 || // +
  charCode === 47 || // /
  charCode === 45 || // - (base64url)
  charCode === 95; // _ (base64url)

const isBase64Whitespace = (charCode) =>
  charCode === 9 || charCode === 10 || charCode === 12 || charCode === 13 || charCode === 32;

const base64Bytes = (significant) => {
  const groups = Math.floor(significant / 4);
  const remainder = significant % 4;
  return groups * 3 + (remainder === 2 ? 1 : remainder === 3 ? 2 : 0);
};

// Buffer.byteLength(body, 'base64') uses the raw string length as an allocation
// upper bound even when Buffer.from later ignores characters or stops at '='.
const estimateBase64BufferAllocation = (body) => {
  const len = body.length;
  let padding = 0;

  if (len > 0 && body.charCodeAt(len - 1) === 61 /* '=' */) {
    padding++;

    if (len > 1 && body.charCodeAt(len - 2) === 61 /* '=' */) {
      padding++;
    }
  }

  return Math.floor(((len - padding) * 3) / 4);
};

const estimatePercentDecodedBase64Bytes = (body) => {
  const len = body.length;
  let significant = 0;
  let padding = 0;
  let invalid = false;

  for (let i = 0; i < len; i++) {
    let code = body.charCodeAt(i);

    if (code === 37 /* '%' */ && isPercentEncodedByte(body, i, len)) {
      code = hexValue(body.charCodeAt(i + 1)) * 16 + hexValue(body.charCodeAt(i + 2));
      i += 2;
    }

    if (isBase64Whitespace(code)) {
      continue;
    }

    if (code === 61 /* '=' */) {
      padding++;
      continue;
    }

    if (!isBase64Char(code) || padding > 0) {
      invalid = true;
      continue;
    }

    significant++;
  }

  // Fetch rejects malformed forgiving-base64 input. Returning the raw-size
  // allocation bound keeps that invalid input from becoming a pre-check bypass.
  if (
    invalid ||
    padding > 2 ||
    (padding > 0 && (significant + padding) % 4 !== 0) ||
    significant % 4 === 1
  ) {
    return estimateBase64BufferAllocation(body);
  }

  return base64Bytes(significant);
};

const estimateDataURLBytes = (url, estimateBase64) => {
  if (!url || typeof url !== 'string') return 0;
  if (!url.startsWith('data:')) return 0;

  const comma = url.indexOf(',');
  if (comma < 0) return 0;

  const meta = url.slice(5, comma);
  const body = url.slice(comma + 1);
  const isBase64 = /;base64/i.test(meta);

  if (isBase64) {
    return estimateBase64(body);
  }

  // Compute UTF-8 byte length directly from UTF-16 code units without allocating
  // a byte buffer (TextEncoder.encode would defeat the DoS guard on large bodies).
  // Valid %XX triplets count as one decoded byte; this matches the bytes that
  // decodeURIComponent(body) would produce before Buffer re-encodes the string.
  let bytes = 0;
  for (let i = 0, len = body.length; i < len; i++) {
    const c = body.charCodeAt(i);
    if (c === 37 /* '%' */ && isPercentEncodedByte(body, i, len)) {
      bytes += 1;
      i += 2;
    } else if (c < 0x80) {
      bytes += 1;
    } else if (c < 0x800) {
      bytes += 2;
    } else if (c >= 0xd800 && c <= 0xdbff && i + 1 < len) {
      const next = body.charCodeAt(i + 1);
      if (next >= 0xdc00 && next <= 0xdfff) {
        bytes += 4;
        i++;
      } else {
        bytes += 3;
      }
    } else {
      bytes += 3;
    }
  }
  return bytes;
};

/**
 * Estimate the percent-decoded payload size used by Fetch data: URLs.
 *
 * @param {string} url
 * @returns {number}
 */
function estimateDataURLDecodedBytes(url) {
  // Fetch removes URL fragments before processing a data: URL.
  const fragmentIndex = typeof url === 'string' ? url.indexOf('#') : -1;

  return estimateDataURLBytes(
    fragmentIndex === -1 ? url : url.slice(0, fragmentIndex),
    estimatePercentDecodedBase64Bytes
  );
}

/**
 * Estimate the Buffer backing allocation used by Node's raw base64 decoder.
 *
 * @param {string} url
 * @returns {number}
 */
function estimateDataURLBufferAllocation(url) {
  return estimateDataURLBytes(url, estimateBase64BufferAllocation);
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js"
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");






const MAX_DEPTH = _toFormData_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_FORM_DATA_MAX_DEPTH;

function throwIfDepthExceeded(index) {
  if (index > MAX_DEPTH) {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
      'FormData field is too deeply nested (' + index + ' levels). Max depth: ' + MAX_DEPTH,
      _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_FORM_DATA_DEPTH_EXCEEDED
    );
  }
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z] -> ['foo', 'x', 'y', 'z']
  // foo.x.y.z    -> ['foo', 'x', 'y', 'z']
  // A path is split on `.` and on `[...]` groups. A segment — whether written
  // in dot notation or captured inside brackets — may contain any character
  // except `.`, `[` and `]`, so a key like `user-name` or `user name` is kept
  // literal instead of being split (#5402). `.`, `[` and `]` keep their existing
  // meaning, e.g. `foo[bar.baz]` -> ['foo', 'bar', 'baz'] and `[]` is an array push.
  // Excluding `[` from the bracket group also makes the match fail fast at the
  // next `[`, so a malformed name cannot rescan to the end of the string from
  // every unmatched `[` — parsing stays linear in the length of the name.
  const path = [];
  const pattern = /[^.[\]]+|\[([^.[\]]*)]/g;
  let match;

  while ((match = pattern.exec(name)) !== null) {
    throwIfDepthExceeded(path.length);
    path.push(match[0] === '[]' ? '' : match[1] || match[0]);
  }

  return path;
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    throwIfDepthExceeded(index);

    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])
          ? target[name].concat(value)
          : [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name) || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ },

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js"
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  if (typeof url !== 'string') {
    return false;
  }

  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js"
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && payload.isAxiosError === true;
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js"
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv
  ? ((origin, isMSIE) => (url) => {
      url = new URL(url, _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin);

      return (
        origin.protocol === url.protocol &&
        origin.host === url.host &&
        (isMSIE || origin.port === url.port)
      );
    })(
      new URL(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin),
      _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].navigator && /(msie|trident)/i.test(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].navigator.userAgent)
    )
  : () => true);


/***/ },

/***/ "./node_modules/axios/lib/helpers/null.js"
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ },

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js"
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age',
  'authorization',
  'content-length',
  'content-type',
  'etag',
  'expires',
  'from',
  'host',
  'if-modified-since',
  'if-unmodified-since',
  'last-modified',
  'location',
  'max-forwards',
  'proxy-authorization',
  'referer',
  'retry-after',
  'user-agent',
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders &&
    rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();

      const hasKey = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(parsed, key);

      if (!key || (hasKey && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(ignoreDuplicateOf, key))) {
        return;
      }

      if (key === 'set-cookie') {
        if (hasKey) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = hasKey ? parsed[key] + ', ' + val : val;
      }
    });

  return parsed;
});


/***/ },

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js"
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
  return (match && match[1]) || '';
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/progressEventReducer.js"
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/progressEventReducer.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asyncDecorator: () => (/* binding */ asyncDecorator),
/* harmony export */   progressEventDecorator: () => (/* binding */ progressEventDecorator),
/* harmony export */   progressEventReducer: () => (/* binding */ progressEventReducer)
/* harmony export */ });
/* harmony import */ var _speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/axios/lib/helpers/throttle.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = (0,_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return (0,_throttle_js__WEBPACK_IMPORTED_MODULE_1__["default"])((e) => {
    if (!e || typeof e.loaded !== 'number') {
      return;
    }
    const rawLoaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const loaded = Math.max(0, total != null ? Math.min(rawLoaded, total) : rawLoaded);
    const progressBytes = Math.max(0, loaded - bytesNotified);
    const rate = _speedometer(progressBytes);

    bytesNotified = Math.max(bytesNotified, loaded);

    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true,
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [
    (loaded) =>
      throttled[0]({
        lengthComputable,
        total,
        loaded,
      }),
    throttled[1],
  ];
};

const asyncDecorator =
  (fn, scheduler = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].asap) =>
  (...args) =>
    scheduler(() => fn(...args));


/***/ },

/***/ "./node_modules/axios/lib/helpers/resolveConfig.js"
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/resolveConfig.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _cookies_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _core_setFormDataHeaders_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/setFormDataHeaders.js */ "./node_modules/axios/lib/core/setFormDataHeaders.js");
/* harmony import */ var _buildURL_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");











/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8 = (str) =>
  encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

function resolveConfig(config) {
  const newConfig = (0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, config);

  // Read only own properties to prevent prototype pollution gadgets
  // (e.g. Object.prototype.baseURL = 'https://evil.com').
  const own = (key) => (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProp(newConfig, key) ? newConfig[key] : undefined);

  const data = own('data');
  let withXSRFToken = own('withXSRFToken');
  const xsrfHeaderName = own('xsrfHeaderName');
  const xsrfCookieName = own('xsrfCookieName');
  let headers = own('headers');
  const auth = own('auth');
  const baseURL = own('baseURL');
  const allowAbsoluteUrls = own('allowAbsoluteUrls');
  const url = own('url');

  newConfig.headers = headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_7__["default"].from(headers);

  newConfig.url = (0,_buildURL_js__WEBPACK_IMPORTED_MODULE_9__["default"])(
    (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_5__["default"])(baseURL, url, allowAbsoluteUrls, newConfig),
    own('params'),
    own('paramsSerializer')
  );

  // HTTP basic authentication
  if (auth) {
    const username = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSafeProp(auth, 'username') || '';
    const password = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSafeProp(auth, 'password') || '';

    try {
      headers.set(
        'Authorization',
        'Basic ' + btoa(username + ':' + (password ? encodeUTF8(password) : ''))
      );
    } catch (e) {
      throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_BAD_OPTION_VALUE, config);
    }
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFormData(data)) {
    if (
      _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ||
      _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserWebWorkerEnv ||
      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isReactNative(data)
    ) {
      headers.setContentType(undefined); // browser/web worker/RN handles it
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(data.getHeaders)) {
      // Node.js FormData (like form-data package)
      (0,_core_setFormDataHeaders_js__WEBPACK_IMPORTED_MODULE_8__["default"])(headers, data.getHeaders(), own('formDataHeaderPolicy'));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(withXSRFToken)) {
      withXSRFToken = withXSRFToken(newConfig);
    }

    // Strict boolean check — prevents proto-pollution gadgets (e.g. Object.prototype.withXSRFToken = 1)
    // and misconfigurations (e.g. "false") from short-circuiting the same-origin check and leaking
    // the XSRF token cross-origin.
    const shouldSendXSRF =
      withXSRFToken === true || (withXSRFToken == null && (0,_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_3__["default"])(newConfig.url));

    if (shouldSendXSRF) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && _cookies_js__WEBPACK_IMPORTED_MODULE_4__["default"].read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveConfig);


/***/ },

/***/ "./node_modules/axios/lib/helpers/sanitizeHeaderValue.js"
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/sanitizeHeaderValue.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitizeByteStringHeaderValue: () => (/* binding */ sanitizeByteStringHeaderValue),
/* harmony export */   sanitizeHeaderValue: () => (/* binding */ sanitizeHeaderValue),
/* harmony export */   toByteStringHeaderObject: () => (/* binding */ toByteStringHeaderObject)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




function trimSPorHTAB(str) {
  let start = 0;
  let end = str.length;

  while (start < end) {
    const code = str.charCodeAt(start);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    start += 1;
  }

  while (end > start) {
    const code = str.charCodeAt(end - 1);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    end -= 1;
  }

  return start === 0 && end === str.length ? str : str.slice(start, end);
}

// The control-code ranges are intentional: header sanitization strips C0/DEL bytes.
// eslint-disable-next-line no-control-regex
const INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp('[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+', 'g');
// eslint-disable-next-line no-control-regex
const INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp('[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+', 'g');

function sanitizeValue(value, invalidChars) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value)) {
    return value.map((item) => sanitizeValue(item, invalidChars));
  }

  return trimSPorHTAB(String(value).replace(invalidChars, ''));
}

const sanitizeHeaderValue = (value) =>
  sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);

const sanitizeByteStringHeaderValue = (value) =>
  sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);

function toByteStringHeaderObject(headers) {
  const byteStringHeaders = Object.create(null);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers.toJSON(), (value, header) => {
    byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
  });

  return byteStringHeaders;
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/speedometer.js"
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round((bytesCount * 1000) / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ },

/***/ "./node_modules/axios/lib/helpers/spread.js"
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  const args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/throttle.js"
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/throttle.js ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);


/***/ },

/***/ "./node_modules/axios/lib/helpers/toFormData.js"
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_FORM_DATA_MAX_DEPTH: () => (/* binding */ DEFAULT_FORM_DATA_MAX_DEPTH),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platform/node/classes/Buffer.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored



// Default nesting limit shared with the inverse transform (formDataToJSON) so
// the FormData <-> JSON round-trip stays symmetric.
const DEFAULT_FORM_DATA_MAX_DEPTH = 100;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path
    .concat(key)
    .map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    })
    .join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_2__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(
    options,
    {
      metaTokens: true,
      dots: false,
      indexes: false,
    },
    false,
    function defined(option, source) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
    }
  );

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || (typeof Blob !== 'undefined' && Blob);
  const maxDepth = options.maxDepth === undefined ? DEFAULT_FORM_DATA_MAX_DEPTH : options.maxDepth;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);
  const stack = [];

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBoolean(value)) {
      return value.toString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      if (useBlob && typeof _Blob === 'function') {
        return new _Blob([value]);
      }
      if (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBufferAvailable()) {
        return _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(value);
      }
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Blob is not supported. Use a Buffer instead.', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_NOT_SUPPORT);
    }

    return value;
  }

  function throwIfMaxDepthExceeded(depth) {
    if (depth > maxDepth) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        'Object is too deeply nested (' + depth + ' levels). Max depth: ' + maxDepth,
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_FORM_DATA_DEPTH_EXCEEDED
      );
    }
  }

  function stringifyWithDepthLimit(value, depth) {
    if (maxDepth === Infinity) {
      return JSON.stringify(value);
    }

    const ancestors = [];

    return JSON.stringify(value, function limitDepth(_key, currentValue) {
      if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(currentValue)) {
        return currentValue;
      }

      while (ancestors.length && ancestors[ancestors.length - 1] !== this) {
        ancestors.pop();
      }

      ancestors.push(currentValue);
      throwIfMaxDepthExceeded(depth + ancestors.length - 1);

      return currentValue;
    });
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReactNative(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReactNativeBlob(value)) {
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = stringifyWithDepthLimit(value, 1);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value)))
      ) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) &&
            formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true
                ? renderKey([key], index, dots)
                : indexes === null
                  ? key
                  : key + '[]',
              convertValue(el)
            );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable,
  });

  function build(value, path, depth = 0) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    throwIfMaxDepthExceeded(depth);

    if (stack.indexOf(value) !== -1) {
      throw new Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result =
        !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) &&
        visitor.call(formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);

      if (result === true) {
        build(el, path ? path.concat(key) : [key], depth + 1);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ },

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js"
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].classes.URLSearchParams(), {
    visitor: function (value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options,
  });
}


/***/ },

/***/ "./node_modules/axios/lib/helpers/trackStream.js"
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/trackStream.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readBytes: () => (/* binding */ readBytes),
/* harmony export */   streamChunk: () => (/* binding */ streamChunk),
/* harmony export */   trackStream: () => (/* binding */ trackStream)
/* harmony export */ });
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };

  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done, value } = await iterator.next();

          if (done) {
            _onFinish();
            controller.close();
            return;
          }

          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = (bytes += len);
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator.return();
      },
    },
    {
      highWaterMark: 2,
    }
  );
};


/***/ },

/***/ "./node_modules/axios/lib/helpers/validator.js"
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return (
      '[Axios v' +
      _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION +
      "] Transitional option '" +
      opt +
      "'" +
      desc +
      (message ? '. ' + message : '')
    );
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object' || options === null) {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    // Use hasOwnProperty so a polluted Object.prototype.<opt> cannot supply
    // a non-function validator and cause a TypeError.
    const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : undefined;
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
          'option ' + opt + ' must be ' + result,
          _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators,
});


/***/ },

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js"
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ },

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js"
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ },

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js"
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./node_modules/axios/lib/platform/browser/index.js"
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
});


/***/ },

/***/ "./node_modules/axios/lib/platform/common/utils.js"
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/platform/common/utils.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBrowserEnv: () => (/* binding */ hasBrowserEnv),
/* harmony export */   hasStandardBrowserEnv: () => (/* binding */ hasStandardBrowserEnv),
/* harmony export */   hasStandardBrowserWebWorkerEnv: () => (/* binding */ hasStandardBrowserWebWorkerEnv),
/* harmony export */   navigator: () => (/* binding */ _navigator),
/* harmony export */   origin: () => (/* binding */ origin)
/* harmony export */ });
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = (typeof navigator === 'object' && navigator) || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv =
  hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = (hasBrowserEnv && window.location.href) || 'http://localhost';




/***/ },

/***/ "./node_modules/axios/lib/platform/index.js"
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/platform/index.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils.js */ "./node_modules/axios/lib/platform/common/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_1__,
  ..._node_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});


/***/ },

/***/ "./node_modules/axios/lib/utils.js"
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (
  ({ hasOwnProperty }) =>
  (obj, prop) =>
    hasOwnProperty.call(obj, prop)
)(Object.prototype);

/**
 * Walk the prototype chain (excluding the shared Object.prototype) looking for
 * an own `prop`. This distinguishes genuine own/inherited members — including
 * class accessors and template prototypes — from members injected via
 * Object.prototype pollution (e.g. `Object.prototype.username = '...'`), which
 * live on Object.prototype itself and are therefore never matched.
 *
 * @param {*} thing The value whose chain to inspect
 * @param {string|symbol} prop The property key to look for
 *
 * @returns {boolean} True when `prop` is owned below Object.prototype
 */
const hasOwnInPrototypeChain = (thing, prop) => {
  let obj = thing;
  const seen = [];

  while (obj != null && obj !== Object.prototype) {
    if (seen.indexOf(obj) !== -1) {
      return false;
    }
    seen.push(obj);

    if (hasOwnProperty(obj, prop)) {
      return true;
    }
    obj = getPrototypeOf(obj);
  }
  return false;
};

/**
 * Read `obj[prop]` only when it is safe from Object.prototype pollution. Own
 * properties and members inherited from a non-Object.prototype source (a class
 * instance or template object) are honored; a value reachable only through a
 * polluted Object.prototype is ignored and `undefined` is returned.
 *
 * @param {*} obj The source object
 * @param {string|symbol} prop The property key to read
 *
 * @returns {*} The resolved value, or undefined when unsafe/absent
 */
const getSafeProp = (obj, prop) =>
  obj != null && hasOwnInPrototypeChain(obj, prop) ? obj[prop] : undefined;

const kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};

const typeOfTest = (type) => (thing) => typeof thing === type;

/**
 * Determine if a value is a non-null object
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const { isArray } = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return (
    val !== null &&
    !isUndefined(val) &&
    val.constructor !== null &&
    !isUndefined(val.constructor) &&
    isFunction(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = (thing) => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (!isObject(val)) {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (
    (prototype === null ||
      prototype === Object.prototype ||
      getPrototypeOf(prototype) === null) &&
    // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
    // Symbol.iterator as evidence the value is a tagged/iterable type rather
    // than a plain object, while ignoring keys injected onto Object.prototype.
    !hasOwnInPrototypeChain(val, toStringTag) &&
    !hasOwnInPrototypeChain(val, iterator)
  );
};

/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */
const isEmptyObject = (val) => {
  // Early return for non-objects or Buffers to prevent RangeError
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }

  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    // Fallback for any other objects that might cause RangeError with Object.keys()
    return false;
  }
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a React Native Blob
 * React Native "blob": an object with a `uri` attribute. Optionally, it can
 * also have a `name` and `type` attribute to specify filename and content type
 *
 * @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
 *
 * @param {*} value The value to test
 *
 * @returns {boolean} True if value is a React Native Blob, otherwise false
 */
const isReactNativeBlob = (value) => {
  return !!(value && typeof value.uri !== 'undefined');
};

/**
 * Determine if environment is React Native
 * ReactNative `FormData` has a non-standard `getParts()` method
 *
 * @param {*} formData The formData to test
 *
 * @returns {boolean} True if environment is React Native, otherwise false
 */
const isReactNative = (formData) => formData && typeof formData.getParts !== 'undefined';

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a FileList, otherwise false
 */
const isFileList = kindOfTest('FileList');
const isSet = kindOfTest('Set');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function getGlobal() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof __webpack_require__.g !== 'undefined') return __webpack_require__.g;
  return {};
}

const G = getGlobal();
const FormDataCtor = typeof G.FormData !== 'undefined' ? G.FormData : undefined;

const isFormData = (thing) => {
  if (!thing) return false;
  if (FormDataCtor && thing instanceof FormDataCtor) return true;
  // Reject plain objects inheriting directly from Object.prototype so prototype-pollution gadgets can't spoof FormData.
  const proto = getPrototypeOf(thing);
  if (!proto || proto === Object.prototype) return false;
  if (!isFunction(thing.append)) return false;
  const kind = kindOf(thing);
  return (
    kind === 'formdata' ||
    // detect form-data instance
    (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
  );
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = [
  'ReadableStream',
  'Request',
  'Response',
  'Headers',
].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Buffer check
    if (isBuffer(obj)) {
      return;
    }

    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

/**
 * Finds a key in an object, case-insensitive, returning the actual key name.
 * Returns null if the object is a Buffer or if no match is found.
 *
 * @param {Object} obj - The object to search.
 * @param {string} key - The key to find (case-insensitive).
 * @returns {?string} The actual key name if found, otherwise null.
 */
function findKey(obj, key) {
  if (isBuffer(obj)) {
    return null;
  }

  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== 'undefined') return globalThis;
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : __webpack_require__.g;
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(...objs) {
  const { caseless, skipUndefined } = (isContextDefined(this) && this) || {};
  const result = {};
  const assignValue = (val, key) => {
    // Skip dangerous property names to prevent prototype pollution
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return;
    }

    // findKey lowercases the key, so caseless lookup only applies to strings —
    // symbol keys are identity-matched.
    const targetKey = (caseless && typeof key === 'string' && findKey(result, key)) || key;
    // Read via own-prop only — a bare `result[targetKey]` walks the prototype
    // chain, so a polluted Object.prototype value could surface here and get
    // copied into the merged result.
    const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : undefined;
    if (isPlainObject(existing) && isPlainObject(val)) {
      result[targetKey] = merge(existing, val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = objs.length; i < l; i++) {
    const source = objs[i];
    if (!source || isBuffer(source)) {
      continue;
    }

    forEach(source, assignValue);

    if (typeof source !== 'object' || isArray(source)) {
      continue;
    }

    const symbols = Object.getOwnPropertySymbols(source);
    for (let j = 0; j < symbols.length; j++) {
      const symbol = symbols[j];
      if (propertyIsEnumerable.call(source, symbol)) {
        assignValue(source[symbol], symbol);
      }
    }
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction(val)) {
        Object.defineProperty(a, key, {
          // Null-proto descriptor so a polluted Object.prototype.get cannot
          // hijack defineProperty's accessor-vs-data resolution.
          __proto__: null,
          value: (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true,
        });
      } else {
        Object.defineProperty(a, key, {
          __proto__: null,
          value: val,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
    },
    { allOwnKeys }
  );
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, 'constructor', {
    __proto__: null,
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(constructor, 'super', {
    __proto__: null,
    value: superConstructor.prototype,
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = ((TypedArray) => {
  // eslint-disable-next-line func-names
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];

  const _iterator = generator.call(obj);

  let result;

  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

const { propertyIsEnumerable } = Object.prototype;

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].includes(name)) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};

/**
 * Converts an array or a delimited string into an object set with values as keys and true as values.
 * Useful for fast membership checks.
 *
 * @param {Array|string} arrayOrString - The array or string to convert.
 * @param {string} delimiter - The delimiter to use if input is a string.
 * @returns {Object} An object with keys from the array or string, values set to true.
 */
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite((value = +value)) ? value : defaultValue;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(
    thing &&
    isFunction(thing.append) &&
    thing[toStringTag] === 'FormData' &&
    thing[iterator]
  );
}

/**
 * Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
 *
 * @param {Object} obj - The object to convert.
 * @returns {Object} The JSON-compatible object.
 */
const toJSONObject = (obj) => {
  const visited = new WeakSet();

  const visit = (source) => {
    if (isObject(source)) {
      if (visited.has(source)) {
        return;
      }

      //Buffer check
      if (isBuffer(source)) {
        return source;
      }

      if (!('toJSON' in source)) {
        // add-on descent / delete-on-ascent: preserves path semantics, so DAG nodes serialise at every occurrence (see #7230).
        visited.add(source);

        let target;

        if (isSet(source)) {
          target = [];
          for (const value of source) {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && target.push(reducedValue);
          }
        } else {
          target = isArray(source) ? [] : {};

          forEach(source, (value, key) => {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
        }

        visited.delete(source);

        return target;
      }
    }

    return source;
  };

  return visit(obj);
};

/**
 * Determines if a value is an async function.
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is an async function, otherwise false.
 */
const isAsyncFn = kindOfTest('AsyncFunction');

/**
 * Determines if a value is thenable (has then and catch methods).
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is thenable, otherwise false.
 */
const isThenable = (thing) =>
  thing &&
  (isObject(thing) || isFunction(thing)) &&
  isFunction(thing.then) &&
  isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

/**
 * Provides a cross-platform setImmediate implementation.
 * Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
 *
 * @param {boolean} setImmediateSupported - Whether setImmediate is supported.
 * @param {boolean} postMessageSupported - Whether postMessage is supported.
 * @returns {Function} A function to schedule a callback asynchronously.
 */
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported
    ? ((token, callbacks) => {
        _global.addEventListener(
          'message',
          ({ source, data }) => {
            if (source === _global && data === token) {
              callbacks.length && callbacks.shift()();
            }
          },
          false
        );

        return (cb) => {
          callbacks.push(cb);
          _global.postMessage(token, '*');
        };
      })(`axios@${Math.random()}`, [])
    : (cb) => setTimeout(cb);
})(typeof setImmediate === 'function', isFunction(_global.postMessage));

/**
 * Schedules a microtask or asynchronous callback as soon as possible.
 * Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
 *
 * @type {Function}
 */
const asap =
  typeof queueMicrotask !== 'undefined'
    ? queueMicrotask.bind(_global)
    : (typeof process !== 'undefined' && process.nextTick) || _setImmediate;

// *********************

const isIterable = (thing) => thing != null && isFunction(thing[iterator]);

/**
 * Determine if a value is iterable via an iterator that is NOT sourced solely
 * from a polluted Object.prototype. Use this instead of `isIterable` whenever
 * the iterable comes from untrusted input (e.g. user-supplied header sources),
 * so `Object.prototype[Symbol.iterator] = ...` cannot turn an ordinary object
 * into an attacker-controlled entries iterator.
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value has a non-polluted iterator
 */
const isSafeIterable = (thing) =>
  thing != null && hasOwnInPrototypeChain(thing, iterator) && isIterable(thing);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isReactNativeBlob,
  isReactNative,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain,
  getSafeProp,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable,
  isSafeIterable,
});


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/analysis-widget/src/runtime/widget.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _api_axiosConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/axiosConfig */ "./your-extensions/api/axiosConfig.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function Widget(props) {
    var _a, _b;
    const [jimuMapView, setJimuMapView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [analysisType, setAnalysisType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('crop_type');
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [autoMapId, setAutoMapId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('2025-03-01');
    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('2025-03-28');
    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [layerOpacity, setLayerOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.85);
    const [currentAnalysisLayer, setCurrentAnalysisLayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [tileUrls, setTileUrls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [currentTileLayer, setCurrentTileLayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('crop_type');
    const [drawnGeometry, setDrawnGeometry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const sketchViewModelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const graphicsLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const skipNextUserStateSyncRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const updateMapId = () => {
            var _a;
            if (props.useMapWidgetIds && props.useMapWidgetIds.length > 0) {
                setAutoMapId(props.useMapWidgetIds[0]);
                return;
            }
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.getAppStore)().getState();
            const widgets = ((_a = state === null || state === void 0 ? void 0 : state.appConfig) === null || _a === void 0 ? void 0 : _a.widgets) || {};
            const foundMapKey = Object.keys(widgets).find((key) => {
                var _a, _b;
                const widget = widgets[key];
                return ((_a = widget === null || widget === void 0 ? void 0 : widget.uri) === null || _a === void 0 ? void 0 : _a.includes('arcgis-map')) || ((_b = widget === null || widget === void 0 ? void 0 : widget.manifest) === null || _b === void 0 ? void 0 : _b.name) === 'map';
            });
            if (foundMapKey) {
                setAutoMapId(foundMapKey);
            }
        };
        updateMapId();
    }, [props.useMapWidgetIds, props.appConfig]);
    const syncUserBalance = (currentUser) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return currentUser;
        try {
            const userId = Number(currentUser.id);
            if (!Number.isFinite(userId))
                return currentUser;
            const config = currentUser.token
                ? { headers: { Authorization: `Bearer ${currentUser.token}` } }
                : undefined;
            const response = yield _api_axiosConfig__WEBPACK_IMPORTED_MODULE_4__["default"].get(`/users/${userId}`, config);
            const data = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.user) !== null && _b !== void 0 ? _b : response === null || response === void 0 ? void 0 : response.data;
            const backendCredits = (_f = (_e = (_d = (_c = data === null || data === void 0 ? void 0 : data.credits) !== null && _c !== void 0 ? _c : data === null || data === void 0 ? void 0 : data.points) !== null && _d !== void 0 ? _d : data === null || data === void 0 ? void 0 : data.remaining_credits) !== null && _e !== void 0 ? _e : data === null || data === void 0 ? void 0 : data.remaining_points) !== null && _f !== void 0 ? _f : data === null || data === void 0 ? void 0 : data.balance;
            if (backendCredits === undefined || backendCredits === null) {
                return currentUser;
            }
            const normalizedCredits = Number(backendCredits);
            if (!Number.isFinite(normalizedCredits))
                return currentUser;
            const updatedUser = Object.assign(Object.assign({}, currentUser), { credits: normalizedCredits });
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            skipNextUserStateSyncRef.current = true;
            window.dispatchEvent(new Event('userStateChanged'));
            return updatedUser;
        }
        catch (error) {
            console.error('فشل في مزامنة رصيد المستخدم:', error);
            return currentUser;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        let cancelled = false;
        const checkUser = () => __awaiter(this, void 0, void 0, function* () {
            const savedUser = localStorage.getItem('user');
            const saved = savedUser ? JSON.parse(savedUser) : null;
            if (cancelled)
                return;
            if (skipNextUserStateSyncRef.current) {
                skipNextUserStateSyncRef.current = false;
                setUser(saved);
                return;
            }
            setUser(saved);
            if (saved === null || saved === void 0 ? void 0 : saved.id) {
                const synced = yield syncUserBalance(saved);
                if (cancelled)
                    return;
                if (synced)
                    setUser(synced);
            }
        });
        checkUser();
        window.addEventListener('storage', checkUser);
        window.addEventListener('userStateChanged', checkUser);
        return () => {
            cancelled = true;
            window.removeEventListener('storage', checkUser);
            window.removeEventListener('userStateChanged', checkUser);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        return () => {
            var _a;
            if ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map) {
                if (graphicsLayerRef.current) {
                    jimuMapView.view.map.remove(graphicsLayerRef.current);
                }
                if (currentAnalysisLayer) {
                    jimuMapView.view.map.remove(currentAnalysisLayer);
                }
            }
        };
    }, [jimuMapView, currentAnalysisLayer]);
    const activeViewChangeHandler = (jmv) => __awaiter(this, void 0, void 0, function* () {
        if (jmv) {
            setJimuMapView(jmv);
            setMessage(null);
            try {
                const [GraphicsLayer, SketchViewModel] = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)([
                    'esri/layers/GraphicsLayer',
                    'esri/widgets/Sketch/SketchViewModel'
                ]);
                if (!graphicsLayerRef.current) {
                    const gLayer = new GraphicsLayer({ title: 'منطقة الدراسة (AOI)' });
                    jmv.view.map.add(gLayer);
                    graphicsLayerRef.current = gLayer;
                }
                const sketchVM = new SketchViewModel({
                    view: jmv.view,
                    layer: graphicsLayerRef.current,
                    polygonSymbol: {
                        type: 'simple-fill',
                        color: [16, 185, 129, 0.25],
                        outline: { color: [16, 185, 129, 1], width: 2.5 }
                    }
                });
                sketchVM.on('create', (event) => {
                    if (event.state === 'complete') {
                        setDrawnGeometry(event.graphic.geometry);
                        setMessage({ text: 'تم تحديد منطقة الدراسة بنجاح', type: 'success' });
                    }
                });
                sketchViewModelRef.current = sketchVM;
            }
            catch (err) {
                console.error('فشل تحميل وحدات ArcGIS API:', err);
            }
        }
    });
    const startDrawing = () => {
        if (sketchViewModelRef.current) {
            if (graphicsLayerRef.current) {
                graphicsLayerRef.current.removeAll();
            }
            setDrawnGeometry(null);
            sketchViewModelRef.current.create('polygon');
            setMessage({ text: 'انقر على الخريطة لتحديد حدود المنطقة', type: 'info' });
        }
    };
    const formatGeometryToGeoJSON = (geometry, webMercatorUtils) => {
        if (!geometry)
            return null;
        const geoGeometry = webMercatorUtils ? webMercatorUtils.webMercatorToGeographic(geometry) : geometry;
        if (!geoGeometry || !geoGeometry.rings || geoGeometry.rings.length === 0)
            return null;
        const ring = geoGeometry.rings[0].map((pt) => [pt[0], pt[1]]);
        if (ring.length > 0) {
            const first = ring[0];
            const last = ring[ring.length - 1];
            if (first[0] !== last[0] || first[1] !== last[1]) {
                ring.push([first[0], first[1]]);
            }
        }
        return ring;
    };
    const handleOpacityChange = (e) => {
        const val = parseFloat(e.target.value);
        setLayerOpacity(val);
        if (currentAnalysisLayer) {
            currentAnalysisLayer.opacity = val;
        }
    };
    const switchTileLayer = (layer) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (!tileUrls[layer] || !((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map))
            return;
        setCurrentTileLayer(layer);
        if (currentAnalysisLayer && ((_b = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _b === void 0 ? void 0 : _b.map)) {
            jimuMapView.view.map.remove(currentAnalysisLayer);
        }
        const [WebTileLayer] = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)(['esri/layers/WebTileLayer']);
        const newLayer = new WebTileLayer({
            urlTemplate: tileUrls[layer],
            opacity: layerOpacity,
            title: layer === 'crop_type' ? 'نتائج تصنيف المحاصيل' : 'خريطة صحة النبات'
        });
        jimuMapView.view.map.add(newLayer);
        setCurrentAnalysisLayer(newLayer);
        setMessage({
            text: layer === 'crop_type' ? 'تم عرض طبقة تصنيف المحاصيل.' : 'تم عرض طبقة صحة النبات.',
            type: 'success'
        });
    });
    const validateDates = (start, end) => {
        const sDate = new Date(start);
        const eDate = new Date(end);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (isNaN(sDate.getTime()) || isNaN(eDate.getTime())) {
            return { valid: false, message: 'تنسيق التاريخ غير صالح.' };
        }
        if (sDate > eDate) {
            return { valid: false, message: 'تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.' };
        }
        if (sDate > today || eDate > today) {
            return { valid: false, message: 'التواريخ لا يمكن أن تكون في المستقبل.' };
        }
        const diffDays = Math.ceil((eDate.getTime() - sDate.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays > 366) {
            return { valid: false, message: 'الفترة الزمنية لا يجب أن تتجاوز 366 يوماً.' };
        }
        if (diffDays < 1) {
            return { valid: false, message: 'يجب أن يكون هناك يوم واحد على الأقل بين التواريخ.' };
        }
        return { valid: true, message: '' };
    };
    const runEsriNdviAnalysis = () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const [ImageryLayer, RasterFunction] = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)([
                'esri/layers/ImageryLayer',
                'esri/layers/support/RasterFunction'
            ]);
            if (currentAnalysisLayer && ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map)) {
                jimuMapView.view.map.remove(currentAnalysisLayer);
            }
            const ndviBandTransform = new RasterFunction({
                functionName: 'NDVI',
                functionArguments: {
                    VisibleBand: 4,
                    InfraredBand: 5,
                    ScientificOutput: false
                }
            });
            const colormapTransform = new RasterFunction({
                functionName: 'Colormap',
                functionArguments: {
                    ColormapName: 'NDVI3',
                    Raster: ndviBandTransform
                }
            });
            let finalRasterFunction = colormapTransform;
            if (drawnGeometry) {
                finalRasterFunction = new RasterFunction({
                    functionName: 'Clip',
                    functionArguments: {
                        ClippingGeometry: drawnGeometry,
                        ClippingType: 1,
                        Raster: colormapTransform
                    }
                });
            }
            const ndviLayer = new ImageryLayer({
                url: 'https://landsat2.arcgis.com/arcgis/rest/services/Landsat8_Views/ImageServer',
                rasterFunction: finalRasterFunction,
                opacity: layerOpacity,
                title: 'مؤشر صحة النبات (NDVI)'
            });
            if ((_b = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _b === void 0 ? void 0 : _b.map) {
                jimuMapView.view.map.add(ndviLayer);
                setCurrentAnalysisLayer(ndviLayer);
                if (drawnGeometry) {
                    jimuMapView.view.goTo(drawnGeometry.extent.expand(1.3));
                }
            }
            setMessage({ text: 'تم إنشاء خريطة NDVI المحددة بالمنطقة بنجاح.', type: 'success' });
        }
        catch (err) {
            console.error('فشل تحليل NDVI:', err);
            setMessage({ text: 'حدث خطأ أثناء تحميل خدمات NDVI.', type: 'error' });
        }
    });
    const handleRunAnalysis = () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        setMessage(null);
        if (!user) {
            setMessage({ text: 'يرجى تسجيل الدخول للوصول لهذه الخدمة.', type: 'warning' });
            return;
        }
        if (Number((_a = user.credits) !== null && _a !== void 0 ? _a : 0) <= 0) {
            setMessage({ text: 'نَفِد رصيدك المتاح! يرجى الشحن للمتابعة.', type: 'warning' });
            return;
        }
        if (!drawnGeometry) {
            setMessage({ text: 'يرجى رسم حدود المنطقة المستهدفة أولاً.', type: 'warning' });
            return;
        }
        const dateValidation = validateDates(startDate, endDate);
        if (!dateValidation.valid) {
            setMessage({ text: dateValidation.message, type: 'error' });
            return;
        }
        setLoading(true);
        setResults(null);
        try {
            if (analysisType === 'ndvi') {
                yield runEsriNdviAnalysis();
            }
            else {
                const [WebTileLayer, webMercatorUtils] = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)([
                    'esri/layers/WebTileLayer',
                    'esri/geometry/support/webMercatorUtils'
                ]);
                const formattedGeometry = formatGeometryToGeoJSON(drawnGeometry, webMercatorUtils);
                if (!formattedGeometry) {
                    setMessage({ text: 'فشل استخراج إحداثيات المنطقة.', type: 'error' });
                    setLoading(false);
                    return;
                }
                if (currentAnalysisLayer && ((_b = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _b === void 0 ? void 0 : _b.map)) {
                    jimuMapView.view.map.remove(currentAnalysisLayer);
                }
                const payload = {
                    analysis_type: 'crop_type',
                    project_id: 1,
                    testStartDate: startDate,
                    testEndDate: endDate,
                    geometry: formattedGeometry
                };
                const numericTesterId = user.id ? Number(user.id) : 1;
                const response = yield _api_axiosConfig__WEBPACK_IMPORTED_MODULE_4__["default"].post('/gaip/classify', payload, {
                    headers: {
                        'X-Tester-Id': numericTesterId
                    }
                });
                const analysisResponse = (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.gaip_response) !== null && _d !== void 0 ? _d : response.data;
                const { crop_areas_feddans, crop_health_feddans, maps_urls, passed_metadata } = analysisResponse || {};
                setResults({
                    crop_areas_feddans: crop_areas_feddans || {},
                    crop_health_feddans: crop_health_feddans || {}
                });
                const tileUrlsData = {
                    crop_type: (maps_urls === null || maps_urls === void 0 ? void 0 : maps_urls.crop_type_tiles) || (maps_urls === null || maps_urls === void 0 ? void 0 : maps_urls.tiles),
                    crop_health: maps_urls === null || maps_urls === void 0 ? void 0 : maps_urls.crop_health_tiles
                };
                setTileUrls(tileUrlsData);
                const tileUrl = tileUrlsData.crop_type;
                if (tileUrl && ((_e = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _e === void 0 ? void 0 : _e.map)) {
                    const analysisLayer = new WebTileLayer({
                        urlTemplate: tileUrl,
                        opacity: layerOpacity,
                        title: 'نتائج تصنيف المحاصيل'
                    });
                    jimuMapView.view.map.add(analysisLayer);
                    setCurrentAnalysisLayer(analysisLayer);
                    if (drawnGeometry) {
                        jimuMapView.view.goTo(drawnGeometry.extent.expand(1.2));
                    }
                }
                // 💾 حفظ البيانات لاسترجاعها عند التنقل لصفحة المقارنة
                const finalMetadata = passed_metadata || payload;
                localStorage.setItem('lastAnalysisMetadata', JSON.stringify(finalMetadata));
                window.dispatchEvent(new CustomEvent('cropAnalysisCompleted', {
                    detail: {
                        analysisType,
                        metadata: finalMetadata,
                        responseData: analysisResponse
                    }
                }));
                yield syncUserBalance(user);
                setMessage({ text: 'تم تنفيذ تحليل تصنيف المحاصيل بنجاح.', type: 'success' });
            }
        }
        catch (err) {
            console.error('GeoAI Analysis failed:', err);
            let errorMsg = 'حدث خطأ غير متوقع أثناء معالجة البيانات.';
            if ((_g = (_f = err.response) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.detail) {
                const detail = err.response.data.detail;
                errorMsg = Array.isArray(detail)
                    ? (((_h = detail[0]) === null || _h === void 0 ? void 0 : _h.msg) || JSON.stringify(detail))
                    : (typeof detail === 'string' ? detail : JSON.stringify(detail));
            }
            else if (err.message) {
                errorMsg = err.message;
            }
            setMessage({ text: errorMsg, type: 'error' });
        }
        finally {
            setLoading(false);
        }
    });
    const getGrowthStage = (cropType, dateStr) => {
        if (!cropType || !dateStr)
            return 'غير محدد';
        const end = new Date(dateStr);
        let plantingDate;
        if (cropType === 'Wheat') {
            const year = end.getMonth() >= 10 ? end.getFullYear() : end.getFullYear() - 1;
            plantingDate = new Date(`${year}-11-01`);
        }
        else if (cropType === 'Corn') {
            plantingDate = new Date(`${end.getFullYear()}-05-01`);
        }
        else {
            return 'غير محدد';
        }
        const diffDays = Math.floor((end.getTime() - plantingDate.getTime()) / (1000 * 60 * 60 * 24));
        if (cropType === 'Wheat') {
            if (diffDays < 40)
                return 'إنبات (Seedling)';
            if (diffDays < 90)
                return 'نمو خضري (Vegetative)';
            return 'نضج (Maturation)';
        }
        else {
            if (diffDays < 30)
                return 'إنبات (Seedling)';
            if (diffDays < 70)
                return 'نمو خضري (Vegetative)';
            return 'نضج (Maturation)';
        }
    };
    const computeClassificationMetrics = () => {
        if (!results)
            return null;
        const cropAreas = results.crop_areas_feddans || {};
        const cropHealth = results.crop_health_feddans || {};
        const wheat = cropAreas.Wheat_1 || cropAreas.Wheat || 0;
        const corn = cropAreas.Corn_0 || cropAreas.Corn || 0;
        const nonAgri = cropAreas.Non_agricultural_2 || cropAreas.Non_agricultural || 0;
        const total = wheat + corn + nonAgri || Object.values(cropAreas).reduce((a, b) => a + Number(b), 0) || 1;
        const wheatPct = ((wheat / total) * 100).toFixed(1);
        const cornPct = ((corn / total) * 100).toFixed(1);
        const nonAgriPct = ((nonAgri / total) * 100).toFixed(1);
        const highH = cropHealth.High_Quality_Green || cropHealth.High || 0;
        const medH = cropHealth.Medium_Quality_Yellow || cropHealth.Medium || 0;
        const lowH = cropHealth.Low_Quality_Red || cropHealth.Low || 0;
        const totalH = highH + medH + lowH || Object.values(cropHealth).reduce((a, b) => a + Number(b), 0) || 1;
        const healthIndex = Math.round((highH * 100 + medH * 60 + lowH * 20) / totalH);
        const dominantCrop = wheat >= corn ? 'القمح (Wheat)' : 'الذرة (Corn)';
        return {
            wheat,
            corn,
            nonAgri,
            total,
            wheatPct,
            cornPct,
            nonAgriPct,
            highH,
            medH,
            lowH,
            totalH,
            healthIndex,
            dominantCrop,
            growthStage: getGrowthStage(wheat >= corn ? 'Wheat' : 'Corn', endDate)
        };
    };
    const metrics = computeClassificationMetrics();
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "widget-analysis jimu-widget", style: styles.container, children: [(autoMapId || (props.useMapWidgetIds && props.useMapWidgetIds[0])) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: autoMapId || props.useMapWidgetIds[0], onActiveViewChange: activeViewChangeHandler })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.header, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: styles.iconBadge, children: "\uD83C\uDF31" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { style: styles.title, children: "\u0645\u0646\u0635\u0629 \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0627\u0644\u0632\u0631\u0627\u0639\u064A\u0629" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: styles.subtitle, children: "GeoAI & Remote Sensing Engine" })] })] }), user && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.balanceBadge, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '0.9rem' }, children: "\u26A1" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["\u0627\u0644\u0631\u0635\u064A\u062F: ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: Number((_a = user.credits) !== null && _a !== void 0 ? _a : 0) })] })] }))] }), !user ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: styles.alertWarning, children: "\u26A0\uFE0F \u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0648\u0627\u0644\u062A\u062D\u0644\u064A\u0644." })) : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.bodyContainer, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.formGroup, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: styles.label, children: "\u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: styles.selectWrapper, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: analysisType, onChange: (e) => setAnalysisType(e.target.value), style: styles.select, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "crop_type", children: "\uD83C\uDF3E \u062A\u0635\u0646\u064A\u0641 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u062D\u0627\u0635\u064A\u0644 (Grop Analysis)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "ndvi", children: "\uD83C\uDF3F \u0645\u0624\u0634\u0631 \u0635\u062D\u0629 \u0627\u0644\u0646\u0628\u0627\u062A (NDVI)" })] }) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: styles.formGroup, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { type: "button", onClick: startDrawing, style: Object.assign(Object.assign({}, styles.drawButton), { borderColor: drawnGeometry ? '#10b981' : '#cbd5e1', backgroundColor: drawnGeometry ? '#ecfdf5' : '#f8fafc', color: drawnGeometry ? '#047857' : '#334155' }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '1.1rem' }, children: drawnGeometry ? '✨' : '✏️' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: drawnGeometry ? 'إعادة تحديد منطقة الدراسة' : 'رسم منطقة الدراسة على الخريطة' })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.grid2, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.formGroup, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: styles.label, children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "date", value: startDate, onChange: (e) => setStartDate(e.target.value), style: styles.input })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.formGroup, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: styles.label, children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "date", value: endDate, onChange: (e) => setEndDate(e.target.value), style: styles.input })] })] }), currentAnalysisLayer && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.opacityBox, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: styles.label, children: "\u0634\u0641\u0627\u0641\u064A\u0629 \u0627\u0644\u0637\u0628\u0642\u0629:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontSize: '0.8rem', fontWeight: 600, color: '#0f172a' }, children: [Math.round(layerOpacity * 100), "%"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "range", min: "0", max: "1", step: "0.05", value: layerOpacity, onChange: handleOpacityChange, style: styles.rangeInput })] })), tileUrls.crop_type && tileUrls.crop_health && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.opacityBox, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: styles.label, children: "\u0637\u0628\u0642\u0629 \u0627\u0644\u0639\u0631\u0636:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: '6px', marginTop: '6px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", onClick: () => switchTileLayer('crop_type'), style: Object.assign(Object.assign({}, styles.toggleBtn), { backgroundColor: currentTileLayer === 'crop_type' ? '#059669' : '#f8fafc', color: currentTileLayer === 'crop_type' ? '#ffffff' : '#334155', borderColor: currentTileLayer === 'crop_type' ? '#059669' : '#cbd5e1' }), children: "\uD83C\uDF3E \u0627\u0644\u062A\u0635\u0646\u064A\u0641" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", onClick: () => switchTileLayer('crop_health'), style: Object.assign(Object.assign({}, styles.toggleBtn), { backgroundColor: currentTileLayer === 'crop_health' ? '#0891b2' : '#f8fafc', color: currentTileLayer === 'crop_health' ? '#ffffff' : '#334155', borderColor: currentTileLayer === 'crop_health' ? '#0891b2' : '#cbd5e1' }), children: "\uD83C\uDF3F \u0627\u0644\u0635\u062D\u0629" })] })] })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handleRunAnalysis, disabled: loading, style: Object.assign(Object.assign({}, styles.primaryButton), { backgroundColor: Number((_b = user.credits) !== null && _b !== void 0 ? _b : 0) > 0 ? '#059669' : '#94a3b8', cursor: loading ? 'wait' : 'pointer' }), children: loading ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "spinner" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629..." })] })) : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\uD83D\uDE80 \u0628\u062F\u0621 \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0648\u0627\u0644\u062A\u062D\u0644\u064A\u0644" })) }), message && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.alertBox), (message.type === 'success' ? styles.alertSuccess : {})), (message.type === 'error' ? styles.alertError : {})), (message.type === 'warning' ? styles.alertWarning : {})), (message.type === 'info' ? styles.alertInfo : {})), children: message.text })), metrics && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.resultsPanel, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { style: styles.resultHeader, children: "\uD83D\uDCCA \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u062D\u0642\u0644\u064A\u0629" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.statsGrid, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.statBox, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: styles.statLabel, children: "\u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0643\u0644\u064A\u0629" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { style: styles.statValue, children: [Math.round(metrics.total), " \u0641\u062F\u0627\u0646"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.statBox, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: styles.statLabel, children: "\u0627\u0644\u0645\u062D\u0635\u0648\u0644 \u0627\u0644\u0633\u0627\u0626\u062F" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { style: styles.statValue, children: metrics.dominantCrop })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.statBox, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: styles.statLabel, children: "\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0646\u0645\u0648" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { style: styles.statValue, children: metrics.growthStage })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.metricSection, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: styles.sectionLabel, children: "\u0645\u0624\u0634\u0631 \u0635\u062D\u0629 \u0627\u0644\u0646\u0628\u0627\u062A (NDVI)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontSize: '0.85rem', fontWeight: 700, color: '#059669' }, children: [metrics.healthIndex, "%"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.badgeList, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, styles.badge), { backgroundColor: '#dcfce7', color: '#15803d', borderColor: '#86efac' }), children: ["\uD83D\uDFE2 \u0645\u0645\u062A\u0627\u0632\u0629: ", metrics.highH.toFixed(1), " \u0641"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, styles.badge), { backgroundColor: '#fef9c3', color: '#a16207', borderColor: '#fde047' }), children: ["\uD83D\uDFE1 \u0645\u062A\u0648\u0633\u0637\u0629: ", metrics.medH.toFixed(1), " \u0641"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, styles.badge), { backgroundColor: '#fee2e2', color: '#b91c1c', borderColor: '#fca5a5' }), children: ["\uD83D\uDD34 \u0636\u0639\u064A\u0641\u0629: ", metrics.lowH.toFixed(1), " \u0641"] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.metricSection, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: styles.sectionLabel, children: "\u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0646\u0633\u0628\u064A \u0644\u0644\u0645\u0633\u0627\u062D\u0627\u062A:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.badgeList, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.pillBadge, children: ["\u0627\u0644\u0642\u0645\u062D: ", metrics.wheatPct, "%"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.pillBadge, children: ["\u0627\u0644\u0630\u0631\u0629: ", metrics.cornPct, "%"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.pillBadge, children: ["\u063A\u064A\u0631 \u0632\u0631\u0627\u0639\u064A: ", metrics.nonAgriPct, "%"] })] })] })] }))] }))] }));
}
const styles = {
    container: {
        padding: '16px',
        direction: 'rtl',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        boxSizing: 'border-box',
        maxHeight: '100vh',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '12px',
        marginBottom: '14px',
        borderBottom: '1px solid #f1f5f9',
        flexShrink: 0
    },
    iconBadge: {
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        backgroundColor: '#ecfdf5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem'
    },
    title: {
        margin: 0,
        fontSize: '0.95rem',
        fontWeight: 700,
        color: '#0f172a'
    },
    subtitle: {
        fontSize: '0.7rem',
        color: '#64748b',
        display: 'block'
    },
    balanceBadge: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 10px',
        borderRadius: '20px',
        backgroundColor: '#f0fdf4',
        color: '#166534',
        border: '1px solid #bbf7d0',
        fontSize: '0.75rem',
        fontWeight: 600
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },
    label: {
        fontSize: '0.8rem',
        fontWeight: 600,
        color: '#334155'
    },
    selectWrapper: {
        position: 'relative'
    },
    select: {
        width: '100%',
        padding: '8px 10px',
        borderRadius: '8px',
        border: '1px solid #cbd5e1',
        backgroundColor: '#f8fafc',
        fontSize: '0.825rem',
        color: '#1e293b',
        outline: 'none'
    },
    input: {
        width: '100%',
        padding: '8px 10px',
        borderRadius: '8px',
        border: '1px solid #cbd5e1',
        backgroundColor: '#ffffff',
        fontSize: '0.825rem',
        color: '#1e293b',
        boxSizing: 'border-box',
        outline: 'none'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px'
    },
    drawButton: {
        width: '100%',
        padding: '10px',
        borderRadius: '8px',
        border: '1px dashed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontWeight: 600,
        fontSize: '0.825rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    },
    opacityBox: {
        padding: '10px',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
    },
    rangeInput: {
        width: '100%',
        accentColor: '#059669',
        cursor: 'pointer'
    },
    primaryButton: {
        width: '100%',
        padding: '11px',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 700,
        fontSize: '0.875rem',
        boxShadow: '0 2px 6px rgba(5, 150, 105, 0.25)',
        transition: 'background-color 0.2s ease'
    },
    alertBox: {
        padding: '10px 12px',
        borderRadius: '8px',
        fontSize: '0.8rem',
        lineHeight: '1.4'
    },
    alertSuccess: {
        backgroundColor: '#f0fdf4',
        color: '#166534',
        border: '1px solid #bbf7d0'
    },
    alertError: {
        backgroundColor: '#fef2f2',
        color: '#991b1b',
        border: '1px solid #fecaca'
    },
    alertWarning: {
        backgroundColor: '#fffbeb',
        color: '#92400e',
        border: '1px solid #fde68a'
    },
    alertInfo: {
        backgroundColor: '#f0f9ff',
        color: '#075985',
        border: '1px solid #bae6fd'
    },
    resultsPanel: {
        marginTop: '6px',
        padding: '12px',
        backgroundColor: '#f8fafc',
        borderRadius: '10px',
        border: '1px solid #e2e8f0'
    },
    resultHeader: {
        margin: '0 0 10px 0',
        fontSize: '0.85rem',
        fontWeight: 700,
        color: '#0f172a'
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '6px',
        marginBottom: '10px'
    },
    statBox: {
        backgroundColor: '#ffffff',
        padding: '8px 6px',
        borderRadius: '6px',
        border: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    statLabel: {
        fontSize: '0.675rem',
        color: '#64748b',
        marginBottom: '2px'
    },
    statValue: {
        fontSize: '0.75rem',
        fontWeight: 700,
        color: '#0f172a'
    },
    metricSection: {
        marginTop: '8px',
        paddingTop: '8px',
        borderTop: '1px dashed #cbd5e1'
    },
    sectionLabel: {
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#475569',
        display: 'block',
        marginBottom: '4px'
    },
    badgeList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px'
    },
    badge: {
        padding: '4px 8px',
        borderRadius: '6px',
        fontSize: '0.725rem',
        fontWeight: 600,
        border: '1px solid'
    },
    pillBadge: {
        backgroundColor: '#ffffff',
        color: '#334155',
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '0.725rem',
        border: '1px solid #cbd5e1'
    },
    toggleBtn: {
        flex: 1,
        padding: '8px 10px',
        borderRadius: '8px',
        border: '1px solid',
        fontWeight: 700,
        fontSize: '0.8rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    }
};
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hbmFseXNpcy13aWRnZXQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBRyw2Q0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN2QixPQUFPLEVBQUUsdUNBQXVDO0lBQ2hELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxrQkFBa0I7S0FDbkM7Q0FDRixDQUFDLENBQUM7QUFFSCxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7OztBQ1RuQix5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDSTtBQUNGO0FBQ1M7QUFDSTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsZ0RBQVc7QUFDbkIsT0FBTywrQ0FBVTtBQUNqQjtBQUNBLFNBQVMsK0NBQXFCO0FBQzlCLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGlEQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsd0JBQXdCO0FBQ2xFLE1BQU07QUFDTjtBQUNBO0FBQ0EsK0NBQStDLHdCQUF3QjtBQUN2RTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBLHNDQUFzQyxPQUFPOztBQUU3QztBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLEVBQUUsaURBQUs7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0NBQXdDO0FBQ25ELFdBQVcsUUFBUTtBQUNuQixZQUFZLFlBQVk7QUFDeEIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQSxhQUFhLGlEQUFLOztB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QTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLGVBQWU7QUFDMUI7QUFDQSxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FB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QVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7SUFDRCxZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsU0FBUztRQUNuQixVQUFVLEVBQUUsR0FBRztRQUNmLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFlBQVksRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsTUFBTTtRQUNoQixHQUFHLEVBQUUsS0FBSztLQUNYO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLFNBQVM7UUFDbEIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVSxFQUFFLEdBQUc7UUFDZixNQUFNLEVBQUUsV0FBVztLQUNwQjtJQUNELFNBQVMsRUFBRTtRQUNULGVBQWUsRUFBRSxTQUFTO1FBQzFCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE1BQU0sRUFBRSxtQkFBbUI7S0FDNUI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFlBQVksRUFBRSxLQUFLO1FBQ25CLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFVBQVUsRUFBRSxHQUFHO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsVUFBVSxFQUFFLGVBQWU7S0FDNUI7Q0FDRixDQUFDO0FBQ00sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL2FwaS9heGlvc0NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9hZGFwdGVycy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldEZvcm1EYXRhSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tcG9zZVNpZ25hbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvZXN0aW1hdGVEYXRhVVJMRGVjb2RlZEJ5dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbnVsbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wcm9ncmVzc0V2ZW50UmVkdWNlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3Jlc29sdmVDb25maWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zYW5pdGl6ZUhlYWRlclZhbHVlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdHJhY2tTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL0Jsb2IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL0Zvcm1EYXRhLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYW5hbHlzaXMtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vdGVzdGVyLjE1Mi01My0yMzEtNzEuc3NsaXAuaW8nLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgaHR0cEFkYXB0ZXIgZnJvbSAnLi9odHRwLmpzJztcbmltcG9ydCB4aHJBZGFwdGVyIGZyb20gJy4veGhyLmpzJztcbmltcG9ydCAqIGFzIGZldGNoQWRhcHRlciBmcm9tICcuL2ZldGNoLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogS25vd24gYWRhcHRlcnMgbWFwcGluZy5cbiAqIFByb3ZpZGVzIGVudmlyb25tZW50LXNwZWNpZmljIGFkYXB0ZXJzIGZvciBBeGlvczpcbiAqIC0gYGh0dHBgIGZvciBOb2RlLmpzXG4gKiAtIGB4aHJgIGZvciBicm93c2Vyc1xuICogLSBgZmV0Y2hgIGZvciBmZXRjaCBBUEktYmFzZWQgcmVxdWVzdHNcbiAqXG4gKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgRnVuY3Rpb258T2JqZWN0Pn1cbiAqL1xuY29uc3Qga25vd25BZGFwdGVycyA9IHtcbiAgaHR0cDogaHR0cEFkYXB0ZXIsXG4gIHhocjogeGhyQWRhcHRlcixcbiAgZmV0Y2g6IHtcbiAgICBnZXQ6IGZldGNoQWRhcHRlci5nZXRGZXRjaCxcbiAgfSxcbn07XG5cbi8vIEFzc2lnbiBhZGFwdGVyIG5hbWVzIGZvciBlYXNpZXIgZGVidWdnaW5nIGFuZCBpZGVudGlmaWNhdGlvblxudXRpbHMuZm9yRWFjaChrbm93bkFkYXB0ZXJzLCAoZm4sIHZhbHVlKSA9PiB7XG4gIGlmIChmbikge1xuICAgIHRyeSB7XG4gICAgICAvLyBOdWxsLXByb3RvIGRlc2NyaXB0b3JzIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS5nZXQgY2Fubm90IHR1cm5cbiAgICAgIC8vIHRoZXNlIGRhdGEgZGVzY3JpcHRvcnMgaW50byBhY2Nlc3NvciBkZXNjcmlwdG9ycyBvbiB0aGUgd2F5IGluLlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnbmFtZScsIHsgX19wcm90b19fOiBudWxsLCB2YWx1ZSB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnYWRhcHRlck5hbWUnLCB7IF9fcHJvdG9fXzogbnVsbCwgdmFsdWUgfSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIFJlbmRlciBhIHJlamVjdGlvbiByZWFzb24gc3RyaW5nIGZvciB1bmtub3duIG9yIHVuc3VwcG9ydGVkIGFkYXB0ZXJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvblxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3QgcmVuZGVyUmVhc29uID0gKHJlYXNvbikgPT4gYC0gJHtyZWFzb259YDtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgYWRhcHRlciBpcyByZXNvbHZlZCAoZnVuY3Rpb24sIG51bGwsIG9yIGZhbHNlKVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258bnVsbHxmYWxzZX0gYWRhcHRlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzUmVzb2x2ZWRIYW5kbGUgPSAoYWRhcHRlcikgPT5cbiAgdXRpbHMuaXNGdW5jdGlvbihhZGFwdGVyKSB8fCBhZGFwdGVyID09PSBudWxsIHx8IGFkYXB0ZXIgPT09IGZhbHNlO1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3Qgc3VpdGFibGUgYWRhcHRlciBmcm9tIHRoZSBwcm92aWRlZCBsaXN0LlxuICogVHJpZXMgZWFjaCBhZGFwdGVyIGluIG9yZGVyIHVudGlsIGEgc3VwcG9ydGVkIG9uZSBpcyBmb3VuZC5cbiAqIFRocm93cyBhbiBBeGlvc0Vycm9yIGlmIG5vIGFkYXB0ZXIgaXMgc3VpdGFibGUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmd8RnVuY3Rpb24+fHN0cmluZ3xGdW5jdGlvbn0gYWRhcHRlcnMgLSBBZGFwdGVyKHMpIGJ5IG5hbWUgb3IgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gQXhpb3MgcmVxdWVzdCBjb25maWd1cmF0aW9uXG4gKiBAdGhyb3dzIHtBeGlvc0Vycm9yfSBJZiBubyBzdWl0YWJsZSBhZGFwdGVyIGlzIGF2YWlsYWJsZVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgcmVzb2x2ZWQgYWRhcHRlciBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBnZXRBZGFwdGVyKGFkYXB0ZXJzLCBjb25maWcpIHtcbiAgYWRhcHRlcnMgPSB1dGlscy5pc0FycmF5KGFkYXB0ZXJzKSA/IGFkYXB0ZXJzIDogW2FkYXB0ZXJzXTtcblxuICBjb25zdCB7IGxlbmd0aCB9ID0gYWRhcHRlcnM7XG4gIGxldCBuYW1lT3JBZGFwdGVyO1xuICBsZXQgYWRhcHRlcjtcblxuICBjb25zdCByZWplY3RlZFJlYXNvbnMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbmFtZU9yQWRhcHRlciA9IGFkYXB0ZXJzW2ldO1xuICAgIGxldCBpZDtcblxuICAgIGFkYXB0ZXIgPSBuYW1lT3JBZGFwdGVyO1xuXG4gICAgaWYgKCFpc1Jlc29sdmVkSGFuZGxlKG5hbWVPckFkYXB0ZXIpKSB7XG4gICAgICBhZGFwdGVyID0ga25vd25BZGFwdGVyc1soaWQgPSBTdHJpbmcobmFtZU9yQWRhcHRlcikpLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICBpZiAoYWRhcHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKGBVbmtub3duIGFkYXB0ZXIgJyR7aWR9J2ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZGFwdGVyICYmICh1dGlscy5pc0Z1bmN0aW9uKGFkYXB0ZXIpIHx8IChhZGFwdGVyID0gYWRhcHRlci5nZXQoY29uZmlnKSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZWplY3RlZFJlYXNvbnNbaWQgfHwgJyMnICsgaV0gPSBhZGFwdGVyO1xuICB9XG5cbiAgaWYgKCFhZGFwdGVyKSB7XG4gICAgY29uc3QgcmVhc29ucyA9IE9iamVjdC5lbnRyaWVzKHJlamVjdGVkUmVhc29ucykubWFwKFxuICAgICAgKFtpZCwgc3RhdGVdKSA9PlxuICAgICAgICBgYWRhcHRlciAke2lkfSBgICtcbiAgICAgICAgKHN0YXRlID09PSBmYWxzZSA/ICdpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBlbnZpcm9ubWVudCcgOiAnaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnVpbGQnKVxuICAgICk7XG5cbiAgICBsZXQgcyA9IGxlbmd0aFxuICAgICAgPyByZWFzb25zLmxlbmd0aCA+IDFcbiAgICAgICAgPyAnc2luY2UgOlxcbicgKyByZWFzb25zLm1hcChyZW5kZXJSZWFzb24pLmpvaW4oJ1xcbicpXG4gICAgICAgIDogJyAnICsgcmVuZGVyUmVhc29uKHJlYXNvbnNbMF0pXG4gICAgICA6ICdhcyBubyBhZGFwdGVyIHNwZWNpZmllZCc7XG5cbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgIGBUaGVyZSBpcyBubyBzdWl0YWJsZSBhZGFwdGVyIHRvIGRpc3BhdGNoIHRoZSByZXF1ZXN0IGAgKyBzLFxuICAgICAgQXhpb3NFcnJvci5FUlJfTk9UX1NVUFBPUlRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbi8qKlxuICogRXhwb3J0cyBBeGlvcyBhZGFwdGVycyBhbmQgdXRpbGl0eSB0byByZXNvbHZlIGFuIGFkYXB0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogUmVzb2x2ZSBhbiBhZGFwdGVyIGZyb20gYSBsaXN0IG9mIGFkYXB0ZXIgbmFtZXMgb3IgZnVuY3Rpb25zLlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICBnZXRBZGFwdGVyLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VzIGFsbCBrbm93biBhZGFwdGVyc1xuICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgRnVuY3Rpb258T2JqZWN0Pn1cbiAgICovXG4gIGFkYXB0ZXJzOiBrbm93bkFkYXB0ZXJzLFxufTtcbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBjb21wb3NlU2lnbmFscyBmcm9tICcuLi9oZWxwZXJzL2NvbXBvc2VTaWduYWxzLmpzJztcbmltcG9ydCB7IHRyYWNrU3RyZWFtIH0gZnJvbSAnLi4vaGVscGVycy90cmFja1N0cmVhbS5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCB7XG4gIHByb2dyZXNzRXZlbnRSZWR1Y2VyLFxuICBwcm9ncmVzc0V2ZW50RGVjb3JhdG9yLFxuICBhc3luY0RlY29yYXRvcixcbn0gZnJvbSAnLi4vaGVscGVycy9wcm9ncmVzc0V2ZW50UmVkdWNlci5qcyc7XG5pbXBvcnQgcmVzb2x2ZUNvbmZpZyBmcm9tICcuLi9oZWxwZXJzL3Jlc29sdmVDb25maWcuanMnO1xuaW1wb3J0IHNldHRsZSBmcm9tICcuLi9jb3JlL3NldHRsZS5qcyc7XG5pbXBvcnQgZXN0aW1hdGVEYXRhVVJMRGVjb2RlZEJ5dGVzIGZyb20gJy4uL2hlbHBlcnMvZXN0aW1hdGVEYXRhVVJMRGVjb2RlZEJ5dGVzLmpzJztcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgeyB0b0J5dGVTdHJpbmdIZWFkZXJPYmplY3QgfSBmcm9tICcuLi9oZWxwZXJzL3Nhbml0aXplSGVhZGVyVmFsdWUuanMnO1xuXG5jb25zdCBERUZBVUxUX0NIVU5LX1NJWkUgPSA2NCAqIDEwMjQ7XG5cbmNvbnN0IHsgaXNGdW5jdGlvbiB9ID0gdXRpbHM7XG5cbi8qKlxuICogRW5jb2RlIGEgVVRGLTggc3RyaW5nIHRvIGEgTGF0aW4tMSBieXRlIHN0cmluZyBmb3IgdXNlIHdpdGggYnRvYSgpLlxuICogVGhpcyBpcyBhIG1vZGVybiByZXBsYWNlbWVudCBmb3IgdGhlIGRlcHJlY2F0ZWQgdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpIHBhdHRlcm4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFVURi04IGJ5dGVzIGFzIGEgTGF0aW4tMSBzdHJpbmdcbiAqL1xuY29uc3QgZW5jb2RlVVRGOCA9IChzdHIpID0+XG4gIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2dpLCAoXywgaGV4KSA9PlxuICAgIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpXG4gICk7XG5cbi8vIE5vZGUncyBXSEFUV0cgVVJMIHBhcnNlciByZXR1cm5zIGB1c2VybmFtZWAgYW5kIGBwYXNzd29yZGAgcGVyY2VudC1lbmNvZGVkLlxuLy8gRGVjb2RlIGJlZm9yZSBjb21wb3NpbmcgdGhlIGBhdXRoYCBvcHRpb24gc28gY3JlZGVudGlhbHMgc3VjaCBhc1xuLy8gYG15JTQwZW1haWwuY29tOnBhc3NgIGFyZSBzZW50IGFzIGBteUBlbWFpbC5jb206cGFzc2AuIEZhbGxzIGJhY2sgdG8gdGhlXG4vLyBvcmlnaW5hbCB2YWx1ZSBmb3IgbWFsZm9ybWVkIGlucHV0IHNvIGEgYmFkIGVuY29kaW5nIG5ldmVyIHRocm93cy5cbmNvbnN0IGRlY29kZVVSSUNvbXBvbmVudFNhZmUgPSAodmFsdWUpID0+IHtcbiAgaWYgKCF1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuY29uc3QgdGVzdCA9IChmbiwgLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiAhIWZuKC4uLmFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBtYXliZVdpdGhBdXRoQ3JlZGVudGlhbHMgPSAodXJsKSA9PiB7XG4gIGNvbnN0IHByb3RvY29sSW5kZXggPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gIGxldCB1cmxUb0NoZWNrID0gdXJsO1xuICBpZiAocHJvdG9jb2xJbmRleCAhPT0gLTEpIHtcbiAgICB1cmxUb0NoZWNrID0gdXJsVG9DaGVjay5zbGljZShwcm90b2NvbEluZGV4ICsgMyk7XG4gIH1cbiAgcmV0dXJuIHVybFRvQ2hlY2suaW5jbHVkZXMoJ0AnKSB8fCB1cmxUb0NoZWNrLmluY2x1ZGVzKCc6Jyk7XG59O1xuXG5jb25zdCBmYWN0b3J5ID0gKGVudikgPT4ge1xuICBjb25zdCBnbG9iYWxPYmplY3QgPVxuICAgIHV0aWxzLmdsb2JhbCAhPT0gdW5kZWZpbmVkICYmIHV0aWxzLmdsb2JhbCAhPT0gbnVsbFxuICAgICAgPyB1dGlscy5nbG9iYWxcbiAgICAgIDogZ2xvYmFsVGhpcztcbiAgY29uc3QgeyBSZWFkYWJsZVN0cmVhbSwgVGV4dEVuY29kZXIgfSA9IGdsb2JhbE9iamVjdDtcblxuICBlbnYgPSB1dGlscy5tZXJnZS5jYWxsKFxuICAgIHtcbiAgICAgIHNraXBVbmRlZmluZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBSZXF1ZXN0OiBnbG9iYWxPYmplY3QuUmVxdWVzdCxcbiAgICAgIFJlc3BvbnNlOiBnbG9iYWxPYmplY3QuUmVzcG9uc2UsXG4gICAgfSxcbiAgICBlbnZcbiAgKTtcblxuICBjb25zdCB7IGZldGNoOiBlbnZGZXRjaCwgUmVxdWVzdCwgUmVzcG9uc2UgfSA9IGVudjtcbiAgY29uc3QgaXNGZXRjaFN1cHBvcnRlZCA9IGVudkZldGNoID8gaXNGdW5jdGlvbihlbnZGZXRjaCkgOiB0eXBlb2YgZmV0Y2ggPT09ICdmdW5jdGlvbic7XG4gIGNvbnN0IGlzUmVxdWVzdFN1cHBvcnRlZCA9IGlzRnVuY3Rpb24oUmVxdWVzdCk7XG4gIGNvbnN0IGlzUmVzcG9uc2VTdXBwb3J0ZWQgPSBpc0Z1bmN0aW9uKFJlc3BvbnNlKTtcblxuICBpZiAoIWlzRmV0Y2hTdXBwb3J0ZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkID0gaXNGZXRjaFN1cHBvcnRlZCAmJiBpc0Z1bmN0aW9uKFJlYWRhYmxlU3RyZWFtKTtcblxuICBjb25zdCBlbmNvZGVUZXh0ID1cbiAgICBpc0ZldGNoU3VwcG9ydGVkICYmXG4gICAgKHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyAoXG4gICAgICAgICAgKGVuY29kZXIpID0+IChzdHIpID0+XG4gICAgICAgICAgICBlbmNvZGVyLmVuY29kZShzdHIpXG4gICAgICAgICkobmV3IFRleHRFbmNvZGVyKCkpXG4gICAgICA6IGFzeW5jIChzdHIpID0+IG5ldyBVaW50OEFycmF5KGF3YWl0IG5ldyBSZXF1ZXN0KHN0cikuYXJyYXlCdWZmZXIoKSkpO1xuXG4gIGNvbnN0IHN1cHBvcnRzUmVxdWVzdFN0cmVhbSA9XG4gICAgaXNSZXF1ZXN0U3VwcG9ydGVkICYmXG4gICAgaXNSZWFkYWJsZVN0cmVhbVN1cHBvcnRlZCAmJlxuICAgIHRlc3QoKCkgPT4ge1xuICAgICAgbGV0IGR1cGxleEFjY2Vzc2VkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChwbGF0Zm9ybS5vcmlnaW4sIHtcbiAgICAgICAgYm9keTogbmV3IFJlYWRhYmxlU3RyZWFtKCksXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBnZXQgZHVwbGV4KCkge1xuICAgICAgICAgIGR1cGxleEFjY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gJ2hhbGYnO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGhhc0NvbnRlbnRUeXBlID0gcmVxdWVzdC5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJyk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmJvZHkgIT0gbnVsbCkge1xuICAgICAgICByZXF1ZXN0LmJvZHkuY2FuY2VsKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkdXBsZXhBY2Nlc3NlZCAmJiAhaGFzQ29udGVudFR5cGU7XG4gICAgfSk7XG5cbiAgY29uc3Qgc3VwcG9ydHNSZXNwb25zZVN0cmVhbSA9XG4gICAgaXNSZXNwb25zZVN1cHBvcnRlZCAmJlxuICAgIGlzUmVhZGFibGVTdHJlYW1TdXBwb3J0ZWQgJiZcbiAgICB0ZXN0KCgpID0+IHV0aWxzLmlzUmVhZGFibGVTdHJlYW0obmV3IFJlc3BvbnNlKCcnKS5ib2R5KSk7XG5cbiAgY29uc3QgcmVzb2x2ZXJzID0ge1xuICAgIHN0cmVhbTogc3VwcG9ydHNSZXNwb25zZVN0cmVhbSAmJiAoKHJlcykgPT4gcmVzLmJvZHkpLFxuICB9O1xuXG4gIGlzRmV0Y2hTdXBwb3J0ZWQgJiZcbiAgICAoKCkgPT4ge1xuICAgICAgWyd0ZXh0JywgJ2FycmF5QnVmZmVyJywgJ2Jsb2InLCAnZm9ybURhdGEnLCAnc3RyZWFtJ10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICAhcmVzb2x2ZXJzW3R5cGVdICYmXG4gICAgICAgICAgKHJlc29sdmVyc1t0eXBlXSA9IChyZXMsIGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgbGV0IG1ldGhvZCA9IHJlcyAmJiByZXNbdHlwZV07XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5jYWxsKHJlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAgICAgICBgUmVzcG9uc2UgdHlwZSAnJHt0eXBlfScgaXMgbm90IHN1cHBvcnRlZGAsXG4gICAgICAgICAgICAgIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JULFxuICAgICAgICAgICAgICBjb25maWdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gIGNvbnN0IGdldEJvZHlMZW5ndGggPSBhc3luYyAoYm9keSkgPT4ge1xuICAgIGlmIChib2R5ID09IG51bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0Jsb2IoYm9keSkpIHtcbiAgICAgIHJldHVybiBib2R5LnNpemU7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzU3BlY0NvbXBsaWFudEZvcm0oYm9keSkpIHtcbiAgICAgIGNvbnN0IF9yZXF1ZXN0ID0gbmV3IFJlcXVlc3QocGxhdGZvcm0ub3JpZ2luLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gKGF3YWl0IF9yZXF1ZXN0LmFycmF5QnVmZmVyKCkpLmJ5dGVMZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpIHx8IHV0aWxzLmlzQXJyYXlCdWZmZXIoYm9keSkpIHtcbiAgICAgIHJldHVybiBib2R5LmJ5dGVMZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGJvZHkpKSB7XG4gICAgICBib2R5ID0gYm9keSArICcnO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc1N0cmluZyhib2R5KSkge1xuICAgICAgcmV0dXJuIChhd2FpdCBlbmNvZGVUZXh0KGJvZHkpKS5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNvbHZlQm9keUxlbmd0aCA9IGFzeW5jIChoZWFkZXJzLCBib2R5KSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gdXRpbHMudG9GaW5pdGVOdW1iZXIoaGVhZGVycy5nZXRDb250ZW50TGVuZ3RoKCkpO1xuXG4gICAgcmV0dXJuIGxlbmd0aCA9PSBudWxsID8gZ2V0Qm9keUxlbmd0aChib2R5KSA6IGxlbmd0aDtcbiAgfTtcblxuICByZXR1cm4gYXN5bmMgKGNvbmZpZykgPT4ge1xuICAgIGxldCB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICBkYXRhLFxuICAgICAgc2lnbmFsLFxuICAgICAgY2FuY2VsVG9rZW4sXG4gICAgICB0aW1lb3V0LFxuICAgICAgb25Eb3dubG9hZFByb2dyZXNzLFxuICAgICAgb25VcGxvYWRQcm9ncmVzcyxcbiAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICB3aXRoQ3JlZGVudGlhbHMgPSAnc2FtZS1vcmlnaW4nLFxuICAgICAgZmV0Y2hPcHRpb25zLFxuICAgICAgbWF4Q29udGVudExlbmd0aCxcbiAgICAgIG1heEJvZHlMZW5ndGgsXG4gICAgfSA9IHJlc29sdmVDb25maWcoY29uZmlnKTtcblxuICAgIGNvbnN0IGhhc01heENvbnRlbnRMZW5ndGggPSB1dGlscy5pc051bWJlcihtYXhDb250ZW50TGVuZ3RoKSAmJiBtYXhDb250ZW50TGVuZ3RoID4gLTE7XG4gICAgY29uc3QgaGFzTWF4Qm9keUxlbmd0aCA9IHV0aWxzLmlzTnVtYmVyKG1heEJvZHlMZW5ndGgpICYmIG1heEJvZHlMZW5ndGggPiAtMTtcbiAgICBjb25zdCBvd24gPSAoa2V5KSA9PiAodXRpbHMuaGFzT3duUHJvcChjb25maWcsIGtleSkgPyBjb25maWdba2V5XSA6IHVuZGVmaW5lZCk7XG5cbiAgICBsZXQgX2ZldGNoID0gZW52RmV0Y2ggfHwgZmV0Y2g7XG5cbiAgICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgPyAocmVzcG9uc2VUeXBlICsgJycpLnRvTG93ZXJDYXNlKCkgOiAndGV4dCc7XG5cbiAgICBsZXQgY29tcG9zZWRTaWduYWwgPSBjb21wb3NlU2lnbmFscyhcbiAgICAgIFtzaWduYWwsIGNhbmNlbFRva2VuICYmIGNhbmNlbFRva2VuLnRvQWJvcnRTaWduYWwoKV0sXG4gICAgICB0aW1lb3V0XG4gICAgKTtcblxuICAgIGxldCByZXF1ZXN0ID0gbnVsbDtcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID1cbiAgICAgIGNvbXBvc2VkU2lnbmFsICYmXG4gICAgICBjb21wb3NlZFNpZ25hbC51bnN1YnNjcmliZSAmJlxuICAgICAgKCgpID0+IHtcbiAgICAgICAgY29tcG9zZWRTaWduYWwudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuXG4gICAgbGV0IHJlcXVlc3RDb250ZW50TGVuZ3RoO1xuXG4gICAgLy8gQXhpb3NFcnJvciB3ZSByYWlzZSB3aGlsZSB0aGUgcmVxdWVzdCBib2R5IGlzIGJlaW5nIHN0cmVhbWVkLiBDYXB0dXJlZFxuICAgIC8vIGJ5IGlkZW50aXR5IHNvIHRoZSBjYXRjaCBibG9jayBjYW4gc3VyZmFjZSBpdCBkaXJlY3RseSwgcmVnYXJkbGVzcyBvZlxuICAgIC8vIGhvdyB0aGUgcnVudGltZSB3cmFwcyB0aGUgcmVzdWx0aW5nIGZldGNoIHJlamVjdGlvbiAodW5kaWNpIGV4cG9zZXMgaXRcbiAgICAvLyBhcyBgZXJyLmNhdXNlYDsgc29tZSBicm93c2VycyBkcm9wIHRoZSBvcmlnaW5hbCBlcnJvciBlbnRpcmVseSkuXG4gICAgbGV0IHBlbmRpbmdCb2R5RXJyb3IgPSBudWxsO1xuXG4gICAgY29uc3QgbWF4Qm9keUxlbmd0aEVycm9yID0gKCkgPT5cbiAgICAgIG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAnUmVxdWVzdCBib2R5IGxhcmdlciB0aGFuIG1heEJvZHlMZW5ndGggbGltaXQnLFxuICAgICAgICBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0XG4gICAgICApO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICAgIGxldCBhdXRoID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgY29uZmlnQXV0aCA9IG93bignYXV0aCcpO1xuXG4gICAgICBpZiAoY29uZmlnQXV0aCkge1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IHV0aWxzLmdldFNhZmVQcm9wKGNvbmZpZ0F1dGgsICd1c2VybmFtZScpIHx8ICcnO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHV0aWxzLmdldFNhZmVQcm9wKGNvbmZpZ0F1dGgsICdwYXNzd29yZCcpIHx8ICcnO1xuICAgICAgICBhdXRoID0ge1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXliZVdpdGhBdXRoQ3JlZGVudGlhbHModXJsKSkge1xuICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKHVybCwgcGxhdGZvcm0ub3JpZ2luKTtcblxuICAgICAgICBpZiAoIWF1dGggJiYgKHBhcnNlZFVSTC51c2VybmFtZSB8fCBwYXJzZWRVUkwucGFzc3dvcmQpKSB7XG4gICAgICAgICAgY29uc3QgdXJsVXNlcm5hbWUgPSBkZWNvZGVVUklDb21wb25lbnRTYWZlKHBhcnNlZFVSTC51c2VybmFtZSk7XG4gICAgICAgICAgY29uc3QgdXJsUGFzc3dvcmQgPSBkZWNvZGVVUklDb21wb25lbnRTYWZlKHBhcnNlZFVSTC5wYXNzd29yZCk7XG4gICAgICAgICAgYXV0aCA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1cmxVc2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1cmxQYXNzd29yZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkVVJMLnVzZXJuYW1lIHx8IHBhcnNlZFVSTC5wYXNzd29yZCkge1xuICAgICAgICAgIHBhcnNlZFVSTC51c2VybmFtZSA9ICcnO1xuICAgICAgICAgIHBhcnNlZFVSTC5wYXNzd29yZCA9ICcnO1xuICAgICAgICAgIHVybCA9IHBhcnNlZFVSTC5ocmVmO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhdXRoKSB7XG4gICAgICAgIGhlYWRlcnMuZGVsZXRlKCdhdXRob3JpemF0aW9uJyk7XG4gICAgICAgIGhlYWRlcnMuc2V0KFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJyxcbiAgICAgICAgICAnQmFzaWMgJyArIGJ0b2EoZW5jb2RlVVRGOCgoYXV0aC51c2VybmFtZSB8fCAnJykgKyAnOicgKyAoYXV0aC5wYXNzd29yZCB8fCAnJykpKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBFbmZvcmNlIG1heENvbnRlbnRMZW5ndGggZm9yIGRhdGE6IFVSTHMgdXAtZnJvbnQgc28gd2UgbmV2ZXIgbWF0ZXJpYWxpemVcbiAgICAgIC8vIGFuIG92ZXJzaXplZCBwYXlsb2FkLiBUaGUgSFRUUCBhZGFwdGVyIGFwcGxpZXMgdGhlIHNhbWUgY2hlY2sgKHNlZSBodHRwLmpzXG4gICAgICAvLyBcImlmIChwcm90b2NvbCA9PT0gJ2RhdGE6JylcIiBicmFuY2gpLlxuICAgICAgaWYgKGhhc01heENvbnRlbnRMZW5ndGggJiYgdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgJiYgdXJsLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgY29uc3QgZXN0aW1hdGVkID0gZXN0aW1hdGVEYXRhVVJMRGVjb2RlZEJ5dGVzKHVybCk7XG4gICAgICAgIGlmIChlc3RpbWF0ZWQgPiBtYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgICAnbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBtYXhDb250ZW50TGVuZ3RoICsgJyBleGNlZWRlZCcsXG4gICAgICAgICAgICBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsXG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICByZXF1ZXN0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFbmZvcmNlIG1heEJvZHlMZW5ndGggYWdhaW5zdCBrbm93bi1zaXplIGJvZGllcyBiZWZvcmUgZGlzcGF0Y2ggdXNpbmdcbiAgICAgIC8vIHRoZSBib2R5J3MgKmFjdHVhbCogc2l6ZSDigJQgbmV2ZXIgYSBjYWxsZXItZGVjbGFyZWQgQ29udGVudC1MZW5ndGgsXG4gICAgICAvLyB3aGljaCBjb3VsZCB1bmRlci1yZXBvcnQgdG8gc2xpcCBhbiBvdmVyc2l6ZWQgYm9keSBwYXN0IHRoZSBjaGVjay5cbiAgICAgIC8vIFVua25vd24tc2l6ZSBzdHJlYW1zIHJldHVybiB1bmRlZmluZWQgaGVyZSBhbmQgYXJlIGNvdW50ZWQgcGVyLWNodW5rXG4gICAgICAvLyBiZWxvdyBhcyBmZXRjaCBjb25zdW1lcyB0aGVtLlxuICAgICAgaWYgKGhhc01heEJvZHlMZW5ndGggJiYgbWV0aG9kICE9PSAnZ2V0JyAmJiBtZXRob2QgIT09ICdoZWFkJykge1xuICAgICAgICBjb25zdCBvdXRib3VuZExlbmd0aCA9IGF3YWl0IGdldEJvZHlMZW5ndGgoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3V0Ym91bmRMZW5ndGggPT09ICdudW1iZXInICYmIGlzRmluaXRlKG91dGJvdW5kTGVuZ3RoKSkge1xuICAgICAgICAgIHJlcXVlc3RDb250ZW50TGVuZ3RoID0gb3V0Ym91bmRMZW5ndGg7XG4gICAgICAgICAgaWYgKG91dGJvdW5kTGVuZ3RoID4gbWF4Qm9keUxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbWF4Qm9keUxlbmd0aEVycm9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEEgc3RyZWFtZWQgYm9keSB1bmRlciBtYXhCb2R5TGVuZ3RoIG11c3QgYmUgY291bnRlZCBhcyBmZXRjaCBjb25zdW1lc1xuICAgICAgLy8gaXQ7IGl0cyBzaXplIGlzIG5ldmVyIHRydXN0ZWQgZnJvbSBhIGNhbGxlci1kZWNsYXJlZCBDb250ZW50LUxlbmd0aC5cbiAgICAgIGNvbnN0IG11c3RFbmZvcmNlU3RyZWFtQm9keSA9XG4gICAgICAgIGhhc01heEJvZHlMZW5ndGggJiYgKHV0aWxzLmlzUmVhZGFibGVTdHJlYW0oZGF0YSkgfHwgdXRpbHMuaXNTdHJlYW0oZGF0YSkpO1xuXG4gICAgICBjb25zdCB0cmFja1JlcXVlc3RTdHJlYW0gPSAoc3RyZWFtLCBvblByb2dyZXNzLCBmbHVzaCkgPT5cbiAgICAgICAgdHJhY2tTdHJlYW0oXG4gICAgICAgICAgc3RyZWFtLFxuICAgICAgICAgIERFRkFVTFRfQ0hVTktfU0laRSxcbiAgICAgICAgICAobG9hZGVkQnl0ZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChoYXNNYXhCb2R5TGVuZ3RoICYmIGxvYWRlZEJ5dGVzID4gbWF4Qm9keUxlbmd0aCkge1xuICAgICAgICAgICAgICB0aHJvdyAocGVuZGluZ0JvZHlFcnJvciA9IG1heEJvZHlMZW5ndGhFcnJvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uUHJvZ3Jlc3MgJiYgb25Qcm9ncmVzcyhsb2FkZWRCeXRlcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmbHVzaFxuICAgICAgICApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHN1cHBvcnRzUmVxdWVzdFN0cmVhbSAmJlxuICAgICAgICBtZXRob2QgIT09ICdnZXQnICYmXG4gICAgICAgIG1ldGhvZCAhPT0gJ2hlYWQnICYmXG4gICAgICAgIChvblVwbG9hZFByb2dyZXNzIHx8IG11c3RFbmZvcmNlU3RyZWFtQm9keSlcbiAgICAgICkge1xuICAgICAgICByZXF1ZXN0Q29udGVudExlbmd0aCA9XG4gICAgICAgICAgcmVxdWVzdENvbnRlbnRMZW5ndGggPT0gbnVsbCA/IGF3YWl0IHJlc29sdmVCb2R5TGVuZ3RoKGhlYWRlcnMsIGRhdGEpIDogcmVxdWVzdENvbnRlbnRMZW5ndGg7XG5cbiAgICAgICAgLy8gQSBkZWNsYXJlZCBsZW5ndGggb2YgMCBpcyBvbmx5IHRydXN0ZWQgdG8gc2tpcCB0aGUgd3JhcCB3aGVuIHdlIGFyZVxuICAgICAgICAvLyBub3QgZW5mb3JjaW5nIGEgc3RyZWFtIGxpbWl0ICh3aGljaCBtdXN0IG5vdCByZWx5IG9uIHRoYXQgaGVhZGVyKS5cbiAgICAgICAgaWYgKHJlcXVlc3RDb250ZW50TGVuZ3RoICE9PSAwIHx8IG11c3RFbmZvcmNlU3RyZWFtQm9keSkge1xuICAgICAgICAgIGxldCBfcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICAgICAgZHVwbGV4OiAnaGFsZicsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsZXQgY29udGVudFR5cGVIZWFkZXI7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSAmJiAoY29udGVudFR5cGVIZWFkZXIgPSBfcmVxdWVzdC5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpKSB7XG4gICAgICAgICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKGNvbnRlbnRUeXBlSGVhZGVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3JlcXVlc3QuYm9keSkge1xuICAgICAgICAgICAgY29uc3QgW29uUHJvZ3Jlc3MsIGZsdXNoXSA9XG4gICAgICAgICAgICAgIChvblVwbG9hZFByb2dyZXNzICYmXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NFdmVudERlY29yYXRvcihcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3RDb250ZW50TGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoYXN5bmNEZWNvcmF0b3Iob25VcGxvYWRQcm9ncmVzcykpXG4gICAgICAgICAgICAgICAgKSkgfHxcbiAgICAgICAgICAgICAgW107XG5cbiAgICAgICAgICAgIGRhdGEgPSB0cmFja1JlcXVlc3RTdHJlYW0oX3JlcXVlc3QuYm9keSwgb25Qcm9ncmVzcywgZmx1c2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgbXVzdEVuZm9yY2VTdHJlYW1Cb2R5ICYmXG4gICAgICAgICFpc1JlcXVlc3RTdXBwb3J0ZWQgJiZcbiAgICAgICAgaXNSZWFkYWJsZVN0cmVhbVN1cHBvcnRlZCAmJlxuICAgICAgICBtZXRob2QgIT09ICdnZXQnICYmXG4gICAgICAgIG1ldGhvZCAhPT0gJ2hlYWQnXG4gICAgICApIHtcbiAgICAgICAgZGF0YSA9IHRyYWNrUmVxdWVzdFN0cmVhbShkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIG11c3RFbmZvcmNlU3RyZWFtQm9keSAmJlxuICAgICAgICBpc1JlcXVlc3RTdXBwb3J0ZWQgJiZcbiAgICAgICAgIXN1cHBvcnRzUmVxdWVzdFN0cmVhbSAmJlxuICAgICAgICBtZXRob2QgIT09ICdnZXQnICYmXG4gICAgICAgIG1ldGhvZCAhPT0gJ2hlYWQnXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgJ1N0cmVhbSByZXF1ZXN0IGJvZGllcyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBmZXRjaCBpbXBsZW1lbnRhdGlvbicsXG4gICAgICAgICAgQXhpb3NFcnJvci5FUlJfTk9UX1NVUFBPUlQsXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlcXVlc3RcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc1N0cmluZyh3aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdvbWl0JztcbiAgICAgIH1cblxuICAgICAgLy8gQ2xvdWRmbGFyZSBXb3JrZXJzIHRocm93cyB3aGVuIGNyZWRlbnRpYWxzIGFyZSBkZWZpbmVkXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Nsb3VkZmxhcmUvd29ya2VyZC9pc3N1ZXMvOTAyXG4gICAgICBjb25zdCBpc0NyZWRlbnRpYWxzU3VwcG9ydGVkID0gaXNSZXF1ZXN0U3VwcG9ydGVkICYmICdjcmVkZW50aWFscycgaW4gUmVxdWVzdC5wcm90b3R5cGU7XG5cbiAgICAgIC8vIElmIGRhdGEgaXMgRm9ybURhdGEgYW5kIENvbnRlbnQtVHlwZSBpcyBtdWx0aXBhcnQvZm9ybS1kYXRhIHdpdGhvdXQgYm91bmRhcnksXG4gICAgICAvLyBkZWxldGUgaXQgc28gZmV0Y2ggY2FuIHNldCBpdCBjb3JyZWN0bHkgd2l0aCB0aGUgYm91bmRhcnlcbiAgICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29udGVudFR5cGUgJiZcbiAgICAgICAgICAvXm11bHRpcGFydFxcL2Zvcm0tZGF0YS9pLnRlc3QoY29udGVudFR5cGUpICYmXG4gICAgICAgICAgIS9ib3VuZGFyeT0vaS50ZXN0KGNvbnRlbnRUeXBlKVxuICAgICAgICApIHtcbiAgICAgICAgICBoZWFkZXJzLmRlbGV0ZSgnY29udGVudC10eXBlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2V0IFVzZXItQWdlbnQgaGVhZGVyIGlmIG5vdCBhbHJlYWR5IHNldCAoZmV0Y2ggZGVmYXVsdHMgdG8gJ25vZGUnIGluIE5vZGUuanMpXG4gICAgICBoZWFkZXJzLnNldCgnVXNlci1BZ2VudCcsICdheGlvcy8nICsgVkVSU0lPTiwgZmFsc2UpO1xuXG4gICAgICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmZldGNoT3B0aW9ucyxcbiAgICAgICAgc2lnbmFsOiBjb21wb3NlZFNpZ25hbCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICAgICAgaGVhZGVyczogdG9CeXRlU3RyaW5nSGVhZGVyT2JqZWN0KGhlYWRlcnMubm9ybWFsaXplKCkpLFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICBkdXBsZXg6ICdoYWxmJyxcbiAgICAgICAgY3JlZGVudGlhbHM6IGlzQ3JlZGVudGlhbHNTdXBwb3J0ZWQgPyB3aXRoQ3JlZGVudGlhbHMgOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0ID0gaXNSZXF1ZXN0U3VwcG9ydGVkICYmIG5ldyBSZXF1ZXN0KHVybCwgcmVzb2x2ZWRPcHRpb25zKTtcblxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgKGlzUmVxdWVzdFN1cHBvcnRlZFxuICAgICAgICA/IF9mZXRjaChyZXF1ZXN0LCBmZXRjaE9wdGlvbnMpXG4gICAgICAgIDogX2ZldGNoKHVybCwgcmVzb2x2ZWRPcHRpb25zKSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpO1xuXG4gICAgICAvLyBDaGVhcCBwcmUtY2hlY2s6IGlmIHRoZSBzZXJ2ZXIgaG9uZXN0bHkgZGVjbGFyZXMgYSBjb250ZW50LWxlbmd0aCB0aGF0XG4gICAgICAvLyBhbHJlYWR5IGV4Y2VlZHMgdGhlIGNhcCwgcmVqZWN0IGJlZm9yZSB3ZSBzdGFydCBzdHJlYW1pbmcuXG4gICAgICBpZiAoaGFzTWF4Q29udGVudExlbmd0aCkge1xuICAgICAgICBjb25zdCBkZWNsYXJlZExlbmd0aCA9IHV0aWxzLnRvRmluaXRlTnVtYmVyKHJlc3BvbnNlSGVhZGVycy5nZXRDb250ZW50TGVuZ3RoKCkpO1xuICAgICAgICBpZiAoZGVjbGFyZWRMZW5ndGggIT0gbnVsbCAmJiBkZWNsYXJlZExlbmd0aCA+IG1heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgICAgICdtYXhDb250ZW50TGVuZ3RoIHNpemUgb2YgJyArIG1heENvbnRlbnRMZW5ndGggKyAnIGV4Y2VlZGVkJyxcbiAgICAgICAgICAgIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSxcbiAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgIHJlcXVlc3RcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzU3RyZWFtUmVzcG9uc2UgPVxuICAgICAgICBzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmIChyZXNwb25zZVR5cGUgPT09ICdzdHJlYW0nIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3Jlc3BvbnNlJyk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgc3VwcG9ydHNSZXNwb25zZVN0cmVhbSAmJlxuICAgICAgICByZXNwb25zZS5ib2R5ICYmXG4gICAgICAgIChvbkRvd25sb2FkUHJvZ3Jlc3MgfHwgaGFzTWF4Q29udGVudExlbmd0aCB8fCAoaXNTdHJlYW1SZXNwb25zZSAmJiB1bnN1YnNjcmliZSkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG4gICAgICAgIFsnc3RhdHVzJywgJ3N0YXR1c1RleHQnLCAnaGVhZGVycyddLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICBvcHRpb25zW3Byb3BdID0gcmVzcG9uc2VbcHJvcF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQ29udGVudExlbmd0aCA9IHV0aWxzLnRvRmluaXRlTnVtYmVyKHJlc3BvbnNlSGVhZGVycy5nZXRDb250ZW50TGVuZ3RoKCkpO1xuXG4gICAgICAgIGNvbnN0IFtvblByb2dyZXNzLCBmbHVzaF0gPVxuICAgICAgICAgIChvbkRvd25sb2FkUHJvZ3Jlc3MgJiZcbiAgICAgICAgICAgIHByb2dyZXNzRXZlbnREZWNvcmF0b3IoXG4gICAgICAgICAgICAgIHJlc3BvbnNlQ29udGVudExlbmd0aCxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoYXN5bmNEZWNvcmF0b3Iob25Eb3dubG9hZFByb2dyZXNzKSwgdHJ1ZSlcbiAgICAgICAgICAgICkpIHx8XG4gICAgICAgICAgW107XG5cbiAgICAgICAgbGV0IGJ5dGVzUmVhZCA9IDA7XG4gICAgICAgIGNvbnN0IG9uQ2h1bmtQcm9ncmVzcyA9IChsb2FkZWRCeXRlcykgPT4ge1xuICAgICAgICAgIGlmIChoYXNNYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICBieXRlc1JlYWQgPSBsb2FkZWRCeXRlcztcbiAgICAgICAgICAgIGlmIChieXRlc1JlYWQgPiBtYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAgICAgICAgICdtYXhDb250ZW50TGVuZ3RoIHNpemUgb2YgJyArIG1heENvbnRlbnRMZW5ndGggKyAnIGV4Y2VlZGVkJyxcbiAgICAgICAgICAgICAgICBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsXG4gICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgb25Qcm9ncmVzcyAmJiBvblByb2dyZXNzKGxvYWRlZEJ5dGVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXNwb25zZSA9IG5ldyBSZXNwb25zZShcbiAgICAgICAgICB0cmFja1N0cmVhbShyZXNwb25zZS5ib2R5LCBERUZBVUxUX0NIVU5LX1NJWkUsIG9uQ2h1bmtQcm9ncmVzcywgKCkgPT4ge1xuICAgICAgICAgICAgZmx1c2ggJiYgZmx1c2goKTtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlICYmIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgfHwgJ3RleHQnO1xuXG4gICAgICBsZXQgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzb2x2ZXJzW3V0aWxzLmZpbmRLZXkocmVzb2x2ZXJzLCByZXNwb25zZVR5cGUpIHx8ICd0ZXh0J10oXG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgICBjb25maWdcbiAgICAgICk7XG5cbiAgICAgIC8vIEZhbGxiYWNrIGVuZm9yY2VtZW50IGZvciBlbnZpcm9ubWVudHMgd2l0aG91dCBSZWFkYWJsZVN0cmVhbSBzdXBwb3J0XG4gICAgICAvLyAobGVnYWN5IHJ1bnRpbWVzKS4gRGV0ZWN0IG1hdGVyaWFsaXplZCBzaXplIGZyb20gdHlwZWQgb3V0cHV0OyBza2lwXG4gICAgICAvLyBzdHJlYW1zL1Jlc3BvbnNlIHBhc3N0aHJvdWdoIHNpbmNlIHRoZSB1c2VyIHdpbGwgcmVhZCB0aG9zZSB0aGVtc2VsdmVzLlxuICAgICAgaWYgKGhhc01heENvbnRlbnRMZW5ndGggJiYgIXN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gJiYgIWlzU3RyZWFtUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IG1hdGVyaWFsaXplZFNpemU7XG4gICAgICAgIGlmIChyZXNwb25zZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhLmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtYXRlcmlhbGl6ZWRTaXplID0gcmVzcG9uc2VEYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhLnNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtYXRlcmlhbGl6ZWRTaXplID0gcmVzcG9uc2VEYXRhLnNpemU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbWF0ZXJpYWxpemVkU2l6ZSA9XG4gICAgICAgICAgICAgIHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHJlc3BvbnNlRGF0YSkuYnl0ZUxlbmd0aFxuICAgICAgICAgICAgICAgIDogcmVzcG9uc2VEYXRhLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtYXRlcmlhbGl6ZWRTaXplID09PSAnbnVtYmVyJyAmJiBtYXRlcmlhbGl6ZWRTaXplID4gbWF4Q29udGVudExlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAgICAgJ21heENvbnRlbnRMZW5ndGggc2l6ZSBvZiAnICsgbWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLFxuICAgICAgICAgICAgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgcmVxdWVzdFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgIWlzU3RyZWFtUmVzcG9uc2UgJiYgdW5zdWJzY3JpYmUgJiYgdW5zdWJzY3JpYmUoKTtcblxuICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwge1xuICAgICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgICBoZWFkZXJzOiBBeGlvc0hlYWRlcnMuZnJvbShyZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdW5zdWJzY3JpYmUgJiYgdW5zdWJzY3JpYmUoKTtcblxuICAgICAgLy8gU2FmYXJpIGNhbiBzdXJmYWNlIGZldGNoIGFib3J0cyBhcyBhIERPTUV4Y2VwdGlvbi1saWtlIG9iamVjdCB3aG9zZVxuICAgICAgLy8gYnJhbmRlZCBnZXR0ZXJzIHRocm93LiBQcmVmZXIgb3VyIGNvbXBvc2VkIHNpZ25hbCByZWFzb24gYmVmb3JlIHJlYWRpbmdcbiAgICAgIC8vIHRoZSBjYXVnaHQgZXJyb3IsIHByZXNlcnZpbmcgdGltZW91dCB2cyBjYW5jZWxsYXRpb24gc2VtYW50aWNzLlxuICAgICAgaWYgKGNvbXBvc2VkU2lnbmFsICYmIGNvbXBvc2VkU2lnbmFsLmFib3J0ZWQgJiYgY29tcG9zZWRTaWduYWwucmVhc29uIGluc3RhbmNlb2YgQXhpb3NFcnJvcikge1xuICAgICAgICBjb25zdCBjYW5jZWxlZEVycm9yID0gY29tcG9zZWRTaWduYWwucmVhc29uO1xuICAgICAgICBjYW5jZWxlZEVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgcmVxdWVzdCAmJiAoY2FuY2VsZWRFcnJvci5yZXF1ZXN0ID0gcmVxdWVzdCk7XG4gICAgICAgIGlmIChlcnIgIT09IGNhbmNlbGVkRXJyb3IpIHtcbiAgICAgICAgICAvLyBOb24tZW51bWVyYWJsZSB0byBtYXRjaCBuYXRpdmUgRXJyb3IgYGNhdXNlYCBzZW1hbnRpY3Mgc28gbG9nZ2Vyc1xuICAgICAgICAgIC8vIGRvbid0IHJlY3Vyc2UgaW50byBjaXJjdWxhciBmZXRjaCBpbnRlcm5hbHMgKHNlZSAjNzIwNSkuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhbmNlbGVkRXJyb3IsICdjYXVzZScsIHtcbiAgICAgICAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiBlcnIsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGNhbmNlbGVkRXJyb3I7XG4gICAgICB9XG5cbiAgICAgIC8vIFN1cmZhY2UgYSBtYXhCb2R5TGVuZ3RoIHZpb2xhdGlvbiB3ZSByYWlzZWQgd2hpbGUgdGhlIHJlcXVlc3QgYm9keSB3YXNcbiAgICAgIC8vIGJlaW5nIHN0cmVhbWVkLiBNYXRjaGluZyBieSBpZGVudGl0eSAocmF0aGVyIHRoYW4gcmVhZGluZ1xuICAgICAgLy8gYGVyci5jYXVzZS5pc0F4aW9zRXJyb3JgKSBrZWVwcyB0aGUgZXJyb3IgZGV0ZXJtaW5pc3RpYyBhY3Jvc3MgcnVudGltZXNcbiAgICAgIC8vIGFuZCBhdm9pZHMgYm90aCBwcm90b3R5cGUtcG9sbHV0aW9uIHJlYWRzIGFuZCBtaXMtYXR0cmlidXRpbmcgYSBmb3JlaWduXG4gICAgICAvLyBBeGlvc0Vycm9yIHRoYXQgbWVyZWx5IGhhcHBlbmVkIHRvIGxhbmQgaW4gYGVyci5jYXVzZWAuXG4gICAgICBpZiAocGVuZGluZ0JvZHlFcnJvcikge1xuICAgICAgICByZXF1ZXN0ICYmICFwZW5kaW5nQm9keUVycm9yLnJlcXVlc3QgJiYgKHBlbmRpbmdCb2R5RXJyb3IucmVxdWVzdCA9IHJlcXVlc3QpO1xuICAgICAgICB0aHJvdyBwZW5kaW5nQm9keUVycm9yO1xuICAgICAgfVxuXG4gICAgICAvLyBSZS10aHJvdyBBeGlvc0Vycm9ycyB3ZSByYWlzZWQgc3luY2hyb25vdXNseSAoZGF0YTogVVJMIC8gY29udGVudC1sZW5ndGhcbiAgICAgIC8vIHByZS1jaGVja3MsIHJlc3BvbnNlIHNpemUgZW5mb3JjZW1lbnQpIHdpdGhvdXQgcmUtd3JhcHBpbmcgdGhlbS5cbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBBeGlvc0Vycm9yKSB7XG4gICAgICAgIHJlcXVlc3QgJiYgIWVyci5yZXF1ZXN0ICYmIChlcnIucmVxdWVzdCA9IHJlcXVlc3QpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnIgJiYgZXJyLm5hbWUgPT09ICdUeXBlRXJyb3InICYmIC9Mb2FkIGZhaWxlZHxmZXRjaC9pLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgICAgIGNvbnN0IG5ldHdvcmtFcnJvciA9IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAgICdOZXR3b3JrIEVycm9yJyxcbiAgICAgICAgICBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgIGVyciAmJiBlcnIucmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgICAgLy8gTm9uLWVudW1lcmFibGUgdG8gbWF0Y2ggbmF0aXZlIEVycm9yIGBjYXVzZWAgc2VtYW50aWNzIHNvIGxvZ2dlcnNcbiAgICAgICAgLy8gZG9uJ3QgcmVjdXJzZSBpbnRvIGNpcmN1bGFyIGZldGNoIGludGVybmFscyAoc2VlICM3MjA1KS5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ldHdvcmtFcnJvciwgJ2NhdXNlJywge1xuICAgICAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogZXJyLmNhdXNlIHx8IGVycixcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBuZXR3b3JrRXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHRocm93IEF4aW9zRXJyb3IuZnJvbShlcnIsIGVyciAmJiBlcnIuY29kZSwgY29uZmlnLCByZXF1ZXN0LCBlcnIgJiYgZXJyLnJlc3BvbnNlKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBzZWVkQ2FjaGUgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBjb25zdCBnZXRGZXRjaCA9IChjb25maWcpID0+IHtcbiAgbGV0IGVudiA9IChjb25maWcgJiYgY29uZmlnLmVudikgfHwge307XG4gIGNvbnN0IHsgZmV0Y2gsIFJlcXVlc3QsIFJlc3BvbnNlIH0gPSBlbnY7XG4gIGNvbnN0IHNlZWRzID0gW1JlcXVlc3QsIFJlc3BvbnNlLCBmZXRjaF07XG5cbiAgbGV0IGxlbiA9IHNlZWRzLmxlbmd0aCxcbiAgICBpID0gbGVuLFxuICAgIHNlZWQsXG4gICAgdGFyZ2V0LFxuICAgIG1hcCA9IHNlZWRDYWNoZTtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgc2VlZCA9IHNlZWRzW2ldO1xuICAgIHRhcmdldCA9IG1hcC5nZXQoc2VlZCk7XG5cbiAgICB0YXJnZXQgPT09IHVuZGVmaW5lZCAmJiBtYXAuc2V0KHNlZWQsICh0YXJnZXQgPSBpID8gbmV3IE1hcCgpIDogZmFjdG9yeShlbnYpKSk7XG5cbiAgICBtYXAgPSB0YXJnZXQ7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuY29uc3QgYWRhcHRlciA9IGdldEZldGNoKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFkYXB0ZXI7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHNldHRsZSBmcm9tICcuLi9jb3JlL3NldHRsZS5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgcGFyc2VQcm90b2NvbCBmcm9tICcuLi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IHsgcHJvZ3Jlc3NFdmVudFJlZHVjZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Byb2dyZXNzRXZlbnRSZWR1Y2VyLmpzJztcbmltcG9ydCByZXNvbHZlQ29uZmlnIGZyb20gJy4uL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qcyc7XG5pbXBvcnQgeyB0b0J5dGVTdHJpbmdIZWFkZXJPYmplY3QgfSBmcm9tICcuLi9oZWxwZXJzL3Nhbml0aXplSGVhZGVyVmFsdWUuanMnO1xuXG5jb25zdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgJiZcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjb25zdCBfY29uZmlnID0gcmVzb2x2ZUNvbmZpZyhjb25maWcpO1xuICAgICAgbGV0IHJlcXVlc3REYXRhID0gX2NvbmZpZy5kYXRhO1xuICAgICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShfY29uZmlnLmhlYWRlcnMpLm5vcm1hbGl6ZSgpO1xuICAgICAgbGV0IHsgcmVzcG9uc2VUeXBlLCBvblVwbG9hZFByb2dyZXNzLCBvbkRvd25sb2FkUHJvZ3Jlc3MgfSA9IF9jb25maWc7XG4gICAgICBsZXQgb25DYW5jZWxlZDtcbiAgICAgIGxldCB1cGxvYWRUaHJvdHRsZWQsIGRvd25sb2FkVGhyb3R0bGVkO1xuICAgICAgbGV0IGZsdXNoVXBsb2FkLCBmbHVzaERvd25sb2FkO1xuXG4gICAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgICBmbHVzaFVwbG9hZCAmJiBmbHVzaFVwbG9hZCgpOyAvLyBmbHVzaCBldmVudHNcbiAgICAgICAgZmx1c2hEb3dubG9hZCAmJiBmbHVzaERvd25sb2FkKCk7IC8vIGZsdXNoIGV2ZW50c1xuXG4gICAgICAgIF9jb25maWcuY2FuY2VsVG9rZW4gJiYgX2NvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcblxuICAgICAgICBfY29uZmlnLnNpZ25hbCAmJiBfY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXF1ZXN0Lm9wZW4oX2NvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgX2NvbmZpZy51cmwsIHRydWUpO1xuXG4gICAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgICAgcmVxdWVzdC50aW1lb3V0ID0gX2NvbmZpZy50aW1lb3V0O1xuXG4gICAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgICBjb25zdCByZXNwb25zZUhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShcbiAgICAgICAgICAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ICYmIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID1cbiAgICAgICAgICAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nXG4gICAgICAgICAgICA/IHJlcXVlc3QucmVzcG9uc2VUZXh0XG4gICAgICAgICAgICA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0dGxlKFxuICAgICAgICAgIGZ1bmN0aW9uIF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3BvbnNlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCdvbmxvYWRlbmQnIGluIHJlcXVlc3QpIHtcbiAgICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcbiAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJlxuICAgICAgICAgICAgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuc3RhcnRzV2l0aCgnZmlsZTonKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmVhZHlzdGF0ZSBoYW5kbGVyIGlzIGNhbGxpbmcgYmVmb3JlIG9uZXJyb3Igb3Igb250aW1lb3V0IGhhbmRsZXJzLFxuICAgICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgICBzZXRUaW1lb3V0KG9ubG9hZGVuZCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcihldmVudCkge1xuICAgICAgICAvLyBCcm93c2VycyBkZWxpdmVyIGEgUHJvZ3Jlc3NFdmVudCBpbiBYSFIgb25lcnJvclxuICAgICAgICAvLyAobWVzc2FnZSBtYXkgYmUgZW1wdHk7IHdoZW4gcHJlc2VudCwgc3VyZmFjZSBpdClcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9lcnJvcl9ldmVudFxuICAgICAgICBjb25zdCBtc2cgPSBldmVudCAmJiBldmVudC5tZXNzYWdlID8gZXZlbnQubWVzc2FnZSA6ICdOZXR3b3JrIEVycm9yJztcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEF4aW9zRXJyb3IobXNnLCBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLCBjb25maWcsIHJlcXVlc3QpO1xuICAgICAgICAvLyBhdHRhY2ggdGhlIHVuZGVybHlpbmcgZXZlbnQgZm9yIGNvbnN1bWVycyB3aG8gd2FudCBkZXRhaWxzXG4gICAgICAgIGVyci5ldmVudCA9IGV2ZW50IHx8IG51bGw7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBfY29uZmlnLnRpbWVvdXRcbiAgICAgICAgICA/ICd0aW1lb3V0IG9mICcgKyBfY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnXG4gICAgICAgICAgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IF9jb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgICBpZiAoX2NvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IF9jb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoXG4gICAgICAgICAgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgcmVxdWVzdFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgZG9uZSgpO1xuXG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICByZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkICYmIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKG51bGwpO1xuXG4gICAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICAgIHV0aWxzLmZvckVhY2godG9CeXRlU3RyaW5nSGVhZGVyT2JqZWN0KHJlcXVlc3RIZWFkZXJzKSwgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKF9jb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhX2NvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBfY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgICAgaWYgKG9uRG93bmxvYWRQcm9ncmVzcykge1xuICAgICAgICBbZG93bmxvYWRUaHJvdHRsZWQsIGZsdXNoRG93bmxvYWRdID0gcHJvZ3Jlc3NFdmVudFJlZHVjZXIob25Eb3dubG9hZFByb2dyZXNzLCB0cnVlKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGRvd25sb2FkVGhyb3R0bGVkKTtcbiAgICAgIH1cblxuICAgICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICAgIGlmIChvblVwbG9hZFByb2dyZXNzICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICAgIFt1cGxvYWRUaHJvdHRsZWQsIGZsdXNoVXBsb2FkXSA9IHByb2dyZXNzRXZlbnRSZWR1Y2VyKG9uVXBsb2FkUHJvZ3Jlc3MpO1xuXG4gICAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgdXBsb2FkVGhyb3R0bGVkKTtcblxuICAgICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZmx1c2hVcGxvYWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2NvbmZpZy5jYW5jZWxUb2tlbiB8fCBfY29uZmlnLnNpZ25hbCkge1xuICAgICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICAgIG9uQ2FuY2VsZWQgPSAoY2FuY2VsKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlamVjdCghY2FuY2VsIHx8IGNhbmNlbC50eXBlID8gbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnLCByZXF1ZXN0KSA6IGNhbmNlbCk7XG4gICAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBfY29uZmlnLmNhbmNlbFRva2VuICYmIF9jb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgICBpZiAoX2NvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgICBfY29uZmlnLnNpZ25hbC5hYm9ydGVkXG4gICAgICAgICAgICA/IG9uQ2FuY2VsZWQoKVxuICAgICAgICAgICAgOiBfY29uZmlnLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VQcm90b2NvbChfY29uZmlnLnVybCk7XG5cbiAgICAgIGlmIChwcm90b2NvbCAmJiAhcGxhdGZvcm0ucHJvdG9jb2xzLmluY2x1ZGVzKHByb3RvY29sKSkge1xuICAgICAgICByZWplY3QoXG4gICAgICAgICAgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgICAnVW5zdXBwb3J0ZWQgcHJvdG9jb2wgJyArIHByb3RvY29sICsgJzonLFxuICAgICAgICAgICAgQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsXG4gICAgICAgICAgICBjb25maWdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEgfHwgbnVsbCk7XG4gICAgfSk7XG4gIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcbmltcG9ydCBBeGlvcyBmcm9tICcuL2NvcmUvQXhpb3MuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vY29yZS9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbFRva2VuIGZyb20gJy4vY2FuY2VsL0NhbmNlbFRva2VuLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSAnLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgc3ByZWFkIGZyb20gJy4vaGVscGVycy9zcHJlYWQuanMnO1xuaW1wb3J0IGlzQXhpb3NFcnJvciBmcm9tICcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSAnLi9hZGFwdGVycy9hZGFwdGVycy5qcyc7XG5pbXBvcnQgSHR0cFN0YXR1c0NvZGUgZnJvbSAnLi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm5zIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICBjb25zdCBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0LCB7IGFsbE93bktleXM6IHRydWUgfSk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCwgbnVsbCwgeyBhbGxPd25LZXlzOiB0cnVlIH0pO1xuXG4gIC8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbiAgaW5zdGFuY2UuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGRlZmF1bHRDb25maWcsIGluc3RhbmNlQ29uZmlnKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbmNvbnN0IGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsZWRFcnJvciA9IENhbmNlbGVkRXJyb3I7XG5heGlvcy5DYW5jZWxUb2tlbiA9IENhbmNlbFRva2VuO1xuYXhpb3MuaXNDYW5jZWwgPSBpc0NhbmNlbDtcbmF4aW9zLlZFUlNJT04gPSBWRVJTSU9OO1xuYXhpb3MudG9Gb3JtRGF0YSA9IHRvRm9ybURhdGE7XG5cbi8vIEV4cG9zZSBBeGlvc0Vycm9yIGNsYXNzXG5heGlvcy5BeGlvc0Vycm9yID0gQXhpb3NFcnJvcjtcblxuLy8gYWxpYXMgZm9yIENhbmNlbGVkRXJyb3IgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbmF4aW9zLkNhbmNlbCA9IGF4aW9zLkNhbmNlbGVkRXJyb3I7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmF4aW9zLnNwcmVhZCA9IHNwcmVhZDtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gaXNBeGlvc0Vycm9yO1xuXG4vLyBFeHBvc2UgbWVyZ2VDb25maWdcbmF4aW9zLm1lcmdlQ29uZmlnID0gbWVyZ2VDb25maWc7XG5cbmF4aW9zLkF4aW9zSGVhZGVycyA9IEF4aW9zSGVhZGVycztcblxuYXhpb3MuZm9ybVRvSlNPTiA9ICh0aGluZykgPT4gZm9ybURhdGFUb0pTT04odXRpbHMuaXNIVE1MRm9ybSh0aGluZykgPyBuZXcgRm9ybURhdGEodGhpbmcpIDogdGhpbmcpO1xuXG5heGlvcy5nZXRBZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcjtcblxuYXhpb3MuSHR0cFN0YXR1c0NvZGUgPSBIdHRwU3RhdHVzQ29kZTtcblxuYXhpb3MuZGVmYXVsdCA9IGF4aW9zO1xuXG4vLyB0aGlzIG1vZHVsZSBzaG91bGQgb25seSBoYXZlIGEgZGVmYXVsdCBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuL0NhbmNlbGVkRXJyb3IuanMnO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtDYW5jZWxUb2tlbn1cbiAqL1xuY2xhc3MgQ2FuY2VsVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZVByb21pc2U7XG5cbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbigoY2FuY2VsKSA9PiB7XG4gICAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgICAgbGV0IGkgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgdG9rZW4uX2xpc3RlbmVyc1tpXShjYW5jZWwpO1xuICAgICAgfVxuICAgICAgdG9rZW4uX2xpc3RlbmVycyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuID0gKG9uZnVsZmlsbGVkKSA9PiB7XG4gICAgICBsZXQgX3Jlc29sdmU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRva2VuLnN1YnNjcmliZShyZXNvbHZlKTtcbiAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICAgIHByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gcmVqZWN0KCkge1xuICAgICAgICB0b2tlbi51bnN1YnNjcmliZShfcmVzb2x2ZSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAgICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsZWRFcnJvcihtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpO1xuICAgICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAgICovXG4gIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgbGlzdGVuZXIodGhpcy5yZWFzb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW2xpc3RlbmVyXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHRvQWJvcnRTaWduYWwoKSB7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgIGNvbnN0IGFib3J0ID0gKGVycikgPT4ge1xuICAgICAgY29udHJvbGxlci5hYm9ydChlcnIpO1xuICAgIH07XG5cbiAgICB0aGlzLnN1YnNjcmliZShhYm9ydCk7XG5cbiAgICBjb250cm9sbGVyLnNpZ25hbC51bnN1YnNjcmliZSA9ICgpID0+IHRoaXMudW5zdWJzY3JpYmUoYWJvcnQpO1xuXG4gICAgcmV0dXJuIGNvbnRyb2xsZXIuc2lnbmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAgICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAgICovXG4gIHN0YXRpYyBzb3VyY2UoKSB7XG4gICAgbGV0IGNhbmNlbDtcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgICBjYW5jZWwgPSBjO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB0b2tlbixcbiAgICAgIGNhbmNlbCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuXG5jbGFzcyBDYW5jZWxlZEVycm9yIGV4dGVuZHMgQXhpb3NFcnJvciB7XG4gIC8qKlxuICAgKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cbiAgICogQHBhcmFtIHtPYmplY3Q9fSByZXF1ZXN0IFRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpIHtcbiAgICBzdXBlcihtZXNzYWdlID09IG51bGwgPyAnY2FuY2VsZWQnIDogbWVzc2FnZSwgQXhpb3NFcnJvci5FUlJfQ0FOQ0VMRUQsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgdGhpcy5uYW1lID0gJ0NhbmNlbGVkRXJyb3InO1xuICAgIHRoaXMuX19DQU5DRUxfXyA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsZWRFcnJvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IEludGVyY2VwdG9yTWFuYWdlciBmcm9tICcuL0ludGVyY2VwdG9yTWFuYWdlci5qcyc7XG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0LmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4vYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdG9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyc7XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB2YWxpZGF0b3IudmFsaWRhdG9ycztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuY2xhc3MgQXhpb3Mge1xuICBjb25zdHJ1Y3RvcihpbnN0YW5jZUNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBjb25maWdPclVybCBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gICAqIEBwYXJhbSB7P09iamVjdH0gY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAgICovXG4gIGFzeW5jIHJlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBsZXQgZHVtbXkgPSB7fTtcblxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA/IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGR1bW15KSA6IChkdW1teSA9IG5ldyBFcnJvcigpKTtcblxuICAgICAgICAvLyBzbGljZSBvZmYgdGhlIEVycm9yOiAuLi4gbGluZVxuICAgICAgICBjb25zdCBzdGFjayA9ICgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFkdW1teS5zdGFjaykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZpcnN0TmV3bGluZUluZGV4ID0gZHVtbXkuc3RhY2suaW5kZXhPZignXFxuJyk7XG5cbiAgICAgICAgICByZXR1cm4gZmlyc3ROZXdsaW5lSW5kZXggPT09IC0xID8gJycgOiBkdW1teS5zdGFjay5zbGljZShmaXJzdE5ld2xpbmVJbmRleCArIDEpO1xuICAgICAgICB9KSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghZXJyLnN0YWNrKSB7XG4gICAgICAgICAgICBlcnIuc3RhY2sgPSBzdGFjaztcbiAgICAgICAgICAgIC8vIG1hdGNoIHdpdGhvdXQgdGhlIDIgdG9wIHN0YWNrIGxpbmVzXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGFjaykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROZXdsaW5lSW5kZXggPSBzdGFjay5pbmRleE9mKCdcXG4nKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZE5ld2xpbmVJbmRleCA9XG4gICAgICAgICAgICAgIGZpcnN0TmV3bGluZUluZGV4ID09PSAtMSA/IC0xIDogc3RhY2suaW5kZXhPZignXFxuJywgZmlyc3ROZXdsaW5lSW5kZXggKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrV2l0aG91dFR3b1RvcExpbmVzID1cbiAgICAgICAgICAgICAgc2Vjb25kTmV3bGluZUluZGV4ID09PSAtMSA/ICcnIDogc3RhY2suc2xpY2Uoc2Vjb25kTmV3bGluZUluZGV4ICsgMSk7XG5cbiAgICAgICAgICAgIGlmICghU3RyaW5nKGVyci5zdGFjaykuZW5kc1dpdGgoc3RhY2tXaXRob3V0VHdvVG9wTGluZXMpKSB7XG4gICAgICAgICAgICAgIGVyci5zdGFjayArPSAnXFxuJyArIHN0YWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlnbm9yZSB0aGUgY2FzZSB3aGVyZSBcInN0YWNrXCIgaXMgYW4gdW4td3JpdGFibGUgcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgX3JlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgICBpZiAodHlwZW9mIGNvbmZpZ09yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgY29uZmlnLnVybCA9IGNvbmZpZ09yVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgICB9XG5cbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgY29uc3QgeyB0cmFuc2l0aW9uYWwsIHBhcmFtc1NlcmlhbGl6ZXIsIGhlYWRlcnMgfSA9IGNvbmZpZztcblxuICAgIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMoXG4gICAgICAgIHRyYW5zaXRpb25hbCxcbiAgICAgICAge1xuICAgICAgICAgIHNpbGVudEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgICAgbGVnYWN5SW50ZXJjZXB0b3JSZXFSZXNPcmRlcmluZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgICBhZHZlcnRpc2Vac3RkQWNjZXB0RW5jb2Rpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgICAgdmFsaWRhdGVTdGF0dXNVbmRlZmluZWRSZXNvbHZlczogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyYW1zU2VyaWFsaXplcikpIHtcbiAgICAgICAgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIgPSB7XG4gICAgICAgICAgc2VyaWFsaXplOiBwYXJhbXNTZXJpYWxpemVyLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMoXG4gICAgICAgICAgcGFyYW1zU2VyaWFsaXplcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbmNvZGU6IHZhbGlkYXRvcnMuZnVuY3Rpb24sXG4gICAgICAgICAgICBzZXJpYWxpemU6IHZhbGlkYXRvcnMuZnVuY3Rpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbmZpZy5hbGxvd0Fic29sdXRlVXJsc1xuICAgIGlmIChjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5hbGxvd0Fic29sdXRlVXJscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgPSB0aGlzLmRlZmF1bHRzLmFsbG93QWJzb2x1dGVVcmxzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKFxuICAgICAgY29uZmlnLFxuICAgICAge1xuICAgICAgICBiYXNlVXJsOiB2YWxpZGF0b3JzLnNwZWxsaW5nKCdiYXNlVVJMJyksXG4gICAgICAgIHdpdGhYc3JmVG9rZW46IHZhbGlkYXRvcnMuc3BlbGxpbmcoJ3dpdGhYU1JGVG9rZW4nKSxcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIC8vIFNldCBjb25maWcubWV0aG9kXG4gICAgY29uZmlnLm1ldGhvZCA9IChjb25maWcubWV0aG9kIHx8IHRoaXMuZGVmYXVsdHMubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gICAgbGV0IGNvbnRleHRIZWFkZXJzID0gaGVhZGVycyAmJiB1dGlscy5tZXJnZShoZWFkZXJzLmNvbW1vbiwgaGVhZGVyc1tjb25maWcubWV0aG9kXSk7XG5cbiAgICBoZWFkZXJzICYmXG4gICAgICB1dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ3F1ZXJ5JywgJ2NvbW1vbiddLCAobWV0aG9kKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW21ldGhvZF07XG4gICAgICB9KTtcblxuICAgIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmNvbmNhdChjb250ZXh0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgY29uc3QgbGVnYWN5SW50ZXJjZXB0b3JSZXFSZXNPcmRlcmluZyA9XG4gICAgICAgIHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwubGVnYWN5SW50ZXJjZXB0b3JSZXFSZXNPcmRlcmluZztcblxuICAgICAgaWYgKGxlZ2FjeUludGVyY2VwdG9yUmVxUmVzT3JkZXJpbmcpIHtcbiAgICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgICAgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvbWlzZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGxlbjtcblxuICAgIGlmICghc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QuYmluZCh0aGlzKSwgdW5kZWZpbmVkXTtcbiAgICAgIGNoYWluLnVuc2hpZnQoLi4ucmVxdWVzdEludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgY2hhaW4ucHVzaCguLi5yZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xuXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW5baSsrXSwgY2hhaW5baSsrXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGxlbiA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIGxldCBuZXdDb25maWcgPSBjb25maWc7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29uc3Qgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgY29uc3Qgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICB0cnkge1xuICAgICAgICBuZXdDb25maWcgPSBvbkZ1bGZpbGxlZCA/IG9uRnVsZmlsbGVkKG5ld0NvbmZpZykgOiBuZXdDb25maWc7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIW9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZWplY3RlZFJlc3VsdCA9IG9uUmVqZWN0ZWQuY2FsbCh0aGlzLCBlcnJvcik7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNUaGVuYWJsZShyZWplY3RlZFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVqZWN0ZWRSZXN1bHQpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgZGlzcGF0Y2hSZXF1ZXN0LmNhbGwodGhpcywgbmV3Q29uZmlnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHJlamVjdGVkRXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QocmVqZWN0ZWRFcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QuY2FsbCh0aGlzLCBuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpID0gMDtcbiAgICBsZW4gPSByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4ocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10sIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGdldFVyaShjb25maWcpIHtcbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCwgY29uZmlnLmFsbG93QWJzb2x1dGVVcmxzLCBjb25maWcpO1xuICAgIHJldHVybiBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpO1xuICB9XG59XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YTogY29uZmlnICYmIHV0aWxzLmhhc093blByb3AoY29uZmlnLCAnZGF0YScpID8gY29uZmlnLmRhdGEgOiB1bmRlZmluZWQsXG4gICAgICB9KVxuICAgICk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ3F1ZXJ5J10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVIVFRQTWV0aG9kKGlzRm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBodHRwTWV0aG9kKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgICBtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgaGVhZGVyczogaXNGb3JtXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZUhUVFBNZXRob2QoKTtcblxuICAvLyBRVUVSWSBpcyBhIHNhZmUvaWRlbXBvdGVudCByZWFkIG1ldGhvZDsgbXVsdGlwYXJ0IGZvcm0gYm9kaWVzIGRvbid0IGZpdFxuICAvLyBpdHMgc2VtYW50aWNzLCBzbyBubyBxdWVyeUZvcm0gc2hvcnRoYW5kIGlzIGdlbmVyYXRlZC5cbiAgaWYgKG1ldGhvZCAhPT0gJ3F1ZXJ5Jykge1xuICAgIEF4aW9zLnByb3RvdHlwZVttZXRob2QgKyAnRm9ybSddID0gZ2VuZXJhdGVIVFRQTWV0aG9kKHRydWUpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4vQXhpb3NIZWFkZXJzLmpzJztcblxuZXhwb3J0IGNvbnN0IFJFREFDVEVEID0gJ1tSRURBQ1RFRCAqKioqXSc7XG5cbmZ1bmN0aW9uIGhhc093bk9yUHJvdG90eXBlVG9KU09OKHNvdXJjZSkge1xuICBpZiAodXRpbHMuaGFzT3duUHJvcChzb3VyY2UsICd0b0pTT04nKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbGV0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpO1xuXG4gIHdoaWxlIChwcm90b3R5cGUgJiYgcHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgaWYgKHV0aWxzLmhhc093blByb3AocHJvdG90eXBlLCAndG9KU09OJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBCdWlsZCBhIHBsYWluLW9iamVjdCBzbmFwc2hvdCBvZiBgY29uZmlnYCBhbmQgcmVwbGFjZSB0aGUgdmFsdWUgb2YgYW55IGtleVxuLy8gKGNhc2UtaW5zZW5zaXRpdmUpIGxpc3RlZCBpbiBgcmVkYWN0S2V5c2Agd2l0aCBSRURBQ1RFRC4gV2Fsa3MgdGhyb3VnaCBhcnJheXNcbi8vIGFuZCBBeGlvc0hlYWRlcnMsIGFuZCBzaG9ydC1jaXJjdWl0cyBvbiBjaXJjdWxhciByZWZlcmVuY2VzLlxuZnVuY3Rpb24gcmVkYWN0Q29uZmlnKGNvbmZpZywgcmVkYWN0S2V5cykge1xuICBjb25zdCBsb3dlcktleXMgPSBuZXcgU2V0KHJlZGFjdEtleXMubWFwKChrKSA9PiBTdHJpbmcoaykudG9Mb3dlckNhc2UoKSkpO1xuICBjb25zdCBzZWVuID0gW107XG5cbiAgY29uc3QgdmlzaXQgPSAoc291cmNlKSA9PiB7XG4gICAgaWYgKHNvdXJjZSA9PT0gbnVsbCB8fCB0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0JykgcmV0dXJuIHNvdXJjZTtcbiAgICBpZiAodXRpbHMuaXNCdWZmZXIoc291cmNlKSkgcmV0dXJuIHNvdXJjZTtcbiAgICBpZiAoc2Vlbi5pbmRleE9mKHNvdXJjZSkgIT09IC0xKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEF4aW9zSGVhZGVycykge1xuICAgICAgc291cmNlID0gc291cmNlLnRvSlNPTigpO1xuICAgIH1cblxuICAgIHNlZW4ucHVzaChzb3VyY2UpO1xuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZHVjZWRWYWx1ZSA9IHZpc2l0KHYpO1xuICAgICAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKHJlZHVjZWRWYWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHRbaV0gPSByZWR1Y2VkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSAmJiBoYXNPd25PclByb3RvdHlwZVRvSlNPTihzb3VyY2UpKSB7XG4gICAgICAgIHNlZW4ucG9wKCk7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzb3VyY2UpKSB7XG4gICAgICAgIGNvbnN0IHJlZHVjZWRWYWx1ZSA9IGxvd2VyS2V5cy5oYXMoa2V5LnRvTG93ZXJDYXNlKCkpID8gUkVEQUNURUQgOiB2aXNpdCh2YWx1ZSk7XG4gICAgICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gcmVkdWNlZFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2Vlbi5wb3AoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiB2aXNpdChjb25maWcpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkodmFsdWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFnZ3JlZ2F0ZUVycm9yTWVzc2FnZShlcnJvcikge1xuICBjb25zdCBtZXNzYWdlID0gZXJyb3IuZXJyb3JzXG4gICAgLm1hcCgoZW50cnkpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS5tZXNzYWdlID8gc3RyaW5naWZ5U2FmZWx5KGVudHJ5Lm1lc3NhZ2UpIDogc3RyaW5naWZ5U2FmZWx5KGVudHJ5KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJzsgJyk7XG5cbiAgcmV0dXJuIG1lc3NhZ2UgfHwgZXJyb3IubmFtZSB8fCAnQWdncmVnYXRlRXJyb3InO1xufVxuXG5jbGFzcyBBeGlvc0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBzdGF0aWMgZnJvbShlcnJvciwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSwgY3VzdG9tUHJvcHMpIHtcbiAgICAvLyBgQWdncmVnYXRlRXJyb3JgICh0aHJvd24gYnkgTm9kZSBvbiBkdWFsLXN0YWNrL0hhcHB5LUV5ZWJhbGxzIGNvbm5lY3Rpb25cbiAgICAvLyBmYWlsdXJlcykgaGFzIGFuIGVtcHR5IGBtZXNzYWdlYDsgaXRzIGRldGFpbCBsaXZlcyBpbiBgZXJyb3JzW11gLiBXaXRob3V0XG4gICAgLy8gdGhpcywgdGhlIHdyYXBwZWQgZXJyb3Igc3VyZmFjZXMgd2l0aCBhIGJsYW5rIG1lc3NhZ2UgKHNlZSAjNjcyMSkuXG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgIGlmICghbWVzc2FnZSAmJiB1dGlscy5pc0FycmF5KGVycm9yLmVycm9ycykgJiYgZXJyb3IuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgbWVzc2FnZSA9IGFnZ3JlZ2F0ZUVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgfVxuXG4gICAgY29uc3QgYXhpb3NFcnJvciA9IG5ldyBBeGlvc0Vycm9yKG1lc3NhZ2UsIGNvZGUgfHwgZXJyb3IuY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgLy8gTWF0Y2ggbmF0aXZlIGBFcnJvcmAgYGNhdXNlYCBzZW1hbnRpY3M6IG5vbi1lbnVtZXJhYmxlLiBUaGUgd3JhcHBlZFxuICAgIC8vIGVycm9yIG9mdGVuIGNhcnJpZXMgY2lyY3VsYXIgaW50ZXJuYWxzIChzb2NrZXRzLCByZXF1ZXN0cywgYWdlbnRzKSwgc29cbiAgICAvLyBhbiBlbnVtZXJhYmxlIGBjYXVzZWAgbWFrZXMgc3RydWN0dXJlZCBsb2dnZXJzIChwaW5vL3dpbnN0b24pIGFuZCBhbnlcbiAgICAvLyBvd24tcHJvcGVydHkgd2FsayB0aHJvdyBcIkNvbnZlcnRpbmcgY2lyY3VsYXIgc3RydWN0dXJlIHRvIEpTT05cIi5cbiAgICAvLyBSZWdyZXNzaW9uIGZyb20gIzY5ODI7IHNlZSAjNzIwNS4gYF9fcHJvdG9fXzogbnVsbGAgbWlycm9ycyB0aGVcbiAgICAvLyBgbWVzc2FnZWAgZGVzY3JpcHRvciBiZWxvdyAocHJvdG90eXBlLXBvbGx1dGlvbi1zYWZlIGRlc2NyaXB0b3IpLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShheGlvc0Vycm9yLCAnY2F1c2UnLCB7XG4gICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICB2YWx1ZTogZXJyb3IsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIGF4aW9zRXJyb3IubmFtZSA9IGVycm9yLm5hbWU7XG5cbiAgICAvLyBQcmVzZXJ2ZSBzdGF0dXMgZnJvbSB0aGUgb3JpZ2luYWwgZXJyb3IgaWYgbm90IGFscmVhZHkgc2V0IGZyb20gcmVzcG9uc2VcbiAgICBpZiAoZXJyb3Iuc3RhdHVzICE9IG51bGwgJiYgYXhpb3NFcnJvci5zdGF0dXMgPT0gbnVsbCkge1xuICAgICAgYXhpb3NFcnJvci5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgfVxuXG4gICAgY3VzdG9tUHJvcHMgJiYgT2JqZWN0LmFzc2lnbihheGlvc0Vycm9yLCBjdXN0b21Qcm9wcyk7XG4gICAgcmV0dXJuIGF4aW9zRXJyb3I7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAgICpcbiAgICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIC8vIE1ha2UgbWVzc2FnZSBlbnVtZXJhYmxlIHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAvLyBUaGUgbmF0aXZlIEVycm9yIGNvbnN0cnVjdG9yIHNldHMgbWVzc2FnZSBhcyBub24tZW51bWVyYWJsZSxcbiAgICAvLyBidXQgYXhpb3MgPCB2MS4xMy4zIGhhZCBpdCBhcyBlbnVtZXJhYmxlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdtZXNzYWdlJywge1xuICAgICAgLy8gTnVsbC1wcm90byBkZXNjcmlwdG9yIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS5nZXQgY2Fubm90IHR1cm5cbiAgICAgIC8vIHRoaXMgZGF0YSBkZXNjcmlwdG9yIGludG8gYW4gYWNjZXNzb3IgZGVzY3JpcHRvciBvbiB0aGUgd2F5IGluLlxuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgdmFsdWU6IG1lc3NhZ2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSk7XG5cbiAgICB0aGlzLm5hbWUgPSAnQXhpb3NFcnJvcic7XG4gICAgdGhpcy5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuICAgIGNvZGUgJiYgKHRoaXMuY29kZSA9IGNvZGUpO1xuICAgIGNvbmZpZyAmJiAodGhpcy5jb25maWcgPSBjb25maWcpO1xuICAgIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIC8vIE9wdC1pbiByZWRhY3Rpb246IHdoZW4gdGhlIHJlcXVlc3QgY29uZmlnIGNhcnJpZXMgYSBgcmVkYWN0YCBhcnJheSwgdGhlXG4gICAgLy8gdmFsdWUgb2YgYW55IG1hdGNoaW5nIGtleSAoY2FzZS1pbnNlbnNpdGl2ZSwgYXQgYW55IGRlcHRoKSBpcyByZXBsYWNlZFxuICAgIC8vIHdpdGggUkVEQUNURUQgaW4gdGhlIHNlcmlhbGl6ZWQgc25hcHNob3QuIFVuZGVmaW5lZCBvciBlbXB0eSBsZWF2ZXMgdGhlXG4gICAgLy8gZXhpc3Rpbmcgc2VyaWFsaXphdGlvbiBiZWhhdmlvciB1bmNoYW5nZWQuXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgcmVkYWN0S2V5cyA9IGNvbmZpZyAmJiB1dGlscy5oYXNPd25Qcm9wKGNvbmZpZywgJ3JlZGFjdCcpID8gY29uZmlnLnJlZGFjdCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzZXJpYWxpemVkQ29uZmlnID1cbiAgICAgIHV0aWxzLmlzQXJyYXkocmVkYWN0S2V5cykgJiYgcmVkYWN0S2V5cy5sZW5ndGggPiAwXG4gICAgICAgID8gcmVkYWN0Q29uZmlnKGNvbmZpZywgcmVkYWN0S2V5cylcbiAgICAgICAgOiB1dGlscy50b0pTT05PYmplY3QoY29uZmlnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHNlcmlhbGl6ZWRDb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgIH07XG4gIH1cbn1cblxuLy8gVGhpcyBjYW4gYmUgY2hhbmdlZCB0byBzdGF0aWMgcHJvcGVydGllcyBhcyBzb29uIGFzIHRoZSBwYXJzZXIgb3B0aW9ucyBpbiAuZXNsaW50LmNqcyBhcmUgdXBkYXRlZC5cbkF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUgPSAnRVJSX0JBRF9PUFRJT05fVkFMVUUnO1xuQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTiA9ICdFUlJfQkFEX09QVElPTic7XG5BeGlvc0Vycm9yLkVDT05OQUJPUlRFRCA9ICdFQ09OTkFCT1JURUQnO1xuQXhpb3NFcnJvci5FVElNRURPVVQgPSAnRVRJTUVET1VUJztcbkF4aW9zRXJyb3IuRUNPTk5SRUZVU0VEID0gJ0VDT05OUkVGVVNFRCc7XG5BeGlvc0Vycm9yLkVSUl9ORVRXT1JLID0gJ0VSUl9ORVRXT1JLJztcbkF4aW9zRXJyb3IuRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUyA9ICdFUlJfRlJfVE9PX01BTllfUkVESVJFQ1RTJztcbkF4aW9zRXJyb3IuRVJSX0RFUFJFQ0FURUQgPSAnRVJSX0RFUFJFQ0FURUQnO1xuQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFID0gJ0VSUl9CQURfUkVTUE9OU0UnO1xuQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QgPSAnRVJSX0JBRF9SRVFVRVNUJztcbkF4aW9zRXJyb3IuRVJSX0NBTkNFTEVEID0gJ0VSUl9DQU5DRUxFRCc7XG5BeGlvc0Vycm9yLkVSUl9OT1RfU1VQUE9SVCA9ICdFUlJfTk9UX1NVUFBPUlQnO1xuQXhpb3NFcnJvci5FUlJfSU5WQUxJRF9VUkwgPSAnRVJSX0lOVkFMSURfVVJMJztcbkF4aW9zRXJyb3IuRVJSX0ZPUk1fREFUQV9ERVBUSF9FWENFRURFRCA9ICdFUlJfRk9STV9EQVRBX0RFUFRIX0VYQ0VFREVEJztcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NFcnJvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBwYXJzZUhlYWRlcnMgZnJvbSAnLi4vaGVscGVycy9wYXJzZUhlYWRlcnMuanMnO1xuaW1wb3J0IHsgc2FuaXRpemVIZWFkZXJWYWx1ZSB9IGZyb20gJy4uL2hlbHBlcnMvc2FuaXRpemVIZWFkZXJWYWx1ZS5qcyc7XG5cbmNvbnN0ICRpbnRlcm5hbHMgPSBTeW1ib2woJ2ludGVybmFscycpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIgJiYgU3RyaW5nKGhlYWRlcikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcChub3JtYWxpemVWYWx1ZSkgOiBzYW5pdGl6ZUhlYWRlclZhbHVlKFN0cmluZyh2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VucyhzdHIpIHtcbiAgY29uc3QgdG9rZW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3QgdG9rZW5zUkUgPSAvKFteXFxzLDs9XSspXFxzKig/Oj1cXHMqKFteLDtdKykpPy9nO1xuICBsZXQgbWF0Y2g7XG5cbiAgd2hpbGUgKChtYXRjaCA9IHRva2Vuc1JFLmV4ZWMoc3RyKSkpIHtcbiAgICB0b2tlbnNbbWF0Y2hbMV1dID0gbWF0Y2hbMl07XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5jb25zdCBwYXJhbWV0ZXJOYW1lUkUgPSAvXlshIyQlJicqK1xcLS5eX2B8fjAtOUEtWmEtel0rJC87XG5cbmZ1bmN0aW9uIHRyaW1PV1ModmFsdWUpIHtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgbGV0IGVuZCA9IHZhbHVlLmxlbmd0aDtcblxuICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcbiAgICBjb25zdCBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChzdGFydCk7XG5cbiAgICBpZiAoY29kZSAhPT0gMHgwOSAmJiBjb2RlICE9PSAweDIwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGFydCArPSAxO1xuICB9XG5cbiAgd2hpbGUgKGVuZCA+IHN0YXJ0KSB7XG4gICAgY29uc3QgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kIC0gMSk7XG5cbiAgICBpZiAoY29kZSAhPT0gMHgwOSAmJiBjb2RlICE9PSAweDIwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbmQgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBzdGFydCA9PT0gMCAmJiBlbmQgPT09IHZhbHVlLmxlbmd0aCA/IHZhbHVlIDogdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVF1b3RlZFN0cmluZyh2YWx1ZSkge1xuICBjb25zdCBsYXN0ID0gdmFsdWUubGVuZ3RoIC0gMTtcblxuICBpZiAobGFzdCA8IDEgfHwgdmFsdWUuY2hhckNvZGVBdCgwKSAhPT0gMHgyMiB8fCB2YWx1ZS5jaGFyQ29kZUF0KGxhc3QpICE9PSAweDIyKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbGV0IGRlY29kZWQgPSAnJztcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IGxhc3Q7IGkrKykge1xuICAgIGNvbnN0IGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGNvZGUgPT09IDB4MjIpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHg1Yykge1xuICAgICAgaSArPSAxO1xuXG4gICAgICBpZiAoaSA+PSBsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNvZGVkICs9IHZhbHVlW2ldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVycyh2YWx1ZSkge1xuICBjb25zdCBwYXJhbWV0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKHZhbHVlKTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgbGV0IHF1b3RlZCA9IGZhbHNlO1xuICBsZXQgZXNjYXBlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKGVuZCkge1xuICAgIGNvbnN0IHBhcnQgPSB0cmltT1dTKHN0ci5zbGljZShzdGFydCwgZW5kKSk7XG4gICAgY29uc3QgZXF1YWxzID0gcGFydC5pbmRleE9mKCc9Jyk7XG5cbiAgICBpZiAoZXF1YWxzIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSB0cmltT1dTKHBhcnQuc2xpY2UoMCwgZXF1YWxzKSk7XG5cbiAgICBpZiAoIXBhcmFtZXRlck5hbWVSRS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoXG4gICAgICBub3JtYWxpemVkTmFtZSA9PT0gJ19fcHJvdG9fXycgfHxcbiAgICAgIG5vcm1hbGl6ZWROYW1lID09PSAnY29uc3RydWN0b3InIHx8XG4gICAgICBub3JtYWxpemVkTmFtZSA9PT0gJ3Byb3RvdHlwZSdcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJWYWx1ZSA9IHRyaW1PV1MocGFydC5zbGljZShlcXVhbHMgKyAxKSk7XG4gICAgcGFyYW1ldGVyc1tub3JtYWxpemVkTmFtZV0gPSBkZWNvZGVRdW90ZWRTdHJpbmcocGFyYW1ldGVyVmFsdWUpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAocXVvdGVkKSB7XG4gICAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4NWMpIHtcbiAgICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjIpIHtcbiAgICAgICAgcXVvdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDIyKSB7XG4gICAgICBxdW90ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyYyB8fCBjb2RlID09PSAweDNiKSB7XG4gICAgICBwYXJzZVBhcmFtZXRlcihpKTtcbiAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VQYXJhbWV0ZXIoc3RyLmxlbmd0aCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmNvbnN0IGlzVmFsaWRIZWFkZXJOYW1lID0gKHN0cikgPT4gL15bLV9hLXpBLVowLTleYHx+LCEjJCUmJyorLl0rJC8udGVzdChzdHIudHJpbSgpKTtcblxuZnVuY3Rpb24gbWF0Y2hIZWFkZXJWYWx1ZShjb250ZXh0LCB2YWx1ZSwgaGVhZGVyLCBmaWx0ZXIsIGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICBpZiAodXRpbHMuaXNGdW5jdGlvbihmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMsIHZhbHVlLCBoZWFkZXIpO1xuICB9XG5cbiAgaWYgKGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICAgIHZhbHVlID0gaGVhZGVyO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHJldHVybjtcblxuICBpZiAodXRpbHMuaXNTdHJpbmcoZmlsdGVyKSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKGZpbHRlcikgIT09IC0xO1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzUmVnRXhwKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLnRlc3QodmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlclxuICAgIC50cmltKClcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC8oW2EtelxcZF0pKFxcdyopL2csICh3LCBjaGFyLCBzdHIpID0+IHtcbiAgICAgIHJldHVybiBjaGFyLnRvVXBwZXJDYXNlKCkgKyBzdHI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQWNjZXNzb3JzKG9iaiwgaGVhZGVyKSB7XG4gIGNvbnN0IGFjY2Vzc29yTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKCcgJyArIGhlYWRlcik7XG5cbiAgWydnZXQnLCAnc2V0JywgJ2hhcyddLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBtZXRob2ROYW1lICsgYWNjZXNzb3JOYW1lLCB7XG4gICAgICAvLyBOdWxsLXByb3RvIGRlc2NyaXB0b3Igc28gYSBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlLmdldCBjYW5ub3QgdHVyblxuICAgICAgLy8gdGhpcyBkYXRhIGRlc2NyaXB0b3IgaW50byBhbiBhY2Nlc3NvciBkZXNjcmlwdG9yIG9uIHRoZSB3YXkgaW4uXG4gICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uY2FsbCh0aGlzLCBoZWFkZXIsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNsYXNzIEF4aW9zSGVhZGVycyB7XG4gIGNvbnN0cnVjdG9yKGhlYWRlcnMpIHtcbiAgICBoZWFkZXJzICYmIHRoaXMuc2V0KGhlYWRlcnMpO1xuICB9XG5cbiAgc2V0KGhlYWRlciwgdmFsdWVPclJld3JpdGUsIHJld3JpdGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWxIZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIGxIZWFkZXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFrZXkgfHxcbiAgICAgICAgc2VsZltrZXldID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgX3Jld3JpdGUgPT09IHRydWUgfHxcbiAgICAgICAgKF9yZXdyaXRlID09PSB1bmRlZmluZWQgJiYgc2VsZltrZXldICE9PSBmYWxzZSlcbiAgICAgICkge1xuICAgICAgICBzZWxmW2tleSB8fCBfaGVhZGVyXSA9IG5vcm1hbGl6ZVZhbHVlKF92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGVhZGVycyA9IChoZWFkZXJzLCBfcmV3cml0ZSkgPT5cbiAgICAgIHV0aWxzLmZvckVhY2goaGVhZGVycywgKF92YWx1ZSwgX2hlYWRlcikgPT4gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpKTtcblxuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KGhlYWRlcikgfHwgaGVhZGVyIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgc2V0SGVhZGVycyhoZWFkZXIsIHZhbHVlT3JSZXdyaXRlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKGhlYWRlcikgJiYgKGhlYWRlciA9IGhlYWRlci50cmltKCkpICYmICFpc1ZhbGlkSGVhZGVyTmFtZShoZWFkZXIpKSB7XG4gICAgICBzZXRIZWFkZXJzKHBhcnNlSGVhZGVycyhoZWFkZXIpLCB2YWx1ZU9yUmV3cml0ZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChoZWFkZXIpICYmIHV0aWxzLmlzU2FmZUl0ZXJhYmxlKGhlYWRlcikpIHtcbiAgICAgIGxldCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICBkZXN0LFxuICAgICAgICBrZXk7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGhlYWRlcikge1xuICAgICAgICBpZiAoIXV0aWxzLmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0IGl0ZXJhdG9yIG11c3QgcmV0dXJuIGEga2V5LXZhbHVlIHBhaXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGVudHJ5WzBdO1xuXG4gICAgICAgIGlmICh1dGlscy5oYXNPd25Qcm9wKG9iaiwga2V5KSkge1xuICAgICAgICAgIGRlc3QgPSBvYmpba2V5XTtcbiAgICAgICAgICBvYmpba2V5XSA9IHV0aWxzLmlzQXJyYXkoZGVzdCkgPyBbLi4uZGVzdCwgZW50cnlbMV1dIDogW2Rlc3QsIGVudHJ5WzFdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpba2V5XSA9IGVudHJ5WzFdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldEhlYWRlcnMob2JqLCB2YWx1ZU9yUmV3cml0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciAhPSBudWxsICYmIHNldEhlYWRlcih2YWx1ZU9yUmV3cml0ZSwgaGVhZGVyLCByZXdyaXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChoZWFkZXIsIHBhcnNlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuXG4gICAgICAgIGlmICghcGFyc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZVRva2Vucyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5jYWxsKHRoaXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzUmVnRXhwKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmV4ZWModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyc2VyIG11c3QgYmUgYm9vbGVhbnxyZWdleHB8ZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXMoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIHJldHVybiAhIShcbiAgICAgICAga2V5ICYmXG4gICAgICAgIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZGVsZXRlKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIZWFkZXIoX2hlYWRlcikge1xuICAgICAgX2hlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKF9oZWFkZXIpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBfaGVhZGVyKTtcblxuICAgICAgICBpZiAoa2V5ICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHNlbGYsIHNlbGZba2V5XSwga2V5LCBtYXRjaGVyKSkpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZltrZXldO1xuXG4gICAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIuZm9yRWFjaChkZWxldGVIZWFkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVIZWFkZXIoaGVhZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIGNsZWFyKG1hdGNoZXIpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyLCB0cnVlKSkge1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIG5vcm1hbGl6ZShmb3JtYXQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KGhlYWRlcnMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc2VsZltrZXldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBmb3JtYXQgPyBmb3JtYXRIZWFkZXIoaGVhZGVyKSA6IFN0cmluZyhoZWFkZXIpLnRyaW0oKTtcblxuICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IGhlYWRlcikge1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgfVxuXG4gICAgICBzZWxmW25vcm1hbGl6ZWRdID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuXG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWRdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uY2F0KC4uLnRhcmdldHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jb25jYXQodGhpcywgLi4udGFyZ2V0cyk7XG4gIH1cblxuICB0b0pTT04oYXNTdHJpbmdzKSB7XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIHZhbHVlICE9IG51bGwgJiZcbiAgICAgICAgdmFsdWUgIT09IGZhbHNlICYmXG4gICAgICAgIChvYmpbaGVhZGVyXSA9IGFzU3RyaW5ncyAmJiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKVxuICAgICAgLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiBoZWFkZXIgKyAnOiAnICsgdmFsdWUpXG4gICAgICAuam9pbignXFxuJyk7XG4gIH1cblxuICBnZXRTZXRDb29raWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldCgnc2V0LWNvb2tpZScpO1xuICAgIHJldHVybiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UgPyBbXSA6IFt2YWx1ZV07XG4gIH1cblxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuICdBeGlvc0hlYWRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGZyb20odGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiB0aGlzID8gdGhpbmcgOiBuZXcgdGhpcyh0aGluZyk7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VQYXJhbWV0ZXJzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlUGFyYW1ldGVycyh2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgY29uY2F0KGZpcnN0LCAuLi50YXJnZXRzKSB7XG4gICAgY29uc3QgY29tcHV0ZWQgPSBuZXcgdGhpcyhmaXJzdCk7XG5cbiAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gY29tcHV0ZWQuc2V0KHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVkO1xuICB9XG5cbiAgc3RhdGljIGFjY2Vzc29yKGhlYWRlcikge1xuICAgIGNvbnN0IGludGVybmFscyA9XG4gICAgICAodGhpc1skaW50ZXJuYWxzXSA9XG4gICAgICB0aGlzWyRpbnRlcm5hbHNdID1cbiAgICAgICAge1xuICAgICAgICAgIGFjY2Vzc29yczoge30sXG4gICAgICAgIH0pO1xuXG4gICAgY29uc3QgYWNjZXNzb3JzID0gaW50ZXJuYWxzLmFjY2Vzc29ycztcbiAgICBjb25zdCBwcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcblxuICAgIGZ1bmN0aW9uIGRlZmluZUFjY2Vzc29yKF9oZWFkZXIpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghYWNjZXNzb3JzW2xIZWFkZXJdKSB7XG4gICAgICAgIGJ1aWxkQWNjZXNzb3JzKHByb3RvdHlwZSwgX2hlYWRlcik7XG4gICAgICAgIGFjY2Vzc29yc1tsSGVhZGVyXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXRpbHMuaXNBcnJheShoZWFkZXIpID8gaGVhZGVyLmZvckVhY2goZGVmaW5lQWNjZXNzb3IpIDogZGVmaW5lQWNjZXNzb3IoaGVhZGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbkF4aW9zSGVhZGVycy5hY2Nlc3NvcihbXG4gICdDb250ZW50LVR5cGUnLFxuICAnQ29udGVudC1MZW5ndGgnLFxuICAnQWNjZXB0JyxcbiAgJ0FjY2VwdC1FbmNvZGluZycsXG4gICdVc2VyLUFnZW50JyxcbiAgJ0F1dGhvcml6YXRpb24nLFxuXSk7XG5cbi8vIHJlc2VydmVkIG5hbWVzIGhvdGZpeFxudXRpbHMucmVkdWNlRGVzY3JpcHRvcnMoQXhpb3NIZWFkZXJzLnByb3RvdHlwZSwgKHsgdmFsdWUgfSwga2V5KSA9PiB7XG4gIGxldCBtYXBwZWQgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTsgLy8gbWFwIGBzZXRgID0+IGBTZXRgXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoKSA9PiB2YWx1ZSxcbiAgICBzZXQoaGVhZGVyVmFsdWUpIHtcbiAgICAgIHRoaXNbbWFwcGVkXSA9IGhlYWRlclZhbHVlO1xuICAgIH0sXG4gIH07XG59KTtcblxudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0hlYWRlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBpbnRlcmNlcHRvciwgc3luY2hyb25vdXMgYW5kIHJ1bldoZW5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICAgKi9cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWQsXG4gICAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBlamVjdChpZCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgaW50ZXJjZXB0b3JzIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAgICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZm9yRWFjaChmbikge1xuICAgIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgICAgZm4oaCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciwgeyBSRURBQ1RFRCB9IGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgaXNBYnNvbHV0ZVVSTCBmcm9tICcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMnO1xuaW1wb3J0IGNvbWJpbmVVUkxzIGZyb20gJy4uL2hlbHBlcnMvY29tYmluZVVSTHMuanMnO1xuXG5jb25zdCBtYWxmb3JtZWRIdHRwUHJvdG9jb2wgPSAvXmh0dHBzPzooPyFcXC9cXC8pL2k7XG5jb25zdCBodHRwUHJvdG9jb2xDb250cm9sQ2hhcmFjdGVycyA9IC9bXFx0XFxuXFxyXS9nO1xuXG5mdW5jdGlvbiBzdHJpcExlYWRpbmdDMENvbnRyb2xPclNwYWNlKHVybCkge1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgdXJsLmxlbmd0aCAmJiB1cmwuY2hhckNvZGVBdChpKSA8PSAweDIwKSB7XG4gICAgaSsrO1xuICB9XG4gIHJldHVybiB1cmwuc2xpY2UoaSk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVSTEZvclByb3RvY29sQ2hlY2sodXJsKSB7XG4gIHJldHVybiBzdHJpcExlYWRpbmdDMENvbnRyb2xPclNwYWNlKHVybCkucmVwbGFjZShodHRwUHJvdG9jb2xDb250cm9sQ2hhcmFjdGVycywgJycpO1xufVxuXG4vLyBSZWRhY3QgdGhlIHBhcnRzIG9mIGEgVVJMIHRoYXQgY2FuIGNhcnJ5IHNlY3JldHMgYmVmb3JlIGl0IGlzIGVtYmVkZGVkIGluIGFuXG4vLyBlcnJvciBtZXNzYWdlLiBBeGlvc0Vycm9yLnRvSlNPTigpIHNlcmlhbGl6ZXMgYG1lc3NhZ2VgIHZlcmJhdGltIGFuZCBlcnJvcnNcbi8vIGFyZSBjb21tb25seSBsb2dnZWQsIHdoaWxlIHRoZSBvcHQtaW4gYGNvbmZpZy5yZWRhY3RgIG1vZGVsIG9ubHkgY2xlYW5zXG4vLyBjb25maWcga2V5cyDigJQgaXQgY2Fubm90IHJlYWNoIHRoZSBtZXNzYWdlLiBSZWRhY3Qgb25seSB0aGUgZ2VudWluZWx5XG4vLyBzZW5zaXRpdmUgc3Vic3RyaW5ncyDigJQgdXNlcmluZm8gKGNyZWRlbnRpYWxzKSwgcXVlcnkgcGFyYW1ldGVyIHZhbHVlcyBhbmRcbi8vIGZyYWdtZW50IGNvbnRlbnRzIOKAlCB3aXRoIHRoZSBzYW1lIFJFREFDVEVEIG1hcmtlciB0aGUgY29uZmlnIHJlZGFjdGlvbiB1c2VzLFxuLy8gd2hpbGUga2VlcGluZyB0aGUgc2NoZW1lLCBob3N0LCBwYXRoIGFuZCBwYXJhbWV0ZXIgbmFtZXMgc28gdGhlIG9mZmVuZGluZ1xuLy8gcmVxdWVzdCBzdGF5cyBhY2N1cmF0ZWx5IGlkZW50aWZpYWJsZS5cbmZ1bmN0aW9uIHJlZGFjdEZyYWdtZW50KGZyYWdtZW50KSB7XG4gIGlmICghZnJhZ21lbnQpIHtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH1cblxuICByZXR1cm4gZnJhZ21lbnQucmVwbGFjZSgvKF58JikoW149Jl0qPSk/W14mXSsvZywgKG1hdGNoLCBzZXBhcmF0b3IsIHBhcmFtZXRlck5hbWUgPSAnJykgPT4ge1xuICAgIHJldHVybiBgJHtzZXBhcmF0b3J9JHtwYXJhbWV0ZXJOYW1lfSR7UkVEQUNURUR9YDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZGFjdFNlbnNpdGl2ZVVSTFBhcnRzKHVybCkge1xuICBjb25zdCByZWRhY3RlZFVSTCA9IHVybC5yZXBsYWNlKC9eKGh0dHBzPzpcXC97MCwyfSlbXi8/I10qQC9pLCBgJDEke1JFREFDVEVEfUBgKTtcbiAgY29uc3QgZnJhZ21lbnRJbmRleCA9IHJlZGFjdGVkVVJMLmluZGV4T2YoJyMnKTtcbiAgY29uc3QgdXJsV2l0aG91dEZyYWdtZW50ID1cbiAgICBmcmFnbWVudEluZGV4ID09PSAtMSA/IHJlZGFjdGVkVVJMIDogcmVkYWN0ZWRVUkwuc2xpY2UoMCwgZnJhZ21lbnRJbmRleCk7XG4gIGNvbnN0IHJlZGFjdGVkVVJMV2l0aG91dEZyYWdtZW50ID0gdXJsV2l0aG91dEZyYWdtZW50LnJlcGxhY2UoXG4gICAgLyhbPyZdW149JiNdKj0pW14mI10qL2csXG4gICAgYCQxJHtSRURBQ1RFRH1gXG4gICk7XG5cbiAgaWYgKGZyYWdtZW50SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHJlZGFjdGVkVVJMV2l0aG91dEZyYWdtZW50O1xuICB9XG5cbiAgcmV0dXJuIGAke3JlZGFjdGVkVVJMV2l0aG91dEZyYWdtZW50fSMke3JlZGFjdEZyYWdtZW50KHJlZGFjdGVkVVJMLnNsaWNlKGZyYWdtZW50SW5kZXggKyAxKSl9YDtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0VmFsaWRIdHRwUHJvdG9jb2xVUkwodXJsLCBjb25maWcpIHtcbiAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZFVSTCA9IG5vcm1hbGl6ZVVSTEZvclByb3RvY29sQ2hlY2sodXJsKTtcbiAgICBpZiAobWFsZm9ybWVkSHR0cFByb3RvY29sLnRlc3Qobm9ybWFsaXplZFVSTCkpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBgSW52YWxpZCBVUkwgJHtKU09OLnN0cmluZ2lmeShyZWRhY3RTZW5zaXRpdmVVUkxQYXJ0cyhub3JtYWxpemVkVVJMKSl9OiBtaXNzaW5nIFwiLy9cIiBhZnRlciBwcm90b2NvbGAsXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0lOVkFMSURfVVJMLFxuICAgICAgICBjb25maWdcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCwgYWxsb3dBYnNvbHV0ZVVybHMsIGNvbmZpZykge1xuICBhc3NlcnRWYWxpZEh0dHBQcm90b2NvbFVSTChyZXF1ZXN0ZWRVUkwsIGNvbmZpZyk7XG4gIGxldCBpc1JlbGF0aXZlVXJsID0gIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKTtcbiAgaWYgKGJhc2VVUkwgJiYgKGlzUmVsYXRpdmVVcmwgfHwgYWxsb3dBYnNvbHV0ZVVybHMgPT09IGZhbHNlKSkge1xuICAgIGFzc2VydFZhbGlkSHR0cFByb3RvY29sVVJMKGJhc2VVUkwsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRyYW5zZm9ybURhdGEgZnJvbSAnLi90cmFuc2Zvcm1EYXRhLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuLi9jYW5jZWwvaXNDYW5jZWwuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IGFkYXB0ZXJzIGZyb20gJy4uL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzJztcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKGNvbmZpZywgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3QpO1xuXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5kZXhPZihjb25maWcubWV0aG9kKSAhPT0gLTEpIHtcbiAgICBjb25maWcuaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgYWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXIoY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlciwgY29uZmlnKTtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oXG4gICAgZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBFeHBvc2UgdGhlIGN1cnJlbnQgcmVzcG9uc2Ugb24gY29uZmlnIHNvIHRoYXQgdHJhbnNmb3JtUmVzcG9uc2UgY2FuXG4gICAgICAvLyBhdHRhY2ggaXQgdG8gYW55IEF4aW9zRXJyb3IgaXQgdGhyb3dzIChlLmcuIG9uIEpTT04gcGFyc2UgZmFpbHVyZSkuXG4gICAgICAvLyBXZSBjbGVhbiBpdCB1cCBhZnRlcndhcmRzIHRvIGF2b2lkIHBvbGx1dGluZyB0aGUgY29uZmlnIG9iamVjdC5cbiAgICAgIGNvbmZpZy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChjb25maWcsIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSwgcmVzcG9uc2UpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5yZXNwb25zZTtcbiAgICAgIH1cblxuICAgICAgcmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSxcbiAgICBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uZmlnLnJlc3BvbnNlID0gcmVhc29uLnJlc3BvbnNlO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICAgICAgICAgIHJlYXNvbi5yZXNwb25zZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5yZXNwb25zZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZWFzb24ucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gICAgfVxuICApO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuL0F4aW9zSGVhZGVycy5qcyc7XG5cbmNvbnN0IGhlYWRlcnNUb09iamVjdCA9ICh0aGluZykgPT4gKHRoaW5nIGluc3RhbmNlb2YgQXhpb3NIZWFkZXJzID8geyAuLi50aGluZyB9IDogdGhpbmcpO1xuXG5jb25zdCBvd25FbnVtZXJhYmxlS2V5cyA9ICh0aGluZykgPT4ge1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaW5nKS5jb25jYXQoXG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRoaW5nKS5maWx0ZXIoXG4gICAgICAgIChzeW1ib2wpID0+IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpbmcsIHN5bWJvbCkuZW51bWVyYWJsZVxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaW5nKTtcbn07XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMSA9IGNvbmZpZzEgfHwge307XG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuXG4gIC8vIFVzZSBhIG51bGwtcHJvdG90eXBlIG9iamVjdCBzbyB0aGF0IGRvd25zdHJlYW0gcmVhZHMgc3VjaCBhcyBgY29uZmlnLmF1dGhgXG4gIC8vIG9yIGBjb25maWcuYmFzZVVSTGAgY2Fubm90IGluaGVyaXQgcG9sbHV0ZWQgdmFsdWVzIGZyb20gT2JqZWN0LnByb3RvdHlwZS5cbiAgLy8gYGhhc093blByb3BlcnR5YCBpcyByZXN0b3JlZCBhcyBhIG5vbi1lbnVtZXJhYmxlIG93biBzbG90IHRvIHByZXNlcnZlXG4gIC8vIGVyZ29ub21pY3MgZm9yIHVzZXIgY29kZSB0aGF0IHJlbGllcyBvbiBpdC5cbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbmZpZywgJ2hhc093blByb3BlcnR5Jywge1xuICAgIC8vIE51bGwtcHJvdG8gZGVzY3JpcHRvciBzbyBhIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUuZ2V0IGNhbm5vdCB0dXJuXG4gICAgLy8gdGhpcyBkYXRhIGRlc2NyaXB0b3IgaW50byBhbiBhY2Nlc3NvciBkZXNjcmlwdG9yIG9uIHRoZSB3YXkgaW4uXG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIHZhbHVlOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UsIHByb3AsIGNhc2VsZXNzKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZS5jYWxsKHsgY2FzZWxlc3MgfSwgdGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMoYSwgYiwgcHJvcCwgY2FzZWxlc3MpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYiwgcHJvcCwgY2FzZWxlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhLCBwcm9wLCBjYXNlbGVzcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVHJhbnNpdGlvbmFsT3B0aW9uKHByb3ApIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uYWwyID0gdXRpbHMuaGFzT3duUHJvcChjb25maWcyLCAndHJhbnNpdGlvbmFsJylcbiAgICAgID8gY29uZmlnMi50cmFuc2l0aW9uYWxcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZCh0cmFuc2l0aW9uYWwyKSkge1xuICAgICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodHJhbnNpdGlvbmFsMikpIHtcbiAgICAgICAgaWYgKHV0aWxzLmhhc093blByb3AodHJhbnNpdGlvbmFsMiwgcHJvcCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbmFsMltwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uYWwxID0gdXRpbHMuaGFzT3duUHJvcChjb25maWcxLCAndHJhbnNpdGlvbmFsJylcbiAgICAgID8gY29uZmlnMS50cmFuc2l0aW9uYWxcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodHJhbnNpdGlvbmFsMSkgJiYgdXRpbHMuaGFzT3duUHJvcCh0cmFuc2l0aW9uYWwxLCBwcm9wKSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25hbDFbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMoYSwgYiwgcHJvcCkge1xuICAgIGlmICh1dGlscy5oYXNPd25Qcm9wKGNvbmZpZzIsIHByb3ApKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYik7XG4gICAgfSBlbHNlIGlmICh1dGlscy5oYXNPd25Qcm9wKGNvbmZpZzEsIHByb3ApKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXJnZU1hcCA9IHtcbiAgICB1cmw6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgbWV0aG9kOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGRhdGE6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgYmFzZVVSTDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHBhcmFtc1NlcmlhbGl6ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0TWVzc2FnZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgd2l0aFhTUkZUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBhZGFwdGVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHJlc3BvbnNlVHlwZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB4c3JmQ29va2llTmFtZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB4c3JmSGVhZGVyTmFtZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvblVwbG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uRG93bmxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBkZWNvbXByZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heENvbnRlbnRMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Qm9keUxlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBiZWZvcmVSZWRpcmVjdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc3BvcnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cEFnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBzQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgY2FuY2VsVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgc29ja2V0UGF0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBhbGxvd2VkU29ja2V0UGF0aHM6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiLCBwcm9wKSA9PlxuICAgICAgbWVyZ2VEZWVwUHJvcGVydGllcyhoZWFkZXJzVG9PYmplY3QoYSksIGhlYWRlcnNUb09iamVjdChiKSwgcHJvcCwgdHJ1ZSksXG4gIH07XG5cbiAgdXRpbHMuZm9yRWFjaChvd25FbnVtZXJhYmxlS2V5cyh7IC4uLmNvbmZpZzEsIC4uLmNvbmZpZzIgfSksIGZ1bmN0aW9uIGNvbXB1dGVDb25maWdWYWx1ZShwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09ICdfX3Byb3RvX18nIHx8IHByb3AgPT09ICdjb25zdHJ1Y3RvcicgfHwgcHJvcCA9PT0gJ3Byb3RvdHlwZScpIHJldHVybjtcbiAgICBjb25zdCBtZXJnZSA9IHV0aWxzLmhhc093blByb3AobWVyZ2VNYXAsIHByb3ApID8gbWVyZ2VNYXBbcHJvcF0gOiBtZXJnZURlZXBQcm9wZXJ0aWVzO1xuICAgIGNvbnN0IGEgPSB1dGlscy5oYXNPd25Qcm9wKGNvbmZpZzEsIHByb3ApID8gY29uZmlnMVtwcm9wXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBiID0gdXRpbHMuaGFzT3duUHJvcChjb25maWcyLCBwcm9wKSA/IGNvbmZpZzJbcHJvcF0gOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBtZXJnZShhLCBiLCBwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIGlmIChcbiAgICB1dGlscy5oYXNPd25Qcm9wKGNvbmZpZzIsICd2YWxpZGF0ZVN0YXR1cycpICYmXG4gICAgdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMi52YWxpZGF0ZVN0YXR1cykgJiZcbiAgICBnZXRNZXJnZWRUcmFuc2l0aW9uYWxPcHRpb24oJ3ZhbGlkYXRlU3RhdHVzVW5kZWZpbmVkUmVzb2x2ZXMnKSA9PT0gZmFsc2VcbiAgKSB7XG4gICAgaWYgKHV0aWxzLmhhc093blByb3AoY29uZmlnMSwgJ3ZhbGlkYXRlU3RhdHVzJykpIHtcbiAgICAgIGNvbmZpZy52YWxpZGF0ZVN0YXR1cyA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMS52YWxpZGF0ZVN0YXR1cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBjb25maWcudmFsaWRhdGVTdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRk9STV9EQVRBX0NPTlRFTlRfSEVBREVSUyA9IFsnY29udGVudC10eXBlJywgJ2NvbnRlbnQtbGVuZ3RoJ107XG5cbi8qKlxuICogQXBwbHkgdGhlIGhlYWRlcnMgZ2VuZXJhdGVkIGJ5IGEgRm9ybURhdGEgaW1wbGVtZW50YXRpb24gdG8gdGhlIHJlcXVlc3QgaGVhZGVycyxcbiAqIGhvbm9yaW5nIHRoZSBgZm9ybURhdGFIZWFkZXJQb2xpY3lgIG9wdGlvbjogd2l0aCAnY29udGVudC1vbmx5JywgY29weSBvbmx5IHRoZVxuICogY29udGVudC0qIGhlYWRlcnM7IG90aGVyd2lzZSBtZXJnZSBhbGwgb2YgdGhlbS5cbiAqXG4gKiBAcGFyYW0ge0F4aW9zSGVhZGVyc30gaGVhZGVycyAtIHRoZSByZXF1ZXN0IGhlYWRlcnMgdG8gbXV0YXRlXG4gKiBAcGFyYW0ge09iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IGZvcm1IZWFkZXJzIC0gaGVhZGVycyBwcm9kdWNlZCBieSB0aGUgRm9ybURhdGEgaW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBbcG9saWN5XSAtIHRoZSByZXNvbHZlZCBgZm9ybURhdGFIZWFkZXJQb2xpY3lgIGNvbmZpZyB2YWx1ZVxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRGb3JtRGF0YUhlYWRlcnMoaGVhZGVycywgZm9ybUhlYWRlcnMsIHBvbGljeSkge1xuICBpZiAocG9saWN5ICE9PSAnY29udGVudC1vbmx5Jykge1xuICAgIGhlYWRlcnMuc2V0KGZvcm1IZWFkZXJzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3QuZW50cmllcyhmb3JtSGVhZGVycyB8fCB7fSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgIGlmIChGT1JNX0RBVEFfQ09OVEVOVF9IRUFERVJTLmluY2x1ZGVzKGtleS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgaGVhZGVycy5zZXQoa2V5LCB2YWwpO1xuICAgIH1cbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2Uuc3RhdHVzID49IDQwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA1MDAgPyBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCA6IEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7P09iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShmbnMsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHRoaXMgfHwgZGVmYXVsdHM7XG4gIGNvbnN0IGNvbnRleHQgPSByZXNwb25zZSB8fCBjb25maWc7XG4gIGNvbnN0IGhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb250ZXh0LmhlYWRlcnMpO1xuICBsZXQgZGF0YSA9IGNvbnRleHQuZGF0YTtcblxuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuLmNhbGwoY29uZmlnLCBkYXRhLCBoZWFkZXJzLm5vcm1hbGl6ZSgpLCByZXNwb25zZSA/IHJlc3BvbnNlLnN0YXR1cyA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuXG4gIGhlYWRlcnMubm9ybWFsaXplKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4vdHJhbnNpdGlvbmFsLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4uL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgdG9VUkxFbmNvZGVkRm9ybSBmcm9tICcuLi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcblxuY29uc3Qgb3duID0gKG9iaiwga2V5KSA9PiAob2JqICE9IG51bGwgJiYgdXRpbHMuaGFzT3duUHJvcChvYmosIGtleSkgPyBvYmpba2V5XSA6IHVuZGVmaW5lZCk7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcsIHRyaWVzIHRvIHBhcnNlIGl0LCBhbmQgaWYgaXQgZmFpbHMsIGl0IHJldHVybnMgdGhlIHN0cmluZ2lmaWVkIHZlcnNpb25cbiAqIG9mIHRoZSBpbnB1dFxuICpcbiAqIEBwYXJhbSB7YW55fSByYXdWYWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBzdHJpbmdpZmllZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcnNlciAtIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYSBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5jb2RlciAtIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgc3RyaW5nLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5naWZpZWQgdmVyc2lvbiBvZiB0aGUgcmF3VmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcblxuICBhZGFwdGVyOiBbJ3hocicsICdodHRwJywgJ2ZldGNoJ10sXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgICAgY29uc3QgY29udGVudFR5cGUgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKCkgfHwgJyc7XG4gICAgICBjb25zdCBoYXNKU09OQ29udGVudFR5cGUgPSBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMTtcbiAgICAgIGNvbnN0IGlzT2JqZWN0UGF5bG9hZCA9IHV0aWxzLmlzT2JqZWN0KGRhdGEpO1xuXG4gICAgICBpZiAoaXNPYmplY3RQYXlsb2FkICYmIHV0aWxzLmlzSFRNTEZvcm0oZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb3JtRGF0YSA9IHV0aWxzLmlzRm9ybURhdGEoZGF0YSk7XG5cbiAgICAgIGlmIChpc0Zvcm1EYXRhKSB7XG4gICAgICAgIHJldHVybiBoYXNKU09OQ29udGVudFR5cGUgPyBKU09OLnN0cmluZ2lmeShmb3JtRGF0YVRvSlNPTihkYXRhKSkgOiBkYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICAgIHV0aWxzLmlzQmxvYihkYXRhKSB8fFxuICAgICAgICB1dGlscy5pc1JlYWRhYmxlU3RyZWFtKGRhdGEpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgICAgfVxuICAgICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04JywgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBsZXQgaXNGaWxlTGlzdDtcblxuICAgICAgaWYgKGlzT2JqZWN0UGF5bG9hZCkge1xuICAgICAgICBjb25zdCBmb3JtU2VyaWFsaXplciA9IG93bih0aGlzLCAnZm9ybVNlcmlhbGl6ZXInKTtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBmb3JtU2VyaWFsaXplcikudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAoaXNGaWxlTGlzdCA9IHV0aWxzLmlzRmlsZUxpc3QoZGF0YSkpIHx8XG4gICAgICAgICAgY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpID4gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgZW52ID0gb3duKHRoaXMsICdlbnYnKTtcbiAgICAgICAgICBjb25zdCBfRm9ybURhdGEgPSBlbnYgJiYgZW52LkZvcm1EYXRhO1xuXG4gICAgICAgICAgcmV0dXJuIHRvRm9ybURhdGEoXG4gICAgICAgICAgICBpc0ZpbGVMaXN0ID8geyAnZmlsZXNbXSc6IGRhdGEgfSA6IGRhdGEsXG4gICAgICAgICAgICBfRm9ybURhdGEgJiYgbmV3IF9Gb3JtRGF0YSgpLFxuICAgICAgICAgICAgZm9ybVNlcmlhbGl6ZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc09iamVjdFBheWxvYWQgfHwgaGFzSlNPTkNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBzdHJpbmdpZnlTYWZlbHkoZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gIF0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBvd24odGhpcywgJ3RyYW5zaXRpb25hbCcpIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICAgIGNvbnN0IGZvcmNlZEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5mb3JjZWRKU09OUGFyc2luZztcbiAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IG93bih0aGlzLCAncmVzcG9uc2VUeXBlJyk7XG4gICAgICBjb25zdCBKU09OUmVxdWVzdGVkID0gcmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICAgIGlmICh1dGlscy5pc1Jlc3BvbnNlKGRhdGEpIHx8IHV0aWxzLmlzUmVhZGFibGVTdHJlYW0oZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZGF0YSAmJlxuICAgICAgICB1dGlscy5pc1N0cmluZyhkYXRhKSAmJlxuICAgICAgICAoKGZvcmNlZEpTT05QYXJzaW5nICYmICFyZXNwb25zZVR5cGUpIHx8IEpTT05SZXF1ZXN0ZWQpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgc2lsZW50SlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLnNpbGVudEpTT05QYXJzaW5nO1xuICAgICAgICBjb25zdCBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiBKU09OUmVxdWVzdGVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSwgb3duKHRoaXMsICdwYXJzZVJldml2ZXInKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcpIHtcbiAgICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgb3duKHRoaXMsICdyZXNwb25zZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gIF0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIGVudjoge1xuICAgIEZvcm1EYXRhOiBwbGF0Zm9ybS5jbGFzc2VzLkZvcm1EYXRhLFxuICAgIEJsb2I6IHBsYXRmb3JtLmNsYXNzZXMuQmxvYixcbiAgfSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9LFxuXG4gIGhlYWRlcnM6IHtcbiAgICBjb21tb246IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0sXG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ3F1ZXJ5J10sIChtZXRob2QpID0+IHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2lsZW50SlNPTlBhcnNpbmc6IHRydWUsXG4gIGZvcmNlZEpTT05QYXJzaW5nOiB0cnVlLFxuICBjbGFyaWZ5VGltZW91dEVycm9yOiBmYWxzZSxcbiAgbGVnYWN5SW50ZXJjZXB0b3JSZXFSZXNPcmRlcmluZzogdHJ1ZSxcbiAgYWR2ZXJ0aXNlWnN0ZEFjY2VwdEVuY29kaW5nOiBmYWxzZSxcbiAgdmFsaWRhdGVTdGF0dXNVbmRlZmluZWRSZXNvbHZlczogdHJ1ZSxcbn07XG4iLCJleHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiMS4xOS4wXCI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIEl0IGVuY29kZXMgYSBzdHJpbmcgYnkgcmVwbGFjaW5nIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBpbiB0aGUgdW5yZXNlcnZlZCBzZXQgd2l0aFxuICogdGhlaXIgcGVyY2VudC1lbmNvZGVkIGVxdWl2YWxlbnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICBjb25zdCBjaGFyTWFwID0ge1xuICAgICchJzogJyUyMScsXG4gICAgXCInXCI6ICclMjcnLFxuICAgICcoJzogJyUyOCcsXG4gICAgJyknOiAnJTI5JyxcbiAgICAnfic6ICclN0UnLFxuICAgICclMjAnOiAnKycsXG4gIH07XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKX5dfCUyMC9nLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCkge1xuICAgIHJldHVybiBjaGFyTWFwW21hdGNoXTtcbiAgfSk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXJhbXMgb2JqZWN0IGFuZCBjb252ZXJ0cyBpdCB0byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gYmUgY29udmVydGVkIHRvIGEgRm9ybURhdGEgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0byB0aGUgQXhpb3MgY29uc3RydWN0b3IuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykge1xuICB0aGlzLl9wYWlycyA9IFtdO1xuXG4gIHBhcmFtcyAmJiB0b0Zvcm1EYXRhKHBhcmFtcywgdGhpcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcblxucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICB0aGlzLl9wYWlycy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xufTtcblxucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2Rlcikge1xuICBjb25zdCBfZW5jb2RlID0gZW5jb2RlclxuICAgID8gKHZhbHVlKSA9PiBlbmNvZGVyLmNhbGwodGhpcywgdmFsdWUsIGVuY29kZSlcbiAgICA6IGVuY29kZTtcblxuICByZXR1cm4gdGhpcy5fcGFpcnNcbiAgICAubWFwKGZ1bmN0aW9uIGVhY2gocGFpcikge1xuICAgICAgcmV0dXJuIF9lbmNvZGUocGFpclswXSkgKyAnPScgKyBfZW5jb2RlKHBhaXJbMV0pO1xuICAgIH0sICcnKVxuICAgIC5qb2luKCcmJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsImNvbnN0IEh0dHBTdGF0dXNDb2RlID0ge1xuICBDb250aW51ZTogMTAwLFxuICBTd2l0Y2hpbmdQcm90b2NvbHM6IDEwMSxcbiAgUHJvY2Vzc2luZzogMTAyLFxuICBFYXJseUhpbnRzOiAxMDMsXG4gIE9rOiAyMDAsXG4gIENyZWF0ZWQ6IDIwMSxcbiAgQWNjZXB0ZWQ6IDIwMixcbiAgTm9uQXV0aG9yaXRhdGl2ZUluZm9ybWF0aW9uOiAyMDMsXG4gIE5vQ29udGVudDogMjA0LFxuICBSZXNldENvbnRlbnQ6IDIwNSxcbiAgUGFydGlhbENvbnRlbnQ6IDIwNixcbiAgTXVsdGlTdGF0dXM6IDIwNyxcbiAgQWxyZWFkeVJlcG9ydGVkOiAyMDgsXG4gIEltVXNlZDogMjI2LFxuICBNdWx0aXBsZUNob2ljZXM6IDMwMCxcbiAgTW92ZWRQZXJtYW5lbnRseTogMzAxLFxuICBGb3VuZDogMzAyLFxuICBTZWVPdGhlcjogMzAzLFxuICBOb3RNb2RpZmllZDogMzA0LFxuICBVc2VQcm94eTogMzA1LFxuICBVbnVzZWQ6IDMwNixcbiAgVGVtcG9yYXJ5UmVkaXJlY3Q6IDMwNyxcbiAgUGVybWFuZW50UmVkaXJlY3Q6IDMwOCxcbiAgQmFkUmVxdWVzdDogNDAwLFxuICBVbmF1dGhvcml6ZWQ6IDQwMSxcbiAgUGF5bWVudFJlcXVpcmVkOiA0MDIsXG4gIEZvcmJpZGRlbjogNDAzLFxuICBOb3RGb3VuZDogNDA0LFxuICBNZXRob2ROb3RBbGxvd2VkOiA0MDUsXG4gIE5vdEFjY2VwdGFibGU6IDQwNixcbiAgUHJveHlBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA0MDcsXG4gIFJlcXVlc3RUaW1lb3V0OiA0MDgsXG4gIENvbmZsaWN0OiA0MDksXG4gIEdvbmU6IDQxMCxcbiAgTGVuZ3RoUmVxdWlyZWQ6IDQxMSxcbiAgUHJlY29uZGl0aW9uRmFpbGVkOiA0MTIsXG4gIFBheWxvYWRUb29MYXJnZTogNDEzLFxuICBVcmlUb29Mb25nOiA0MTQsXG4gIFVuc3VwcG9ydGVkTWVkaWFUeXBlOiA0MTUsXG4gIFJhbmdlTm90U2F0aXNmaWFibGU6IDQxNixcbiAgRXhwZWN0YXRpb25GYWlsZWQ6IDQxNyxcbiAgSW1BVGVhcG90OiA0MTgsXG4gIE1pc2RpcmVjdGVkUmVxdWVzdDogNDIxLFxuICBVbnByb2Nlc3NhYmxlRW50aXR5OiA0MjIsXG4gIExvY2tlZDogNDIzLFxuICBGYWlsZWREZXBlbmRlbmN5OiA0MjQsXG4gIFRvb0Vhcmx5OiA0MjUsXG4gIFVwZ3JhZGVSZXF1aXJlZDogNDI2LFxuICBQcmVjb25kaXRpb25SZXF1aXJlZDogNDI4LFxuICBUb29NYW55UmVxdWVzdHM6IDQyOSxcbiAgUmVxdWVzdEhlYWRlckZpZWxkc1Rvb0xhcmdlOiA0MzEsXG4gIFVuYXZhaWxhYmxlRm9yTGVnYWxSZWFzb25zOiA0NTEsXG4gIEludGVybmFsU2VydmVyRXJyb3I6IDUwMCxcbiAgTm90SW1wbGVtZW50ZWQ6IDUwMSxcbiAgQmFkR2F0ZXdheTogNTAyLFxuICBTZXJ2aWNlVW5hdmFpbGFibGU6IDUwMyxcbiAgR2F0ZXdheVRpbWVvdXQ6IDUwNCxcbiAgSHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ6IDUwNSxcbiAgVmFyaWFudEFsc29OZWdvdGlhdGVzOiA1MDYsXG4gIEluc3VmZmljaWVudFN0b3JhZ2U6IDUwNyxcbiAgTG9vcERldGVjdGVkOiA1MDgsXG4gIE5vdEV4dGVuZGVkOiA1MTAsXG4gIE5ldHdvcmtBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA1MTEsXG4gIFdlYlNlcnZlclJldHVybnNBblVua25vd25FcnJvcjogNTIwLFxuICBXZWJTZXJ2ZXJJc0Rvd246IDUyMSxcbiAgQ29ubmVjdGlvblRpbWVkT3V0OiA1MjIsXG4gIE9yaWdpbklzVW5yZWFjaGFibGU6IDUyMyxcbiAgVGltZW91dE9jY3VycmVkOiA1MjQsXG4gIFNzbEhhbmRzaGFrZUZhaWxlZDogNTI1LFxuICBJbnZhbGlkU3NsQ2VydGlmaWNhdGU6IDUyNixcbn07XG5cbk9iamVjdC5lbnRyaWVzKEh0dHBTdGF0dXNDb2RlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgSHR0cFN0YXR1c0NvZGVbdmFsdWVdID0ga2V5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBTdGF0dXNDb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvdW5kIHZlcnNpb24gb2YgYSBmdW5jdGlvbiB3aXRoIGEgc3BlY2lmaWVkIGB0aGlzYCBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gYmluZFxuICogQHBhcmFtIHsqfSB0aGlzQXJnIC0gVGhlIHZhbHVlIHRvIGJlIHBhc3NlZCBhcyB0aGUgYHRoaXNgIHBhcmFtZXRlclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB0aGF0IHdpbGwgY2FsbCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgc3BlY2lmaWVkIGB0aGlzYCBjb250ZXh0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5cbi8qKlxuICogSXQgcmVwbGFjZXMgVVJMLWVuY29kZWQgZm9ybXMgb2YgYDpgLCBgJGAsIGAsYCwgYW5kIHNwYWNlcyB3aXRoXG4gKiB0aGVpciBwbGFpbiBjb3VudGVycGFydHMgKGA6YCwgYCRgLCBgLGAsIGArYCkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbCBUaGUgdmFsdWUgdG8gYmUgZW5jb2RlZC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpXG4gICAgLnJlcGxhY2UoLyUzQS9naSwgJzonKVxuICAgIC5yZXBsYWNlKC8lMjQvZywgJyQnKVxuICAgIC5yZXBsYWNlKC8lMkMvZ2ksICcsJylcbiAgICAucmVwbGFjZSgvJTIwL2csICcrJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHs/KG9iamVjdHxGdW5jdGlvbil9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgb3B0aW9ucykge1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gdXJsIHx8ICcnO1xuXG4gIGNvbnN0IF9vcHRpb25zID0gdXRpbHMuaXNGdW5jdGlvbihvcHRpb25zKVxuICAgID8ge1xuICAgICAgICBzZXJpYWxpemU6IG9wdGlvbnMsXG4gICAgICB9XG4gICAgOiBvcHRpb25zO1xuXG4gIC8vIFJlYWQgc2VyaWFsaXplciBvcHRpb25zIHBvbGx1dGlvbi1zYWZlbHk6IG93biBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9uIGFcbiAgLy8gY2xhc3MvdGVtcGxhdGUgcHJvdG90eXBlIGFyZSBob25vcmVkLCBidXQgdmFsdWVzIGluamVjdGVkIG9udG8gYSBwb2xsdXRlZFxuICAvLyBPYmplY3QucHJvdG90eXBlIGFyZSBpZ25vcmVkLlxuICBjb25zdCBfZW5jb2RlID0gdXRpbHMuZ2V0U2FmZVByb3AoX29wdGlvbnMsICdlbmNvZGUnKSB8fCBlbmNvZGU7XG4gIGNvbnN0IHNlcmlhbGl6ZUZuID0gdXRpbHMuZ2V0U2FmZVByb3AoX29wdGlvbnMsICdzZXJpYWxpemUnKTtcblxuICBsZXQgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAoc2VyaWFsaXplRm4pIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gc2VyaWFsaXplRm4ocGFyYW1zLCBfb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcylcbiAgICAgID8gcGFyYW1zLnRvU3RyaW5nKClcbiAgICAgIDogbmV3IEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgX29wdGlvbnMpLnRvU3RyaW5nKF9lbmNvZGUpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICBjb25zdCBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICBpZiAoIXJlbGF0aXZlVVJMKSB7XG4gICAgcmV0dXJuIGJhc2VVUkw7XG4gIH1cblxuICBsZXQgZW5kID0gYmFzZVVSTC5sZW5ndGg7XG5cbiAgd2hpbGUgKGVuZCA+IDAgJiYgYmFzZVVSTC5jaGFyQ29kZUF0KGVuZCAtIDEpID09PSA0Nykge1xuICAgIGVuZC0tO1xuICB9XG5cbiAgcmV0dXJuIGJhc2VVUkwuc2xpY2UoMCwgZW5kKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpO1xufVxuIiwiaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmNvbnN0IGNvbXBvc2VTaWduYWxzID0gKHNpZ25hbHMsIHRpbWVvdXQpID0+IHtcbiAgc2lnbmFscyA9IHNpZ25hbHMgPyBzaWduYWxzLmZpbHRlcihCb29sZWFuKSA6IFtdO1xuXG4gIGlmICghdGltZW91dCAmJiAhc2lnbmFscy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gIGxldCBhYm9ydGVkID0gZmFsc2U7XG5cbiAgY29uc3Qgb25hYm9ydCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICBpZiAoIWFib3J0ZWQpIHtcbiAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIGNvbnN0IGVyciA9IHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVhc29uIDogdGhpcy5yZWFzb247XG4gICAgICBjb250cm9sbGVyLmFib3J0KFxuICAgICAgICBlcnIgaW5zdGFuY2VvZiBBeGlvc0Vycm9yXG4gICAgICAgICAgPyBlcnJcbiAgICAgICAgICA6IG5ldyBDYW5jZWxlZEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBlcnIpXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBsZXQgdGltZXIgPVxuICAgIHRpbWVvdXQgJiZcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgIG9uYWJvcnQobmV3IEF4aW9zRXJyb3IoYHRpbWVvdXQgb2YgJHt0aW1lb3V0fW1zIGV4Y2VlZGVkYCwgQXhpb3NFcnJvci5FVElNRURPVVQpKTtcbiAgICB9LCB0aW1lb3V0KTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICBpZiAoIXNpZ25hbHMpIHsgcmV0dXJuOyB9XG4gICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IG51bGw7XG4gICAgc2lnbmFscy5mb3JFYWNoKChzaWduYWwpID0+IHtcbiAgICAgIHNpZ25hbC51bnN1YnNjcmliZVxuICAgICAgICA/IHNpZ25hbC51bnN1YnNjcmliZShvbmFib3J0KVxuICAgICAgICA6IHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQpO1xuICAgIH0pO1xuICAgIHNpZ25hbHMgPSBudWxsO1xuICB9O1xuXG4gIHNpZ25hbHMuZm9yRWFjaCgoc2lnbmFsKSA9PiB7XG4gICAgaWYgKGFib3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIG9uYWJvcnQuY2FsbChzaWduYWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQsIHsgb25jZTogdHJ1ZSB9KTtcbiAgfSk7XG5cbiAgY29uc3QgeyBzaWduYWwgfSA9IGNvbnRyb2xsZXI7XG5cbiAgc2lnbmFsLnVuc3Vic2NyaWJlID0gKCkgPT4gdXRpbHMuYXNhcCh1bnN1YnNjcmliZSk7XG5cbiAgcmV0dXJuIHNpZ25hbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2VTaWduYWxzO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudlxuICA/IC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIHtcbiAgICAgIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSwgc2FtZVNpdGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjb29raWUgPSBbYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWBdO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKGBleHBpcmVzPSR7bmV3IERhdGUoZXhwaXJlcykudG9VVENTdHJpbmcoKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaChgcGF0aD0ke3BhdGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaChgZG9tYWluPSR7ZG9tYWlufWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNhbWVTaXRlKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKGBTYW1lU2l0ZT0ke3NhbWVTaXRlfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkKG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICAgICAgICAvLyBNYXRjaCBuYW1lPXZhbHVlIGJ5IHNwbGl0dGluZyBvbiB0aGUgc2VtaWNvbG9uIHNlcGFyYXRvciBpbnN0ZWFkIG9mIGJ1aWxkaW5nIGFcbiAgICAgICAgLy8gUmVnRXhwIGZyb20gYG5hbWVgIOKAlCBpbnRlcnBvbGF0aW5nIGFuIHVuZXNjYXBlZCBzdHJpbmcgaW50byBhIFJlZ0V4cCB3b3VsZCBsZXRcbiAgICAgICAgLy8gbWV0YWNoYXJhY3RlcnMgKGUuZy4gYC4rP2AgaW4gYW4gYXR0YWNrZXItaW5mbHVlbmNlZCBjb29raWUgbmFtZSkgY2F1c2UgUmVEb1Mgb3JcbiAgICAgICAgLy8gbWF0Y2ggdGhlIHdyb25nIGNvb2tpZS4gQnJvd3NlcnMgbWF5IHNlcmlhbGl6ZSBjb29raWUgcGFpcnMgYXMgZWl0aGVyIFwiO1wiIG9yXG4gICAgICAgIC8vIFwiOyBcIiwgc28gaWdub3JlIG9wdGlvbmFsIHdoaXRlc3BhY2UgYmVmb3JlIGVhY2ggY29va2llIG5hbWUuXG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY29va2llID0gY29va2llc1tpXS5yZXBsYWNlKC9eXFxzKy8sICcnKTtcbiAgICAgICAgICBjb25zdCBlcSA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XG4gICAgICAgICAgaWYgKGVxICE9PSAtMSAmJiBjb29raWUuc2xpY2UoMCwgZXEpID09PSBuYW1lKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zbGljZShlcSArIDEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZS5zbGljZShlcSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCwgJy8nKTtcbiAgICAgIH0sXG4gICAgfVxuICA6IC8vIE5vbi1zdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICB7XG4gICAgICB3cml0ZSgpIHt9LFxuICAgICAgcmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlKCkge30sXG4gICAgfTtcbiIsIi8qKlxuICogRXN0aW1hdGUgZGF0YTogVVJMIGJ5dGUgbGVuZ3RocyAqd2l0aG91dCogYWxsb2NhdGluZyBsYXJnZSBidWZmZXJzLlxuICogLSBGZXRjaCBwZXJjZW50LWRlY29kZXMgYSBiYXNlNjQgYm9keSBiZWZvcmUgZGVjb2RpbmcgaXQuXG4gKiAtIE5vZGUncyBCdWZmZXIuZnJvbShib2R5LCAnYmFzZTY0Jykgc2l6ZXMgaXRzIGJhY2tpbmcgYWxsb2NhdGlvbiBmcm9tIHRoZVxuICogICByYXcgYm9keSwgaW5jbHVkaW5nIGlnbm9yZWQgY2hhcmFjdGVycyBhbmQgY29udGVudCBhZnRlciBwYWRkaW5nLlxuICogLSBOb24tYmFzZTY0IGRhdGEgaXMgcGVyY2VudC1kZWNvZGVkIGFuZCB0aGVuIGVuY29kZWQgYXMgVVRGLTguXG4gKi9cbmNvbnN0IGlzSGV4RGlnaXQgPSAoY2hhckNvZGUpID0+XG4gIChjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1NykgfHxcbiAgKGNoYXJDb2RlID49IDY1ICYmIGNoYXJDb2RlIDw9IDcwKSB8fFxuICAoY2hhckNvZGUgPj0gOTcgJiYgY2hhckNvZGUgPD0gMTAyKTtcblxuY29uc3QgaXNQZXJjZW50RW5jb2RlZEJ5dGUgPSAoc3RyLCBpLCBsZW4pID0+XG4gIGkgKyAyIDwgbGVuICYmIGlzSGV4RGlnaXQoc3RyLmNoYXJDb2RlQXQoaSArIDEpKSAmJiBpc0hleERpZ2l0KHN0ci5jaGFyQ29kZUF0KGkgKyAyKSk7XG5cbmNvbnN0IGhleFZhbHVlID0gKGNoYXJDb2RlKSA9PiAoY2hhckNvZGUgPD0gNTcgPyBjaGFyQ29kZSAtIDQ4IDogKGNoYXJDb2RlICYgMHhkZikgLSA1NSk7XG5cbmNvbnN0IGlzQmFzZTY0Q2hhciA9IChjaGFyQ29kZSkgPT5cbiAgKGNoYXJDb2RlID49IDY1ICYmIGNoYXJDb2RlIDw9IDkwKSB8fCAvLyBBLVpcbiAgKGNoYXJDb2RlID49IDk3ICYmIGNoYXJDb2RlIDw9IDEyMikgfHwgLy8gYS16XG4gIChjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1NykgfHwgLy8gMC05XG4gIGNoYXJDb2RlID09PSA0MyB8fCAvLyArXG4gIGNoYXJDb2RlID09PSA0NyB8fCAvLyAvXG4gIGNoYXJDb2RlID09PSA0NSB8fCAvLyAtIChiYXNlNjR1cmwpXG4gIGNoYXJDb2RlID09PSA5NTsgLy8gXyAoYmFzZTY0dXJsKVxuXG5jb25zdCBpc0Jhc2U2NFdoaXRlc3BhY2UgPSAoY2hhckNvZGUpID0+XG4gIGNoYXJDb2RlID09PSA5IHx8IGNoYXJDb2RlID09PSAxMCB8fCBjaGFyQ29kZSA9PT0gMTIgfHwgY2hhckNvZGUgPT09IDEzIHx8IGNoYXJDb2RlID09PSAzMjtcblxuY29uc3QgYmFzZTY0Qnl0ZXMgPSAoc2lnbmlmaWNhbnQpID0+IHtcbiAgY29uc3QgZ3JvdXBzID0gTWF0aC5mbG9vcihzaWduaWZpY2FudCAvIDQpO1xuICBjb25zdCByZW1haW5kZXIgPSBzaWduaWZpY2FudCAlIDQ7XG4gIHJldHVybiBncm91cHMgKiAzICsgKHJlbWFpbmRlciA9PT0gMiA/IDEgOiByZW1haW5kZXIgPT09IDMgPyAyIDogMCk7XG59O1xuXG4vLyBCdWZmZXIuYnl0ZUxlbmd0aChib2R5LCAnYmFzZTY0JykgdXNlcyB0aGUgcmF3IHN0cmluZyBsZW5ndGggYXMgYW4gYWxsb2NhdGlvblxuLy8gdXBwZXIgYm91bmQgZXZlbiB3aGVuIEJ1ZmZlci5mcm9tIGxhdGVyIGlnbm9yZXMgY2hhcmFjdGVycyBvciBzdG9wcyBhdCAnPScuXG5jb25zdCBlc3RpbWF0ZUJhc2U2NEJ1ZmZlckFsbG9jYXRpb24gPSAoYm9keSkgPT4ge1xuICBjb25zdCBsZW4gPSBib2R5Lmxlbmd0aDtcbiAgbGV0IHBhZGRpbmcgPSAwO1xuXG4gIGlmIChsZW4gPiAwICYmIGJvZHkuY2hhckNvZGVBdChsZW4gLSAxKSA9PT0gNjEgLyogJz0nICovKSB7XG4gICAgcGFkZGluZysrO1xuXG4gICAgaWYgKGxlbiA+IDEgJiYgYm9keS5jaGFyQ29kZUF0KGxlbiAtIDIpID09PSA2MSAvKiAnPScgKi8pIHtcbiAgICAgIHBhZGRpbmcrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0aC5mbG9vcigoKGxlbiAtIHBhZGRpbmcpICogMykgLyA0KTtcbn07XG5cbmNvbnN0IGVzdGltYXRlUGVyY2VudERlY29kZWRCYXNlNjRCeXRlcyA9IChib2R5KSA9PiB7XG4gIGNvbnN0IGxlbiA9IGJvZHkubGVuZ3RoO1xuICBsZXQgc2lnbmlmaWNhbnQgPSAwO1xuICBsZXQgcGFkZGluZyA9IDA7XG4gIGxldCBpbnZhbGlkID0gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGxldCBjb2RlID0gYm9keS5jaGFyQ29kZUF0KGkpO1xuXG4gICAgaWYgKGNvZGUgPT09IDM3IC8qICclJyAqLyAmJiBpc1BlcmNlbnRFbmNvZGVkQnl0ZShib2R5LCBpLCBsZW4pKSB7XG4gICAgICBjb2RlID0gaGV4VmFsdWUoYm9keS5jaGFyQ29kZUF0KGkgKyAxKSkgKiAxNiArIGhleFZhbHVlKGJvZHkuY2hhckNvZGVBdChpICsgMikpO1xuICAgICAgaSArPSAyO1xuICAgIH1cblxuICAgIGlmIChpc0Jhc2U2NFdoaXRlc3BhY2UoY29kZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2MSAvKiAnPScgKi8pIHtcbiAgICAgIHBhZGRpbmcrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghaXNCYXNlNjRDaGFyKGNvZGUpIHx8IHBhZGRpbmcgPiAwKSB7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50Kys7XG4gIH1cblxuICAvLyBGZXRjaCByZWplY3RzIG1hbGZvcm1lZCBmb3JnaXZpbmctYmFzZTY0IGlucHV0LiBSZXR1cm5pbmcgdGhlIHJhdy1zaXplXG4gIC8vIGFsbG9jYXRpb24gYm91bmQga2VlcHMgdGhhdCBpbnZhbGlkIGlucHV0IGZyb20gYmVjb21pbmcgYSBwcmUtY2hlY2sgYnlwYXNzLlxuICBpZiAoXG4gICAgaW52YWxpZCB8fFxuICAgIHBhZGRpbmcgPiAyIHx8XG4gICAgKHBhZGRpbmcgPiAwICYmIChzaWduaWZpY2FudCArIHBhZGRpbmcpICUgNCAhPT0gMCkgfHxcbiAgICBzaWduaWZpY2FudCAlIDQgPT09IDFcbiAgKSB7XG4gICAgcmV0dXJuIGVzdGltYXRlQmFzZTY0QnVmZmVyQWxsb2NhdGlvbihib2R5KTtcbiAgfVxuXG4gIHJldHVybiBiYXNlNjRCeXRlcyhzaWduaWZpY2FudCk7XG59O1xuXG5jb25zdCBlc3RpbWF0ZURhdGFVUkxCeXRlcyA9ICh1cmwsIGVzdGltYXRlQmFzZTY0KSA9PiB7XG4gIGlmICghdXJsIHx8IHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSByZXR1cm4gMDtcbiAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnZGF0YTonKSkgcmV0dXJuIDA7XG5cbiAgY29uc3QgY29tbWEgPSB1cmwuaW5kZXhPZignLCcpO1xuICBpZiAoY29tbWEgPCAwKSByZXR1cm4gMDtcblxuICBjb25zdCBtZXRhID0gdXJsLnNsaWNlKDUsIGNvbW1hKTtcbiAgY29uc3QgYm9keSA9IHVybC5zbGljZShjb21tYSArIDEpO1xuICBjb25zdCBpc0Jhc2U2NCA9IC87YmFzZTY0L2kudGVzdChtZXRhKTtcblxuICBpZiAoaXNCYXNlNjQpIHtcbiAgICByZXR1cm4gZXN0aW1hdGVCYXNlNjQoYm9keSk7XG4gIH1cblxuICAvLyBDb21wdXRlIFVURi04IGJ5dGUgbGVuZ3RoIGRpcmVjdGx5IGZyb20gVVRGLTE2IGNvZGUgdW5pdHMgd2l0aG91dCBhbGxvY2F0aW5nXG4gIC8vIGEgYnl0ZSBidWZmZXIgKFRleHRFbmNvZGVyLmVuY29kZSB3b3VsZCBkZWZlYXQgdGhlIERvUyBndWFyZCBvbiBsYXJnZSBib2RpZXMpLlxuICAvLyBWYWxpZCAlWFggdHJpcGxldHMgY291bnQgYXMgb25lIGRlY29kZWQgYnl0ZTsgdGhpcyBtYXRjaGVzIHRoZSBieXRlcyB0aGF0XG4gIC8vIGRlY29kZVVSSUNvbXBvbmVudChib2R5KSB3b3VsZCBwcm9kdWNlIGJlZm9yZSBCdWZmZXIgcmUtZW5jb2RlcyB0aGUgc3RyaW5nLlxuICBsZXQgYnl0ZXMgPSAwO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYm9keS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGMgPSBib2R5LmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGMgPT09IDM3IC8qICclJyAqLyAmJiBpc1BlcmNlbnRFbmNvZGVkQnl0ZShib2R5LCBpLCBsZW4pKSB7XG4gICAgICBieXRlcyArPSAxO1xuICAgICAgaSArPSAyO1xuICAgIH0gZWxzZSBpZiAoYyA8IDB4ODApIHtcbiAgICAgIGJ5dGVzICs9IDE7XG4gICAgfSBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgIGJ5dGVzICs9IDI7XG4gICAgfSBlbHNlIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZiAmJiBpICsgMSA8IGxlbikge1xuICAgICAgY29uc3QgbmV4dCA9IGJvZHkuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICBpZiAobmV4dCA+PSAweGRjMDAgJiYgbmV4dCA8PSAweGRmZmYpIHtcbiAgICAgICAgYnl0ZXMgKz0gNDtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnl0ZXMgKz0gMztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYnl0ZXMgKz0gMztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVzO1xufTtcblxuLyoqXG4gKiBFc3RpbWF0ZSB0aGUgcGVyY2VudC1kZWNvZGVkIHBheWxvYWQgc2l6ZSB1c2VkIGJ5IEZldGNoIGRhdGE6IFVSTHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXN0aW1hdGVEYXRhVVJMRGVjb2RlZEJ5dGVzKHVybCkge1xuICAvLyBGZXRjaCByZW1vdmVzIFVSTCBmcmFnbWVudHMgYmVmb3JlIHByb2Nlc3NpbmcgYSBkYXRhOiBVUkwuXG4gIGNvbnN0IGZyYWdtZW50SW5kZXggPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IHVybC5pbmRleE9mKCcjJykgOiAtMTtcblxuICByZXR1cm4gZXN0aW1hdGVEYXRhVVJMQnl0ZXMoXG4gICAgZnJhZ21lbnRJbmRleCA9PT0gLTEgPyB1cmwgOiB1cmwuc2xpY2UoMCwgZnJhZ21lbnRJbmRleCksXG4gICAgZXN0aW1hdGVQZXJjZW50RGVjb2RlZEJhc2U2NEJ5dGVzXG4gICk7XG59XG5cbi8qKlxuICogRXN0aW1hdGUgdGhlIEJ1ZmZlciBiYWNraW5nIGFsbG9jYXRpb24gdXNlZCBieSBOb2RlJ3MgcmF3IGJhc2U2NCBkZWNvZGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZURhdGFVUkxCdWZmZXJBbGxvY2F0aW9uKHVybCkge1xuICByZXR1cm4gZXN0aW1hdGVEYXRhVVJMQnl0ZXModXJsLCBlc3RpbWF0ZUJhc2U2NEJ1ZmZlckFsbG9jYXRpb24pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB7IERFRkFVTFRfRk9STV9EQVRBX01BWF9ERVBUSCB9IGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5cbmNvbnN0IE1BWF9ERVBUSCA9IERFRkFVTFRfRk9STV9EQVRBX01BWF9ERVBUSDtcblxuZnVuY3Rpb24gdGhyb3dJZkRlcHRoRXhjZWVkZWQoaW5kZXgpIHtcbiAgaWYgKGluZGV4ID4gTUFYX0RFUFRIKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAnRm9ybURhdGEgZmllbGQgaXMgdG9vIGRlZXBseSBuZXN0ZWQgKCcgKyBpbmRleCArICcgbGV2ZWxzKS4gTWF4IGRlcHRoOiAnICsgTUFYX0RFUFRILFxuICAgICAgQXhpb3NFcnJvci5FUlJfRk9STV9EQVRBX0RFUFRIX0VYQ0VFREVEXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nIGxpa2UgYGZvb1t4XVt5XVt6XWAgYW5kIHJldHVybnMgYW4gYXJyYXkgbGlrZSBgWydmb28nLCAneCcsICd5JywgJ3onXVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBzdHJpbmdzLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb3BQYXRoKG5hbWUpIHtcbiAgLy8gZm9vW3hdW3ldW3pdIC0+IFsnZm9vJywgJ3gnLCAneScsICd6J11cbiAgLy8gZm9vLngueS56ICAgIC0+IFsnZm9vJywgJ3gnLCAneScsICd6J11cbiAgLy8gQSBwYXRoIGlzIHNwbGl0IG9uIGAuYCBhbmQgb24gYFsuLi5dYCBncm91cHMuIEEgc2VnbWVudCDigJQgd2hldGhlciB3cml0dGVuXG4gIC8vIGluIGRvdCBub3RhdGlvbiBvciBjYXB0dXJlZCBpbnNpZGUgYnJhY2tldHMg4oCUIG1heSBjb250YWluIGFueSBjaGFyYWN0ZXJcbiAgLy8gZXhjZXB0IGAuYCwgYFtgIGFuZCBgXWAsIHNvIGEga2V5IGxpa2UgYHVzZXItbmFtZWAgb3IgYHVzZXIgbmFtZWAgaXMga2VwdFxuICAvLyBsaXRlcmFsIGluc3RlYWQgb2YgYmVpbmcgc3BsaXQgKCM1NDAyKS4gYC5gLCBgW2AgYW5kIGBdYCBrZWVwIHRoZWlyIGV4aXN0aW5nXG4gIC8vIG1lYW5pbmcsIGUuZy4gYGZvb1tiYXIuYmF6XWAgLT4gWydmb28nLCAnYmFyJywgJ2JheiddIGFuZCBgW11gIGlzIGFuIGFycmF5IHB1c2guXG4gIC8vIEV4Y2x1ZGluZyBgW2AgZnJvbSB0aGUgYnJhY2tldCBncm91cCBhbHNvIG1ha2VzIHRoZSBtYXRjaCBmYWlsIGZhc3QgYXQgdGhlXG4gIC8vIG5leHQgYFtgLCBzbyBhIG1hbGZvcm1lZCBuYW1lIGNhbm5vdCByZXNjYW4gdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nIGZyb21cbiAgLy8gZXZlcnkgdW5tYXRjaGVkIGBbYCDigJQgcGFyc2luZyBzdGF5cyBsaW5lYXIgaW4gdGhlIGxlbmd0aCBvZiB0aGUgbmFtZS5cbiAgY29uc3QgcGF0aCA9IFtdO1xuICBjb25zdCBwYXR0ZXJuID0gL1teLltcXF1dK3xcXFsoW14uW1xcXV0qKV0vZztcbiAgbGV0IG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobmFtZSkpICE9PSBudWxsKSB7XG4gICAgdGhyb3dJZkRlcHRoRXhjZWVkZWQocGF0aC5sZW5ndGgpO1xuICAgIHBhdGgucHVzaChtYXRjaFswXSA9PT0gJ1tdJyA/ICcnIDogbWF0Y2hbMV0gfHwgbWF0Y2hbMF0pO1xuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY29udmVydCB0byBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhbmQgdmFsdWVzIGFzIHRoZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnIpIHtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcnIpO1xuICBsZXQgaTtcbiAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gIGxldCBrZXk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgb2JqW2tleV0gPSBhcnJba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgRm9ybURhdGEgb2JqZWN0IGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgVGhlIEZvcm1EYXRhIG9iamVjdCB0byBjb252ZXJ0IHRvIEpTT04uXG4gKlxuICogQHJldHVybnMge09iamVjdDxzdHJpbmcsIGFueT4gfCBudWxsfSBUaGUgY29udmVydGVkIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZm9ybURhdGFUb0pTT04oZm9ybURhdGEpIHtcbiAgZnVuY3Rpb24gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXQsIGluZGV4KSB7XG4gICAgdGhyb3dJZkRlcHRoRXhjZWVkZWQoaW5kZXgpO1xuXG4gICAgbGV0IG5hbWUgPSBwYXRoW2luZGV4KytdO1xuXG4gICAgaWYgKG5hbWUgPT09ICdfX3Byb3RvX18nKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGlzTnVtZXJpY0tleSA9IE51bWJlci5pc0Zpbml0ZSgrbmFtZSk7XG4gICAgY29uc3QgaXNMYXN0ID0gaW5kZXggPj0gcGF0aC5sZW5ndGg7XG4gICAgbmFtZSA9ICFuYW1lICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldC5sZW5ndGggOiBuYW1lO1xuXG4gICAgaWYgKGlzTGFzdCkge1xuICAgICAgaWYgKHV0aWxzLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSkge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSB1dGlscy5pc0FycmF5KHRhcmdldFtuYW1lXSlcbiAgICAgICAgICA/IHRhcmdldFtuYW1lXS5jb25jYXQodmFsdWUpXG4gICAgICAgICAgOiBbdGFyZ2V0W25hbWVdLCB2YWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlscy5oYXNPd25Qcm9wKHRhcmdldCwgbmFtZSkgfHwgIXV0aWxzLmlzT2JqZWN0KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0W25hbWVdLCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0ICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gYXJyYXlUb09iamVjdCh0YXJnZXRbbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZm9ybURhdGEpICYmIHV0aWxzLmlzRnVuY3Rpb24oZm9ybURhdGEuZW50cmllcykpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2hFbnRyeShmb3JtRGF0YSwgKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBidWlsZFBhdGgocGFyc2VQcm9wUGF0aChuYW1lKSwgdmFsdWUsIG9iaiwgMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1EYXRhVG9KU09OO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZCtcXC0uXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiB1dGlscy5pc09iamVjdChwYXlsb2FkKSAmJiBwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZTtcbn1cbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudlxuICA/ICgob3JpZ2luLCBpc01TSUUpID0+ICh1cmwpID0+IHtcbiAgICAgIHVybCA9IG5ldyBVUkwodXJsLCBwbGF0Zm9ybS5vcmlnaW4pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBvcmlnaW4ucHJvdG9jb2wgPT09IHVybC5wcm90b2NvbCAmJlxuICAgICAgICBvcmlnaW4uaG9zdCA9PT0gdXJsLmhvc3QgJiZcbiAgICAgICAgKGlzTVNJRSB8fCBvcmlnaW4ucG9ydCA9PT0gdXJsLnBvcnQpXG4gICAgICApO1xuICAgIH0pKFxuICAgICAgbmV3IFVSTChwbGF0Zm9ybS5vcmlnaW4pLFxuICAgICAgcGxhdGZvcm0ubmF2aWdhdG9yICYmIC8obXNpZXx0cmlkZW50KS9pLnRlc3QocGxhdGZvcm0ubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICApXG4gIDogKCkgPT4gdHJ1ZTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzdHJpY3RcbmV4cG9ydCBkZWZhdWx0IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8vIFJhd0F4aW9zSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbmNvbnN0IGlnbm9yZUR1cGxpY2F0ZU9mID0gdXRpbHMudG9PYmplY3RTZXQoW1xuICAnYWdlJyxcbiAgJ2F1dGhvcml6YXRpb24nLFxuICAnY29udGVudC1sZW5ndGgnLFxuICAnY29udGVudC10eXBlJyxcbiAgJ2V0YWcnLFxuICAnZXhwaXJlcycsXG4gICdmcm9tJyxcbiAgJ2hvc3QnLFxuICAnaWYtbW9kaWZpZWQtc2luY2UnLFxuICAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJyxcbiAgJ2xvY2F0aW9uJyxcbiAgJ21heC1mb3J3YXJkcycsXG4gICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLFxuICAncmV0cnktYWZ0ZXInLFxuICAndXNlci1hZ2VudCcsXG5dKTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhd0hlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChyYXdIZWFkZXJzKSA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQga2V5O1xuICBsZXQgdmFsO1xuICBsZXQgaTtcblxuICByYXdIZWFkZXJzICYmXG4gICAgcmF3SGVhZGVycy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgICAga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YWwgPSBsaW5lLnN1YnN0cmluZyhpICsgMSkudHJpbSgpO1xuXG4gICAgICBjb25zdCBoYXNLZXkgPSB1dGlscy5oYXNPd25Qcm9wKHBhcnNlZCwga2V5KTtcblxuICAgICAgaWYgKCFrZXkgfHwgKGhhc0tleSAmJiB1dGlscy5oYXNPd25Qcm9wKGlnbm9yZUR1cGxpY2F0ZU9mLCBrZXkpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBpZiAoaGFzS2V5KSB7XG4gICAgICAgICAgcGFyc2VkW2tleV0ucHVzaCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlZFtrZXldID0gW3ZhbF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gaGFzS2V5ID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVByb3RvY29sKHVybCkge1xuICBjb25zdCBtYXRjaCA9IC9eKFstK1xcd117MSwyNX0pOig/OlxcL1xcLyk/Ly5leGVjKHVybCk7XG4gIHJldHVybiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHx8ICcnO1xufVxuIiwiaW1wb3J0IHNwZWVkb21ldGVyIGZyb20gJy4vc3BlZWRvbWV0ZXIuanMnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vdGhyb3R0bGUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzRXZlbnRSZWR1Y2VyID0gKGxpc3RlbmVyLCBpc0Rvd25sb2FkU3RyZWFtLCBmcmVxID0gMykgPT4ge1xuICBsZXQgYnl0ZXNOb3RpZmllZCA9IDA7XG4gIGNvbnN0IF9zcGVlZG9tZXRlciA9IHNwZWVkb21ldGVyKDUwLCAyNTApO1xuXG4gIHJldHVybiB0aHJvdHRsZSgoZSkgPT4ge1xuICAgIGlmICghZSB8fCB0eXBlb2YgZS5sb2FkZWQgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhd0xvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBsb2FkZWQgPSBNYXRoLm1heCgwLCB0b3RhbCAhPSBudWxsID8gTWF0aC5taW4ocmF3TG9hZGVkLCB0b3RhbCkgOiByYXdMb2FkZWQpO1xuICAgIGNvbnN0IHByb2dyZXNzQnl0ZXMgPSBNYXRoLm1heCgwLCBsb2FkZWQgLSBieXRlc05vdGlmaWVkKTtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuXG4gICAgYnl0ZXNOb3RpZmllZCA9IE1hdGgubWF4KGJ5dGVzTm90aWZpZWQsIGxvYWRlZCk7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbG9hZGVkLFxuICAgICAgdG90YWwsXG4gICAgICBwcm9ncmVzczogdG90YWwgPyBsb2FkZWQgLyB0b3RhbCA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgPyAodG90YWwgLSBsb2FkZWQpIC8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGV2ZW50OiBlLFxuICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogdG90YWwgIT0gbnVsbCxcbiAgICAgIFtpc0Rvd25sb2FkU3RyZWFtID8gJ2Rvd25sb2FkJyA6ICd1cGxvYWQnXTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIoZGF0YSk7XG4gIH0sIGZyZXEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzRXZlbnREZWNvcmF0b3IgPSAodG90YWwsIHRocm90dGxlZCkgPT4ge1xuICBjb25zdCBsZW5ndGhDb21wdXRhYmxlID0gdG90YWwgIT0gbnVsbDtcblxuICByZXR1cm4gW1xuICAgIChsb2FkZWQpID0+XG4gICAgICB0aHJvdHRsZWRbMF0oe1xuICAgICAgICBsZW5ndGhDb21wdXRhYmxlLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgbG9hZGVkLFxuICAgICAgfSksXG4gICAgdGhyb3R0bGVkWzFdLFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGFzeW5jRGVjb3JhdG9yID1cbiAgKGZuLCBzY2hlZHVsZXIgPSB1dGlscy5hc2FwKSA9PlxuICAoLi4uYXJncykgPT5cbiAgICBzY2hlZHVsZXIoKCkgPT4gZm4oLi4uYXJncykpO1xuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IGlzVVJMU2FtZU9yaWdpbiBmcm9tICcuL2lzVVJMU2FtZU9yaWdpbi5qcyc7XG5pbXBvcnQgY29va2llcyBmcm9tICcuL2Nvb2tpZXMuanMnO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi4vY29yZS9idWlsZEZ1bGxQYXRoLmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuLi9jb3JlL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IHNldEZvcm1EYXRhSGVhZGVycyBmcm9tICcuLi9jb3JlL3NldEZvcm1EYXRhSGVhZGVycy5qcyc7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi9idWlsZFVSTC5qcyc7XG5cbi8qKlxuICogRW5jb2RlIGEgVVRGLTggc3RyaW5nIHRvIGEgTGF0aW4tMSBieXRlIHN0cmluZyBmb3IgdXNlIHdpdGggYnRvYSgpLlxuICogVGhpcyBpcyBhIG1vZGVybiByZXBsYWNlbWVudCBmb3IgdGhlIGRlcHJlY2F0ZWQgdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpIHBhdHRlcm4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFVURi04IGJ5dGVzIGFzIGEgTGF0aW4tMSBzdHJpbmdcbiAqL1xuY29uc3QgZW5jb2RlVVRGOCA9IChzdHIpID0+XG4gIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2dpLCAoXywgaGV4KSA9PlxuICAgIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpXG4gICk7XG5cbmZ1bmN0aW9uIHJlc29sdmVDb25maWcoY29uZmlnKSB7XG4gIGNvbnN0IG5ld0NvbmZpZyA9IG1lcmdlQ29uZmlnKHt9LCBjb25maWcpO1xuXG4gIC8vIFJlYWQgb25seSBvd24gcHJvcGVydGllcyB0byBwcmV2ZW50IHByb3RvdHlwZSBwb2xsdXRpb24gZ2FkZ2V0c1xuICAvLyAoZS5nLiBPYmplY3QucHJvdG90eXBlLmJhc2VVUkwgPSAnaHR0cHM6Ly9ldmlsLmNvbScpLlxuICBjb25zdCBvd24gPSAoa2V5KSA9PiAodXRpbHMuaGFzT3duUHJvcChuZXdDb25maWcsIGtleSkgPyBuZXdDb25maWdba2V5XSA6IHVuZGVmaW5lZCk7XG5cbiAgY29uc3QgZGF0YSA9IG93bignZGF0YScpO1xuICBsZXQgd2l0aFhTUkZUb2tlbiA9IG93bignd2l0aFhTUkZUb2tlbicpO1xuICBjb25zdCB4c3JmSGVhZGVyTmFtZSA9IG93bigneHNyZkhlYWRlck5hbWUnKTtcbiAgY29uc3QgeHNyZkNvb2tpZU5hbWUgPSBvd24oJ3hzcmZDb29raWVOYW1lJyk7XG4gIGxldCBoZWFkZXJzID0gb3duKCdoZWFkZXJzJyk7XG4gIGNvbnN0IGF1dGggPSBvd24oJ2F1dGgnKTtcbiAgY29uc3QgYmFzZVVSTCA9IG93bignYmFzZVVSTCcpO1xuICBjb25zdCBhbGxvd0Fic29sdXRlVXJscyA9IG93bignYWxsb3dBYnNvbHV0ZVVybHMnKTtcbiAgY29uc3QgdXJsID0gb3duKCd1cmwnKTtcblxuICBuZXdDb25maWcuaGVhZGVycyA9IGhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShoZWFkZXJzKTtcblxuICBuZXdDb25maWcudXJsID0gYnVpbGRVUkwoXG4gICAgYnVpbGRGdWxsUGF0aChiYXNlVVJMLCB1cmwsIGFsbG93QWJzb2x1dGVVcmxzLCBuZXdDb25maWcpLFxuICAgIG93bigncGFyYW1zJyksXG4gICAgb3duKCdwYXJhbXNTZXJpYWxpemVyJylcbiAgKTtcblxuICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gIGlmIChhdXRoKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB1dGlscy5nZXRTYWZlUHJvcChhdXRoLCAndXNlcm5hbWUnKSB8fCAnJztcbiAgICBjb25zdCBwYXNzd29yZCA9IHV0aWxzLmdldFNhZmVQcm9wKGF1dGgsICdwYXNzd29yZCcpIHx8ICcnO1xuXG4gICAgdHJ5IHtcbiAgICAgIGhlYWRlcnMuc2V0KFxuICAgICAgICAnQXV0aG9yaXphdGlvbicsXG4gICAgICAgICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIChwYXNzd29yZCA/IGVuY29kZVVURjgocGFzc3dvcmQpIDogJycpKVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZSwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSwgY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSkge1xuICAgIGlmIChcbiAgICAgIHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiB8fFxuICAgICAgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52IHx8XG4gICAgICB1dGlscy5pc1JlYWN0TmF0aXZlKGRhdGEpXG4gICAgKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKHVuZGVmaW5lZCk7IC8vIGJyb3dzZXIvd2ViIHdvcmtlci9STiBoYW5kbGVzIGl0XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRhdGEuZ2V0SGVhZGVycykpIHtcbiAgICAgIC8vIE5vZGUuanMgRm9ybURhdGEgKGxpa2UgZm9ybS1kYXRhIHBhY2thZ2UpXG4gICAgICBzZXRGb3JtRGF0YUhlYWRlcnMoaGVhZGVycywgZGF0YS5nZXRIZWFkZXJzKCksIG93bignZm9ybURhdGFIZWFkZXJQb2xpY3knKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuXG4gIGlmIChwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYpIHtcbiAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih3aXRoWFNSRlRva2VuKSkge1xuICAgICAgd2l0aFhTUkZUb2tlbiA9IHdpdGhYU1JGVG9rZW4obmV3Q29uZmlnKTtcbiAgICB9XG5cbiAgICAvLyBTdHJpY3QgYm9vbGVhbiBjaGVjayDigJQgcHJldmVudHMgcHJvdG8tcG9sbHV0aW9uIGdhZGdldHMgKGUuZy4gT2JqZWN0LnByb3RvdHlwZS53aXRoWFNSRlRva2VuID0gMSlcbiAgICAvLyBhbmQgbWlzY29uZmlndXJhdGlvbnMgKGUuZy4gXCJmYWxzZVwiKSBmcm9tIHNob3J0LWNpcmN1aXRpbmcgdGhlIHNhbWUtb3JpZ2luIGNoZWNrIGFuZCBsZWFraW5nXG4gICAgLy8gdGhlIFhTUkYgdG9rZW4gY3Jvc3Mtb3JpZ2luLlxuICAgIGNvbnN0IHNob3VsZFNlbmRYU1JGID1cbiAgICAgIHdpdGhYU1JGVG9rZW4gPT09IHRydWUgfHwgKHdpdGhYU1JGVG9rZW4gPT0gbnVsbCAmJiBpc1VSTFNhbWVPcmlnaW4obmV3Q29uZmlnLnVybCkpO1xuXG4gICAgaWYgKHNob3VsZFNlbmRYU1JGKSB7XG4gICAgICBjb25zdCB4c3JmVmFsdWUgPSB4c3JmSGVhZGVyTmFtZSAmJiB4c3JmQ29va2llTmFtZSAmJiBjb29raWVzLnJlYWQoeHNyZkNvb2tpZU5hbWUpO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIGhlYWRlcnMuc2V0KHhzcmZIZWFkZXJOYW1lLCB4c3JmVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdDb25maWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVDb25maWc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmZ1bmN0aW9uIHRyaW1TUG9ySFRBQihzdHIpIHtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgbGV0IGVuZCA9IHN0ci5sZW5ndGg7XG5cbiAgd2hpbGUgKHN0YXJ0IDwgZW5kKSB7XG4gICAgY29uc3QgY29kZSA9IHN0ci5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICAgIGlmIChjb2RlICE9PSAweDA5ICYmIGNvZGUgIT09IDB4MjApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXJ0ICs9IDE7XG4gIH1cblxuICB3aGlsZSAoZW5kID4gc3RhcnQpIHtcbiAgICBjb25zdCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoZW5kIC0gMSk7XG5cbiAgICBpZiAoY29kZSAhPT0gMHgwOSAmJiBjb2RlICE9PSAweDIwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbmQgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBzdGFydCA9PT0gMCAmJiBlbmQgPT09IHN0ci5sZW5ndGggPyBzdHIgOiBzdHIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFRoZSBjb250cm9sLWNvZGUgcmFuZ2VzIGFyZSBpbnRlbnRpb25hbDogaGVhZGVyIHNhbml0aXphdGlvbiBzdHJpcHMgQzAvREVMIGJ5dGVzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IElOVkFMSURfVU5JQ09ERV9IRUFERVJfVkFMVUVfQ0hBUlMgPSBuZXcgUmVnRXhwKCdbXFxcXHUwMDAwLVxcXFx1MDAwOFxcXFx1MDAwYS1cXFxcdTAwMWZcXFxcdTAwN2ZdKycsICdnJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxuY29uc3QgSU5WQUxJRF9CWVRFX1NUUklOR19IRUFERVJfVkFMVUVfQ0hBUlMgPSBuZXcgUmVnRXhwKCdbXlxcXFx1MDAwOVxcXFx1MDAyMC1cXFxcdTAwN2VcXFxcdTAwODAtXFxcXHUwMGZmXSsnLCAnZycpO1xuXG5mdW5jdGlvbiBzYW5pdGl6ZVZhbHVlKHZhbHVlLCBpbnZhbGlkQ2hhcnMpIHtcbiAgaWYgKHV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcCgoaXRlbSkgPT4gc2FuaXRpemVWYWx1ZShpdGVtLCBpbnZhbGlkQ2hhcnMpKTtcbiAgfVxuXG4gIHJldHVybiB0cmltU1BvckhUQUIoU3RyaW5nKHZhbHVlKS5yZXBsYWNlKGludmFsaWRDaGFycywgJycpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNhbml0aXplSGVhZGVyVmFsdWUgPSAodmFsdWUpID0+XG4gIHNhbml0aXplVmFsdWUodmFsdWUsIElOVkFMSURfVU5JQ09ERV9IRUFERVJfVkFMVUVfQ0hBUlMpO1xuXG5leHBvcnQgY29uc3Qgc2FuaXRpemVCeXRlU3RyaW5nSGVhZGVyVmFsdWUgPSAodmFsdWUpID0+XG4gIHNhbml0aXplVmFsdWUodmFsdWUsIElOVkFMSURfQllURV9TVFJJTkdfSEVBREVSX1ZBTFVFX0NIQVJTKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvQnl0ZVN0cmluZ0hlYWRlck9iamVjdChoZWFkZXJzKSB7XG4gIGNvbnN0IGJ5dGVTdHJpbmdIZWFkZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMudG9KU09OKCksICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgYnl0ZVN0cmluZ0hlYWRlcnNbaGVhZGVyXSA9IHNhbml0aXplQnl0ZVN0cmluZ0hlYWRlclZhbHVlKHZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ5dGVTdHJpbmdIZWFkZXJzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBkYXRhIG1heFJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2FtcGxlc0NvdW50PSAxMF1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPSAxMDAwXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBzcGVlZG9tZXRlcihzYW1wbGVzQ291bnQsIG1pbikge1xuICBzYW1wbGVzQ291bnQgPSBzYW1wbGVzQ291bnQgfHwgMTA7XG4gIGNvbnN0IGJ5dGVzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgbGV0IGhlYWQgPSAwO1xuICBsZXQgdGFpbCA9IDA7XG4gIGxldCBmaXJzdFNhbXBsZVRTO1xuXG4gIG1pbiA9IG1pbiAhPT0gdW5kZWZpbmVkID8gbWluIDogMTAwMDtcblxuICByZXR1cm4gZnVuY3Rpb24gcHVzaChjaHVua0xlbmd0aCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBjb25zdCBzdGFydGVkQXQgPSB0aW1lc3RhbXBzW3RhaWxdO1xuXG4gICAgaWYgKCFmaXJzdFNhbXBsZVRTKSB7XG4gICAgICBmaXJzdFNhbXBsZVRTID0gbm93O1xuICAgIH1cblxuICAgIGJ5dGVzW2hlYWRdID0gY2h1bmtMZW5ndGg7XG4gICAgdGltZXN0YW1wc1toZWFkXSA9IG5vdztcblxuICAgIGxldCBpID0gdGFpbDtcbiAgICBsZXQgYnl0ZXNDb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoaSAhPT0gaGVhZCkge1xuICAgICAgYnl0ZXNDb3VudCArPSBieXRlc1tpKytdO1xuICAgICAgaSA9IGkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaGVhZCA9IChoZWFkICsgMSkgJSBzYW1wbGVzQ291bnQ7XG5cbiAgICBpZiAoaGVhZCA9PT0gdGFpbCkge1xuICAgICAgdGFpbCA9ICh0YWlsICsgMSkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaWYgKG5vdyAtIGZpcnN0U2FtcGxlVFMgPCBtaW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXNzZWQgPSBzdGFydGVkQXQgJiYgbm93IC0gc3RhcnRlZEF0O1xuXG4gICAgcmV0dXJuIHBhc3NlZCA/IE1hdGgucm91bmQoKGJ5dGVzQ291bnQgKiAxMDAwKSAvIHBhc3NlZCkgOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWVkb21ldGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgY29uc3QgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufVxuIiwiLyoqXG4gKiBUaHJvdHRsZSBkZWNvcmF0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gZnJlcVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCBmcmVxKSB7XG4gIGxldCB0aW1lc3RhbXAgPSAwO1xuICBsZXQgdGhyZXNob2xkID0gMTAwMCAvIGZyZXE7XG4gIGxldCBsYXN0QXJncztcbiAgbGV0IHRpbWVyO1xuXG4gIGNvbnN0IGludm9rZSA9IChhcmdzLCBub3cgPSBEYXRlLm5vdygpKSA9PiB7XG4gICAgdGltZXN0YW1wID0gbm93O1xuICAgIGxhc3RBcmdzID0gbnVsbDtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICAgIGZuKC4uLmFyZ3MpO1xuICB9O1xuXG4gIGNvbnN0IHRocm90dGxlZCA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBwYXNzZWQgPSBub3cgLSB0aW1lc3RhbXA7XG4gICAgaWYgKHBhc3NlZCA+PSB0aHJlc2hvbGQpIHtcbiAgICAgIGludm9rZShhcmdzLCBub3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgICBpZiAoIXRpbWVyKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICAgIGludm9rZShsYXN0QXJncyk7XG4gICAgICAgIH0sIHRocmVzaG9sZCAtIHBhc3NlZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZsdXNoID0gKCkgPT4gbGFzdEFyZ3MgJiYgaW52b2tlKGxhc3RBcmdzKTtcblxuICByZXR1cm4gW3Rocm90dGxlZCwgZmx1c2hdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0aHJvdHRsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG4vLyB0ZW1wb3JhcnkgaG90Zml4IHRvIGF2b2lkIGNpcmN1bGFyIHJlZmVyZW5jZXMgdW50aWwgQXhpb3NVUkxTZWFyY2hQYXJhbXMgaXMgcmVmYWN0b3JlZFxuaW1wb3J0IFBsYXRmb3JtRm9ybURhdGEgZnJvbSAnLi4vcGxhdGZvcm0vbm9kZS9jbGFzc2VzL0Zvcm1EYXRhLmpzJztcbmltcG9ydCBQbGF0Zm9ybUJ1ZmZlciBmcm9tICcuLi9wbGF0Zm9ybS9ub2RlL2NsYXNzZXMvQnVmZmVyLmpzJztcblxuLy8gRGVmYXVsdCBuZXN0aW5nIGxpbWl0IHNoYXJlZCB3aXRoIHRoZSBpbnZlcnNlIHRyYW5zZm9ybSAoZm9ybURhdGFUb0pTT04pIHNvXG4vLyB0aGUgRm9ybURhdGEgPC0+IEpTT04gcm91bmQtdHJpcCBzdGF5cyBzeW1tZXRyaWMuXG5leHBvcnQgY29uc3QgREVGQVVMVF9GT1JNX0RBVEFfTUFYX0RFUFRIID0gMTAwO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIHRoaW5nIGlzIGEgYXJyYXkgb3IganMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aGluZyAtIFRoZSBvYmplY3Qgb3IgYXJyYXkgdG8gYmUgdmlzaXRlZC5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNWaXNpdGFibGUodGhpbmcpIHtcbiAgcmV0dXJuIHV0aWxzLmlzUGxhaW5PYmplY3QodGhpbmcpIHx8IHV0aWxzLmlzQXJyYXkodGhpbmcpO1xufVxuXG4vKipcbiAqIEl0IHJlbW92ZXMgdGhlIGJyYWNrZXRzIGZyb20gdGhlIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBwYXJhbWV0ZXIuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGtleSB3aXRob3V0IHRoZSBicmFja2V0cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQnJhY2tldHMoa2V5KSB7XG4gIHJldHVybiB1dGlscy5lbmRzV2l0aChrZXksICdbXScpID8ga2V5LnNsaWNlKDAsIC0yKSA6IGtleTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhdGgsIGEga2V5LCBhbmQgYSBib29sZWFuLCBhbmQgcmV0dXJucyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIGN1cnJlbnQgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZG90cyAtIElmIHRydWUsIHRoZSBrZXkgd2lsbCBiZSByZW5kZXJlZCB3aXRoIGRvdHMgaW5zdGVhZCBvZiBicmFja2V0cy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpIHtcbiAgaWYgKCFwYXRoKSByZXR1cm4ga2V5O1xuICByZXR1cm4gcGF0aFxuICAgIC5jb25jYXQoa2V5KVxuICAgIC5tYXAoZnVuY3Rpb24gZWFjaCh0b2tlbiwgaSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB0b2tlbiA9IHJlbW92ZUJyYWNrZXRzKHRva2VuKTtcbiAgICAgIHJldHVybiAhZG90cyAmJiBpID8gJ1snICsgdG9rZW4gKyAnXScgOiB0b2tlbjtcbiAgICB9KVxuICAgIC5qb2luKGRvdHMgPyAnLicgOiAnJyk7XG59XG5cbi8qKlxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xuICByZXR1cm4gdXRpbHMuaXNBcnJheShhcnIpICYmICFhcnIuc29tZShpc1Zpc2l0YWJsZSk7XG59XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSB1dGlscy50b0ZsYXRPYmplY3QodXRpbHMsIHt9LCBudWxsLCBmdW5jdGlvbiBmaWx0ZXIocHJvcCkge1xuICByZXR1cm4gL15pc1tBLVpdLy50ZXN0KHByb3ApO1xufSk7XG5cbi8qKlxuICogQ29udmVydCBhIGRhdGEgb2JqZWN0IHRvIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHs/T2JqZWN0fSBbZm9ybURhdGFdXG4gKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmlzaXRvcl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWV0YVRva2VucyA9IHRydWVdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRvdHMgPSBmYWxzZV1cbiAqIEBwYXJhbSB7P0Jvb2xlYW59IFtvcHRpb25zLmluZGV4ZXMgPSBmYWxzZV1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICoqL1xuXG4vKipcbiAqIEl0IGNvbnZlcnRzIGFuIG9iamVjdCBpbnRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gZm9ybSBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIC0gVGhlIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiB0b0Zvcm1EYXRhKG9iaiwgZm9ybURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBuZXcgKFBsYXRmb3JtRm9ybURhdGEgfHwgRm9ybURhdGEpKCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIG9wdGlvbnMgPSB1dGlscy50b0ZsYXRPYmplY3QoXG4gICAgb3B0aW9ucyxcbiAgICB7XG4gICAgICBtZXRhVG9rZW5zOiB0cnVlLFxuICAgICAgZG90czogZmFsc2UsXG4gICAgICBpbmRleGVzOiBmYWxzZSxcbiAgICB9LFxuICAgIGZhbHNlLFxuICAgIGZ1bmN0aW9uIGRlZmluZWQob3B0aW9uLCBzb3VyY2UpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICAgICAgcmV0dXJuICF1dGlscy5pc1VuZGVmaW5lZChzb3VyY2Vbb3B0aW9uXSk7XG4gICAgfVxuICApO1xuXG4gIGNvbnN0IG1ldGFUb2tlbnMgPSBvcHRpb25zLm1ldGFUb2tlbnM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBjb25zdCB2aXNpdG9yID0gb3B0aW9ucy52aXNpdG9yIHx8IGRlZmF1bHRWaXNpdG9yO1xuICBjb25zdCBkb3RzID0gb3B0aW9ucy5kb3RzO1xuICBjb25zdCBpbmRleGVzID0gb3B0aW9ucy5pbmRleGVzO1xuICBjb25zdCBfQmxvYiA9IG9wdGlvbnMuQmxvYiB8fCAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIEJsb2IpO1xuICBjb25zdCBtYXhEZXB0aCA9IG9wdGlvbnMubWF4RGVwdGggPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfRk9STV9EQVRBX01BWF9ERVBUSCA6IG9wdGlvbnMubWF4RGVwdGg7XG4gIGNvbnN0IHVzZUJsb2IgPSBfQmxvYiAmJiB1dGlscy5pc1NwZWNDb21wbGlhbnRGb3JtKGZvcm1EYXRhKTtcbiAgY29uc3Qgc3RhY2sgPSBbXTtcblxuICBpZiAoIXV0aWxzLmlzRnVuY3Rpb24odmlzaXRvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2aXNpdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gJyc7XG5cbiAgICBpZiAodXRpbHMuaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICghdXNlQmxvYiAmJiB1dGlscy5pc0Jsb2IodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcih2YWx1ZSkgfHwgdXRpbHMuaXNUeXBlZEFycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHVzZUJsb2IgJiYgdHlwZW9mIF9CbG9iID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0Jsb2IoW3ZhbHVlXSk7XG4gICAgICB9XG4gICAgICBpZiAoUGxhdGZvcm1CdWZmZXIgJiYgUGxhdGZvcm1CdWZmZXIuaXNCdWZmZXJBdmFpbGFibGUoKSkge1xuICAgICAgICByZXR1cm4gUGxhdGZvcm1CdWZmZXIuZnJvbSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nLCBBeGlvc0Vycm9yLkVSUl9OT1RfU1VQUE9SVCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gdGhyb3dJZk1heERlcHRoRXhjZWVkZWQoZGVwdGgpIHtcbiAgICBpZiAoZGVwdGggPiBtYXhEZXB0aCkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICdPYmplY3QgaXMgdG9vIGRlZXBseSBuZXN0ZWQgKCcgKyBkZXB0aCArICcgbGV2ZWxzKS4gTWF4IGRlcHRoOiAnICsgbWF4RGVwdGgsXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0ZPUk1fREFUQV9ERVBUSF9FWENFRURFRFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdpZnlXaXRoRGVwdGhMaW1pdCh2YWx1ZSwgZGVwdGgpIHtcbiAgICBpZiAobWF4RGVwdGggPT09IEluZmluaXR5KSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuY2VzdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiBsaW1pdERlcHRoKF9rZXksIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgaWYgKCF1dGlscy5pc09iamVjdChjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChhbmNlc3RvcnMubGVuZ3RoICYmIGFuY2VzdG9yc1thbmNlc3RvcnMubGVuZ3RoIC0gMV0gIT09IHRoaXMpIHtcbiAgICAgICAgYW5jZXN0b3JzLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBhbmNlc3RvcnMucHVzaChjdXJyZW50VmFsdWUpO1xuICAgICAgdGhyb3dJZk1heERlcHRoRXhjZWVkZWQoZGVwdGggKyBhbmNlc3RvcnMubGVuZ3RoIC0gMSk7XG5cbiAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB2aXNpdG9yLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0ga2V5XG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE51bWJlcj59IHBhdGhcbiAgICogQHRoaXMge0Zvcm1EYXRhfVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJuIHRydWUgdG8gdmlzaXQgdGhlIGVhY2ggcHJvcCBvZiB0aGUgdmFsdWUgcmVjdXJzaXZlbHlcbiAgICovXG4gIGZ1bmN0aW9uIGRlZmF1bHRWaXNpdG9yKHZhbHVlLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgYXJyID0gdmFsdWU7XG5cbiAgICBpZiAodXRpbHMuaXNSZWFjdE5hdGl2ZShmb3JtRGF0YSkgJiYgdXRpbHMuaXNSZWFjdE5hdGl2ZUJsb2IodmFsdWUpKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQocmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cyksIGNvbnZlcnRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSAmJiAhcGF0aCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAodXRpbHMuZW5kc1dpdGgoa2V5LCAne30nKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gbWV0YVRva2VucyA/IGtleSA6IGtleS5zbGljZSgwLCAtMik7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB2YWx1ZSA9IHN0cmluZ2lmeVdpdGhEZXB0aExpbWl0KHZhbHVlLCAxKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICh1dGlscy5pc0FycmF5KHZhbHVlKSAmJiBpc0ZsYXRBcnJheSh2YWx1ZSkpIHx8XG4gICAgICAgICgodXRpbHMuaXNGaWxlTGlzdCh2YWx1ZSkgfHwgdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSkgJiYgKGFyciA9IHV0aWxzLnRvQXJyYXkodmFsdWUpKSlcbiAgICAgICkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gcmVtb3ZlQnJhY2tldHMoa2V5KTtcblxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiBlYWNoKGVsLCBpbmRleCkge1xuICAgICAgICAgICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJlxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAgICAgaW5kZXhlcyA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gcmVuZGVyS2V5KFtrZXldLCBpbmRleCwgZG90cylcbiAgICAgICAgICAgICAgICA6IGluZGV4ZXMgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8ga2V5XG4gICAgICAgICAgICAgICAgICA6IGtleSArICdbXScsXG4gICAgICAgICAgICAgIGNvbnZlcnRWYWx1ZShlbClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmlzaXRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpLCBjb252ZXJ0VmFsdWUodmFsdWUpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV4cG9zZWRIZWxwZXJzID0gT2JqZWN0LmFzc2lnbihwcmVkaWNhdGVzLCB7XG4gICAgZGVmYXVsdFZpc2l0b3IsXG4gICAgY29udmVydFZhbHVlLFxuICAgIGlzVmlzaXRhYmxlLFxuICB9KTtcblxuICBmdW5jdGlvbiBidWlsZCh2YWx1ZSwgcGF0aCwgZGVwdGggPSAwKSB7XG4gICAgaWYgKHV0aWxzLmlzVW5kZWZpbmVkKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgdGhyb3dJZk1heERlcHRoRXhjZWVkZWQoZGVwdGgpO1xuXG4gICAgaWYgKHN0YWNrLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0ZWQgaW4gJyArIHBhdGguam9pbignLicpKTtcbiAgICB9XG5cbiAgICBzdGFjay5wdXNoKHZhbHVlKTtcblxuICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIGVhY2goZWwsIGtleSkge1xuICAgICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmXG4gICAgICAgIHZpc2l0b3IuY2FsbChmb3JtRGF0YSwgZWwsIHV0aWxzLmlzU3RyaW5nKGtleSkgPyBrZXkudHJpbSgpIDoga2V5LCBwYXRoLCBleHBvc2VkSGVscGVycyk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgYnVpbGQoZWwsIHBhdGggPyBwYXRoLmNvbmNhdChrZXkpIDogW2tleV0sIGRlcHRoICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RhdGEgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIGJ1aWxkKG9iaik7XG5cbiAgcmV0dXJuIGZvcm1EYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0Zvcm1EYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Gb3JtRGF0YShkYXRhLCBuZXcgcGxhdGZvcm0uY2xhc3Nlcy5VUkxTZWFyY2hQYXJhbXMoKSwge1xuICAgIHZpc2l0b3I6IGZ1bmN0aW9uICh2YWx1ZSwga2V5LCBwYXRoLCBoZWxwZXJzKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNOb2RlICYmIHV0aWxzLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlbHBlcnMuZGVmYXVsdFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IHN0cmVhbUNodW5rID0gZnVuY3Rpb24qIChjaHVuaywgY2h1bmtTaXplKSB7XG4gIGxldCBsZW4gPSBjaHVuay5ieXRlTGVuZ3RoO1xuXG4gIGlmICghY2h1bmtTaXplIHx8IGxlbiA8IGNodW5rU2l6ZSkge1xuICAgIHlpZWxkIGNodW5rO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBwb3MgPSAwO1xuICBsZXQgZW5kO1xuXG4gIHdoaWxlIChwb3MgPCBsZW4pIHtcbiAgICBlbmQgPSBwb3MgKyBjaHVua1NpemU7XG4gICAgeWllbGQgY2h1bmsuc2xpY2UocG9zLCBlbmQpO1xuICAgIHBvcyA9IGVuZDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlYWRCeXRlcyA9IGFzeW5jIGZ1bmN0aW9uKiAoaXRlcmFibGUsIGNodW5rU2l6ZSkge1xuICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlYWRTdHJlYW0oaXRlcmFibGUpKSB7XG4gICAgeWllbGQqIHN0cmVhbUNodW5rKGNodW5rLCBjaHVua1NpemUpO1xuICB9XG59O1xuXG5jb25zdCByZWFkU3RyZWFtID0gYXN5bmMgZnVuY3Rpb24qIChzdHJlYW0pIHtcbiAgaWYgKHN0cmVhbVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHtcbiAgICB5aWVsZCogc3RyZWFtO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgdHJ5IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgcmVhZGVyLmNhbmNlbCgpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdHJhY2tTdHJlYW0gPSAoc3RyZWFtLCBjaHVua1NpemUsIG9uUHJvZ3Jlc3MsIG9uRmluaXNoKSA9PiB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gcmVhZEJ5dGVzKHN0cmVhbSwgY2h1bmtTaXplKTtcblxuICBsZXQgYnl0ZXMgPSAwO1xuICBsZXQgZG9uZTtcbiAgbGV0IF9vbkZpbmlzaCA9IChlKSA9PiB7XG4gICAgaWYgKCFkb25lKSB7XG4gICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKGUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtKFxuICAgIHtcbiAgICAgIGFzeW5jIHB1bGwoY29udHJvbGxlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICBfb25GaW5pc2goKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgbGVuID0gdmFsdWUuYnl0ZUxlbmd0aDtcbiAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgbGV0IGxvYWRlZEJ5dGVzID0gKGJ5dGVzICs9IGxlbik7XG4gICAgICAgICAgICBvblByb2dyZXNzKGxvYWRlZEJ5dGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKG5ldyBVaW50OEFycmF5KHZhbHVlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9vbkZpbmlzaChlcnIpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNhbmNlbChyZWFzb24pIHtcbiAgICAgICAgX29uRmluaXNoKHJlYXNvbik7XG4gICAgICAgIHJldHVybiBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoaWdoV2F0ZXJNYXJrOiAyLFxuICAgIH1cbiAgKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaCgodHlwZSwgaSkgPT4ge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxuY29uc3QgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAoXG4gICAgICAnW0F4aW9zIHYnICtcbiAgICAgIFZFUlNJT04gK1xuICAgICAgXCJdIFRyYW5zaXRpb25hbCBvcHRpb24gJ1wiICtcbiAgICAgIG9wdCArXG4gICAgICBcIidcIiArXG4gICAgICBkZXNjICtcbiAgICAgIChtZXNzYWdlID8gJy4gJyArIG1lc3NhZ2UgOiAnJylcbiAgICApO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuICh2YWx1ZSwgb3B0LCBvcHRzKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSksXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0RFUFJFQ0FURURcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbnZhbGlkYXRvcnMuc3BlbGxpbmcgPSBmdW5jdGlvbiBzcGVsbGluZyhjb3JyZWN0U3BlbGxpbmcpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYCR7b3B0fSBpcyBsaWtlbHkgYSBtaXNzcGVsbGluZyBvZiAke2NvcnJlY3RTcGVsbGluZ31gKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQXNzZXJ0IG9iamVjdCdzIHByb3BlcnRpZXMgdHlwZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGFzc2VydE9wdGlvbnMob3B0aW9ucywgc2NoZW1hLCBhbGxvd1Vua25vd24pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcbiAgICAvLyBVc2UgaGFzT3duUHJvcGVydHkgc28gYSBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlLjxvcHQ+IGNhbm5vdCBzdXBwbHlcbiAgICAvLyBhIG5vbi1mdW5jdGlvbiB2YWxpZGF0b3IgYW5kIGNhdXNlIGEgVHlwZUVycm9yLlxuICAgIGNvbnN0IHZhbGlkYXRvciA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzY2hlbWEsIG9wdCkgPyBzY2hlbWFbb3B0XSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgICAnb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCxcbiAgICAgICAgICBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnMsXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iIDogbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyA/IEZvcm1EYXRhIDogbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgPyBVUkxTZWFyY2hQYXJhbXMgOiBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsImltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5pbXBvcnQgRm9ybURhdGEgZnJvbSAnLi9jbGFzc2VzL0Zvcm1EYXRhLmpzJztcbmltcG9ydCBCbG9iIGZyb20gJy4vY2xhc3Nlcy9CbG9iLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Jyb3dzZXI6IHRydWUsXG4gIGNsYXNzZXM6IHtcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgRm9ybURhdGEsXG4gICAgQmxvYixcbiAgfSxcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZmlsZScsICdibG9iJywgJ3VybCcsICdkYXRhJ10sXG59O1xuIiwiY29uc3QgaGFzQnJvd3NlckVudiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmNvbnN0IF9uYXZpZ2F0b3IgPSAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yKSB8fCB1bmRlZmluZWQ7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBoYXNTdGFuZGFyZEJyb3dzZXJFbnYgPVxuICBoYXNCcm93c2VyRW52ICYmXG4gICghX25hdmlnYXRvciB8fCBbJ1JlYWN0TmF0aXZlJywgJ05hdGl2ZVNjcmlwdCcsICdOUyddLmluZGV4T2YoX25hdmlnYXRvci5wcm9kdWN0KSA8IDApO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciB3ZWJXb3JrZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBBbHRob3VnaCB0aGUgYGlzU3RhbmRhcmRCcm93c2VyRW52YCBtZXRob2QgaW5kaWNhdGVzIHRoYXRcbiAqIGBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlcmAsIHRoZSBXZWJXb3JrZXIgd2lsbCBzdGlsbCBiZVxuICogZmlsdGVyZWQgb3V0IGR1ZSB0byBpdHMganVkZ21lbnQgc3RhbmRhcmRcbiAqIGB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnYC5cbiAqIFRoaXMgbGVhZHMgdG8gYSBwcm9ibGVtIHdoZW4gYXhpb3MgcG9zdCBgRm9ybURhdGFgIGluIHdlYldvcmtlclxuICovXG5jb25zdCBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYgPSAoKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUgJiZcbiAgICB0eXBlb2Ygc2VsZi5pbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nXG4gICk7XG59KSgpO1xuXG5jb25zdCBvcmlnaW4gPSAoaGFzQnJvd3NlckVudiAmJiB3aW5kb3cubG9jYXRpb24uaHJlZikgfHwgJ2h0dHA6Ly9sb2NhbGhvc3QnO1xuXG5leHBvcnQge1xuICBoYXNCcm93c2VyRW52LFxuICBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlckVudixcbiAgX25hdmlnYXRvciBhcyBuYXZpZ2F0b3IsXG4gIG9yaWdpbixcbn07XG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi9ub2RlL2luZGV4LmpzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi51dGlscyxcbiAgLi4ucGxhdGZvcm0sXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYmluZCBmcm9tICcuL2hlbHBlcnMvYmluZC5qcyc7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbmNvbnN0IHsgdG9TdHJpbmcgfSA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCB7IGdldFByb3RvdHlwZU9mIH0gPSBPYmplY3Q7XG5jb25zdCB7IGl0ZXJhdG9yLCB0b1N0cmluZ1RhZyB9ID0gU3ltYm9sO1xuXG4vKiBDcmVhdGluZyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBpZiBhbiBvYmplY3QgaGFzIGEgcHJvcGVydHkuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IChcbiAgKHsgaGFzT3duUHJvcGVydHkgfSkgPT5cbiAgKG9iaiwgcHJvcCkgPT5cbiAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbikoT2JqZWN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogV2FsayB0aGUgcHJvdG90eXBlIGNoYWluIChleGNsdWRpbmcgdGhlIHNoYXJlZCBPYmplY3QucHJvdG90eXBlKSBsb29raW5nIGZvclxuICogYW4gb3duIGBwcm9wYC4gVGhpcyBkaXN0aW5ndWlzaGVzIGdlbnVpbmUgb3duL2luaGVyaXRlZCBtZW1iZXJzIOKAlCBpbmNsdWRpbmdcbiAqIGNsYXNzIGFjY2Vzc29ycyBhbmQgdGVtcGxhdGUgcHJvdG90eXBlcyDigJQgZnJvbSBtZW1iZXJzIGluamVjdGVkIHZpYVxuICogT2JqZWN0LnByb3RvdHlwZSBwb2xsdXRpb24gKGUuZy4gYE9iamVjdC5wcm90b3R5cGUudXNlcm5hbWUgPSAnLi4uJ2ApLCB3aGljaFxuICogbGl2ZSBvbiBPYmplY3QucHJvdG90eXBlIGl0c2VsZiBhbmQgYXJlIHRoZXJlZm9yZSBuZXZlciBtYXRjaGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHdob3NlIGNoYWluIHRvIGluc3BlY3RcbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gcHJvcCBUaGUgcHJvcGVydHkga2V5IHRvIGxvb2sgZm9yXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgd2hlbiBgcHJvcGAgaXMgb3duZWQgYmVsb3cgT2JqZWN0LnByb3RvdHlwZVxuICovXG5jb25zdCBoYXNPd25JblByb3RvdHlwZUNoYWluID0gKHRoaW5nLCBwcm9wKSA9PiB7XG4gIGxldCBvYmogPSB0aGluZztcbiAgY29uc3Qgc2VlbiA9IFtdO1xuXG4gIHdoaWxlIChvYmogIT0gbnVsbCAmJiBvYmogIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBpZiAoc2Vlbi5pbmRleE9mKG9iaikgIT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNlZW4ucHVzaChvYmopO1xuXG4gICAgaWYgKGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvYmogPSBnZXRQcm90b3R5cGVPZihvYmopO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmVhZCBgb2JqW3Byb3BdYCBvbmx5IHdoZW4gaXQgaXMgc2FmZSBmcm9tIE9iamVjdC5wcm90b3R5cGUgcG9sbHV0aW9uLiBPd25cbiAqIHByb3BlcnRpZXMgYW5kIG1lbWJlcnMgaW5oZXJpdGVkIGZyb20gYSBub24tT2JqZWN0LnByb3RvdHlwZSBzb3VyY2UgKGEgY2xhc3NcbiAqIGluc3RhbmNlIG9yIHRlbXBsYXRlIG9iamVjdCkgYXJlIGhvbm9yZWQ7IGEgdmFsdWUgcmVhY2hhYmxlIG9ubHkgdGhyb3VnaCBhXG4gKiBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlIGlzIGlnbm9yZWQgYW5kIGB1bmRlZmluZWRgIGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IHByb3AgVGhlIHByb3BlcnR5IGtleSB0byByZWFkXG4gKlxuICogQHJldHVybnMgeyp9IFRoZSByZXNvbHZlZCB2YWx1ZSwgb3IgdW5kZWZpbmVkIHdoZW4gdW5zYWZlL2Fic2VudFxuICovXG5jb25zdCBnZXRTYWZlUHJvcCA9IChvYmosIHByb3ApID0+XG4gIG9iaiAhPSBudWxsICYmIGhhc093bkluUHJvdG90eXBlQ2hhaW4ob2JqLCBwcm9wKSA/IG9ialtwcm9wXSA6IHVuZGVmaW5lZDtcblxuY29uc3Qga2luZE9mID0gKChjYWNoZSkgPT4gKHRoaW5nKSA9PiB7XG4gIGNvbnN0IHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpbmcpO1xuICByZXR1cm4gY2FjaGVbc3RyXSB8fCAoY2FjaGVbc3RyXSA9IHN0ci5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSk7XG59KShPYmplY3QuY3JlYXRlKG51bGwpKTtcblxuY29uc3Qga2luZE9mVGVzdCA9ICh0eXBlKSA9PiB7XG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAodGhpbmcpID0+IGtpbmRPZih0aGluZykgPT09IHR5cGU7XG59O1xuXG5jb25zdCB0eXBlT2ZUZXN0ID0gKHR5cGUpID0+ICh0aGluZykgPT4gdHlwZW9mIHRoaW5nID09PSB0eXBlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgbm9uLW51bGwgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgeyBpc0FycmF5IH0gPSBBcnJheTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VuZGVmaW5lZCA9IHR5cGVPZlRlc3QoJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gKFxuICAgIHZhbCAhPT0gbnVsbCAmJlxuICAgICFpc1VuZGVmaW5lZCh2YWwpICYmXG4gICAgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmXG4gICAgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcikgJiZcbiAgICBpc0Z1bmN0aW9uKHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcikgJiZcbiAgICB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKVxuICApO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQXJyYXlCdWZmZXIgPSBraW5kT2ZUZXN0KCdBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIEFycmF5QnVmZmVyLmlzVmlldykge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHZhbCAmJiB2YWwuYnVmZmVyICYmIGlzQXJyYXlCdWZmZXIodmFsLmJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmluZyA9IHR5cGVPZlRlc3QoJ3N0cmluZycpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlT2ZUZXN0KCdmdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzTnVtYmVyID0gdHlwZU9mVGVzdCgnbnVtYmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQm9vbGVhblxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQm9vbGVhbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQm9vbGVhbiA9ICh0aGluZykgPT4gdGhpbmcgPT09IHRydWUgfHwgdGhpbmcgPT09IGZhbHNlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsKSA9PiB7XG4gIGlmICghaXNPYmplY3QodmFsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiAoXG4gICAgKHByb3RvdHlwZSA9PT0gbnVsbCB8fFxuICAgICAgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8XG4gICAgICBnZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsKSAmJlxuICAgIC8vIFRyZWF0IGFueSBnZW51aW5lIChub24tT2JqZWN0LnByb3RvdHlwZS1wb2xsdXRlZCkgU3ltYm9sLnRvU3RyaW5nVGFnIG9yXG4gICAgLy8gU3ltYm9sLml0ZXJhdG9yIGFzIGV2aWRlbmNlIHRoZSB2YWx1ZSBpcyBhIHRhZ2dlZC9pdGVyYWJsZSB0eXBlIHJhdGhlclxuICAgIC8vIHRoYW4gYSBwbGFpbiBvYmplY3QsIHdoaWxlIGlnbm9yaW5nIGtleXMgaW5qZWN0ZWQgb250byBPYmplY3QucHJvdG90eXBlLlxuICAgICFoYXNPd25JblByb3RvdHlwZUNoYWluKHZhbCwgdG9TdHJpbmdUYWcpICYmXG4gICAgIWhhc093bkluUHJvdG90eXBlQ2hhaW4odmFsLCBpdGVyYXRvcilcbiAgKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gZW1wdHkgb2JqZWN0IChzYWZlbHkgaGFuZGxlcyBCdWZmZXJzKVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gZW1wdHkgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNFbXB0eU9iamVjdCA9ICh2YWwpID0+IHtcbiAgLy8gRWFybHkgcmV0dXJuIGZvciBub24tb2JqZWN0cyBvciBCdWZmZXJzIHRvIHByZXZlbnQgUmFuZ2VFcnJvclxuICBpZiAoIWlzT2JqZWN0KHZhbCkgfHwgaXNCdWZmZXIodmFsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpID09PSBPYmplY3QucHJvdG90eXBlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gRmFsbGJhY2sgZm9yIGFueSBvdGhlciBvYmplY3RzIHRoYXQgbWlnaHQgY2F1c2UgUmFuZ2VFcnJvciB3aXRoIE9iamVjdC5rZXlzKClcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0RhdGUgPSBraW5kT2ZUZXN0KCdEYXRlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBSZWFjdCBOYXRpdmUgQmxvYlxuICogUmVhY3QgTmF0aXZlIFwiYmxvYlwiOiBhbiBvYmplY3Qgd2l0aCBhIGB1cmlgIGF0dHJpYnV0ZS4gT3B0aW9uYWxseSwgaXQgY2FuXG4gKiBhbHNvIGhhdmUgYSBgbmFtZWAgYW5kIGB0eXBlYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBmaWxlbmFtZSBhbmQgY29udGVudCB0eXBlXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvMjY2ODRjZjNhZGY0MDk0ZWI2YzQwNWQzNDVhNzViZjhjN2MwYmY4OC9MaWJyYXJpZXMvTmV0d29yay9Gb3JtRGF0YS5qcyNMNjgtTDcxXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgUmVhY3QgTmF0aXZlIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1JlYWN0TmF0aXZlQmxvYiA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gISEodmFsdWUgJiYgdHlwZW9mIHZhbHVlLnVyaSAhPT0gJ3VuZGVmaW5lZCcpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgZW52aXJvbm1lbnQgaXMgUmVhY3QgTmF0aXZlXG4gKiBSZWFjdE5hdGl2ZSBgRm9ybURhdGFgIGhhcyBhIG5vbi1zdGFuZGFyZCBgZ2V0UGFydHMoKWAgbWV0aG9kXG4gKlxuICogQHBhcmFtIHsqfSBmb3JtRGF0YSBUaGUgZm9ybURhdGEgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGVudmlyb25tZW50IGlzIFJlYWN0IE5hdGl2ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUmVhY3ROYXRpdmUgPSAoZm9ybURhdGEpID0+IGZvcm1EYXRhICYmIHR5cGVvZiBmb3JtRGF0YS5nZXRQYXJ0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jsb2IgPSBraW5kT2ZUZXN0KCdCbG9iJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlTGlzdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlTGlzdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZUxpc3QgPSBraW5kT2ZUZXN0KCdGaWxlTGlzdCcpO1xuY29uc3QgaXNTZXQgPSBraW5kT2ZUZXN0KCdTZXQnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmVhbSA9ICh2YWwpID0+IGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBzZWxmO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiB3aW5kb3c7XG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGdsb2JhbDtcbiAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBHID0gZ2V0R2xvYmFsKCk7XG5jb25zdCBGb3JtRGF0YUN0b3IgPSB0eXBlb2YgRy5Gb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBHLkZvcm1EYXRhIDogdW5kZWZpbmVkO1xuXG5jb25zdCBpc0Zvcm1EYXRhID0gKHRoaW5nKSA9PiB7XG4gIGlmICghdGhpbmcpIHJldHVybiBmYWxzZTtcbiAgaWYgKEZvcm1EYXRhQ3RvciAmJiB0aGluZyBpbnN0YW5jZW9mIEZvcm1EYXRhQ3RvcikgcmV0dXJuIHRydWU7XG4gIC8vIFJlamVjdCBwbGFpbiBvYmplY3RzIGluaGVyaXRpbmcgZGlyZWN0bHkgZnJvbSBPYmplY3QucHJvdG90eXBlIHNvIHByb3RvdHlwZS1wb2xsdXRpb24gZ2FkZ2V0cyBjYW4ndCBzcG9vZiBGb3JtRGF0YS5cbiAgY29uc3QgcHJvdG8gPSBnZXRQcm90b3R5cGVPZih0aGluZyk7XG4gIGlmICghcHJvdG8gfHwgcHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgaWYgKCFpc0Z1bmN0aW9uKHRoaW5nLmFwcGVuZCkpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qga2luZCA9IGtpbmRPZih0aGluZyk7XG4gIHJldHVybiAoXG4gICAga2luZCA9PT0gJ2Zvcm1kYXRhJyB8fFxuICAgIC8vIGRldGVjdCBmb3JtLWRhdGEgaW5zdGFuY2VcbiAgICAoa2luZCA9PT0gJ29iamVjdCcgJiYgaXNGdW5jdGlvbih0aGluZy50b1N0cmluZykgJiYgdGhpbmcudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJylcbiAgKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VSTFNlYXJjaFBhcmFtcyA9IGtpbmRPZlRlc3QoJ1VSTFNlYXJjaFBhcmFtcycpO1xuXG5jb25zdCBbaXNSZWFkYWJsZVN0cmVhbSwgaXNSZXF1ZXN0LCBpc1Jlc3BvbnNlLCBpc0hlYWRlcnNdID0gW1xuICAnUmVhZGFibGVTdHJlYW0nLFxuICAnUmVxdWVzdCcsXG4gICdSZXNwb25zZScsXG4gICdIZWFkZXJzJyxcbl0ubWFwKGtpbmRPZlRlc3QpO1xuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5jb25zdCB0cmltID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnRyaW0gPyBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG59O1xuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXk8dW5rbm93bj59IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxsT3duS2V5cyA9IGZhbHNlXVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuLCB7IGFsbE93bktleXMgPSBmYWxzZSB9ID0ge30pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaTtcbiAgbGV0IGw7XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEJ1ZmZlciBjaGVja1xuICAgIGlmIChpc0J1ZmZlcihvYmopKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgY29uc3Qga2V5cyA9IGFsbE93bktleXMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQga2V5O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEZpbmRzIGEga2V5IGluIGFuIG9iamVjdCwgY2FzZS1pbnNlbnNpdGl2ZSwgcmV0dXJuaW5nIHRoZSBhY3R1YWwga2V5IG5hbWUuXG4gKiBSZXR1cm5zIG51bGwgaWYgdGhlIG9iamVjdCBpcyBhIEJ1ZmZlciBvciBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gVGhlIG9iamVjdCB0byBzZWFyY2guXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSB0byBmaW5kIChjYXNlLWluc2Vuc2l0aXZlKS5cbiAqIEByZXR1cm5zIHs/c3RyaW5nfSBUaGUgYWN0dWFsIGtleSBuYW1lIGlmIGZvdW5kLCBvdGhlcndpc2UgbnVsbC5cbiAqL1xuZnVuY3Rpb24gZmluZEtleShvYmosIGtleSkge1xuICBpZiAoaXNCdWZmZXIob2JqKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICBsZXQgX2tleTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBfa2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ID09PSBfa2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBfa2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgX2dsb2JhbCA9ICgoKSA9PiB7XG4gIC8qZXNsaW50IG5vLXVuZGVmOjAqL1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZ2xvYmFsVGhpcztcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbn0pKCk7XG5cbmNvbnN0IGlzQ29udGV4dERlZmluZWQgPSAoY29udGV4dCkgPT4gIWlzVW5kZWZpbmVkKGNvbnRleHQpICYmIGNvbnRleHQgIT09IF9nbG9iYWw7XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKlxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC4uLm9ianMpIHtcbiAgY29uc3QgeyBjYXNlbGVzcywgc2tpcFVuZGVmaW5lZCB9ID0gKGlzQ29udGV4dERlZmluZWQodGhpcykgJiYgdGhpcykgfHwge307XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWwsIGtleSkgPT4ge1xuICAgIC8vIFNraXAgZGFuZ2Vyb3VzIHByb3BlcnR5IG5hbWVzIHRvIHByZXZlbnQgcHJvdG90eXBlIHBvbGx1dGlvblxuICAgIGlmIChrZXkgPT09ICdfX3Byb3RvX18nIHx8IGtleSA9PT0gJ2NvbnN0cnVjdG9yJyB8fCBrZXkgPT09ICdwcm90b3R5cGUnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZmluZEtleSBsb3dlcmNhc2VzIHRoZSBrZXksIHNvIGNhc2VsZXNzIGxvb2t1cCBvbmx5IGFwcGxpZXMgdG8gc3RyaW5ncyDigJRcbiAgICAvLyBzeW1ib2wga2V5cyBhcmUgaWRlbnRpdHktbWF0Y2hlZC5cbiAgICBjb25zdCB0YXJnZXRLZXkgPSAoY2FzZWxlc3MgJiYgdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgZmluZEtleShyZXN1bHQsIGtleSkpIHx8IGtleTtcbiAgICAvLyBSZWFkIHZpYSBvd24tcHJvcCBvbmx5IOKAlCBhIGJhcmUgYHJlc3VsdFt0YXJnZXRLZXldYCB3YWxrcyB0aGUgcHJvdG90eXBlXG4gICAgLy8gY2hhaW4sIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZSB2YWx1ZSBjb3VsZCBzdXJmYWNlIGhlcmUgYW5kIGdldFxuICAgIC8vIGNvcGllZCBpbnRvIHRoZSBtZXJnZWQgcmVzdWx0LlxuICAgIGNvbnN0IGV4aXN0aW5nID0gaGFzT3duUHJvcGVydHkocmVzdWx0LCB0YXJnZXRLZXkpID8gcmVzdWx0W3RhcmdldEtleV0gOiB1bmRlZmluZWQ7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoZXhpc3RpbmcpICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZShleGlzdGluZywgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2UgaWYgKCFza2lwVW5kZWZpbmVkIHx8ICFpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbDtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBvYmpzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHNvdXJjZSA9IG9ianNbaV07XG4gICAgaWYgKCFzb3VyY2UgfHwgaXNCdWZmZXIoc291cmNlKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZm9yRWFjaChzb3VyY2UsIGFzc2lnblZhbHVlKTtcblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0JyB8fCBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzeW1ib2xzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzW2pdO1xuICAgICAgaWYgKHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBzeW1ib2wpKSB7XG4gICAgICAgIGFzc2lnblZhbHVlKHNvdXJjZVtzeW1ib2xdLCBzeW1ib2wpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGxPd25LZXlzXVxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5jb25zdCBleHRlbmQgPSAoYSwgYiwgdGhpc0FyZywgeyBhbGxPd25LZXlzIH0gPSB7fSkgPT4ge1xuICBmb3JFYWNoKFxuICAgIGIsXG4gICAgKHZhbCwga2V5KSA9PiB7XG4gICAgICBpZiAodGhpc0FyZyAmJiBpc0Z1bmN0aW9uKHZhbCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIGtleSwge1xuICAgICAgICAgIC8vIE51bGwtcHJvdG8gZGVzY3JpcHRvciBzbyBhIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUuZ2V0IGNhbm5vdFxuICAgICAgICAgIC8vIGhpamFjayBkZWZpbmVQcm9wZXJ0eSdzIGFjY2Vzc29yLXZzLWRhdGEgcmVzb2x1dGlvbi5cbiAgICAgICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICAgICAgdmFsdWU6IGJpbmQodmFsLCB0aGlzQXJnKSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwga2V5LCB7XG4gICAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBhbGxPd25LZXlzIH1cbiAgKTtcbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5jb25zdCBzdHJpcEJPTSA9IChjb250ZW50KSA9PiB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4ZmVmZikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW3Byb3BzXVxuICogQHBhcmFtIHtvYmplY3R9IFtkZXNjcmlwdG9yc11cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgaW5oZXJpdHMgPSAoY29uc3RydWN0b3IsIHN1cGVyQ29uc3RydWN0b3IsIHByb3BzLCBkZXNjcmlwdG9ycykgPT4ge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlLCBkZXNjcmlwdG9ycyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgdmFsdWU6IGNvbnN0cnVjdG9yLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgJ3N1cGVyJywge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICB2YWx1ZTogc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsXG4gIH0pO1xuICBwcm9wcyAmJiBPYmplY3QuYXNzaWduKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcHMpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIG9iamVjdCB3aXRoIGRlZXAgcHJvdG90eXBlIGNoYWluIHRvIGEgZmxhdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VPYmogc291cmNlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtkZXN0T2JqXVxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSBbZmlsdGVyXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BGaWx0ZXJdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3QgdG9GbGF0T2JqZWN0ID0gKHNvdXJjZU9iaiwgZGVzdE9iaiwgZmlsdGVyLCBwcm9wRmlsdGVyKSA9PiB7XG4gIGxldCBwcm9wcztcbiAgbGV0IGk7XG4gIGxldCBwcm9wO1xuICBjb25zdCBtZXJnZWQgPSB7fTtcblxuICBkZXN0T2JqID0gZGVzdE9iaiB8fCB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIGlmIChzb3VyY2VPYmogPT0gbnVsbCkgcmV0dXJuIGRlc3RPYmo7XG5cbiAgZG8ge1xuICAgIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlT2JqKTtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICBpZiAoKCFwcm9wRmlsdGVyIHx8IHByb3BGaWx0ZXIocHJvcCwgc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgIW1lcmdlZFtwcm9wXSkge1xuICAgICAgICBkZXN0T2JqW3Byb3BdID0gc291cmNlT2JqW3Byb3BdO1xuICAgICAgICBtZXJnZWRbcHJvcF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VPYmogPSBmaWx0ZXIgIT09IGZhbHNlICYmIGdldFByb3RvdHlwZU9mKHNvdXJjZU9iaik7XG4gIH0gd2hpbGUgKHNvdXJjZU9iaiAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgc291cmNlT2JqICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuICByZXR1cm4gZGVzdE9iajtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3RyaW5nIGVuZHMgd2l0aCB0aGUgY2hhcmFjdGVycyBvZiBhIHNwZWNpZmllZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uPSAwXVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBlbmRzV2l0aCA9IChzdHIsIHNlYXJjaFN0cmluZywgcG9zaXRpb24pID0+IHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3RyLmxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gc3RyLmxlbmd0aDtcbiAgfVxuICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICBjb25zdCBsYXN0SW5kZXggPSBzdHIuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbn07XG5cbi8qKlxuICogUmV0dXJucyBuZXcgYXJyYXkgZnJvbSBhcnJheSBsaWtlIG9iamVjdCBvciBudWxsIGlmIGZhaWxlZFxuICpcbiAqIEBwYXJhbSB7Kn0gW3RoaW5nXVxuICpcbiAqIEByZXR1cm5zIHs/QXJyYXl9XG4gKi9cbmNvbnN0IHRvQXJyYXkgPSAodGhpbmcpID0+IHtcbiAgaWYgKCF0aGluZykgcmV0dXJuIG51bGw7XG4gIGlmIChpc0FycmF5KHRoaW5nKSkgcmV0dXJuIHRoaW5nO1xuICBsZXQgaSA9IHRoaW5nLmxlbmd0aDtcbiAgaWYgKCFpc051bWJlcihpKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBhcnJbaV0gPSB0aGluZ1tpXTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVja2luZyBpZiB0aGUgVWludDhBcnJheSBleGlzdHMgYW5kIGlmIGl0IGRvZXMsIGl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGVcbiAqIHRoaW5nIHBhc3NlZCBpbiBpcyBhbiBpbnN0YW5jZSBvZiBVaW50OEFycmF5XG4gKlxuICogQHBhcmFtIHtUeXBlZEFycmF5fVxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbmNvbnN0IGlzVHlwZWRBcnJheSA9ICgoVHlwZWRBcnJheSkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gKHRoaW5nKSA9PiB7XG4gICAgcmV0dXJuIFR5cGVkQXJyYXkgJiYgdGhpbmcgaW5zdGFuY2VvZiBUeXBlZEFycmF5O1xuICB9O1xufSkodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIGdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpKTtcblxuLyoqXG4gKiBGb3IgZWFjaCBlbnRyeSBpbiB0aGUgb2JqZWN0LCBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBrZXkgYW5kIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGVudHJ5LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBmb3JFYWNoRW50cnkgPSAob2JqLCBmbikgPT4ge1xuICBjb25zdCBnZW5lcmF0b3IgPSBvYmogJiYgb2JqW2l0ZXJhdG9yXTtcblxuICBjb25zdCBfaXRlcmF0b3IgPSBnZW5lcmF0b3IuY2FsbChvYmopO1xuXG4gIGxldCByZXN1bHQ7XG5cbiAgd2hpbGUgKChyZXN1bHQgPSBfaXRlcmF0b3IubmV4dCgpKSAmJiAhcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBwYWlyID0gcmVzdWx0LnZhbHVlO1xuICAgIGZuLmNhbGwob2JqLCBwYWlyWzBdLCBwYWlyWzFdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBzdHJpbmcsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdFeHAgLSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBzZWFyY2guXG4gKlxuICogQHJldHVybnMge0FycmF5PGJvb2xlYW4+fVxuICovXG5jb25zdCBtYXRjaEFsbCA9IChyZWdFeHAsIHN0cikgPT4ge1xuICBsZXQgbWF0Y2hlcztcbiAgY29uc3QgYXJyID0gW107XG5cbiAgd2hpbGUgKChtYXRjaGVzID0gcmVnRXhwLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICBhcnIucHVzaChtYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKiBDaGVja2luZyBpZiB0aGUga2luZE9mVGVzdCBmdW5jdGlvbiByZXR1cm5zIHRydWUgd2hlbiBwYXNzZWQgYW4gSFRNTEZvcm1FbGVtZW50LiAqL1xuY29uc3QgaXNIVE1MRm9ybSA9IGtpbmRPZlRlc3QoJ0hUTUxGb3JtRWxlbWVudCcpO1xuXG5jb25zdCB0b0NhbWVsQ2FzZSA9IChzdHIpID0+IHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1stX1xcc10oW2EtelxcZF0pKFxcdyopL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG0sIHAxLCBwMikge1xuICAgIHJldHVybiBwMS50b1VwcGVyQ2FzZSgpICsgcDI7XG4gIH0pO1xufTtcblxuY29uc3QgeyBwcm9wZXJ0eUlzRW51bWVyYWJsZSB9ID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUmVnRXhwID0ga2luZE9mVGVzdCgnUmVnRXhwJyk7XG5cbmNvbnN0IHJlZHVjZURlc2NyaXB0b3JzID0gKG9iaiwgcmVkdWNlcikgPT4ge1xuICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaik7XG4gIGNvbnN0IHJlZHVjZWREZXNjcmlwdG9ycyA9IHt9O1xuXG4gIGZvckVhY2goZGVzY3JpcHRvcnMsIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgbGV0IHJldDtcbiAgICBpZiAoKHJldCA9IHJlZHVjZXIoZGVzY3JpcHRvciwgbmFtZSwgb2JqKSkgIT09IGZhbHNlKSB7XG4gICAgICByZWR1Y2VkRGVzY3JpcHRvcnNbbmFtZV0gPSByZXQgfHwgZGVzY3JpcHRvcjtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwgcmVkdWNlZERlc2NyaXB0b3JzKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYWxsIG1ldGhvZHMgcmVhZC1vbmx5XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuY29uc3QgZnJlZXplTWV0aG9kcyA9IChvYmopID0+IHtcbiAgcmVkdWNlRGVzY3JpcHRvcnMob2JqLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIC8vIHNraXAgcmVzdHJpY3RlZCBwcm9wcyBpbiBzdHJpY3QgbW9kZVxuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikgJiYgWydhcmd1bWVudHMnLCAnY2FsbGVyJywgJ2NhbGxlZSddLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBvYmpbbmFtZV07XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm47XG5cbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBmYWxzZTtcblxuICAgIGlmICgnd3JpdGFibGUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICBkZXNjcmlwdG9yLnNldCA9ICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJDYW4gbm90IHJld3JpdGUgcmVhZC1vbmx5IG1ldGhvZCAnXCIgKyBuYW1lICsgXCInXCIpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBvciBhIGRlbGltaXRlZCBzdHJpbmcgaW50byBhbiBvYmplY3Qgc2V0IHdpdGggdmFsdWVzIGFzIGtleXMgYW5kIHRydWUgYXMgdmFsdWVzLlxuICogVXNlZnVsIGZvciBmYXN0IG1lbWJlcnNoaXAgY2hlY2tzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBhcnJheU9yU3RyaW5nIC0gVGhlIGFycmF5IG9yIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHBhcmFtIHtzdHJpbmd9IGRlbGltaXRlciAtIFRoZSBkZWxpbWl0ZXIgdG8gdXNlIGlmIGlucHV0IGlzIGEgc3RyaW5nLlxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IHdpdGgga2V5cyBmcm9tIHRoZSBhcnJheSBvciBzdHJpbmcsIHZhbHVlcyBzZXQgdG8gdHJ1ZS5cbiAqL1xuY29uc3QgdG9PYmplY3RTZXQgPSAoYXJyYXlPclN0cmluZywgZGVsaW1pdGVyKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuXG4gIGNvbnN0IGRlZmluZSA9IChhcnIpID0+IHtcbiAgICBhcnIuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIG9ialt2YWx1ZV0gPSB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIGlzQXJyYXkoYXJyYXlPclN0cmluZykgPyBkZWZpbmUoYXJyYXlPclN0cmluZykgOiBkZWZpbmUoU3RyaW5nKGFycmF5T3JTdHJpbmcpLnNwbGl0KGRlbGltaXRlcikpO1xuXG4gIHJldHVybiBvYmo7XG59O1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmNvbnN0IHRvRmluaXRlTnVtYmVyID0gKHZhbHVlLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKCh2YWx1ZSA9ICt2YWx1ZSkpID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59O1xuXG4vKipcbiAqIElmIHRoZSB0aGluZyBpcyBhIEZvcm1EYXRhIG9iamVjdCwgcmV0dXJuIHRydWUsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZyAtIFRoZSB0aGluZyB0byBjaGVjay5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTcGVjQ29tcGxpYW50Rm9ybSh0aGluZykge1xuICByZXR1cm4gISEoXG4gICAgdGhpbmcgJiZcbiAgICBpc0Z1bmN0aW9uKHRoaW5nLmFwcGVuZCkgJiZcbiAgICB0aGluZ1t0b1N0cmluZ1RhZ10gPT09ICdGb3JtRGF0YScgJiZcbiAgICB0aGluZ1tpdGVyYXRvcl1cbiAgKTtcbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBjb252ZXJ0cyBhbiBvYmplY3QgdG8gYSBKU09OLWNvbXBhdGlibGUgb2JqZWN0LCBoYW5kbGluZyBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCBCdWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgSlNPTi1jb21wYXRpYmxlIG9iamVjdC5cbiAqL1xuY29uc3QgdG9KU09OT2JqZWN0ID0gKG9iaikgPT4ge1xuICBjb25zdCB2aXNpdGVkID0gbmV3IFdlYWtTZXQoKTtcblxuICBjb25zdCB2aXNpdCA9IChzb3VyY2UpID0+IHtcbiAgICBpZiAoaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgaWYgKHZpc2l0ZWQuaGFzKHNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvL0J1ZmZlciBjaGVja1xuICAgICAgaWYgKGlzQnVmZmVyKHNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoJ3RvSlNPTicgaW4gc291cmNlKSkge1xuICAgICAgICAvLyBhZGQtb24gZGVzY2VudCAvIGRlbGV0ZS1vbi1hc2NlbnQ6IHByZXNlcnZlcyBwYXRoIHNlbWFudGljcywgc28gREFHIG5vZGVzIHNlcmlhbGlzZSBhdCBldmVyeSBvY2N1cnJlbmNlIChzZWUgIzcyMzApLlxuICAgICAgICB2aXNpdGVkLmFkZChzb3VyY2UpO1xuXG4gICAgICAgIGxldCB0YXJnZXQ7XG5cbiAgICAgICAgaWYgKGlzU2V0KHNvdXJjZSkpIHtcbiAgICAgICAgICB0YXJnZXQgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodmFsdWUpO1xuICAgICAgICAgICAgIWlzVW5kZWZpbmVkKHJlZHVjZWRWYWx1ZSkgJiYgdGFyZ2V0LnB1c2gocmVkdWNlZFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0ID0gaXNBcnJheShzb3VyY2UpID8gW10gOiB7fTtcblxuICAgICAgICAgIGZvckVhY2goc291cmNlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodmFsdWUpO1xuICAgICAgICAgICAgIWlzVW5kZWZpbmVkKHJlZHVjZWRWYWx1ZSkgJiYgKHRhcmdldFtrZXldID0gcmVkdWNlZFZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpc2l0ZWQuZGVsZXRlKHNvdXJjZSk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9O1xuXG4gIHJldHVybiB2aXNpdChvYmopO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYW4gYXN5bmMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyAtIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gYXN5bmMgZnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuY29uc3QgaXNBc3luY0ZuID0ga2luZE9mVGVzdCgnQXN5bmNGdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyB0aGVuYWJsZSAoaGFzIHRoZW4gYW5kIGNhdGNoIG1ldGhvZHMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgLSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIHRoZW5hYmxlLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmNvbnN0IGlzVGhlbmFibGUgPSAodGhpbmcpID0+XG4gIHRoaW5nICYmXG4gIChpc09iamVjdCh0aGluZykgfHwgaXNGdW5jdGlvbih0aGluZykpICYmXG4gIGlzRnVuY3Rpb24odGhpbmcudGhlbikgJiZcbiAgaXNGdW5jdGlvbih0aGluZy5jYXRjaCk7XG5cbi8vIG9yaWdpbmFsIGNvZGVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EaWdpdGFsQnJhaW5KUy9BeGlvc1Byb21pc2UvYmxvYi8xNmRlYWIxMzcxMGVjMDk3Nzk5MjIxMzFmM2ZhNTk1NDMyMGY4M2FiL2xpYi91dGlscy5qcyNMMTEtTDM0XG5cbi8qKlxuICogUHJvdmlkZXMgYSBjcm9zcy1wbGF0Zm9ybSBzZXRJbW1lZGlhdGUgaW1wbGVtZW50YXRpb24uXG4gKiBVc2VzIG5hdGl2ZSBzZXRJbW1lZGlhdGUgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgZmFsbHMgYmFjayB0byBwb3N0TWVzc2FnZSBvciBzZXRUaW1lb3V0LlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0SW1tZWRpYXRlU3VwcG9ydGVkIC0gV2hldGhlciBzZXRJbW1lZGlhdGUgaXMgc3VwcG9ydGVkLlxuICogQHBhcmFtIHtib29sZWFufSBwb3N0TWVzc2FnZVN1cHBvcnRlZCAtIFdoZXRoZXIgcG9zdE1lc3NhZ2UgaXMgc3VwcG9ydGVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHNjaGVkdWxlIGEgY2FsbGJhY2sgYXN5bmNocm9ub3VzbHkuXG4gKi9cbmNvbnN0IF9zZXRJbW1lZGlhdGUgPSAoKHNldEltbWVkaWF0ZVN1cHBvcnRlZCwgcG9zdE1lc3NhZ2VTdXBwb3J0ZWQpID0+IHtcbiAgaWYgKHNldEltbWVkaWF0ZVN1cHBvcnRlZCkge1xuICAgIHJldHVybiBzZXRJbW1lZGlhdGU7XG4gIH1cblxuICByZXR1cm4gcG9zdE1lc3NhZ2VTdXBwb3J0ZWRcbiAgICA/ICgodG9rZW4sIGNhbGxiYWNrcykgPT4ge1xuICAgICAgICBfZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICh7IHNvdXJjZSwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc291cmNlID09PSBfZ2xvYmFsICYmIGRhdGEgPT09IHRva2VuKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrcy5sZW5ndGggJiYgY2FsbGJhY2tzLnNoaWZ0KCkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChjYikgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgICBfZ2xvYmFsLnBvc3RNZXNzYWdlKHRva2VuLCAnKicpO1xuICAgICAgICB9O1xuICAgICAgfSkoYGF4aW9zQCR7TWF0aC5yYW5kb20oKX1gLCBbXSlcbiAgICA6IChjYikgPT4gc2V0VGltZW91dChjYik7XG59KSh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nLCBpc0Z1bmN0aW9uKF9nbG9iYWwucG9zdE1lc3NhZ2UpKTtcblxuLyoqXG4gKiBTY2hlZHVsZXMgYSBtaWNyb3Rhc2sgb3IgYXN5bmNocm9ub3VzIGNhbGxiYWNrIGFzIHNvb24gYXMgcG9zc2libGUuXG4gKiBVc2VzIHF1ZXVlTWljcm90YXNrIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGZhbGxzIGJhY2sgdG8gcHJvY2Vzcy5uZXh0VGljayBvciBfc2V0SW1tZWRpYXRlLlxuICpcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuY29uc3QgYXNhcCA9XG4gIHR5cGVvZiBxdWV1ZU1pY3JvdGFzayAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHF1ZXVlTWljcm90YXNrLmJpbmQoX2dsb2JhbClcbiAgICA6ICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5uZXh0VGljaykgfHwgX3NldEltbWVkaWF0ZTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqXG5cbmNvbnN0IGlzSXRlcmFibGUgPSAodGhpbmcpID0+IHRoaW5nICE9IG51bGwgJiYgaXNGdW5jdGlvbih0aGluZ1tpdGVyYXRvcl0pO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGl0ZXJhYmxlIHZpYSBhbiBpdGVyYXRvciB0aGF0IGlzIE5PVCBzb3VyY2VkIHNvbGVseVxuICogZnJvbSBhIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUuIFVzZSB0aGlzIGluc3RlYWQgb2YgYGlzSXRlcmFibGVgIHdoZW5ldmVyXG4gKiB0aGUgaXRlcmFibGUgY29tZXMgZnJvbSB1bnRydXN0ZWQgaW5wdXQgKGUuZy4gdXNlci1zdXBwbGllZCBoZWFkZXIgc291cmNlcyksXG4gKiBzbyBgT2JqZWN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gLi4uYCBjYW5ub3QgdHVybiBhbiBvcmRpbmFyeSBvYmplY3RcbiAqIGludG8gYW4gYXR0YWNrZXItY29udHJvbGxlZCBlbnRyaWVzIGl0ZXJhdG9yLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBoYXMgYSBub24tcG9sbHV0ZWQgaXRlcmF0b3JcbiAqL1xuY29uc3QgaXNTYWZlSXRlcmFibGUgPSAodGhpbmcpID0+XG4gIHRoaW5nICE9IG51bGwgJiYgaGFzT3duSW5Qcm90b3R5cGVDaGFpbih0aGluZywgaXRlcmF0b3IpICYmIGlzSXRlcmFibGUodGhpbmcpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc0Jvb2xlYW4sXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBpc0VtcHR5T2JqZWN0LFxuICBpc1JlYWRhYmxlU3RyZWFtLFxuICBpc1JlcXVlc3QsXG4gIGlzUmVzcG9uc2UsXG4gIGlzSGVhZGVycyxcbiAgaXNVbmRlZmluZWQsXG4gIGlzRGF0ZSxcbiAgaXNGaWxlLFxuICBpc1JlYWN0TmF0aXZlQmxvYixcbiAgaXNSZWFjdE5hdGl2ZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIGhhc093bkluUHJvdG90eXBlQ2hhaW4sXG4gIGdldFNhZmVQcm9wLFxuICByZWR1Y2VEZXNjcmlwdG9ycyxcbiAgZnJlZXplTWV0aG9kcyxcbiAgdG9PYmplY3RTZXQsXG4gIHRvQ2FtZWxDYXNlLFxuICBub29wLFxuICB0b0Zpbml0ZU51bWJlcixcbiAgZmluZEtleSxcbiAgZ2xvYmFsOiBfZ2xvYmFsLFxuICBpc0NvbnRleHREZWZpbmVkLFxuICBpc1NwZWNDb21wbGlhbnRGb3JtLFxuICB0b0pTT05PYmplY3QsXG4gIGlzQXN5bmNGbixcbiAgaXNUaGVuYWJsZSxcbiAgc2V0SW1tZWRpYXRlOiBfc2V0SW1tZWRpYXRlLFxuICBhc2FwLFxuICBpc0l0ZXJhYmxlLFxuICBpc1NhZmVJdGVyYWJsZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIGdldEFwcFN0b3JlIH0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uLy4uL2FwaS9heGlvc0NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IEFsbFdpZGdldFByb3BzPGFueT4pIHtcclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8eyBpZD86IG51bWJlciB8IHN0cmluZzsgZW1haWw/OiBzdHJpbmc7IGNyZWRpdHM/OiBudW1iZXI7IHRva2VuPzogc3RyaW5nIH0gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbYW5hbHlzaXNUeXBlLCBzZXRBbmFseXNpc1R5cGVdID0gdXNlU3RhdGU8J2Nyb3BfdHlwZScgfCAnbmR2aSc+KCdjcm9wX3R5cGUnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8eyB0ZXh0OiBzdHJpbmc7IHR5cGU6ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnaW5mbycgfCAnd2FybmluZycgfSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFthdXRvTWFwSWQsIHNldEF1dG9NYXBJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKCcyMDI1LTAzLTAxJyk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoJzIwMjUtMDMtMjgnKTtcclxuXHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGU8e1xyXG4gICAgY3JvcF9hcmVhc19mZWRkYW5zPzogUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcclxuICAgIGNyb3BfaGVhbHRoX2ZlZGRhbnM/OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xyXG4gIH0gfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgW2xheWVyT3BhY2l0eSwgc2V0TGF5ZXJPcGFjaXR5XSA9IHVzZVN0YXRlKDAuODUpO1xyXG4gIGNvbnN0IFtjdXJyZW50QW5hbHlzaXNMYXllciwgc2V0Q3VycmVudEFuYWx5c2lzTGF5ZXJdID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuICBjb25zdCBbdGlsZVVybHMsIHNldFRpbGVVcmxzXSA9IHVzZVN0YXRlPHsgY3JvcF90eXBlPzogc3RyaW5nOyBjcm9wX2hlYWx0aD86IHN0cmluZyB9Pih7fSk7XHJcbiAgY29uc3QgW2N1cnJlbnRUaWxlTGF5ZXIsIHNldEN1cnJlbnRUaWxlTGF5ZXJdID0gdXNlU3RhdGU8J2Nyb3BfdHlwZScgfCAnY3JvcF9oZWFsdGgnPignY3JvcF90eXBlJyk7XHJcblxyXG4gIGNvbnN0IFtkcmF3bkdlb21ldHJ5LCBzZXREcmF3bkdlb21ldHJ5XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgY29uc3Qgc2tldGNoVmlld01vZGVsUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgZ3JhcGhpY3NMYXllclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xyXG4gIGNvbnN0IHNraXBOZXh0VXNlclN0YXRlU3luY1JlZiA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVNYXBJZCA9ICgpID0+IHtcclxuICAgICAgaWYgKHByb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldEF1dG9NYXBJZChwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKTtcclxuICAgICAgY29uc3Qgd2lkZ2V0cyA9IHN0YXRlPy5hcHBDb25maWc/LndpZGdldHMgfHwge307XHJcbiAgICAgIGNvbnN0IGZvdW5kTWFwS2V5ID0gT2JqZWN0LmtleXMod2lkZ2V0cykuZmluZCgoa2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkZ2V0ID0gd2lkZ2V0c1trZXldO1xyXG4gICAgICAgIHJldHVybiB3aWRnZXQ/LnVyaT8uaW5jbHVkZXMoJ2FyY2dpcy1tYXAnKSB8fCB3aWRnZXQ/Lm1hbmlmZXN0Py5uYW1lID09PSAnbWFwJztcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmb3VuZE1hcEtleSkge1xyXG4gICAgICAgIHNldEF1dG9NYXBJZChmb3VuZE1hcEtleSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlTWFwSWQoKTtcclxuICB9LCBbcHJvcHMudXNlTWFwV2lkZ2V0SWRzLCBwcm9wcy5hcHBDb25maWddKTtcclxuXHJcbiAgY29uc3Qgc3luY1VzZXJCYWxhbmNlID0gYXN5bmMgKGN1cnJlbnRVc2VyOiBhbnkpID0+IHtcclxuICAgIGlmICghY3VycmVudFVzZXI/LmlkKSByZXR1cm4gY3VycmVudFVzZXI7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlcklkID0gTnVtYmVyKGN1cnJlbnRVc2VyLmlkKTtcclxuICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodXNlcklkKSkgcmV0dXJuIGN1cnJlbnRVc2VyO1xyXG5cclxuICAgICAgY29uc3QgY29uZmlnID0gY3VycmVudFVzZXIudG9rZW5cclxuICAgICAgICA/IHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y3VycmVudFVzZXIudG9rZW59YCB9IH1cclxuICAgICAgICA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL3VzZXJzLyR7dXNlcklkfWAsIGNvbmZpZyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZT8uZGF0YT8udXNlciA/PyByZXNwb25zZT8uZGF0YTtcclxuXHJcbiAgICAgIGNvbnN0IGJhY2tlbmRDcmVkaXRzID1cclxuICAgICAgICBkYXRhPy5jcmVkaXRzID8/XHJcbiAgICAgICAgZGF0YT8ucG9pbnRzID8/XHJcbiAgICAgICAgZGF0YT8ucmVtYWluaW5nX2NyZWRpdHMgPz9cclxuICAgICAgICBkYXRhPy5yZW1haW5pbmdfcG9pbnRzID8/XHJcbiAgICAgICAgZGF0YT8uYmFsYW5jZTtcclxuXHJcbiAgICAgIGlmIChiYWNrZW5kQ3JlZGl0cyA9PT0gdW5kZWZpbmVkIHx8IGJhY2tlbmRDcmVkaXRzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBub3JtYWxpemVkQ3JlZGl0cyA9IE51bWJlcihiYWNrZW5kQ3JlZGl0cyk7XHJcbiAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG5vcm1hbGl6ZWRDcmVkaXRzKSkgcmV0dXJuIGN1cnJlbnRVc2VyO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSB7IC4uLmN1cnJlbnRVc2VyLCBjcmVkaXRzOiBub3JtYWxpemVkQ3JlZGl0cyB9O1xyXG4gICAgICBzZXRVc2VyKHVwZGF0ZWRVc2VyKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVXNlcikpO1xyXG4gICAgICBza2lwTmV4dFVzZXJTdGF0ZVN5bmNSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndXNlclN0YXRlQ2hhbmdlZCcpKTtcclxuICAgICAgcmV0dXJuIHVwZGF0ZWRVc2VyO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcign2YHYtNmEINmB2Yog2YXYstin2YXZhtipINix2LXZitivINin2YTZhdiz2KrYrtiv2YU6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gY3VycmVudFVzZXI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBjaGVja1VzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNhdmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICAgIGNvbnN0IHNhdmVkID0gc2F2ZWRVc2VyID8gSlNPTi5wYXJzZShzYXZlZFVzZXIpIDogbnVsbDtcclxuICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKHNraXBOZXh0VXNlclN0YXRlU3luY1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgc2tpcE5leHRVc2VyU3RhdGVTeW5jUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBzZXRVc2VyKHNhdmVkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFVzZXIoc2F2ZWQpO1xyXG4gICAgICBpZiAoc2F2ZWQ/LmlkKSB7XHJcbiAgICAgICAgY29uc3Qgc3luY2VkID0gYXdhaXQgc3luY1VzZXJCYWxhbmNlKHNhdmVkKTtcclxuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHN5bmNlZCkgc2V0VXNlcihzeW5jZWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrVXNlcigpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBjaGVja1VzZXIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VzZXJTdGF0ZUNoYW5nZWQnLCBjaGVja1VzZXIpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgY2hlY2tVc2VyKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VzZXJTdGF0ZUNoYW5nZWQnLCBjaGVja1VzZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoamltdU1hcFZpZXc/LnZpZXc/Lm1hcCkge1xyXG4gICAgICAgIGlmIChncmFwaGljc0xheWVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShncmFwaGljc0xheWVyUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudEFuYWx5c2lzTGF5ZXIpIHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShjdXJyZW50QW5hbHlzaXNMYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtqaW11TWFwVmlldywgY3VycmVudEFuYWx5c2lzTGF5ZXJdKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSBhc3luYyAoam12OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgaWYgKGptdikge1xyXG4gICAgICBzZXRKaW11TWFwVmlldyhqbXYpO1xyXG4gICAgICBzZXRNZXNzYWdlKG51bGwpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbR3JhcGhpY3NMYXllciwgU2tldGNoVmlld01vZGVsXSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICAgJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInLFxyXG4gICAgICAgICAgJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gvU2tldGNoVmlld01vZGVsJ1xyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBpZiAoIWdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgY29uc3QgZ0xheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyB0aXRsZTogJ9mF2YbYt9mC2Kkg2KfZhNiv2LHYp9iz2KkgKEFPSSknIH0pO1xyXG4gICAgICAgICAgam12LnZpZXcubWFwLmFkZChnTGF5ZXIpO1xyXG4gICAgICAgICAgZ3JhcGhpY3NMYXllclJlZi5jdXJyZW50ID0gZ0xheWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2tldGNoVk0gPSBuZXcgU2tldGNoVmlld01vZGVsKHtcclxuICAgICAgICAgIHZpZXc6IGptdi52aWV3LFxyXG4gICAgICAgICAgbGF5ZXI6IGdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudCxcclxuICAgICAgICAgIHBvbHlnb25TeW1ib2w6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcclxuICAgICAgICAgICAgY29sb3I6IFsxNiwgMTg1LCAxMjksIDAuMjVdLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiBbMTYsIDE4NSwgMTI5LCAxXSwgd2lkdGg6IDIuNSB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNrZXRjaFZNLm9uKCdjcmVhdGUnLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgICAgIHNldERyYXduR2VvbWV0cnkoZXZlbnQuZ3JhcGhpYy5nZW9tZXRyeSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoeyB0ZXh0OiAn2KrZhSDYqtit2K/ZitivINmF2YbYt9mC2Kkg2KfZhNiv2LHYp9iz2Kkg2KjZhtis2KfYrScsIHR5cGU6ICdzdWNjZXNzJyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2tldGNoVmlld01vZGVsUmVmLmN1cnJlbnQgPSBza2V0Y2hWTTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign2YHYtNmEINiq2K3ZhdmK2YQg2YjYrdiv2KfYqiBBcmNHSVMgQVBJOicsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzdGFydERyYXdpbmcgPSAoKSA9PiB7XHJcbiAgICBpZiAoc2tldGNoVmlld01vZGVsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgaWYgKGdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGdyYXBoaWNzTGF5ZXJSZWYuY3VycmVudC5yZW1vdmVBbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBzZXREcmF3bkdlb21ldHJ5KG51bGwpO1xyXG4gICAgICBza2V0Y2hWaWV3TW9kZWxSZWYuY3VycmVudC5jcmVhdGUoJ3BvbHlnb24nKTtcclxuICAgICAgc2V0TWVzc2FnZSh7IHRleHQ6ICfYp9mG2YLYsSDYudmE2Ykg2KfZhNiu2LHZiti32Kkg2YTYqtit2K/ZitivINit2K/ZiNivINin2YTZhdmG2LfZgtipJywgdHlwZTogJ2luZm8nIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdEdlb21ldHJ5VG9HZW9KU09OID0gKGdlb21ldHJ5OiBhbnksIHdlYk1lcmNhdG9yVXRpbHM6IGFueSkgPT4ge1xyXG4gICAgaWYgKCFnZW9tZXRyeSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBnZW9HZW9tZXRyeSA9IHdlYk1lcmNhdG9yVXRpbHMgPyB3ZWJNZXJjYXRvclV0aWxzLndlYk1lcmNhdG9yVG9HZW9ncmFwaGljKGdlb21ldHJ5KSA6IGdlb21ldHJ5O1xyXG4gICAgaWYgKCFnZW9HZW9tZXRyeSB8fCAhZ2VvR2VvbWV0cnkucmluZ3MgfHwgZ2VvR2VvbWV0cnkucmluZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCByaW5nID0gZ2VvR2VvbWV0cnkucmluZ3NbMF0ubWFwKChwdDogbnVtYmVyW10pID0+IFtwdFswXSwgcHRbMV1dKTtcclxuICAgIGlmIChyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgZmlyc3QgPSByaW5nWzBdO1xyXG4gICAgICBjb25zdCBsYXN0ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAoZmlyc3RbMF0gIT09IGxhc3RbMF0gfHwgZmlyc3RbMV0gIT09IGxhc3RbMV0pIHtcclxuICAgICAgICByaW5nLnB1c2goW2ZpcnN0WzBdLCBmaXJzdFsxXV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmluZztcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGFjaXR5Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldExheWVyT3BhY2l0eSh2YWwpO1xyXG4gICAgaWYgKGN1cnJlbnRBbmFseXNpc0xheWVyKSB7XHJcbiAgICAgIGN1cnJlbnRBbmFseXNpc0xheWVyLm9wYWNpdHkgPSB2YWw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoVGlsZUxheWVyID0gYXN5bmMgKGxheWVyOiAnY3JvcF90eXBlJyB8ICdjcm9wX2hlYWx0aCcpID0+IHtcclxuICAgIGlmICghdGlsZVVybHNbbGF5ZXJdIHx8ICFqaW11TWFwVmlldz8udmlldz8ubWFwKSByZXR1cm47XHJcblxyXG4gICAgc2V0Q3VycmVudFRpbGVMYXllcihsYXllcik7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRBbmFseXNpc0xheWVyICYmIGppbXVNYXBWaWV3Py52aWV3Py5tYXApIHtcclxuICAgICAgamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKGN1cnJlbnRBbmFseXNpc0xheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbV2ViVGlsZUxheWVyXSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoWydlc3JpL2xheWVycy9XZWJUaWxlTGF5ZXInXSk7XHJcblxyXG4gICAgY29uc3QgbmV3TGF5ZXIgPSBuZXcgV2ViVGlsZUxheWVyKHtcclxuICAgICAgdXJsVGVtcGxhdGU6IHRpbGVVcmxzW2xheWVyXSxcclxuICAgICAgb3BhY2l0eTogbGF5ZXJPcGFjaXR5LFxyXG4gICAgICB0aXRsZTogbGF5ZXIgPT09ICdjcm9wX3R5cGUnID8gJ9mG2KrYp9im2Kwg2KrYtdmG2YrZgSDYp9mE2YXYrdin2LXZitmEJyA6ICfYrtix2YrYt9ipINi12K3YqSDYp9mE2YbYqNin2KonXHJcbiAgICB9KTtcclxuXHJcbiAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobmV3TGF5ZXIpO1xyXG4gICAgc2V0Q3VycmVudEFuYWx5c2lzTGF5ZXIobmV3TGF5ZXIpO1xyXG5cclxuICAgIHNldE1lc3NhZ2Uoe1xyXG4gICAgICB0ZXh0OiBsYXllciA9PT0gJ2Nyb3BfdHlwZScgPyAn2KrZhSDYudix2LYg2LfYqNmC2Kkg2KrYtdmG2YrZgSDYp9mE2YXYrdin2LXZitmELicgOiAn2KrZhSDYudix2LYg2LfYqNmC2Kkg2LXYrdipINin2YTZhtio2KfYqi4nLFxyXG4gICAgICB0eXBlOiAnc3VjY2VzcydcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlRGF0ZXMgPSAoc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHNEYXRlID0gbmV3IERhdGUoc3RhcnQpO1xyXG4gICAgY29uc3QgZURhdGUgPSBuZXcgRGF0ZShlbmQpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcblxyXG4gICAgaWYgKGlzTmFOKHNEYXRlLmdldFRpbWUoKSkgfHwgaXNOYU4oZURhdGUuZ2V0VGltZSgpKSkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIG1lc3NhZ2U6ICfYqtmG2LPZitmCINin2YTYqtin2LHZitiuINi62YrYsSDYtdin2YTYrS4nIH07XHJcbiAgICB9XHJcbiAgICBpZiAoc0RhdGUgPiBlRGF0ZSkge1xyXG4gICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIG1lc3NhZ2U6ICfYqtin2LHZitiuINin2YTYqNiv2KEg2YrYrNioINij2YYg2YrZg9mI2YYg2YLYqNmEINiq2KfYsdmK2K4g2KfZhNin2YbYqtmH2KfYoS4nIH07XHJcbiAgICB9XHJcbiAgICBpZiAoc0RhdGUgPiB0b2RheSB8fCBlRGF0ZSA+IHRvZGF5KSB7XHJcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogJ9in2YTYqtmI2KfYsdmK2K4g2YTYpyDZitmF2YPZhiDYo9mGINiq2YPZiNmGINmB2Yog2KfZhNmF2LPYqtmC2KjZhC4nIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguY2VpbCgoZURhdGUuZ2V0VGltZSgpIC0gc0RhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICBpZiAoZGlmZkRheXMgPiAzNjYpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiAn2KfZhNmB2KrYsdipINin2YTYstmF2YbZitipINmE2Kcg2YrYrNioINij2YYg2KrYqtis2KfZiNiyIDM2NiDZitmI2YXYp9mLLicgfTtcclxuICAgIH1cclxuICAgIGlmIChkaWZmRGF5cyA8IDEpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiAn2YrYrNioINij2YYg2YrZg9mI2YYg2YfZhtin2YMg2YrZiNmFINmI2KfYrdivINi52YTZiSDYp9mE2KPZgtmEINio2YrZhiDYp9mE2KrZiNin2LHZitiuLicgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBtZXNzYWdlOiAnJyB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJ1bkVzcmlOZHZpQW5hbHlzaXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbSW1hZ2VyeUxheWVyLCBSYXN0ZXJGdW5jdGlvbl0gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS9sYXllcnMvSW1hZ2VyeUxheWVyJyxcclxuICAgICAgICAnZXNyaS9sYXllcnMvc3VwcG9ydC9SYXN0ZXJGdW5jdGlvbidcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBpZiAoY3VycmVudEFuYWx5c2lzTGF5ZXIgJiYgamltdU1hcFZpZXc/LnZpZXc/Lm1hcCkge1xyXG4gICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZShjdXJyZW50QW5hbHlzaXNMYXllcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5kdmlCYW5kVHJhbnNmb3JtID0gbmV3IFJhc3RlckZ1bmN0aW9uKHtcclxuICAgICAgICBmdW5jdGlvbk5hbWU6ICdORFZJJyxcclxuICAgICAgICBmdW5jdGlvbkFyZ3VtZW50czoge1xyXG4gICAgICAgICAgVmlzaWJsZUJhbmQ6IDQsXHJcbiAgICAgICAgICBJbmZyYXJlZEJhbmQ6IDUsXHJcbiAgICAgICAgICBTY2llbnRpZmljT3V0cHV0OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjb2xvcm1hcFRyYW5zZm9ybSA9IG5ldyBSYXN0ZXJGdW5jdGlvbih7XHJcbiAgICAgICAgZnVuY3Rpb25OYW1lOiAnQ29sb3JtYXAnLFxyXG4gICAgICAgIGZ1bmN0aW9uQXJndW1lbnRzOiB7XHJcbiAgICAgICAgICBDb2xvcm1hcE5hbWU6ICdORFZJMycsXHJcbiAgICAgICAgICBSYXN0ZXI6IG5kdmlCYW5kVHJhbnNmb3JtXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBmaW5hbFJhc3RlckZ1bmN0aW9uID0gY29sb3JtYXBUcmFuc2Zvcm07XHJcbiAgICAgIGlmIChkcmF3bkdlb21ldHJ5KSB7XHJcbiAgICAgICAgZmluYWxSYXN0ZXJGdW5jdGlvbiA9IG5ldyBSYXN0ZXJGdW5jdGlvbih7XHJcbiAgICAgICAgICBmdW5jdGlvbk5hbWU6ICdDbGlwJyxcclxuICAgICAgICAgIGZ1bmN0aW9uQXJndW1lbnRzOiB7XHJcbiAgICAgICAgICAgIENsaXBwaW5nR2VvbWV0cnk6IGRyYXduR2VvbWV0cnksXHJcbiAgICAgICAgICAgIENsaXBwaW5nVHlwZTogMSxcclxuICAgICAgICAgICAgUmFzdGVyOiBjb2xvcm1hcFRyYW5zZm9ybVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZHZpTGF5ZXIgPSBuZXcgSW1hZ2VyeUxheWVyKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2xhbmRzYXQyLmFyY2dpcy5jb20vYXJjZ2lzL3Jlc3Qvc2VydmljZXMvTGFuZHNhdDhfVmlld3MvSW1hZ2VTZXJ2ZXInLFxyXG4gICAgICAgIHJhc3RlckZ1bmN0aW9uOiBmaW5hbFJhc3RlckZ1bmN0aW9uLFxyXG4gICAgICAgIG9wYWNpdHk6IGxheWVyT3BhY2l0eSxcclxuICAgICAgICB0aXRsZTogJ9mF2KTYtNixINi12K3YqSDYp9mE2YbYqNin2KogKE5EVkkpJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChqaW11TWFwVmlldz8udmlldz8ubWFwKSB7XHJcbiAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKG5kdmlMYXllcik7XHJcbiAgICAgICAgc2V0Q3VycmVudEFuYWx5c2lzTGF5ZXIobmR2aUxheWVyKTtcclxuXHJcbiAgICAgICAgaWYgKGRyYXduR2VvbWV0cnkpIHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuZ29UbyhkcmF3bkdlb21ldHJ5LmV4dGVudC5leHBhbmQoMS4zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRNZXNzYWdlKHsgdGV4dDogJ9iq2YUg2KXZhti02KfYoSDYrtix2YrYt9ipIE5EVkkg2KfZhNmF2K3Yr9iv2Kkg2KjYp9mE2YXZhti32YLYqSDYqNmG2KzYp9itLicsIHR5cGU6ICdzdWNjZXNzJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfZgdi02YQg2KrYrdmE2YrZhCBORFZJOicsIGVycik7XHJcbiAgICAgIHNldE1lc3NhZ2UoeyB0ZXh0OiAn2K3Yr9irINiu2LfYoyDYo9ir2YbYp9ihINiq2K3ZhdmK2YQg2K7Yr9mF2KfYqiBORFZJLicsIHR5cGU6ICdlcnJvcicgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUnVuQW5hbHlzaXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKG51bGwpO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICBzZXRNZXNzYWdlKHsgdGV4dDogJ9mK2LHYrNmJINiq2LPYrNmK2YQg2KfZhNiv2K7ZiNmEINmE2YTZiNi12YjZhCDZhNmH2LDZhyDYp9mE2K7Yr9mF2KkuJywgdHlwZTogJ3dhcm5pbmcnIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE51bWJlcih1c2VyLmNyZWRpdHMgPz8gMCkgPD0gMCkge1xyXG4gICAgICBzZXRNZXNzYWdlKHsgdGV4dDogJ9mG2Y7ZgdmQ2K8g2LHYtdmK2K/ZgyDYp9mE2YXYqtin2K0hINmK2LHYrNmJINin2YTYtNit2YYg2YTZhNmF2KrYp9io2LnYqS4nLCB0eXBlOiAnd2FybmluZycgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRyYXduR2VvbWV0cnkpIHtcclxuICAgICAgc2V0TWVzc2FnZSh7IHRleHQ6ICfZitix2KzZiSDYsdiz2YUg2K3Yr9mI2K8g2KfZhNmF2YbYt9mC2Kkg2KfZhNmF2LPYqtmH2K/ZgdipINij2YjZhNin2YsuJywgdHlwZTogJ3dhcm5pbmcnIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0ZVZhbGlkYXRpb24gPSB2YWxpZGF0ZURhdGVzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XHJcbiAgICBpZiAoIWRhdGVWYWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoeyB0ZXh0OiBkYXRlVmFsaWRhdGlvbi5tZXNzYWdlLCB0eXBlOiAnZXJyb3InIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFJlc3VsdHMobnVsbCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGFuYWx5c2lzVHlwZSA9PT0gJ25kdmknKSB7XHJcbiAgICAgICAgYXdhaXQgcnVuRXNyaU5kdmlBbmFseXNpcygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IFtXZWJUaWxlTGF5ZXIsIHdlYk1lcmNhdG9yVXRpbHNdID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgICAnZXNyaS9sYXllcnMvV2ViVGlsZUxheWVyJyxcclxuICAgICAgICAgICdlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlscydcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkR2VvbWV0cnkgPSBmb3JtYXRHZW9tZXRyeVRvR2VvSlNPTihkcmF3bkdlb21ldHJ5LCB3ZWJNZXJjYXRvclV0aWxzKTtcclxuICAgICAgICBpZiAoIWZvcm1hdHRlZEdlb21ldHJ5KSB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlKHsgdGV4dDogJ9mB2LTZhCDYp9iz2KrYrtix2KfYrCDYpdit2K/Yp9ir2YrYp9iqINin2YTZhdmG2LfZgtipLicsIHR5cGU6ICdlcnJvcicgfSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50QW5hbHlzaXNMYXllciAmJiBqaW11TWFwVmlldz8udmlldz8ubWFwKSB7XHJcbiAgICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUoY3VycmVudEFuYWx5c2lzTGF5ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgIGFuYWx5c2lzX3R5cGU6ICdjcm9wX3R5cGUnLFxyXG4gICAgICAgICAgcHJvamVjdF9pZDogMSxcclxuICAgICAgICAgIHRlc3RTdGFydERhdGU6IHN0YXJ0RGF0ZSxcclxuICAgICAgICAgIHRlc3RFbmREYXRlOiBlbmREYXRlLFxyXG4gICAgICAgICAgZ2VvbWV0cnk6IGZvcm1hdHRlZEdlb21ldHJ5XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbnVtZXJpY1Rlc3RlcklkID0gdXNlci5pZCA/IE51bWJlcih1c2VyLmlkKSA6IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9nYWlwL2NsYXNzaWZ5JywgcGF5bG9hZCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnWC1UZXN0ZXItSWQnOiBudW1lcmljVGVzdGVySWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5hbHlzaXNSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE/LmdhaXBfcmVzcG9uc2UgPz8gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zdCB7IGNyb3BfYXJlYXNfZmVkZGFucywgY3JvcF9oZWFsdGhfZmVkZGFucywgbWFwc191cmxzLCBwYXNzZWRfbWV0YWRhdGEgfSA9IGFuYWx5c2lzUmVzcG9uc2UgfHwge307XHJcblxyXG4gICAgICAgIHNldFJlc3VsdHMoe1xyXG4gICAgICAgICAgY3JvcF9hcmVhc19mZWRkYW5zOiBjcm9wX2FyZWFzX2ZlZGRhbnMgfHwge30sXHJcbiAgICAgICAgICBjcm9wX2hlYWx0aF9mZWRkYW5zOiBjcm9wX2hlYWx0aF9mZWRkYW5zIHx8IHt9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbGVVcmxzRGF0YSA9IHtcclxuICAgICAgICAgIGNyb3BfdHlwZTogbWFwc191cmxzPy5jcm9wX3R5cGVfdGlsZXMgfHwgbWFwc191cmxzPy50aWxlcyxcclxuICAgICAgICAgIGNyb3BfaGVhbHRoOiBtYXBzX3VybHM/LmNyb3BfaGVhbHRoX3RpbGVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRUaWxlVXJscyh0aWxlVXJsc0RhdGEpO1xyXG5cclxuICAgICAgICBjb25zdCB0aWxlVXJsID0gdGlsZVVybHNEYXRhLmNyb3BfdHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHRpbGVVcmwgJiYgamltdU1hcFZpZXc/LnZpZXc/Lm1hcCkge1xyXG4gICAgICAgICAgY29uc3QgYW5hbHlzaXNMYXllciA9IG5ldyBXZWJUaWxlTGF5ZXIoe1xyXG4gICAgICAgICAgICB1cmxUZW1wbGF0ZTogdGlsZVVybCxcclxuICAgICAgICAgICAgb3BhY2l0eTogbGF5ZXJPcGFjaXR5LFxyXG4gICAgICAgICAgICB0aXRsZTogJ9mG2KrYp9im2Kwg2KrYtdmG2YrZgSDYp9mE2YXYrdin2LXZitmEJ1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGFuYWx5c2lzTGF5ZXIpO1xyXG4gICAgICAgICAgc2V0Q3VycmVudEFuYWx5c2lzTGF5ZXIoYW5hbHlzaXNMYXllcik7XHJcblxyXG4gICAgICAgICAgaWYgKGRyYXduR2VvbWV0cnkpIHtcclxuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5nb1RvKGRyYXduR2VvbWV0cnkuZXh0ZW50LmV4cGFuZCgxLjIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIPCfkr4g2K3Zgdi4INin2YTYqNmK2KfZhtin2Kog2YTYp9iz2KrYsdis2KfYudmH2Kcg2LnZhtivINin2YTYqtmG2YLZhCDZhNi12YHYrdipINin2YTZhdmC2KfYsdmG2KlcclxuICAgICAgICBjb25zdCBmaW5hbE1ldGFkYXRhID0gcGFzc2VkX21ldGFkYXRhIHx8IHBheWxvYWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RBbmFseXNpc01ldGFkYXRhJywgSlNPTi5zdHJpbmdpZnkoZmluYWxNZXRhZGF0YSkpO1xyXG5cclxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgIG5ldyBDdXN0b21FdmVudCgnY3JvcEFuYWx5c2lzQ29tcGxldGVkJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICBhbmFseXNpc1R5cGUsXHJcbiAgICAgICAgICAgICAgbWV0YWRhdGE6IGZpbmFsTWV0YWRhdGEsXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhOiBhbmFseXNpc1Jlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYXdhaXQgc3luY1VzZXJCYWxhbmNlKHVzZXIpO1xyXG4gICAgICAgIHNldE1lc3NhZ2UoeyB0ZXh0OiAn2KrZhSDYqtmG2YHZitiwINiq2K3ZhNmK2YQg2KrYtdmG2YrZgSDYp9mE2YXYrdin2LXZitmEINio2YbYrNin2K0uJywgdHlwZTogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdHZW9BSSBBbmFseXNpcyBmYWlsZWQ6JywgZXJyKTtcclxuXHJcbiAgICAgIGxldCBlcnJvck1zZyA9ICfYrdiv2Ksg2K7Yt9ijINi62YrYsSDZhdiq2YjZgti5INij2KvZhtin2KEg2YXYudin2YTYrNipINin2YTYqNmK2KfZhtin2KouJztcclxuICAgICAgaWYgKGVyci5yZXNwb25zZT8uZGF0YT8uZGV0YWlsKSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZXJyLnJlc3BvbnNlLmRhdGEuZGV0YWlsO1xyXG4gICAgICAgIGVycm9yTXNnID0gQXJyYXkuaXNBcnJheShkZXRhaWwpXHJcbiAgICAgICAgICA/IChkZXRhaWxbMF0/Lm1zZyB8fCBKU09OLnN0cmluZ2lmeShkZXRhaWwpKVxyXG4gICAgICAgICAgOiAodHlwZW9mIGRldGFpbCA9PT0gJ3N0cmluZycgPyBkZXRhaWwgOiBKU09OLnN0cmluZ2lmeShkZXRhaWwpKTtcclxuICAgICAgfSBlbHNlIGlmIChlcnIubWVzc2FnZSkge1xyXG4gICAgICAgIGVycm9yTXNnID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldE1lc3NhZ2UoeyB0ZXh0OiBlcnJvck1zZywgdHlwZTogJ2Vycm9yJyB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEdyb3d0aFN0YWdlID0gKGNyb3BUeXBlOiBzdHJpbmcsIGRhdGVTdHI6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFjcm9wVHlwZSB8fCAhZGF0ZVN0cikgcmV0dXJuICfYutmK2LEg2YXYrdiv2K8nO1xyXG4gICAgY29uc3QgZW5kID0gbmV3IERhdGUoZGF0ZVN0cik7XHJcbiAgICBsZXQgcGxhbnRpbmdEYXRlOiBEYXRlO1xyXG5cclxuICAgIGlmIChjcm9wVHlwZSA9PT0gJ1doZWF0Jykge1xyXG4gICAgICBjb25zdCB5ZWFyID0gZW5kLmdldE1vbnRoKCkgPj0gMTAgPyBlbmQuZ2V0RnVsbFllYXIoKSA6IGVuZC5nZXRGdWxsWWVhcigpIC0gMTtcclxuICAgICAgcGxhbnRpbmdEYXRlID0gbmV3IERhdGUoYCR7eWVhcn0tMTEtMDFgKTtcclxuICAgIH0gZWxzZSBpZiAoY3JvcFR5cGUgPT09ICdDb3JuJykge1xyXG4gICAgICBwbGFudGluZ0RhdGUgPSBuZXcgRGF0ZShgJHtlbmQuZ2V0RnVsbFllYXIoKX0tMDUtMDFgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAn2LrZitixINmF2K3Yr9ivJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IE1hdGguZmxvb3IoKGVuZC5nZXRUaW1lKCkgLSBwbGFudGluZ0RhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcblxyXG4gICAgaWYgKGNyb3BUeXBlID09PSAnV2hlYXQnKSB7XHJcbiAgICAgIGlmIChkaWZmRGF5cyA8IDQwKSByZXR1cm4gJ9il2YbYqNin2KogKFNlZWRsaW5nKSc7XHJcbiAgICAgIGlmIChkaWZmRGF5cyA8IDkwKSByZXR1cm4gJ9mG2YXZiCDYrti22LHZiiAoVmVnZXRhdGl2ZSknO1xyXG4gICAgICByZXR1cm4gJ9mG2LbYrCAoTWF0dXJhdGlvbiknO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGRpZmZEYXlzIDwgMzApIHJldHVybiAn2KXZhtio2KfYqiAoU2VlZGxpbmcpJztcclxuICAgICAgaWYgKGRpZmZEYXlzIDwgNzApIHJldHVybiAn2YbZhdmIINiu2LbYsdmKIChWZWdldGF0aXZlKSc7XHJcbiAgICAgIHJldHVybiAn2YbYttisIChNYXR1cmF0aW9uKSc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcHV0ZUNsYXNzaWZpY2F0aW9uTWV0cmljcyA9ICgpID0+IHtcclxuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgY3JvcEFyZWFzID0gcmVzdWx0cy5jcm9wX2FyZWFzX2ZlZGRhbnMgfHwge307XHJcbiAgICBjb25zdCBjcm9wSGVhbHRoID0gcmVzdWx0cy5jcm9wX2hlYWx0aF9mZWRkYW5zIHx8IHt9O1xyXG5cclxuICAgIGNvbnN0IHdoZWF0ID0gY3JvcEFyZWFzLldoZWF0XzEgfHwgY3JvcEFyZWFzLldoZWF0IHx8IDA7XHJcbiAgICBjb25zdCBjb3JuID0gY3JvcEFyZWFzLkNvcm5fMCB8fCBjcm9wQXJlYXMuQ29ybiB8fCAwO1xyXG4gICAgY29uc3Qgbm9uQWdyaSA9IGNyb3BBcmVhcy5Ob25fYWdyaWN1bHR1cmFsXzIgfHwgY3JvcEFyZWFzLk5vbl9hZ3JpY3VsdHVyYWwgfHwgMDtcclxuXHJcbiAgICBjb25zdCB0b3RhbCA9IHdoZWF0ICsgY29ybiArIG5vbkFncmkgfHwgT2JqZWN0LnZhbHVlcyhjcm9wQXJlYXMpLnJlZHVjZSgoYSwgYikgPT4gYSArIE51bWJlcihiKSwgMCkgfHwgMTtcclxuICAgIGNvbnN0IHdoZWF0UGN0ID0gKCh3aGVhdCAvIHRvdGFsKSAqIDEwMCkudG9GaXhlZCgxKTtcclxuICAgIGNvbnN0IGNvcm5QY3QgPSAoKGNvcm4gLyB0b3RhbCkgKiAxMDApLnRvRml4ZWQoMSk7XHJcbiAgICBjb25zdCBub25BZ3JpUGN0ID0gKChub25BZ3JpIC8gdG90YWwpICogMTAwKS50b0ZpeGVkKDEpO1xyXG5cclxuICAgIGNvbnN0IGhpZ2hIID0gY3JvcEhlYWx0aC5IaWdoX1F1YWxpdHlfR3JlZW4gfHwgY3JvcEhlYWx0aC5IaWdoIHx8IDA7XHJcbiAgICBjb25zdCBtZWRIID0gY3JvcEhlYWx0aC5NZWRpdW1fUXVhbGl0eV9ZZWxsb3cgfHwgY3JvcEhlYWx0aC5NZWRpdW0gfHwgMDtcclxuICAgIGNvbnN0IGxvd0ggPSBjcm9wSGVhbHRoLkxvd19RdWFsaXR5X1JlZCB8fCBjcm9wSGVhbHRoLkxvdyB8fCAwO1xyXG4gICAgY29uc3QgdG90YWxIID0gaGlnaEggKyBtZWRIICsgbG93SCB8fCBPYmplY3QudmFsdWVzKGNyb3BIZWFsdGgpLnJlZHVjZSgoYSwgYikgPT4gYSArIE51bWJlcihiKSwgMCkgfHwgMTtcclxuXHJcbiAgICBjb25zdCBoZWFsdGhJbmRleCA9IE1hdGgucm91bmQoKGhpZ2hIICogMTAwICsgbWVkSCAqIDYwICsgbG93SCAqIDIwKSAvIHRvdGFsSCk7XHJcbiAgICBjb25zdCBkb21pbmFudENyb3AgPSB3aGVhdCA+PSBjb3JuID8gJ9in2YTZgtmF2K0gKFdoZWF0KScgOiAn2KfZhNiw2LHYqSAoQ29ybiknO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdoZWF0LFxyXG4gICAgICBjb3JuLFxyXG4gICAgICBub25BZ3JpLFxyXG4gICAgICB0b3RhbCxcclxuICAgICAgd2hlYXRQY3QsXHJcbiAgICAgIGNvcm5QY3QsXHJcbiAgICAgIG5vbkFncmlQY3QsXHJcbiAgICAgIGhpZ2hILFxyXG4gICAgICBtZWRILFxyXG4gICAgICBsb3dILFxyXG4gICAgICB0b3RhbEgsXHJcbiAgICAgIGhlYWx0aEluZGV4LFxyXG4gICAgICBkb21pbmFudENyb3AsXHJcbiAgICAgIGdyb3d0aFN0YWdlOiBnZXRHcm93dGhTdGFnZSh3aGVhdCA+PSBjb3JuID8gJ1doZWF0JyA6ICdDb3JuJywgZW5kRGF0ZSlcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWV0cmljcyA9IGNvbXB1dGVDbGFzc2lmaWNhdGlvbk1ldHJpY3MoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWFuYWx5c2lzIGppbXUtd2lkZ2V0XCIgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7KGF1dG9NYXBJZCB8fCAocHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkc1swXSkpICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXthdXRvTWFwSWQgfHwgcHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIEhlYWRlciBDYXJkICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzhweCcgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaWNvbkJhZGdlfT7wn4yxPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy50aXRsZX0+2YXZhti12Kkg2KfZhNiq2K3ZhNmK2YTYp9iqINin2YTYstix2KfYudmK2Kk8L2gzPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnN1YnRpdGxlfT5HZW9BSSAmIFJlbW90ZSBTZW5zaW5nIEVuZ2luZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5iYWxhbmNlQmFkZ2V9PlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzAuOXJlbScgfX0+4pqhPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj7Yp9mE2LHYtdmK2K86IDxzdHJvbmc+e051bWJlcih1c2VyLmNyZWRpdHMgPz8gMCl9PC9zdHJvbmc+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7IXVzZXIgPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmFsZXJ0V2FybmluZ30+XHJcbiAgICAgICAgICDimqDvuI8g2YrYsdis2Ykg2KrYs9is2YrZhCDYp9mE2K/YrtmI2YQg2YTZhNmI2LXZiNmEINil2YTZiSDYo9iv2YjYp9iqINin2YTZhdi52KfZhNis2Kkg2YjYp9mE2KrYrdmE2YrZhC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9keUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7LyogU2VsZWN0aW9uICovfVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT7ZhtmI2Lkg2KfZhNiq2K3ZhNmK2YQg2KfZhNmF2LfZhNmI2Kg6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnNlbGVjdFdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthbmFseXNpc1R5cGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuYWx5c2lzVHlwZShlLnRhcmdldC52YWx1ZSBhcyBhbnkpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5zZWxlY3R9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNyb3BfdHlwZVwiPvCfjL4g2KrYtdmG2YrZgSDYo9mG2YjYp9i5INin2YTZhdit2KfYtdmK2YQgKEdyb3AgQW5hbHlzaXMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmR2aVwiPvCfjL8g2YXYpNi02LEg2LXYrdipINin2YTZhtio2KfYqiAoTkRWSSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogRHJhd2luZyBCdXR0b24gKi99XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0RHJhd2luZ31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgLi4uc3R5bGVzLmRyYXdCdXR0b24sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZHJhd25HZW9tZXRyeSA/ICcjMTBiOTgxJyA6ICcjY2JkNWUxJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZHJhd25HZW9tZXRyeSA/ICcjZWNmZGY1JyA6ICcjZjhmYWZjJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkcmF3bkdlb21ldHJ5ID8gJyMwNDc4NTcnIDogJyMzMzQxNTUnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xcmVtJyB9fT57ZHJhd25HZW9tZXRyeSA/ICfinKgnIDogJ+Kcj++4jyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntkcmF3bkdlb21ldHJ5ID8gJ9il2LnYp9iv2Kkg2KrYrdiv2YrYryDZhdmG2LfZgtipINin2YTYr9ix2KfYs9ipJyA6ICfYsdiz2YUg2YXZhti32YLYqSDYp9mE2K/Ysdin2LPYqSDYudmE2Ykg2KfZhNiu2LHZiti32KknfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogRGF0ZSBQaWNrZXIgR3JpZCAqL31cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ncmlkMn0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfT7Yqtin2LHZitiuINin2YTYqNiv2KE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXJ0RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+2KrYp9ix2YrYriDYp9mE2YbZh9in2YrYqTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVuZERhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBPcGFjaXR5IENvbnRyb2xsZXIgKi99XHJcbiAgICAgICAgICB7Y3VycmVudEFuYWx5c2lzTGF5ZXIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMub3BhY2l0eUJveH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogJzRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3N0eWxlcy5sYWJlbH0+2LTZgdin2YHZitipINin2YTYt9io2YLYqTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcwLjhyZW0nLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiAnIzBmMTcyYScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKGxheWVyT3BhY2l0eSAqIDEwMCl9JVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgbWF4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wNVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGF5ZXJPcGFjaXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9wYWNpdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLnJhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiBMYXllciBUb2dnbGUgKENsYXNzaWZpY2F0aW9uIC8gSGVhbHRoKSAqL31cclxuICAgICAgICAgIHt0aWxlVXJscy5jcm9wX3R5cGUgJiYgdGlsZVVybHMuY3JvcF9oZWFsdGggJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMub3BhY2l0eUJveH0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9Pti32KjZgtipINin2YTYudix2LY6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNnB4JywgbWFyZ2luVG9wOiAnNnB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN3aXRjaFRpbGVMYXllcignY3JvcF90eXBlJyl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGVzLnRvZ2dsZUJ0bixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGN1cnJlbnRUaWxlTGF5ZXIgPT09ICdjcm9wX3R5cGUnID8gJyMwNTk2NjknIDogJyNmOGZhZmMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjdXJyZW50VGlsZUxheWVyID09PSAnY3JvcF90eXBlJyA/ICcjZmZmZmZmJyA6ICcjMzM0MTU1JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogY3VycmVudFRpbGVMYXllciA9PT0gJ2Nyb3BfdHlwZScgPyAnIzA1OTY2OScgOiAnI2NiZDVlMSdcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg8J+MviDYp9mE2KrYtdmG2YrZgVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hUaWxlTGF5ZXIoJ2Nyb3BfaGVhbHRoJyl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGVzLnRvZ2dsZUJ0bixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGN1cnJlbnRUaWxlTGF5ZXIgPT09ICdjcm9wX2hlYWx0aCcgPyAnIzA4OTFiMicgOiAnI2Y4ZmFmYycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGN1cnJlbnRUaWxlTGF5ZXIgPT09ICdjcm9wX2hlYWx0aCcgPyAnI2ZmZmZmZicgOiAnIzMzNDE1NScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGN1cnJlbnRUaWxlTGF5ZXIgPT09ICdjcm9wX2hlYWx0aCcgPyAnIzA4OTFiMicgOiAnI2NiZDVlMSdcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg8J+MvyDYp9mE2LXYrdipXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiBBY3Rpb24gQnV0dG9uICovfVxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSdW5BbmFseXNpc31cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLnByaW1hcnlCdXR0b24sXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBOdW1iZXIodXNlci5jcmVkaXRzID8/IDApID4gMCA/ICcjMDU5NjY5JyA6ICcjOTRhM2I4JyxcclxuICAgICAgICAgICAgICBjdXJzb3I6IGxvYWRpbmcgPyAnd2FpdCcgOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGdhcDogJzhweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPtis2KfYsdmKINin2YTZhdi52KfZhNis2KkuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4+8J+agCDYqNiv2KEg2KfZhNmF2LnYp9mE2KzYqSDZiNin2YTYqtit2YTZitmEPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgey8qIE5vdGlmaWNhdGlvbiBNZXNzYWdlcyAqL31cclxuICAgICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi5zdHlsZXMuYWxlcnRCb3gsXHJcbiAgICAgICAgICAgICAgICAuLi4obWVzc2FnZS50eXBlID09PSAnc3VjY2VzcycgPyBzdHlsZXMuYWxlcnRTdWNjZXNzIDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKG1lc3NhZ2UudHlwZSA9PT0gJ2Vycm9yJyA/IHN0eWxlcy5hbGVydEVycm9yIDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKG1lc3NhZ2UudHlwZSA9PT0gJ3dhcm5pbmcnID8gc3R5bGVzLmFsZXJ0V2FybmluZyA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihtZXNzYWdlLnR5cGUgPT09ICdpbmZvJyA/IHN0eWxlcy5hbGVydEluZm8gOiB7fSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge21lc3NhZ2UudGV4dH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiBSZXN1bHRzIEFuYWx5dGljcyBQYW5lbCAqL31cclxuICAgICAgICAgIHttZXRyaWNzICYmIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJlc3VsdHNQYW5lbH0+XHJcbiAgICAgICAgICAgICAgPGg0IHN0eWxlPXtzdHlsZXMucmVzdWx0SGVhZGVyfT7wn5OKINmF2YTYrti1INin2YTZhdik2LTYsdin2Kog2KfZhNit2YLZhNmK2Kk8L2g0PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuc3RhdHNHcmlkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5zdGF0Qm94fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5zdGF0TGFiZWx9Ptin2YTZhdiz2KfYrdipINin2YTZg9mE2YrYqTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17c3R5bGVzLnN0YXRWYWx1ZX0+e01hdGgucm91bmQobWV0cmljcy50b3RhbCl9INmB2K/Yp9mGPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5zdGF0Qm94fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5zdGF0TGFiZWx9Ptin2YTZhdit2LXZiNmEINin2YTYs9in2KbYrzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17c3R5bGVzLnN0YXRWYWx1ZX0+e21ldHJpY3MuZG9taW5hbnRDcm9wfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuc3RhdEJveH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc3RhdExhYmVsfT7Zhdix2K3ZhNipINin2YTZhtmF2Yg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3N0eWxlcy5zdGF0VmFsdWV9PnttZXRyaWNzLmdyb3d0aFN0YWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tZXRyaWNTZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206ICc2cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnNlY3Rpb25MYWJlbH0+2YXYpNi02LEg2LXYrdipINin2YTZhtio2KfYqiAoTkRWSSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMC44NXJlbScsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICcjMDU5NjY5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7bWV0cmljcy5oZWFsdGhJbmRleH0lXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJhZGdlTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmJhZGdlLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZGNmY2U3JywgY29sb3I6ICcjMTU4MDNkJywgYm9yZGVyQ29sb3I6ICcjODZlZmFjJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICDwn5+iINmF2YXYqtin2LLYqToge21ldHJpY3MuaGlnaEgudG9GaXhlZCgxKX0g2YFcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmJhZGdlLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmVmOWMzJywgY29sb3I6ICcjYTE2MjA3JywgYm9yZGVyQ29sb3I6ICcjZmRlMDQ3JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICDwn5+hINmF2KrZiNiz2LfYqToge21ldHJpY3MubWVkSC50b0ZpeGVkKDEpfSDZgVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuYmFkZ2UsIGJhY2tncm91bmRDb2xvcjogJyNmZWUyZTInLCBjb2xvcjogJyNiOTFjMWMnLCBib3JkZXJDb2xvcjogJyNmY2E1YTUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIPCflLQg2LbYudmK2YHYqToge21ldHJpY3MubG93SC50b0ZpeGVkKDEpfSDZgVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubWV0cmljU2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnNlY3Rpb25MYWJlbH0+2KfZhNiq2YjYstmK2Lkg2KfZhNmG2LPYqNmKINmE2YTZhdiz2KfYrdin2Ko6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJhZGdlTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5waWxsQmFkZ2V9Ptin2YTZgtmF2K06IHttZXRyaWNzLndoZWF0UGN0fSU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnBpbGxCYWRnZX0+2KfZhNiw2LHYqToge21ldHJpY3MuY29yblBjdH0lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5waWxsQmFkZ2V9Pti62YrYsSDYstix2KfYudmKOiB7bWV0cmljcy5ub25BZ3JpUGN0fSU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgZGlyZWN0aW9uOiAncnRsJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4wNiknLFxyXG4gICAgZm9udEZhbWlseTogJ1NlZ29lIFVJLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZicsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnMTJweCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxNHB4JyxcclxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZjFmNWY5JyxcclxuICAgIGZsZXhTaHJpbms6IDBcclxuICB9LFxyXG4gIGljb25CYWRnZToge1xyXG4gICAgd2lkdGg6ICczNnB4JyxcclxuICAgIGhlaWdodDogJzM2cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlY2ZkZjUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzEuMnJlbSdcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBmb250U2l6ZTogJzAuOTVyZW0nLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgY29sb3I6ICcjMGYxNzJhJ1xyXG4gIH0sXHJcbiAgc3VidGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMC43cmVtJyxcclxuICAgIGNvbG9yOiAnIzY0NzQ4YicsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgfSxcclxuICBiYWxhbmNlQmFkZ2U6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ2FwOiAnNHB4JyxcclxuICAgIHBhZGRpbmc6ICc0cHggMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmMGZkZjQnLFxyXG4gICAgY29sb3I6ICcjMTY2NTM0JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjYmJmN2QwJyxcclxuICAgIGZvbnRTaXplOiAnMC43NXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiA2MDBcclxuICB9LFxyXG4gIGJvZHlDb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZ2FwOiAnMTJweCdcclxuICB9LFxyXG4gIGZvcm1Hcm91cDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBnYXA6ICc0cHgnXHJcbiAgfSxcclxuICBsYWJlbDoge1xyXG4gICAgZm9udFNpemU6ICcwLjhyZW0nLFxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgY29sb3I6ICcjMzM0MTU1J1xyXG4gIH0sXHJcbiAgc2VsZWN0V3JhcHBlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICB9LFxyXG4gIHNlbGVjdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6ICc4cHggMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjYmQ1ZTEnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZmFmYycsXHJcbiAgICBmb250U2l6ZTogJzAuODI1cmVtJyxcclxuICAgIGNvbG9yOiAnIzFlMjkzYicsXHJcbiAgICBvdXRsaW5lOiAnbm9uZSdcclxuICB9LFxyXG4gIGlucHV0OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NiZDVlMScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGZvbnRTaXplOiAnMC44MjVyZW0nLFxyXG4gICAgY29sb3I6ICcjMWUyOTNiJyxcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgb3V0bGluZTogJ25vbmUnXHJcbiAgfSxcclxuICBncmlkMjoge1xyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLFxyXG4gICAgZ2FwOiAnMTBweCdcclxuICB9LFxyXG4gIGRyYXdCdXR0b246IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGdhcDogJzhweCcsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICBmb250U2l6ZTogJzAuODI1cmVtJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UnXHJcbiAgfSxcclxuICBvcGFjaXR5Qm94OiB7XHJcbiAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmYWZjJyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCdcclxuICB9LFxyXG4gIHJhbmdlSW5wdXQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBhY2NlbnRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcidcclxuICB9LFxyXG4gIHByaW1hcnlCdXR0b246IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiAnMTFweCcsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDJweCA2cHggcmdiYSg1LCAxNTAsIDEwNSwgMC4yNSknLFxyXG4gICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlJ1xyXG4gIH0sXHJcbiAgYWxlcnRCb3g6IHtcclxuICAgIHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcclxuICAgIGZvbnRTaXplOiAnMC44cmVtJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxLjQnXHJcbiAgfSxcclxuICBhbGVydFN1Y2Nlc3M6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmMGZkZjQnLFxyXG4gICAgY29sb3I6ICcjMTY2NTM0JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjYmJmN2QwJ1xyXG4gIH0sXHJcbiAgYWxlcnRFcnJvcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZlZjJmMicsXHJcbiAgICBjb2xvcjogJyM5OTFiMWInLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZWNhY2EnXHJcbiAgfSxcclxuICBhbGVydFdhcm5pbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZiZWInLFxyXG4gICAgY29sb3I6ICcjOTI0MDBlJyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmRlNjhhJ1xyXG4gIH0sXHJcbiAgYWxlcnRJbmZvOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmOWZmJyxcclxuICAgIGNvbG9yOiAnIzA3NTk4NScsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2JhZTZmZCdcclxuICB9LFxyXG4gIHJlc3VsdHNQYW5lbDoge1xyXG4gICAgbWFyZ2luVG9wOiAnNnB4JyxcclxuICAgIHBhZGRpbmc6ICcxMnB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGZhZmMnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCdcclxuICB9LFxyXG4gIHJlc3VsdEhlYWRlcjoge1xyXG4gICAgbWFyZ2luOiAnMCAwIDEwcHggMCcsXHJcbiAgICBmb250U2l6ZTogJzAuODVyZW0nLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgY29sb3I6ICcjMGYxNzJhJ1xyXG4gIH0sXHJcbiAgc3RhdHNHcmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDMsIDFmciknLFxyXG4gICAgZ2FwOiAnNnB4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXHJcbiAgfSxcclxuICBzdGF0Qm94OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgIHBhZGRpbmc6ICc4cHggNnB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgc3RhdExhYmVsOiB7XHJcbiAgICBmb250U2l6ZTogJzAuNjc1cmVtJyxcclxuICAgIGNvbG9yOiAnIzY0NzQ4YicsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcycHgnXHJcbiAgfSxcclxuICBzdGF0VmFsdWU6IHtcclxuICAgIGZvbnRTaXplOiAnMC43NXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBjb2xvcjogJyMwZjE3MmEnXHJcbiAgfSxcclxuICBtZXRyaWNTZWN0aW9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICc4cHgnLFxyXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXHJcbiAgICBib3JkZXJUb3A6ICcxcHggZGFzaGVkICNjYmQ1ZTEnXHJcbiAgfSxcclxuICBzZWN0aW9uTGFiZWw6IHtcclxuICAgIGZvbnRTaXplOiAnMC43NXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICBjb2xvcjogJyM0NzU1NjknLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzRweCdcclxuICB9LFxyXG4gIGJhZGdlTGlzdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGdhcDogJzZweCdcclxuICB9LFxyXG4gIGJhZGdlOiB7XHJcbiAgICBwYWRkaW5nOiAnNHB4IDhweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgZm9udFNpemU6ICcwLjcyNXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQnXHJcbiAgfSxcclxuICBwaWxsQmFkZ2U6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgY29sb3I6ICcjMzM0MTU1JyxcclxuICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxyXG4gICAgZm9udFNpemU6ICcwLjcyNXJlbScsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NiZDVlMSdcclxuICB9LFxyXG4gIHRvZ2dsZUJ0bjoge1xyXG4gICAgZmxleDogMSxcclxuICAgIHBhZGRpbmc6ICc4cHggMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiAnMC44cmVtJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UnXHJcbiAgfVxyXG59O1xuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=