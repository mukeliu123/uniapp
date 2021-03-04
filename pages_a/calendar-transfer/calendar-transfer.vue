<template>
	<!-- 日历中转页 -->
	<view class="calendar-transfer">
		<myCalendar v-if="show" @sendTimeStamp="backPage" :options="options"></myCalendar>
	</view>
</template>

<script>
	import myCalendar from '@/components/my-calendar/my-calendar.vue'
	export default{
		name:'calendar-transfer',
		components:{
			myCalendar
		},
		data(){
			return{
				show:false,
				options:{
					showMonthNum:2,
					componentType:'traffic',
					checkDateTimeStamp:''
				},
				backPath:''
			}
		},
		onLoad(e){
			setTimeout(_=>{
				this.options.showMonthNum = e.num;
				this.options.componentType = e.type;
				this.options.checkDateTimeStamp = e.timeStamp;
				this.backPath = e.path;
				this.show = true;
			}, 0);
		},
		methods:{
			backPage(time){
				this.show = false;
				if(time && this.backPath){
					uni.reLaunch({
						url:this.backPath+'?timeStamp='+time
					});
				}
			}
		}
	}
</script>

<style lang="less">
</style>
