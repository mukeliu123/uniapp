import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js'

Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		env:'test', //当前环境
		userInfo:uni.getStorageSync('userInfo') || null,
		token:uni.getStorageSync('token') || null,
	},
	getters,
	mutations:{
		SET_LOGIN:(state, res)=>{
			state.token = res.token;
			state.userInfo = res.userInfo;
		},
		CLEAR_LOGIN:(state, bool)=>{
			state.hasLogin = false;
			state.userInfo = null;
		},
	},
	actions:{
		//登录
		login({commit}, data){
			return new Promise((resolve, reject)=>{
				commit('SET_LOGIN', data);
				uni.setStorage({
					key:'userInfo',
					data:data.userInfo,
					success:function(){
						uni.setStorage({
							key:'token',
							data:data.token,
							success:function(){
								resolve('login:complete');
							}
						})
					}
				})
			});
		},
		//登出
		loginOut({commit}, data){
			uni.removeStorage({
				key:'userInfo'
			});
			commit('CLEAR_LOGIN');
		}
	}
});

export default store;