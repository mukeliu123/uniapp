;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-popup/uni-popup-message"],{"7c6e":function(t,e,n){"use strict";var u=n("9ef0"),i=n.n(u);i.a},"9bc0":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"9ef0":function(t,e,n){},a243:function(t,e,n){"use strict";n.r(e);var u=n("9bc0"),i=n("bf37");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7c6e");var o,c=n("f0c5"),a=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"b67d2952",null,!1,u["a"],o);e["default"]=a.exports},b224:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=u},bf37:function(t,e,n){"use strict";n.r(e);var u=n("b224"),i=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-popup/uni-popup-message-create-component',
    {
        'components/uni-popup/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("a243"))
        })
    },
    [['components/uni-popup/uni-popup-message-create-component']]
]);
