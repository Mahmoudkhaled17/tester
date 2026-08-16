System.register(["jimu-core/emotion","jimu-core","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_react__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
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

/***/ "./your-extensions/widgets/auth-widget/src/runtime/components/LoginForm.tsx"
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/auth-widget/src/runtime/components/LoginForm.tsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _api_axiosConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/axiosConfig */ "./your-extensions/api/axiosConfig.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const LoginForm = ({ onLoginSuccess, switchToSignUp, }) => {
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // ============================================================
    // 🚀 Navigate to Experience Builder Page
    // ============================================================
    const navigateToPage = (pageId) => {
        console.log('');
        console.log('========================================');
        console.log('🚀 LOGIN NAVIGATION');
        console.log('Target Page:', pageId);
        console.log('========================================');
        try {
            const currentUrl = new URL(window.location.href);
            console.log('🌐 Current URL:', currentUrl.toString());
            const pathParts = currentUrl.pathname.split('/');
            console.log('🧩 Current path parts:', pathParts);
            const pageIndex = pathParts.indexOf('page');
            // ========================================================
            // لو الـ URL بالفعل فيه /page/page_x
            // ========================================================
            if (pageIndex !== -1) {
                if (pageIndex + 1 < pathParts.length) {
                    console.log('🔄 Replacing page:', pathParts[pageIndex + 1], '→', pageId);
                    pathParts[pageIndex + 1] = pageId;
                }
                else {
                    pathParts.push(pageId);
                }
            }
            // ========================================================
            // لو /page/ مش موجود
            // ========================================================
            else {
                console.log('⚠️ /page/ not found, adding it');
                pathParts.push('page', pageId);
            }
            currentUrl.pathname =
                pathParts.join('/');
            // إزالة الـ hash القديم
            currentUrl.hash = '';
            const newUrl = currentUrl.toString();
            console.log('🔗 New URL:', newUrl);
            // ========================================================
            // مهم جداً:
            // لا نستخدم window.location.href
            // عشان ما يحصلش Reload
            // ========================================================
            window.history.pushState({
                pageId,
            }, '', newUrl);
            console.log('✅ pushState executed');
            // إرسال أحداث التنقل
            window.dispatchEvent(new PopStateEvent('popstate'));
            window.dispatchEvent(new Event('hashchange'));
            console.log('✅ Navigation events dispatched');
        }
        catch (error) {
            console.error('❌ Navigation Error:', error);
        }
    };
    // ============================================================
    // 🔐 Login
    // ============================================================
    const handleLogin = (e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            // ========================================================
            // API Login
            // ========================================================
            const response = yield _api_axiosConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post('/users/login', {
                email,
                password,
            });
            console.log('LOGIN RESPONSE:', response.data);
            const data = response.data;
            // ========================================================
            // Token
            // ========================================================
            const token = (_b = (_a = data.token) !== null && _a !== void 0 ? _a : data.access_token) !== null && _b !== void 0 ? _b : '';
            // ========================================================
            // User ID
            // ========================================================
            const userId = (_f = (_d = (_c = data.id) !== null && _c !== void 0 ? _c : data.user_id) !== null && _d !== void 0 ? _d : (_e = data.user) === null || _e === void 0 ? void 0 : _e.id) !== null && _f !== void 0 ? _f : (_g = data.user) === null || _g === void 0 ? void 0 : _g.user_id;
            // ========================================================
            // Credits
            // ========================================================
            let credits = (_r = (_p = (_m = (_k = (_j = (_h = data.credits_balance) !== null && _h !== void 0 ? _h : data.credits) !== null && _j !== void 0 ? _j : data.points) !== null && _k !== void 0 ? _k : (_l = data.user) === null || _l === void 0 ? void 0 : _l.credits_balance) !== null && _m !== void 0 ? _m : (_o = data.user) === null || _o === void 0 ? void 0 : _o.credits) !== null && _p !== void 0 ? _p : (_q = data.user) === null || _q === void 0 ? void 0 : _q.points) !== null && _r !== void 0 ? _r : 0;
            // ========================================================
            // Save token
            // ========================================================
            if (token) {
                localStorage.setItem('token', token);
            }
            // ========================================================
            // Get full user data
            // ========================================================
            if (userId !== undefined &&
                userId !== null) {
                try {
                    const userResponse = yield _api_axiosConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/users/${userId}`, {
                        headers: token
                            ? {
                                Authorization: `Bearer ${token}`,
                            }
                            : {},
                    });
                    console.log('USER RESPONSE:', userResponse.data);
                    const userData = userResponse.data;
                    credits =
                        (_u = (_t = (_s = userData.credits_balance) !== null && _s !== void 0 ? _s : userData.credits) !== null && _t !== void 0 ? _t : userData.points) !== null && _u !== void 0 ? _u : credits;
                }
                catch (userError) {
                    console.warn('Could not fetch user balance:', userError);
                }
            }
            // ========================================================
            // Final User Object
            // ========================================================
            const userData = {
                id: userId,
                email: (_x = (_v = data.email) !== null && _v !== void 0 ? _v : (_w = data.user) === null || _w === void 0 ? void 0 : _w.email) !== null && _x !== void 0 ? _x : email,
                credits,
                token,
            };
            console.log('👤 FINAL USER DATA:', userData);
            // ========================================================
            // Save User
            // ========================================================
            localStorage.setItem('user', JSON.stringify(userData));
            // ========================================================
            // Notify other widgets
            // ========================================================
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new Event('userStateChanged'));
            // ========================================================
            // Notify Parent
            // ========================================================
            onLoginSuccess(userData);
            // ========================================================
            // 🚀 بعد نجاح Login
            // روح مباشرة لصفحة التحليل
            // ========================================================
            console.log('🚀 Login successful!');
            console.log('➡️ Navigating to analysis page: page_2');
            navigateToPage('page_2');
        }
        catch (err) {
            console.error('LOGIN ERROR:', err);
            const message = ((_z = (_y = err.response) === null || _y === void 0 ? void 0 : _y.data) === null || _z === void 0 ? void 0 : _z.detail) ||
                ((_1 = (_0 = err.response) === null || _0 === void 0 ? void 0 : _0.data) === null || _1 === void 0 ? void 0 : _1.message) ||
                'فشل تسجيل الدخول، تحقق من البريد الإلكتروني وكلمة المرور.';
            const normalized = Array.isArray(message)
                ? (((_2 = message[0]) === null || _2 === void 0 ? void 0 : _2.msg) ||
                    JSON.stringify(message))
                : message;
            setError(typeof normalized === 'string'
                ? normalized
                : JSON.stringify(normalized));
        }
        finally {
            setLoading(false);
        }
    });
    // ============================================================
    // 🎨 UI
    // ============================================================
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
            padding: '15px',
            direction: 'rtl',
        }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" }), error && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    color: 'red',
                    marginBottom: '10px',
                }, children: error })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleLogin, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                            marginBottom: '10px',
                        }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), style: {
                                    width: '100%',
                                    padding: '8px',
                                    marginTop: '4px',
                                    boxSizing: 'border-box',
                                } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
                            marginBottom: '15px',
                        }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), style: {
                                    width: '100%',
                                    padding: '8px',
                                    marginTop: '4px',
                                    boxSizing: 'border-box',
                                } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", disabled: loading, style: {
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007ac2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: loading
                                ? 'not-allowed'
                                : 'pointer',
                        }, children: loading
                            ? 'جاري التحقق...'
                            : 'دخول' })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { style: {
                    marginTop: '15px',
                    fontSize: '0.9rem',
                }, children: ["\u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F", ' ', (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { onClick: switchToSignUp, style: {
                            color: '#007ac2',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                        }, children: "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F" })] })] }));
};


/***/ },

/***/ "./your-extensions/widgets/auth-widget/src/runtime/components/SignUpForm.tsx"
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/auth-widget/src/runtime/components/SignUpForm.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpForm: () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _api_axiosConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/axiosConfig */ "./your-extensions/api/axiosConfig.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const SignUpForm = ({ switchToLogin, onSignUpSuccess, }) => {
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
    });
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const handleSignUp = (e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);
        try {
            const payload = new FormData();
            payload.append('first_name', formData.first_name);
            payload.append('last_name', formData.last_name);
            payload.append('email', formData.email);
            payload.append('password', formData.password);
            payload.append('phone_number', formData.phone_number);
            // POST /users/new (multipart/form-data — كما يتوقع الـ Backend)
            const response = yield _api_axiosConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post('/users/new', payload, {
                headers: { 'Content-Type': undefined }
            });
            console.log('SIGN UP RESPONSE:', response.data);
            setSuccess(true);
            // الـ Backend لا يرجع id/token هنا — لا نحفظ user مزيّف في localStorage
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            window.dispatchEvent(new Event('userStateChanged'));
            // الانتقال للـ Login بعد رسالة النجاح
            setTimeout(() => {
                switchToLogin();
            }, 1500);
        }
        catch (err) {
            console.error('SIGN UP ERROR:', err);
            let message = ((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.detail) ||
                ((_d = (_c = err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) ||
                'حدث خطأ أثناء إنشاء الحساب.';
            if (Array.isArray(message)) {
                message = ((_e = message[0]) === null || _e === void 0 ? void 0 : _e.msg) || JSON.stringify(message);
            }
            setError(typeof message === 'string' ? message : JSON.stringify(message));
        }
        finally {
            setLoading(false);
        }
    });
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: {
            padding: '15px',
            direction: 'rtl',
        }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F" }), error && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    color: 'red',
                    marginBottom: '10px',
                }, children: error })), success && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    color: 'green',
                    marginBottom: '10px',
                }, children: "\u2705 \u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628 \u0628\u0646\u062C\u0627\u062D!" })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSignUp, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: '8px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", name: "first_name", required: true, value: formData.first_name, onChange: handleChange, style: {
                                    width: '100%',
                                    padding: '6px',
                                } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: '8px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062B\u0627\u0646\u064A:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", name: "last_name", required: true, value: formData.last_name, onChange: handleChange, style: {
                                    width: '100%',
                                    padding: '6px',
                                } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: '8px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "email", name: "email", required: true, value: formData.email, onChange: handleChange, style: {
                                    width: '100%',
                                    padding: '6px',
                                } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: '8px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "tel", name: "phone_number", required: true, value: formData.phone_number, onChange: handleChange, style: {
                                    width: '100%',
                                    padding: '6px',
                                } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: '12px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "password", name: "password", required: true, value: formData.password, onChange: handleChange, style: {
                                    width: '100%',
                                    padding: '6px',
                                } })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", disabled: loading, style: {
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: loading
                                ? 'not-allowed'
                                : 'pointer',
                        }, children: loading
                            ? 'جاري التسجيل...'
                            : 'تسجيل حساب' })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { style: {
                    marginTop: '15px',
                    fontSize: '0.9rem',
                }, children: ["\u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061F", ' ', (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { onClick: switchToLogin, style: {
                            color: '#007ac2',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                        }, children: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" })] })] }));
};


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
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/auth-widget/src/runtime/widget.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LoginForm */ "./your-extensions/widgets/auth-widget/src/runtime/components/LoginForm.tsx");
/* harmony import */ var _components_SignUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SignUpForm */ "./your-extensions/widgets/auth-widget/src/runtime/components/SignUpForm.tsx");





function Widget(props) {
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('login');
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    // التأكد مما إذا كان المستخدم مسجل دخول بالفعل عند فتح التطبيق
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setView('login');
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-auth jimu-widget", style: { backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }, children: user ? (
        // في حالة تسجيل الدخول، يتم عرض الرصيد وزر الخروج
        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: '15px', direction: 'rtl' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", { children: ["\u0645\u0631\u062D\u0628\u0627\u064B\u060C ", user.email, " \uD83D\uDC4B"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { margin: '15px 0', padding: '10px', backgroundColor: '#f0f4f8', borderRadius: '4px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A: " }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", { style: { color: user.credits > 0 ? '#28a745' : '#dc3545', fontSize: '1.2rem' }, children: [user.credits, " \u0645\u062D\u0627\u0648\u0644\u0627\u062A"] })] }), user.credits === 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: { width: '100%', padding: '8px', backgroundColor: '#ffc107', border: 'none', borderRadius: '4px', marginBottom: '10px' }, children: "\uD83D\uDCB3 \u0634\u0631\u0627\u0621 \u0628\u0627\u0642\u0629 \u062C\u062F\u064A\u062F\u0629" })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handleLogout, style: { width: '100%', padding: '8px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }, children: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C" })] })) : (
        // في حالة عدم تسجيل الدخول، يتم التبديل بين Login و SignUp
        view === 'login' ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__.LoginForm, { onLoginSuccess: (userData) => setUser(userData), switchToSignUp: () => setView('signup') })) : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_4__.SignUpForm, { switchToLogin: () => setView('login') }))) }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hdXRoLXdpZGdldC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBRyw2Q0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN2QixPQUFPLEVBQUUsdUNBQXVDO0lBQ2hELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxrQkFBa0I7S0FDbkM7Q0FDRixDQUFDLENBQUM7QUFFSCxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHFCO0FBQ1M7QUFZMUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxFQUN4QixjQUFjLEVBQ2QsY0FBYyxHQUNSLEVBQUUsRUFBRTtJQUNWLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLCtDQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV2QywrREFBK0Q7SUFDL0QseUNBQXlDO0lBQ3pDLCtEQUErRDtJQUUvRCxNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztR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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLGVBQWU7QUFDMUI7QUFDQSxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFD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dEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxXQUFXLGNBQWM7QUFDaEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7O1VDcGdDRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwy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QUFDLENBQUMsQ0FBQztRQUNGLDJEQUEyRDtRQUMzRCxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNqQixnRUFBQyw0REFBUyxJQUNSLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUMvQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUN2QyxDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0YsZ0VBQUMsOERBQVUsSUFDVCxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUNyQyxDQUNILENBQ0YsR0FDRyxDQUNQLENBQUM7QUFDSixDQUFDO0FBQ08sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL2FwaS9heGlvc0NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXV0aC13aWRnZXQvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hdXRoLXdpZGdldC9zcmMvcnVudGltZS9jb21wb25lbnRzL1NpZ25VcEZvcm0udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMvYWRhcHRlcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXRGb3JtRGF0YUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9lbnYvZGF0YS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbXBvc2VTaWduYWxzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2VzdGltYXRlRGF0YVVSTERlY29kZWRCeXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZVByb3RvY29sLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcHJvZ3Jlc3NFdmVudFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9yZXNvbHZlQ29uZmlnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc2FuaXRpemVIZWFkZXJWYWx1ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwZWVkb21ldGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b0Zvcm1EYXRhLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RyYWNrU3RyZWFtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9CbG9iLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvVVJMU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F1dGgtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vdGVzdGVyLjE1Mi01My0yMzEtNzEuc3NsaXAuaW8nLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uLy4uLy4uL2FwaS9heGlvc0NvbmZpZyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG9uTG9naW5TdWNjZXNzOiAodXNlckRhdGE6IHtcclxuICAgIGlkPzogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGNyZWRpdHM6IG51bWJlcjtcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcbiAgfSkgPT4gdm9pZDtcclxuICBzd2l0Y2hUb1NpZ25VcDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luRm9ybSA9ICh7XHJcbiAgb25Mb2dpblN1Y2Nlc3MsXHJcbiAgc3dpdGNoVG9TaWduVXAsXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyDwn5qAIE5hdmlnYXRlIHRvIEV4cGVyaWVuY2UgQnVpbGRlciBQYWdlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlVG9QYWdlID0gKHBhZ2VJZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnJyk7XHJcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xyXG4gICAgY29uc29sZS5sb2coJ/CfmoAgTE9HSU4gTkFWSUdBVElPTicpO1xyXG4gICAgY29uc29sZS5sb2coJ1RhcmdldCBQYWdlOicsIHBhZ2VJZCk7XHJcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICfwn4yQIEN1cnJlbnQgVVJMOicsXHJcbiAgICAgICAgY3VycmVudFVybC50b1N0cmluZygpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBwYXRoUGFydHMgPSBjdXJyZW50VXJsLnBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAn8J+nqSBDdXJyZW50IHBhdGggcGFydHM6JyxcclxuICAgICAgICBwYXRoUGFydHNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhZ2VJbmRleCA9IHBhdGhQYXJ0cy5pbmRleE9mKCdwYWdlJyk7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyDZhNmIINin2YTZgCBVUkwg2KjYp9mE2YHYudmEINmB2YrZhyAvcGFnZS9wYWdlX3hcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGlmIChwYWdlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgaWYgKHBhZ2VJbmRleCArIDEgPCBwYXRoUGFydHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgJ/CflIQgUmVwbGFjaW5nIHBhZ2U6JyxcclxuICAgICAgICAgICAgcGF0aFBhcnRzW3BhZ2VJbmRleCArIDFdLFxyXG4gICAgICAgICAgICAn4oaSJyxcclxuICAgICAgICAgICAgcGFnZUlkXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIHBhdGhQYXJ0c1twYWdlSW5kZXggKyAxXSA9IHBhZ2VJZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGF0aFBhcnRzLnB1c2gocGFnZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vINmE2YggL3BhZ2UvINmF2LQg2YXZiNis2YjYr1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAn4pqg77iPIC9wYWdlLyBub3QgZm91bmQsIGFkZGluZyBpdCdcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBwYXRoUGFydHMucHVzaChcclxuICAgICAgICAgICdwYWdlJyxcclxuICAgICAgICAgIHBhZ2VJZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnJlbnRVcmwucGF0aG5hbWUgPVxyXG4gICAgICAgIHBhdGhQYXJ0cy5qb2luKCcvJyk7XHJcblxyXG4gICAgICAvLyDYpdiy2KfZhNipINin2YTZgCBoYXNoINin2YTZgtiv2YrZhVxyXG4gICAgICBjdXJyZW50VXJsLmhhc2ggPSAnJztcclxuXHJcbiAgICAgIGNvbnN0IG5ld1VybCA9XHJcbiAgICAgICAgY3VycmVudFVybC50b1N0cmluZygpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ/CflJcgTmV3IFVSTDonLFxyXG4gICAgICAgIG5ld1VybFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8g2YXZh9mFINis2K/Yp9mLOlxyXG4gICAgICAvLyDZhNinINmG2LPYqtiu2K/ZhSB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgICAvLyDYudi02KfZhiDZhdinINmK2K3YtdmE2LQgUmVsb2FkXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZUlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgbmV3VXJsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAn4pyFIHB1c2hTdGF0ZSBleGVjdXRlZCdcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vINil2LHYs9in2YQg2KPYrdiv2KfYqyDYp9mE2KrZhtmC2YRcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJylcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBFdmVudCgnaGFzaGNoYW5nZScpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAn4pyFIE5hdmlnYXRpb24gZXZlbnRzIGRpc3BhdGNoZWQnXHJcbiAgICAgICk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAn4p2MIE5hdmlnYXRpb24gRXJyb3I6JyxcclxuICAgICAgICBlcnJvclxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIPCflJAgTG9naW5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoXHJcbiAgICBlOiBSZWFjdC5Gb3JtRXZlbnRcclxuICApID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IoJycpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEFQSSBMb2dpblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcclxuICAgICAgICAnL3VzZXJzL2xvZ2luJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdMT0dJTiBSRVNQT05TRTonLFxyXG4gICAgICAgIHJlc3BvbnNlLmRhdGFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVG9rZW5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGNvbnN0IHRva2VuID1cclxuICAgICAgICBkYXRhLnRva2VuID8/XHJcbiAgICAgICAgZGF0YS5hY2Nlc3NfdG9rZW4gPz9cclxuICAgICAgICAnJztcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFVzZXIgSURcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9XHJcbiAgICAgICAgZGF0YS5pZCA/P1xyXG4gICAgICAgIGRhdGEudXNlcl9pZCA/P1xyXG4gICAgICAgIGRhdGEudXNlcj8uaWQgPz9cclxuICAgICAgICBkYXRhLnVzZXI/LnVzZXJfaWQ7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDcmVkaXRzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICBsZXQgY3JlZGl0cyA9XHJcbiAgICAgICAgZGF0YS5jcmVkaXRzX2JhbGFuY2UgPz9cclxuICAgICAgICBkYXRhLmNyZWRpdHMgPz9cclxuICAgICAgICBkYXRhLnBvaW50cyA/P1xyXG4gICAgICAgIGRhdGEudXNlcj8uY3JlZGl0c19iYWxhbmNlID8/XHJcbiAgICAgICAgZGF0YS51c2VyPy5jcmVkaXRzID8/XHJcbiAgICAgICAgZGF0YS51c2VyPy5wb2ludHMgPz9cclxuICAgICAgICAwO1xyXG5cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gU2F2ZSB0b2tlblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAndG9rZW4nLFxyXG4gICAgICAgICAgdG9rZW5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZXQgZnVsbCB1c2VyIGRhdGFcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHVzZXJJZCAhPT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXNlclJlc3BvbnNlID1cclxuICAgICAgICAgICAgYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgICAgICBgL3VzZXJzLyR7dXNlcklkfWAsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdG9rZW5cclxuICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAnVVNFUiBSRVNQT05TRTonLFxyXG4gICAgICAgICAgICB1c2VyUmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9XHJcbiAgICAgICAgICAgIHVzZXJSZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgIGNyZWRpdHMgPVxyXG4gICAgICAgICAgICB1c2VyRGF0YS5jcmVkaXRzX2JhbGFuY2UgPz9cclxuICAgICAgICAgICAgdXNlckRhdGEuY3JlZGl0cyA/P1xyXG4gICAgICAgICAgICB1c2VyRGF0YS5wb2ludHMgPz9cclxuICAgICAgICAgICAgY3JlZGl0cztcclxuXHJcbiAgICAgICAgfSBjYXRjaCAodXNlckVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICdDb3VsZCBub3QgZmV0Y2ggdXNlciBiYWxhbmNlOicsXHJcbiAgICAgICAgICAgIHVzZXJFcnJvclxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEZpbmFsIFVzZXIgT2JqZWN0XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgICBpZDogdXNlcklkLFxyXG4gICAgICAgIGVtYWlsOlxyXG4gICAgICAgICAgZGF0YS5lbWFpbCA/P1xyXG4gICAgICAgICAgZGF0YS51c2VyPy5lbWFpbCA/P1xyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgY3JlZGl0cyxcclxuICAgICAgICB0b2tlbixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICfwn5GkIEZJTkFMIFVTRVIgREFUQTonLFxyXG4gICAgICAgIHVzZXJEYXRhXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBTYXZlIFVzZXJcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICd1c2VyJyxcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIE5vdGlmeSBvdGhlciB3aWRnZXRzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgRXZlbnQoJ3N0b3JhZ2UnKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEV2ZW50KCd1c2VyU3RhdGVDaGFuZ2VkJylcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIE5vdGlmeSBQYXJlbnRcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIG9uTG9naW5TdWNjZXNzKFxyXG4gICAgICAgIHVzZXJEYXRhXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyDwn5qAINio2LnYryDZhtis2KfYrSBMb2dpblxyXG4gICAgICAvLyDYsdmI2K0g2YXYqNin2LTYsdipINmE2LXZgdit2Kkg2KfZhNiq2K3ZhNmK2YRcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICfwn5qAIExvZ2luIHN1Y2Nlc3NmdWwhJ1xyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ+Keoe+4jyBOYXZpZ2F0aW5nIHRvIGFuYWx5c2lzIHBhZ2U6IHBhZ2VfMidcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG5hdmlnYXRlVG9QYWdlKFxyXG4gICAgICAgICdwYWdlXzInXHJcbiAgICAgICk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgJ0xPR0lOIEVSUk9SOicsXHJcbiAgICAgICAgZXJyXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBtZXNzYWdlID1cclxuICAgICAgICBlcnIucmVzcG9uc2U/LmRhdGE/LmRldGFpbCB8fFxyXG4gICAgICAgIGVyci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fFxyXG4gICAgICAgICfZgdi02YQg2KrYs9is2YrZhCDYp9mE2K/YrtmI2YTYjCDYqtit2YLZgiDZhdmGINin2YTYqNix2YrYryDYp9mE2KXZhNmD2KrYsdmI2YbZiiDZiNmD2YTZhdipINin2YTZhdix2YjYsS4nO1xyXG5cclxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShtZXNzYWdlKVxyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgbWVzc2FnZVswXT8ubXNnIHx8XHJcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgOiBtZXNzYWdlO1xyXG5cclxuICAgICAgc2V0RXJyb3IoXHJcbiAgICAgICAgdHlwZW9mIG5vcm1hbGl6ZWQgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IG5vcm1hbGl6ZWRcclxuICAgICAgICAgIDogSlNPTi5zdHJpbmdpZnkobm9ybWFsaXplZClcclxuICAgICAgKTtcclxuXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyDwn46oIFVJXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZzogJzE1cHgnLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ3J0bCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcblxyXG4gICAgICA8aDM+XHJcbiAgICAgICAg2KrYs9is2YrZhCDYp9mE2K/YrtmI2YRcclxuICAgICAgPC9oMz5cclxuXHJcbiAgICAgIHsvKiBFUlJPUiAqL31cclxuXHJcbiAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIEZPUk0gKi99XHJcblxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVMb2dpbn1cclxuICAgICAgPlxyXG5cclxuICAgICAgICB7LyogRU1BSUwgKi99XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICDYp9mE2KjYsdmK2K8g2KfZhNil2YTZg9iq2LHZiNmG2Yo6XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBzZXRFbWFpbChcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc0cHgnLFxyXG4gICAgICAgICAgICAgIGJveFNpemluZzpcclxuICAgICAgICAgICAgICAgICdib3JkZXItYm94JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogUEFTU1dPUkQgKi99XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICDZg9mE2YXYqSDYp9mE2YXYsdmI2LE6XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBzZXRQYXNzd29yZChcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc0cHgnLFxyXG4gICAgICAgICAgICAgIGJveFNpemluZzpcclxuICAgICAgICAgICAgICAgICdib3JkZXItYm94JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogTE9HSU4gQlVUVE9OICovfVxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgICAgICAgICAgJyMwMDdhYzInLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgY3Vyc29yOiBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgPyAnbm90LWFsbG93ZWQnXHJcbiAgICAgICAgICAgICAgOiAncG9pbnRlcicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nXHJcbiAgICAgICAgICAgID8gJ9is2KfYsdmKINin2YTYqtit2YLZgi4uLidcclxuICAgICAgICAgICAgOiAn2K/YrtmI2YQnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgey8qIFNJR04gVVAgKi99XHJcblxyXG4gICAgICA8cFxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxNXB4JyxcclxuICAgICAgICAgIGZvbnRTaXplOiAnMC45cmVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcblxyXG4gICAgICAgINmE2YrYsyDZhNiv2YrZgyDYrdiz2KfYqNifeycgJ31cclxuXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICBzd2l0Y2hUb1NpZ25VcFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6ICcjMDA3YWMyJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOlxyXG4gICAgICAgICAgICAgICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDYpdmG2LTYp9ihINit2LPYp9ioINis2K/ZitivXHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPC9wPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uLy4uLy4uL2FwaS9heGlvc0NvbmZpZyc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgc3dpdGNoVG9Mb2dpbjogKCkgPT4gdm9pZDtcclxuICBvblNpZ25VcFN1Y2Nlc3M/OiAodXNlckRhdGE6IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ25VcEZvcm0gPSAoe1xyXG4gIHN3aXRjaFRvTG9naW4sXHJcbiAgb25TaWduVXBTdWNjZXNzLFxyXG59OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3RfbmFtZTogJycsXHJcbiAgICBsYXN0X25hbWU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgcGhvbmVfbnVtYmVyOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxyXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cclxuICApID0+IHtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWduVXAgPSBhc3luYyAoXHJcbiAgICBlOiBSZWFjdC5Gb3JtRXZlbnRcclxuICApID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IoJycpO1xyXG4gICAgc2V0U3VjY2VzcyhmYWxzZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBwYXlsb2FkLmFwcGVuZCgnZmlyc3RfbmFtZScsIGZvcm1EYXRhLmZpcnN0X25hbWUpO1xyXG4gICAgICBwYXlsb2FkLmFwcGVuZCgnbGFzdF9uYW1lJywgZm9ybURhdGEubGFzdF9uYW1lKTtcclxuICAgICAgcGF5bG9hZC5hcHBlbmQoJ2VtYWlsJywgZm9ybURhdGEuZW1haWwpO1xyXG4gICAgICBwYXlsb2FkLmFwcGVuZCgncGFzc3dvcmQnLCBmb3JtRGF0YS5wYXNzd29yZCk7XHJcbiAgICAgIHBheWxvYWQuYXBwZW5kKCdwaG9uZV9udW1iZXInLCBmb3JtRGF0YS5waG9uZV9udW1iZXIpO1xyXG5cclxuICAgICAgLy8gUE9TVCAvdXNlcnMvbmV3IChtdWx0aXBhcnQvZm9ybS1kYXRhIOKAlCDZg9mF2Kcg2YrYqtmI2YLYuSDYp9mE2YAgQmFja2VuZClcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3VzZXJzL25ldycsIHBheWxvYWQsIHtcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiB1bmRlZmluZWQgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTSUdOIFVQIFJFU1BPTlNFOicsIHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuXHJcbiAgICAgIC8vINin2YTZgCBCYWNrZW5kINmE2Kcg2YrYsdis2LkgaWQvdG9rZW4g2YfZhtinIOKAlCDZhNinINmG2K3Zgdi4IHVzZXIg2YXYstmK2ZHZgSDZgdmKIGxvY2FsU3RvcmFnZVxyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd1c2VyU3RhdGVDaGFuZ2VkJykpO1xyXG5cclxuICAgICAgLy8g2KfZhNin2YbYqtmC2KfZhCDZhNmE2YAgTG9naW4g2KjYudivINix2LPYp9mE2Kkg2KfZhNmG2KzYp9itXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaFRvTG9naW4oKTtcclxuICAgICAgfSwgMTUwMCk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignU0lHTiBVUCBFUlJPUjonLCBlcnIpO1xyXG5cclxuICAgICAgbGV0IG1lc3NhZ2UgPVxyXG4gICAgICAgIGVyci5yZXNwb25zZT8uZGF0YT8uZGV0YWlsIHx8XHJcbiAgICAgICAgZXJyLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8XHJcbiAgICAgICAgJ9it2K/YqyDYrti32KMg2KPYq9mG2KfYoSDYpdmG2LTYp9ihINin2YTYrdiz2KfYqC4nO1xyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVzc2FnZSkpIHtcclxuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZVswXT8ubXNnIHx8IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRFcnJvcih0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgPyBtZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG5cclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZzogJzE1cHgnLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ3J0bCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMz7YpdmG2LTYp9ihINit2LPYp9ioINis2K/ZitivPC9oMz5cclxuXHJcbiAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg4pyFINiq2YUg2KXZhti02KfYoSDYp9mE2K3Ys9in2Kgg2KjZhtis2KfYrSFcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTaWduVXB9PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzhweCcgfX0+XHJcbiAgICAgICAgICA8bGFiZWw+2KfZhNin2LPZhSDYp9mE2KPZiNmEOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc4cHgnIH19PlxyXG4gICAgICAgICAgPGxhYmVsPtin2YTYp9iz2YUg2KfZhNir2KfZhtmKOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5sYXN0X25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fT5cclxuICAgICAgICAgIDxsYWJlbD7Yp9mE2KjYsdmK2K8g2KfZhNil2YTZg9iq2LHZiNmG2Yo6PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzhweCcgfX0+XHJcbiAgICAgICAgICA8bGFiZWw+2LHZgtmFINin2YTZh9in2KrZgTo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgbmFtZT1cInBob25lX251bWJlclwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZV9udW1iZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTJweCcgfX0+XHJcbiAgICAgICAgICA8bGFiZWw+2YPZhNmF2Kkg2KfZhNmF2LHZiNixOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI4YTc0NScsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICBjdXJzb3I6IGxvYWRpbmdcclxuICAgICAgICAgICAgICA/ICdub3QtYWxsb3dlZCdcclxuICAgICAgICAgICAgICA6ICdwb2ludGVyJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmdcclxuICAgICAgICAgICAgPyAn2KzYp9ix2Yog2KfZhNiq2LPYrNmK2YQuLi4nXHJcbiAgICAgICAgICAgIDogJ9iq2LPYrNmK2YQg2K3Ys9in2KgnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHBcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMTVweCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogJzAuOXJlbScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgINmE2K/ZitmDINit2LPYp9ioINio2KfZhNmB2LnZhNifeycgJ31cclxuXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaFRvTG9naW59XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogJyMwMDdhYzInLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDYqtiz2KzZitmEINin2YTYr9iu2YjZhFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBodHRwQWRhcHRlciBmcm9tICcuL2h0dHAuanMnO1xuaW1wb3J0IHhockFkYXB0ZXIgZnJvbSAnLi94aHIuanMnO1xuaW1wb3J0ICogYXMgZmV0Y2hBZGFwdGVyIGZyb20gJy4vZmV0Y2guanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcblxuLyoqXG4gKiBLbm93biBhZGFwdGVycyBtYXBwaW5nLlxuICogUHJvdmlkZXMgZW52aXJvbm1lbnQtc3BlY2lmaWMgYWRhcHRlcnMgZm9yIEF4aW9zOlxuICogLSBgaHR0cGAgZm9yIE5vZGUuanNcbiAqIC0gYHhocmAgZm9yIGJyb3dzZXJzXG4gKiAtIGBmZXRjaGAgZm9yIGZldGNoIEFQSS1iYXNlZCByZXF1ZXN0c1xuICpcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBGdW5jdGlvbnxPYmplY3Q+fVxuICovXG5jb25zdCBrbm93bkFkYXB0ZXJzID0ge1xuICBodHRwOiBodHRwQWRhcHRlcixcbiAgeGhyOiB4aHJBZGFwdGVyLFxuICBmZXRjaDoge1xuICAgIGdldDogZmV0Y2hBZGFwdGVyLmdldEZldGNoLFxuICB9LFxufTtcblxuLy8gQXNzaWduIGFkYXB0ZXIgbmFtZXMgZm9yIGVhc2llciBkZWJ1Z2dpbmcgYW5kIGlkZW50aWZpY2F0aW9uXG51dGlscy5mb3JFYWNoKGtub3duQWRhcHRlcnMsIChmbiwgdmFsdWUpID0+IHtcbiAgaWYgKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE51bGwtcHJvdG8gZGVzY3JpcHRvcnMgc28gYSBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlLmdldCBjYW5ub3QgdHVyblxuICAgICAgLy8gdGhlc2UgZGF0YSBkZXNjcmlwdG9ycyBpbnRvIGFjY2Vzc29yIGRlc2NyaXB0b3JzIG9uIHRoZSB3YXkgaW4uXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICduYW1lJywgeyBfX3Byb3RvX186IG51bGwsIHZhbHVlIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICdhZGFwdGVyTmFtZScsIHsgX19wcm90b19fOiBudWxsLCB2YWx1ZSB9KTtcbiAgfVxufSk7XG5cbi8qKlxuICogUmVuZGVyIGEgcmVqZWN0aW9uIHJlYXNvbiBzdHJpbmcgZm9yIHVua25vd24gb3IgdW5zdXBwb3J0ZWQgYWRhcHRlcnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCByZW5kZXJSZWFzb24gPSAocmVhc29uKSA9PiBgLSAke3JlYXNvbn1gO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBhZGFwdGVyIGlzIHJlc29sdmVkIChmdW5jdGlvbiwgbnVsbCwgb3IgZmFsc2UpXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxudWxsfGZhbHNlfSBhZGFwdGVyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNSZXNvbHZlZEhhbmRsZSA9IChhZGFwdGVyKSA9PlxuICB1dGlscy5pc0Z1bmN0aW9uKGFkYXB0ZXIpIHx8IGFkYXB0ZXIgPT09IG51bGwgfHwgYWRhcHRlciA9PT0gZmFsc2U7XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBzdWl0YWJsZSBhZGFwdGVyIGZyb20gdGhlIHByb3ZpZGVkIGxpc3QuXG4gKiBUcmllcyBlYWNoIGFkYXB0ZXIgaW4gb3JkZXIgdW50aWwgYSBzdXBwb3J0ZWQgb25lIGlzIGZvdW5kLlxuICogVGhyb3dzIGFuIEF4aW9zRXJyb3IgaWYgbm8gYWRhcHRlciBpcyBzdWl0YWJsZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZ3xGdW5jdGlvbj58c3RyaW5nfEZ1bmN0aW9ufSBhZGFwdGVycyAtIEFkYXB0ZXIocykgYnkgbmFtZSBvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBBeGlvcyByZXF1ZXN0IGNvbmZpZ3VyYXRpb25cbiAqIEB0aHJvd3Mge0F4aW9zRXJyb3J9IElmIG5vIHN1aXRhYmxlIGFkYXB0ZXIgaXMgYXZhaWxhYmxlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFRoZSByZXNvbHZlZCBhZGFwdGVyIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldEFkYXB0ZXIoYWRhcHRlcnMsIGNvbmZpZykge1xuICBhZGFwdGVycyA9IHV0aWxzLmlzQXJyYXkoYWRhcHRlcnMpID8gYWRhcHRlcnMgOiBbYWRhcHRlcnNdO1xuXG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBhZGFwdGVycztcbiAgbGV0IG5hbWVPckFkYXB0ZXI7XG4gIGxldCBhZGFwdGVyO1xuXG4gIGNvbnN0IHJlamVjdGVkUmVhc29ucyA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBuYW1lT3JBZGFwdGVyID0gYWRhcHRlcnNbaV07XG4gICAgbGV0IGlkO1xuXG4gICAgYWRhcHRlciA9IG5hbWVPckFkYXB0ZXI7XG5cbiAgICBpZiAoIWlzUmVzb2x2ZWRIYW5kbGUobmFtZU9yQWRhcHRlcikpIHtcbiAgICAgIGFkYXB0ZXIgPSBrbm93bkFkYXB0ZXJzWyhpZCA9IFN0cmluZyhuYW1lT3JBZGFwdGVyKSkudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgIGlmIChhZGFwdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoYFVua25vd24gYWRhcHRlciAnJHtpZH0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFkYXB0ZXIgJiYgKHV0aWxzLmlzRnVuY3Rpb24oYWRhcHRlcikgfHwgKGFkYXB0ZXIgPSBhZGFwdGVyLmdldChjb25maWcpKSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJlamVjdGVkUmVhc29uc1tpZCB8fCAnIycgKyBpXSA9IGFkYXB0ZXI7XG4gIH1cblxuICBpZiAoIWFkYXB0ZXIpIHtcbiAgICBjb25zdCByZWFzb25zID0gT2JqZWN0LmVudHJpZXMocmVqZWN0ZWRSZWFzb25zKS5tYXAoXG4gICAgICAoW2lkLCBzdGF0ZV0pID0+XG4gICAgICAgIGBhZGFwdGVyICR7aWR9IGAgK1xuICAgICAgICAoc3RhdGUgPT09IGZhbHNlID8gJ2lzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGVudmlyb25tZW50JyA6ICdpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBidWlsZCcpXG4gICAgKTtcblxuICAgIGxldCBzID0gbGVuZ3RoXG4gICAgICA/IHJlYXNvbnMubGVuZ3RoID4gMVxuICAgICAgICA/ICdzaW5jZSA6XFxuJyArIHJlYXNvbnMubWFwKHJlbmRlclJlYXNvbikuam9pbignXFxuJylcbiAgICAgICAgOiAnICcgKyByZW5kZXJSZWFzb24ocmVhc29uc1swXSlcbiAgICAgIDogJ2FzIG5vIGFkYXB0ZXIgc3BlY2lmaWVkJztcblxuICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgYFRoZXJlIGlzIG5vIHN1aXRhYmxlIGFkYXB0ZXIgdG8gZGlzcGF0Y2ggdGhlIHJlcXVlc3QgYCArIHMsXG4gICAgICBBeGlvc0Vycm9yLkVSUl9OT1RfU1VQUE9SVFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxuLyoqXG4gKiBFeHBvcnRzIEF4aW9zIGFkYXB0ZXJzIGFuZCB1dGlsaXR5IHRvIHJlc29sdmUgYW4gYWRhcHRlclxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBSZXNvbHZlIGFuIGFkYXB0ZXIgZnJvbSBhIGxpc3Qgb2YgYWRhcHRlciBuYW1lcyBvciBmdW5jdGlvbnMuXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIGdldEFkYXB0ZXIsXG5cbiAgLyoqXG4gICAqIEV4cG9zZXMgYWxsIGtub3duIGFkYXB0ZXJzXG4gICAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBGdW5jdGlvbnxPYmplY3Q+fVxuICAgKi9cbiAgYWRhcHRlcnM6IGtub3duQWRhcHRlcnMsXG59O1xuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IGNvbXBvc2VTaWduYWxzIGZyb20gJy4uL2hlbHBlcnMvY29tcG9zZVNpZ25hbHMuanMnO1xuaW1wb3J0IHsgdHJhY2tTdHJlYW0gfSBmcm9tICcuLi9oZWxwZXJzL3RyYWNrU3RyZWFtLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IHtcbiAgcHJvZ3Jlc3NFdmVudFJlZHVjZXIsXG4gIHByb2dyZXNzRXZlbnREZWNvcmF0b3IsXG4gIGFzeW5jRGVjb3JhdG9yLFxufSBmcm9tICcuLi9oZWxwZXJzL3Byb2dyZXNzRXZlbnRSZWR1Y2VyLmpzJztcbmltcG9ydCByZXNvbHZlQ29uZmlnIGZyb20gJy4uL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qcyc7XG5pbXBvcnQgc2V0dGxlIGZyb20gJy4uL2NvcmUvc2V0dGxlLmpzJztcbmltcG9ydCBlc3RpbWF0ZURhdGFVUkxEZWNvZGVkQnl0ZXMgZnJvbSAnLi4vaGVscGVycy9lc3RpbWF0ZURhdGFVUkxEZWNvZGVkQnl0ZXMuanMnO1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJy4uL2Vudi9kYXRhLmpzJztcbmltcG9ydCB7IHRvQnl0ZVN0cmluZ0hlYWRlck9iamVjdCB9IGZyb20gJy4uL2hlbHBlcnMvc2FuaXRpemVIZWFkZXJWYWx1ZS5qcyc7XG5cbmNvbnN0IERFRkFVTFRfQ0hVTktfU0laRSA9IDY0ICogMTAyNDtcblxuY29uc3QgeyBpc0Z1bmN0aW9uIH0gPSB1dGlscztcblxuLyoqXG4gKiBFbmNvZGUgYSBVVEYtOCBzdHJpbmcgdG8gYSBMYXRpbi0xIGJ5dGUgc3RyaW5nIGZvciB1c2Ugd2l0aCBidG9hKCkuXG4gKiBUaGlzIGlzIGEgbW9kZXJuIHJlcGxhY2VtZW50IGZvciB0aGUgZGVwcmVjYXRlZCB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkgcGF0dGVybi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZW5jb2RlXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVVRGLTggYnl0ZXMgYXMgYSBMYXRpbi0xIHN0cmluZ1xuICovXG5jb25zdCBlbmNvZGVVVEY4ID0gKHN0cikgPT5cbiAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZ2ksIChfLCBoZXgpID0+XG4gICAgU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSlcbiAgKTtcblxuLy8gTm9kZSdzIFdIQVRXRyBVUkwgcGFyc2VyIHJldHVybnMgYHVzZXJuYW1lYCBhbmQgYHBhc3N3b3JkYCBwZXJjZW50LWVuY29kZWQuXG4vLyBEZWNvZGUgYmVmb3JlIGNvbXBvc2luZyB0aGUgYGF1dGhgIG9wdGlvbiBzbyBjcmVkZW50aWFscyBzdWNoIGFzXG4vLyBgbXklNDBlbWFpbC5jb206cGFzc2AgYXJlIHNlbnQgYXMgYG15QGVtYWlsLmNvbTpwYXNzYC4gRmFsbHMgYmFjayB0byB0aGVcbi8vIG9yaWdpbmFsIHZhbHVlIGZvciBtYWxmb3JtZWQgaW5wdXQgc28gYSBiYWQgZW5jb2RpbmcgbmV2ZXIgdGhyb3dzLlxuY29uc3QgZGVjb2RlVVJJQ29tcG9uZW50U2FmZSA9ICh2YWx1ZSkgPT4ge1xuICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5jb25zdCB0ZXN0ID0gKGZuLCAuLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZm4oLi4uYXJncyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IG1heWJlV2l0aEF1dGhDcmVkZW50aWFscyA9ICh1cmwpID0+IHtcbiAgY29uc3QgcHJvdG9jb2xJbmRleCA9IHVybC5pbmRleE9mKCc6Ly8nKTtcbiAgbGV0IHVybFRvQ2hlY2sgPSB1cmw7XG4gIGlmIChwcm90b2NvbEluZGV4ICE9PSAtMSkge1xuICAgIHVybFRvQ2hlY2sgPSB1cmxUb0NoZWNrLnNsaWNlKHByb3RvY29sSW5kZXggKyAzKTtcbiAgfVxuICByZXR1cm4gdXJsVG9DaGVjay5pbmNsdWRlcygnQCcpIHx8IHVybFRvQ2hlY2suaW5jbHVkZXMoJzonKTtcbn07XG5cbmNvbnN0IGZhY3RvcnkgPSAoZW52KSA9PiB7XG4gIGNvbnN0IGdsb2JhbE9iamVjdCA9XG4gICAgdXRpbHMuZ2xvYmFsICE9PSB1bmRlZmluZWQgJiYgdXRpbHMuZ2xvYmFsICE9PSBudWxsXG4gICAgICA/IHV0aWxzLmdsb2JhbFxuICAgICAgOiBnbG9iYWxUaGlzO1xuICBjb25zdCB7IFJlYWRhYmxlU3RyZWFtLCBUZXh0RW5jb2RlciB9ID0gZ2xvYmFsT2JqZWN0O1xuXG4gIGVudiA9IHV0aWxzLm1lcmdlLmNhbGwoXG4gICAge1xuICAgICAgc2tpcFVuZGVmaW5lZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIFJlcXVlc3Q6IGdsb2JhbE9iamVjdC5SZXF1ZXN0LFxuICAgICAgUmVzcG9uc2U6IGdsb2JhbE9iamVjdC5SZXNwb25zZSxcbiAgICB9LFxuICAgIGVudlxuICApO1xuXG4gIGNvbnN0IHsgZmV0Y2g6IGVudkZldGNoLCBSZXF1ZXN0LCBSZXNwb25zZSB9ID0gZW52O1xuICBjb25zdCBpc0ZldGNoU3VwcG9ydGVkID0gZW52RmV0Y2ggPyBpc0Z1bmN0aW9uKGVudkZldGNoKSA6IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJztcbiAgY29uc3QgaXNSZXF1ZXN0U3VwcG9ydGVkID0gaXNGdW5jdGlvbihSZXF1ZXN0KTtcbiAgY29uc3QgaXNSZXNwb25zZVN1cHBvcnRlZCA9IGlzRnVuY3Rpb24oUmVzcG9uc2UpO1xuXG4gIGlmICghaXNGZXRjaFN1cHBvcnRlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGlzUmVhZGFibGVTdHJlYW1TdXBwb3J0ZWQgPSBpc0ZldGNoU3VwcG9ydGVkICYmIGlzRnVuY3Rpb24oUmVhZGFibGVTdHJlYW0pO1xuXG4gIGNvbnN0IGVuY29kZVRleHQgPVxuICAgIGlzRmV0Y2hTdXBwb3J0ZWQgJiZcbiAgICAodHlwZW9mIFRleHRFbmNvZGVyID09PSAnZnVuY3Rpb24nXG4gICAgICA/IChcbiAgICAgICAgICAoZW5jb2RlcikgPT4gKHN0cikgPT5cbiAgICAgICAgICAgIGVuY29kZXIuZW5jb2RlKHN0cilcbiAgICAgICAgKShuZXcgVGV4dEVuY29kZXIoKSlcbiAgICAgIDogYXN5bmMgKHN0cikgPT4gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgbmV3IFJlcXVlc3Qoc3RyKS5hcnJheUJ1ZmZlcigpKSk7XG5cbiAgY29uc3Qgc3VwcG9ydHNSZXF1ZXN0U3RyZWFtID1cbiAgICBpc1JlcXVlc3RTdXBwb3J0ZWQgJiZcbiAgICBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkICYmXG4gICAgdGVzdCgoKSA9PiB7XG4gICAgICBsZXQgZHVwbGV4QWNjZXNzZWQgPSBmYWxzZTtcblxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHBsYXRmb3JtLm9yaWdpbiwge1xuICAgICAgICBib2R5OiBuZXcgUmVhZGFibGVTdHJlYW0oKSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGdldCBkdXBsZXgoKSB7XG4gICAgICAgICAgZHVwbGV4QWNjZXNzZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiAnaGFsZic7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaGFzQ29udGVudFR5cGUgPSByZXF1ZXN0LmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKTtcblxuICAgICAgaWYgKHJlcXVlc3QuYm9keSAhPSBudWxsKSB7XG4gICAgICAgIHJlcXVlc3QuYm9keS5jYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGR1cGxleEFjY2Vzc2VkICYmICFoYXNDb250ZW50VHlwZTtcbiAgICB9KTtcblxuICBjb25zdCBzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtID1cbiAgICBpc1Jlc3BvbnNlU3VwcG9ydGVkICYmXG4gICAgaXNSZWFkYWJsZVN0cmVhbVN1cHBvcnRlZCAmJlxuICAgIHRlc3QoKCkgPT4gdXRpbHMuaXNSZWFkYWJsZVN0cmVhbShuZXcgUmVzcG9uc2UoJycpLmJvZHkpKTtcblxuICBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgc3RyZWFtOiBzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmICgocmVzKSA9PiByZXMuYm9keSksXG4gIH07XG5cbiAgaXNGZXRjaFN1cHBvcnRlZCAmJlxuICAgICgoKSA9PiB7XG4gICAgICBbJ3RleHQnLCAnYXJyYXlCdWZmZXInLCAnYmxvYicsICdmb3JtRGF0YScsICdzdHJlYW0nXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgICFyZXNvbHZlcnNbdHlwZV0gJiZcbiAgICAgICAgICAocmVzb2x2ZXJzW3R5cGVdID0gKHJlcywgY29uZmlnKSA9PiB7XG4gICAgICAgICAgICBsZXQgbWV0aG9kID0gcmVzICYmIHJlc1t0eXBlXTtcblxuICAgICAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kLmNhbGwocmVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgICAgIGBSZXNwb25zZSB0eXBlICcke3R5cGV9JyBpcyBub3Qgc3VwcG9ydGVkYCxcbiAgICAgICAgICAgICAgQXhpb3NFcnJvci5FUlJfTk9UX1NVUFBPUlQsXG4gICAgICAgICAgICAgIGNvbmZpZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgY29uc3QgZ2V0Qm9keUxlbmd0aCA9IGFzeW5jIChib2R5KSA9PiB7XG4gICAgaWYgKGJvZHkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQmxvYihib2R5KSkge1xuICAgICAgcmV0dXJuIGJvZHkuc2l6ZTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShib2R5KSkge1xuICAgICAgY29uc3QgX3JlcXVlc3QgPSBuZXcgUmVxdWVzdChwbGF0Zm9ybS5vcmlnaW4sIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiAoYXdhaXQgX3JlcXVlc3QuYXJyYXlCdWZmZXIoKSkuYnl0ZUxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkgfHwgdXRpbHMuaXNBcnJheUJ1ZmZlcihib2R5KSkge1xuICAgICAgcmV0dXJuIGJvZHkuYnl0ZUxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoYm9keSkpIHtcbiAgICAgIGJvZHkgPSBib2R5ICsgJyc7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKGJvZHkpKSB7XG4gICAgICByZXR1cm4gKGF3YWl0IGVuY29kZVRleHQoYm9keSkpLmJ5dGVMZW5ndGg7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc29sdmVCb2R5TGVuZ3RoID0gYXN5bmMgKGhlYWRlcnMsIGJvZHkpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSB1dGlscy50b0Zpbml0ZU51bWJlcihoZWFkZXJzLmdldENvbnRlbnRMZW5ndGgoKSk7XG5cbiAgICByZXR1cm4gbGVuZ3RoID09IG51bGwgPyBnZXRCb2R5TGVuZ3RoKGJvZHkpIDogbGVuZ3RoO1xuICB9O1xuXG4gIHJldHVybiBhc3luYyAoY29uZmlnKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGRhdGEsXG4gICAgICBzaWduYWwsXG4gICAgICBjYW5jZWxUb2tlbixcbiAgICAgIHRpbWVvdXQsXG4gICAgICBvbkRvd25sb2FkUHJvZ3Jlc3MsXG4gICAgICBvblVwbG9hZFByb2dyZXNzLFxuICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgaGVhZGVycyxcbiAgICAgIHdpdGhDcmVkZW50aWFscyA9ICdzYW1lLW9yaWdpbicsXG4gICAgICBmZXRjaE9wdGlvbnMsXG4gICAgICBtYXhDb250ZW50TGVuZ3RoLFxuICAgICAgbWF4Qm9keUxlbmd0aCxcbiAgICB9ID0gcmVzb2x2ZUNvbmZpZyhjb25maWcpO1xuXG4gICAgY29uc3QgaGFzTWF4Q29udGVudExlbmd0aCA9IHV0aWxzLmlzTnVtYmVyKG1heENvbnRlbnRMZW5ndGgpICYmIG1heENvbnRlbnRMZW5ndGggPiAtMTtcbiAgICBjb25zdCBoYXNNYXhCb2R5TGVuZ3RoID0gdXRpbHMuaXNOdW1iZXIobWF4Qm9keUxlbmd0aCkgJiYgbWF4Qm9keUxlbmd0aCA+IC0xO1xuICAgIGNvbnN0IG93biA9IChrZXkpID0+ICh1dGlscy5oYXNPd25Qcm9wKGNvbmZpZywga2V5KSA/IGNvbmZpZ1trZXldIDogdW5kZWZpbmVkKTtcblxuICAgIGxldCBfZmV0Y2ggPSBlbnZGZXRjaCB8fCBmZXRjaDtcblxuICAgIHJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZSA/IChyZXNwb25zZVR5cGUgKyAnJykudG9Mb3dlckNhc2UoKSA6ICd0ZXh0JztcblxuICAgIGxldCBjb21wb3NlZFNpZ25hbCA9IGNvbXBvc2VTaWduYWxzKFxuICAgICAgW3NpZ25hbCwgY2FuY2VsVG9rZW4gJiYgY2FuY2VsVG9rZW4udG9BYm9ydFNpZ25hbCgpXSxcbiAgICAgIHRpbWVvdXRcbiAgICApO1xuXG4gICAgbGV0IHJlcXVlc3QgPSBudWxsO1xuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPVxuICAgICAgY29tcG9zZWRTaWduYWwgJiZcbiAgICAgIGNvbXBvc2VkU2lnbmFsLnVuc3Vic2NyaWJlICYmXG4gICAgICAoKCkgPT4ge1xuICAgICAgICBjb21wb3NlZFNpZ25hbC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG5cbiAgICBsZXQgcmVxdWVzdENvbnRlbnRMZW5ndGg7XG5cbiAgICAvLyBBeGlvc0Vycm9yIHdlIHJhaXNlIHdoaWxlIHRoZSByZXF1ZXN0IGJvZHkgaXMgYmVpbmcgc3RyZWFtZWQuIENhcHR1cmVkXG4gICAgLy8gYnkgaWRlbnRpdHkgc28gdGhlIGNhdGNoIGJsb2NrIGNhbiBzdXJmYWNlIGl0IGRpcmVjdGx5LCByZWdhcmRsZXNzIG9mXG4gICAgLy8gaG93IHRoZSBydW50aW1lIHdyYXBzIHRoZSByZXN1bHRpbmcgZmV0Y2ggcmVqZWN0aW9uICh1bmRpY2kgZXhwb3NlcyBpdFxuICAgIC8vIGFzIGBlcnIuY2F1c2VgOyBzb21lIGJyb3dzZXJzIGRyb3AgdGhlIG9yaWdpbmFsIGVycm9yIGVudGlyZWx5KS5cbiAgICBsZXQgcGVuZGluZ0JvZHlFcnJvciA9IG51bGw7XG5cbiAgICBjb25zdCBtYXhCb2R5TGVuZ3RoRXJyb3IgPSAoKSA9PlxuICAgICAgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICdSZXF1ZXN0IGJvZHkgbGFyZ2VyIHRoYW4gbWF4Qm9keUxlbmd0aCBsaW1pdCcsXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3RcbiAgICAgICk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgICAgbGV0IGF1dGggPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBjb25maWdBdXRoID0gb3duKCdhdXRoJyk7XG5cbiAgICAgIGlmIChjb25maWdBdXRoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXRpbHMuZ2V0U2FmZVByb3AoY29uZmlnQXV0aCwgJ3VzZXJuYW1lJykgfHwgJyc7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdXRpbHMuZ2V0U2FmZVByb3AoY29uZmlnQXV0aCwgJ3Bhc3N3b3JkJykgfHwgJyc7XG4gICAgICAgIGF1dGggPSB7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1heWJlV2l0aEF1dGhDcmVkZW50aWFscyh1cmwpKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IG5ldyBVUkwodXJsLCBwbGF0Zm9ybS5vcmlnaW4pO1xuXG4gICAgICAgIGlmICghYXV0aCAmJiAocGFyc2VkVVJMLnVzZXJuYW1lIHx8IHBhcnNlZFVSTC5wYXNzd29yZCkpIHtcbiAgICAgICAgICBjb25zdCB1cmxVc2VybmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudFNhZmUocGFyc2VkVVJMLnVzZXJuYW1lKTtcbiAgICAgICAgICBjb25zdCB1cmxQYXNzd29yZCA9IGRlY29kZVVSSUNvbXBvbmVudFNhZmUocGFyc2VkVVJMLnBhc3N3b3JkKTtcbiAgICAgICAgICBhdXRoID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVybFVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVybFBhc3N3b3JkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWRVUkwudXNlcm5hbWUgfHwgcGFyc2VkVVJMLnBhc3N3b3JkKSB7XG4gICAgICAgICAgcGFyc2VkVVJMLnVzZXJuYW1lID0gJyc7XG4gICAgICAgICAgcGFyc2VkVVJMLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgdXJsID0gcGFyc2VkVVJMLmhyZWY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGF1dGgpIHtcbiAgICAgICAgaGVhZGVycy5kZWxldGUoJ2F1dGhvcml6YXRpb24nKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nLFxuICAgICAgICAgICdCYXNpYyAnICsgYnRvYShlbmNvZGVVVEY4KChhdXRoLnVzZXJuYW1lIHx8ICcnKSArICc6JyArIChhdXRoLnBhc3N3b3JkIHx8ICcnKSkpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuZm9yY2UgbWF4Q29udGVudExlbmd0aCBmb3IgZGF0YTogVVJMcyB1cC1mcm9udCBzbyB3ZSBuZXZlciBtYXRlcmlhbGl6ZVxuICAgICAgLy8gYW4gb3ZlcnNpemVkIHBheWxvYWQuIFRoZSBIVFRQIGFkYXB0ZXIgYXBwbGllcyB0aGUgc2FtZSBjaGVjayAoc2VlIGh0dHAuanNcbiAgICAgIC8vIFwiaWYgKHByb3RvY29sID09PSAnZGF0YTonKVwiIGJyYW5jaCkuXG4gICAgICBpZiAoaGFzTWF4Q29udGVudExlbmd0aCAmJiB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyAmJiB1cmwuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICBjb25zdCBlc3RpbWF0ZWQgPSBlc3RpbWF0ZURhdGFVUkxEZWNvZGVkQnl0ZXModXJsKTtcbiAgICAgICAgaWYgKGVzdGltYXRlZCA+IG1heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgICAgICdtYXhDb250ZW50TGVuZ3RoIHNpemUgb2YgJyArIG1heENvbnRlbnRMZW5ndGggKyAnIGV4Y2VlZGVkJyxcbiAgICAgICAgICAgIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSxcbiAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgIHJlcXVlc3RcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVuZm9yY2UgbWF4Qm9keUxlbmd0aCBhZ2FpbnN0IGtub3duLXNpemUgYm9kaWVzIGJlZm9yZSBkaXNwYXRjaCB1c2luZ1xuICAgICAgLy8gdGhlIGJvZHkncyAqYWN0dWFsKiBzaXplIOKAlCBuZXZlciBhIGNhbGxlci1kZWNsYXJlZCBDb250ZW50LUxlbmd0aCxcbiAgICAgIC8vIHdoaWNoIGNvdWxkIHVuZGVyLXJlcG9ydCB0byBzbGlwIGFuIG92ZXJzaXplZCBib2R5IHBhc3QgdGhlIGNoZWNrLlxuICAgICAgLy8gVW5rbm93bi1zaXplIHN0cmVhbXMgcmV0dXJuIHVuZGVmaW5lZCBoZXJlIGFuZCBhcmUgY291bnRlZCBwZXItY2h1bmtcbiAgICAgIC8vIGJlbG93IGFzIGZldGNoIGNvbnN1bWVzIHRoZW0uXG4gICAgICBpZiAoaGFzTWF4Qm9keUxlbmd0aCAmJiBtZXRob2QgIT09ICdnZXQnICYmIG1ldGhvZCAhPT0gJ2hlYWQnKSB7XG4gICAgICAgIGNvbnN0IG91dGJvdW5kTGVuZ3RoID0gYXdhaXQgZ2V0Qm9keUxlbmd0aChkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiBvdXRib3VuZExlbmd0aCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUob3V0Ym91bmRMZW5ndGgpKSB7XG4gICAgICAgICAgcmVxdWVzdENvbnRlbnRMZW5ndGggPSBvdXRib3VuZExlbmd0aDtcbiAgICAgICAgICBpZiAob3V0Ym91bmRMZW5ndGggPiBtYXhCb2R5TGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXhCb2R5TGVuZ3RoRXJyb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQSBzdHJlYW1lZCBib2R5IHVuZGVyIG1heEJvZHlMZW5ndGggbXVzdCBiZSBjb3VudGVkIGFzIGZldGNoIGNvbnN1bWVzXG4gICAgICAvLyBpdDsgaXRzIHNpemUgaXMgbmV2ZXIgdHJ1c3RlZCBmcm9tIGEgY2FsbGVyLWRlY2xhcmVkIENvbnRlbnQtTGVuZ3RoLlxuICAgICAgY29uc3QgbXVzdEVuZm9yY2VTdHJlYW1Cb2R5ID1cbiAgICAgICAgaGFzTWF4Qm9keUxlbmd0aCAmJiAodXRpbHMuaXNSZWFkYWJsZVN0cmVhbShkYXRhKSB8fCB1dGlscy5pc1N0cmVhbShkYXRhKSk7XG5cbiAgICAgIGNvbnN0IHRyYWNrUmVxdWVzdFN0cmVhbSA9IChzdHJlYW0sIG9uUHJvZ3Jlc3MsIGZsdXNoKSA9PlxuICAgICAgICB0cmFja1N0cmVhbShcbiAgICAgICAgICBzdHJlYW0sXG4gICAgICAgICAgREVGQVVMVF9DSFVOS19TSVpFLFxuICAgICAgICAgIChsb2FkZWRCeXRlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGhhc01heEJvZHlMZW5ndGggJiYgbG9hZGVkQnl0ZXMgPiBtYXhCb2R5TGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRocm93IChwZW5kaW5nQm9keUVycm9yID0gbWF4Qm9keUxlbmd0aEVycm9yKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25Qcm9ncmVzcyAmJiBvblByb2dyZXNzKGxvYWRlZEJ5dGVzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZsdXNoXG4gICAgICAgICk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgc3VwcG9ydHNSZXF1ZXN0U3RyZWFtICYmXG4gICAgICAgIG1ldGhvZCAhPT0gJ2dldCcgJiZcbiAgICAgICAgbWV0aG9kICE9PSAnaGVhZCcgJiZcbiAgICAgICAgKG9uVXBsb2FkUHJvZ3Jlc3MgfHwgbXVzdEVuZm9yY2VTdHJlYW1Cb2R5KVxuICAgICAgKSB7XG4gICAgICAgIHJlcXVlc3RDb250ZW50TGVuZ3RoID1cbiAgICAgICAgICByZXF1ZXN0Q29udGVudExlbmd0aCA9PSBudWxsID8gYXdhaXQgcmVzb2x2ZUJvZHlMZW5ndGgoaGVhZGVycywgZGF0YSkgOiByZXF1ZXN0Q29udGVudExlbmd0aDtcblxuICAgICAgICAvLyBBIGRlY2xhcmVkIGxlbmd0aCBvZiAwIGlzIG9ubHkgdHJ1c3RlZCB0byBza2lwIHRoZSB3cmFwIHdoZW4gd2UgYXJlXG4gICAgICAgIC8vIG5vdCBlbmZvcmNpbmcgYSBzdHJlYW0gbGltaXQgKHdoaWNoIG11c3Qgbm90IHJlbHkgb24gdGhhdCBoZWFkZXIpLlxuICAgICAgICBpZiAocmVxdWVzdENvbnRlbnRMZW5ndGggIT09IDAgfHwgbXVzdEVuZm9yY2VTdHJlYW1Cb2R5KSB7XG4gICAgICAgICAgbGV0IF9yZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICBkdXBsZXg6ICdoYWxmJyxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxldCBjb250ZW50VHlwZUhlYWRlcjtcblxuICAgICAgICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpICYmIChjb250ZW50VHlwZUhlYWRlciA9IF9yZXF1ZXN0LmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkpIHtcbiAgICAgICAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoY29udGVudFR5cGVIZWFkZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfcmVxdWVzdC5ib2R5KSB7XG4gICAgICAgICAgICBjb25zdCBbb25Qcm9ncmVzcywgZmx1c2hdID1cbiAgICAgICAgICAgICAgKG9uVXBsb2FkUHJvZ3Jlc3MgJiZcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0V2ZW50RGVjb3JhdG9yKFxuICAgICAgICAgICAgICAgICAgcmVxdWVzdENvbnRlbnRMZW5ndGgsXG4gICAgICAgICAgICAgICAgICBwcm9ncmVzc0V2ZW50UmVkdWNlcihhc3luY0RlY29yYXRvcihvblVwbG9hZFByb2dyZXNzKSlcbiAgICAgICAgICAgICAgICApKSB8fFxuICAgICAgICAgICAgICBbXTtcblxuICAgICAgICAgICAgZGF0YSA9IHRyYWNrUmVxdWVzdFN0cmVhbShfcmVxdWVzdC5ib2R5LCBvblByb2dyZXNzLCBmbHVzaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBtdXN0RW5mb3JjZVN0cmVhbUJvZHkgJiZcbiAgICAgICAgIWlzUmVxdWVzdFN1cHBvcnRlZCAmJlxuICAgICAgICBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkICYmXG4gICAgICAgIG1ldGhvZCAhPT0gJ2dldCcgJiZcbiAgICAgICAgbWV0aG9kICE9PSAnaGVhZCdcbiAgICAgICkge1xuICAgICAgICBkYXRhID0gdHJhY2tSZXF1ZXN0U3RyZWFtKGRhdGEpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgbXVzdEVuZm9yY2VTdHJlYW1Cb2R5ICYmXG4gICAgICAgIGlzUmVxdWVzdFN1cHBvcnRlZCAmJlxuICAgICAgICAhc3VwcG9ydHNSZXF1ZXN0U3RyZWFtICYmXG4gICAgICAgIG1ldGhvZCAhPT0gJ2dldCcgJiZcbiAgICAgICAgbWV0aG9kICE9PSAnaGVhZCdcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgICAnU3RyZWFtIHJlcXVlc3QgYm9kaWVzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IGZldGNoIGltcGxlbWVudGF0aW9uJyxcbiAgICAgICAgICBBeGlvc0Vycm9yLkVSUl9OT1RfU1VQUE9SVCxcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgcmVxdWVzdFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzU3RyaW5nKHdpdGhDcmVkZW50aWFscykpIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ29taXQnO1xuICAgICAgfVxuXG4gICAgICAvLyBDbG91ZGZsYXJlIFdvcmtlcnMgdGhyb3dzIHdoZW4gY3JlZGVudGlhbHMgYXJlIGRlZmluZWRcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2xvdWRmbGFyZS93b3JrZXJkL2lzc3Vlcy85MDJcbiAgICAgIGNvbnN0IGlzQ3JlZGVudGlhbHNTdXBwb3J0ZWQgPSBpc1JlcXVlc3RTdXBwb3J0ZWQgJiYgJ2NyZWRlbnRpYWxzJyBpbiBSZXF1ZXN0LnByb3RvdHlwZTtcblxuICAgICAgLy8gSWYgZGF0YSBpcyBGb3JtRGF0YSBhbmQgQ29udGVudC1UeXBlIGlzIG11bHRpcGFydC9mb3JtLWRhdGEgd2l0aG91dCBib3VuZGFyeSxcbiAgICAgIC8vIGRlbGV0ZSBpdCBzbyBmZXRjaCBjYW4gc2V0IGl0IGNvcnJlY3RseSB3aXRoIHRoZSBib3VuZGFyeVxuICAgICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb250ZW50VHlwZSAmJlxuICAgICAgICAgIC9ebXVsdGlwYXJ0XFwvZm9ybS1kYXRhL2kudGVzdChjb250ZW50VHlwZSkgJiZcbiAgICAgICAgICAhL2JvdW5kYXJ5PS9pLnRlc3QoY29udGVudFR5cGUpXG4gICAgICAgICkge1xuICAgICAgICAgIGhlYWRlcnMuZGVsZXRlKCdjb250ZW50LXR5cGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTZXQgVXNlci1BZ2VudCBoZWFkZXIgaWYgbm90IGFscmVhZHkgc2V0IChmZXRjaCBkZWZhdWx0cyB0byAnbm9kZScgaW4gTm9kZS5qcylcbiAgICAgIGhlYWRlcnMuc2V0KCdVc2VyLUFnZW50JywgJ2F4aW9zLycgKyBWRVJTSU9OLCBmYWxzZSk7XG5cbiAgICAgIGNvbnN0IHJlc29sdmVkT3B0aW9ucyA9IHtcbiAgICAgICAgLi4uZmV0Y2hPcHRpb25zLFxuICAgICAgICBzaWduYWw6IGNvbXBvc2VkU2lnbmFsLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBoZWFkZXJzOiB0b0J5dGVTdHJpbmdIZWFkZXJPYmplY3QoaGVhZGVycy5ub3JtYWxpemUoKSksXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgIGR1cGxleDogJ2hhbGYnLFxuICAgICAgICBjcmVkZW50aWFsczogaXNDcmVkZW50aWFsc1N1cHBvcnRlZCA/IHdpdGhDcmVkZW50aWFscyA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIHJlcXVlc3QgPSBpc1JlcXVlc3RTdXBwb3J0ZWQgJiYgbmV3IFJlcXVlc3QodXJsLCByZXNvbHZlZE9wdGlvbnMpO1xuXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCAoaXNSZXF1ZXN0U3VwcG9ydGVkXG4gICAgICAgID8gX2ZldGNoKHJlcXVlc3QsIGZldGNoT3B0aW9ucylcbiAgICAgICAgOiBfZmV0Y2godXJsLCByZXNvbHZlZE9wdGlvbnMpKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICAgIC8vIENoZWFwIHByZS1jaGVjazogaWYgdGhlIHNlcnZlciBob25lc3RseSBkZWNsYXJlcyBhIGNvbnRlbnQtbGVuZ3RoIHRoYXRcbiAgICAgIC8vIGFscmVhZHkgZXhjZWVkcyB0aGUgY2FwLCByZWplY3QgYmVmb3JlIHdlIHN0YXJ0IHN0cmVhbWluZy5cbiAgICAgIGlmIChoYXNNYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmVkTGVuZ3RoID0gdXRpbHMudG9GaW5pdGVOdW1iZXIocmVzcG9uc2VIZWFkZXJzLmdldENvbnRlbnRMZW5ndGgoKSk7XG4gICAgICAgIGlmIChkZWNsYXJlZExlbmd0aCAhPSBudWxsICYmIGRlY2xhcmVkTGVuZ3RoID4gbWF4Q29udGVudExlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAgICAgJ21heENvbnRlbnRMZW5ndGggc2l6ZSBvZiAnICsgbWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLFxuICAgICAgICAgICAgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgcmVxdWVzdFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNTdHJlYW1SZXNwb25zZSA9XG4gICAgICAgIHN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gJiYgKHJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScgfHwgcmVzcG9uc2VUeXBlID09PSAncmVzcG9uc2UnKTtcblxuICAgICAgaWYgKFxuICAgICAgICBzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmXG4gICAgICAgIHJlc3BvbnNlLmJvZHkgJiZcbiAgICAgICAgKG9uRG93bmxvYWRQcm9ncmVzcyB8fCBoYXNNYXhDb250ZW50TGVuZ3RoIHx8IChpc1N0cmVhbVJlc3BvbnNlICYmIHVuc3Vic2NyaWJlKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge307XG5cbiAgICAgICAgWydzdGF0dXMnLCAnc3RhdHVzVGV4dCcsICdoZWFkZXJzJ10uZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgIG9wdGlvbnNbcHJvcF0gPSByZXNwb25zZVtwcm9wXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VDb250ZW50TGVuZ3RoID0gdXRpbHMudG9GaW5pdGVOdW1iZXIocmVzcG9uc2VIZWFkZXJzLmdldENvbnRlbnRMZW5ndGgoKSk7XG5cbiAgICAgICAgY29uc3QgW29uUHJvZ3Jlc3MsIGZsdXNoXSA9XG4gICAgICAgICAgKG9uRG93bmxvYWRQcm9ncmVzcyAmJlxuICAgICAgICAgICAgcHJvZ3Jlc3NFdmVudERlY29yYXRvcihcbiAgICAgICAgICAgICAgcmVzcG9uc2VDb250ZW50TGVuZ3RoLFxuICAgICAgICAgICAgICBwcm9ncmVzc0V2ZW50UmVkdWNlcihhc3luY0RlY29yYXRvcihvbkRvd25sb2FkUHJvZ3Jlc3MpLCB0cnVlKVxuICAgICAgICAgICAgKSkgfHxcbiAgICAgICAgICBbXTtcblxuICAgICAgICBsZXQgYnl0ZXNSZWFkID0gMDtcbiAgICAgICAgY29uc3Qgb25DaHVua1Byb2dyZXNzID0gKGxvYWRlZEJ5dGVzKSA9PiB7XG4gICAgICAgICAgaWYgKGhhc01heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIGJ5dGVzUmVhZCA9IGxvYWRlZEJ5dGVzO1xuICAgICAgICAgICAgaWYgKGJ5dGVzUmVhZCA+IG1heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgICAgICAgJ21heENvbnRlbnRMZW5ndGggc2l6ZSBvZiAnICsgbWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLFxuICAgICAgICAgICAgICAgIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSxcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBvblByb2dyZXNzICYmIG9uUHJvZ3Jlc3MobG9hZGVkQnl0ZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKFxuICAgICAgICAgIHRyYWNrU3RyZWFtKHJlc3BvbnNlLmJvZHksIERFRkFVTFRfQ0hVTktfU0laRSwgb25DaHVua1Byb2dyZXNzLCAoKSA9PiB7XG4gICAgICAgICAgICBmbHVzaCAmJiBmbHVzaCgpO1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgJiYgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZSB8fCAndGV4dCc7XG5cbiAgICAgIGxldCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNvbHZlcnNbdXRpbHMuZmluZEtleShyZXNvbHZlcnMsIHJlc3BvbnNlVHlwZSkgfHwgJ3RleHQnXShcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcblxuICAgICAgLy8gRmFsbGJhY2sgZW5mb3JjZW1lbnQgZm9yIGVudmlyb25tZW50cyB3aXRob3V0IFJlYWRhYmxlU3RyZWFtIHN1cHBvcnRcbiAgICAgIC8vIChsZWdhY3kgcnVudGltZXMpLiBEZXRlY3QgbWF0ZXJpYWxpemVkIHNpemUgZnJvbSB0eXBlZCBvdXRwdXQ7IHNraXBcbiAgICAgIC8vIHN0cmVhbXMvUmVzcG9uc2UgcGFzc3Rocm91Z2ggc2luY2UgdGhlIHVzZXIgd2lsbCByZWFkIHRob3NlIHRoZW1zZWx2ZXMuXG4gICAgICBpZiAoaGFzTWF4Q29udGVudExlbmd0aCAmJiAhc3VwcG9ydHNSZXNwb25zZVN0cmVhbSAmJiAhaXNTdHJlYW1SZXNwb25zZSkge1xuICAgICAgICBsZXQgbWF0ZXJpYWxpemVkU2l6ZTtcbiAgICAgICAgaWYgKHJlc3BvbnNlRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZURhdGEuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsaXplZFNpemUgPSByZXNwb25zZURhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXNwb25zZURhdGEuc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsaXplZFNpemUgPSByZXNwb25zZURhdGEuc2l6ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXNwb25zZURhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBtYXRlcmlhbGl6ZWRTaXplID1cbiAgICAgICAgICAgICAgdHlwZW9mIFRleHRFbmNvZGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocmVzcG9uc2VEYXRhKS5ieXRlTGVuZ3RoXG4gICAgICAgICAgICAgICAgOiByZXNwb25zZURhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1hdGVyaWFsaXplZFNpemUgPT09ICdudW1iZXInICYmIG1hdGVyaWFsaXplZFNpemUgPiBtYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgICAnbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBtYXhDb250ZW50TGVuZ3RoICsgJyBleGNlZWRlZCcsXG4gICAgICAgICAgICBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsXG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICByZXF1ZXN0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAhaXNTdHJlYW1SZXNwb25zZSAmJiB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xuXG4gICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB7XG4gICAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAgIGhlYWRlcnM6IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xuXG4gICAgICAvLyBTYWZhcmkgY2FuIHN1cmZhY2UgZmV0Y2ggYWJvcnRzIGFzIGEgRE9NRXhjZXB0aW9uLWxpa2Ugb2JqZWN0IHdob3NlXG4gICAgICAvLyBicmFuZGVkIGdldHRlcnMgdGhyb3cuIFByZWZlciBvdXIgY29tcG9zZWQgc2lnbmFsIHJlYXNvbiBiZWZvcmUgcmVhZGluZ1xuICAgICAgLy8gdGhlIGNhdWdodCBlcnJvciwgcHJlc2VydmluZyB0aW1lb3V0IHZzIGNhbmNlbGxhdGlvbiBzZW1hbnRpY3MuXG4gICAgICBpZiAoY29tcG9zZWRTaWduYWwgJiYgY29tcG9zZWRTaWduYWwuYWJvcnRlZCAmJiBjb21wb3NlZFNpZ25hbC5yZWFzb24gaW5zdGFuY2VvZiBBeGlvc0Vycm9yKSB7XG4gICAgICAgIGNvbnN0IGNhbmNlbGVkRXJyb3IgPSBjb21wb3NlZFNpZ25hbC5yZWFzb247XG4gICAgICAgIGNhbmNlbGVkRXJyb3IuY29uZmlnID0gY29uZmlnO1xuICAgICAgICByZXF1ZXN0ICYmIChjYW5jZWxlZEVycm9yLnJlcXVlc3QgPSByZXF1ZXN0KTtcbiAgICAgICAgaWYgKGVyciAhPT0gY2FuY2VsZWRFcnJvcikge1xuICAgICAgICAgIC8vIE5vbi1lbnVtZXJhYmxlIHRvIG1hdGNoIG5hdGl2ZSBFcnJvciBgY2F1c2VgIHNlbWFudGljcyBzbyBsb2dnZXJzXG4gICAgICAgICAgLy8gZG9uJ3QgcmVjdXJzZSBpbnRvIGNpcmN1bGFyIGZldGNoIGludGVybmFscyAoc2VlICM3MjA1KS5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FuY2VsZWRFcnJvciwgJ2NhdXNlJywge1xuICAgICAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IGVycixcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgY2FuY2VsZWRFcnJvcjtcbiAgICAgIH1cblxuICAgICAgLy8gU3VyZmFjZSBhIG1heEJvZHlMZW5ndGggdmlvbGF0aW9uIHdlIHJhaXNlZCB3aGlsZSB0aGUgcmVxdWVzdCBib2R5IHdhc1xuICAgICAgLy8gYmVpbmcgc3RyZWFtZWQuIE1hdGNoaW5nIGJ5IGlkZW50aXR5IChyYXRoZXIgdGhhbiByZWFkaW5nXG4gICAgICAvLyBgZXJyLmNhdXNlLmlzQXhpb3NFcnJvcmApIGtlZXBzIHRoZSBlcnJvciBkZXRlcm1pbmlzdGljIGFjcm9zcyBydW50aW1lc1xuICAgICAgLy8gYW5kIGF2b2lkcyBib3RoIHByb3RvdHlwZS1wb2xsdXRpb24gcmVhZHMgYW5kIG1pcy1hdHRyaWJ1dGluZyBhIGZvcmVpZ25cbiAgICAgIC8vIEF4aW9zRXJyb3IgdGhhdCBtZXJlbHkgaGFwcGVuZWQgdG8gbGFuZCBpbiBgZXJyLmNhdXNlYC5cbiAgICAgIGlmIChwZW5kaW5nQm9keUVycm9yKSB7XG4gICAgICAgIHJlcXVlc3QgJiYgIXBlbmRpbmdCb2R5RXJyb3IucmVxdWVzdCAmJiAocGVuZGluZ0JvZHlFcnJvci5yZXF1ZXN0ID0gcmVxdWVzdCk7XG4gICAgICAgIHRocm93IHBlbmRpbmdCb2R5RXJyb3I7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlLXRocm93IEF4aW9zRXJyb3JzIHdlIHJhaXNlZCBzeW5jaHJvbm91c2x5IChkYXRhOiBVUkwgLyBjb250ZW50LWxlbmd0aFxuICAgICAgLy8gcHJlLWNoZWNrcywgcmVzcG9uc2Ugc2l6ZSBlbmZvcmNlbWVudCkgd2l0aG91dCByZS13cmFwcGluZyB0aGVtLlxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEF4aW9zRXJyb3IpIHtcbiAgICAgICAgcmVxdWVzdCAmJiAhZXJyLnJlcXVlc3QgJiYgKGVyci5yZXF1ZXN0ID0gcmVxdWVzdCk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cblxuICAgICAgaWYgKGVyciAmJiBlcnIubmFtZSA9PT0gJ1R5cGVFcnJvcicgJiYgL0xvYWQgZmFpbGVkfGZldGNoL2kudGVzdChlcnIubWVzc2FnZSkpIHtcbiAgICAgICAgY29uc3QgbmV0d29ya0Vycm9yID0gbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgICAgJ05ldHdvcmsgRXJyb3InLFxuICAgICAgICAgIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgZXJyICYmIGVyci5yZXNwb25zZVxuICAgICAgICApO1xuICAgICAgICAvLyBOb24tZW51bWVyYWJsZSB0byBtYXRjaCBuYXRpdmUgRXJyb3IgYGNhdXNlYCBzZW1hbnRpY3Mgc28gbG9nZ2Vyc1xuICAgICAgICAvLyBkb24ndCByZWN1cnNlIGludG8gY2lyY3VsYXIgZmV0Y2ggaW50ZXJuYWxzIChzZWUgIzcyMDUpLlxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV0d29ya0Vycm9yLCAnY2F1c2UnLCB7XG4gICAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBlcnIuY2F1c2UgfHwgZXJyLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRocm93IG5ldHdvcmtFcnJvcjtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGVyciwgZXJyICYmIGVyci5jb2RlLCBjb25maWcsIHJlcXVlc3QsIGVyciAmJiBlcnIucmVzcG9uc2UpO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IHNlZWRDYWNoZSA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGNvbnN0IGdldEZldGNoID0gKGNvbmZpZykgPT4ge1xuICBsZXQgZW52ID0gKGNvbmZpZyAmJiBjb25maWcuZW52KSB8fCB7fTtcbiAgY29uc3QgeyBmZXRjaCwgUmVxdWVzdCwgUmVzcG9uc2UgfSA9IGVudjtcbiAgY29uc3Qgc2VlZHMgPSBbUmVxdWVzdCwgUmVzcG9uc2UsIGZldGNoXTtcblxuICBsZXQgbGVuID0gc2VlZHMubGVuZ3RoLFxuICAgIGkgPSBsZW4sXG4gICAgc2VlZCxcbiAgICB0YXJnZXQsXG4gICAgbWFwID0gc2VlZENhY2hlO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBzZWVkID0gc2VlZHNbaV07XG4gICAgdGFyZ2V0ID0gbWFwLmdldChzZWVkKTtcblxuICAgIHRhcmdldCA9PT0gdW5kZWZpbmVkICYmIG1hcC5zZXQoc2VlZCwgKHRhcmdldCA9IGkgPyBuZXcgTWFwKCkgOiBmYWN0b3J5KGVudikpKTtcblxuICAgIG1hcCA9IHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5jb25zdCBhZGFwdGVyID0gZ2V0RmV0Y2goKTtcblxuZXhwb3J0IGRlZmF1bHQgYWRhcHRlcjtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgc2V0dGxlIGZyb20gJy4uL2NvcmUvc2V0dGxlLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgeyBwcm9ncmVzc0V2ZW50UmVkdWNlciB9IGZyb20gJy4uL2hlbHBlcnMvcHJvZ3Jlc3NFdmVudFJlZHVjZXIuanMnO1xuaW1wb3J0IHJlc29sdmVDb25maWcgZnJvbSAnLi4vaGVscGVycy9yZXNvbHZlQ29uZmlnLmpzJztcbmltcG9ydCB7IHRvQnl0ZVN0cmluZ0hlYWRlck9iamVjdCB9IGZyb20gJy4uL2hlbHBlcnMvc2FuaXRpemVIZWFkZXJWYWx1ZS5qcyc7XG5cbmNvbnN0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCAmJlxuICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGNvbnN0IF9jb25maWcgPSByZXNvbHZlQ29uZmlnKGNvbmZpZyk7XG4gICAgICBsZXQgcmVxdWVzdERhdGEgPSBfY29uZmlnLmRhdGE7XG4gICAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKF9jb25maWcuaGVhZGVycykubm9ybWFsaXplKCk7XG4gICAgICBsZXQgeyByZXNwb25zZVR5cGUsIG9uVXBsb2FkUHJvZ3Jlc3MsIG9uRG93bmxvYWRQcm9ncmVzcyB9ID0gX2NvbmZpZztcbiAgICAgIGxldCBvbkNhbmNlbGVkO1xuICAgICAgbGV0IHVwbG9hZFRocm90dGxlZCwgZG93bmxvYWRUaHJvdHRsZWQ7XG4gICAgICBsZXQgZmx1c2hVcGxvYWQsIGZsdXNoRG93bmxvYWQ7XG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICAgIGZsdXNoVXBsb2FkICYmIGZsdXNoVXBsb2FkKCk7IC8vIGZsdXNoIGV2ZW50c1xuICAgICAgICBmbHVzaERvd25sb2FkICYmIGZsdXNoRG93bmxvYWQoKTsgLy8gZmx1c2ggZXZlbnRzXG5cbiAgICAgICAgX2NvbmZpZy5jYW5jZWxUb2tlbiAmJiBfY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuXG4gICAgICAgIF9jb25maWcuc2lnbmFsICYmIF9jb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcXVlc3Qub3BlbihfY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBfY29uZmlnLnVybCwgdHJ1ZSk7XG5cbiAgICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgICByZXF1ZXN0LnRpbWVvdXQgPSBfY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKFxuICAgICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPVxuICAgICAgICAgICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgcmVzcG9uc2VUeXBlID09PSAnanNvbidcbiAgICAgICAgICAgID8gcmVxdWVzdC5yZXNwb25zZVRleHRcbiAgICAgICAgICAgIDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgfTtcblxuICAgICAgICBzZXR0bGUoXG4gICAgICAgICAgZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gX3JlamVjdChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ29ubG9hZGVuZCcgaW4gcmVxdWVzdCkge1xuICAgICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IG9ubG9hZGVuZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlcXVlc3Quc3RhdHVzID09PSAwICYmXG4gICAgICAgICAgICAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5zdGFydHNXaXRoKCdmaWxlOicpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgICAgLy8gc28gd2Ugc2hvdWxkIGNhbGwgb25sb2FkZW5kIG9uIHRoZSBuZXh0ICd0aWNrJ1xuICAgICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsIGNvbmZpZywgcmVxdWVzdCkpO1xuICAgICAgICBkb25lKCk7XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGV2ZW50KSB7XG4gICAgICAgIC8vIEJyb3dzZXJzIGRlbGl2ZXIgYSBQcm9ncmVzc0V2ZW50IGluIFhIUiBvbmVycm9yXG4gICAgICAgIC8vIChtZXNzYWdlIG1heSBiZSBlbXB0eTsgd2hlbiBwcmVzZW50LCBzdXJmYWNlIGl0KVxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2Vycm9yX2V2ZW50XG4gICAgICAgIGNvbnN0IG1zZyA9IGV2ZW50ICYmIGV2ZW50Lm1lc3NhZ2UgPyBldmVudC5tZXNzYWdlIDogJ05ldHdvcmsgRXJyb3InO1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgQXhpb3NFcnJvcihtc2csIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICAgIC8vIGF0dGFjaCB0aGUgdW5kZXJseWluZyBldmVudCBmb3IgY29uc3VtZXJzIHdobyB3YW50IGRldGFpbHNcbiAgICAgICAgZXJyLmV2ZW50ID0gZXZlbnQgfHwgbnVsbDtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgICBsZXQgdGltZW91dEVycm9yTWVzc2FnZSA9IF9jb25maWcudGltZW91dFxuICAgICAgICAgID8gJ3RpbWVvdXQgb2YgJyArIF9jb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCdcbiAgICAgICAgICA6ICd0aW1lb3V0IGV4Y2VlZGVkJztcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbmFsID0gX2NvbmZpZy50cmFuc2l0aW9uYWwgfHwgdHJhbnNpdGlvbmFsRGVmYXVsdHM7XG4gICAgICAgIGlmIChfY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gX2NvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdChcbiAgICAgICAgICBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2l0aW9uYWwuY2xhcmlmeVRpbWVvdXRFcnJvciA/IEF4aW9zRXJyb3IuRVRJTUVET1VUIDogQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsXG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICByZXF1ZXN0XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBkb25lKCk7XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgIHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQgJiYgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUobnVsbCk7XG5cbiAgICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgICAgdXRpbHMuZm9yRWFjaCh0b0J5dGVTdHJpbmdIZWFkZXJPYmplY3QocmVxdWVzdEhlYWRlcnMpLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFfY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IF9jb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgICBpZiAob25Eb3dubG9hZFByb2dyZXNzKSB7XG4gICAgICAgIFtkb3dubG9hZFRocm90dGxlZCwgZmx1c2hEb3dubG9hZF0gPSBwcm9ncmVzc0V2ZW50UmVkdWNlcihvbkRvd25sb2FkUHJvZ3Jlc3MsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZG93bmxvYWRUaHJvdHRsZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgICAgaWYgKG9uVXBsb2FkUHJvZ3Jlc3MgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgICAgW3VwbG9hZFRocm90dGxlZCwgZmx1c2hVcGxvYWRdID0gcHJvZ3Jlc3NFdmVudFJlZHVjZXIob25VcGxvYWRQcm9ncmVzcyk7XG5cbiAgICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCB1cGxvYWRUaHJvdHRsZWQpO1xuXG4gICAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmbHVzaFVwbG9hZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfY29uZmlnLmNhbmNlbFRva2VuIHx8IF9jb25maWcuc2lnbmFsKSB7XG4gICAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgICAgb25DYW5jZWxlZCA9IChjYW5jZWwpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVqZWN0KCFjYW5jZWwgfHwgY2FuY2VsLnR5cGUgPyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcsIHJlcXVlc3QpIDogY2FuY2VsKTtcbiAgICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9jb25maWcuY2FuY2VsVG9rZW4gJiYgX2NvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICAgIGlmIChfY29uZmlnLnNpZ25hbCkge1xuICAgICAgICAgIF9jb25maWcuc2lnbmFsLmFib3J0ZWRcbiAgICAgICAgICAgID8gb25DYW5jZWxlZCgpXG4gICAgICAgICAgICA6IF9jb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZVByb3RvY29sKF9jb25maWcudXJsKTtcblxuICAgICAgaWYgKHByb3RvY29sICYmICFwbGF0Zm9ybS5wcm90b2NvbHMuaW5jbHVkZXMocHJvdG9jb2wpKSB7XG4gICAgICAgIHJlamVjdChcbiAgICAgICAgICBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgICAgICdVbnN1cHBvcnRlZCBwcm90b2NvbCAnICsgcHJvdG9jb2wgKyAnOicsXG4gICAgICAgICAgICBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCxcbiAgICAgICAgICAgIGNvbmZpZ1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSB8fCBudWxsKTtcbiAgICB9KTtcbiAgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuaW1wb3J0IEF4aW9zIGZyb20gJy4vY29yZS9BeGlvcy5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9jb3JlL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsVG9rZW4gZnJvbSAnLi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tICcuL2Vudi9kYXRhLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBzcHJlYWQgZnJvbSAnLi9oZWxwZXJzL3NwcmVhZC5qcyc7XG5pbXBvcnQgaXNBeGlvc0Vycm9yIGZyb20gJy4vaGVscGVycy9pc0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBhZGFwdGVycyBmcm9tICcuL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzJztcbmltcG9ydCBIdHRwU3RhdHVzQ29kZSBmcm9tICcuL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybnMge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIGNvbnN0IGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQsIHsgYWxsT3duS2V5czogdHJ1ZSB9KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0LCBudWxsLCB7IGFsbE93bktleXM6IHRydWUgfSk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcbmF4aW9zLkNhbmNlbFRva2VuID0gQ2FuY2VsVG9rZW47XG5heGlvcy5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XG5heGlvcy50b0Zvcm1EYXRhID0gdG9Gb3JtRGF0YTtcblxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcbmF4aW9zLkF4aW9zRXJyb3IgPSBBeGlvc0Vycm9yO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gc3ByZWFkO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSBpc0F4aW9zRXJyb3I7XG5cbi8vIEV4cG9zZSBtZXJnZUNvbmZpZ1xuYXhpb3MubWVyZ2VDb25maWcgPSBtZXJnZUNvbmZpZztcblxuYXhpb3MuQXhpb3NIZWFkZXJzID0gQXhpb3NIZWFkZXJzO1xuXG5heGlvcy5mb3JtVG9KU09OID0gKHRoaW5nKSA9PiBmb3JtRGF0YVRvSlNPTih1dGlscy5pc0hUTUxGb3JtKHRoaW5nKSA/IG5ldyBGb3JtRGF0YSh0aGluZykgOiB0aGluZyk7XG5cbmF4aW9zLmdldEFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyO1xuXG5heGlvcy5IdHRwU3RhdHVzQ29kZSA9IEh0dHBTdGF0dXNDb2RlO1xuXG5heGlvcy5kZWZhdWx0ID0gYXhpb3M7XG5cbi8vIHRoaXMgbW9kdWxlIHNob3VsZCBvbmx5IGhhdmUgYSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vQ2FuY2VsZWRFcnJvci5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybnMge0NhbmNlbFRva2VufVxuICovXG5jbGFzcyBDYW5jZWxUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlUHJvbWlzZTtcblxuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IHRoaXM7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuKChjYW5jZWwpID0+IHtcbiAgICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuXG4gICAgICBsZXQgaSA9IHRva2VuLl9saXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgICB9XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4gPSAob25mdWxmaWxsZWQpID0+IHtcbiAgICAgIGxldCBfcmVzb2x2ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdG9rZW4uc3Vic2NyaWJlKHJlc29sdmUpO1xuICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcblxuICAgICAgcHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gICAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICAgKi9cbiAgdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIHRocm93IHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgdG9BYm9ydFNpZ25hbCgpIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgY29uc3QgYWJvcnQgPSAoZXJyKSA9PiB7XG4gICAgICBjb250cm9sbGVyLmFib3J0KGVycik7XG4gICAgfTtcblxuICAgIHRoaXMuc3Vic2NyaWJlKGFib3J0KTtcblxuICAgIGNvbnRyb2xsZXIuc2lnbmFsLnVuc3Vic2NyaWJlID0gKCkgPT4gdGhpcy51bnN1YnNjcmliZShhYm9ydCk7XG5cbiAgICByZXR1cm4gY29udHJvbGxlci5zaWduYWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICAgKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICAgKi9cbiAgc3RhdGljIHNvdXJjZSgpIHtcbiAgICBsZXQgY2FuY2VsO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICAgIGNhbmNlbCA9IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgY2FuY2VsLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5cbmNsYXNzIENhbmNlbGVkRXJyb3IgZXh0ZW5kcyBBeGlvc0Vycm9yIHtcbiAgLyoqXG4gICAqIEEgYENhbmNlbGVkRXJyb3JgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge09iamVjdD19IGNvbmZpZyBUaGUgY29uZmlnLlxuICAgKiBAcGFyYW0ge09iamVjdD19IHJlcXVlc3QgVGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtDYW5jZWxlZEVycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAgIHN1cGVyKG1lc3NhZ2UgPT0gbnVsbCA/ICdjYW5jZWxlZCcgOiBtZXNzYWdlLCBBeGlvc0Vycm9yLkVSUl9DQU5DRUxFRCwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG4gICAgdGhpcy5fX0NBTkNFTF9fID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxlZEVycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgSW50ZXJjZXB0b3JNYW5hZ2VyIGZyb20gJy4vSW50ZXJjZXB0b3JNYW5hZ2VyLmpzJztcbmltcG9ydCBkaXNwYXRjaFJlcXVlc3QgZnJvbSAnLi9kaXNwYXRjaFJlcXVlc3QuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vbWVyZ2VDb25maWcuanMnO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi9idWlsZEZ1bGxQYXRoLmpzJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAnLi4vaGVscGVycy92YWxpZGF0b3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5jbGFzcyBBeGlvcyB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGNvbmZpZ09yVXJsIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAgICogQHBhcmFtIHs/T2JqZWN0fSBjb25maWdcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICAgKi9cbiAgYXN5bmMgcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9yZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGxldCBkdW1teSA9IHt9O1xuXG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID8gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZHVtbXkpIDogKGR1bW15ID0gbmV3IEVycm9yKCkpO1xuXG4gICAgICAgIC8vIHNsaWNlIG9mZiB0aGUgRXJyb3I6IC4uLiBsaW5lXG4gICAgICAgIGNvbnN0IHN0YWNrID0gKCgpID0+IHtcbiAgICAgICAgICBpZiAoIWR1bW15LnN0YWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZmlyc3ROZXdsaW5lSW5kZXggPSBkdW1teS5zdGFjay5pbmRleE9mKCdcXG4nKTtcblxuICAgICAgICAgIHJldHVybiBmaXJzdE5ld2xpbmVJbmRleCA9PT0gLTEgPyAnJyA6IGR1bW15LnN0YWNrLnNsaWNlKGZpcnN0TmV3bGluZUluZGV4ICsgMSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFlcnIuc3RhY2spIHtcbiAgICAgICAgICAgIGVyci5zdGFjayA9IHN0YWNrO1xuICAgICAgICAgICAgLy8gbWF0Y2ggd2l0aG91dCB0aGUgMiB0b3Agc3RhY2sgbGluZXNcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5ld2xpbmVJbmRleCA9IHN0YWNrLmluZGV4T2YoJ1xcbicpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kTmV3bGluZUluZGV4ID1cbiAgICAgICAgICAgICAgZmlyc3ROZXdsaW5lSW5kZXggPT09IC0xID8gLTEgOiBzdGFjay5pbmRleE9mKCdcXG4nLCBmaXJzdE5ld2xpbmVJbmRleCArIDEpO1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tXaXRob3V0VHdvVG9wTGluZXMgPVxuICAgICAgICAgICAgICBzZWNvbmROZXdsaW5lSW5kZXggPT09IC0xID8gJycgOiBzdGFjay5zbGljZShzZWNvbmROZXdsaW5lSW5kZXggKyAxKTtcblxuICAgICAgICAgICAgaWYgKCFTdHJpbmcoZXJyLnN0YWNrKS5lbmRzV2l0aChzdGFja1dpdGhvdXRUd29Ub3BMaW5lcykpIHtcbiAgICAgICAgICAgICAgZXJyLnN0YWNrICs9ICdcXG4nICsgc3RhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaWdub3JlIHRoZSBjYXNlIHdoZXJlIFwic3RhY2tcIiBpcyBhbiB1bi13cml0YWJsZSBwcm9wZXJ0eVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBfcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICAgIGlmICh0eXBlb2YgY29uZmlnT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgICBjb25maWcudXJsID0gY29uZmlnT3JVcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZ09yVXJsIHx8IHt9O1xuICAgIH1cblxuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgICBjb25zdCB7IHRyYW5zaXRpb25hbCwgcGFyYW1zU2VyaWFsaXplciwgaGVhZGVycyB9ID0gY29uZmlnO1xuXG4gICAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhcbiAgICAgICAgdHJhbnNpdGlvbmFsLFxuICAgICAgICB7XG4gICAgICAgICAgc2lsZW50SlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgICAgZm9yY2VkSlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgICBsZWdhY3lJbnRlcmNlcHRvclJlcVJlc09yZGVyaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICAgIGFkdmVydGlzZVpzdGRBY2NlcHRFbmNvZGluZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgICB2YWxpZGF0ZVN0YXR1c1VuZGVmaW5lZFJlc29sdmVzOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICB9LFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zU2VyaWFsaXplciAhPSBudWxsKSB7XG4gICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJhbXNTZXJpYWxpemVyKSkge1xuICAgICAgICBjb25maWcucGFyYW1zU2VyaWFsaXplciA9IHtcbiAgICAgICAgICBzZXJpYWxpemU6IHBhcmFtc1NlcmlhbGl6ZXIsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhcbiAgICAgICAgICBwYXJhbXNTZXJpYWxpemVyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVuY29kZTogdmFsaWRhdG9ycy5mdW5jdGlvbixcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogdmFsaWRhdG9ycy5mdW5jdGlvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgY29uZmlnLmFsbG93QWJzb2x1dGVVcmxzXG4gICAgaWYgKGNvbmZpZy5hbGxvd0Fic29sdXRlVXJscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLmFsbG93QWJzb2x1dGVVcmxzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5hbGxvd0Fic29sdXRlVXJscyA9IHRoaXMuZGVmYXVsdHMuYWxsb3dBYnNvbHV0ZVVybHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5hbGxvd0Fic29sdXRlVXJscyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMoXG4gICAgICBjb25maWcsXG4gICAgICB7XG4gICAgICAgIGJhc2VVcmw6IHZhbGlkYXRvcnMuc3BlbGxpbmcoJ2Jhc2VVUkwnKSxcbiAgICAgICAgd2l0aFhzcmZUb2tlbjogdmFsaWRhdG9ycy5zcGVsbGluZygnd2l0aFhTUkZUb2tlbicpLFxuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgICBjb25maWcubWV0aG9kID0gKGNvbmZpZy5tZXRob2QgfHwgdGhpcy5kZWZhdWx0cy5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgICBsZXQgY29udGV4dEhlYWRlcnMgPSBoZWFkZXJzICYmIHV0aWxzLm1lcmdlKGhlYWRlcnMuY29tbW9uLCBoZWFkZXJzW2NvbmZpZy5tZXRob2RdKTtcblxuICAgIGhlYWRlcnMgJiZcbiAgICAgIHV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAncXVlcnknLCAnY29tbW9uJ10sIChtZXRob2QpID0+IHtcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNbbWV0aG9kXTtcbiAgICAgIH0pO1xuXG4gICAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuY29uY2F0KGNvbnRleHRIZWFkZXJzLCBoZWFkZXJzKTtcblxuICAgIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgICBjb25zdCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIGxldCBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcmNlcHRvci5ydW5XaGVuID09PSAnZnVuY3Rpb24nICYmIGludGVyY2VwdG9yLnJ1bldoZW4oY29uZmlnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3Iuc3luY2hyb25vdXM7XG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWwgfHwgdHJhbnNpdGlvbmFsRGVmYXVsdHM7XG4gICAgICBjb25zdCBsZWdhY3lJbnRlcmNlcHRvclJlcVJlc09yZGVyaW5nID1cbiAgICAgICAgdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5sZWdhY3lJbnRlcmNlcHRvclJlcVJlc09yZGVyaW5nO1xuXG4gICAgICBpZiAobGVnYWN5SW50ZXJjZXB0b3JSZXFSZXNPcmRlcmluZykge1xuICAgICAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbGVuO1xuXG4gICAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdC5iaW5kKHRoaXMpLCB1bmRlZmluZWRdO1xuICAgICAgY2hhaW4udW5zaGlmdCguLi5yZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBjaGFpbi5wdXNoKC4uLnJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBsZW4gPSBjaGFpbi5sZW5ndGg7XG5cbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbltpKytdLCBjaGFpbltpKytdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgbGVuID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoO1xuXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZztcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb25zdCBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICBjb25zdCBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkID8gb25GdWxmaWxsZWQobmV3Q29uZmlnKSA6IG5ld0NvbmZpZztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghb25SZWplY3RlZCkge1xuICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlamVjdGVkUmVzdWx0ID0gb25SZWplY3RlZC5jYWxsKHRoaXMsIGVycm9yKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc1RoZW5hYmxlKHJlamVjdGVkUmVzdWx0KSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZWplY3RlZFJlc3VsdCkudGhlbigoKSA9PlxuICAgICAgICAgICAgICBkaXNwYXRjaFJlcXVlc3QuY2FsbCh0aGlzLCBuZXdDb25maWcpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAocmVqZWN0ZWRFcnJvcikge1xuICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdChyZWplY3RlZEVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdC5jYWxsKHRoaXMsIG5ld0NvbmZpZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGkgPSAwO1xuICAgIGxlbiA9IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZ2V0VXJpKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsLCBjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcik7XG4gIH1cbn1cblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgbWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhOiBjb25maWcgJiYgdXRpbHMuaGFzT3duUHJvcChjb25maWcsICdkYXRhJykgPyBjb25maWcuZGF0YSA6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAncXVlcnknXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBmdW5jdGlvbiBnZW5lcmF0ZUhUVFBNZXRob2QoaXNGb3JtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGh0dHBNZXRob2QodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAgIG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICBoZWFkZXJzOiBpc0Zvcm1cbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCgpO1xuXG4gIC8vIFFVRVJZIGlzIGEgc2FmZS9pZGVtcG90ZW50IHJlYWQgbWV0aG9kOyBtdWx0aXBhcnQgZm9ybSBib2RpZXMgZG9uJ3QgZml0XG4gIC8vIGl0cyBzZW1hbnRpY3MsIHNvIG5vIHF1ZXJ5Rm9ybSBzaG9ydGhhbmQgaXMgZ2VuZXJhdGVkLlxuICBpZiAobWV0aG9kICE9PSAncXVlcnknKSB7XG4gICAgQXhpb3MucHJvdG90eXBlW21ldGhvZCArICdGb3JtJ10gPSBnZW5lcmF0ZUhUVFBNZXRob2QodHJ1ZSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9BeGlvc0hlYWRlcnMuanMnO1xuXG5leHBvcnQgY29uc3QgUkVEQUNURUQgPSAnW1JFREFDVEVEICoqKipdJztcblxuZnVuY3Rpb24gaGFzT3duT3JQcm90b3R5cGVUb0pTT04oc291cmNlKSB7XG4gIGlmICh1dGlscy5oYXNPd25Qcm9wKHNvdXJjZSwgJ3RvSlNPTicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBsZXQgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG5cbiAgd2hpbGUgKHByb3RvdHlwZSAmJiBwcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBpZiAodXRpbHMuaGFzT3duUHJvcChwcm90b3R5cGUsICd0b0pTT04nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIEJ1aWxkIGEgcGxhaW4tb2JqZWN0IHNuYXBzaG90IG9mIGBjb25maWdgIGFuZCByZXBsYWNlIHRoZSB2YWx1ZSBvZiBhbnkga2V5XG4vLyAoY2FzZS1pbnNlbnNpdGl2ZSkgbGlzdGVkIGluIGByZWRhY3RLZXlzYCB3aXRoIFJFREFDVEVELiBXYWxrcyB0aHJvdWdoIGFycmF5c1xuLy8gYW5kIEF4aW9zSGVhZGVycywgYW5kIHNob3J0LWNpcmN1aXRzIG9uIGNpcmN1bGFyIHJlZmVyZW5jZXMuXG5mdW5jdGlvbiByZWRhY3RDb25maWcoY29uZmlnLCByZWRhY3RLZXlzKSB7XG4gIGNvbnN0IGxvd2VyS2V5cyA9IG5ldyBTZXQocmVkYWN0S2V5cy5tYXAoKGspID0+IFN0cmluZyhrKS50b0xvd2VyQ2FzZSgpKSk7XG4gIGNvbnN0IHNlZW4gPSBbXTtcblxuICBjb25zdCB2aXNpdCA9IChzb3VyY2UpID0+IHtcbiAgICBpZiAoc291cmNlID09PSBudWxsIHx8IHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSByZXR1cm4gc291cmNlO1xuICAgIGlmICh1dGlscy5pc0J1ZmZlcihzb3VyY2UpKSByZXR1cm4gc291cmNlO1xuICAgIGlmIChzZWVuLmluZGV4T2Yoc291cmNlKSAhPT0gLTEpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXhpb3NIZWFkZXJzKSB7XG4gICAgICBzb3VyY2UgPSBzb3VyY2UudG9KU09OKCk7XG4gICAgfVxuXG4gICAgc2Vlbi5wdXNoKHNvdXJjZSk7XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgc291cmNlLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodik7XG4gICAgICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdFtpXSA9IHJlZHVjZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpICYmIGhhc093bk9yUHJvdG90eXBlVG9KU09OKHNvdXJjZSkpIHtcbiAgICAgICAgc2Vlbi5wb3AoKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNvdXJjZSkpIHtcbiAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gbG93ZXJLZXlzLmhhcyhrZXkudG9Mb3dlckNhc2UoKSkgPyBSRURBQ1RFRCA6IHZpc2l0KHZhbHVlKTtcbiAgICAgICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChyZWR1Y2VkVmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSByZWR1Y2VkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWVuLnBvcCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIHZpc2l0KGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseSh2YWx1ZSkge1xuICB0cnkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWdncmVnYXRlRXJyb3JNZXNzYWdlKGVycm9yKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5lcnJvcnNcbiAgICAubWFwKChlbnRyeSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5Lm1lc3NhZ2UgPyBzdHJpbmdpZnlTYWZlbHkoZW50cnkubWVzc2FnZSkgOiBzdHJpbmdpZnlTYWZlbHkoZW50cnkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9KVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignOyAnKTtcblxuICByZXR1cm4gbWVzc2FnZSB8fCBlcnJvci5uYW1lIHx8ICdBZ2dyZWdhdGVFcnJvcic7XG59XG5cbmNsYXNzIEF4aW9zRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXRpYyBmcm9tKGVycm9yLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlLCBjdXN0b21Qcm9wcykge1xuICAgIC8vIGBBZ2dyZWdhdGVFcnJvcmAgKHRocm93biBieSBOb2RlIG9uIGR1YWwtc3RhY2svSGFwcHktRXllYmFsbHMgY29ubmVjdGlvblxuICAgIC8vIGZhaWx1cmVzKSBoYXMgYW4gZW1wdHkgYG1lc3NhZ2VgOyBpdHMgZGV0YWlsIGxpdmVzIGluIGBlcnJvcnNbXWAuIFdpdGhvdXRcbiAgICAvLyB0aGlzLCB0aGUgd3JhcHBlZCBlcnJvciBzdXJmYWNlcyB3aXRoIGEgYmxhbmsgbWVzc2FnZSAoc2VlICM2NzIxKS5cbiAgICBsZXQgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgaWYgKCFtZXNzYWdlICYmIHV0aWxzLmlzQXJyYXkoZXJyb3IuZXJyb3JzKSAmJiBlcnJvci5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICBtZXNzYWdlID0gYWdncmVnYXRlRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICB9XG5cbiAgICBjb25zdCBheGlvc0Vycm9yID0gbmV3IEF4aW9zRXJyb3IobWVzc2FnZSwgY29kZSB8fCBlcnJvci5jb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAvLyBNYXRjaCBuYXRpdmUgYEVycm9yYCBgY2F1c2VgIHNlbWFudGljczogbm9uLWVudW1lcmFibGUuIFRoZSB3cmFwcGVkXG4gICAgLy8gZXJyb3Igb2Z0ZW4gY2FycmllcyBjaXJjdWxhciBpbnRlcm5hbHMgKHNvY2tldHMsIHJlcXVlc3RzLCBhZ2VudHMpLCBzb1xuICAgIC8vIGFuIGVudW1lcmFibGUgYGNhdXNlYCBtYWtlcyBzdHJ1Y3R1cmVkIGxvZ2dlcnMgKHBpbm8vd2luc3RvbikgYW5kIGFueVxuICAgIC8vIG93bi1wcm9wZXJ0eSB3YWxrIHRocm93IFwiQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTlwiLlxuICAgIC8vIFJlZ3Jlc3Npb24gZnJvbSAjNjk4Mjsgc2VlICM3MjA1LiBgX19wcm90b19fOiBudWxsYCBtaXJyb3JzIHRoZVxuICAgIC8vIGBtZXNzYWdlYCBkZXNjcmlwdG9yIGJlbG93IChwcm90b3R5cGUtcG9sbHV0aW9uLXNhZmUgZGVzY3JpcHRvcikuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGF4aW9zRXJyb3IsICdjYXVzZScsIHtcbiAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgIHZhbHVlOiBlcnJvcixcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSk7XG4gICAgYXhpb3NFcnJvci5uYW1lID0gZXJyb3IubmFtZTtcblxuICAgIC8vIFByZXNlcnZlIHN0YXR1cyBmcm9tIHRoZSBvcmlnaW5hbCBlcnJvciBpZiBub3QgYWxyZWFkeSBzZXQgZnJvbSByZXNwb25zZVxuICAgIGlmIChlcnJvci5zdGF0dXMgIT0gbnVsbCAmJiBheGlvc0Vycm9yLnN0YXR1cyA9PSBudWxsKSB7XG4gICAgICBheGlvc0Vycm9yLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcbiAgICB9XG5cbiAgICBjdXN0b21Qcm9wcyAmJiBPYmplY3QuYXNzaWduKGF4aW9zRXJyb3IsIGN1c3RvbVByb3BzKTtcbiAgICByZXR1cm4gYXhpb3NFcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ10gVGhlIGNvbmZpZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IobWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgLy8gTWFrZSBtZXNzYWdlIGVudW1lcmFibGUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgIC8vIFRoZSBuYXRpdmUgRXJyb3IgY29uc3RydWN0b3Igc2V0cyBtZXNzYWdlIGFzIG5vbi1lbnVtZXJhYmxlLFxuICAgIC8vIGJ1dCBheGlvcyA8IHYxLjEzLjMgaGFkIGl0IGFzIGVudW1lcmFibGVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ21lc3NhZ2UnLCB7XG4gICAgICAvLyBOdWxsLXByb3RvIGRlc2NyaXB0b3Igc28gYSBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlLmdldCBjYW5ub3QgdHVyblxuICAgICAgLy8gdGhpcyBkYXRhIGRlc2NyaXB0b3IgaW50byBhbiBhY2Nlc3NvciBkZXNjcmlwdG9yIG9uIHRoZSB3YXkgaW4uXG4gICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICB2YWx1ZTogbWVzc2FnZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHRoaXMubmFtZSA9ICdBeGlvc0Vycm9yJztcbiAgICB0aGlzLmlzQXhpb3NFcnJvciA9IHRydWU7XG4gICAgY29kZSAmJiAodGhpcy5jb2RlID0gY29kZSk7XG4gICAgY29uZmlnICYmICh0aGlzLmNvbmZpZyA9IGNvbmZpZyk7XG4gICAgcmVxdWVzdCAmJiAodGhpcy5yZXF1ZXN0ID0gcmVxdWVzdCk7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgLy8gT3B0LWluIHJlZGFjdGlvbjogd2hlbiB0aGUgcmVxdWVzdCBjb25maWcgY2FycmllcyBhIGByZWRhY3RgIGFycmF5LCB0aGVcbiAgICAvLyB2YWx1ZSBvZiBhbnkgbWF0Y2hpbmcga2V5IChjYXNlLWluc2Vuc2l0aXZlLCBhdCBhbnkgZGVwdGgpIGlzIHJlcGxhY2VkXG4gICAgLy8gd2l0aCBSRURBQ1RFRCBpbiB0aGUgc2VyaWFsaXplZCBzbmFwc2hvdC4gVW5kZWZpbmVkIG9yIGVtcHR5IGxlYXZlcyB0aGVcbiAgICAvLyBleGlzdGluZyBzZXJpYWxpemF0aW9uIGJlaGF2aW9yIHVuY2hhbmdlZC5cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCByZWRhY3RLZXlzID0gY29uZmlnICYmIHV0aWxzLmhhc093blByb3AoY29uZmlnLCAncmVkYWN0JykgPyBjb25maWcucmVkYWN0IDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWRDb25maWcgPVxuICAgICAgdXRpbHMuaXNBcnJheShyZWRhY3RLZXlzKSAmJiByZWRhY3RLZXlzLmxlbmd0aCA+IDBcbiAgICAgICAgPyByZWRhY3RDb25maWcoY29uZmlnLCByZWRhY3RLZXlzKVxuICAgICAgICA6IHV0aWxzLnRvSlNPTk9iamVjdChjb25maWcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogc2VyaWFsaXplZENvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgfTtcbiAgfVxufVxuXG4vLyBUaGlzIGNhbiBiZSBjaGFuZ2VkIHRvIHN0YXRpYyBwcm9wZXJ0aWVzIGFzIHNvb24gYXMgdGhlIHBhcnNlciBvcHRpb25zIGluIC5lc2xpbnQuY2pzIGFyZSB1cGRhdGVkLlxuQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSA9ICdFUlJfQkFEX09QVElPTl9WQUxVRSc7XG5BeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OID0gJ0VSUl9CQURfT1BUSU9OJztcbkF4aW9zRXJyb3IuRUNPTk5BQk9SVEVEID0gJ0VDT05OQUJPUlRFRCc7XG5BeGlvc0Vycm9yLkVUSU1FRE9VVCA9ICdFVElNRURPVVQnO1xuQXhpb3NFcnJvci5FQ09OTlJFRlVTRUQgPSAnRUNPTk5SRUZVU0VEJztcbkF4aW9zRXJyb3IuRVJSX05FVFdPUksgPSAnRVJSX05FVFdPUksnO1xuQXhpb3NFcnJvci5FUlJfRlJfVE9PX01BTllfUkVESVJFQ1RTID0gJ0VSUl9GUl9UT09fTUFOWV9SRURJUkVDVFMnO1xuQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRCA9ICdFUlJfREVQUkVDQVRFRCc7XG5BeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UgPSAnRVJSX0JBRF9SRVNQT05TRSc7XG5BeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCA9ICdFUlJfQkFEX1JFUVVFU1QnO1xuQXhpb3NFcnJvci5FUlJfQ0FOQ0VMRUQgPSAnRVJSX0NBTkNFTEVEJztcbkF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JUID0gJ0VSUl9OT1RfU1VQUE9SVCc7XG5BeGlvc0Vycm9yLkVSUl9JTlZBTElEX1VSTCA9ICdFUlJfSU5WQUxJRF9VUkwnO1xuQXhpb3NFcnJvci5FUlJfRk9STV9EQVRBX0RFUFRIX0VYQ0VFREVEID0gJ0VSUl9GT1JNX0RBVEFfREVQVEhfRVhDRUVERUQnO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0Vycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBhcnNlSGVhZGVycyBmcm9tICcuLi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyc7XG5pbXBvcnQgeyBzYW5pdGl6ZUhlYWRlclZhbHVlIH0gZnJvbSAnLi4vaGVscGVycy9zYW5pdGl6ZUhlYWRlclZhbHVlLmpzJztcblxuY29uc3QgJGludGVybmFscyA9IFN5bWJvbCgnaW50ZXJuYWxzJyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlciAmJiBTdHJpbmcoaGVhZGVyKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKG5vcm1hbGl6ZVZhbHVlKSA6IHNhbml0aXplSGVhZGVyVmFsdWUoU3RyaW5nKHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW5zKHN0cikge1xuICBjb25zdCB0b2tlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCB0b2tlbnNSRSA9IC8oW15cXHMsOz1dKylcXHMqKD86PVxccyooW14sO10rKSk/L2c7XG4gIGxldCBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gdG9rZW5zUkUuZXhlYyhzdHIpKSkge1xuICAgIHRva2Vuc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmNvbnN0IHBhcmFtZXRlck5hbWVSRSA9IC9eWyEjJCUmJyorXFwtLl5fYHx+MC05QS1aYS16XSskLztcblxuZnVuY3Rpb24gdHJpbU9XUyh2YWx1ZSkge1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgZW5kID0gdmFsdWUubGVuZ3RoO1xuXG4gIHdoaWxlIChzdGFydCA8IGVuZCkge1xuICAgIGNvbnN0IGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICAgIGlmIChjb2RlICE9PSAweDA5ICYmIGNvZGUgIT09IDB4MjApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXJ0ICs9IDE7XG4gIH1cblxuICB3aGlsZSAoZW5kID4gc3RhcnQpIHtcbiAgICBjb25zdCBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChlbmQgLSAxKTtcblxuICAgIGlmIChjb2RlICE9PSAweDA5ICYmIGNvZGUgIT09IDB4MjApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVuZCAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gdmFsdWUubGVuZ3RoID8gdmFsdWUgOiB2YWx1ZS5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlUXVvdGVkU3RyaW5nKHZhbHVlKSB7XG4gIGNvbnN0IGxhc3QgPSB2YWx1ZS5sZW5ndGggLSAxO1xuXG4gIGlmIChsYXN0IDwgMSB8fCB2YWx1ZS5jaGFyQ29kZUF0KDApICE9PSAweDIyIHx8IHZhbHVlLmNoYXJDb2RlQXQobGFzdCkgIT09IDB4MjIpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBsZXQgZGVjb2RlZCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGFzdDsgaSsrKSB7XG4gICAgY29uc3QgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyMikge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAweDVjKSB7XG4gICAgICBpICs9IDE7XG5cbiAgICAgIGlmIChpID49IGxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlY29kZWQgKz0gdmFsdWVbaV07XG4gIH1cblxuICByZXR1cm4gZGVjb2RlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXJzKHZhbHVlKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUpO1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgcXVvdGVkID0gZmFsc2U7XG4gIGxldCBlc2NhcGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIoZW5kKSB7XG4gICAgY29uc3QgcGFydCA9IHRyaW1PV1Moc3RyLnNsaWNlKHN0YXJ0LCBlbmQpKTtcbiAgICBjb25zdCBlcXVhbHMgPSBwYXJ0LmluZGV4T2YoJz0nKTtcblxuICAgIGlmIChlcXVhbHMgPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IHRyaW1PV1MocGFydC5zbGljZSgwLCBlcXVhbHMpKTtcblxuICAgIGlmICghcGFyYW1ldGVyTmFtZVJFLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChcbiAgICAgIG5vcm1hbGl6ZWROYW1lID09PSAnX19wcm90b19fJyB8fFxuICAgICAgbm9ybWFsaXplZE5hbWUgPT09ICdjb25zdHJ1Y3RvcicgfHxcbiAgICAgIG5vcm1hbGl6ZWROYW1lID09PSAncHJvdG90eXBlJ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtZXRlclZhbHVlID0gdHJpbU9XUyhwYXJ0LnNsaWNlKGVxdWFscyArIDEpKTtcbiAgICBwYXJhbWV0ZXJzW25vcm1hbGl6ZWROYW1lXSA9IGRlY29kZVF1b3RlZFN0cmluZyhwYXJhbWV0ZXJWYWx1ZSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChxdW90ZWQpIHtcbiAgICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHg1Yykge1xuICAgICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyMikge1xuICAgICAgICBxdW90ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjIpIHtcbiAgICAgIHF1b3RlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDJjIHx8IGNvZGUgPT09IDB4M2IpIHtcbiAgICAgIHBhcnNlUGFyYW1ldGVyKGkpO1xuICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBwYXJzZVBhcmFtZXRlcihzdHIubGVuZ3RoKTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuY29uc3QgaXNWYWxpZEhlYWRlck5hbWUgPSAoc3RyKSA9PiAvXlstX2EtekEtWjAtOV5gfH4sISMkJSYnKisuXSskLy50ZXN0KHN0ci50cmltKCkpO1xuXG5mdW5jdGlvbiBtYXRjaEhlYWRlclZhbHVlKGNvbnRleHQsIHZhbHVlLCBoZWFkZXIsIGZpbHRlciwgaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcywgdmFsdWUsIGhlYWRlcik7XG4gIH1cblxuICBpZiAoaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gICAgdmFsdWUgPSBoZWFkZXI7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlKSkgcmV0dXJuO1xuXG4gIGlmICh1dGlscy5pc1N0cmluZyhmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gIH1cblxuICBpZiAodXRpbHMuaXNSZWdFeHAoZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIudGVzdCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0SGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyXG4gICAgLnRyaW0oKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoLyhbYS16XFxkXSkoXFx3KikvZywgKHcsIGNoYXIsIHN0cikgPT4ge1xuICAgICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKSArIHN0cjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRBY2Nlc3NvcnMob2JqLCBoZWFkZXIpIHtcbiAgY29uc3QgYWNjZXNzb3JOYW1lID0gdXRpbHMudG9DYW1lbENhc2UoJyAnICsgaGVhZGVyKTtcblxuICBbJ2dldCcsICdzZXQnLCAnaGFzJ10uZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG1ldGhvZE5hbWUgKyBhY2Nlc3Nvck5hbWUsIHtcbiAgICAgIC8vIE51bGwtcHJvdG8gZGVzY3JpcHRvciBzbyBhIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUuZ2V0IGNhbm5vdCB0dXJuXG4gICAgICAvLyB0aGlzIGRhdGEgZGVzY3JpcHRvciBpbnRvIGFuIGFjY2Vzc29yIGRlc2NyaXB0b3Igb24gdGhlIHdheSBpbi5cbiAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIGhlYWRlciwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9KTtcbn1cblxuY2xhc3MgQXhpb3NIZWFkZXJzIHtcbiAgY29uc3RydWN0b3IoaGVhZGVycykge1xuICAgIGhlYWRlcnMgJiYgdGhpcy5zZXQoaGVhZGVycyk7XG4gIH1cblxuICBzZXQoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSwgcmV3cml0ZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghbEhlYWRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgbEhlYWRlcik7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIWtleSB8fFxuICAgICAgICBzZWxmW2tleV0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBfcmV3cml0ZSA9PT0gdHJ1ZSB8fFxuICAgICAgICAoX3Jld3JpdGUgPT09IHVuZGVmaW5lZCAmJiBzZWxmW2tleV0gIT09IGZhbHNlKVxuICAgICAgKSB7XG4gICAgICAgIHNlbGZba2V5IHx8IF9oZWFkZXJdID0gbm9ybWFsaXplVmFsdWUoX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRIZWFkZXJzID0gKGhlYWRlcnMsIF9yZXdyaXRlKSA9PlxuICAgICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCAoX3ZhbHVlLCBfaGVhZGVyKSA9PiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkpO1xuXG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoaGVhZGVyKSB8fCBoZWFkZXIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICBzZXRIZWFkZXJzKGhlYWRlciwgdmFsdWVPclJld3JpdGUpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNTdHJpbmcoaGVhZGVyKSAmJiAoaGVhZGVyID0gaGVhZGVyLnRyaW0oKSkgJiYgIWlzVmFsaWRIZWFkZXJOYW1lKGhlYWRlcikpIHtcbiAgICAgIHNldEhlYWRlcnMocGFyc2VIZWFkZXJzKGhlYWRlciksIHZhbHVlT3JSZXdyaXRlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGhlYWRlcikgJiYgdXRpbHMuaXNTYWZlSXRlcmFibGUoaGVhZGVyKSkge1xuICAgICAgbGV0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgIGRlc3QsXG4gICAgICAgIGtleTtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGVhZGVyKSB7XG4gICAgICAgIGlmICghdXRpbHMuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QgaXRlcmF0b3IgbXVzdCByZXR1cm4gYSBrZXktdmFsdWUgcGFpcicpO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0gZW50cnlbMF07XG5cbiAgICAgICAgaWYgKHV0aWxzLmhhc093blByb3Aob2JqLCBrZXkpKSB7XG4gICAgICAgICAgZGVzdCA9IG9ialtrZXldO1xuICAgICAgICAgIG9ialtrZXldID0gdXRpbHMuaXNBcnJheShkZXN0KSA/IFsuLi5kZXN0LCBlbnRyeVsxXV0gOiBbZGVzdCwgZW50cnlbMV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtrZXldID0gZW50cnlbMV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0SGVhZGVycyhvYmosIHZhbHVlT3JSZXdyaXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyICE9IG51bGwgJiYgc2V0SGVhZGVyKHZhbHVlT3JSZXdyaXRlLCBoZWFkZXIsIHJld3JpdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KGhlYWRlciwgcGFyc2VyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG5cbiAgICAgICAgaWYgKCFwYXJzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VyID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5zKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmNhbGwodGhpcywgdmFsdWUsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNSZWdFeHAocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuZXhlYyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJzZXIgbXVzdCBiZSBib29sZWFufHJlZ2V4cHxmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhcyhoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgcmV0dXJuICEhKFxuICAgICAgICBrZXkgJiZcbiAgICAgICAgdGhpc1trZXldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkZWxldGUoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUhlYWRlcihfaGVhZGVyKSB7XG4gICAgICBfaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoX2hlYWRlcikge1xuICAgICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIF9oZWFkZXIpO1xuXG4gICAgICAgIGlmIChrZXkgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUoc2VsZiwgc2VsZltrZXldLCBrZXksIG1hdGNoZXIpKSkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmW2tleV07XG5cbiAgICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgIGhlYWRlci5mb3JFYWNoKGRlbGV0ZUhlYWRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZUhlYWRlcihoZWFkZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgY2xlYXIobWF0Y2hlcikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIsIHRydWUpKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgbm9ybWFsaXplKGZvcm1hdCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoaGVhZGVycywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBzZWxmW2tleV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGZvcm1hdCA/IGZvcm1hdEhlYWRlcihoZWFkZXIpIDogU3RyaW5nKGhlYWRlcikudHJpbSgpO1xuXG4gICAgICBpZiAobm9ybWFsaXplZCAhPT0gaGVhZGVyKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICB9XG5cbiAgICAgIHNlbGZbbm9ybWFsaXplZF0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZF0gPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25jYXQoLi4udGFyZ2V0cykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbmNhdCh0aGlzLCAuLi50YXJnZXRzKTtcbiAgfVxuXG4gIHRvSlNPTihhc1N0cmluZ3MpIHtcbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgdmFsdWUgIT0gbnVsbCAmJlxuICAgICAgICB2YWx1ZSAhPT0gZmFsc2UgJiZcbiAgICAgICAgKG9ialtoZWFkZXJdID0gYXNTdHJpbmdzICYmIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSlbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpXG4gICAgICAubWFwKChbaGVhZGVyLCB2YWx1ZV0pID0+IGhlYWRlciArICc6ICcgKyB2YWx1ZSlcbiAgICAgIC5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIGdldFNldENvb2tpZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KCdzZXQtY29va2llJyk7XG4gICAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSA/IFtdIDogW3ZhbHVlXTtcbiAgfVxuXG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gJ0F4aW9zSGVhZGVycyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbSh0aGluZykge1xuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIHRoaXMgPyB0aGluZyA6IG5ldyB0aGlzKHRoaW5nKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZVBhcmFtZXRlcnModmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VQYXJhbWV0ZXJzKHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25jYXQoZmlyc3QsIC4uLnRhcmdldHMpIHtcbiAgICBjb25zdCBjb21wdXRlZCA9IG5ldyB0aGlzKGZpcnN0KTtcblxuICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBjb21wdXRlZC5zZXQodGFyZ2V0KSk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWQ7XG4gIH1cblxuICBzdGF0aWMgYWNjZXNzb3IoaGVhZGVyKSB7XG4gICAgY29uc3QgaW50ZXJuYWxzID1cbiAgICAgICh0aGlzWyRpbnRlcm5hbHNdID1cbiAgICAgIHRoaXNbJGludGVybmFsc10gPVxuICAgICAgICB7XG4gICAgICAgICAgYWNjZXNzb3JzOiB7fSxcbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcbiAgICAgICAgYnVpbGRBY2Nlc3NvcnMocHJvdG90eXBlLCBfaGVhZGVyKTtcbiAgICAgICAgYWNjZXNzb3JzW2xIZWFkZXJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFtcbiAgJ0NvbnRlbnQtVHlwZScsXG4gICdDb250ZW50LUxlbmd0aCcsXG4gICdBY2NlcHQnLFxuICAnQWNjZXB0LUVuY29kaW5nJyxcbiAgJ1VzZXItQWdlbnQnLFxuICAnQXV0aG9yaXphdGlvbicsXG5dKTtcblxuLy8gcmVzZXJ2ZWQgbmFtZXMgaG90Zml4XG51dGlscy5yZWR1Y2VEZXNjcmlwdG9ycyhBeGlvc0hlYWRlcnMucHJvdG90eXBlLCAoeyB2YWx1ZSB9LCBrZXkpID0+IHtcbiAgbGV0IG1hcHBlZCA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpOyAvLyBtYXAgYHNldGAgPT4gYFNldGBcbiAgcmV0dXJuIHtcbiAgICBnZXQ6ICgpID0+IHZhbHVlLFxuICAgIHNldChoZWFkZXJWYWx1ZSkge1xuICAgICAgdGhpc1ttYXBwZWRdID0gaGVhZGVyVmFsdWU7XG4gICAgfSxcbiAgfTtcbn0pO1xuXG51dGlscy5mcmVlemVNZXRob2RzKEF4aW9zSGVhZGVycyk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zSGVhZGVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuY2xhc3MgSW50ZXJjZXB0b3JNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIGludGVyY2VwdG9yLCBzeW5jaHJvbm91cyBhbmQgcnVuV2hlblxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gICAqL1xuICB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCwgb3B0aW9ucykge1xuICAgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgICBmdWxmaWxsZWQsXG4gICAgICByZWplY3RlZCxcbiAgICAgIHN5bmNocm9ub3VzOiBvcHRpb25zID8gb3B0aW9ucy5zeW5jaHJvbm91cyA6IGZhbHNlLFxuICAgICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGwsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGVqZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBpbnRlcmNlcHRvcnMgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xuICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICAgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmb3JFYWNoKGZuKSB7XG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgICBmbihoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yLCB7IFJFREFDVEVEIH0gZnJvbSAnLi9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbmNvbnN0IG1hbGZvcm1lZEh0dHBQcm90b2NvbCA9IC9eaHR0cHM/Oig/IVxcL1xcLykvaTtcbmNvbnN0IGh0dHBQcm90b2NvbENvbnRyb2xDaGFyYWN0ZXJzID0gL1tcXHRcXG5cXHJdL2c7XG5cbmZ1bmN0aW9uIHN0cmlwTGVhZGluZ0MwQ29udHJvbE9yU3BhY2UodXJsKSB7XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCB1cmwubGVuZ3RoICYmIHVybC5jaGFyQ29kZUF0KGkpIDw9IDB4MjApIHtcbiAgICBpKys7XG4gIH1cbiAgcmV0dXJuIHVybC5zbGljZShpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVVJMRm9yUHJvdG9jb2xDaGVjayh1cmwpIHtcbiAgcmV0dXJuIHN0cmlwTGVhZGluZ0MwQ29udHJvbE9yU3BhY2UodXJsKS5yZXBsYWNlKGh0dHBQcm90b2NvbENvbnRyb2xDaGFyYWN0ZXJzLCAnJyk7XG59XG5cbi8vIFJlZGFjdCB0aGUgcGFydHMgb2YgYSBVUkwgdGhhdCBjYW4gY2Fycnkgc2VjcmV0cyBiZWZvcmUgaXQgaXMgZW1iZWRkZWQgaW4gYW5cbi8vIGVycm9yIG1lc3NhZ2UuIEF4aW9zRXJyb3IudG9KU09OKCkgc2VyaWFsaXplcyBgbWVzc2FnZWAgdmVyYmF0aW0gYW5kIGVycm9yc1xuLy8gYXJlIGNvbW1vbmx5IGxvZ2dlZCwgd2hpbGUgdGhlIG9wdC1pbiBgY29uZmlnLnJlZGFjdGAgbW9kZWwgb25seSBjbGVhbnNcbi8vIGNvbmZpZyBrZXlzIOKAlCBpdCBjYW5ub3QgcmVhY2ggdGhlIG1lc3NhZ2UuIFJlZGFjdCBvbmx5IHRoZSBnZW51aW5lbHlcbi8vIHNlbnNpdGl2ZSBzdWJzdHJpbmdzIOKAlCB1c2VyaW5mbyAoY3JlZGVudGlhbHMpLCBxdWVyeSBwYXJhbWV0ZXIgdmFsdWVzIGFuZFxuLy8gZnJhZ21lbnQgY29udGVudHMg4oCUIHdpdGggdGhlIHNhbWUgUkVEQUNURUQgbWFya2VyIHRoZSBjb25maWcgcmVkYWN0aW9uIHVzZXMsXG4vLyB3aGlsZSBrZWVwaW5nIHRoZSBzY2hlbWUsIGhvc3QsIHBhdGggYW5kIHBhcmFtZXRlciBuYW1lcyBzbyB0aGUgb2ZmZW5kaW5nXG4vLyByZXF1ZXN0IHN0YXlzIGFjY3VyYXRlbHkgaWRlbnRpZmlhYmxlLlxuZnVuY3Rpb24gcmVkYWN0RnJhZ21lbnQoZnJhZ21lbnQpIHtcbiAgaWYgKCFmcmFnbWVudCkge1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxuXG4gIHJldHVybiBmcmFnbWVudC5yZXBsYWNlKC8oXnwmKShbXj0mXSo9KT9bXiZdKy9nLCAobWF0Y2gsIHNlcGFyYXRvciwgcGFyYW1ldGVyTmFtZSA9ICcnKSA9PiB7XG4gICAgcmV0dXJuIGAke3NlcGFyYXRvcn0ke3BhcmFtZXRlck5hbWV9JHtSRURBQ1RFRH1gO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVkYWN0U2Vuc2l0aXZlVVJMUGFydHModXJsKSB7XG4gIGNvbnN0IHJlZGFjdGVkVVJMID0gdXJsLnJlcGxhY2UoL14oaHR0cHM/OlxcL3swLDJ9KVteLz8jXSpAL2ksIGAkMSR7UkVEQUNURUR9QGApO1xuICBjb25zdCBmcmFnbWVudEluZGV4ID0gcmVkYWN0ZWRVUkwuaW5kZXhPZignIycpO1xuICBjb25zdCB1cmxXaXRob3V0RnJhZ21lbnQgPVxuICAgIGZyYWdtZW50SW5kZXggPT09IC0xID8gcmVkYWN0ZWRVUkwgOiByZWRhY3RlZFVSTC5zbGljZSgwLCBmcmFnbWVudEluZGV4KTtcbiAgY29uc3QgcmVkYWN0ZWRVUkxXaXRob3V0RnJhZ21lbnQgPSB1cmxXaXRob3V0RnJhZ21lbnQucmVwbGFjZShcbiAgICAvKFs/Jl1bXj0mI10qPSlbXiYjXSovZyxcbiAgICBgJDEke1JFREFDVEVEfWBcbiAgKTtcblxuICBpZiAoZnJhZ21lbnRJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gcmVkYWN0ZWRVUkxXaXRob3V0RnJhZ21lbnQ7XG4gIH1cblxuICByZXR1cm4gYCR7cmVkYWN0ZWRVUkxXaXRob3V0RnJhZ21lbnR9IyR7cmVkYWN0RnJhZ21lbnQocmVkYWN0ZWRVUkwuc2xpY2UoZnJhZ21lbnRJbmRleCArIDEpKX1gO1xufVxuXG5mdW5jdGlvbiBhc3NlcnRWYWxpZEh0dHBQcm90b2NvbFVSTCh1cmwsIGNvbmZpZykge1xuICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBub3JtYWxpemVkVVJMID0gbm9ybWFsaXplVVJMRm9yUHJvdG9jb2xDaGVjayh1cmwpO1xuICAgIGlmIChtYWxmb3JtZWRIdHRwUHJvdG9jb2wudGVzdChub3JtYWxpemVkVVJMKSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIFVSTCAke0pTT04uc3RyaW5naWZ5KHJlZGFjdFNlbnNpdGl2ZVVSTFBhcnRzKG5vcm1hbGl6ZWRVUkwpKX06IG1pc3NpbmcgXCIvL1wiIGFmdGVyIHByb3RvY29sYCxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfSU5WQUxJRF9VUkwsXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMLCBhbGxvd0Fic29sdXRlVXJscywgY29uZmlnKSB7XG4gIGFzc2VydFZhbGlkSHR0cFByb3RvY29sVVJMKHJlcXVlc3RlZFVSTCwgY29uZmlnKTtcbiAgbGV0IGlzUmVsYXRpdmVVcmwgPSAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpO1xuICBpZiAoYmFzZVVSTCAmJiAoaXNSZWxhdGl2ZVVybCB8fCBhbGxvd0Fic29sdXRlVXJscyA9PT0gZmFsc2UpKSB7XG4gICAgYXNzZXJ0VmFsaWRIdHRwUHJvdG9jb2xVUkwoYmFzZVVSTCwgY29uZmlnKTtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdHJhbnNmb3JtRGF0YSBmcm9tICcuL3RyYW5zZm9ybURhdGEuanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4uL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSAnLi4vYWRhcHRlcnMvYWRhcHRlcnMuanMnO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaWduYWwgJiYgY29uZmlnLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpO1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoY29uZmlnLCBjb25maWcudHJhbnNmb3JtUmVxdWVzdCk7XG5cbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmRleE9mKGNvbmZpZy5tZXRob2QpICE9PSAtMSkge1xuICAgIGNvbmZpZy5oZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCBmYWxzZSk7XG4gIH1cblxuICBjb25zdCBhZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcihjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyLCBjb25maWcpO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihcbiAgICBmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIEV4cG9zZSB0aGUgY3VycmVudCByZXNwb25zZSBvbiBjb25maWcgc28gdGhhdCB0cmFuc2Zvcm1SZXNwb25zZSBjYW5cbiAgICAgIC8vIGF0dGFjaCBpdCB0byBhbnkgQXhpb3NFcnJvciBpdCB0aHJvd3MgKGUuZy4gb24gSlNPTiBwYXJzZSBmYWlsdXJlKS5cbiAgICAgIC8vIFdlIGNsZWFuIGl0IHVwIGFmdGVyd2FyZHMgdG8gYXZvaWQgcG9sbHV0aW5nIHRoZSBjb25maWcgb2JqZWN0LlxuICAgICAgY29uZmlnLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKGNvbmZpZywgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLCByZXNwb25zZSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBkZWxldGUgY29uZmlnLnJlc3BvbnNlO1xuICAgICAgfVxuXG4gICAgICByZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25maWcucmVzcG9uc2UgPSByZWFzb24ucmVzcG9uc2U7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgICAgICAgICAgcmVhc29uLnJlc3BvbnNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLnJlc3BvbnNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgICB9XG4gICk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4vQXhpb3NIZWFkZXJzLmpzJztcblxuY29uc3QgaGVhZGVyc1RvT2JqZWN0ID0gKHRoaW5nKSA9PiAodGhpbmcgaW5zdGFuY2VvZiBBeGlvc0hlYWRlcnMgPyB7IC4uLnRoaW5nIH0gOiB0aGluZyk7XG5cbmNvbnN0IG93bkVudW1lcmFibGVLZXlzID0gKHRoaW5nKSA9PiB7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpbmcpLmNvbmNhdChcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGhpbmcpLmZpbHRlcihcbiAgICAgICAgKHN5bWJvbCkgPT4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGluZywgc3ltYm9sKS5lbnVtZXJhYmxlXG4gICAgICApXG4gICAgKTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXModGhpbmcpO1xufTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcxID0gY29uZmlnMSB8fCB7fTtcbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG5cbiAgLy8gVXNlIGEgbnVsbC1wcm90b3R5cGUgb2JqZWN0IHNvIHRoYXQgZG93bnN0cmVhbSByZWFkcyBzdWNoIGFzIGBjb25maWcuYXV0aGBcbiAgLy8gb3IgYGNvbmZpZy5iYXNlVVJMYCBjYW5ub3QgaW5oZXJpdCBwb2xsdXRlZCB2YWx1ZXMgZnJvbSBPYmplY3QucHJvdG90eXBlLlxuICAvLyBgaGFzT3duUHJvcGVydHlgIGlzIHJlc3RvcmVkIGFzIGEgbm9uLWVudW1lcmFibGUgb3duIHNsb3QgdG8gcHJlc2VydmVcbiAgLy8gZXJnb25vbWljcyBmb3IgdXNlciBjb2RlIHRoYXQgcmVsaWVzIG9uIGl0LlxuICBjb25zdCBjb25maWcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uZmlnLCAnaGFzT3duUHJvcGVydHknLCB7XG4gICAgLy8gTnVsbC1wcm90byBkZXNjcmlwdG9yIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS5nZXQgY2Fubm90IHR1cm5cbiAgICAvLyB0aGlzIGRhdGEgZGVzY3JpcHRvciBpbnRvIGFuIGFjY2Vzc29yIGRlc2NyaXB0b3Igb24gdGhlIHdheSBpbi5cbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgdmFsdWU6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICB9KTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSwgcHJvcCwgY2FzZWxlc3MpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlLmNhbGwoeyBjYXNlbGVzcyB9LCB0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhhLCBiLCBwcm9wLCBjYXNlbGVzcykge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiLCBwcm9wLCBjYXNlbGVzcyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEsIHByb3AsIGNhc2VsZXNzKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNZXJnZWRUcmFuc2l0aW9uYWxPcHRpb24ocHJvcCkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbDIgPSB1dGlscy5oYXNPd25Qcm9wKGNvbmZpZzIsICd0cmFuc2l0aW9uYWwnKVxuICAgICAgPyBjb25maWcyLnRyYW5zaXRpb25hbFxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKHRyYW5zaXRpb25hbDIpKSB7XG4gICAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0cmFuc2l0aW9uYWwyKSkge1xuICAgICAgICBpZiAodXRpbHMuaGFzT3duUHJvcCh0cmFuc2l0aW9uYWwyLCBwcm9wKSkge1xuICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uYWwyW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25hbDEgPSB1dGlscy5oYXNPd25Qcm9wKGNvbmZpZzEsICd0cmFuc2l0aW9uYWwnKVxuICAgICAgPyBjb25maWcxLnRyYW5zaXRpb25hbFxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0cmFuc2l0aW9uYWwxKSAmJiB1dGlscy5oYXNPd25Qcm9wKHRyYW5zaXRpb25hbDEsIHByb3ApKSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbmFsMVtwcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGlyZWN0S2V5cyhhLCBiLCBwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmhhc093blByb3AoY29uZmlnMiwgcHJvcCkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmhhc093blByb3AoY29uZmlnMSwgcHJvcCkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lcmdlTWFwID0ge1xuICAgIHVybDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBtZXRob2Q6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgZGF0YTogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBiYXNlVVJMOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVzcG9uc2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcGFyYW1zU2VyaWFsaXplcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXRNZXNzYWdlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhDcmVkZW50aWFsczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoWFNSRlRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGFkYXB0ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VUeXBlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZDb29raWVOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZIZWFkZXJOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25Eb3dubG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGRlY29tcHJlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Q29udGVudExlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhCb2R5TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGJlZm9yZVJlZGlyZWN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zcG9ydDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cHNBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBjYW5jZWxUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBzb2NrZXRQYXRoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGFsbG93ZWRTb2NrZXRQYXRoczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZUVuY29kaW5nOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHZhbGlkYXRlU3RhdHVzOiBtZXJnZURpcmVjdEtleXMsXG4gICAgaGVhZGVyczogKGEsIGIsIHByb3ApID0+XG4gICAgICBtZXJnZURlZXBQcm9wZXJ0aWVzKGhlYWRlcnNUb09iamVjdChhKSwgaGVhZGVyc1RvT2JqZWN0KGIpLCBwcm9wLCB0cnVlKSxcbiAgfTtcblxuICB1dGlscy5mb3JFYWNoKG93bkVudW1lcmFibGVLZXlzKHsgLi4uY29uZmlnMSwgLi4uY29uZmlnMiB9KSwgZnVuY3Rpb24gY29tcHV0ZUNvbmZpZ1ZhbHVlKHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gJ19fcHJvdG9fXycgfHwgcHJvcCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCBwcm9wID09PSAncHJvdG90eXBlJykgcmV0dXJuO1xuICAgIGNvbnN0IG1lcmdlID0gdXRpbHMuaGFzT3duUHJvcChtZXJnZU1hcCwgcHJvcCkgPyBtZXJnZU1hcFtwcm9wXSA6IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgY29uc3QgYSA9IHV0aWxzLmhhc093blByb3AoY29uZmlnMSwgcHJvcCkgPyBjb25maWcxW3Byb3BdIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGIgPSB1dGlscy5oYXNPd25Qcm9wKGNvbmZpZzIsIHByb3ApID8gY29uZmlnMltwcm9wXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IG1lcmdlKGEsIGIsIHByb3ApO1xuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcbiAgfSk7XG5cbiAgaWYgKFxuICAgIHV0aWxzLmhhc093blByb3AoY29uZmlnMiwgJ3ZhbGlkYXRlU3RhdHVzJykgJiZcbiAgICB1dGlscy5pc1VuZGVmaW5lZChjb25maWcyLnZhbGlkYXRlU3RhdHVzKSAmJlxuICAgIGdldE1lcmdlZFRyYW5zaXRpb25hbE9wdGlvbigndmFsaWRhdGVTdGF0dXNVbmRlZmluZWRSZXNvbHZlcycpID09PSBmYWxzZVxuICApIHtcbiAgICBpZiAodXRpbHMuaGFzT3duUHJvcChjb25maWcxLCAndmFsaWRhdGVTdGF0dXMnKSkge1xuICAgICAgY29uZmlnLnZhbGlkYXRlU3RhdHVzID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxLnZhbGlkYXRlU3RhdHVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGT1JNX0RBVEFfQ09OVEVOVF9IRUFERVJTID0gWydjb250ZW50LXR5cGUnLCAnY29udGVudC1sZW5ndGgnXTtcblxuLyoqXG4gKiBBcHBseSB0aGUgaGVhZGVycyBnZW5lcmF0ZWQgYnkgYSBGb3JtRGF0YSBpbXBsZW1lbnRhdGlvbiB0byB0aGUgcmVxdWVzdCBoZWFkZXJzLFxuICogaG9ub3JpbmcgdGhlIGBmb3JtRGF0YUhlYWRlclBvbGljeWAgb3B0aW9uOiB3aXRoICdjb250ZW50LW9ubHknLCBjb3B5IG9ubHkgdGhlXG4gKiBjb250ZW50LSogaGVhZGVyczsgb3RoZXJ3aXNlIG1lcmdlIGFsbCBvZiB0aGVtLlxuICpcbiAqIEBwYXJhbSB7QXhpb3NIZWFkZXJzfSBoZWFkZXJzIC0gdGhlIHJlcXVlc3QgaGVhZGVycyB0byBtdXRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gZm9ybUhlYWRlcnMgLSBoZWFkZXJzIHByb2R1Y2VkIGJ5IHRoZSBGb3JtRGF0YSBpbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IFtwb2xpY3ldIC0gdGhlIHJlc29sdmVkIGBmb3JtRGF0YUhlYWRlclBvbGljeWAgY29uZmlnIHZhbHVlXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEZvcm1EYXRhSGVhZGVycyhoZWFkZXJzLCBmb3JtSGVhZGVycywgcG9saWN5KSB7XG4gIGlmIChwb2xpY3kgIT09ICdjb250ZW50LW9ubHknKSB7XG4gICAgaGVhZGVycy5zZXQoZm9ybUhlYWRlcnMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5lbnRyaWVzKGZvcm1IZWFkZXJzIHx8IHt9KS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgaWYgKEZPUk1fREFUQV9DT05URU5UX0hFQURFUlMuaW5jbHVkZXMoa2V5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBoZWFkZXJzLnNldChrZXksIHZhbCk7XG4gICAgfVxuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9BeGlvc0Vycm9yLmpzJztcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5zdGF0dXMgPj0gNDAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDUwMCA/IEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNUIDogQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHBhcmFtIHs/T2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugb2JqZWN0XG4gKlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGZucywgcmVzcG9uc2UpIHtcbiAgY29uc3QgY29uZmlnID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgY29uc3QgY29udGV4dCA9IHJlc3BvbnNlIHx8IGNvbmZpZztcbiAgY29uc3QgaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbnRleHQuaGVhZGVycyk7XG4gIGxldCBkYXRhID0gY29udGV4dC5kYXRhO1xuXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb25maWcsIGRhdGEsIGhlYWRlcnMubm9ybWFsaXplKCksIHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzIDogdW5kZWZpbmVkKTtcbiAgfSk7XG5cbiAgaGVhZGVycy5ub3JtYWxpemUoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCB0b1VSTEVuY29kZWRGb3JtIGZyb20gJy4uL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IGZvcm1EYXRhVG9KU09OIGZyb20gJy4uL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuXG5jb25zdCBvd24gPSAob2JqLCBrZXkpID0+IChvYmogIT0gbnVsbCAmJiB1dGlscy5oYXNPd25Qcm9wKG9iaiwga2V5KSA/IG9ialtrZXldIDogdW5kZWZpbmVkKTtcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZywgdHJpZXMgdG8gcGFyc2UgaXQsIGFuZCBpZiBpdCBmYWlscywgaXQgcmV0dXJucyB0aGUgc3RyaW5naWZpZWQgdmVyc2lvblxuICogb2YgdGhlIGlucHV0XG4gKlxuICogQHBhcmFtIHthbnl9IHJhd1ZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIHN0cmluZ2lmaWVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyc2VyIC0gQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmNvZGVyIC0gQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIHRoZSByYXdWYWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xuICAgIHRyeSB7XG4gICAgICAocGFyc2VyIHx8IEpTT04ucGFyc2UpKHJhd1ZhbHVlKTtcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChlbmNvZGVyIHx8IEpTT04uc3RyaW5naWZ5KShyYXdWYWx1ZSk7XG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICB0cmFuc2l0aW9uYWw6IHRyYW5zaXRpb25hbERlZmF1bHRzLFxuXG4gIGFkYXB0ZXI6IFsneGhyJywgJ2h0dHAnLCAnZmV0Y2gnXSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbXG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSB8fCAnJztcbiAgICAgIGNvbnN0IGhhc0pTT05Db250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xO1xuICAgICAgY29uc3QgaXNPYmplY3RQYXlsb2FkID0gdXRpbHMuaXNPYmplY3QoZGF0YSk7XG5cbiAgICAgIGlmIChpc09iamVjdFBheWxvYWQgJiYgdXRpbHMuaXNIVE1MRm9ybShkYXRhKSkge1xuICAgICAgICBkYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0Zvcm1EYXRhID0gdXRpbHMuaXNGb3JtRGF0YShkYXRhKTtcblxuICAgICAgaWYgKGlzRm9ybURhdGEpIHtcbiAgICAgICAgcmV0dXJuIGhhc0pTT05Db250ZW50VHlwZSA/IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhVG9KU09OKGRhdGEpKSA6IGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpIHx8XG4gICAgICAgIHV0aWxzLmlzUmVhZGFibGVTdHJlYW0oZGF0YSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgICB9XG4gICAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBpc0ZpbGVMaXN0O1xuXG4gICAgICBpZiAoaXNPYmplY3RQYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IGZvcm1TZXJpYWxpemVyID0gb3duKHRoaXMsICdmb3JtU2VyaWFsaXplcicpO1xuICAgICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgPiAtMSkge1xuICAgICAgICAgIHJldHVybiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIGZvcm1TZXJpYWxpemVyKS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIChpc0ZpbGVMaXN0ID0gdXRpbHMuaXNGaWxlTGlzdChkYXRhKSkgfHxcbiAgICAgICAgICBjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgPiAtMVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBlbnYgPSBvd24odGhpcywgJ2VudicpO1xuICAgICAgICAgIGNvbnN0IF9Gb3JtRGF0YSA9IGVudiAmJiBlbnYuRm9ybURhdGE7XG5cbiAgICAgICAgICByZXR1cm4gdG9Gb3JtRGF0YShcbiAgICAgICAgICAgIGlzRmlsZUxpc3QgPyB7ICdmaWxlc1tdJzogZGF0YSB9IDogZGF0YSxcbiAgICAgICAgICAgIF9Gb3JtRGF0YSAmJiBuZXcgX0Zvcm1EYXRhKCksXG4gICAgICAgICAgICBmb3JtU2VyaWFsaXplclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzT2JqZWN0UGF5bG9hZCB8fCBoYXNKU09OQ29udGVudFR5cGUpIHtcbiAgICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24vanNvbicsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcbiAgXSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IG93bih0aGlzLCAndHJhbnNpdGlvbmFsJykgfHwgZGVmYXVsdHMudHJhbnNpdGlvbmFsO1xuICAgICAgY29uc3QgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gb3duKHRoaXMsICdyZXNwb25zZVR5cGUnKTtcbiAgICAgIGNvbnN0IEpTT05SZXF1ZXN0ZWQgPSByZXNwb25zZVR5cGUgPT09ICdqc29uJztcblxuICAgICAgaWYgKHV0aWxzLmlzUmVzcG9uc2UoZGF0YSkgfHwgdXRpbHMuaXNSZWFkYWJsZVN0cmVhbShkYXRhKSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBkYXRhICYmXG4gICAgICAgIHV0aWxzLmlzU3RyaW5nKGRhdGEpICYmXG4gICAgICAgICgoZm9yY2VkSlNPTlBhcnNpbmcgJiYgIXJlc3BvbnNlVHlwZSkgfHwgSlNPTlJlcXVlc3RlZClcbiAgICAgICkge1xuICAgICAgICBjb25zdCBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgICAgIGNvbnN0IHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIEpTT05SZXF1ZXN0ZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhLCBvd24odGhpcywgJ3BhcnNlUmV2aXZlcicpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChzdHJpY3RKU09OUGFyc2luZykge1xuICAgICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZSwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLCB0aGlzLCBudWxsLCBvd24odGhpcywgJ3Jlc3BvbnNlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcbiAgXSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgZW52OiB7XG4gICAgRm9ybURhdGE6IHBsYXRmb3JtLmNsYXNzZXMuRm9ybURhdGEsXG4gICAgQmxvYjogcGxhdGZvcm0uY2xhc3Nlcy5CbG9iLFxuICB9LFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiB1bmRlZmluZWQsXG4gICAgfSxcbiAgfSxcbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAncXVlcnknXSwgKG1ldGhvZCkgPT4ge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlLFxuICBsZWdhY3lJbnRlcmNlcHRvclJlcVJlc09yZGVyaW5nOiB0cnVlLFxuICBhZHZlcnRpc2Vac3RkQWNjZXB0RW5jb2Rpbmc6IGZhbHNlLFxuICB2YWxpZGF0ZVN0YXR1c1VuZGVmaW5lZFJlc29sdmVzOiB0cnVlLFxufTtcbiIsImV4cG9ydCBjb25zdCBWRVJTSU9OID0gXCIxLjE5LjBcIjsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogSXQgZW5jb2RlcyBhIHN0cmluZyBieSByZXBsYWNpbmcgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGluIHRoZSB1bnJlc2VydmVkIHNldCB3aXRoXG4gKiB0aGVpciBwZXJjZW50LWVuY29kZWQgZXF1aXZhbGVudHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gIGNvbnN0IGNoYXJNYXAgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJyxcbiAgfTtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpfl18JTIwL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJNYXBbbWF0Y2hdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhcmFtcyBvYmplY3QgYW5kIGNvbnZlcnRzIGl0IHRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBGb3JtRGF0YSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBBeGlvcyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKSB7XG4gIHRoaXMuX3BhaXJzID0gW107XG5cbiAgcGFyYW1zICYmIHRvRm9ybURhdGEocGFyYW1zLCB0aGlzLCBvcHRpb25zKTtcbn1cblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX3BhaXJzLnB1c2goW25hbWUsIHZhbHVlXSk7XG59O1xuXG5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhlbmNvZGVyKSB7XG4gIGNvbnN0IF9lbmNvZGUgPSBlbmNvZGVyXG4gICAgPyAodmFsdWUpID0+IGVuY29kZXIuY2FsbCh0aGlzLCB2YWx1ZSwgZW5jb2RlKVxuICAgIDogZW5jb2RlO1xuXG4gIHJldHVybiB0aGlzLl9wYWlyc1xuICAgIC5tYXAoZnVuY3Rpb24gZWFjaChwYWlyKSB7XG4gICAgICByZXR1cm4gX2VuY29kZShwYWlyWzBdKSArICc9JyArIF9lbmNvZGUocGFpclsxXSk7XG4gICAgfSwgJycpXG4gICAgLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiY29uc3QgSHR0cFN0YXR1c0NvZGUgPSB7XG4gIENvbnRpbnVlOiAxMDAsXG4gIFN3aXRjaGluZ1Byb3RvY29sczogMTAxLFxuICBQcm9jZXNzaW5nOiAxMDIsXG4gIEVhcmx5SGludHM6IDEwMyxcbiAgT2s6IDIwMCxcbiAgQ3JlYXRlZDogMjAxLFxuICBBY2NlcHRlZDogMjAyLFxuICBOb25BdXRob3JpdGF0aXZlSW5mb3JtYXRpb246IDIwMyxcbiAgTm9Db250ZW50OiAyMDQsXG4gIFJlc2V0Q29udGVudDogMjA1LFxuICBQYXJ0aWFsQ29udGVudDogMjA2LFxuICBNdWx0aVN0YXR1czogMjA3LFxuICBBbHJlYWR5UmVwb3J0ZWQ6IDIwOCxcbiAgSW1Vc2VkOiAyMjYsXG4gIE11bHRpcGxlQ2hvaWNlczogMzAwLFxuICBNb3ZlZFBlcm1hbmVudGx5OiAzMDEsXG4gIEZvdW5kOiAzMDIsXG4gIFNlZU90aGVyOiAzMDMsXG4gIE5vdE1vZGlmaWVkOiAzMDQsXG4gIFVzZVByb3h5OiAzMDUsXG4gIFVudXNlZDogMzA2LFxuICBUZW1wb3JhcnlSZWRpcmVjdDogMzA3LFxuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxuICBCYWRSZXF1ZXN0OiA0MDAsXG4gIFVuYXV0aG9yaXplZDogNDAxLFxuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcbiAgRm9yYmlkZGVuOiA0MDMsXG4gIE5vdEZvdW5kOiA0MDQsXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcbiAgTm90QWNjZXB0YWJsZTogNDA2LFxuICBQcm94eUF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDQwNyxcbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcbiAgQ29uZmxpY3Q6IDQwOSxcbiAgR29uZTogNDEwLFxuICBMZW5ndGhSZXF1aXJlZDogNDExLFxuICBQcmVjb25kaXRpb25GYWlsZWQ6IDQxMixcbiAgUGF5bG9hZFRvb0xhcmdlOiA0MTMsXG4gIFVyaVRvb0xvbmc6IDQxNCxcbiAgVW5zdXBwb3J0ZWRNZWRpYVR5cGU6IDQxNSxcbiAgUmFuZ2VOb3RTYXRpc2ZpYWJsZTogNDE2LFxuICBFeHBlY3RhdGlvbkZhaWxlZDogNDE3LFxuICBJbUFUZWFwb3Q6IDQxOCxcbiAgTWlzZGlyZWN0ZWRSZXF1ZXN0OiA0MjEsXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcbiAgTG9ja2VkOiA0MjMsXG4gIEZhaWxlZERlcGVuZGVuY3k6IDQyNCxcbiAgVG9vRWFybHk6IDQyNSxcbiAgVXBncmFkZVJlcXVpcmVkOiA0MjYsXG4gIFByZWNvbmRpdGlvblJlcXVpcmVkOiA0MjgsXG4gIFRvb01hbnlSZXF1ZXN0czogNDI5LFxuICBSZXF1ZXN0SGVhZGVyRmllbGRzVG9vTGFyZ2U6IDQzMSxcbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnM6IDQ1MSxcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogNTAwLFxuICBOb3RJbXBsZW1lbnRlZDogNTAxLFxuICBCYWRHYXRld2F5OiA1MDIsXG4gIFNlcnZpY2VVbmF2YWlsYWJsZTogNTAzLFxuICBHYXRld2F5VGltZW91dDogNTA0LFxuICBIdHRwVmVyc2lvbk5vdFN1cHBvcnRlZDogNTA1LFxuICBWYXJpYW50QWxzb05lZ290aWF0ZXM6IDUwNixcbiAgSW5zdWZmaWNpZW50U3RvcmFnZTogNTA3LFxuICBMb29wRGV0ZWN0ZWQ6IDUwOCxcbiAgTm90RXh0ZW5kZWQ6IDUxMCxcbiAgTmV0d29ya0F1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDUxMSxcbiAgV2ViU2VydmVyUmV0dXJuc0FuVW5rbm93bkVycm9yOiA1MjAsXG4gIFdlYlNlcnZlcklzRG93bjogNTIxLFxuICBDb25uZWN0aW9uVGltZWRPdXQ6IDUyMixcbiAgT3JpZ2luSXNVbnJlYWNoYWJsZTogNTIzLFxuICBUaW1lb3V0T2NjdXJyZWQ6IDUyNCxcbiAgU3NsSGFuZHNoYWtlRmFpbGVkOiA1MjUsXG4gIEludmFsaWRTc2xDZXJ0aWZpY2F0ZTogNTI2LFxufTtcblxuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICBIdHRwU3RhdHVzQ29kZVt2YWx1ZV0gPSBrZXk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFN0YXR1c0NvZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlIGEgYm91bmQgdmVyc2lvbiBvZiBhIGZ1bmN0aW9uIHdpdGggYSBzcGVjaWZpZWQgYHRoaXNgIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBiaW5kXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgLSBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGFzIHRoZSBgdGhpc2AgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgd2lsbCBjYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBzcGVjaWZpZWQgYHRoaXNgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcblxuLyoqXG4gKiBJdCByZXBsYWNlcyBVUkwtZW5jb2RlZCBmb3JtcyBvZiBgOmAsIGAkYCwgYCxgLCBhbmQgc3BhY2VzIHdpdGhcbiAqIHRoZWlyIHBsYWluIGNvdW50ZXJwYXJ0cyAoYDpgLCBgJGAsIGAsYCwgYCtgKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbClcbiAgICAucmVwbGFjZSgvJTNBL2dpLCAnOicpXG4gICAgLnJlcGxhY2UoLyUyNC9nLCAnJCcpXG4gICAgLnJlcGxhY2UoLyUyQy9naSwgJywnKVxuICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcGFyYW0gez8ob2JqZWN0fEZ1bmN0aW9uKX0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSB1cmwgfHwgJyc7XG5cbiAgY29uc3QgX29wdGlvbnMgPSB1dGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMpXG4gICAgPyB7XG4gICAgICAgIHNlcmlhbGl6ZTogb3B0aW9ucyxcbiAgICAgIH1cbiAgICA6IG9wdGlvbnM7XG5cbiAgLy8gUmVhZCBzZXJpYWxpemVyIG9wdGlvbnMgcG9sbHV0aW9uLXNhZmVseTogb3duIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb24gYVxuICAvLyBjbGFzcy90ZW1wbGF0ZSBwcm90b3R5cGUgYXJlIGhvbm9yZWQsIGJ1dCB2YWx1ZXMgaW5qZWN0ZWQgb250byBhIHBvbGx1dGVkXG4gIC8vIE9iamVjdC5wcm90b3R5cGUgYXJlIGlnbm9yZWQuXG4gIGNvbnN0IF9lbmNvZGUgPSB1dGlscy5nZXRTYWZlUHJvcChfb3B0aW9ucywgJ2VuY29kZScpIHx8IGVuY29kZTtcbiAgY29uc3Qgc2VyaWFsaXplRm4gPSB1dGlscy5nZXRTYWZlUHJvcChfb3B0aW9ucywgJ3NlcmlhbGl6ZScpO1xuXG4gIGxldCBzZXJpYWxpemVkUGFyYW1zO1xuXG4gIGlmIChzZXJpYWxpemVGbikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBzZXJpYWxpemVGbihwYXJhbXMsIF9vcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gdXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKVxuICAgICAgPyBwYXJhbXMudG9TdHJpbmcoKVxuICAgICAgOiBuZXcgQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBfb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuXG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIGlmICghcmVsYXRpdmVVUkwpIHtcbiAgICByZXR1cm4gYmFzZVVSTDtcbiAgfVxuXG4gIGxldCBlbmQgPSBiYXNlVVJMLmxlbmd0aDtcblxuICB3aGlsZSAoZW5kID4gMCAmJiBiYXNlVVJMLmNoYXJDb2RlQXQoZW5kIC0gMSkgPT09IDQ3KSB7XG4gICAgZW5kLS07XG4gIH1cblxuICByZXR1cm4gYmFzZVVSTC5zbGljZSgwLCBlbmQpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJyk7XG59XG4iLCJpbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuY29uc3QgY29tcG9zZVNpZ25hbHMgPSAoc2lnbmFscywgdGltZW91dCkgPT4ge1xuICBzaWduYWxzID0gc2lnbmFscyA/IHNpZ25hbHMuZmlsdGVyKEJvb2xlYW4pIDogW107XG5cbiAgaWYgKCF0aW1lb3V0ICYmICFzaWduYWxzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgbGV0IGFib3J0ZWQgPSBmYWxzZTtcblxuICBjb25zdCBvbmFib3J0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIGlmICghYWJvcnRlZCkge1xuICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgY29uc3QgZXJyID0gcmVhc29uIGluc3RhbmNlb2YgRXJyb3IgPyByZWFzb24gOiB0aGlzLnJlYXNvbjtcbiAgICAgIGNvbnRyb2xsZXIuYWJvcnQoXG4gICAgICAgIGVyciBpbnN0YW5jZW9mIEF4aW9zRXJyb3JcbiAgICAgICAgICA/IGVyclxuICAgICAgICAgIDogbmV3IENhbmNlbGVkRXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IGVycilcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGxldCB0aW1lciA9XG4gICAgdGltZW91dCAmJlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgb25hYm9ydChuZXcgQXhpb3NFcnJvcihgdGltZW91dCBvZiAke3RpbWVvdXR9bXMgZXhjZWVkZWRgLCBBeGlvc0Vycm9yLkVUSU1FRE9VVCkpO1xuICAgIH0sIHRpbWVvdXQpO1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgIGlmICghc2lnbmFscykgeyByZXR1cm47IH1cbiAgICB0aW1lciAmJiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gbnVsbDtcbiAgICBzaWduYWxzLmZvckVhY2goKHNpZ25hbCkgPT4ge1xuICAgICAgc2lnbmFsLnVuc3Vic2NyaWJlXG4gICAgICAgID8gc2lnbmFsLnVuc3Vic2NyaWJlKG9uYWJvcnQpXG4gICAgICAgIDogc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgfSk7XG4gICAgc2lnbmFscyA9IG51bGw7XG4gIH07XG5cbiAgc2lnbmFscy5mb3JFYWNoKChzaWduYWwpID0+IHtcbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgb25hYm9ydC5jYWxsKHNpZ25hbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCwgeyBvbmNlOiB0cnVlIH0pO1xuICB9KTtcblxuICBjb25zdCB7IHNpZ25hbCB9ID0gY29udHJvbGxlcjtcblxuICBzaWduYWwudW5zdWJzY3JpYmUgPSAoKSA9PiB1dGlscy5hc2FwKHVuc3Vic2NyaWJlKTtcblxuICByZXR1cm4gc2lnbmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZVNpZ25hbHM7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52XG4gID8gLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAge1xuICAgICAgd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlLCBzYW1lU2l0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvb2tpZSA9IFtgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YF07XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goYGV4cGlyZXM9JHtuZXcgRGF0ZShleHBpcmVzKS50b1VUQ1N0cmluZygpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKGBwYXRoPSR7cGF0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKGBkb21haW49JHtkb21haW59YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2FtZVNpdGUpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goYFNhbWVTaXRlPSR7c2FtZVNpdGV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQobmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vIE1hdGNoIG5hbWU9dmFsdWUgYnkgc3BsaXR0aW5nIG9uIHRoZSBzZW1pY29sb24gc2VwYXJhdG9yIGluc3RlYWQgb2YgYnVpbGRpbmcgYVxuICAgICAgICAvLyBSZWdFeHAgZnJvbSBgbmFtZWAg4oCUIGludGVycG9sYXRpbmcgYW4gdW5lc2NhcGVkIHN0cmluZyBpbnRvIGEgUmVnRXhwIHdvdWxkIGxldFxuICAgICAgICAvLyBtZXRhY2hhcmFjdGVycyAoZS5nLiBgLis/YCBpbiBhbiBhdHRhY2tlci1pbmZsdWVuY2VkIGNvb2tpZSBuYW1lKSBjYXVzZSBSZURvUyBvclxuICAgICAgICAvLyBtYXRjaCB0aGUgd3JvbmcgY29va2llLiBCcm93c2VycyBtYXkgc2VyaWFsaXplIGNvb2tpZSBwYWlycyBhcyBlaXRoZXIgXCI7XCIgb3JcbiAgICAgICAgLy8gXCI7IFwiLCBzbyBpZ25vcmUgb3B0aW9uYWwgd2hpdGVzcGFjZSBiZWZvcmUgZWFjaCBjb29raWUgbmFtZS5cbiAgICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2ldLnJlcGxhY2UoL15cXHMrLywgJycpO1xuICAgICAgICAgIGNvbnN0IGVxID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICAgICAgICBpZiAoZXEgIT09IC0xICYmIGNvb2tpZS5zbGljZSgwLCBlcSkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnNsaWNlKGVxICsgMSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY29va2llLnNsaWNlKGVxICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwLCAnLycpO1xuICAgICAgfSxcbiAgICB9XG4gIDogLy8gTm9uLXN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIHtcbiAgICAgIHdyaXRlKCkge30sXG4gICAgICByZWFkKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICByZW1vdmUoKSB7fSxcbiAgICB9O1xuIiwiLyoqXG4gKiBFc3RpbWF0ZSBkYXRhOiBVUkwgYnl0ZSBsZW5ndGhzICp3aXRob3V0KiBhbGxvY2F0aW5nIGxhcmdlIGJ1ZmZlcnMuXG4gKiAtIEZldGNoIHBlcmNlbnQtZGVjb2RlcyBhIGJhc2U2NCBib2R5IGJlZm9yZSBkZWNvZGluZyBpdC5cbiAqIC0gTm9kZSdzIEJ1ZmZlci5mcm9tKGJvZHksICdiYXNlNjQnKSBzaXplcyBpdHMgYmFja2luZyBhbGxvY2F0aW9uIGZyb20gdGhlXG4gKiAgIHJhdyBib2R5LCBpbmNsdWRpbmcgaWdub3JlZCBjaGFyYWN0ZXJzIGFuZCBjb250ZW50IGFmdGVyIHBhZGRpbmcuXG4gKiAtIE5vbi1iYXNlNjQgZGF0YSBpcyBwZXJjZW50LWRlY29kZWQgYW5kIHRoZW4gZW5jb2RlZCBhcyBVVEYtOC5cbiAqL1xuY29uc3QgaXNIZXhEaWdpdCA9IChjaGFyQ29kZSkgPT5cbiAgKGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KSB8fFxuICAoY2hhckNvZGUgPj0gNjUgJiYgY2hhckNvZGUgPD0gNzApIHx8XG4gIChjaGFyQ29kZSA+PSA5NyAmJiBjaGFyQ29kZSA8PSAxMDIpO1xuXG5jb25zdCBpc1BlcmNlbnRFbmNvZGVkQnl0ZSA9IChzdHIsIGksIGxlbikgPT5cbiAgaSArIDIgPCBsZW4gJiYgaXNIZXhEaWdpdChzdHIuY2hhckNvZGVBdChpICsgMSkpICYmIGlzSGV4RGlnaXQoc3RyLmNoYXJDb2RlQXQoaSArIDIpKTtcblxuY29uc3QgaGV4VmFsdWUgPSAoY2hhckNvZGUpID0+IChjaGFyQ29kZSA8PSA1NyA/IGNoYXJDb2RlIC0gNDggOiAoY2hhckNvZGUgJiAweGRmKSAtIDU1KTtcblxuY29uc3QgaXNCYXNlNjRDaGFyID0gKGNoYXJDb2RlKSA9PlxuICAoY2hhckNvZGUgPj0gNjUgJiYgY2hhckNvZGUgPD0gOTApIHx8IC8vIEEtWlxuICAoY2hhckNvZGUgPj0gOTcgJiYgY2hhckNvZGUgPD0gMTIyKSB8fCAvLyBhLXpcbiAgKGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KSB8fCAvLyAwLTlcbiAgY2hhckNvZGUgPT09IDQzIHx8IC8vICtcbiAgY2hhckNvZGUgPT09IDQ3IHx8IC8vIC9cbiAgY2hhckNvZGUgPT09IDQ1IHx8IC8vIC0gKGJhc2U2NHVybClcbiAgY2hhckNvZGUgPT09IDk1OyAvLyBfIChiYXNlNjR1cmwpXG5cbmNvbnN0IGlzQmFzZTY0V2hpdGVzcGFjZSA9IChjaGFyQ29kZSkgPT5cbiAgY2hhckNvZGUgPT09IDkgfHwgY2hhckNvZGUgPT09IDEwIHx8IGNoYXJDb2RlID09PSAxMiB8fCBjaGFyQ29kZSA9PT0gMTMgfHwgY2hhckNvZGUgPT09IDMyO1xuXG5jb25zdCBiYXNlNjRCeXRlcyA9IChzaWduaWZpY2FudCkgPT4ge1xuICBjb25zdCBncm91cHMgPSBNYXRoLmZsb29yKHNpZ25pZmljYW50IC8gNCk7XG4gIGNvbnN0IHJlbWFpbmRlciA9IHNpZ25pZmljYW50ICUgNDtcbiAgcmV0dXJuIGdyb3VwcyAqIDMgKyAocmVtYWluZGVyID09PSAyID8gMSA6IHJlbWFpbmRlciA9PT0gMyA/IDIgOiAwKTtcbn07XG5cbi8vIEJ1ZmZlci5ieXRlTGVuZ3RoKGJvZHksICdiYXNlNjQnKSB1c2VzIHRoZSByYXcgc3RyaW5nIGxlbmd0aCBhcyBhbiBhbGxvY2F0aW9uXG4vLyB1cHBlciBib3VuZCBldmVuIHdoZW4gQnVmZmVyLmZyb20gbGF0ZXIgaWdub3JlcyBjaGFyYWN0ZXJzIG9yIHN0b3BzIGF0ICc9Jy5cbmNvbnN0IGVzdGltYXRlQmFzZTY0QnVmZmVyQWxsb2NhdGlvbiA9IChib2R5KSA9PiB7XG4gIGNvbnN0IGxlbiA9IGJvZHkubGVuZ3RoO1xuICBsZXQgcGFkZGluZyA9IDA7XG5cbiAgaWYgKGxlbiA+IDAgJiYgYm9keS5jaGFyQ29kZUF0KGxlbiAtIDEpID09PSA2MSAvKiAnPScgKi8pIHtcbiAgICBwYWRkaW5nKys7XG5cbiAgICBpZiAobGVuID4gMSAmJiBib2R5LmNoYXJDb2RlQXQobGVuIC0gMikgPT09IDYxIC8qICc9JyAqLykge1xuICAgICAgcGFkZGluZysrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKCgobGVuIC0gcGFkZGluZykgKiAzKSAvIDQpO1xufTtcblxuY29uc3QgZXN0aW1hdGVQZXJjZW50RGVjb2RlZEJhc2U2NEJ5dGVzID0gKGJvZHkpID0+IHtcbiAgY29uc3QgbGVuID0gYm9keS5sZW5ndGg7XG4gIGxldCBzaWduaWZpY2FudCA9IDA7XG4gIGxldCBwYWRkaW5nID0gMDtcbiAgbGV0IGludmFsaWQgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbGV0IGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAoY29kZSA9PT0gMzcgLyogJyUnICovICYmIGlzUGVyY2VudEVuY29kZWRCeXRlKGJvZHksIGksIGxlbikpIHtcbiAgICAgIGNvZGUgPSBoZXhWYWx1ZShib2R5LmNoYXJDb2RlQXQoaSArIDEpKSAqIDE2ICsgaGV4VmFsdWUoYm9keS5jaGFyQ29kZUF0KGkgKyAyKSk7XG4gICAgICBpICs9IDI7XG4gICAgfVxuXG4gICAgaWYgKGlzQmFzZTY0V2hpdGVzcGFjZShjb2RlKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYxIC8qICc9JyAqLykge1xuICAgICAgcGFkZGluZysrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Jhc2U2NENoYXIoY29kZSkgfHwgcGFkZGluZyA+IDApIHtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc2lnbmlmaWNhbnQrKztcbiAgfVxuXG4gIC8vIEZldGNoIHJlamVjdHMgbWFsZm9ybWVkIGZvcmdpdmluZy1iYXNlNjQgaW5wdXQuIFJldHVybmluZyB0aGUgcmF3LXNpemVcbiAgLy8gYWxsb2NhdGlvbiBib3VuZCBrZWVwcyB0aGF0IGludmFsaWQgaW5wdXQgZnJvbSBiZWNvbWluZyBhIHByZS1jaGVjayBieXBhc3MuXG4gIGlmIChcbiAgICBpbnZhbGlkIHx8XG4gICAgcGFkZGluZyA+IDIgfHxcbiAgICAocGFkZGluZyA+IDAgJiYgKHNpZ25pZmljYW50ICsgcGFkZGluZykgJSA0ICE9PSAwKSB8fFxuICAgIHNpZ25pZmljYW50ICUgNCA9PT0gMVxuICApIHtcbiAgICByZXR1cm4gZXN0aW1hdGVCYXNlNjRCdWZmZXJBbGxvY2F0aW9uKGJvZHkpO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U2NEJ5dGVzKHNpZ25pZmljYW50KTtcbn07XG5cbmNvbnN0IGVzdGltYXRlRGF0YVVSTEJ5dGVzID0gKHVybCwgZXN0aW1hdGVCYXNlNjQpID0+IHtcbiAgaWYgKCF1cmwgfHwgdHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHJldHVybiAwO1xuICBpZiAoIXVybC5zdGFydHNXaXRoKCdkYXRhOicpKSByZXR1cm4gMDtcblxuICBjb25zdCBjb21tYSA9IHVybC5pbmRleE9mKCcsJyk7XG4gIGlmIChjb21tYSA8IDApIHJldHVybiAwO1xuXG4gIGNvbnN0IG1ldGEgPSB1cmwuc2xpY2UoNSwgY29tbWEpO1xuICBjb25zdCBib2R5ID0gdXJsLnNsaWNlKGNvbW1hICsgMSk7XG4gIGNvbnN0IGlzQmFzZTY0ID0gLztiYXNlNjQvaS50ZXN0KG1ldGEpO1xuXG4gIGlmIChpc0Jhc2U2NCkge1xuICAgIHJldHVybiBlc3RpbWF0ZUJhc2U2NChib2R5KTtcbiAgfVxuXG4gIC8vIENvbXB1dGUgVVRGLTggYnl0ZSBsZW5ndGggZGlyZWN0bHkgZnJvbSBVVEYtMTYgY29kZSB1bml0cyB3aXRob3V0IGFsbG9jYXRpbmdcbiAgLy8gYSBieXRlIGJ1ZmZlciAoVGV4dEVuY29kZXIuZW5jb2RlIHdvdWxkIGRlZmVhdCB0aGUgRG9TIGd1YXJkIG9uIGxhcmdlIGJvZGllcykuXG4gIC8vIFZhbGlkICVYWCB0cmlwbGV0cyBjb3VudCBhcyBvbmUgZGVjb2RlZCBieXRlOyB0aGlzIG1hdGNoZXMgdGhlIGJ5dGVzIHRoYXRcbiAgLy8gZGVjb2RlVVJJQ29tcG9uZW50KGJvZHkpIHdvdWxkIHByb2R1Y2UgYmVmb3JlIEJ1ZmZlciByZS1lbmNvZGVzIHRoZSBzdHJpbmcuXG4gIGxldCBieXRlcyA9IDA7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBib2R5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IGJvZHkuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoYyA9PT0gMzcgLyogJyUnICovICYmIGlzUGVyY2VudEVuY29kZWRCeXRlKGJvZHksIGksIGxlbikpIHtcbiAgICAgIGJ5dGVzICs9IDE7XG4gICAgICBpICs9IDI7XG4gICAgfSBlbHNlIGlmIChjIDwgMHg4MCkge1xuICAgICAgYnl0ZXMgKz0gMTtcbiAgICB9IGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgYnl0ZXMgKz0gMjtcbiAgICB9IGVsc2UgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmICYmIGkgKyAxIDwgbGVuKSB7XG4gICAgICBjb25zdCBuZXh0ID0gYm9keS5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgIGlmIChuZXh0ID49IDB4ZGMwMCAmJiBuZXh0IDw9IDB4ZGZmZikge1xuICAgICAgICBieXRlcyArPSA0O1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBieXRlcyArPSAzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBieXRlcyArPSAzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZXM7XG59O1xuXG4vKipcbiAqIEVzdGltYXRlIHRoZSBwZXJjZW50LWRlY29kZWQgcGF5bG9hZCBzaXplIHVzZWQgYnkgRmV0Y2ggZGF0YTogVVJMcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc3RpbWF0ZURhdGFVUkxEZWNvZGVkQnl0ZXModXJsKSB7XG4gIC8vIEZldGNoIHJlbW92ZXMgVVJMIGZyYWdtZW50cyBiZWZvcmUgcHJvY2Vzc2luZyBhIGRhdGE6IFVSTC5cbiAgY29uc3QgZnJhZ21lbnRJbmRleCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdXJsLmluZGV4T2YoJyMnKSA6IC0xO1xuXG4gIHJldHVybiBlc3RpbWF0ZURhdGFVUkxCeXRlcyhcbiAgICBmcmFnbWVudEluZGV4ID09PSAtMSA/IHVybCA6IHVybC5zbGljZSgwLCBmcmFnbWVudEluZGV4KSxcbiAgICBlc3RpbWF0ZVBlcmNlbnREZWNvZGVkQmFzZTY0Qnl0ZXNcbiAgKTtcbn1cblxuLyoqXG4gKiBFc3RpbWF0ZSB0aGUgQnVmZmVyIGJhY2tpbmcgYWxsb2NhdGlvbiB1c2VkIGJ5IE5vZGUncyByYXcgYmFzZTY0IGRlY29kZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlRGF0YVVSTEJ1ZmZlckFsbG9jYXRpb24odXJsKSB7XG4gIHJldHVybiBlc3RpbWF0ZURhdGFVUkxCeXRlcyh1cmwsIGVzdGltYXRlQmFzZTY0QnVmZmVyQWxsb2NhdGlvbik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHsgREVGQVVMVF9GT1JNX0RBVEFfTUFYX0RFUFRIIH0gZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcblxuY29uc3QgTUFYX0RFUFRIID0gREVGQVVMVF9GT1JNX0RBVEFfTUFYX0RFUFRIO1xuXG5mdW5jdGlvbiB0aHJvd0lmRGVwdGhFeGNlZWRlZChpbmRleCkge1xuICBpZiAoaW5kZXggPiBNQVhfREVQVEgpIHtcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICdGb3JtRGF0YSBmaWVsZCBpcyB0b28gZGVlcGx5IG5lc3RlZCAoJyArIGluZGV4ICsgJyBsZXZlbHMpLiBNYXggZGVwdGg6ICcgKyBNQVhfREVQVEgsXG4gICAgICBBeGlvc0Vycm9yLkVSUl9GT1JNX0RBVEFfREVQVEhfRVhDRUVERURcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcgbGlrZSBgZm9vW3hdW3ldW3pdYCBhbmQgcmV0dXJucyBhbiBhcnJheSBsaWtlIGBbJ2ZvbycsICd4JywgJ3knLCAneiddXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICpcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUHJvcFBhdGgobmFtZSkge1xuICAvLyBmb29beF1beV1bel0gLT4gWydmb28nLCAneCcsICd5JywgJ3onXVxuICAvLyBmb28ueC55LnogICAgLT4gWydmb28nLCAneCcsICd5JywgJ3onXVxuICAvLyBBIHBhdGggaXMgc3BsaXQgb24gYC5gIGFuZCBvbiBgWy4uLl1gIGdyb3Vwcy4gQSBzZWdtZW50IOKAlCB3aGV0aGVyIHdyaXR0ZW5cbiAgLy8gaW4gZG90IG5vdGF0aW9uIG9yIGNhcHR1cmVkIGluc2lkZSBicmFja2V0cyDigJQgbWF5IGNvbnRhaW4gYW55IGNoYXJhY3RlclxuICAvLyBleGNlcHQgYC5gLCBgW2AgYW5kIGBdYCwgc28gYSBrZXkgbGlrZSBgdXNlci1uYW1lYCBvciBgdXNlciBuYW1lYCBpcyBrZXB0XG4gIC8vIGxpdGVyYWwgaW5zdGVhZCBvZiBiZWluZyBzcGxpdCAoIzU0MDIpLiBgLmAsIGBbYCBhbmQgYF1gIGtlZXAgdGhlaXIgZXhpc3RpbmdcbiAgLy8gbWVhbmluZywgZS5nLiBgZm9vW2Jhci5iYXpdYCAtPiBbJ2ZvbycsICdiYXInLCAnYmF6J10gYW5kIGBbXWAgaXMgYW4gYXJyYXkgcHVzaC5cbiAgLy8gRXhjbHVkaW5nIGBbYCBmcm9tIHRoZSBicmFja2V0IGdyb3VwIGFsc28gbWFrZXMgdGhlIG1hdGNoIGZhaWwgZmFzdCBhdCB0aGVcbiAgLy8gbmV4dCBgW2AsIHNvIGEgbWFsZm9ybWVkIG5hbWUgY2Fubm90IHJlc2NhbiB0byB0aGUgZW5kIG9mIHRoZSBzdHJpbmcgZnJvbVxuICAvLyBldmVyeSB1bm1hdGNoZWQgYFtgIOKAlCBwYXJzaW5nIHN0YXlzIGxpbmVhciBpbiB0aGUgbGVuZ3RoIG9mIHRoZSBuYW1lLlxuICBjb25zdCBwYXRoID0gW107XG4gIGNvbnN0IHBhdHRlcm4gPSAvW14uW1xcXV0rfFxcWyhbXi5bXFxdXSopXS9nO1xuICBsZXQgbWF0Y2g7XG5cbiAgd2hpbGUgKChtYXRjaCA9IHBhdHRlcm4uZXhlYyhuYW1lKSkgIT09IG51bGwpIHtcbiAgICB0aHJvd0lmRGVwdGhFeGNlZWRlZChwYXRoLmxlbmd0aCk7XG4gICAgcGF0aC5wdXNoKG1hdGNoWzBdID09PSAnW10nID8gJycgOiBtYXRjaFsxXSB8fCBtYXRjaFswXSk7XG4gIH1cblxuICByZXR1cm4gcGF0aDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGFycmF5IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjb252ZXJ0IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXlzIGFuZCB2YWx1ZXMgYXMgdGhlIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycikge1xuICBjb25zdCBvYmogPSB7fTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFycik7XG4gIGxldCBpO1xuICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGtleTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICBvYmpba2V5XSA9IGFycltrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBGb3JtRGF0YSBvYmplY3QgYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGNvbnZlcnQgdG8gSlNPTi5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZywgYW55PiB8IG51bGx9IFRoZSBjb252ZXJ0ZWQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBmb3JtRGF0YVRvSlNPTihmb3JtRGF0YSkge1xuICBmdW5jdGlvbiBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldCwgaW5kZXgpIHtcbiAgICB0aHJvd0lmRGVwdGhFeGNlZWRlZChpbmRleCk7XG5cbiAgICBsZXQgbmFtZSA9IHBhdGhbaW5kZXgrK107XG5cbiAgICBpZiAobmFtZSA9PT0gJ19fcHJvdG9fXycpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgaXNOdW1lcmljS2V5ID0gTnVtYmVyLmlzRmluaXRlKCtuYW1lKTtcbiAgICBjb25zdCBpc0xhc3QgPSBpbmRleCA+PSBwYXRoLmxlbmd0aDtcbiAgICBuYW1lID0gIW5hbWUgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXQpID8gdGFyZ2V0Lmxlbmd0aCA6IG5hbWU7XG5cbiAgICBpZiAoaXNMYXN0KSB7XG4gICAgICBpZiAodXRpbHMuaGFzT3duUHJvcCh0YXJnZXQsIG5hbWUpKSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IHV0aWxzLmlzQXJyYXkodGFyZ2V0W25hbWVdKVxuICAgICAgICAgID8gdGFyZ2V0W25hbWVdLmNvbmNhdCh2YWx1ZSlcbiAgICAgICAgICA6IFt0YXJnZXRbbmFtZV0sIHZhbHVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxzLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSB8fCAhdXRpbHMuaXNPYmplY3QodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXRbbmFtZV0sIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBhcnJheVRvT2JqZWN0KHRhcmdldFtuYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gIH1cblxuICBpZiAodXRpbHMuaXNGb3JtRGF0YShmb3JtRGF0YSkgJiYgdXRpbHMuaXNGdW5jdGlvbihmb3JtRGF0YS5lbnRyaWVzKSkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaEVudHJ5KGZvcm1EYXRhLCAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgIGJ1aWxkUGF0aChwYXJzZVByb3BQYXRoKG5hbWUpLCB2YWx1ZSwgb2JqLCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybURhdGFUb0pTT047XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlO1xufVxuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52XG4gID8gKChvcmlnaW4sIGlzTVNJRSkgPT4gKHVybCkgPT4ge1xuICAgICAgdXJsID0gbmV3IFVSTCh1cmwsIHBsYXRmb3JtLm9yaWdpbik7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIG9yaWdpbi5wcm90b2NvbCA9PT0gdXJsLnByb3RvY29sICYmXG4gICAgICAgIG9yaWdpbi5ob3N0ID09PSB1cmwuaG9zdCAmJlxuICAgICAgICAoaXNNU0lFIHx8IG9yaWdpbi5wb3J0ID09PSB1cmwucG9ydClcbiAgICAgICk7XG4gICAgfSkoXG4gICAgICBuZXcgVVJMKHBsYXRmb3JtLm9yaWdpbiksXG4gICAgICBwbGF0Zm9ybS5uYXZpZ2F0b3IgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChwbGF0Zm9ybS5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgIClcbiAgOiAoKSA9PiB0cnVlO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHN0cmljdFxuZXhwb3J0IGRlZmF1bHQgbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLy8gUmF3QXhpb3NIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuY29uc3QgaWdub3JlRHVwbGljYXRlT2YgPSB1dGlscy50b09iamVjdFNldChbXG4gICdhZ2UnLFxuICAnYXV0aG9yaXphdGlvbicsXG4gICdjb250ZW50LWxlbmd0aCcsXG4gICdjb250ZW50LXR5cGUnLFxuICAnZXRhZycsXG4gICdleHBpcmVzJyxcbiAgJ2Zyb20nLFxuICAnaG9zdCcsXG4gICdpZi1tb2RpZmllZC1zaW5jZScsXG4gICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLFxuICAnbG9jYXRpb24nLFxuICAnbWF4LWZvcndhcmRzJyxcbiAgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsXG4gICdyZXRyeS1hZnRlcicsXG4gICd1c2VyLWFnZW50Jyxcbl0pO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3SGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKlxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHJhd0hlYWRlcnMpID0+IHtcbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGxldCBrZXk7XG4gIGxldCB2YWw7XG4gIGxldCBpO1xuXG4gIHJhd0hlYWRlcnMgJiZcbiAgICByYXdIZWFkZXJzLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAgICBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhbCA9IGxpbmUuc3Vic3RyaW5nKGkgKyAxKS50cmltKCk7XG5cbiAgICAgIGNvbnN0IGhhc0tleSA9IHV0aWxzLmhhc093blByb3AocGFyc2VkLCBrZXkpO1xuXG4gICAgICBpZiAoIWtleSB8fCAoaGFzS2V5ICYmIHV0aWxzLmhhc093blByb3AoaWdub3JlRHVwbGljYXRlT2YsIGtleSkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIGlmIChoYXNLZXkpIHtcbiAgICAgICAgICBwYXJzZWRba2V5XS5wdXNoKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyc2VkW2tleV0gPSBbdmFsXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBoYXNLZXkgPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlUHJvdG9jb2wodXJsKSB7XG4gIGNvbnN0IG1hdGNoID0gL14oWy0rXFx3XXsxLDI1fSk6KD86XFwvXFwvKT8vLmV4ZWModXJsKTtcbiAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaFsxXSkgfHwgJyc7XG59XG4iLCJpbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSAnLi9zcGVlZG9tZXRlci5qcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi90aHJvdHRsZS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NFdmVudFJlZHVjZXIgPSAobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0sIGZyZXEgPSAzKSA9PiB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIHRocm90dGxlKChlKSA9PiB7XG4gICAgaWYgKCFlIHx8IHR5cGVvZiBlLmxvYWRlZCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmF3TG9hZGVkID0gZS5sb2FkZWQ7XG4gICAgY29uc3QgdG90YWwgPSBlLmxlbmd0aENvbXB1dGFibGUgPyBlLnRvdGFsIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGxvYWRlZCA9IE1hdGgubWF4KDAsIHRvdGFsICE9IG51bGwgPyBNYXRoLm1pbihyYXdMb2FkZWQsIHRvdGFsKSA6IHJhd0xvYWRlZCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NCeXRlcyA9IE1hdGgubWF4KDAsIGxvYWRlZCAtIGJ5dGVzTm90aWZpZWQpO1xuICAgIGNvbnN0IHJhdGUgPSBfc3BlZWRvbWV0ZXIocHJvZ3Jlc3NCeXRlcyk7XG5cbiAgICBieXRlc05vdGlmaWVkID0gTWF0aC5tYXgoYnl0ZXNOb3RpZmllZCwgbG9hZGVkKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBsb2FkZWQsXG4gICAgICB0b3RhbCxcbiAgICAgIHByb2dyZXNzOiB0b3RhbCA/IGxvYWRlZCAvIHRvdGFsIDogdW5kZWZpbmVkLFxuICAgICAgYnl0ZXM6IHByb2dyZXNzQnl0ZXMsXG4gICAgICByYXRlOiByYXRlID8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGVzdGltYXRlZDogcmF0ZSAmJiB0b3RhbCA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBsZW5ndGhDb21wdXRhYmxlOiB0b3RhbCAhPSBudWxsLFxuICAgICAgW2lzRG93bmxvYWRTdHJlYW0gPyAnZG93bmxvYWQnIDogJ3VwbG9hZCddOiB0cnVlLFxuICAgIH07XG5cbiAgICBsaXN0ZW5lcihkYXRhKTtcbiAgfSwgZnJlcSk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NFdmVudERlY29yYXRvciA9ICh0b3RhbCwgdGhyb3R0bGVkKSA9PiB7XG4gIGNvbnN0IGxlbmd0aENvbXB1dGFibGUgPSB0b3RhbCAhPSBudWxsO1xuXG4gIHJldHVybiBbXG4gICAgKGxvYWRlZCkgPT5cbiAgICAgIHRocm90dGxlZFswXSh7XG4gICAgICAgIGxlbmd0aENvbXB1dGFibGUsXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBsb2FkZWQsXG4gICAgICB9KSxcbiAgICB0aHJvdHRsZWRbMV0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgYXN5bmNEZWNvcmF0b3IgPVxuICAoZm4sIHNjaGVkdWxlciA9IHV0aWxzLmFzYXApID0+XG4gICguLi5hcmdzKSA9PlxuICAgIHNjaGVkdWxlcigoKSA9PiBmbiguLi5hcmdzKSk7XG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgaXNVUkxTYW1lT3JpZ2luIGZyb20gJy4vaXNVUkxTYW1lT3JpZ2luLmpzJztcbmltcG9ydCBjb29raWVzIGZyb20gJy4vY29va2llcy5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuLi9jb3JlL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4uL2NvcmUvbWVyZ2VDb25maWcuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgc2V0Rm9ybURhdGFIZWFkZXJzIGZyb20gJy4uL2NvcmUvc2V0Rm9ybURhdGFIZWFkZXJzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuL2J1aWxkVVJMLmpzJztcblxuLyoqXG4gKiBFbmNvZGUgYSBVVEYtOCBzdHJpbmcgdG8gYSBMYXRpbi0xIGJ5dGUgc3RyaW5nIGZvciB1c2Ugd2l0aCBidG9hKCkuXG4gKiBUaGlzIGlzIGEgbW9kZXJuIHJlcGxhY2VtZW50IGZvciB0aGUgZGVwcmVjYXRlZCB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkgcGF0dGVybi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZW5jb2RlXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVVRGLTggYnl0ZXMgYXMgYSBMYXRpbi0xIHN0cmluZ1xuICovXG5jb25zdCBlbmNvZGVVVEY4ID0gKHN0cikgPT5cbiAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZ2ksIChfLCBoZXgpID0+XG4gICAgU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSlcbiAgKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUNvbmZpZyhjb25maWcpIHtcbiAgY29uc3QgbmV3Q29uZmlnID0gbWVyZ2VDb25maWcoe30sIGNvbmZpZyk7XG5cbiAgLy8gUmVhZCBvbmx5IG93biBwcm9wZXJ0aWVzIHRvIHByZXZlbnQgcHJvdG90eXBlIHBvbGx1dGlvbiBnYWRnZXRzXG4gIC8vIChlLmcuIE9iamVjdC5wcm90b3R5cGUuYmFzZVVSTCA9ICdodHRwczovL2V2aWwuY29tJykuXG4gIGNvbnN0IG93biA9IChrZXkpID0+ICh1dGlscy5oYXNPd25Qcm9wKG5ld0NvbmZpZywga2V5KSA/IG5ld0NvbmZpZ1trZXldIDogdW5kZWZpbmVkKTtcblxuICBjb25zdCBkYXRhID0gb3duKCdkYXRhJyk7XG4gIGxldCB3aXRoWFNSRlRva2VuID0gb3duKCd3aXRoWFNSRlRva2VuJyk7XG4gIGNvbnN0IHhzcmZIZWFkZXJOYW1lID0gb3duKCd4c3JmSGVhZGVyTmFtZScpO1xuICBjb25zdCB4c3JmQ29va2llTmFtZSA9IG93bigneHNyZkNvb2tpZU5hbWUnKTtcbiAgbGV0IGhlYWRlcnMgPSBvd24oJ2hlYWRlcnMnKTtcbiAgY29uc3QgYXV0aCA9IG93bignYXV0aCcpO1xuICBjb25zdCBiYXNlVVJMID0gb3duKCdiYXNlVVJMJyk7XG4gIGNvbnN0IGFsbG93QWJzb2x1dGVVcmxzID0gb3duKCdhbGxvd0Fic29sdXRlVXJscycpO1xuICBjb25zdCB1cmwgPSBvd24oJ3VybCcpO1xuXG4gIG5ld0NvbmZpZy5oZWFkZXJzID0gaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGhlYWRlcnMpO1xuXG4gIG5ld0NvbmZpZy51cmwgPSBidWlsZFVSTChcbiAgICBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHVybCwgYWxsb3dBYnNvbHV0ZVVybHMsIG5ld0NvbmZpZyksXG4gICAgb3duKCdwYXJhbXMnKSxcbiAgICBvd24oJ3BhcmFtc1NlcmlhbGl6ZXInKVxuICApO1xuXG4gIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgaWYgKGF1dGgpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IHV0aWxzLmdldFNhZmVQcm9wKGF1dGgsICd1c2VybmFtZScpIHx8ICcnO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdXRpbHMuZ2V0U2FmZVByb3AoYXV0aCwgJ3Bhc3N3b3JkJykgfHwgJyc7XG5cbiAgICB0cnkge1xuICAgICAgaGVhZGVycy5zZXQoXG4gICAgICAgICdBdXRob3JpemF0aW9uJyxcbiAgICAgICAgJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgKHBhc3N3b3JkID8gZW5jb2RlVVRGOChwYXNzd29yZCkgOiAnJykpXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IEF4aW9zRXJyb3IuZnJvbShlLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFLCBjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpKSB7XG4gICAgaWYgKFxuICAgICAgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52IHx8XG4gICAgICBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYgfHxcbiAgICAgIHV0aWxzLmlzUmVhY3ROYXRpdmUoZGF0YSlcbiAgICApIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUodW5kZWZpbmVkKTsgLy8gYnJvd3Nlci93ZWIgd29ya2VyL1JOIGhhbmRsZXMgaXRcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGF0YS5nZXRIZWFkZXJzKSkge1xuICAgICAgLy8gTm9kZS5qcyBGb3JtRGF0YSAobGlrZSBmb3JtLWRhdGEgcGFja2FnZSlcbiAgICAgIHNldEZvcm1EYXRhSGVhZGVycyhoZWFkZXJzLCBkYXRhLmdldEhlYWRlcnMoKSwgb3duKCdmb3JtRGF0YUhlYWRlclBvbGljeScpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG5cbiAgaWYgKHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudikge1xuICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHdpdGhYU1JGVG9rZW4pKSB7XG4gICAgICB3aXRoWFNSRlRva2VuID0gd2l0aFhTUkZUb2tlbihuZXdDb25maWcpO1xuICAgIH1cblxuICAgIC8vIFN0cmljdCBib29sZWFuIGNoZWNrIOKAlCBwcmV2ZW50cyBwcm90by1wb2xsdXRpb24gZ2FkZ2V0cyAoZS5nLiBPYmplY3QucHJvdG90eXBlLndpdGhYU1JGVG9rZW4gPSAxKVxuICAgIC8vIGFuZCBtaXNjb25maWd1cmF0aW9ucyAoZS5nLiBcImZhbHNlXCIpIGZyb20gc2hvcnQtY2lyY3VpdGluZyB0aGUgc2FtZS1vcmlnaW4gY2hlY2sgYW5kIGxlYWtpbmdcbiAgICAvLyB0aGUgWFNSRiB0b2tlbiBjcm9zcy1vcmlnaW4uXG4gICAgY29uc3Qgc2hvdWxkU2VuZFhTUkYgPVxuICAgICAgd2l0aFhTUkZUb2tlbiA9PT0gdHJ1ZSB8fCAod2l0aFhTUkZUb2tlbiA9PSBudWxsICYmIGlzVVJMU2FtZU9yaWdpbihuZXdDb25maWcudXJsKSk7XG5cbiAgICBpZiAoc2hvdWxkU2VuZFhTUkYpIHtcbiAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IHhzcmZIZWFkZXJOYW1lICYmIHhzcmZDb29raWVOYW1lICYmIGNvb2tpZXMucmVhZCh4c3JmQ29va2llTmFtZSk7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgaGVhZGVycy5zZXQoeHNyZkhlYWRlck5hbWUsIHhzcmZWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0NvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZUNvbmZpZztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZnVuY3Rpb24gdHJpbVNQb3JIVEFCKHN0cikge1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgZW5kID0gc3RyLmxlbmd0aDtcblxuICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcbiAgICBjb25zdCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gICAgaWYgKGNvZGUgIT09IDB4MDkgJiYgY29kZSAhPT0gMHgyMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhcnQgKz0gMTtcbiAgfVxuXG4gIHdoaWxlIChlbmQgPiBzdGFydCkge1xuICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChlbmQgLSAxKTtcblxuICAgIGlmIChjb2RlICE9PSAweDA5ICYmIGNvZGUgIT09IDB4MjApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVuZCAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gc3RyLmxlbmd0aCA/IHN0ciA6IHN0ci5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVGhlIGNvbnRyb2wtY29kZSByYW5nZXMgYXJlIGludGVudGlvbmFsOiBoZWFkZXIgc2FuaXRpemF0aW9uIHN0cmlwcyBDMC9ERUwgYnl0ZXMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxuY29uc3QgSU5WQUxJRF9VTklDT0RFX0hFQURFUl9WQUxVRV9DSEFSUyA9IG5ldyBSZWdFeHAoJ1tcXFxcdTAwMDAtXFxcXHUwMDA4XFxcXHUwMDBhLVxcXFx1MDAxZlxcXFx1MDA3Zl0rJywgJ2cnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCBJTlZBTElEX0JZVEVfU1RSSU5HX0hFQURFUl9WQUxVRV9DSEFSUyA9IG5ldyBSZWdFeHAoJ1teXFxcXHUwMDA5XFxcXHUwMDIwLVxcXFx1MDA3ZVxcXFx1MDA4MC1cXFxcdTAwZmZdKycsICdnJyk7XG5cbmZ1bmN0aW9uIHNhbml0aXplVmFsdWUodmFsdWUsIGludmFsaWRDaGFycykge1xuICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUubWFwKChpdGVtKSA9PiBzYW5pdGl6ZVZhbHVlKGl0ZW0sIGludmFsaWRDaGFycykpO1xuICB9XG5cbiAgcmV0dXJuIHRyaW1TUG9ySFRBQihTdHJpbmcodmFsdWUpLnJlcGxhY2UoaW52YWxpZENoYXJzLCAnJykpO1xufVxuXG5leHBvcnQgY29uc3Qgc2FuaXRpemVIZWFkZXJWYWx1ZSA9ICh2YWx1ZSkgPT5cbiAgc2FuaXRpemVWYWx1ZSh2YWx1ZSwgSU5WQUxJRF9VTklDT0RFX0hFQURFUl9WQUxVRV9DSEFSUyk7XG5cbmV4cG9ydCBjb25zdCBzYW5pdGl6ZUJ5dGVTdHJpbmdIZWFkZXJWYWx1ZSA9ICh2YWx1ZSkgPT5cbiAgc2FuaXRpemVWYWx1ZSh2YWx1ZSwgSU5WQUxJRF9CWVRFX1NUUklOR19IRUFERVJfVkFMVUVfQ0hBUlMpO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9CeXRlU3RyaW5nSGVhZGVyT2JqZWN0KGhlYWRlcnMpIHtcbiAgY29uc3QgYnl0ZVN0cmluZ0hlYWRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy50b0pTT04oKSwgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICBieXRlU3RyaW5nSGVhZGVyc1toZWFkZXJdID0gc2FuaXRpemVCeXRlU3RyaW5nSGVhZGVyVmFsdWUodmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gYnl0ZVN0cmluZ0hlYWRlcnM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRhdGEgbWF4UmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVzQ291bnQ9IDEwXVxuICogQHBhcmFtIHtOdW1iZXJ9IFttaW49IDEwMDBdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHNwZWVkb21ldGVyKHNhbXBsZXNDb3VudCwgbWluKSB7XG4gIHNhbXBsZXNDb3VudCA9IHNhbXBsZXNDb3VudCB8fCAxMDtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgY29uc3QgdGltZXN0YW1wcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBsZXQgaGVhZCA9IDA7XG4gIGxldCB0YWlsID0gMDtcbiAgbGV0IGZpcnN0U2FtcGxlVFM7XG5cbiAgbWluID0gbWluICE9PSB1bmRlZmluZWQgPyBtaW4gOiAxMDAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiBwdXNoKGNodW5rTGVuZ3RoKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHRpbWVzdGFtcHNbdGFpbF07XG5cbiAgICBpZiAoIWZpcnN0U2FtcGxlVFMpIHtcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XG4gICAgfVxuXG4gICAgYnl0ZXNbaGVhZF0gPSBjaHVua0xlbmd0aDtcbiAgICB0aW1lc3RhbXBzW2hlYWRdID0gbm93O1xuXG4gICAgbGV0IGkgPSB0YWlsO1xuICAgIGxldCBieXRlc0NvdW50ID0gMDtcblxuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XG4gICAgICBieXRlc0NvdW50ICs9IGJ5dGVzW2krK107XG4gICAgICBpID0gaSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBoZWFkID0gKGhlYWQgKyAxKSAlIHNhbXBsZXNDb3VudDtcblxuICAgIGlmIChoZWFkID09PSB0YWlsKSB7XG4gICAgICB0YWlsID0gKHRhaWwgKyAxKSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBpZiAobm93IC0gZmlyc3RTYW1wbGVUUyA8IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhc3NlZCA9IHN0YXJ0ZWRBdCAmJiBub3cgLSBzdGFydGVkQXQ7XG5cbiAgICByZXR1cm4gcGFzc2VkID8gTWF0aC5yb3VuZCgoYnl0ZXNDb3VudCAqIDEwMDApIC8gcGFzc2VkKSA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlZWRvbWV0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICBjb25zdCBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59XG4iLCIvKipcbiAqIFRocm90dGxlIGRlY29yYXRvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TnVtYmVyfSBmcmVxXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIGZyZXEpIHtcbiAgbGV0IHRpbWVzdGFtcCA9IDA7XG4gIGxldCB0aHJlc2hvbGQgPSAxMDAwIC8gZnJlcTtcbiAgbGV0IGxhc3RBcmdzO1xuICBsZXQgdGltZXI7XG5cbiAgY29uc3QgaW52b2tlID0gKGFyZ3MsIG5vdyA9IERhdGUubm93KCkpID0+IHtcbiAgICB0aW1lc3RhbXAgPSBub3c7XG4gICAgbGFzdEFyZ3MgPSBudWxsO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgZm4oLi4uYXJncyk7XG4gIH07XG5cbiAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHBhc3NlZCA9IG5vdyAtIHRpbWVzdGFtcDtcbiAgICBpZiAocGFzc2VkID49IHRocmVzaG9sZCkge1xuICAgICAgaW52b2tlKGFyZ3MsIG5vdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RBcmdzID0gYXJncztcbiAgICAgIGlmICghdGltZXIpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgICAgaW52b2tlKGxhc3RBcmdzKTtcbiAgICAgICAgfSwgdGhyZXNob2xkIC0gcGFzc2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmx1c2ggPSAoKSA9PiBsYXN0QXJncyAmJiBpbnZva2UobGFzdEFyZ3MpO1xuXG4gIHJldHVybiBbdGhyb3R0bGVkLCBmbHVzaF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRocm90dGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbi8vIHRlbXBvcmFyeSBob3RmaXggdG8gYXZvaWQgY2lyY3VsYXIgcmVmZXJlbmNlcyB1bnRpbCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBpcyByZWZhY3RvcmVkXG5pbXBvcnQgUGxhdGZvcm1Gb3JtRGF0YSBmcm9tICcuLi9wbGF0Zm9ybS9ub2RlL2NsYXNzZXMvRm9ybURhdGEuanMnO1xuaW1wb3J0IFBsYXRmb3JtQnVmZmVyIGZyb20gJy4uL3BsYXRmb3JtL25vZGUvY2xhc3Nlcy9CdWZmZXIuanMnO1xuXG4vLyBEZWZhdWx0IG5lc3RpbmcgbGltaXQgc2hhcmVkIHdpdGggdGhlIGludmVyc2UgdHJhbnNmb3JtIChmb3JtRGF0YVRvSlNPTikgc29cbi8vIHRoZSBGb3JtRGF0YSA8LT4gSlNPTiByb3VuZC10cmlwIHN0YXlzIHN5bW1ldHJpYy5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZPUk1fREFUQV9NQVhfREVQVEggPSAxMDA7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBhcnJheSBvciBqcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRoaW5nIC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBiZSB2aXNpdGVkLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Zpc2l0YWJsZSh0aGluZykge1xuICByZXR1cm4gdXRpbHMuaXNQbGFpbk9iamVjdCh0aGluZykgfHwgdXRpbHMuaXNBcnJheSh0aGluZyk7XG59XG5cbi8qKlxuICogSXQgcmVtb3ZlcyB0aGUgYnJhY2tldHMgZnJvbSB0aGUgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHBhcmFtZXRlci5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUga2V5IHdpdGhvdXQgdGhlIGJyYWNrZXRzLlxuICovXG5mdW5jdGlvbiByZW1vdmVCcmFja2V0cyhrZXkpIHtcbiAgcmV0dXJuIHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykgPyBrZXkuc2xpY2UoMCwgLTIpIDoga2V5O1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkb3RzIC0gSWYgdHJ1ZSwgdGhlIGtleSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggZG90cyBpbnN0ZWFkIG9mIGJyYWNrZXRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cykge1xuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XG4gIHJldHVybiBwYXRoXG4gICAgLmNvbmNhdChrZXkpXG4gICAgLm1hcChmdW5jdGlvbiBlYWNoKHRva2VuLCBpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHRva2VuID0gcmVtb3ZlQnJhY2tldHModG9rZW4pO1xuICAgICAgcmV0dXJuICFkb3RzICYmIGkgPyAnWycgKyB0b2tlbiArICddJyA6IHRva2VuO1xuICAgIH0pXG4gICAgLmpvaW4oZG90cyA/ICcuJyA6ICcnKTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgYXJyYXkgaXMgYW4gYXJyYXkgYW5kIG5vbmUgb2YgaXRzIGVsZW1lbnRzIGFyZSB2aXNpdGFibGUsIHRoZW4gaXQncyBhIGZsYXQgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNGbGF0QXJyYXkoYXJyKSB7XG4gIHJldHVybiB1dGlscy5pc0FycmF5KGFycikgJiYgIWFyci5zb21lKGlzVmlzaXRhYmxlKTtcbn1cblxuY29uc3QgcHJlZGljYXRlcyA9IHV0aWxzLnRvRmxhdE9iamVjdCh1dGlscywge30sIG51bGwsIGZ1bmN0aW9uIGZpbHRlcihwcm9wKSB7XG4gIHJldHVybiAvXmlzW0EtWl0vLnRlc3QocHJvcCk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgZGF0YSBvYmplY3QgdG8gRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0gez9PYmplY3R9IFtmb3JtRGF0YV1cbiAqIEBwYXJhbSB7P09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy52aXNpdG9yXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tZXRhVG9rZW5zID0gdHJ1ZV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZG90cyA9IGZhbHNlXVxuICogQHBhcmFtIHs/Qm9vbGVhbn0gW29wdGlvbnMuaW5kZXhlcyA9IGZhbHNlXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiovXG5cbi8qKlxuICogSXQgY29udmVydHMgYW4gb2JqZWN0IGludG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBmb3JtIGRhdGEuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgLSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGFwcGVuZCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHRvRm9ybURhdGEob2JqLCBmb3JtRGF0YSwgb3B0aW9ucykge1xuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBmb3JtRGF0YSA9IGZvcm1EYXRhIHx8IG5ldyAoUGxhdGZvcm1Gb3JtRGF0YSB8fCBGb3JtRGF0YSkoKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgb3B0aW9ucyA9IHV0aWxzLnRvRmxhdE9iamVjdChcbiAgICBvcHRpb25zLFxuICAgIHtcbiAgICAgIG1ldGFUb2tlbnM6IHRydWUsXG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIGluZGV4ZXM6IGZhbHNlLFxuICAgIH0sXG4gICAgZmFsc2UsXG4gICAgZnVuY3Rpb24gZGVmaW5lZChvcHRpb24sIHNvdXJjZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gICAgICByZXR1cm4gIXV0aWxzLmlzVW5kZWZpbmVkKHNvdXJjZVtvcHRpb25dKTtcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgbWV0YVRva2VucyA9IG9wdGlvbnMubWV0YVRva2VucztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGNvbnN0IHZpc2l0b3IgPSBvcHRpb25zLnZpc2l0b3IgfHwgZGVmYXVsdFZpc2l0b3I7XG4gIGNvbnN0IGRvdHMgPSBvcHRpb25zLmRvdHM7XG4gIGNvbnN0IGluZGV4ZXMgPSBvcHRpb25zLmluZGV4ZXM7XG4gIGNvbnN0IF9CbG9iID0gb3B0aW9ucy5CbG9iIHx8ICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgQmxvYik7XG4gIGNvbnN0IG1heERlcHRoID0gb3B0aW9ucy5tYXhEZXB0aCA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9GT1JNX0RBVEFfTUFYX0RFUFRIIDogb3B0aW9ucy5tYXhEZXB0aDtcbiAgY29uc3QgdXNlQmxvYiA9IF9CbG9iICYmIHV0aWxzLmlzU3BlY0NvbXBsaWFudEZvcm0oZm9ybURhdGEpO1xuICBjb25zdCBzdGFjayA9IFtdO1xuXG4gIGlmICghdXRpbHMuaXNGdW5jdGlvbih2aXNpdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Zpc2l0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiAnJztcblxuICAgIGlmICh1dGlscy5pc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNCb29sZWFuKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VCbG9iICYmIHV0aWxzLmlzQmxvYih2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdCbG9iIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBhIEJ1ZmZlciBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKHZhbHVlKSB8fCB1dGlscy5pc1R5cGVkQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodXNlQmxvYiAmJiB0eXBlb2YgX0Jsb2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfQmxvYihbdmFsdWVdKTtcbiAgICAgIH1cbiAgICAgIGlmIChQbGF0Zm9ybUJ1ZmZlciAmJiBQbGF0Zm9ybUJ1ZmZlci5pc0J1ZmZlckF2YWlsYWJsZSgpKSB7XG4gICAgICAgIHJldHVybiBQbGF0Zm9ybUJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdCbG9iIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBhIEJ1ZmZlciBpbnN0ZWFkLicsIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JUKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiB0aHJvd0lmTWF4RGVwdGhFeGNlZWRlZChkZXB0aCkge1xuICAgIGlmIChkZXB0aCA+IG1heERlcHRoKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgJ09iamVjdCBpcyB0b28gZGVlcGx5IG5lc3RlZCAoJyArIGRlcHRoICsgJyBsZXZlbHMpLiBNYXggZGVwdGg6ICcgKyBtYXhEZXB0aCxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfRk9STV9EQVRBX0RFUFRIX0VYQ0VFREVEXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVdpdGhEZXB0aExpbWl0KHZhbHVlLCBkZXB0aCkge1xuICAgIGlmIChtYXhEZXB0aCA9PT0gSW5maW5pdHkpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5jZXN0b3JzID0gW107XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIGxpbWl0RGVwdGgoX2tleSwgY3VycmVudFZhbHVlKSB7XG4gICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGFuY2VzdG9ycy5sZW5ndGggJiYgYW5jZXN0b3JzW2FuY2VzdG9ycy5sZW5ndGggLSAxXSAhPT0gdGhpcykge1xuICAgICAgICBhbmNlc3RvcnMucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGFuY2VzdG9ycy5wdXNoKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aHJvd0lmTWF4RGVwdGhFeGNlZWRlZChkZXB0aCArIGFuY2VzdG9ycy5sZW5ndGggLSAxKTtcblxuICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHZpc2l0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBrZXlcbiAgICogQHBhcmFtIHtBcnJheTxTdHJpbmd8TnVtYmVyPn0gcGF0aFxuICAgKiBAdGhpcyB7Rm9ybURhdGF9XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm4gdHJ1ZSB0byB2aXNpdCB0aGUgZWFjaCBwcm9wIG9mIHRoZSB2YWx1ZSByZWN1cnNpdmVseVxuICAgKi9cbiAgZnVuY3Rpb24gZGVmYXVsdFZpc2l0b3IodmFsdWUsIGtleSwgcGF0aCkge1xuICAgIGxldCBhcnIgPSB2YWx1ZTtcblxuICAgIGlmICh1dGlscy5pc1JlYWN0TmF0aXZlKGZvcm1EYXRhKSAmJiB1dGlscy5pc1JlYWN0TmF0aXZlQmxvYih2YWx1ZSkpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChyZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSwgY29udmVydFZhbHVlKHZhbHVlKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICYmICFwYXRoICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh1dGlscy5lbmRzV2l0aChrZXksICd7fScpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSBtZXRhVG9rZW5zID8ga2V5IDoga2V5LnNsaWNlKDAsIC0yKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHZhbHVlID0gc3RyaW5naWZ5V2l0aERlcHRoTGltaXQodmFsdWUsIDEpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKHV0aWxzLmlzQXJyYXkodmFsdWUpICYmIGlzRmxhdEFycmF5KHZhbHVlKSkgfHxcbiAgICAgICAgKCh1dGlscy5pc0ZpbGVMaXN0KHZhbHVlKSB8fCB1dGlscy5lbmRzV2l0aChrZXksICdbXScpKSAmJiAoYXJyID0gdXRpbHMudG9BcnJheSh2YWx1ZSkpKVxuICAgICAgKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSByZW1vdmVCcmFja2V0cyhrZXkpO1xuXG4gICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIGVhY2goZWwsIGluZGV4KSB7XG4gICAgICAgICAgISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgICAgICBpbmRleGVzID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyByZW5kZXJLZXkoW2tleV0sIGluZGV4LCBkb3RzKVxuICAgICAgICAgICAgICAgIDogaW5kZXhlcyA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBrZXlcbiAgICAgICAgICAgICAgICAgIDoga2V5ICsgJ1tdJyxcbiAgICAgICAgICAgICAgY29udmVydFZhbHVlKGVsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNWaXNpdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQocmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cyksIGNvbnZlcnRWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXhwb3NlZEhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHByZWRpY2F0ZXMsIHtcbiAgICBkZWZhdWx0VmlzaXRvcixcbiAgICBjb252ZXJ0VmFsdWUsXG4gICAgaXNWaXNpdGFibGUsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkKHZhbHVlLCBwYXRoLCBkZXB0aCA9IDApIHtcbiAgICBpZiAodXRpbHMuaXNVbmRlZmluZWQodmFsdWUpKSByZXR1cm47XG5cbiAgICB0aHJvd0lmTWF4RGVwdGhFeGNlZWRlZChkZXB0aCk7XG5cbiAgICBpZiAoc3RhY2suaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3RlZCBpbiAnICsgcGF0aC5qb2luKCcuJykpO1xuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsdWUpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gZWFjaChlbCwga2V5KSB7XG4gICAgICBjb25zdCByZXN1bHQgPVxuICAgICAgICAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiZcbiAgICAgICAgdmlzaXRvci5jYWxsKGZvcm1EYXRhLCBlbCwgdXRpbHMuaXNTdHJpbmcoa2V5KSA/IGtleS50cmltKCkgOiBrZXksIHBhdGgsIGV4cG9zZWRIZWxwZXJzKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBidWlsZChlbCwgcGF0aCA/IHBhdGguY29uY2F0KGtleSkgOiBba2V5XSwgZGVwdGggKyAxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgYnVpbGQob2JqKTtcblxuICByZXR1cm4gZm9ybURhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRm9ybURhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b0Zvcm1EYXRhKGRhdGEsIG5ldyBwbGF0Zm9ybS5jbGFzc2VzLlVSTFNlYXJjaFBhcmFtcygpLCB7XG4gICAgdmlzaXRvcjogZnVuY3Rpb24gKHZhbHVlLCBrZXksIHBhdGgsIGhlbHBlcnMpIHtcbiAgICAgIGlmIChwbGF0Zm9ybS5pc05vZGUgJiYgdXRpbHMuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWUudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVscGVycy5kZWZhdWx0VmlzaXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgLi4ub3B0aW9ucyxcbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3Qgc3RyZWFtQ2h1bmsgPSBmdW5jdGlvbiogKGNodW5rLCBjaHVua1NpemUpIHtcbiAgbGV0IGxlbiA9IGNodW5rLmJ5dGVMZW5ndGg7XG5cbiAgaWYgKCFjaHVua1NpemUgfHwgbGVuIDwgY2h1bmtTaXplKSB7XG4gICAgeWllbGQgY2h1bms7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHBvcyA9IDA7XG4gIGxldCBlbmQ7XG5cbiAgd2hpbGUgKHBvcyA8IGxlbikge1xuICAgIGVuZCA9IHBvcyArIGNodW5rU2l6ZTtcbiAgICB5aWVsZCBjaHVuay5zbGljZShwb3MsIGVuZCk7XG4gICAgcG9zID0gZW5kO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVhZEJ5dGVzID0gYXN5bmMgZnVuY3Rpb24qIChpdGVyYWJsZSwgY2h1bmtTaXplKSB7XG4gIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgcmVhZFN0cmVhbShpdGVyYWJsZSkpIHtcbiAgICB5aWVsZCogc3RyZWFtQ2h1bmsoY2h1bmssIGNodW5rU2l6ZSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlYWRTdHJlYW0gPSBhc3luYyBmdW5jdGlvbiogKHN0cmVhbSkge1xuICBpZiAoc3RyZWFtW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkge1xuICAgIHlpZWxkKiBzdHJlYW07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICB0cnkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCByZWFkZXIuY2FuY2VsKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0cmFja1N0cmVhbSA9IChzdHJlYW0sIGNodW5rU2l6ZSwgb25Qcm9ncmVzcywgb25GaW5pc2gpID0+IHtcbiAgY29uc3QgaXRlcmF0b3IgPSByZWFkQnl0ZXMoc3RyZWFtLCBjaHVua1NpemUpO1xuXG4gIGxldCBieXRlcyA9IDA7XG4gIGxldCBkb25lO1xuICBsZXQgX29uRmluaXNoID0gKGUpID0+IHtcbiAgICBpZiAoIWRvbmUpIHtcbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgb25GaW5pc2ggJiYgb25GaW5pc2goZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oXG4gICAge1xuICAgICAgYXN5bmMgcHVsbChjb250cm9sbGVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIF9vbkZpbmlzaCgpO1xuICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBsZW4gPSB2YWx1ZS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIGlmIChvblByb2dyZXNzKSB7XG4gICAgICAgICAgICBsZXQgbG9hZGVkQnl0ZXMgPSAoYnl0ZXMgKz0gbGVuKTtcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3MobG9hZGVkQnl0ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUobmV3IFVpbnQ4QXJyYXkodmFsdWUpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX29uRmluaXNoKGVycik7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2FuY2VsKHJlYXNvbikge1xuICAgICAgICBfb25GaW5pc2gocmVhc29uKTtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhpZ2hXYXRlck1hcms6IDIsXG4gICAgfVxuICApO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJy4uL2Vudi9kYXRhLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblsnb2JqZWN0JywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdzeW1ib2wnXS5mb3JFYWNoKCh0eXBlLCBpKSA9PiB7XG4gIHZhbGlkYXRvcnNbdHlwZV0gPSBmdW5jdGlvbiB2YWxpZGF0b3IodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSB0eXBlIHx8ICdhJyArIChpIDwgMSA/ICduICcgOiAnICcpICsgdHlwZTtcbiAgfTtcbn0pO1xuXG5jb25zdCBkZXByZWNhdGVkV2FybmluZ3MgPSB7fTtcblxuLyoqXG4gKiBUcmFuc2l0aW9uYWwgb3B0aW9uIHZhbGlkYXRvclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb258Ym9vbGVhbj99IHZhbGlkYXRvciAtIHNldCB0byBmYWxzZSBpZiB0aGUgdHJhbnNpdGlvbmFsIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkXG4gKiBAcGFyYW0ge3N0cmluZz99IHZlcnNpb24gLSBkZXByZWNhdGVkIHZlcnNpb24gLyByZW1vdmVkIHNpbmNlIHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nP30gbWVzc2FnZSAtIHNvbWUgbWVzc2FnZSB3aXRoIGFkZGl0aW9uYWwgaW5mb1xuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2Uob3B0LCBkZXNjKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICdbQXhpb3MgdicgK1xuICAgICAgVkVSU0lPTiArXG4gICAgICBcIl0gVHJhbnNpdGlvbmFsIG9wdGlvbiAnXCIgK1xuICAgICAgb3B0ICtcbiAgICAgIFwiJ1wiICtcbiAgICAgIGRlc2MgK1xuICAgICAgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKVxuICAgICk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gKHZhbHVlLCBvcHQsIG9wdHMpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiAhZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0pIHtcbiAgICAgIGRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdID0gdHJ1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSB2JyArIHZlcnNpb24gKyAnIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5lYXIgZnV0dXJlJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcblxudmFsaWRhdG9ycy5zcGVsbGluZyA9IGZ1bmN0aW9uIHNwZWxsaW5nKGNvcnJlY3RTcGVsbGluZykge1xuICByZXR1cm4gKHZhbHVlLCBvcHQpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgJHtvcHR9IGlzIGxpa2VseSBhIG1pc3NwZWxsaW5nIG9mICR7Y29ycmVjdFNwZWxsaW5nfWApO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBjb25zdCBvcHQgPSBrZXlzW2ldO1xuICAgIC8vIFVzZSBoYXNPd25Qcm9wZXJ0eSBzbyBhIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUuPG9wdD4gY2Fubm90IHN1cHBseVxuICAgIC8vIGEgbm9uLWZ1bmN0aW9uIHZhbGlkYXRvciBhbmQgY2F1c2UgYSBUeXBlRXJyb3IuXG4gICAgY29uc3QgdmFsaWRhdG9yID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNjaGVtYSwgb3B0KSA/IHNjaGVtYVtvcHRdIDogdW5kZWZpbmVkO1xuICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAgICdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0LFxuICAgICAgICAgIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzZXJ0T3B0aW9ucyxcbiAgdmFsaWRhdG9ycyxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyA/IEJsb2IgOiBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnID8gRm9ybURhdGEgOiBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyA/IFVSTFNlYXJjaFBhcmFtcyA6IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiaW1wb3J0IFVSTFNlYXJjaFBhcmFtcyBmcm9tICcuL2NsYXNzZXMvVVJMU2VhcmNoUGFyYW1zLmpzJztcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL2NsYXNzZXMvRm9ybURhdGEuanMnO1xuaW1wb3J0IEJsb2IgZnJvbSAnLi9jbGFzc2VzL0Jsb2IuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQnJvd3NlcjogdHJ1ZSxcbiAgY2xhc3Nlczoge1xuICAgIFVSTFNlYXJjaFBhcmFtcyxcbiAgICBGb3JtRGF0YSxcbiAgICBCbG9iLFxuICB9LFxuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmaWxlJywgJ2Jsb2InLCAndXJsJywgJ2RhdGEnXSxcbn07XG4iLCJjb25zdCBoYXNCcm93c2VyRW52ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuY29uc3QgX25hdmlnYXRvciA9ICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiBuYXZpZ2F0b3IpIHx8IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlckVudiA9XG4gIGhhc0Jyb3dzZXJFbnYgJiZcbiAgKCFfbmF2aWdhdG9yIHx8IFsnUmVhY3ROYXRpdmUnLCAnTmF0aXZlU2NyaXB0JywgJ05TJ10uaW5kZXhPZihfbmF2aWdhdG9yLnByb2R1Y3QpIDwgMCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIHdlYldvcmtlciBlbnZpcm9ubWVudFxuICpcbiAqIEFsdGhvdWdoIHRoZSBgaXNTdGFuZGFyZEJyb3dzZXJFbnZgIG1ldGhvZCBpbmRpY2F0ZXMgdGhhdFxuICogYGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyYCwgdGhlIFdlYldvcmtlciB3aWxsIHN0aWxsIGJlXG4gKiBmaWx0ZXJlZCBvdXQgZHVlIHRvIGl0cyBqdWRnbWVudCBzdGFuZGFyZFxuICogYHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdgLlxuICogVGhpcyBsZWFkcyB0byBhIHByb2JsZW0gd2hlbiBheGlvcyBwb3N0IGBGb3JtRGF0YWAgaW4gd2ViV29ya2VyXG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudiA9ICgoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSAmJlxuICAgIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbidcbiAgKTtcbn0pKCk7XG5cbmNvbnN0IG9yaWdpbiA9IChoYXNCcm93c2VyRW52ICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB8fCAnaHR0cDovL2xvY2FsaG9zdCc7XG5cbmV4cG9ydCB7XG4gIGhhc0Jyb3dzZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudixcbiAgaGFzU3RhbmRhcmRCcm93c2VyRW52LFxuICBfbmF2aWdhdG9yIGFzIG5hdmlnYXRvcixcbiAgb3JpZ2luLFxufTtcbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tICcuL25vZGUvaW5kZXguanMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLnV0aWxzLFxuICAuLi5wbGF0Zm9ybSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuY29uc3QgeyB0b1N0cmluZyB9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmNvbnN0IHsgZ2V0UHJvdG90eXBlT2YgfSA9IE9iamVjdDtcbmNvbnN0IHsgaXRlcmF0b3IsIHRvU3RyaW5nVGFnIH0gPSBTeW1ib2w7XG5cbi8qIENyZWF0aW5nIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGlmIGFuIG9iamVjdCBoYXMgYSBwcm9wZXJ0eS4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gKFxuICAoeyBoYXNPd25Qcm9wZXJ0eSB9KSA9PlxuICAob2JqLCBwcm9wKSA9PlxuICAgIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKVxuKShPYmplY3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBXYWxrIHRoZSBwcm90b3R5cGUgY2hhaW4gKGV4Y2x1ZGluZyB0aGUgc2hhcmVkIE9iamVjdC5wcm90b3R5cGUpIGxvb2tpbmcgZm9yXG4gKiBhbiBvd24gYHByb3BgLiBUaGlzIGRpc3Rpbmd1aXNoZXMgZ2VudWluZSBvd24vaW5oZXJpdGVkIG1lbWJlcnMg4oCUIGluY2x1ZGluZ1xuICogY2xhc3MgYWNjZXNzb3JzIGFuZCB0ZW1wbGF0ZSBwcm90b3R5cGVzIOKAlCBmcm9tIG1lbWJlcnMgaW5qZWN0ZWQgdmlhXG4gKiBPYmplY3QucHJvdG90eXBlIHBvbGx1dGlvbiAoZS5nLiBgT2JqZWN0LnByb3RvdHlwZS51c2VybmFtZSA9ICcuLi4nYCksIHdoaWNoXG4gKiBsaXZlIG9uIE9iamVjdC5wcm90b3R5cGUgaXRzZWxmIGFuZCBhcmUgdGhlcmVmb3JlIG5ldmVyIG1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgd2hvc2UgY2hhaW4gdG8gaW5zcGVjdFxuICogQHBhcmFtIHtzdHJpbmd8c3ltYm9sfSBwcm9wIFRoZSBwcm9wZXJ0eSBrZXkgdG8gbG9vayBmb3JcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSB3aGVuIGBwcm9wYCBpcyBvd25lZCBiZWxvdyBPYmplY3QucHJvdG90eXBlXG4gKi9cbmNvbnN0IGhhc093bkluUHJvdG90eXBlQ2hhaW4gPSAodGhpbmcsIHByb3ApID0+IHtcbiAgbGV0IG9iaiA9IHRoaW5nO1xuICBjb25zdCBzZWVuID0gW107XG5cbiAgd2hpbGUgKG9iaiAhPSBudWxsICYmIG9iaiAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGlmIChzZWVuLmluZGV4T2Yob2JqKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2Vlbi5wdXNoKG9iaik7XG5cbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9iaiA9IGdldFByb3RvdHlwZU9mKG9iaik7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZWFkIGBvYmpbcHJvcF1gIG9ubHkgd2hlbiBpdCBpcyBzYWZlIGZyb20gT2JqZWN0LnByb3RvdHlwZSBwb2xsdXRpb24uIE93blxuICogcHJvcGVydGllcyBhbmQgbWVtYmVycyBpbmhlcml0ZWQgZnJvbSBhIG5vbi1PYmplY3QucHJvdG90eXBlIHNvdXJjZSAoYSBjbGFzc1xuICogaW5zdGFuY2Ugb3IgdGVtcGxhdGUgb2JqZWN0KSBhcmUgaG9ub3JlZDsgYSB2YWx1ZSByZWFjaGFibGUgb25seSB0aHJvdWdoIGFcbiAqIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUgaXMgaWdub3JlZCBhbmQgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gcHJvcCBUaGUgcHJvcGVydHkga2V5IHRvIHJlYWRcbiAqXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc29sdmVkIHZhbHVlLCBvciB1bmRlZmluZWQgd2hlbiB1bnNhZmUvYWJzZW50XG4gKi9cbmNvbnN0IGdldFNhZmVQcm9wID0gKG9iaiwgcHJvcCkgPT5cbiAgb2JqICE9IG51bGwgJiYgaGFzT3duSW5Qcm90b3R5cGVDaGFpbihvYmosIHByb3ApID8gb2JqW3Byb3BdIDogdW5kZWZpbmVkO1xuXG5jb25zdCBraW5kT2YgPSAoKGNhY2hlKSA9PiAodGhpbmcpID0+IHtcbiAgY29uc3Qgc3RyID0gdG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gIHJldHVybiBjYWNoZVtzdHJdIHx8IChjYWNoZVtzdHJdID0gc3RyLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpKTtcbn0pKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuXG5jb25zdCBraW5kT2ZUZXN0ID0gKHR5cGUpID0+IHtcbiAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuICh0aGluZykgPT4ga2luZE9mKHRoaW5nKSA9PT0gdHlwZTtcbn07XG5cbmNvbnN0IHR5cGVPZlRlc3QgPSAodHlwZSkgPT4gKHRoaW5nKSA9PiB0eXBlb2YgdGhpbmcgPT09IHR5cGU7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBub24tbnVsbCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCB7IGlzQXJyYXkgfSA9IEFycmF5O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVW5kZWZpbmVkID0gdHlwZU9mVGVzdCgndW5kZWZpbmVkJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiAoXG4gICAgdmFsICE9PSBudWxsICYmXG4gICAgIWlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiZcbiAgICAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKSAmJlxuICAgIGlzRnVuY3Rpb24odmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKSAmJlxuICAgIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpXG4gICk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNBcnJheUJ1ZmZlciA9IGtpbmRPZlRlc3QoJ0FycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdmFsICYmIHZhbC5idWZmZXIgJiYgaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyaW5nID0gdHlwZU9mVGVzdCgnc3RyaW5nJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGdW5jdGlvbiA9IHR5cGVPZlRlc3QoJ2Z1bmN0aW9uJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNOdW1iZXIgPSB0eXBlT2ZUZXN0KCdudW1iZXInKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNPYmplY3QgPSAodGhpbmcpID0+IHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCb29sZWFuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCb29sZWFuLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCb29sZWFuID0gKHRoaW5nKSA9PiB0aGluZyA9PT0gdHJ1ZSB8fCB0aGluZyA9PT0gZmFsc2U7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHtcbiAgaWYgKCFpc09iamVjdCh2YWwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIChcbiAgICAocHJvdG90eXBlID09PSBudWxsIHx8XG4gICAgICBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgfHxcbiAgICAgIGdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkgPT09IG51bGwpICYmXG4gICAgLy8gVHJlYXQgYW55IGdlbnVpbmUgKG5vbi1PYmplY3QucHJvdG90eXBlLXBvbGx1dGVkKSBTeW1ib2wudG9TdHJpbmdUYWcgb3JcbiAgICAvLyBTeW1ib2wuaXRlcmF0b3IgYXMgZXZpZGVuY2UgdGhlIHZhbHVlIGlzIGEgdGFnZ2VkL2l0ZXJhYmxlIHR5cGUgcmF0aGVyXG4gICAgLy8gdGhhbiBhIHBsYWluIG9iamVjdCwgd2hpbGUgaWdub3Jpbmcga2V5cyBpbmplY3RlZCBvbnRvIE9iamVjdC5wcm90b3R5cGUuXG4gICAgIWhhc093bkluUHJvdG90eXBlQ2hhaW4odmFsLCB0b1N0cmluZ1RhZykgJiZcbiAgICAhaGFzT3duSW5Qcm90b3R5cGVDaGFpbih2YWwsIGl0ZXJhdG9yKVxuICApO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBlbXB0eSBvYmplY3QgKHNhZmVseSBoYW5kbGVzIEJ1ZmZlcnMpXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBlbXB0eSBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0VtcHR5T2JqZWN0ID0gKHZhbCkgPT4ge1xuICAvLyBFYXJseSByZXR1cm4gZm9yIG5vbi1vYmplY3RzIG9yIEJ1ZmZlcnMgdG8gcHJldmVudCBSYW5nZUVycm9yXG4gIGlmICghaXNPYmplY3QodmFsKSB8fCBpc0J1ZmZlcih2YWwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDAgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCkgPT09IE9iamVjdC5wcm90b3R5cGU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBGYWxsYmFjayBmb3IgYW55IG90aGVyIG9iamVjdHMgdGhhdCBtaWdodCBjYXVzZSBSYW5nZUVycm9yIHdpdGggT2JqZWN0LmtleXMoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRGF0ZSA9IGtpbmRPZlRlc3QoJ0RhdGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZSA9IGtpbmRPZlRlc3QoJ0ZpbGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFJlYWN0IE5hdGl2ZSBCbG9iXG4gKiBSZWFjdCBOYXRpdmUgXCJibG9iXCI6IGFuIG9iamVjdCB3aXRoIGEgYHVyaWAgYXR0cmlidXRlLiBPcHRpb25hbGx5LCBpdCBjYW5cbiAqIGFsc28gaGF2ZSBhIGBuYW1lYCBhbmQgYHR5cGVgIGF0dHJpYnV0ZSB0byBzcGVjaWZ5IGZpbGVuYW1lIGFuZCBjb250ZW50IHR5cGVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNjY4NGNmM2FkZjQwOTRlYjZjNDA1ZDM0NWE3NWJmOGM3YzBiZjg4L0xpYnJhcmllcy9OZXR3b3JrL0Zvcm1EYXRhLmpzI0w2OC1MNzFcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBSZWFjdCBOYXRpdmUgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUmVhY3ROYXRpdmVCbG9iID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudXJpICE9PSAndW5kZWZpbmVkJyk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBlbnZpcm9ubWVudCBpcyBSZWFjdCBOYXRpdmVcbiAqIFJlYWN0TmF0aXZlIGBGb3JtRGF0YWAgaGFzIGEgbm9uLXN0YW5kYXJkIGBnZXRQYXJ0cygpYCBtZXRob2RcbiAqXG4gKiBAcGFyYW0geyp9IGZvcm1EYXRhIFRoZSBmb3JtRGF0YSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgZW52aXJvbm1lbnQgaXMgUmVhY3QgTmF0aXZlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNSZWFjdE5hdGl2ZSA9IChmb3JtRGF0YSkgPT4gZm9ybURhdGEgJiYgdHlwZW9mIGZvcm1EYXRhLmdldFBhcnRzICE9PSAndW5kZWZpbmVkJztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQmxvYiA9IGtpbmRPZlRlc3QoJ0Jsb2InKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVMaXN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGVMaXN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlTGlzdCA9IGtpbmRPZlRlc3QoJ0ZpbGVMaXN0Jyk7XG5jb25zdCBpc1NldCA9IGtpbmRPZlRlc3QoJ1NldCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyZWFtID0gKHZhbCkgPT4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZ2xvYmFsVGhpcztcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIHNlbGY7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIHdpbmRvdztcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZ2xvYmFsO1xuICByZXR1cm4ge307XG59XG5cbmNvbnN0IEcgPSBnZXRHbG9iYWwoKTtcbmNvbnN0IEZvcm1EYXRhQ3RvciA9IHR5cGVvZiBHLkZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyA/IEcuRm9ybURhdGEgOiB1bmRlZmluZWQ7XG5cbmNvbnN0IGlzRm9ybURhdGEgPSAodGhpbmcpID0+IHtcbiAgaWYgKCF0aGluZykgcmV0dXJuIGZhbHNlO1xuICBpZiAoRm9ybURhdGFDdG9yICYmIHRoaW5nIGluc3RhbmNlb2YgRm9ybURhdGFDdG9yKSByZXR1cm4gdHJ1ZTtcbiAgLy8gUmVqZWN0IHBsYWluIG9iamVjdHMgaW5oZXJpdGluZyBkaXJlY3RseSBmcm9tIE9iamVjdC5wcm90b3R5cGUgc28gcHJvdG90eXBlLXBvbGx1dGlvbiBnYWRnZXRzIGNhbid0IHNwb29mIEZvcm1EYXRhLlxuICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKHRoaW5nKTtcbiAgaWYgKCFwcm90byB8fCBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBraW5kID0ga2luZE9mKHRoaW5nKTtcbiAgcmV0dXJuIChcbiAgICBraW5kID09PSAnZm9ybWRhdGEnIHx8XG4gICAgLy8gZGV0ZWN0IGZvcm0tZGF0YSBpbnN0YW5jZVxuICAgIChraW5kID09PSAnb2JqZWN0JyAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRvU3RyaW5nKSAmJiB0aGluZy50b1N0cmluZygpID09PSAnW29iamVjdCBGb3JtRGF0YV0nKVxuICApO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVVJMU2VhcmNoUGFyYW1zID0ga2luZE9mVGVzdCgnVVJMU2VhcmNoUGFyYW1zJyk7XG5cbmNvbnN0IFtpc1JlYWRhYmxlU3RyZWFtLCBpc1JlcXVlc3QsIGlzUmVzcG9uc2UsIGlzSGVhZGVyc10gPSBbXG4gICdSZWFkYWJsZVN0cmVhbScsXG4gICdSZXF1ZXN0JyxcbiAgJ1Jlc3BvbnNlJyxcbiAgJ0hlYWRlcnMnLFxuXS5tYXAoa2luZE9mVGVzdCk7XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmNvbnN0IHRyaW0gPSAoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIudHJpbSA/IHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcbn07XG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheTx1bmtub3duPn0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbGxPd25LZXlzID0gZmFsc2VdXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4sIHsgYWxsT3duS2V5cyA9IGZhbHNlIH0gPSB7fSkge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpO1xuICBsZXQgbDtcblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAoaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQnVmZmVyIGNoZWNrXG4gICAgaWYgKGlzQnVmZmVyKG9iaikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBjb25zdCBrZXlzID0gYWxsT3duS2V5cyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBrZXk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRmluZHMgYSBrZXkgaW4gYW4gb2JqZWN0LCBjYXNlLWluc2Vuc2l0aXZlLCByZXR1cm5pbmcgdGhlIGFjdHVhbCBrZXkgbmFtZS5cbiAqIFJldHVybnMgbnVsbCBpZiB0aGUgb2JqZWN0IGlzIGEgQnVmZmVyIG9yIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBUaGUgb2JqZWN0IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIGZpbmQgKGNhc2UtaW5zZW5zaXRpdmUpLlxuICogQHJldHVybnMgez9zdHJpbmd9IFRoZSBhY3R1YWwga2V5IG5hbWUgaWYgZm91bmQsIG90aGVyd2lzZSBudWxsLlxuICovXG5mdW5jdGlvbiBmaW5kS2V5KG9iaiwga2V5KSB7XG4gIGlmIChpc0J1ZmZlcihvYmopKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIGxldCBfa2V5O1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIF9rZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgPT09IF9rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIF9rZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBfZ2xvYmFsID0gKCgpID0+IHtcbiAgLyplc2xpbnQgbm8tdW5kZWY6MCovXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBnbG9iYWxUaGlzO1xuICByZXR1cm4gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xufSkoKTtcblxuY29uc3QgaXNDb250ZXh0RGVmaW5lZCA9IChjb250ZXh0KSA9PiAhaXNVbmRlZmluZWQoY29udGV4dCkgJiYgY29udGV4dCAhPT0gX2dsb2JhbDtcblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIGNvbnN0IHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLi4ub2Jqcykge1xuICBjb25zdCB7IGNhc2VsZXNzLCBza2lwVW5kZWZpbmVkIH0gPSAoaXNDb250ZXh0RGVmaW5lZCh0aGlzKSAmJiB0aGlzKSB8fCB7fTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IGFzc2lnblZhbHVlID0gKHZhbCwga2V5KSA9PiB7XG4gICAgLy8gU2tpcCBkYW5nZXJvdXMgcHJvcGVydHkgbmFtZXMgdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycgfHwga2V5ID09PSAnY29uc3RydWN0b3InIHx8IGtleSA9PT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBmaW5kS2V5IGxvd2VyY2FzZXMgdGhlIGtleSwgc28gY2FzZWxlc3MgbG9va3VwIG9ubHkgYXBwbGllcyB0byBzdHJpbmdzIOKAlFxuICAgIC8vIHN5bWJvbCBrZXlzIGFyZSBpZGVudGl0eS1tYXRjaGVkLlxuICAgIGNvbnN0IHRhcmdldEtleSA9IChjYXNlbGVzcyAmJiB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBmaW5kS2V5KHJlc3VsdCwga2V5KSkgfHwga2V5O1xuICAgIC8vIFJlYWQgdmlhIG93bi1wcm9wIG9ubHkg4oCUIGEgYmFyZSBgcmVzdWx0W3RhcmdldEtleV1gIHdhbGtzIHRoZSBwcm90b3R5cGVcbiAgICAvLyBjaGFpbiwgc28gYSBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlIHZhbHVlIGNvdWxkIHN1cmZhY2UgaGVyZSBhbmQgZ2V0XG4gICAgLy8gY29waWVkIGludG8gdGhlIG1lcmdlZCByZXN1bHQuXG4gICAgY29uc3QgZXhpc3RpbmcgPSBoYXNPd25Qcm9wZXJ0eShyZXN1bHQsIHRhcmdldEtleSkgPyByZXN1bHRbdGFyZ2V0S2V5XSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChleGlzdGluZykgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKGV4aXN0aW5nLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSBpZiAoIXNraXBVbmRlZmluZWQgfHwgIWlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IG9ianMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qgc291cmNlID0gb2Jqc1tpXTtcbiAgICBpZiAoIXNvdXJjZSB8fCBpc0J1ZmZlcihzb3VyY2UpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmb3JFYWNoKHNvdXJjZSwgYXNzaWduVmFsdWUpO1xuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnIHx8IGlzQXJyYXkoc291cmNlKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN5bWJvbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHN5bWJvbHNbal07XG4gICAgICBpZiAocHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIHN5bWJvbCkpIHtcbiAgICAgICAgYXNzaWduVmFsdWUoc291cmNlW3N5bWJvbF0sIHN5bWJvbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbE93bktleXNdXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmNvbnN0IGV4dGVuZCA9IChhLCBiLCB0aGlzQXJnLCB7IGFsbE93bktleXMgfSA9IHt9KSA9PiB7XG4gIGZvckVhY2goXG4gICAgYixcbiAgICAodmFsLCBrZXkpID0+IHtcbiAgICAgIGlmICh0aGlzQXJnICYmIGlzRnVuY3Rpb24odmFsKSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwga2V5LCB7XG4gICAgICAgICAgLy8gTnVsbC1wcm90byBkZXNjcmlwdG9yIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS5nZXQgY2Fubm90XG4gICAgICAgICAgLy8gaGlqYWNrIGRlZmluZVByb3BlcnR5J3MgYWNjZXNzb3ItdnMtZGF0YSByZXNvbHV0aW9uLlxuICAgICAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgICAgICB2YWx1ZTogYmluZCh2YWwsIHRoaXNBcmcpLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBrZXksIHtcbiAgICAgICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7IGFsbE93bktleXMgfVxuICApO1xuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmNvbnN0IHN0cmlwQk9NID0gKGNvbnRlbnQpID0+IHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhmZWZmKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdXG4gKiBAcGFyYW0ge29iamVjdH0gW2Rlc2NyaXB0b3JzXVxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBpbmhlcml0cyA9IChjb25zdHJ1Y3Rvciwgc3VwZXJDb25zdHJ1Y3RvciwgcHJvcHMsIGRlc2NyaXB0b3JzKSA9PiB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICB2YWx1ZTogY29uc3RydWN0b3IsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCAnc3VwZXInLCB7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIHZhbHVlOiBzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZSxcbiAgfSk7XG4gIHByb3BzICYmIE9iamVjdC5hc3NpZ24oY29uc3RydWN0b3IucHJvdG90eXBlLCBwcm9wcyk7XG59O1xuXG4vKipcbiAqIFJlc29sdmUgb2JqZWN0IHdpdGggZGVlcCBwcm90b3R5cGUgY2hhaW4gdG8gYSBmbGF0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZU9iaiBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gW2Rlc3RPYmpdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEJvb2xlYW59IFtmaWx0ZXJdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcEZpbHRlcl1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCB0b0ZsYXRPYmplY3QgPSAoc291cmNlT2JqLCBkZXN0T2JqLCBmaWx0ZXIsIHByb3BGaWx0ZXIpID0+IHtcbiAgbGV0IHByb3BzO1xuICBsZXQgaTtcbiAgbGV0IHByb3A7XG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xuXG4gIGRlc3RPYmogPSBkZXN0T2JqIHx8IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgaWYgKHNvdXJjZU9iaiA9PSBudWxsKSByZXR1cm4gZGVzdE9iajtcblxuICBkbyB7XG4gICAgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VPYmopO1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmICgoIXByb3BGaWx0ZXIgfHwgcHJvcEZpbHRlcihwcm9wLCBzb3VyY2VPYmosIGRlc3RPYmopKSAmJiAhbWVyZ2VkW3Byb3BdKSB7XG4gICAgICAgIGRlc3RPYmpbcHJvcF0gPSBzb3VyY2VPYmpbcHJvcF07XG4gICAgICAgIG1lcmdlZFtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZU9iaiA9IGZpbHRlciAhPT0gZmFsc2UgJiYgZ2V0UHJvdG90eXBlT2Yoc291cmNlT2JqKTtcbiAgfSB3aGlsZSAoc291cmNlT2JqICYmICghZmlsdGVyIHx8IGZpbHRlcihzb3VyY2VPYmosIGRlc3RPYmopKSAmJiBzb3VyY2VPYmogIT09IE9iamVjdC5wcm90b3R5cGUpO1xuXG4gIHJldHVybiBkZXN0T2JqO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzdHJpbmcgZW5kcyB3aXRoIHRoZSBjaGFyYWN0ZXJzIG9mIGEgc3BlY2lmaWVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb249IDBdXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikgPT4ge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdHIubGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSBzdHIubGVuZ3RoO1xuICB9XG4gIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0ci5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIG5ldyBhcnJheSBmcm9tIGFycmF5IGxpa2Ugb2JqZWN0IG9yIG51bGwgaWYgZmFpbGVkXG4gKlxuICogQHBhcmFtIHsqfSBbdGhpbmddXG4gKlxuICogQHJldHVybnMgez9BcnJheX1cbiAqL1xuY29uc3QgdG9BcnJheSA9ICh0aGluZykgPT4ge1xuICBpZiAoIXRoaW5nKSByZXR1cm4gbnVsbDtcbiAgaWYgKGlzQXJyYXkodGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGxldCBpID0gdGhpbmcubGVuZ3RoO1xuICBpZiAoIWlzTnVtYmVyKGkpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGFycltpXSA9IHRoaW5nW2ldO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNraW5nIGlmIHRoZSBVaW50OEFycmF5IGV4aXN0cyBhbmQgaWYgaXQgZG9lcywgaXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZVxuICogdGhpbmcgcGFzc2VkIGluIGlzIGFuIGluc3RhbmNlIG9mIFVpbnQ4QXJyYXlcbiAqXG4gKiBAcGFyYW0ge1R5cGVkQXJyYXl9XG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuY29uc3QgaXNUeXBlZEFycmF5ID0gKChUeXBlZEFycmF5KSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiAodGhpbmcpID0+IHtcbiAgICByZXR1cm4gVHlwZWRBcnJheSAmJiB0aGluZyBpbnN0YW5jZW9mIFR5cGVkQXJyYXk7XG4gIH07XG59KSh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2V0UHJvdG90eXBlT2YoVWludDhBcnJheSkpO1xuXG4vKipcbiAqIEZvciBlYWNoIGVudHJ5IGluIHRoZSBvYmplY3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGtleSBhbmQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggZW50cnkuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGZvckVhY2hFbnRyeSA9IChvYmosIGZuKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRvciA9IG9iaiAmJiBvYmpbaXRlcmF0b3JdO1xuXG4gIGNvbnN0IF9pdGVyYXRvciA9IGdlbmVyYXRvci5jYWxsKG9iaik7XG5cbiAgbGV0IHJlc3VsdDtcblxuICB3aGlsZSAoKHJlc3VsdCA9IF9pdGVyYXRvci5uZXh0KCkpICYmICFyZXN1bHQuZG9uZSkge1xuICAgIGNvbnN0IHBhaXIgPSByZXN1bHQudmFsdWU7XG4gICAgZm4uY2FsbChvYmosIHBhaXJbMF0sIHBhaXJbMV0pO1xuICB9XG59O1xuXG4vKipcbiAqIEl0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIGFuZCBhIHN0cmluZywgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBtYXRjaGVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZ0V4cCAtIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXk8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG1hdGNoQWxsID0gKHJlZ0V4cCwgc3RyKSA9PiB7XG4gIGxldCBtYXRjaGVzO1xuICBjb25zdCBhcnIgPSBbXTtcblxuICB3aGlsZSAoKG1hdGNoZXMgPSByZWdFeHAuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIGFyci5wdXNoKG1hdGNoZXMpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qIENoZWNraW5nIGlmIHRoZSBraW5kT2ZUZXN0IGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB3aGVuIHBhc3NlZCBhbiBIVE1MRm9ybUVsZW1lbnQuICovXG5jb25zdCBpc0hUTUxGb3JtID0ga2luZE9mVGVzdCgnSFRNTEZvcm1FbGVtZW50Jyk7XG5cbmNvbnN0IHRvQ2FtZWxDYXNlID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWy1fXFxzXShbYS16XFxkXSkoXFx3KikvZywgZnVuY3Rpb24gcmVwbGFjZXIobSwgcDEsIHAyKSB7XG4gICAgcmV0dXJuIHAxLnRvVXBwZXJDYXNlKCkgKyBwMjtcbiAgfSk7XG59O1xuXG5jb25zdCB7IHByb3BlcnR5SXNFbnVtZXJhYmxlIH0gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNSZWdFeHAgPSBraW5kT2ZUZXN0KCdSZWdFeHAnKTtcblxuY29uc3QgcmVkdWNlRGVzY3JpcHRvcnMgPSAob2JqLCByZWR1Y2VyKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKTtcbiAgY29uc3QgcmVkdWNlZERlc2NyaXB0b3JzID0ge307XG5cbiAgZm9yRWFjaChkZXNjcmlwdG9ycywgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICBsZXQgcmV0O1xuICAgIGlmICgocmV0ID0gcmVkdWNlcihkZXNjcmlwdG9yLCBuYW1lLCBvYmopKSAhPT0gZmFsc2UpIHtcbiAgICAgIHJlZHVjZWREZXNjcmlwdG9yc1tuYW1lXSA9IHJldCB8fCBkZXNjcmlwdG9yO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqLCByZWR1Y2VkRGVzY3JpcHRvcnMpO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhbGwgbWV0aG9kcyByZWFkLW9ubHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5jb25zdCBmcmVlemVNZXRob2RzID0gKG9iaikgPT4ge1xuICByZWR1Y2VEZXNjcmlwdG9ycyhvYmosIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgLy8gc2tpcCByZXN0cmljdGVkIHByb3BzIGluIHN0cmljdCBtb2RlXG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSAmJiBbJ2FyZ3VtZW50cycsICdjYWxsZXInLCAnY2FsbGVlJ10uaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybjtcblxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCd3cml0YWJsZScgaW4gZGVzY3JpcHRvcikge1xuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcihcIkNhbiBub3QgcmV3cml0ZSByZWFkLW9ubHkgbWV0aG9kICdcIiArIG5hbWUgKyBcIidcIik7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGFycmF5IG9yIGEgZGVsaW1pdGVkIHN0cmluZyBpbnRvIGFuIG9iamVjdCBzZXQgd2l0aCB2YWx1ZXMgYXMga2V5cyBhbmQgdHJ1ZSBhcyB2YWx1ZXMuXG4gKiBVc2VmdWwgZm9yIGZhc3QgbWVtYmVyc2hpcCBjaGVja3MuXG4gKlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGFycmF5T3JTdHJpbmcgLSBUaGUgYXJyYXkgb3Igc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVsaW1pdGVyIC0gVGhlIGRlbGltaXRlciB0byB1c2UgaWYgaW5wdXQgaXMgYSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBrZXlzIGZyb20gdGhlIGFycmF5IG9yIHN0cmluZywgdmFsdWVzIHNldCB0byB0cnVlLlxuICovXG5jb25zdCB0b09iamVjdFNldCA9IChhcnJheU9yU3RyaW5nLCBkZWxpbWl0ZXIpID0+IHtcbiAgY29uc3Qgb2JqID0ge307XG5cbiAgY29uc3QgZGVmaW5lID0gKGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgb2JqW3ZhbHVlXSA9IHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgaXNBcnJheShhcnJheU9yU3RyaW5nKSA/IGRlZmluZShhcnJheU9yU3RyaW5nKSA6IGRlZmluZShTdHJpbmcoYXJyYXlPclN0cmluZykuc3BsaXQoZGVsaW1pdGVyKSk7XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY29uc3QgdG9GaW5pdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUoKHZhbHVlID0gK3ZhbHVlKSkgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn07XG5cbi8qKlxuICogSWYgdGhlIHRoaW5nIGlzIGEgRm9ybURhdGEgb2JqZWN0LCByZXR1cm4gdHJ1ZSwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1NwZWNDb21wbGlhbnRGb3JtKHRoaW5nKSB7XG4gIHJldHVybiAhIShcbiAgICB0aGluZyAmJlxuICAgIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJlxuICAgIHRoaW5nW3RvU3RyaW5nVGFnXSA9PT0gJ0Zvcm1EYXRhJyAmJlxuICAgIHRoaW5nW2l0ZXJhdG9yXVxuICApO1xufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGNvbnZlcnRzIGFuIG9iamVjdCB0byBhIEpTT04tY29tcGF0aWJsZSBvYmplY3QsIGhhbmRsaW5nIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIEJ1ZmZlcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBKU09OLWNvbXBhdGlibGUgb2JqZWN0LlxuICovXG5jb25zdCB0b0pTT05PYmplY3QgPSAob2JqKSA9PiB7XG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgV2Vha1NldCgpO1xuXG4gIGNvbnN0IHZpc2l0ID0gKHNvdXJjZSkgPT4ge1xuICAgIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBpZiAodmlzaXRlZC5oYXMoc291cmNlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vQnVmZmVyIGNoZWNrXG4gICAgICBpZiAoaXNCdWZmZXIoc291cmNlKSkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoISgndG9KU09OJyBpbiBzb3VyY2UpKSB7XG4gICAgICAgIC8vIGFkZC1vbiBkZXNjZW50IC8gZGVsZXRlLW9uLWFzY2VudDogcHJlc2VydmVzIHBhdGggc2VtYW50aWNzLCBzbyBEQUcgbm9kZXMgc2VyaWFsaXNlIGF0IGV2ZXJ5IG9jY3VycmVuY2UgKHNlZSAjNzIzMCkuXG4gICAgICAgIHZpc2l0ZWQuYWRkKHNvdXJjZSk7XG5cbiAgICAgICAgbGV0IHRhcmdldDtcblxuICAgICAgICBpZiAoaXNTZXQoc291cmNlKSkge1xuICAgICAgICAgIHRhcmdldCA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2Ygc291cmNlKSB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VkVmFsdWUgPSB2aXNpdCh2YWx1ZSk7XG4gICAgICAgICAgICAhaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSAmJiB0YXJnZXQucHVzaChyZWR1Y2VkVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQgPSBpc0FycmF5KHNvdXJjZSkgPyBbXSA6IHt9O1xuXG4gICAgICAgICAgZm9yRWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VkVmFsdWUgPSB2aXNpdCh2YWx1ZSk7XG4gICAgICAgICAgICAhaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSAmJiAodGFyZ2V0W2tleV0gPSByZWR1Y2VkVmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlzaXRlZC5kZWxldGUoc291cmNlKTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH07XG5cbiAgcmV0dXJuIHZpc2l0KG9iaik7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhbiBhc3luYyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIC0gVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBhc3luYyBmdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlLlxuICovXG5jb25zdCBpc0FzeW5jRm4gPSBraW5kT2ZUZXN0KCdBc3luY0Z1bmN0aW9uJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIHRoZW5hYmxlIChoYXMgdGhlbiBhbmQgY2F0Y2ggbWV0aG9kcykuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyAtIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgdGhlbmFibGUsIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuY29uc3QgaXNUaGVuYWJsZSA9ICh0aGluZykgPT5cbiAgdGhpbmcgJiZcbiAgKGlzT2JqZWN0KHRoaW5nKSB8fCBpc0Z1bmN0aW9uKHRoaW5nKSkgJiZcbiAgaXNGdW5jdGlvbih0aGluZy50aGVuKSAmJlxuICBpc0Z1bmN0aW9uKHRoaW5nLmNhdGNoKTtcblxuLy8gb3JpZ2luYWwgY29kZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0RpZ2l0YWxCcmFpbkpTL0F4aW9zUHJvbWlzZS9ibG9iLzE2ZGVhYjEzNzEwZWMwOTc3OTkyMjEzMWYzZmE1OTU0MzIwZjgzYWIvbGliL3V0aWxzLmpzI0wxMS1MMzRcblxuLyoqXG4gKiBQcm92aWRlcyBhIGNyb3NzLXBsYXRmb3JtIHNldEltbWVkaWF0ZSBpbXBsZW1lbnRhdGlvbi5cbiAqIFVzZXMgbmF0aXZlIHNldEltbWVkaWF0ZSBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBmYWxscyBiYWNrIHRvIHBvc3RNZXNzYWdlIG9yIHNldFRpbWVvdXQuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzZXRJbW1lZGlhdGVTdXBwb3J0ZWQgLSBXaGV0aGVyIHNldEltbWVkaWF0ZSBpcyBzdXBwb3J0ZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBvc3RNZXNzYWdlU3VwcG9ydGVkIC0gV2hldGhlciBwb3N0TWVzc2FnZSBpcyBzdXBwb3J0ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gc2NoZWR1bGUgYSBjYWxsYmFjayBhc3luY2hyb25vdXNseS5cbiAqL1xuY29uc3QgX3NldEltbWVkaWF0ZSA9ICgoc2V0SW1tZWRpYXRlU3VwcG9ydGVkLCBwb3N0TWVzc2FnZVN1cHBvcnRlZCkgPT4ge1xuICBpZiAoc2V0SW1tZWRpYXRlU3VwcG9ydGVkKSB7XG4gICAgcmV0dXJuIHNldEltbWVkaWF0ZTtcbiAgfVxuXG4gIHJldHVybiBwb3N0TWVzc2FnZVN1cHBvcnRlZFxuICAgID8gKCh0b2tlbiwgY2FsbGJhY2tzKSA9PiB7XG4gICAgICAgIF9nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgKHsgc291cmNlLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IF9nbG9iYWwgJiYgZGF0YSA9PT0gdG9rZW4pIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2tzLmxlbmd0aCAmJiBjYWxsYmFja3Muc2hpZnQoKSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKGNiKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICAgIF9nbG9iYWwucG9zdE1lc3NhZ2UodG9rZW4sICcqJyk7XG4gICAgICAgIH07XG4gICAgICB9KShgYXhpb3NAJHtNYXRoLnJhbmRvbSgpfWAsIFtdKVxuICAgIDogKGNiKSA9PiBzZXRUaW1lb3V0KGNiKTtcbn0pKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicsIGlzRnVuY3Rpb24oX2dsb2JhbC5wb3N0TWVzc2FnZSkpO1xuXG4vKipcbiAqIFNjaGVkdWxlcyBhIG1pY3JvdGFzayBvciBhc3luY2hyb25vdXMgY2FsbGJhY2sgYXMgc29vbiBhcyBwb3NzaWJsZS5cbiAqIFVzZXMgcXVldWVNaWNyb3Rhc2sgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgZmFsbHMgYmFjayB0byBwcm9jZXNzLm5leHRUaWNrIG9yIF9zZXRJbW1lZGlhdGUuXG4gKlxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5jb25zdCBhc2FwID1cbiAgdHlwZW9mIHF1ZXVlTWljcm90YXNrICE9PSAndW5kZWZpbmVkJ1xuICAgID8gcXVldWVNaWNyb3Rhc2suYmluZChfZ2xvYmFsKVxuICAgIDogKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5leHRUaWNrKSB8fCBfc2V0SW1tZWRpYXRlO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKipcblxuY29uc3QgaXNJdGVyYWJsZSA9ICh0aGluZykgPT4gdGhpbmcgIT0gbnVsbCAmJiBpc0Z1bmN0aW9uKHRoaW5nW2l0ZXJhdG9yXSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgaXRlcmFibGUgdmlhIGFuIGl0ZXJhdG9yIHRoYXQgaXMgTk9UIHNvdXJjZWQgc29sZWx5XG4gKiBmcm9tIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS4gVXNlIHRoaXMgaW5zdGVhZCBvZiBgaXNJdGVyYWJsZWAgd2hlbmV2ZXJcbiAqIHRoZSBpdGVyYWJsZSBjb21lcyBmcm9tIHVudHJ1c3RlZCBpbnB1dCAoZS5nLiB1c2VyLXN1cHBsaWVkIGhlYWRlciBzb3VyY2VzKSxcbiAqIHNvIGBPYmplY3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSAuLi5gIGNhbm5vdCB0dXJuIGFuIG9yZGluYXJ5IG9iamVjdFxuICogaW50byBhbiBhdHRhY2tlci1jb250cm9sbGVkIGVudHJpZXMgaXRlcmF0b3IuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGhhcyBhIG5vbi1wb2xsdXRlZCBpdGVyYXRvclxuICovXG5jb25zdCBpc1NhZmVJdGVyYWJsZSA9ICh0aGluZykgPT5cbiAgdGhpbmcgIT0gbnVsbCAmJiBoYXNPd25JblByb3RvdHlwZUNoYWluKHRoaW5nLCBpdGVyYXRvcikgJiYgaXNJdGVyYWJsZSh0aGluZyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXIsXG4gIGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzRW1wdHlPYmplY3QsXG4gIGlzUmVhZGFibGVTdHJlYW0sXG4gIGlzUmVxdWVzdCxcbiAgaXNSZXNwb25zZSxcbiAgaXNIZWFkZXJzLFxuICBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlLFxuICBpc0ZpbGUsXG4gIGlzUmVhY3ROYXRpdmVCbG9iLFxuICBpc1JlYWN0TmF0aXZlLFxuICBpc0Jsb2IsXG4gIGlzUmVnRXhwLFxuICBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzVHlwZWRBcnJheSxcbiAgaXNGaWxlTGlzdCxcbiAgZm9yRWFjaCxcbiAgbWVyZ2UsXG4gIGV4dGVuZCxcbiAgdHJpbSxcbiAgc3RyaXBCT00sXG4gIGluaGVyaXRzLFxuICB0b0ZsYXRPYmplY3QsXG4gIGtpbmRPZixcbiAga2luZE9mVGVzdCxcbiAgZW5kc1dpdGgsXG4gIHRvQXJyYXksXG4gIGZvckVhY2hFbnRyeSxcbiAgbWF0Y2hBbGwsXG4gIGlzSFRNTEZvcm0sXG4gIGhhc093blByb3BlcnR5LFxuICBoYXNPd25Qcm9wOiBoYXNPd25Qcm9wZXJ0eSwgLy8gYW4gYWxpYXMgdG8gYXZvaWQgRVNMaW50IG5vLXByb3RvdHlwZS1idWlsdGlucyBkZXRlY3Rpb25cbiAgaGFzT3duSW5Qcm90b3R5cGVDaGFpbixcbiAgZ2V0U2FmZVByb3AsXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIGlzU3BlY0NvbXBsaWFudEZvcm0sXG4gIHRvSlNPTk9iamVjdCxcbiAgaXNBc3luY0ZuLFxuICBpc1RoZW5hYmxlLFxuICBzZXRJbW1lZGlhdGU6IF9zZXRJbW1lZGlhdGUsXG4gIGFzYXAsXG4gIGlzSXRlcmFibGUsXG4gIGlzU2FmZUl0ZXJhYmxlLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuaW1wb3J0IHsgU2lnblVwRm9ybSB9IGZyb20gJy4vY29tcG9uZW50cy9TaWduVXBGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55Pikge1xyXG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlPCdsb2dpbicgfCAnc2lnbnVwJz4oJ2xvZ2luJyk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8eyBlbWFpbDogc3RyaW5nOyBjcmVkaXRzOiBudW1iZXI7IHRva2VuOiBzdHJpbmcgfSB8IG51bGw+KG51bGwpO1xyXG5cclxuICAvLyDYp9mE2KrYo9mD2K8g2YXZhdinINil2LDYpyDZg9in2YYg2KfZhNmF2LPYqtiu2K/ZhSDZhdiz2KzZhCDYr9iu2YjZhCDYqNin2YTZgdi52YQg2LnZhtivINmB2KrYrSDYp9mE2KrYt9io2YrZglxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgaWYgKHNhdmVkVXNlcikge1xyXG4gICAgICBzZXRVc2VyKEpTT04ucGFyc2Uoc2F2ZWRVc2VyKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIHNldFZpZXcoJ2xvZ2luJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWF1dGggamltdS13aWRnZXRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgYm9yZGVyUmFkaXVzOiAnOHB4JywgYm94U2hhZG93OiAnMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKScgfX0+XHJcbiAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgIC8vINmB2Yog2K3Yp9mE2Kkg2KrYs9is2YrZhCDYp9mE2K/YrtmI2YTYjCDZitiq2YUg2LnYsdi2INin2YTYsdi12YrYryDZiNiy2LEg2KfZhNiu2LHZiNisXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcsIGRpcmVjdGlvbjogJ3J0bCcgfX0+XHJcbiAgICAgICAgICA8aDQ+2YXYsdit2KjYp9mL2Iwge3VzZXIuZW1haWx9IPCfkYs8L2g0PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxNXB4IDAnLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJyNmMGY0ZjgnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19PlxyXG4gICAgICAgICAgICA8c3Bhbj7Yp9mE2LHYtdmK2K8g2KfZhNmF2KrYqNmC2Yog2YTZhNiq2K3ZhNmK2YTYp9iqOiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6IHVzZXIuY3JlZGl0cyA+IDAgPyAnIzI4YTc0NScgOiAnI2RjMzU0NScsIGZvbnRTaXplOiAnMS4ycmVtJyB9fT5cclxuICAgICAgICAgICAgICB7dXNlci5jcmVkaXRzfSDZhdit2KfZiNmE2KfYqlxyXG4gICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7dXNlci5jcmVkaXRzID09PSAwICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2ZmYzEwNycsIGJvcmRlcjogJ25vbmUnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICDwn5KzINi02LHYp9ihINio2KfZgtipINis2K/Zitiv2KlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2RjMzU0NScsIGNvbG9yOiAnI2ZmZicsIGJvcmRlcjogJ25vbmUnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19PlxyXG4gICAgICAgICAgICDYqtiz2KzZitmEINin2YTYrtix2YjYrFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgLy8g2YHZiiDYrdin2YTYqSDYudiv2YUg2KrYs9is2YrZhCDYp9mE2K/YrtmI2YTYjCDZitiq2YUg2KfZhNiq2KjYr9mK2YQg2KjZitmGIExvZ2luINmIIFNpZ25VcFxyXG4gICAgICAgIHZpZXcgPT09ICdsb2dpbicgPyAoXHJcbiAgICAgICAgICA8TG9naW5Gb3JtIFxyXG4gICAgICAgICAgICBvbkxvZ2luU3VjY2Vzcz17KHVzZXJEYXRhKSA9PiBzZXRVc2VyKHVzZXJEYXRhKX0gXHJcbiAgICAgICAgICAgIHN3aXRjaFRvU2lnblVwPXsoKSA9PiBzZXRWaWV3KCdzaWdudXAnKX0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U2lnblVwRm9ybSBcclxuICAgICAgICAgICAgc3dpdGNoVG9Mb2dpbj17KCkgPT4gc2V0VmlldygnbG9naW4nKX0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9