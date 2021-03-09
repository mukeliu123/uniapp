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
					checkDateTimeStamp:'',
					checkDateTimeStampByHotel:[]
				},
				backPath:''
			}
		},
		onLoad(e){
			setTimeout(_=>{
				console.log(e);
				this.options.componentType = e.type;
				if(this.options.componentType === 'traffic'){
					this.options.checkDateTimeStamp = e.times || '';
					this.checkDateTimeStampByHotel = [];
				}
				else if(this.options.componentType === 'hotel'){
					this.options.checkDateTimeStamp = '';
					this.options.checkDateTimeStampByHotel = [e.times.split(',')[0],e.times.split(',')[1]];
				}
				this.backPath = e.path;
				this.show = true;
			}, 0);
		},
		methods:{
			backPage(obj){
				if(obj && this.backPath){
					uni.reLaunch({
						url:this.backPath+'?times='+obj.values+'&type='+obj.type
					});
				}
			}
		}
	}
</script>

<style lang="less">
</style>
