System.register(["jimu-core/emotion","jimu-core/react","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/header-widget/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-core */ "jimu-core");



function Widget(props) {
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('main');
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showPayModal, setShowPayModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // ============================================================
    // 🔄 متابعة الصفحة الحالية
    // ============================================================
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const syncActiveTab = () => {
            var _a;
            try {
                const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.getAppStore)().getState();
                const currentPageId = (_a = state === null || state === void 0 ? void 0 : state.appRuntimeInfo) === null || _a === void 0 ? void 0 : _a.currentPageId;
                console.log('📍 Current Page ID:', currentPageId);
                if (currentPageId === 'page_4') {
                    setActiveTab('compare');
                }
                else {
                    setActiveTab('main');
                }
            }
            catch (error) {
                console.warn('⚠️ Could not detect current page:', error);
            }
        };
        syncActiveTab();
        const unsubscribe = (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.getAppStore)().subscribe(syncActiveTab);
        window.addEventListener('popstate', syncActiveTab);
        window.addEventListener('hashchange', syncActiveTab);
        return () => {
            unsubscribe();
            window.removeEventListener('popstate', syncActiveTab);
            window.removeEventListener('hashchange', syncActiveTab);
        };
    }, []);
    // ============================================================
    // 👤 متابعة حالة المستخدم
    // ============================================================
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const checkUser = () => {
            try {
                const savedUser = localStorage.getItem('user');
                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                }
                else {
                    setUser(null);
                }
            }
            catch (error) {
                console.error('❌ User data error:', error);
                setUser(null);
            }
        };
        checkUser();
        window.addEventListener('storage', checkUser);
        window.addEventListener('userStateChanged', checkUser);
        return () => {
            window.removeEventListener('storage', checkUser);
            window.removeEventListener('userStateChanged', checkUser);
        };
    }, []);
    // ============================================================
    // 🚀 Navigation
    // ============================================================
    const navigateToPage = (pageId) => {
        var _a;
        console.log('');
        console.log('========================================');
        console.log('🚀 NAVIGATE TO PAGE');
        console.log('Target Page:', pageId);
        console.log('========================================');
        try {
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.getAppStore)().getState();
            const appConfig = state === null || state === void 0 ? void 0 : state.appConfig;
            const currentPageId = (_a = state === null || state === void 0 ? void 0 : state.appRuntimeInfo) === null || _a === void 0 ? void 0 : _a.currentPageId;
            console.log('📍 Current Page ID:', currentPageId);
            // ========================================================
            // التأكد أن الصفحة موجودة
            // ========================================================
            const pages = appConfig === null || appConfig === void 0 ? void 0 : appConfig.pages;
            if (!pages ||
                !pages[pageId]) {
                console.error(`❌ Page "${pageId}" does not exist`);
                console.log('Available pages:', pages
                    ? Object.keys(pages)
                    : []);
                return;
            }
            console.log(`✅ Target page exists: ${pageId}`);
            // ========================================================
            // لو إحنا بالفعل في نفس الصفحة
            // ========================================================
            if (currentPageId === pageId) {
                console.log('ℹ️ Already on this page');
                return;
            }
            // ========================================================
            // قراءة الـ URL الحالي
            // ========================================================
            const currentUrl = new URL(window.location.href);
            console.log('🌐 Current URL:', currentUrl.toString());
            console.log('📍 Current pathname:', currentUrl.pathname);
            // ========================================================
            // Experience Builder عندك يستخدم:
            //
            // /experience/0/page/page_2
            //
            // أو:
            //
            // /experience/0/page/page_2?draft=true
            // ========================================================
            const pathParts = currentUrl.pathname.split('/');
            console.log('🧩 Path parts:', pathParts);
            const pageIndex = pathParts.indexOf('page');
            // ========================================================
            // لو /page/ موجود
            // ========================================================
            if (pageIndex !== -1) {
                if (pageIndex + 1 <
                    pathParts.length) {
                    console.log('🔄 Replacing current page:', pathParts[pageIndex + 1], '→', pageId);
                    pathParts[pageIndex + 1] = pageId;
                }
                else {
                    pathParts.push(pageId);
                }
            }
            else {
                // ======================================================
                // لو /page/ مش موجود
                // ======================================================
                console.log('⚠️ /page/ not found, adding it');
                pathParts.push('page', pageId);
            }
            // ========================================================
            // تحديث pathname
            // ========================================================
            currentUrl.pathname =
                pathParts.join('/');
            // ========================================================
            // إزالة الـ hash القديم
            // ========================================================
            currentUrl.hash = '';
            // ========================================================
            // تكوين URL الجديد
            // ========================================================
            const newUrl = currentUrl.pathname +
                currentUrl.search;
            console.log('🔗 NEW URL:', newUrl);
            // ========================================================
            // تحديث الـ Active Tab
            // ========================================================
            if (pageId === 'page_4') {
                setActiveTab('compare');
            }
            else {
                setActiveTab('main');
            }
            // ========================================================
            // ⭐ Navigation بدون Full Page Reload
            // ========================================================
            console.log('🚀 Navigating using History API...');
            window.history.pushState({
                pageId: pageId
            }, '', newUrl);
            console.log('✅ History updated without reload');
            // ========================================================
            // إرسال popstate
            // ========================================================
            window.dispatchEvent(new PopStateEvent('popstate', {
                state: {
                    pageId: pageId
                }
            }));
            // ========================================================
            // إرسال hashchange
            // ========================================================
            window.dispatchEvent(new Event('hashchange'));
            console.log('✅ Navigation events dispatched');
        }
        catch (error) {
            console.error('❌ Navigation Error:', error);
        }
    };
    // ============================================================
    // 🏠 Main Page
    // ============================================================
    const handleMainClick = () => {
        setActiveTab('main');
        navigateToPage('page_2');
    };
    // ============================================================
    // 📊 Compare Page
    // ============================================================
    const handleCompareClick = () => {
        setActiveTab('compare');
        navigateToPage('page_4');
    };
    // ============================================================
    // 🚪 Logout
    // ============================================================
    const handleLogout = (e) => {
        e.stopPropagation();
        localStorage.removeItem('user');
        setUser(null);
        window.dispatchEvent(new Event('userStateChanged'));
    };
    // ============================================================
    // 💳 Payment Success
    // ============================================================
    const handlePaymentSuccess = (e) => {
        if (e) {
            e.stopPropagation();
        }
        if (!user) {
            return;
        }
        const updatedUser = Object.assign(Object.assign({}, user), { credits: 10 });
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        window.dispatchEvent(new Event('userStateChanged'));
        setShowPayModal(false);
        setMessage('🎉 تم تجديد الاشتراك! لديك 10 محاولات الآن.');
        setTimeout(() => {
            setMessage('');
        }, 4000);
    };
    // ============================================================
    // 🎨 UI
    // ============================================================
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "widget-header jimu-widget", style: styles.container, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.topHeader, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.brandGroup, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: styles.logoBadge, children: "GAIP" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: styles.appName, children: "Geospatial Agriculture Intelligence Platform" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.tabsGroup, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handleMainClick, style: Object.assign(Object.assign({}, styles.tabBtn), (activeTab === 'main'
                                    ? styles.activeTabBtn
                                    : {})), children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\uD83C\uDFE0 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handleCompareClick, style: Object.assign(Object.assign({}, styles.tabBtn), (activeTab === 'compare'
                                    ? styles.activeTabBtn
                                    : {})), children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\uD83D\uDCCA \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629" }) })] }), user ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.userSection, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, styles.creditBadge), { backgroundColor: user.credits > 0
                                        ? '#e8f5e9'
                                        : '#ffebee', color: user.credits > 0
                                        ? '#2e7d32'
                                        : '#c62828', borderColor: user.credits > 0
                                        ? '#a5d6a7'
                                        : '#ef9a9a' }), onClick: () => setShowPayModal(true), title: "\u0627\u0636\u063A\u0637 \u0644\u062A\u062C\u062F\u064A\u062F \u0627\u0644\u0631\u0635\u064A\u062F", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["\u26A1 \u0627\u0644\u0631\u0635\u064A\u062F:", ' ', (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: user.credits }), "/10"] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.profileBadge, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: styles.userEmail, title: user.email, children: ["\uD83D\uDC64", ' ', user.email.split('@')[0]] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handleLogout, style: styles.logoutBtn, title: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C", children: "\uD83D\uDEAA \u062E\u0631\u0648\u062C" })] })] })) : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: styles.guestBadge, children: "\uD83D\uDD12 \u063A\u064A\u0631 \u0645\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" }))] }), message && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: styles.toastMessage, children: message })), showPayModal && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: styles.modalOverlay, onClick: () => setShowPayModal(false), children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.modalContent, onClick: (e) => e.stopPropagation(), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                fontSize: '2.5rem',
                                marginBottom: '6px'
                            }, children: "\uD83D\uDCB3" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { style: {
                                color: '#1b5e20',
                                margin: '0 0 8px 0'
                            }, children: "\u062A\u062C\u062F\u064A\u062F \u0627\u0634\u062A\u0631\u0627\u0643 GAIP" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { style: {
                                color: '#555',
                                fontSize: '0.85rem',
                                lineHeight: '1.4',
                                marginBottom: '14px'
                            }, children: ["\u0627\u062D\u0635\u0644 \u0639\u0644\u0649", ' ', (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: "10 \u0645\u062D\u0627\u0648\u0644\u0627\u062A \u062A\u062D\u0644\u064A\u0644 \u062C\u062F\u064A\u062F\u0629" }), ' ', "\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0641\u064A \u0646\u0645\u0627\u0630\u062C NDVI \u0648\u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u0643\u0627\u0646\u064A\u0629."] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: styles.priceTag, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: {
                                        fontSize: '0.9rem'
                                    }, children: ["\u0627\u0644\u0642\u064A\u0645\u0629:", ' '] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: {
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        color: '#007ac2'
                                    }, children: "$10.00" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                                display: 'flex',
                                gap: '8px',
                                justifyContent: 'center',
                                marginTop: '16px'
                            }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handlePaymentSuccess, style: styles.payNowBtn, children: "\u26A1 Pay Now" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: () => setShowPayModal(false), style: styles.closeBtn, children: "\u0625\u0644\u063A\u0627\u0621" })] })] }) }))] }));
}
// ============================================================
// 🎨 STYLES
// ============================================================
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #e2e8f0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        direction: 'rtl',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        position: 'relative'
    },
    topHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 16px',
        height: '100%'
    },
    brandGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    logoBadge: {
        backgroundColor: '#1b5e20',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '0.85rem',
        padding: '4px 10px',
        borderRadius: '6px',
        letterSpacing: '1px'
    },
    appName: {
        fontSize: '0.9rem',
        fontWeight: 'bold',
        color: '#1e293b'
    },
    tabsGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: '#f8fafc',
        padding: '4px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
    },
    tabBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#64748b',
        fontSize: '0.825rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    },
    activeTabBtn: {
        backgroundColor: '#ffffff',
        color: '#059669',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    creditBadge: {
        fontSize: '0.8rem',
        padding: '4px 10px',
        borderRadius: '20px',
        border: '1px solid',
        cursor: 'pointer',
        userSelect: 'none'
    },
    profileBadge: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#f8fafc',
        padding: '4px 8px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
    },
    userEmail: {
        fontSize: '0.8rem',
        fontWeight: 600,
        color: '#334155',
        maxWidth: '100px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    logoutBtn: {
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        color: '#991b1b',
        fontSize: '0.75rem',
        cursor: 'pointer',
        padding: '3px 6px',
        borderRadius: '4px',
        fontWeight: 'bold'
    },
    guestBadge: {
        fontSize: '0.8rem',
        color: '#64748b',
        backgroundColor: '#f1f5f9',
        padding: '4px 10px',
        borderRadius: '6px'
    },
    toastMessage: {
        position: 'absolute',
        bottom: '-35px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#323232',
        color: '#fff',
        padding: '6px 14px',
        borderRadius: '4px',
        fontSize: '0.8rem',
        zIndex: 1000
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        width: '280px',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)'
    },
    priceTag: {
        backgroundColor: '#f0f7ff',
        padding: '8px',
        borderRadius: '6px',
        display: 'inline-block'
    },
    payNowBtn: {
        backgroundColor: '#2e7d32',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '0.85rem'
    },
    closeBtn: {
        backgroundColor: '#eceff1',
        color: '#455a64',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.85rem'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9oZWFkZXItd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNLO0FBU3pDLFNBQVMsTUFBTSxDQUFDLEtBQTBCO0lBQ3ZELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsK0NBQVEsQ0FBcUIsTUFBTSxDQUFDLENBQUM7SUFDdkUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRywrQ0FBUSxDQUFrQixJQUFJLENBQUMsQ0FBQztJQUN4RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFD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VTtRQUNuQixZQUFZLEVBQUUsS0FBSztRQUNuQixVQUFVLEVBQUUsTUFBTTtRQUNsQixNQUFNLEVBQUUsU0FBUztRQUNqQixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUVELFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxTQUFTO1FBQzFCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFLFVBQVU7UUFDbkIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsTUFBTSxFQUFFLFNBQVM7UUFDakIsUUFBUSxFQUFFLFNBQVM7S0FDcEI7Q0FDRixDQUFDO0FBQ00sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaGVhZGVyLXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBbGxXaWRnZXRQcm9wcywgZ2V0QXBwU3RvcmUgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJEYXRhIHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGNyZWRpdHM6IG51bWJlcjtcclxuICB0b2tlbjogc3RyaW5nO1xyXG4gIGlkPzogbnVtYmVyIHwgc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IEFsbFdpZGdldFByb3BzPGFueT4pIHtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8J21haW4nIHwgJ2NvbXBhcmUnPignbWFpbicpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJEYXRhIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3Nob3dQYXlNb2RhbCwgc2V0U2hvd1BheU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIPCflIQg2YXYqtin2KjYudipINin2YTYtdmB2K3YqSDYp9mE2K3Yp9mE2YrYqVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzeW5jQWN0aXZlVGFiID0gKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZUlkID1cclxuICAgICAgICAgIHN0YXRlPy5hcHBSdW50aW1lSW5mbz8uY3VycmVudFBhZ2VJZDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfk40gQ3VycmVudCBQYWdlIElEOicsIGN1cnJlbnRQYWdlSWQpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFBhZ2VJZCA9PT0gJ3BhZ2VfNCcpIHtcclxuICAgICAgICAgIHNldEFjdGl2ZVRhYignY29tcGFyZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRBY3RpdmVUYWIoJ21haW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgJ+KaoO+4jyBDb3VsZCBub3QgZGV0ZWN0IGN1cnJlbnQgcGFnZTonLFxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHN5bmNBY3RpdmVUYWIoKTtcclxuXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9XHJcbiAgICAgIGdldEFwcFN0b3JlKCkuc3Vic2NyaWJlKHN5bmNBY3RpdmVUYWIpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAncG9wc3RhdGUnLFxyXG4gICAgICBzeW5jQWN0aXZlVGFiXHJcbiAgICApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnaGFzaGNoYW5nZScsXHJcbiAgICAgIHN5bmNBY3RpdmVUYWJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICdwb3BzdGF0ZScsXHJcbiAgICAgICAgc3luY0FjdGl2ZVRhYlxyXG4gICAgICApO1xyXG5cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgJ2hhc2hjaGFuZ2UnLFxyXG4gICAgICAgIHN5bmNBY3RpdmVUYWJcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyDwn5GkINmF2KrYp9io2LnYqSDYrdin2YTYqSDYp9mE2YXYs9iq2K7Yr9mFXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrVXNlciA9ICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzYXZlZFVzZXIgPVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuXHJcbiAgICAgICAgaWYgKHNhdmVkVXNlcikge1xyXG4gICAgICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHNhdmVkVXNlcikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgJ+KdjCBVc2VyIGRhdGEgZXJyb3I6JyxcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja1VzZXIoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ3N0b3JhZ2UnLFxyXG4gICAgICBjaGVja1VzZXJcclxuICAgICk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICd1c2VyU3RhdGVDaGFuZ2VkJyxcclxuICAgICAgY2hlY2tVc2VyXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICdzdG9yYWdlJyxcclxuICAgICAgICBjaGVja1VzZXJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICd1c2VyU3RhdGVDaGFuZ2VkJyxcclxuICAgICAgICBjaGVja1VzZXJcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyDwn5qAIE5hdmlnYXRpb25cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBjb25zdCBuYXZpZ2F0ZVRvUGFnZSA9IChwYWdlSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJycpO1xyXG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5qAIE5BVklHQVRFIFRPIFBBR0UnKTtcclxuICAgIGNvbnNvbGUubG9nKCdUYXJnZXQgUGFnZTonLCBwYWdlSWQpO1xyXG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdGF0ZSA9XHJcbiAgICAgICAgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgY29uc3QgYXBwQ29uZmlnID1cclxuICAgICAgICBzdGF0ZT8uYXBwQ29uZmlnO1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFBhZ2VJZCA9XHJcbiAgICAgICAgc3RhdGU/LmFwcFJ1bnRpbWVJbmZvPy5jdXJyZW50UGFnZUlkO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ/Cfk40gQ3VycmVudCBQYWdlIElEOicsXHJcbiAgICAgICAgY3VycmVudFBhZ2VJZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8g2KfZhNiq2KPZg9ivINij2YYg2KfZhNi12YHYrdipINmF2YjYrNmI2K/YqVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPVxyXG4gICAgICAgIGFwcENvbmZpZz8ucGFnZXM7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXBhZ2VzIHx8XHJcbiAgICAgICAgIXBhZ2VzW3BhZ2VJZF1cclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIGDinYwgUGFnZSBcIiR7cGFnZUlkfVwiIGRvZXMgbm90IGV4aXN0YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgJ0F2YWlsYWJsZSBwYWdlczonLFxyXG4gICAgICAgICAgcGFnZXNcclxuICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhwYWdlcylcclxuICAgICAgICAgICAgOiBbXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYOKchSBUYXJnZXQgcGFnZSBleGlzdHM6ICR7cGFnZUlkfWBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vINmE2Ygg2KXYrdmG2Kcg2KjYp9mE2YHYudmEINmB2Yog2YbZgdizINin2YTYtdmB2K3YqVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRQYWdlSWQgPT09IHBhZ2VJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgJ+KEue+4jyBBbHJlYWR5IG9uIHRoaXMgcGFnZSdcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vINmC2LHYp9ih2Kkg2KfZhNmAIFVSTCDYp9mE2K3Yp9mE2YpcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPVxyXG4gICAgICAgIG5ldyBVUkwoXHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAn8J+MkCBDdXJyZW50IFVSTDonLFxyXG4gICAgICAgIGN1cnJlbnRVcmwudG9TdHJpbmcoKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ/Cfk40gQ3VycmVudCBwYXRobmFtZTonLFxyXG4gICAgICAgIGN1cnJlbnRVcmwucGF0aG5hbWVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEV4cGVyaWVuY2UgQnVpbGRlciDYudmG2K/ZgyDZitiz2KrYrtiv2YU6XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIC9leHBlcmllbmNlLzAvcGFnZS9wYWdlXzJcclxuICAgICAgLy9cclxuICAgICAgLy8g2KPZiDpcclxuICAgICAgLy9cclxuICAgICAgLy8gL2V4cGVyaWVuY2UvMC9wYWdlL3BhZ2VfMj9kcmFmdD10cnVlXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICBjb25zdCBwYXRoUGFydHMgPVxyXG4gICAgICAgIGN1cnJlbnRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICfwn6epIFBhdGggcGFydHM6JyxcclxuICAgICAgICBwYXRoUGFydHNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhZ2VJbmRleCA9XHJcbiAgICAgICAgcGF0aFBhcnRzLmluZGV4T2YoJ3BhZ2UnKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vINmE2YggL3BhZ2UvINmF2YjYrNmI2K9cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGlmIChwYWdlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcGFnZUluZGV4ICsgMSA8XHJcbiAgICAgICAgICBwYXRoUGFydHMubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgJ/CflIQgUmVwbGFjaW5nIGN1cnJlbnQgcGFnZTonLFxyXG4gICAgICAgICAgICBwYXRoUGFydHNbcGFnZUluZGV4ICsgMV0sXHJcbiAgICAgICAgICAgICfihpInLFxyXG4gICAgICAgICAgICBwYWdlSWRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgcGF0aFBhcnRzW1xyXG4gICAgICAgICAgICBwYWdlSW5kZXggKyAxXHJcbiAgICAgICAgICBdID0gcGFnZUlkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwYXRoUGFydHMucHVzaChwYWdlSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyDZhNmIIC9wYWdlLyDZhdi0INmF2YjYrNmI2K9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAn4pqg77iPIC9wYWdlLyBub3QgZm91bmQsIGFkZGluZyBpdCdcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBwYXRoUGFydHMucHVzaChcclxuICAgICAgICAgICdwYWdlJyxcclxuICAgICAgICAgIHBhZ2VJZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vINiq2K3Yr9mK2KsgcGF0aG5hbWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGN1cnJlbnRVcmwucGF0aG5hbWUgPVxyXG4gICAgICAgIHBhdGhQYXJ0cy5qb2luKCcvJyk7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyDYpdiy2KfZhNipINin2YTZgCBoYXNoINin2YTZgtiv2YrZhVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgY3VycmVudFVybC5oYXNoID0gJyc7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyDYqtmD2YjZitmGIFVSTCDYp9mE2KzYr9mK2K9cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGNvbnN0IG5ld1VybCA9XHJcbiAgICAgICAgY3VycmVudFVybC5wYXRobmFtZSArXHJcbiAgICAgICAgY3VycmVudFVybC5zZWFyY2g7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAn8J+UlyBORVcgVVJMOicsXHJcbiAgICAgICAgbmV3VXJsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyDYqtit2K/ZitirINin2YTZgCBBY3RpdmUgVGFiXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcGFnZUlkID09PSAncGFnZV80J1xyXG4gICAgICApIHtcclxuICAgICAgICBzZXRBY3RpdmVUYWIoJ2NvbXBhcmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRBY3RpdmVUYWIoJ21haW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8g4q2QIE5hdmlnYXRpb24g2KjYr9mI2YYgRnVsbCBQYWdlIFJlbG9hZFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ/CfmoAgTmF2aWdhdGluZyB1c2luZyBIaXN0b3J5IEFQSS4uLidcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlSWQ6IHBhZ2VJZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgbmV3VXJsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAn4pyFIEhpc3RvcnkgdXBkYXRlZCB3aXRob3V0IHJlbG9hZCdcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vINil2LHYs9in2YQgcG9wc3RhdGVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBQb3BTdGF0ZUV2ZW50KFxyXG4gICAgICAgICAgJ3BvcHN0YXRlJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgICBwYWdlSWQ6IHBhZ2VJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8g2KXYsdiz2KfZhCBoYXNoY2hhbmdlXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgRXZlbnQoJ2hhc2hjaGFuZ2UnKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ+KchSBOYXZpZ2F0aW9uIGV2ZW50cyBkaXNwYXRjaGVkJ1xyXG4gICAgICApO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgJ+KdjCBOYXZpZ2F0aW9uIEVycm9yOicsXHJcbiAgICAgICAgZXJyb3JcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyDwn4+gIE1haW4gUGFnZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0IGhhbmRsZU1haW5DbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVRhYignbWFpbicpO1xyXG5cclxuICAgIG5hdmlnYXRlVG9QYWdlKFxyXG4gICAgICAncGFnZV8yJ1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyDwn5OKIENvbXBhcmUgUGFnZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0IGhhbmRsZUNvbXBhcmVDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVRhYignY29tcGFyZScpO1xyXG5cclxuICAgIG5hdmlnYXRlVG9QYWdlKFxyXG4gICAgICAncGFnZV80J1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyDwn5qqIExvZ291dFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IChcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnRcclxuICApID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXHJcbiAgICAgICd1c2VyJ1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG5cclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICBuZXcgRXZlbnQoXHJcbiAgICAgICAgJ3VzZXJTdGF0ZUNoYW5nZWQnXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8g8J+SsyBQYXltZW50IFN1Y2Nlc3NcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBjb25zdCBoYW5kbGVQYXltZW50U3VjY2VzcyA9IChcclxuICAgIGU/OiBSZWFjdC5Nb3VzZUV2ZW50XHJcbiAgKSA9PiB7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSB7XHJcbiAgICAgIC4uLnVzZXIsXHJcbiAgICAgIGNyZWRpdHM6IDEwXHJcbiAgICB9O1xyXG5cclxuICAgIHNldFVzZXIoXHJcbiAgICAgIHVwZGF0ZWRVc2VyXHJcbiAgICApO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAndXNlcicsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgIHVwZGF0ZWRVc2VyXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgIG5ldyBFdmVudChcclxuICAgICAgICAndXNlclN0YXRlQ2hhbmdlZCdcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRTaG93UGF5TW9kYWwoZmFsc2UpO1xyXG5cclxuICAgIHNldE1lc3NhZ2UoXHJcbiAgICAgICfwn46JINiq2YUg2KrYrNiv2YrYryDYp9mE2KfYtNiq2LHYp9mDISDZhNiv2YrZgyAxMCDZhdit2KfZiNmE2KfYqiDYp9mE2KLZhi4nXHJcbiAgICApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgIH0sIDQwMDApO1xyXG4gIH07XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIPCfjqggVUlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGppbXUtd2lkZ2V0XCJcclxuICAgICAgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICA+XHJcblxyXG4gICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBIRUFERVJcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRvcEhlYWRlcn0+XHJcblxyXG4gICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIEJSQU5EXHJcbiAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJyYW5kR3JvdXB9PlxyXG5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMubG9nb0JhZGdlfT5cclxuICAgICAgICAgICAgR0FJUFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuYXBwTmFtZX0+XHJcbiAgICAgICAgICAgIEdlb3NwYXRpYWwgQWdyaWN1bHR1cmUgSW50ZWxsaWdlbmNlIFBsYXRmb3JtXHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICBOQVZJR0FUSU9OIFRBQlNcclxuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGFic0dyb3VwfT5cclxuXHJcbiAgICAgICAgICB7LyogTUFJTiAqL31cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgIGhhbmRsZU1haW5DbGlja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLnRhYkJ0bixcclxuXHJcbiAgICAgICAgICAgICAgLi4uKGFjdGl2ZVRhYiA9PT0gJ21haW4nXHJcbiAgICAgICAgICAgICAgICA/IHN0eWxlcy5hY3RpdmVUYWJCdG5cclxuICAgICAgICAgICAgICAgIDoge30pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIPCfj6Ag2KfZhNix2KbZitiz2YrYqVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICB7LyogQ09NUEFSRSAqL31cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNvbXBhcmVDbGlja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLi4uc3R5bGVzLnRhYkJ0bixcclxuXHJcbiAgICAgICAgICAgICAgLi4uKGFjdGl2ZVRhYiA9PT0gJ2NvbXBhcmUnXHJcbiAgICAgICAgICAgICAgICA/IHN0eWxlcy5hY3RpdmVUYWJCdG5cclxuICAgICAgICAgICAgICAgIDoge30pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIPCfk4og2KfZhNmF2YLYp9ix2YbYqSDYp9mE2KrYp9ix2YrYrtmK2KlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICBVU0VSIFNFQ1RJT05cclxuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG5cclxuICAgICAgICB7dXNlciA/IChcclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudXNlclNlY3Rpb259PlxyXG5cclxuICAgICAgICAgICAgey8qIENSRURJVCAqL31cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgLi4uc3R5bGVzLmNyZWRpdEJhZGdlLFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgICAgdXNlci5jcmVkaXRzID4gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gJyNlOGY1ZTknXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnI2ZmZWJlZScsXHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6XHJcbiAgICAgICAgICAgICAgICAgIHVzZXIuY3JlZGl0cyA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/ICcjMmU3ZDMyJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJyNjNjI4MjgnLFxyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOlxyXG4gICAgICAgICAgICAgICAgICB1c2VyLmNyZWRpdHMgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnI2E1ZDZhNydcclxuICAgICAgICAgICAgICAgICAgICA6ICcjZWY5YTlhJ1xyXG4gICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93UGF5TW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwi2KfYtti62Lcg2YTYqtis2K/ZitivINin2YTYsdi12YrYr1wiXHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICDimqEg2KfZhNix2LXZitivOnsnICd9XHJcblxyXG4gICAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICAgIHt1c2VyLmNyZWRpdHN9XHJcbiAgICAgICAgICAgICAgICA8L2I+XHJcblxyXG4gICAgICAgICAgICAgICAgLzEwXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUFJPRklMRSAqL31cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICBzdHlsZXMucHJvZmlsZUJhZGdlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlcy51c2VyRW1haWxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgIHVzZXIuZW1haWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAg8J+RpHsnICd9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB1c2VyLmVtYWlsLnNwbGl0KFxyXG4gICAgICAgICAgICAgICAgICAgICdAJ1xyXG4gICAgICAgICAgICAgICAgICApWzBdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUxvZ291dFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgc3R5bGVzLmxvZ291dEJ0blxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi2KrYs9is2YrZhCDYp9mE2K7YsdmI2KxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIPCfmqog2K7YsdmI2KxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApIDogKFxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgIHN0eWxlcy5ndWVzdEJhZGdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg8J+UkiDYutmK2LEg2YXYs9is2YQg2KfZhNiv2K7ZiNmEXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgVE9BU1QgTUVTU0FHRVxyXG4gICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XHJcblxyXG4gICAgICB7bWVzc2FnZSAmJiAoXHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgc3R5bGVzLnRvYXN0TWVzc2FnZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIFBBWU1FTlQgTU9EQUxcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG5cclxuICAgICAge3Nob3dQYXlNb2RhbCAmJiAoXHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgc3R5bGVzLm1vZGFsT3ZlcmxheVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHNldFNob3dQYXlNb2RhbChcclxuICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgIHN0eWxlcy5tb2RhbENvbnRlbnRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMi41cmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzZweCdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg8J+Ss1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMxYjVlMjAnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDhweCAwJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDYqtis2K/ZitivINin2LTYqtix2KfZgyBHQUlQXHJcbiAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM1NTUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjg1cmVtJyxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjQnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTRweCdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg2KfYrdi12YQg2LnZhNmJeycgJ31cclxuXHJcbiAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICAxMCDZhdit2KfZiNmE2KfYqiDYqtit2YTZitmEINis2K/Zitiv2KlcclxuICAgICAgICAgICAgICA8L2I+eycgJ31cclxuXHJcbiAgICAgICAgICAgICAg2YTYp9iz2KrYrtiv2KfZhdmH2Kcg2YHZiiDZhtmF2KfYsNisIE5EVklcclxuICAgICAgICAgICAgICDZiNin2YTYqtit2YTZitmE2KfYqiDYp9mE2YXZg9in2YbZitipLlxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzLnByaWNlVGFnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzAuOXJlbSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg2KfZhNmC2YrZhdipOnsnICd9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJyZW0nLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwN2FjMidcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJDEwLjAwXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGdhcDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcclxuICAgICAgICAgICAgICAgICAgJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxNnB4J1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVBheW1lbnRTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZXMucGF5Tm93QnRuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4pqhIFBheSBOb3dcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgc2V0U2hvd1BheU1vZGFsKFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlcy5jbG9zZUJ0blxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgINil2YTYutin2KFcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICl9XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfjqggU1RZTEVTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3Qgc3R5bGVzOiB7XHJcbiAgW2tleTogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcztcclxufSA9IHtcclxuXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgYm9yZGVyQm90dG9tOlxyXG4gICAgICAnMnB4IHNvbGlkICNlMmU4ZjAnLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICAnMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDUpJyxcclxuICAgIGRpcmVjdGlvbjogJ3J0bCcsXHJcbiAgICBmb250RmFtaWx5OlxyXG4gICAgICAnU2Vnb2UgVUksIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICB9LFxyXG5cclxuICB0b3BIZWFkZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OlxyXG4gICAgICAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gIH0sXHJcblxyXG4gIGJyYW5kR3JvdXA6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ2FwOiAnMTBweCdcclxuICB9LFxyXG5cclxuICBsb2dvQmFkZ2U6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMxYjVlMjAnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiAnMC44NXJlbScsXHJcbiAgICBwYWRkaW5nOiAnNHB4IDEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIGxldHRlclNwYWNpbmc6ICcxcHgnXHJcbiAgfSxcclxuXHJcbiAgYXBwTmFtZToge1xyXG4gICAgZm9udFNpemU6ICcwLjlyZW0nLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgY29sb3I6ICcjMWUyOTNiJ1xyXG4gIH0sXHJcblxyXG4gIHRhYnNHcm91cDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBnYXA6ICc2cHgnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZmFmYycsXHJcbiAgICBwYWRkaW5nOiAnNHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBib3JkZXI6XHJcbiAgICAgICcxcHggc29saWQgI2UyZThmMCdcclxuICB9LFxyXG5cclxuICB0YWJCdG46IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ2FwOiAnNnB4JyxcclxuICAgIHBhZGRpbmc6ICc2cHggMTRweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgICd0cmFuc3BhcmVudCcsXHJcbiAgICBjb2xvcjogJyM2NDc0OGInLFxyXG4gICAgZm9udFNpemU6ICcwLjgyNXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgICdhbGwgMC4ycyBlYXNlJ1xyXG4gIH0sXHJcblxyXG4gIGFjdGl2ZVRhYkJ0bjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBjb2xvcjogJyMwNTk2NjknLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICAnMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wOCknXHJcbiAgfSxcclxuXHJcbiAgdXNlclNlY3Rpb246IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ2FwOiAnMTBweCdcclxuICB9LFxyXG5cclxuICBjcmVkaXRCYWRnZToge1xyXG4gICAgZm9udFNpemU6ICcwLjhyZW0nLFxyXG4gICAgcGFkZGluZzogJzRweCAxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXHJcbiAgfSxcclxuXHJcbiAgcHJvZmlsZUJhZGdlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGdhcDogJzhweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmYWZjJyxcclxuICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBib3JkZXI6XHJcbiAgICAgICcxcHggc29saWQgI2UyZThmMCdcclxuICB9LFxyXG5cclxuICB1c2VyRW1haWw6IHtcclxuICAgIGZvbnRTaXplOiAnMC44cmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgIGNvbG9yOiAnIzMzNDE1NScsXHJcbiAgICBtYXhXaWR0aDogJzEwMHB4JyxcclxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXHJcbiAgfSxcclxuXHJcbiAgbG9nb3V0QnRuOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmVmMmYyJyxcclxuICAgIGJvcmRlcjpcclxuICAgICAgJzFweCBzb2xpZCAjZmVjYWNhJyxcclxuICAgIGNvbG9yOiAnIzk5MWIxYicsXHJcbiAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBwYWRkaW5nOiAnM3B4IDZweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnXHJcbiAgfSxcclxuXHJcbiAgZ3Vlc3RCYWRnZToge1xyXG4gICAgZm9udFNpemU6ICcwLjhyZW0nLFxyXG4gICAgY29sb3I6ICcjNjQ3NDhiJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmMWY1ZjknLFxyXG4gICAgcGFkZGluZzogJzRweCAxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCdcclxuICB9LFxyXG5cclxuICB0b2FzdE1lc3NhZ2U6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAnLTM1cHgnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06XHJcbiAgICAgICd0cmFuc2xhdGVYKC01MCUpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMzMjMyMzInLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIHBhZGRpbmc6ICc2cHggMTRweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgZm9udFNpemU6ICcwLjhyZW0nLFxyXG4gICAgekluZGV4OiAxMDAwXHJcbiAgfSxcclxuXHJcbiAgbW9kYWxPdmVybGF5OiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgJ3JnYmEoMCwgMCwgMCwgMC42NSknLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDpcclxuICAgICAgJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDk5OTk5XHJcbiAgfSxcclxuXHJcbiAgbW9kYWxDb250ZW50OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxyXG4gICAgd2lkdGg6ICcyODBweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICAnMCA4cHggMjRweCByZ2JhKDAsMCwwLDAuMjUpJ1xyXG4gIH0sXHJcblxyXG4gIHByaWNlVGFnOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmN2ZmJyxcclxuICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXHJcbiAgfSxcclxuXHJcbiAgcGF5Tm93QnRuOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmU3ZDMyJyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzAuODVyZW0nXHJcbiAgfSxcclxuXHJcbiAgY2xvc2VCdG46IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlY2VmZjEnLFxyXG4gICAgY29sb3I6ICcjNDU1YTY0JyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgcGFkZGluZzogJzhweCAxMnB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGZvbnRTaXplOiAnMC44NXJlbSdcclxuICB9XHJcbn07XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==