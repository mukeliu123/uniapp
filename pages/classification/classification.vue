<template>
	<!-- 分类 -->
	<view class="classification">
		<!-- 导航栏 结束 -->
		<view class="cates_container">
			<!-- 左侧菜单 -->
			<scroll-view class="left_menu" scroll-y>
				<view @click="handTapLeftMenu(index)" 
				v-for="(item, index) in leftMenuList" 
				:key="index" 
				:class="{active:currentIndex == index}"
				class="menu_item">{{item}}</view>
			</scroll-view>
			<!-- 右侧商品内容 -->
			<scroll-view class="right_content" scroll-y :scroll-top="scrollTop" @scroll="scrollRightContent">
				<view class="shopping_group" v-for="(item, index) in rightContent" :key="index" v-if="item.children.length">
					<view class="shopping_group_title">
						<text class="delimiter">/</text>
						<text class="title">{{item.cat_name}}</text>
						<text class="delimiter">/</text>
					</view>
					<view class="shopping_group_list">
						<navigator 
						v-for="(child, childIndex) in item.children" 
						:key="childIndex">
							<image mode="widthFix" :src="child.cat_icon"></image>
							<view class="shopping_name">{{child.cat_name}}</view>
						</navigator>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		//数据
		data() {
			return {
				msg: '分类页面',
				//左侧的数据菜单
				leftMenuList: [],
				//右侧的商品数据
				rightContent: [],
				//被点击的左侧菜单
				currentIndex: 0,
				//右侧容器滚动距离
				scrollTop: 0,
				scrollTopOld:0,
				//分类数据
				Cates: null
			}
		},
		//初始化
		onLoad(option) {
			
		},
		created(){
			/*
				1 先判断一下本地存储数据中有没有旧数据
				2 没有旧数据 直接发送新请求
				3 有旧的数据的 同时 旧的数据也没有过期 就继续使用 否则 发送新请求
			*/
			let Cates = uni.getStorageSync('cates');
			console.log(Cates);
			if (!Cates) {
				this.getCates();
			} else {
				if (Date.now() - Cates.time > 1000 * 10) {
					this.getCates();
				} else {
					//可以使用旧的数据
					this.Cates = Cates.data;
					//构造左侧数据菜单
					let leftMenuList = this.Cates.map(v => v.cat_name);
					//构造右侧数据
					let rightContent = this.Cates[0].children;
					this.leftMenuList = leftMenuList;
					this.rightContent = rightContent;
				}
			}
		},
		//方法
		methods: {
			//获取数据分类
			getCates() {
				let that = this;
				let date = new Date().getTime();
				this.$request('/categories', {}, 'GET').then(res => {
					console.log(res);
					//分类数据存储
					this.Cates = res.data.message;
					//缓存分类数据
					uni.setStorageSync('cates', {
						time: date,
						data: res.data.message
					});
					//构造左侧数据菜单
					let leftMenuList = this.Cates.map(v => {
						if(v.children && v.children.length){
							return v.cat_name;
						}
					});
					//构造右侧数据
					let rightContent = this.Cates[0].children;
					this.leftMenuList = leftMenuList;
					this.rightContent = rightContent;

				}).catch(error => {
					console.log(error);
				});
			},
			//点击左侧菜单
			handTapLeftMenu(i) {
				console.log(i);
				let rightContent = this.Cates[i].children;
				this.currentIndex = i;
				this.rightContent = rightContent;
				this.scrollTop = this.scrollTopOld;
				this.$nextTick(function() {
					this.scrollTop = 0;
				});
			},
			//监听右侧容器滚动
			scrollRightContent(e){
				this.scrollTopOld = e.detail.scrollTop;
			}
		}
	}
</script>

<style lang="less">
	.classification{
		display: flex;
		width:100%;
		height:100vh;
		flex-direction: column;
		.cates_container{
			width:100%;
			display: flex;
			flex:1;
			overflow: hidden;
			.left_menu{
				width:200rpx;
				flex-shrink: 0;
				font-size:30rpx;
				color:#000;
				background-color: #eee;
				.menu_item{
					display: flex;
					height:80rpx;
					align-items: center;
					justify-content: center;
					&.active{
						color:#d81e06;
						border-left: 5rpx solid #d81e06;
					}
				}
			}
			.right_content{
				flex: 1;
				padding-top: 10rpx;
				.shopping_group{
					width:100%;
					margin: 40rpx auto;
					.shopping_group_title{
						border:1px soid red;
						width:100%;
						display: flex;
						justify-content: center;
						.title{
							margin:0 8rpx;
						}
					}
					.shopping_group_list{
						margin-top: 20rpx;
						width:100%;
						box-sizing: border-box;
						padding:10rpx;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						navigator{
							width:33.3333%;
							box-sizing:border-box;
							display: flex;
							flex-direction: column;
							image{
								width:90%;
								margin:0 auto;
							}
							.shopping_name{
								width:100%;
								text-align: center;
								font-size:24rpx;
								color:#666;
								margin-top: 10rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
