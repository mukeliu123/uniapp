<template>
	<!-- 自定义navbar -->
	<view class="nav-bar">
		<!-- 状态栏 -->
		<view class="status-line" :style="{height:lineHeight, background:navigationBarStyle.background || normal.background}"></view>
		<!-- 导航栏 -->
		<view class="bar-line" :style="{background:navigationBarStyle.background || normal.background}">
			<!-- 常规 -->
			<view class="bar-no-custom" v-if="!custom">
				<view class="iconfont icon-houtui bar-content-back" :style="{color:navigationBarStyle.iconColor || normal.iconColor}"
				 @click="backPage" v-if="showBack"></view>
				<view class="bar-content-title" :style="{color:navigationBarStyle.fontColor || normal.fontColor}">{{navigationBarStyle.iconText}}</view>
			</view>
			<!-- 非常规 -->
			<view class="bar-custom" v-else>
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			custom: {
				type: Boolean,
				default: false
			},
			navigationBarStyle: {
				type: Object,
				default: () => {
					return {
						background: '#000',
						fontColor: '#fff',
						iconColor: '#fff',
						iconText: 'uni-app'
					}
				}
			},
			showBack: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				normal: {
					background: '#000',
					fontColor: '#fff',
					iconColor: '#fff'
				},
				lineHeight: ''
			}
		},
		mounted() {
			let systemInfo = uni.getSystemInfoSync();
			// px转换到rpx的比例
			let pxToRpxScale = 750 / systemInfo.windowWidth;
			let systems = {
				ktxStatusHeight: systemInfo.statusBarHeight * pxToRpxScale, // 状态栏的高度
				navigationHeight: 44 * pxToRpxScale, // 导航栏的高度
				ktxWindowWidth: systemInfo.windowWidth * pxToRpxScale, // window的宽度
				ktxWindowHeight: systemInfo.windowHeight * pxToRpxScale, // window的高度
				ktxScreentHeight: systemInfo.screenHeight * pxToRpxScale, // 屏幕的高度
			}
			// 底部tabBar的高度
			systems.tabBarHeight = systems.ktxScreentHeight - systems.ktxStatusHeight - systems.navigationHeight - systems.ktxWindowHeight // 底部tabBar的高度
			this.lineHeight = systems.ktxStatusHeight + 'rpx';
			this.$emit('getHeight', systems)
		},
		methods:{
			backPage(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="less">
	.nav-bar {
		position: sticky;
		position: -webkit-sticky;
		top: 0;
		z-index: 101;
		.bar-line {
			height: 44px;
			.bar-no-custom{
				height:100%;
				width:100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.bar-content-back{
					font-size:32rpx !important;
					position: absolute;
					left:30rpx;
				}
				.bar-title{
					font-size:32rpx;
				}
			}
			.bar-custom{
				display: flex;
				align-items: center;
				width:100%;
				height:44px;
			}
		}
	}
</style>
