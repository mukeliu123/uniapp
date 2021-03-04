<template>
	<view class="popup">
		<button @click="openBasePopup">基础弹窗</button>
		<button @click="openConfirmPopup">对话框弹窗</button>
		<button @click="openOtherComponentPopup">组合其它组件弹窗</button>
		<uni-popup ref="popupBase" type="bottom">
			<view class="popup-content">我是基础弹窗内容</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		components:{},
		data(){
			return{}
		},
		onLoad(){
			
		},
		methods:{
			openBasePopup(){
				this.$refs.popupBase.open();
			},
			openConfirmPopup(){},
			openOtherComponentPopup(){},
		}
	}
</script>

<style lang="less">
	.popup{
		
		.popup-content{
			width:90%;
			height:60vh;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
