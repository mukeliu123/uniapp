<template>
	<!-- 日历 -->
	<view class="my-calendar">
		<view class="weeks">
			<view class="weeks-item" v-for="(item, index) in weeks" :key="index">
				<text>{{item}}</text>
			</view>
		</view>
		<view class="month">
			<!-- 交通 -->
			<tempalte v-if="componentType == 'traffic'">
				<view  class="month-item" v-for="(item, index) in dateList" :key="index">
					<view class="item-title">{{item.year}}年{{item.month+1<10?'0'+(item.month+1) : item.month+1}}月</view>
					<view class="item-list">
						<view class="list-row" v-for="(child, childIndex) in item.dateTemplate" :key="childIndex">
							<view class="row-item" v-for="(grand, grandIndex) in child" :key="grandIndex" @click="checkCurrentItem(grand)">
								<view 
								class="row-item-inner" 
								:class="{
									'no-work-day':grand.weekType == 2,
									'check-day':traffic.checkDateTimeStamp && traffic.checkDateTimeStamp == grand.timeStamp}" 
								v-if="grand.monthType == 'current'">
									<text class="day">{{judgeToday(grand.year,grand.month, grand.day) ? '今天' : grand.day}}</text>
									<text class="cnDay">{{grand.cnIdDay == '初一' ? grand.cnIdMonth : grand.cnIdDay}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</tempalte>
			<!-- 酒店 -->
			<template v-if="componentType == 'hotel'">
				<view class="month-item" v-for="(item, index) in dateList" :key="index">
					<view class="item-title">{{item.year}}年{{item.month+1<10?'0'+(item.month+1) : item.month+1}}月</view>
					<view class="item-list">
						<view class="list-row" v-for="(child, childIndex) in item.dateTemplate" :key="childIndex">
							<view class="row-item" v-for="(grand, grandIndex) in child" :key="grandIndex" >
								<view 
								class="row-item-inner" 
								@click="checkCurrentItem(grand)"
								:class="{
									'no-work-day':grand.weekType == 2,
									'hotel-start':grand.timeStamp == hotel.startStamp,
									'hotel-end':grand.timeStamp == hotel.endStamp,
									'hotel-section':grand.sectionLight
								}" 
								v-if="grand.monthType == 'current'">
									<text class="day">{{judgeToday(grand.year,grand.month, grand.day) ? '今天' : grand.day}}</text>
									<text class="cnDay">{{grand.cnIdDay == '初一' ? grand.cnIdMonth : grand.cnIdDay}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</template>
		</view>
		<!-- 确定 -->
		<view class="confirm">
			<u-button type="primary" class="confirm-btn" :disabled="referLoading" @click="referResult">确定</u-button>
		</view>
	</view>
</template>

<script>
	import {
		calendar
	} from '@/utils/calendar.js'
	export default {
		name: 'my-calendar',
		props: {
			options: {
				type: Object,
				default: () => {
					return {
						checkDateTimeStamp:'',
						showMonthNum: 2,
						componentType:'traffic', // traffic 交通 / hotel 酒店
						checkDateTimeStampByHotel:[]
					}
				}
			}
		},
		data() {
			return {
				weeks: ['日', '一', '二', '三', '四', '五', '六'],
				dateList: [],
				dateNode:[],
				componentType:'',
				traffic:{
					checkDateTimeStamp:''
				},
				hotel:{
					start:false,
					end:false,
					startStamp:'',
					endStamp:''
				},
				referLoading:false
			}
		},
		created() {
			this.componentType = this.options.componentType;
			if(this.componentType === 'traffic'){
				this.traffic.checkDateTimeStamp = this.options.checkDateTimeStamp || '';
			} 
			else if(this.componentType === 'hotel'){
				if(this.options.checkDateTimeStampByHotel && this.options.checkDateTimeStampByHotel.length == 2){
					this.hotel.startStamp = this.options.checkDateTimeStampByHotel[0];
					this.hotel.endStamp = this.options.checkDateTimeStampByHotel[1];
					this.hotel.start = true;
					this.hotel.end = true;
				}
			}
			this.renderCalendar(this.options.showMonthNum || 2);
		},
		methods: {
			//提交选中值
			referResult(){
				if(this.componentType === 'traffic'){
					if(!this.traffic.checkDateTimeStamp){
						uni.showToast({
						    title: '请选择购票日期',
							icon:'none',
						    duration: 2000
						});
						return;
					}
					this.$emit('sendTimeStamp',{values:[this.traffic.checkDateTimeStamp], type:'traffic'});
				}
				else if(this.componentType === 'hotel'){
					if(!this.hotel.startStamp){
						uni.showToast({
						    title: '请选择开始日期',
							icon:'none',
						    duration: 2000
						});
						return;
					}
					if(!this.hotel.endStamp){
						uni.showToast({
						    title: '请选择结束日期',
							icon:'none',
						    duration: 2000
						});
						return;
					}
					this.$emit('sendTimeStamp',{values:[this.hotel.startStamp, this.hotel.endStamp], type:'hotel'});
				}
			},
			//初始化当前日历组件
			renderCalendar(n) {
				let that = this;
				let nowDate = new Date(); //获取当前日期
				let year = nowDate.getFullYear(); //获取当前年份
				let month = nowDate.getMonth(); //获取当前月份
				let months = [];
				//循环n个月的数据
				for (let i = 0; i < n; i++) {
					let y = month + i > 11 ? year + 1 : year;
					let m = month + i > 11 ? (i - 1) : month + i;
					months.push(that.getMonthCalendar(y, m));
				}
				this.dateList = months;
				//初始化区间选中（hotel）
				if(this.dateNode.length && this.hotel.end && this.hotel.start && this.componentType === 'hotel'){
					let start = null;
					let end = null;
					this.dateNode.forEach((t, i)=>{
						if(t.timeStamp == this.hotel.endStamp){
							end = i;
						}
						if(t.timeStamp == this.hotel.startStamp){
							start = i;
						}
					});
					let arr = this.dateNode.slice(start+1, end);
					arr.forEach(t=>{
						t.sectionLight = true;
					});
				}
			},
			//选中当前日期
			checkCurrentItem(item){
				if(this.componentType === 'traffic'){
					this.handleByTraffic(item);
				} 
				else if(this.componentType === 'hotel'){
					this.handleByHotel(item)
				}
			},
			//处理选中结果 （traffic 交通）
			handleByTraffic(item){
				let times = new Date(item.year, item.month, item.day).getTime();
				this.traffic.checkDateTimeStamp = times;
			},
			//处理选中结果 （hotel 酒店）
			handleByHotel(item){
				this.dateNode.forEach(t=>{
					t.sectionLight = false;
				});
				//情况1：开始时间未确定 结束时间未确定 （确定开始时间）
				if(!this.hotel.start && !this.hotel.end){
					this.hotel.start = true;
					this.hotel.startStamp = item.timeStamp;
					this.hotel.end = false;
					this.hotel.endStamp = '';
				} 
				//情况2：开始时间确定 结束时间未确定
				else if(this.hotel.start && !this.hotel.end){
					//如果当前选中时间大于开始时间 （确定结束时间） 可提交
					if(item.timeStamp > this.hotel.startStamp){
						let start = null;
						let end = null;
						this.dateNode.forEach((t, i)=>{
							if(t.timeStamp === item.timeStamp){
								end = i;
							}
							if(t.timeStamp === this.hotel.startStamp){
								start = i;
							}
						});
						//最大区间是30
						if(end - start > 30){
							end = start + 30;
						}
						this.hotel.start = true;
						this.hotel.end = true;
						this.hotel.startStamp = this.hotel.startStamp;
						this.hotel.endStamp = this.dateNode[end].timeStamp;
						let arr = this.dateNode.slice(start+1, end);
						arr.forEach(t=>{
							t.sectionLight = true;
						});
					} 
					//如果当前选中时间小于等于开始时间 （重新确定开始时间）
					else{
						this.hotel.start = true;
						this.hotel.startStamp = item.timeStamp;
						this.hotel.end = false;
						this.hotel.endStamp = '';
					}
				} 
				//情况3：开始时间确定 结束时间确定（重新确定开始时间）
				else{
					this.hotel.start = true;
					this.hotel.end = false;
					this.hotel.startStamp = item.timeStamp;
					this.hotel.endStamp = '';
				}
				
			},
			//得到对应月份日历数据
			getMonthCalendar(year, month) {
				let that = this;
				//生成日历数据，上个月剩下的 X 天 + 当月的28（平年的2月）或者29（闰年的2月）或者30或者31天 + 下个月的天数 = 35； 
				let monthArr = [];
				let prevMonth = that.getPrevMonthCount(year, month).map(item => {
					return {
						day: item.day,
						year: item.year,
						month: item.month,
						weekType: item.weekType,
						weekDay: item.weekDay,
						monthType: 'prev',
						cnIdDay: item.cnIdDay,
						cnIdMonth: item.cnIdMonth,
						timeStamp:item.timeStamp
					}
				});
				let currentMonth = that.getMonthCount(year, month).map(item => {
					return {
						day: item.day,
						year: item.year,
						month: item.month,
						weekType: item.weekType,
						weekDay: item.weekDay,
						monthType: 'current',
						cnIdDay: item.cnIdDay,
						cnIdMonth: item.cnIdMonth,
						timeStamp:item.timeStamp
					}
				});
				let nextMonth = that.getNextMonthCount(year, month).map(item => {
					return {
						day: item.day,
						year: item.year,
						month: item.month,
						weekType: item.weekType,
						weekDay: item.weekDay,
						monthType: 'next',
						cnIdDay: item.cnIdDay,
						cnIdMonth: item.cnIdMonth,
						timeStamp:item.timeStamp
					}
				});
				//这里当 whereMonday 为 0 的时候会截取上月的所有数据
				let whereMonday = that.getWeekDay(year, month);
				// if (whereMonday === 0) {
				// 	whereMonday = 7;
				// }
				let prevNum = whereMonday === 0 ? 0 : -1 * whereMonday;
				let nextNum = 35 - currentMonth.length - whereMonday > 0 ? 35 - currentMonth.length - whereMonday : 0;
				let prevArr = prevNum < 0 ? prevMonth.slice(prevNum) : [];
				let nextArr = nextMonth.slice(0, nextNum);
				monthArr = [].concat(prevArr, currentMonth, nextArr);
				let endArr = [];
				endArr = that.groupSliceMonthByFor(monthArr, 7);
				//添加区间高亮 (此处应注意是当月的日期)
				currentMonth.forEach(item=>{
					item.sectionLight = false;
					that.dateNode.push(item);
				});
				return {
					year: year,
					month: month,
					dateTemplate: endArr
				}
			},
			//切割数组
			groupSliceMonthByWhile(array, subGroupLength) {
				let index = 0;
				let newArray = [];
				while (index < array.length) {
					newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
			},
			//切割数组
			groupSliceMonthByFor(array, subGroupLength) {
				let newArray = [];
				for (let i = 0; i < array.length; i += subGroupLength) {
					newArray.push(array.slice(i, i + subGroupLength));
				}
				return newArray;
			},
			//判断年份类型 [四年一闰，百年不闰，四百年不闰]
			isLeapYear(year) {
				return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
			},
			//获取每个月的日期有多少，注意 month - [0-11]
			getMonthCount(year, month) {
				let arr = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
				let count = arr[month] || (this.isLeapYear(year) ? 29 : 28);
				let arx = Array.from(new Array(count), (item, index) => {
					return {
						day: index + 1,
					}
				});
				arx.forEach(item => {
					let cnDate = month + 1 > 12 ? calendar.solar2lunar(year + 1, 1, item.day) : calendar.solar2lunar(year, month + 1,
						item.day);
					let timeStamp = new Date(new Date(year, month, item.day).toLocaleDateString()).getTime();
					let week = new Date(year, month, item.day * 1).getDay();
					if (week == 0 || week == 6) {
						item.weekType = 2
					} else {
						item.weekType = 1
					}
					item.weekDay = week;
					item.year = year;
					item.month = month;
					item.cnIdDay = cnDate.IDayCn;
					item.cnIdMonth = cnDate.IMonthCn;
					item.timeStamp = timeStamp;
				});
				return arx;
			},
			//获取某年某月的1号是星期几，这里要注意的是JS 的 API getDay() 是从[日-六]（0-6），返回number
			getWeekDay(year, month) {
				let date = new Date(year, month, 1);
				return date.getDay();
			},
			//获取上个月的天数
			getPrevMonthCount(year, month) {
				if (month === 0) {
					return this.getMonthCount(year - 1, 11);
				} else {
					return this.getMonthCount(year, month - 1);
				}
			},
			//获取下个月的天数
			getNextMonthCount(year, month) {
				if (month === 11) {
					return this.getMonthCount(year + 1, 0);
				} else {
					return this.getMonthCount(year, month + 1);
				}
			},
			//判断是否为今天
			judgeToday(year, month, day) {
				let d = new Date(year, month, day);
				let todaysDate = new Date();
				if (d.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
</script>

<style lang="less">
	.my-calendar {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		overflow: hidden;
		overflow-y: auto;
		background-color: #fff;
		padding-bottom: 200rpx;
		.confirm{
			width:100%;
			height:120rpx;
			// border-top:1rpx solid #eee;
			box-shadow:-1rpx -1rpx 1rpx 1rpx #eee;
			background-color: #fff;
			position: fixed;
			z-index: 1;
			left:0;
			bottom:0;
			display: flex;
			align-items: center;
			justify-content: center;
			.confirm-btn{
				width:80%;
				margin:0;
				border-radius: 50rpx;
				overflow: hidden;
				letter-spacing: 1rpx;
				font-size:32rpx;
			}
		}
		.weeks {
			width: 100%;
			position: fixed;
			left: 0;
			top: 0;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			border-bottom: 1rpx solid #ccc;
			display: flex;
			z-index: 1;
			background-color: #fff;
			.weeks-item {
				flex: 1;
				width:calc(100% / 7);
			}
		}

		.month {
			width: 99%;
			margin:0 auto;
			margin-top: 100rpx;
			text-align: center;
			.month-item {
				width: 100%;
				margin-bottom: 50rpx;
				.item-title {
					width: 100%;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					font-size: 28rpx;
				}

				.item-list {
					width: 100%;
					margin-top: 20rpx;

					.list-row {
						width: 100%;
						display: flex;

						.row-item {
							box-sizing: border-box;
							width: calc(100% / 7);
							height: 100rpx;
							display: flex;
							align-items: center;
							justify-content: center;

							.row-item-inner {
								width: 100%;
								height:100%;
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								border-radius: 0;
								&.no-work-day {
									.day {
										color: #38f;
									}

									.cnDay {
										color: #38f;
									}
								}
								
								&.check-day{
									background-color: #38f;
									.day {
										color: #fff;
									}
									
									.cnDay {
										color: #fff;
									}
								}
								
								&.hotel-start{
									background-color: #38f;
									.day {
										color: #fff;
									}
									
									.cnDay {
										color: #fff;
									}
								}
								
								&.hotel-section{
									background-color: #87b7ff;
									.day {
										color: #fff;
									}
									
									.cnDay {
										color: #fff;
									}
								}
								
								&.hotel-end{
									background-color: #38f;
									.day {
										color: #fff;
									}
									
									.cnDay {
										color: #fff;
									}
								}

								.day {
									color: #000;
									font-size: 32rpx;
									font-weight: bold;
									width: 100%;
									text-align: center;
								}

								.cnDay {
									font-size: 20rpx;
									color: #333;
									margin-top: 10rpx;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
