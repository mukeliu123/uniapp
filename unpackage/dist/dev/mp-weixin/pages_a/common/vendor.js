(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages_a/common/vendor"],{

/***/ 97:
/*!****************************************************!*\
  !*** D:/hub-idea/HubPro/uniapp-02/utils/verify.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! ../env/index.js */ 16));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ../store/index.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var myEnv = _index2.default.state.env === 'test' ? _index.default.TEST_ENV : _index.default.ENV;
//Token 验证
var Token = /*#__PURE__*/function () {
  function Token() {_classCallCheck(this, Token);_defineProperty(this, "\u643A\u5E26\u4EE4\u724C\u53BB\u670D\u52A1\u5668\u6821\u9A8C\u4EE4\u724C", void 0);
    this.baseUrl = myEnv;
  }
  //校验token是否存在本地
  _createClass(Token, [{ key: "verifyTokenStorage", value: function verifyTokenStorage() {
      var token = uni.getStorageSync('token');
      if (!token) {
        uni.removeStorageSync('token');
        this.getTokenFromServe();
      } else {
        this.verifyTokenFromServer(token);
      }
    }
    //服务端获取新token
  }, { key: "getTokenFromServe", value: function getTokenFromServe() {
      console.log('get token');
      uni.login({
        provider: 'weixin',
        success: function success(r) {
          console.log(r);
        } });

    } }, { key: "verifyTokenFromServer", value: function verifyTokenFromServer(

    token) {
      console.log('verify token');
      var that = this;
    } }]);return Token;}();var _default =


Token;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 98:
/*!****************************************************!*\
  !*** D:/hub-idea/HubPro/uniapp-02/utils/common.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.verifyTokenStorage = verifyTokenStorage; //验证token是否存在本地
function verifyTokenStorage() {
  var token = uni.getStorageSync('token');
  if (!token) {
    uni.removeStorageSync('token');
    return false;
  } else {
    return true;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_a/common/vendor.js.map