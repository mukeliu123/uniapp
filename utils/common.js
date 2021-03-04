//验证token是否存在本地
export function verifyTokenStorage(){
	let token = uni.getStorageSync('token');
	if(!token){
		uni.removeStorageSync('token');   
		return false;
	} else{
		return true;
	}
}