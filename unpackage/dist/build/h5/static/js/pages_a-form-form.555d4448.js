(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_a-form-form"],{"1f45":function(t,e,n){var i=n("f803");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("968809e6",i,!0,{sourceMap:!1,shadowMode:!1})},"4cc5":function(t,e,n){"use strict";function i(){var t=uni.getStorageSync("token");return!!t||(uni.removeStorageSync("token"),!1)}Object.defineProperty(e,"__esModule",{value:!0}),e.verifyTokenStorage=i},5352:function(t,e,n){"use strict";var i=n("1f45"),a=n.n(i);a.a},"572f":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d4ec")),o=i(n("bee2")),u=i(n("ade3")),l=i(n("8bb3")),c=i(n("4a8d")),r="test"===c.default.state.env?l.default.TEST_ENV:l.default.ENV,s=function(){function e(){(0,a.default)(this,e),(0,u.default)(this,"携带令牌去服务器校验令牌",void 0),this.baseUrl=r}return(0,o.default)(e,[{key:"verifyTokenStorage",value:function(){var t=uni.getStorageSync("token");t?this.verifyTokenFromServer(t):(uni.removeStorageSync("token"),this.getTokenFromServe())}},{key:"getTokenFromServe",value:function(){t.log("get token"),uni.login({provider:"weixin",success:function(e){t.log(e)}})}},{key:"verifyTokenFromServer",value:function(e){t.log("verify token")}}]),e}(),v=s;e.default=v}).call(this,n("5a52")["default"])},6364:function(t,e,n){"use strict";n.r(e);var i=n("8eae"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8eae":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("4160"),n("c975"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("572f"));var a=n("4cc5"),o={data:function(){return{form:{},checkboxsShow:!1,checkboxsChecked:["USA","CHN"],checkboxs:[{value:"USA",name:"美国"},{value:"CHN",name:"中国"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}],radios:[{value:1,name:1},{value:2,name:2},{value:3,name:3}],currentRadioValue:1,radiosShow:!1,switchFlag:!0,textareaValue:"",pickers:["中国","美国","巴西","日本"],pickerIndex:0}},onLoad:function(e){t.log("进入form onload")},onShow:function(){t.log("进入form onshow"),this.checkboxInit(),this.radioGroupInit()},methods:{pickerChange:function(e){t.log(e.detail),this.pickerIndex=1*e.detail.value},switchChange:function(e){t.log(e.detail.value)},sliderChange:function(e){t.log(e)},radioGroupInit:function(){var t=this;this.radiosShow=!1,setTimeout((function(e){t.radiosShow=!0}),100)},radioGroupChange:function(e){t.log(e.detail.value)},inputTestBlur:function(e){t.log(e.detail.value)},inputReadIn:function(e){t.log(e.detail.value)},checkboxInit:function(){var t=this;this.checkboxsShow=!1,setTimeout((function(e){t.checkboxs.forEach((function(e){t.checkboxsChecked.indexOf(e.value)>=0&&(e.checked=!0)})),t.checkboxsShow=!0}),100)},checkboxChange:function(e){t.log(e)},leftNavTap:function(){t.log(1)},getuserinfo:function(e){t.log(e)},getPhoneNumber:function(e){t.log(e)},openSetting:function(){t.log("openSetting:ok"),uni.openSetting({success:function(e){t.log(e)},fail:function(e){t.log(e)}})},getSetting:function(){uni.getSetting({success:function(e){t.log(e.authSetting)},fail:function(e){t.log(e)}})},goLogin:function(){(0,a.verifyTokenStorage)()?t.log("login:ok"):(t.log("需要登录"),uni.navigateTo({url:"/pages/auth/auth"}))},goList:function(){uni.navigateTo({url:"/pages_a/list/list"})}}};e.default=o}).call(this,n("5a52")["default"])},d464:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniNavBar:n("a7cf").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"form"},[n("uni-nav-bar",{attrs:{fixed:!0,"background-color":"#d81e06",color:"#fff","status-bar":!0},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.leftNavTap.apply(void 0,arguments)}}},[n("v-uni-view",[t._v("表单")]),n("v-uni-view",{attrs:{slot:"left"},slot:"left"},[n("v-uni-text",{staticClass:"iconfont icon-houtui"})],1),n("v-uni-view",{attrs:{slot:"right"},slot:"right"})],1),n("v-uni-view",{staticClass:"form-box"},[n("v-uni-view",{staticClass:"title"},[t._v("button")]),n("v-uni-button",{attrs:{type:"primary","open-type":"getUserInfo"},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)}}},[t._v("getUserInfo")]),n("v-uni-button",{attrs:{type:"primary","open-type":"getPhoneNumber"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getPhoneNumber.apply(void 0,arguments)}}},[t._v("getPhoneNumber")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSetting.apply(void 0,arguments)}}},[t._v("openSetting")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getSetting.apply(void 0,arguments)}}},[t._v("getSetting")]),n("v-uni-view",{staticClass:"title"},[t._v("登录相关")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLogin.apply(void 0,arguments)}}},[t._v("买东西(必须登录)")]),n("v-uni-view",{staticClass:"title"},[t._v("跳转")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goList.apply(void 0,arguments)}}},[t._v("前往列表")]),n("v-uni-view",{staticClass:"title"},[t._v("checkbox")]),t.checkboxs.length&&t.checkboxsShow?n("v-uni-view",{staticClass:"checkbox-list"},[n("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.checkboxs,(function(e){return n("v-uni-label",{key:e.value},[n("v-uni-view",[n("v-uni-checkbox",{attrs:{value:e.value,checked:e.checked}})],1),n("v-uni-view",[t._v(t._s(e.name))])],1)})),1)],1):t._e(),n("v-uni-view",{staticClass:"title"},[t._v("input")]),n("v-uni-view",{staticClass:"input-container"},[n("v-uni-input",{staticClass:"uni-input",attrs:{focus:!0,placeholder:"自动获得焦点"}}),n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"10",placeholder:"最大输入长度为10"}}),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"这是一个数字输入框"}}),n("v-uni-input",{staticClass:"uni-input",attrs:{password:!0,type:"text",placeholder:"这是一个密码输入框"}}),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"测试input事件"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputReadIn.apply(void 0,arguments)}}}),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"测试blur事件"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputTestBlur.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"title"},[t._v("radio")]),n("v-uni-view",{staticClass:"radio-container"},[t.radiosShow?n("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioGroupChange.apply(void 0,arguments)}}},t._l(t.radios,(function(e,i){return n("v-uni-label",{key:e.value},[n("v-uni-view",[n("v-uni-radio",{attrs:{value:e.value,checked:e.value===t.currentRadioValue}})],1),n("v-uni-view",[t._v(t._s(e.name))])],1)})),1):t._e()],1),n("v-uni-view",{staticClass:"title"},[t._v("slider")]),n("v-uni-view",[n("v-uni-slider",{attrs:{value:"60",min:"1",max:"100","show-value":!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sliderChange.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"title"},[t._v("switch")]),n("v-uni-view",[n("v-uni-switch",{attrs:{checked:t.switchFlag},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"title"},[t._v("textarea")]),n("v-uni-view",[n("v-uni-textarea",{attrs:{value:t.textareaValue,placeholder:"请输入多行文本框",maxlength:"100"}})],1)],1)],1)},o=[]},dbaa:function(t,e,n){"use strict";n.r(e);var i=n("d464"),a=n("6364");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("5352");var u,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"5ca2d24d",null,!1,i["a"],u);e["default"]=c.exports},f803:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".form-box[data-v-5ca2d24d]{padding:%?20?%}.form-box .title[data-v-5ca2d24d]{font-size:%?32?%;padding:%?10?% 0}.form-box uni-button[data-v-5ca2d24d]{margin-bottom:%?10?%}.form-box .checkbox-list[data-v-5ca2d24d]{width:100%}.form-box .checkbox-list uni-label[data-v-5ca2d24d]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-bottom:%?10?%}.form-box .radio-container[data-v-5ca2d24d]{width:100%}.form-box .radio-container uni-label[data-v-5ca2d24d]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-bottom:%?10?%}",""]),t.exports=e}}]);