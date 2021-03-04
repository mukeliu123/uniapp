import env from '../env/index.js'
import store from '../store/index.js';
let myEnv = store.state.env === 'test' ? env.TEST_ENV : env.ENV;
//Token 验证
class Token {
	constructor() {
	    this.baseUrl = myEnv;
	}
	//校验token是否存在本地
	verifyTokenStorage(){
		let token = uni.getStorageSync('token');
		if(!token){
			uni.removeStorageSync('token');   
			this.getTokenFromServe();
		} else{
			this.verifyTokenFromServer(token);
		}
	}
	//服务端获取新token
	getTokenFromServe(){
		console.log('get token');
		uni.login({
			provider: 'weixin',
			success:function(r){
				console.log(r);
			}
		})
	}
	携带令牌去服务器校验令牌
	verifyTokenFromServer(token){
		console.log('verify token');
		let that = this;
	}
}

export default Token;
