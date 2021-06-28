webpackHotUpdate("main",{

/***/ "./src/components/main/product-content/content/second/SecondPlusButton.jsx":
/*!*********************************************************************************!*\
  !*** ./src/components/main/product-content/content/second/SecondPlusButton.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_GlobalProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/GlobalProvider */ "./src/components/util/GlobalProvider.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ihangeul/mezoo/src/components/main/product-content/content/second/SecondPlusButton.jsx",
    _s = __webpack_require__.$Refresh$.signature();







const SecondPlusButton = () => {
  _s();

  const {
    globalState,
    globalDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_util_GlobalProvider__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]);
  const {
    show,
    x,
    y
  } = globalState.mousePoint;

  const onShowTextBox = e => {
    const value = e.type === 'mouseenter' ? 2 : 0;
    globalDispatch({
      type: 'mousePointChange',
      payload: {
        show: value,
        x: x,
        y: y
      }
    });
  };

  const onMouseMove = e => {
    globalDispatch({
      type: 'mousePointChange',
      payload: {
        show: show,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StyledSecondPlusButton, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_fc__WEBPACK_IMPORTED_MODULE_1__["FcPlus"], {
      onMouseEnter: onShowTextBox,
      onMouseLeave: onShowTextBox,
      onMouseMove: onMouseMove
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), show === 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SecondContent, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 28
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

_s(SecondPlusButton, "fPYhlyscCyyrLT+AKqRo0PoZ108=");

_c = SecondPlusButton;
/* harmony default export */ __webpack_exports__["default"] = (SecondPlusButton);
const StyledSecondPlusButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: relative;

    > svg {
        border-radius: 50%;
        position:absolute;
        top:60px;
        right:-300px;

        stroke-width: 5px;
        font-size: 30px;
        stroke: #25aae1;
        > circle {
            fill : transparent;
        }
        > g {
            fill: #25aae1;
            > rect {
                &:first-child {
                    x: 23.5px;
                    width: .01px;
                }
                &:last-child {
                    y: 23.5px;
                    height: .01px;
                }
            }
        }
        &:hover {
            box-shadow: 0 0 8px #25aae1;
        }
    }
`;
_c2 = StyledSecondPlusButton;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "SecondPlusButton");
__webpack_require__.$Refresh$.register(_c2, "StyledSecondPlusButton");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.c9a058f72ec25dba423b.hot-update.js.map