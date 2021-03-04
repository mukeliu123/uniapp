<template>
	<!-- w-picker -->
	<view class="w-picker">
		<button @click="showWpicker">wPicker -- {{wPicker.show}}</button>
		<!-- value 与 fields 需对应上 -->
		<w-picker ref="date1" :visible.sync="wPicker.visible" :mode="wPicker.mode" startYear="2017" endYear="2029" :value="wPicker.show"
		 fields="second" @confirm="onConfirm($event,'date')" @cancel="onCancel"></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {
			wPicker
		},
		data() {
			return {
				visible: false,
				wPicker:{
					mode:'date',
					visible:false,
					show:'',
					send:null
				}
			}
		},
		methods: {
			onConfirm(el, type){
				this.wPicker.send = parseInt(new Date(el.value).getTime()/1000);
				this.wPicker.show = el.value;
				console.log(this.wPicker.send);
			},
			onCancel(e){
				console.log(e);
			},
			showWpicker(){
				this.wPicker.visible = true;
			},
			leftNavTap(){
				uni.navigateBack();
			}
		},
		onLoad(option) {
			console.log(option);
		}
	}
</script>

<style>
</style>
