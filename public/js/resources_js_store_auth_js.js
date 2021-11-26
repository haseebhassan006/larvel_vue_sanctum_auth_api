"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_store_auth_js"],{

/***/ "./resources/js/store/auth.js":
/*!************************************!*\
  !*** ./resources/js/store/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./resources/js/router.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  state: {
    authenticated: false,
    user: {}
  },
  getters: {
    authenticated: function authenticated(state) {
      return state.authenticated;
    },
    user: function user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_AUTHENTICATED: function SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
    },
    SET_USER: function SET_USER(state, value) {
      state.user = value;
    }
  },
  actions: {
    login: function login(_ref) {
      var commit = _ref.commit;
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/user').then(function (_ref2) {
        var data = _ref2.data;
        commit('SET_USER', data);
        commit('SET_AUTHENTICATED', true);
        _router__WEBPACK_IMPORTED_MODULE_1__["default"].push({
          name: 'dashboard'
        });
      })["catch"](function (_ref3) {
        var data = _ref3.response.data;
        commit('SET_USER', {});
        commit('SET_AUTHENTICATED', false);
      });
    },
    logout: function logout(_ref4) {
      var commit = _ref4.commit;
      commit('SET_USER', {});
      commit('SET_AUTHENTICATED', false);
    }
  }
});

/***/ })

}]);