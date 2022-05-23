webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/*! exports provided: default, loadMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Movie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMovie\", function() { return loadMovie; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/esm/index.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axiosConfig */ \"./axiosConfig.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar _jsxFileName = \"/Users/administrators/Desktop/\\u62C9\\u94A9/React\\u8FDB\\u9636\\u4E0E\\u5B9E\\u6218\\uFF08\\u4E09\\uFF09/9-Next/code/movie/components/Movie.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Movie(_ref) {\n  var _this = this;\n\n  var data = _ref.data,\n      title = _ref.title;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    maxW: 1200,\n    mx: \"auto\",\n    mt: \"20px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"HStack\"], {\n    fontSize: \"24px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdMovie\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h3\",\n    fontSize: \"24px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, title)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"HStack\"], {\n    mt: \"20px\",\n    spacing: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, data.map(function (movie) {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      w: 290,\n      key: movie.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n      src: movie.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      mt: \"10px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, movie.title));\n  })));\n}\n_c = Movie;\nfunction loadMovie() {\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/api/movie\", {\n    baseURL: _axiosConfig__WEBPACK_IMPORTED_MODULE_4__[\"baseURL\"]\n  });\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Movie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vdmllLmpzP2U2OTciXSwibmFtZXMiOlsiTW92aWUiLCJkYXRhIiwidGl0bGUiLCJtYXAiLCJtb3ZpZSIsImlkIiwidXJsIiwibG9hZE1vdmllIiwiYXhpb3MiLCJnZXQiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLEtBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDN0MsU0FDRSwwREFBQyxtREFBRDtBQUFLLFFBQUksRUFBRSxJQUFYO0FBQWlCLE1BQUUsRUFBQyxNQUFwQjtBQUEyQixNQUFFLEVBQUMsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLHNEQUFEO0FBQVEsWUFBUSxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSwwREFBQyx1REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFlBQVEsRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLEtBREgsQ0FGRixDQURGLEVBT0UsMERBQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsTUFBWDtBQUFrQixXQUFPLEVBQUUsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFBQyxLQUFLO0FBQUEsV0FDYiwwREFBQyxtREFBRDtBQUFLLE9BQUMsRUFBRSxHQUFSO0FBQWEsU0FBRyxFQUFFQSxLQUFLLENBQUNDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSwwREFBQyxxREFBRDtBQUFPLFNBQUcsRUFBRUQsS0FBSyxDQUFDRSxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSwwREFBQyxvREFBRDtBQUFNLFFBQUUsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0YsS0FBSyxDQUFDRixLQURULENBRkYsQ0FEYTtBQUFBLEdBQWQsQ0FESCxDQVBGLENBREY7QUFvQkQ7S0FyQnVCRixLO0FBdUJqQixTQUFTTyxTQUFULEdBQXFCO0FBQzFCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxZQUFWLEVBQXdCO0FBQUVDLFdBQU8sRUFBUEEsb0RBQU9BO0FBQVQsR0FBeEIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb3ZpZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZywgSFN0YWNrLCBJbWFnZSwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IE1kTW92aWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tIFwiLi4vYXhpb3NDb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWUoeyBkYXRhLCB0aXRsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBtYXhXPXsxMjAwfSBteD1cImF1dG9cIiBtdD1cIjIwcHhcIj5cbiAgICAgIDxIU3RhY2sgZm9udFNpemU9XCIyNHB4XCI+XG4gICAgICAgIDxNZE1vdmllIC8+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBmb250U2l6ZT1cIjI0cHhcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDwvSFN0YWNrPlxuICAgICAgPEhTdGFjayBtdD1cIjIwcHhcIiBzcGFjaW5nPXszfT5cbiAgICAgICAge2RhdGEubWFwKG1vdmllID0+IChcbiAgICAgICAgICA8Qm94IHc9ezI5MH0ga2V5PXttb3ZpZS5pZH0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXttb3ZpZS51cmx9IC8+XG4gICAgICAgICAgICA8VGV4dCBtdD1cIjEwcHhcIj5cbiAgICAgICAgICAgICAge21vdmllLnRpdGxlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvSFN0YWNrPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1vdmllKCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9tb3ZpZVwiLCB7IGJhc2VVUkwgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Movie.js\n");

/***/ })

})