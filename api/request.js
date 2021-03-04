//接口封装
import store from '../store/index.js';
import env from '../env/index.js';
let current_env = store.state.env === 'test' ? env.TEST_ENV : env.ENV;
// #ifdef H5
	current_env = '/v1'; /* h5 - h5单独设置根域名不同 */
	// #endif
const api_header = {
	"content-type":"application/x-www-form-urlencoded"
};
let requestTimes = 0;
const request = (url = '', data = {}, type = 'GET', header = api_header) =>{
	requestTimes++;
	uni.showLoading({
	    title: '加载中',
		mask:true
	});
	return new Promise((resolve, reject)=>{
		uni.request({
			method:type,
			url:/(http|https):\/\/([\w.]+\/?)\S*/.test(url) ? url : current_env + url,
			data:data,
			header:header,
			dataType:'json',
			success:function(res){
				console.log(res);
				resolve(res);
			},
			fail:function(err){
				console.log(err);
				reject(err);
			},
			complete:function(){
				requestTimes-- ;
				if (requestTimes === 0){
				  //关闭正在等待的loading
				   setTimeout(_=>{
					   uni.hideLoading();
				   }, 1000);
				}
			}
		});
	})
}

export default request;