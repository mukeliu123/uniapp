<template>
	<view class="home">
		<view v-if="pageShow">
			<!-- <navBar :navigationBarStyle="navigationBarStyle" :showBack="false"></navBar> -->
			<!-- 弹窗 开始 -->
			<button @click="openBasePopup">基础弹窗</button>
			<button @click="openConfirm">对话框</button>
			<button @click="openLoading">loading</button>
			<button @click="openToast">toast</button>
			<button @click="goList">前往list</button>
			<button @click="goForm">前往form</button>
			<button @click="goLbPicker">前往lb-picker</button>
			<button @click="goWPicker">前往w-picker</button>
			<button @click="goTest">前往test</button>
			<uni-popup ref="popupBase" @change="popupBaseChange" type="center">
				<view class="popup-content">
					基础弹窗内容
				</view>
			</uni-popup>
			<!-- 弹窗 结束 -->
			<!-- 按钮 -->
			<u-button type="primary">按钮</u-button>
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/nav-bar/nav-bar.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		//引入组件
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog,
			navBar
		},
		//数据
		data() {
			return {
				msg: 'home',
				navigationBarStyle: {
					iconText: '主页' //导航栏文字
				},
				list: [{
					text: '点赞',
					color: 'blue',
					fontSize: 28
				}, {
					text: '分享'
				}, {
					text: '评论'
				}],
				show: true,
				pageShow:true,
			}
		},
		//接收传值的生命周期
		onLoad() {
			
		},
		onShow() {
			// if (this.$store.state.token) {
			// 	console.log('已登录状态');
			// 	this.pageShow = true;
			// } else {
			// 	console.log('未登录状态');
			// 	this.pageShow = false;
			// 	uni.navigateTo({
			// 		url: '/pages/login/login'
			// 	})
			// }
			// console.log('onShow----进入home');
		},
		//方法
		methods: {
			leftNavTap() {
				console.log(1);
			},
			//弹窗 - 基础
			openBasePopup() {
				uni.hideTabBar();
				this.$refs.popupBase.open();
			},
			//弹出层 - 基础 - 监听状态 
			popupBaseChange(e) {
				console.log(e);
				let {
					show,
					type
				} = e;
				if (!show) {
					uni.showTabBar();
				}
			},
			//弹窗 - 对话框
			openConfirm() {
				uni.showModal({
					title: '提示',
					content: '这是一个模态弹窗',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//弹窗 - loading
			openLoading() {
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(_ => {
					uni.hideLoading();
				}, 1000);
			},
			//弹窗 - toast
			openToast() {
				uni.showToast({
					title: '标题',
					duration: 10000
				});
			},
			//前往数据列表
			goList() {
				uni.navigateTo({
					url: '/pages_a/list/list?cid=5'
				});
			},
			//前往表单页面
			goForm() {
				uni.navigateTo({
					url: '/pages_a/form/form'
				})
			},
			//前往lb-picker
			goLbPicker() {
				uni.navigateTo({
					url: '/pages/lb-picker/lb-picker'
				})
			},
			//前往w-picker
			goWPicker() {
				uni.navigateTo({
					url: '/pages/w-picker/w-picker'
				})
			},
			//前往test
			goTest() {
				uni.navigateTo({
					url: '/pages/test/test'
				})
			}
		}
	}
</script>

<style lang="less">
	.popup-content {
		width: 640rpx;
		height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		overflow: hidden;
		overflow-y: auto;
	}
</style>
