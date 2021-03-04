<template>
	<view class="my">
		<u-button type="primary" v-if="noLogin" @click="nextLogin">点击登录</u-button>
		<view v-else>昵称：{{userInfo.nickName}}</view>
	</view>
</template>

<script>
	export default {
		//引入组件
		components: {
			
		},
		//数据
		data() {
			return {
				msg:'1',
				noLogin:false,
				userInfo:null
			}
		},
		//接收传值的生命周期
		onLoad() {
			
		},
		onShow(){
			let bool = this.$store.state.token;
			if(bool){
				this.noLogin = false;
				let userInfo = this.$store.state.userInfo;
				this.userInfo = JSON.parse(JSON.stringify(userInfo));
				console.log(this.userInfo);
			} else{
				this.noLogin = true;
			}
		},
		//方法
		methods: {
			//前往登录
			nextLogin(){
				console.log('前往登录');
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="less">
	
</style>
