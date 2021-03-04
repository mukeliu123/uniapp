<template>
	<view class="list">
		<template v-if="list.length">
			<view class="list_content">
				<navigator 
				class="list_item" 
				v-for="(item, index) in list" 
				:key="item.goods_id" 
				:url="`/pages/details/details?goods_id=${item.goods_id}`">
					<!-- 左侧 -->
					<view class="list_item_img">
						<image mode="widthFix" 
						
						:src="item.goods_small_logo ? item.goods_small_logo : defaultImage"></image>
					</view>
					<!-- 右侧 -->
					<view class="list_item_info">
						<view class="list_item_info_name">{{item.goods_name}}</view>
						<view class="list_item_info_price">￥{{item.goods_price}}</view>
					</view>
				</navigator>
			</view>
		</template>
		<!-- 列表 开始 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lock:false,
				list:[],
				defaultImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606464468384&di=2a9760258d178388a454851978076bc8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F23%2F20161023064129_hNPzZ.jpeg',
				searchQuery:{
					query:'',
					cid:'',
					page:1,
					limit:10,
					total:0,
					totalPages:0,
				},
			}
		},
		//初始化
		onLoad(option){
			this.searchQuery.cid = 5;
			this.getList();
		},
		//方法
		methods: {
			leftNavTap(){
				let pages = getCurrentPages();
				uni.navigateBack({
					delta:1
				});
			},
			//获取列表
			getList(){
				this.lock = true;
				let data = {
					query:this.searchQuery.query,
					cid:this.searchQuery.cid,
					pagenum:this.searchQuery.page,
					pagesize:this.searchQuery.limit
				}
				this.$request('/goods/search',data, 'GET').then(res=>{
					if(res.data.message){
						//获取总条数
						const total = res.data.message.total;
						//计算总页数
						this.searchQuery.totalPages = Math.ceil(total/this.searchQuery.limit);
						this.list = [...this.list, ...res.data.message.goods];
						this.lock = false;
						uni.stopPullDownRefresh();
					}
				}).catch(err=>{
					uni.stopPullDownRefresh();
					console.log(err);
					this.lock = false;
				})
			},
		},
		
		//下拉刷新
		onPullDownRefresh() {
			//do something
			console.log('触发下拉刷新了');
			this.list = [];
			this.searchQuery.page = 1;
			if(!this.lock){
				this.getList();
			} else{
				uni.stopPullDownRefresh();
			}
		},
		//上拉加载
		onReachBottom() {
			//do something
			console.log('上拉加载了');
			if(this.searchQuery.page>=this.searchQuery.totalPages){
				uni.showToast({
					title:'没数据了',
					icon:'none'
				})
			} else{
				if(!this.lock){
					this.searchQuery.page++;
					this.getList()
				}
			}
		}
	}
</script>

<style lang="less">
	.list_content{
		width:100%;
		.list_item{
			display: flex;
			 border-bottom: 1rpx solid #ccc;
			 margin: 10rpx auto;
			 .list_item_img{
				 flex:2;
				 display: flex;
				 justify-content: center;
				 align-items: center;
				 padding:10rpx 0;
				 image{
					 width:70%;
				 }
			 }
			 .list_item_info{
				 flex:3;
				 padding-right:10rpx;
				 display: flex;
				 flex-direction: column;
				 justify-content: space-around;
				 .list_item_info_name{
					 display: -webkit-box;
					 overflow: hidden;
					 -webkit-box-orient:vertical;
					 -webkit-line-clamp:2;
					 word-wrap: break-word;
					 word-break: break-all;
				 }
				 .list_item_info_price{
					 color:red;
				 }
			 }
		}
	}
</style>
