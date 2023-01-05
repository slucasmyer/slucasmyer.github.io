/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@next/font/google/target.css?{\"path\":\"styles/theme.ts\",\"import\":\"Orbitron\",\"arguments\":[{\"weight\":[\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"subsets\":[\"latin\"],\"display\":\"swap\",\"fallback\":[\"Helvetica\",\"Arial\",\"sans-serif\"]}],\"variableName\":\"orbitron\"}":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@next/font/google/target.css?{"path":"styles/theme.ts","import":"Orbitron","arguments":[{"weight":["400","500","600","700","800","900"],"subsets":["latin"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"orbitron"} ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Orbitron_9a1864', '__Orbitron_Fallback_9a1864', Helvetica, Arial, sans-serif\",\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_9a1864\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz97XCJwYXRoXCI6XCJzdHlsZXMvdGhlbWUudHNcIixcImltcG9ydFwiOlwiT3JiaXRyb25cIixcImFyZ3VtZW50c1wiOlt7XCJ3ZWlnaHRcIjpbXCI0MDBcIixcIjUwMFwiLFwiNjAwXCIsXCI3MDBcIixcIjgwMFwiLFwiOTAwXCJdLFwic3Vic2V0c1wiOltcImxhdGluXCJdLFwiZGlzcGxheVwiOlwic3dhcFwiLFwiZmFsbGJhY2tcIjpbXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsXCJzYW5zLXNlcmlmXCJdfV0sXCJ2YXJpYWJsZU5hbWVcIjpcIm9yYml0cm9uXCJ9LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSxXQUFXLG9IQUFvSDtBQUMvSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2x1Y2FzbXllci5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz9kY2U0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN0eWxlXCI6IHtcImZvbnRGYW1pbHlcIjpcIidfX09yYml0cm9uXzlhMTg2NCcsICdfX09yYml0cm9uX0ZhbGxiYWNrXzlhMTg2NCcsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcImZvbnRTdHlsZVwiOlwibm9ybWFsXCJ9LFxuXHRcImNsYXNzTmFtZVwiOiBcIl9fY2xhc3NOYW1lXzlhMTg2NFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@next/font/google/target.css?{\"path\":\"styles/theme.ts\",\"import\":\"Orbitron\",\"arguments\":[{\"weight\":[\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"subsets\":[\"latin\"],\"display\":\"swap\",\"fallback\":[\"Helvetica\",\"Arial\",\"sans-serif\"]}],\"variableName\":\"orbitron\"}\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/createEmotionCache */ \"./styles/createEmotionCache.ts\");\n/* harmony import */ var utils_wasm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils.wasm */ \"./utils.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_wasm__WEBPACK_IMPORTED_MODULE_8__]);\nutils_wasm__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\nfunction MyApp(props) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.CacheProvider, {\n        value: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"initial-scale=1, width=device-width\"\n                }, void 0, false, {\n                    fileName: \"/Users/sullivanmyer/Desktop/GitHub.nosync/slucasmyer.github.io/pages/_app.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sullivanmyer/Desktop/GitHub.nosync/slucasmyer.github.io/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                        fileName: \"/Users/sullivanmyer/Desktop/GitHub.nosync/slucasmyer.github.io/pages/_app.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        utils: utils_wasm__WEBPACK_IMPORTED_MODULE_8__\n                    }, router.asPath, false, {\n                        fileName: \"/Users/sullivanmyer/Desktop/GitHub.nosync/slucasmyer.github.io/pages/_app.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sullivanmyer/Desktop/GitHub.nosync/slucasmyer.github.io/pages/_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sullivanmyer/Desktop/GitHub.nosync/slucasmyer.github.io/pages/_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDVztBQUVhO0FBQ0Q7QUFDUztBQUN6QjtBQUMwQjtBQUMzQjtBQUVuQyxNQUFNUSx5QkFBeUJGLHNFQUFrQkE7QUFNbEMsU0FBU0csTUFBTUMsS0FBaUIsRUFBRTtJQUMvQyxNQUFNQyxTQUFTVixzREFBU0E7SUFDeEIsTUFBTSxFQUFFVyxVQUFTLEVBQUVDLGNBQWVMLHVCQUFzQixFQUFFTSxVQUFTLEVBQUUsR0FBR0o7SUFDeEUscUJBQ0UsdUVBQUNOLHlEQUFhQTtRQUFDVyxPQUFPRjs7MEJBQ3BCLHVFQUFDYixrREFBSUE7MEJBQ0gscUZBQUNnQjtvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7MEJBRWhDLHVFQUFDaEIsK0RBQWFBO2dCQUFDRyxPQUFPQSxxREFBS0E7O2tDQUN6Qix1RUFBQ0Ysa0VBQVdBOzs7OztrQ0FDWix1RUFBQ1M7d0JBRUUsR0FBR0UsU0FBUzt3QkFDYkssT0FBT1osdUNBQUlBO3VCQUZOSSxPQUFPUyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQU81QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2x1Y2FzbXllci5naXRodWIuaW8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyLCBFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vc3R5bGVzL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5pbXBvcnQgKiBhcyB3YXNtIGZyb20gXCJ1dGlscy53YXNtXCI7XG5cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblxuaW50ZXJmYWNlIE15QXBwUHJvcHMgZXh0ZW5kcyBBcHBQcm9wcyB7XG4gIGVtb3Rpb25DYWNoZT86IEVtb3Rpb25DYWNoZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHM6IE15QXBwUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBDb21wb25lbnQsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAga2V5PXtyb3V0ZXIuYXNQYXRofVxuICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgICAgdXRpbHM9e3dhc219XG4gICAgICAgIC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9DYWNoZVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJDYWNoZVByb3ZpZGVyIiwidGhlbWUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJ3YXNtIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIk15QXBwIiwicHJvcHMiLCJyb3V0ZXIiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJ2YWx1ZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInV0aWxzIiwiYXNQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/createEmotionCache.ts":
/*!**************************************!*\
  !*** ./styles/createEmotionCache.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nconst isBrowser = typeof document !== \"undefined\";\nfunction createEmotionCache() {\n    let insertionPoint;\n    if (isBrowser) {\n        const emotionInsertionPoint = document.querySelector('meta[name=\"emotion-insertion-point\"]');\n        insertionPoint = emotionInsertionPoint ?? undefined;\n    }\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: \"mui-style\",\n        insertionPoint\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUV6QyxNQUFNQyxZQUFZLE9BQU9DLGFBQWE7QUFFdkIsU0FBU0MscUJBQXFCO0lBQzNDLElBQUlDO0lBRUosSUFBSUgsV0FBVztRQUNiLE1BQU1JLHdCQUF3QkgsU0FBU0ksYUFBYSxDQUNsRDtRQUVGRixpQkFBaUJDLHlCQUF5QkU7SUFDNUMsQ0FBQztJQUVELE9BQU9QLHFEQUFXQSxDQUFDO1FBQUVRLEtBQUs7UUFBYUo7SUFBZTtBQUN4RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2x1Y2FzbXllci5naXRodWIuaW8vLi9zdHlsZXMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzPzcyODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuICBsZXQgaW5zZXJ0aW9uUG9pbnQ7XG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIGNvbnN0IGVtb3Rpb25JbnNlcnRpb25Qb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE1ldGFFbGVtZW50PihcbiAgICAgICdtZXRhW25hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiXScsXG4gICAgKTtcbiAgICBpbnNlcnRpb25Qb2ludCA9IGVtb3Rpb25JbnNlcnRpb25Qb2ludCA/PyB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdtdWktc3R5bGUnLCBpbnNlcnRpb25Qb2ludCB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDYWNoZSIsImlzQnJvd3NlciIsImRvY3VtZW50IiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiaW5zZXJ0aW9uUG9pbnQiLCJlbW90aW9uSW5zZXJ0aW9uUG9pbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/createEmotionCache.ts\n");

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"orbitron\": () => (/* reexport default from dynamic */ _next_font_google_target_css_path_styles_theme_ts_import_Orbitron_arguments_weight_400_500_600_700_800_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_orbitron___WEBPACK_IMPORTED_MODULE_2___default.a)\n/* harmony export */ });\n/* harmony import */ var _next_font_google_target_css_path_styles_theme_ts_import_Orbitron_arguments_weight_400_500_600_700_800_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_orbitron___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"styles/theme.ts\",\"import\":\"Orbitron\",\"arguments\":[{\"weight\":[\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"subsets\":[\"latin\"],\"display\":\"swap\",\"fallback\":[\"Helvetica\",\"Arial\",\"sans-serif\"]}],\"variableName\":\"orbitron\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"styles/theme.ts\\\",\\\"import\\\":\\\"Orbitron\\\",\\\"arguments\\\":[{\\\"weight\\\":[\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"],\\\"subsets\\\":[\\\"latin\\\"],\\\"display\\\":\\\"swap\\\",\\\"fallback\\\":[\\\"Helvetica\\\",\\\"Arial\\\",\\\"sans-serif\\\"]}],\\\"variableName\\\":\\\"orbitron\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_styles_theme_ts_import_Orbitron_arguments_weight_400_500_600_700_800_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_orbitron___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_styles_theme_ts_import_Orbitron_arguments_weight_400_500_600_700_800_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_orbitron___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#6200ea\"\n        },\n        secondary: {\n            main: \"#03DAC5\"\n        },\n        error: {\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n        },\n        background: {\n            default: \"#263238\",\n            paper: \"#37474f\"\n        },\n        text: {\n            primary: \"#ffffff\",\n            secondary: \"#ffffff\",\n            disabled: \"#ffffff\"\n        }\n    },\n    typography: {\n        fontFamily: (_next_font_google_target_css_path_styles_theme_ts_import_Orbitron_arguments_weight_400_500_600_700_800_900_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_orbitron___WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily)\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJYUE7QUFIc0M7QUFDUjtBQVMzQywyQkFBMkI7QUFDM0IsTUFBTUcsUUFBUUYsaUVBQVdBLENBQUM7SUFDeEJHLFNBQVM7UUFDUEMsU0FBUztZQUNQQyxNQUFNO1FBQ1I7UUFDQUMsV0FBVztZQUNURCxNQUFNO1FBQ1I7UUFDQUUsT0FBTztZQUNMRixNQUFNSiwwREFBUTtRQUNoQjtRQUNBUSxZQUFZO1lBQ1ZDLFNBQVM7WUFDVEMsT0FBTztRQUNUO1FBQ0FDLE1BQU07WUFDSlIsU0FBUztZQUNURSxXQUFXO1lBQ1hPLFVBQVU7UUFDWjtJQUNGO0lBQ0FDLFlBQVk7UUFDVkMsWUFBWWhCLDBQQUF5QjtJQUN2QztBQUNGO0FBRUEsaUVBQWVHLEtBQUtBLEVBQUM7QUFsQ1JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2x1Y2FzbXllci5naXRodWIuaW8vLi9zdHlsZXMvdGhlbWUudHM/Njk2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmJpdHJvbiB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJztcbmltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xuXG5leHBvcnQgY29uc3Qgb3JiaXRyb24gPSBPcmJpdHJvbih7XG4gIHdlaWdodDogWyc0MDAnLCAnNTAwJywgJzYwMCcsICc3MDAnLCAnODAwJywgJzkwMCddLFxuICBzdWJzZXRzOiBbJ2xhdGluJ10sXG4gIGRpc3BsYXk6ICdzd2FwJyxcbiAgZmFsbGJhY2s6IFsnSGVsdmV0aWNhJywgJ0FyaWFsJywgJ3NhbnMtc2VyaWYnXSxcbn0pO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyM2MjAwZWEnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAzREFDNScsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnIzI2MzIzOCcsXG4gICAgICBwYXBlcjogJyMzNzQ3NGYnXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAnI2ZmZmZmZicsXG4gICAgICBzZWNvbmRhcnk6ICcjZmZmZmZmJyxcbiAgICAgIGRpc2FibGVkOiAnI2ZmZmZmZidcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogb3JiaXRyb24uc3R5bGUuZm9udEZhbWlseSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwibmFtZXMiOlsib3JiaXRyb24iLCJjcmVhdGVUaGVtZSIsInJlZCIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJBNDAwIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsInRleHQiLCJkaXNhYmxlZCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/theme.ts\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "./utils.wasm":
/*!********************!*\
  !*** ./utils.wasm ***!
  \********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.v(exports, module.id, "8fee06b7c552e8ce");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();