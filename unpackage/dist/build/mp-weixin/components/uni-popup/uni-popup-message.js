(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-popup/uni-popup-message"],{5825:function(t,e,n){"use strict";var u=n("d3d3"),i=n.n(u);i.a},"596b":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"6c92":function(t,e,n){"use strict";n.r(e);var u=n("faa4"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},d134:function(t,e,n){"use strict";n.r(e);var u=n("596b"),i=n("6c92");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("5825");var r,a=n("f0c5"),c=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"b67d2952",null,!1,u["a"],r);e["default"]=c.exports},d3d3:function(t,e,n){},faa4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-popup/uni-popup-message-create-component',
    {
        'components/uni-popup/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d134"))
        })
    },
    [['components/uni-popup/uni-popup-message-create-component']]
]);
