;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/nav-bar/nav-bar"],{"1ebd":function(t,n,e){"use strict";e.r(n);var i=e("c899"),a=e("33a5");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("5c6e");var u,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=c.exports},"33a5":function(t,n,e){"use strict";e.r(n);var i=e("d55b"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"5c6e":function(t,n,e){"use strict";var i=e("a0f1"),a=e.n(i);a.a},a0f1:function(t,n,e){},c899:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},d55b:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{custom:{type:Boolean,default:!1},navigationBarStyle:{type:Object,default:function(){return{background:"#000",fontColor:"#fff",iconColor:"#fff",iconText:"uni-app"}}},showBack:{type:Boolean,default:!0}},data:function(){return{normal:{background:"#000",fontColor:"#fff",iconColor:"#fff"},lineHeight:""}},mounted:function(){var n=t.getSystemInfoSync(),e=750/n.windowWidth,i={ktxStatusHeight:n.statusBarHeight*e,navigationHeight:44*e,ktxWindowWidth:n.windowWidth*e,ktxWindowHeight:n.windowHeight*e,ktxScreentHeight:n.screenHeight*e};i.tabBarHeight=i.ktxScreentHeight-i.ktxStatusHeight-i.navigationHeight-i.ktxWindowHeight,this.lineHeight=i.ktxStatusHeight+"rpx",this.$emit("getHeight",i)},methods:{backPage:function(){t.navigateBack({delta:1})}}};n.default=e}).call(this,e("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/nav-bar/nav-bar-create-component',
    {
        'components/nav-bar/nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("1ebd"))
        })
    },
    [['components/nav-bar/nav-bar-create-component']]
]);
