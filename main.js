import Vue from 'vue'
import App from './App'
import store from 'store/index.js'
import env from './env/index.js'
import request from './api/request.js'
import uView from "uview-ui";
Vue.use(uView);

//配置vconsole - 条件配置语句 仅在H5模式生效
//#ifdef H5
// import VConsole from 'vconsole'
// const vConsole = new VConsole();
//#endif

//配置状态管理
Vue.prototype.$store = store

//配置api请求接口
Vue.prototype.$request = request

//配置环境变量 （针对于视图层调用）
if(store.state.env === 'test'){
	Vue.prototype.$env = env.TEST_ENV;
} else{
	Vue.prototype.$env = env.ENV;
}
console.log('hello world');

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
