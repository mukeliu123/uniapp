<template>
	<!-- 登录页 -->
	<view class="login">
		<view class="login_content" v-if="!$store.state.hasLogin">
			<!-- #ifdef MP-WEIXIN -->
			<u-button type="primary" open-type="getUserInfo" @getuserinfo="wxHandLogin">点击授权(wx)</u-button>
			<u-button type="primary" open-type="getPhoneNumber" @getphonenumber="wxGetNum">点击授权(wx-num)</u-button>
			<!-- #endif -->
			<!-- #ifdef MP-DINGTALK -->
			<u-button type="primary" @click="alHandLogin">点击授权(al)</u-button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		name:'login',
		components:{
			
		},
		data(){
			return{
				
			}
		},
		onLoad(){
			if(this.$store.state.token){
				uni.navigateBack();
			}
			console.log('onload');
		},
		onShow(){
			if(this.$store.state.token){
				uni.navigateBack();
			}    
		},
		methods:{
			//授权登录 - wx
			wxHandLogin(res){
				if(res.detail.errMsg === 'getUserInfo:ok'){
					uni.login({
						provider:'weixin',
						success:(r)=>{
							if(r.code){
								let data = {
									token:r.code,
									userInfo:res.detail.userInfo
								};
								this.$store.dispatch('login',data).then(res=>{
									if(res && res === 'login:complete'){
										uni.showToast({
											title:'授权成功',
											duration:2000,
											complete:function(){
												setTimeout(_=>{
													uni.navigateBack();
												}, 1000);
											}
										});
									}
								});
							}
						}
					})
				}
			},
			//授权登录 - al
			alHandLogin(){
				uni.login({
					success:(res)=>{
						console.log(res);
					}
				})
			},
			//授权登录（获取手机号）
			wxGetNum(e){
				console.log(e);
			}
		}
	}
</script>

<style lang="less">
	.login{
		display: flex;
		align-items: center;
		justify-content: center;
		height:100vh;
		width:100%;
		.login_content{
			width:90%;
			margin-top: -100rpx;
		}
	}
</style>
