<template>
	<!-- 上传与下载 -->
	<view class="upload-download">
		<!-- 导航栏 开始 -->
		<uni-nav-bar background-color="#d81e06" color="#fff" :status-bar="true">
			<view>上传与下载</view>
		</uni-nav-bar>
		<!-- 导航栏 结束 -->
		<view>
			<button @click="uploadFile">上传图片</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(option) {
			console.log(option);
		},
		methods: {
			//点击上传图片
			uploadFile() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed','original'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera','album'], //从相册选择
					success: (r)=> {
						let fileContent = r.tempFilePaths;
						console.log(fileContent);
						uni.uploadFile({
							url: 'http://192.168.101.15:8004/car/upload?token=35fc4a3eb94bee',
							filePath: fileContent[0],
							name: 'file',
							success:(res)=>{
								console.log(JSON.parse(res.data));
							}
						})
					}
				});
			}
		}
	}
</script>

<style>
</style>
