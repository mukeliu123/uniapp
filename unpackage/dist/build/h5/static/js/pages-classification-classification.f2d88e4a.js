(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-classification-classification"],{"108f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".classification[data-v-1cae9d24]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.classification .cates_container[data-v-1cae9d24]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.classification .cates_container .left_menu[data-v-1cae9d24]{width:%?200?%;-webkit-flex-shrink:0;flex-shrink:0;font-size:%?30?%;color:#000;background-color:#eee}.classification .cates_container .left_menu .menu_item[data-v-1cae9d24]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.classification .cates_container .left_menu .menu_item.active[data-v-1cae9d24]{color:#d81e06;border-left:%?5?% solid #d81e06}.classification .cates_container .right_content[data-v-1cae9d24]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-top:%?10?%}.classification .cates_container .right_content .shopping_group[data-v-1cae9d24]{width:100%;margin:%?40?% auto}.classification .cates_container .right_content .shopping_group .shopping_group_title[data-v-1cae9d24]{border:1px soid red;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.classification .cates_container .right_content .shopping_group .shopping_group_title .title[data-v-1cae9d24]{margin:0 %?8?%}.classification .cates_container .right_content .shopping_group .shopping_group_list[data-v-1cae9d24]{margin-top:%?20?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.classification .cates_container .right_content .shopping_group .shopping_group_list uni-navigator[data-v-1cae9d24]{width:33.3333%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.classification .cates_container .right_content .shopping_group .shopping_group_list uni-navigator uni-image[data-v-1cae9d24]{width:90%;margin:0 auto}.classification .cates_container .right_content .shopping_group .shopping_group_list uni-navigator .shopping_name[data-v-1cae9d24]{width:100%;text-align:center;font-size:%?24?%;color:#666;margin-top:%?10?%}",""]),t.exports=i},"53df":function(t,i,e){"use strict";(function(t){e("d81d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{msg:"分类页面",leftMenuList:[],rightContent:[],currentIndex:0,scrollTop:0,scrollTopOld:0,Cates:null}},onLoad:function(i){var e=uni.getStorageSync("cates");if(t.log(e),e)if(Date.now()-e.time>1e4)this.getCates();else{this.Cates=e.data;var n=this.Cates.map((function(t){return t.cat_name})),a=this.Cates[0].children;this.leftMenuList=n,this.rightContent=a}else this.getCates()},methods:{getCates:function(){var i=this,e=(new Date).getTime();this.$request("/categories",{},"GET").then((function(n){t.log(n),i.Cates=n.data.message,uni.setStorageSync("cates",{time:e,data:n.data.message});var a=i.Cates.map((function(t){if(t.children&&t.children.length)return t.cat_name})),o=i.Cates[0].children;i.leftMenuList=a,i.rightContent=o})).catch((function(i){t.log(i)}))},handTapLeftMenu:function(t){var i=this.Cates[t].children;this.currentIndex=t,this.rightContent=i,this.scrollTop=this.scrollTopOld,this.$nextTick((function(){this.scrollTop=0}))},scrollRightContent:function(t){this.scrollTopOld=t.detail.scrollTop}}};i.default=n}).call(this,e("5a52")["default"])},5715:function(t,i,e){"use strict";e.r(i);var n=e("58ed"),a=e("87b8");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("8b37");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1cae9d24",null,!1,n["a"],s);i["default"]=r.exports},"58ed":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uniNavBar:e("a7cf").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"classification"},[e("uni-nav-bar",{attrs:{fixed:!0,"background-color":"#d81e06",color:"#fff","status-bar":!0}},[e("v-uni-view",[t._v("分类列表")]),e("v-uni-view",{attrs:{slot:"left"},slot:"left"},[e("v-uni-text",{staticClass:"iconfont icon-houtui"})],1)],1),e("v-uni-view",{staticClass:"cates_container"},[e("v-uni-scroll-view",{staticClass:"left_menu",attrs:{"scroll-y":!0}},t._l(t.leftMenuList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"menu_item",class:{active:t.currentIndex==n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handTapLeftMenu(n)}}},[t._v(t._s(i))])})),1),e("v-uni-scroll-view",{staticClass:"right_content",attrs:{"scroll-y":!0,"scroll-top":t.scrollTop},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scrollRightContent.apply(void 0,arguments)}}},t._l(t.rightContent,(function(i,n){return i.children.length?e("v-uni-view",{key:n,staticClass:"shopping_group"},[e("v-uni-view",{staticClass:"shopping_group_title"},[e("v-uni-text",{staticClass:"delimiter"},[t._v("/")]),e("v-uni-text",{staticClass:"title"},[t._v(t._s(i.cat_name))]),e("v-uni-text",{staticClass:"delimiter"},[t._v("/")])],1),e("v-uni-view",{staticClass:"shopping_group_list"},t._l(i.children,(function(i,n){return e("v-uni-navigator",{key:n},[e("v-uni-image",{attrs:{mode:"widthFix",src:i.cat_icon}}),e("v-uni-view",{staticClass:"shopping_name"},[t._v(t._s(i.cat_name))])],1)})),1)],1):t._e()})),1)],1)],1)},o=[]},"87b8":function(t,i,e){"use strict";e.r(i);var n=e("53df"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"8b37":function(t,i,e){"use strict";var n=e("ba8a"),a=e.n(n);a.a},ba8a:function(t,i,e){var n=e("108f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("39d2e3e2",n,!0,{sourceMap:!1,shadowMode:!1})}}]);