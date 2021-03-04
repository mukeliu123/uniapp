<template>
	<view class="auth">
		<button @getphonenumber="getPhoneNumber" open-type="getPhoneNumber">一键授权</button>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			//返回上一级页面
			leftNavTap(){
				uni.navigateBack();
			},
			//获取用户手机号信息
			getPhoneNumber(e){
				if(e.detail.errMsg === "getPhoneNumber:ok"){
					setTimeout(_=>{
						uni.navigateBack();
						uni.setStorageSync('token','123');
					}, 200);
				} else{
					uni.showToast({
					    title: '请您点击进行授权',
					    duration: 2000,
						icon:'none'
					});
				}
			},
		},
		onLoad(option){
			console.log(option);
		}
	}
</script>

<style>
</style>
