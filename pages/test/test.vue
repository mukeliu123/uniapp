<template>
	<!-- test -->
	<div class="test">
		<view class="show-date" @click="showCalendar">
			<template v-if="canlendar.type == 'traffic'">
				<view class="traffic">
					<text class="value">{{canlendar.show}}</text>
				</view>
			</template>
			<template v-if="canlendar.type == 'hotel'">
				<view class="hotel">
					<text class="value">{{canlendar.shows[0]}}</text>
					<text class="zhi">至</text>
					<text class="value">{{canlendar.shows[1]}}</text>
				</view>
			</template>
		</view>
		<!-- my-tree -->
		<myTree v-if="myTreeShow" :menuTemplate="myTreeTemplate" :menuNode="myTreeNode"></myTree>
	</div>
</template>

<script>
	import myTree from '@/components/my-tree/my-tree.vue'
	import myCalendar from '@/components/my-calendar/my-calendar.vue'
	export default {
		name: 'test',
		components: {
			myTree,
			myCalendar
		},
		data() {
			return {
				myTreeTemplate: [],
				myTreeNode: [],
				myTreeShow: false,
				canlendar: {
					type: 'hotel',
					times: [],
					show: '',
					shows: []
				}
			}
		},
		onLoad(e) {
			setTimeout(_ => {
				this.initCalendar(e);
			}, 0);
		},
		onShow() {},
		created() {
			// this.myTreeInit();
		},
		methods: {
			//初始化日期
			initCalendar(e) {
				console.log('触发');
				if (e.type && this.canlendar.type == e.type) {
					if (this.canlendar.type == 'hotel') {
						this.initCalendarHotel(e.times);
					} else if (this.canlendar.type == 'traffic') {
						this.initCalendarTraffic(e.times);
					}
				} else {
					if (this.canlendar.type == 'hotel') {
						//new Date().toLocaleDateString() 获取当前0点时间戳
						this.initCalendarHotel();
					} else if (this.canlendar.type == 'traffic') {
						this.initCalendarTraffic();
					}
				}
			},
			initCalendarHotel(times){
				if(times){
					let dateStrat = new Date(new Date(times.split(',')[0]*1));
					let dateEnd = new Date(new Date(times.split(',')[1]*1));
					let showStrat = dateStrat.getFullYear() + '年' + (dateStrat.getMonth()+1) + '月' + dateStrat.getDate() + '日';
					let showEnd = dateEnd.getFullYear() + '年' + (dateEnd.getMonth()+1) + '月' + dateEnd.getDate() + '日';
					this.canlendar.shows = [showStrat, showEnd];
					this.canlendar.times = [];
					this.canlendar.times = [dateStrat.getTime(), dateEnd.getTime()];
					this.canlendar.show = '';
				} else{
					let dateStrat = new Date(new Date().toLocaleDateString());
					let dateEnd = new Date(new Date().toLocaleDateString());
					dateStrat.setTime(dateStrat.getTime() + 24 * 60 * 60 * 1000);
					dateEnd.setTime(dateEnd.getTime() + 24 * 60 * 60 * 1000 * 2);
					let showStrat = dateStrat.getFullYear() + '年' + (dateStrat.getMonth()+1) + '月' + dateStrat.getDate() + '日';
					let showEnd = dateEnd.getFullYear() + '年' + (dateEnd.getMonth()+1) + '月' + dateEnd.getDate() + '日';
					this.canlendar.shows = [showStrat, showEnd];
					this.canlendar.times = [];
					this.canlendar.times = [dateStrat.getTime(), dateEnd.getTime()];
					this.canlendar.show = '';
				}
			},
			initCalendarTraffic(times){
				if(times){
					let date = new Date(times*1);
					this.canlendar.show = date.getFullYear() + '年' + (date.getMonth()+1) + '月' + date.getDate() + '日';
					this.canlendar.times = [];
					this.canlendar.times = [date.getTime()];
					this.canlendar.shows = [];
				} else{
					let date = new Date(new Date().toLocaleDateString());
					date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
					this.canlendar.show = date.getFullYear() + '年' + (date.getMonth()+1) + '月' + date.getDate() + '日';
					this.canlendar.times = [];
					this.canlendar.times = [date.getTime()];
					this.canlendar.shows = [];
				}
			},
			/******************* 日历 **********************/
			showCalendar() {
				let path = '/pages/test/test';
				if (this.canlendar.type === 'traffic') {
					console.log('click traffic');
					let url = '';
					if (this.canlendar.times && this.canlendar.times.length == 1) {
						url = '/pages_a/calendar-transfer/calendar-transfer?type=' + this.canlendar.type + '&times=' + this.canlendar
							.times + '&path=' + path;
					} else {
						url = '/pages_a/calendar-transfer/calendar-transfer?type=' + this.canlendar.type + '&path=' + path;
					}
					uni.navigateTo({
						url: url
					});
				} else if (this.canlendar.type === 'hotel') {
					console.log('click hotel');
					let url = ''
					if (this.canlendar.times && this.canlendar.times.length == 2) {
						url = '/pages_a/calendar-transfer/calendar-transfer?type=' + this.canlendar.type + '&path=' + path + '&times=' +
							this.canlendar.times;
					} else {
						url = '/pages_a/calendar-transfer/calendar-transfer?type=' + this.canlendar.type + '&path=' + path;
					}
					uni.navigateTo({
						url: url
					});
				}
			},
			/******************* 树形结构 **********************/
			myTreeInit() {
				let data = [{
					id: 1,
					address: '1',
					title: '菜单1',
					children: [{
							id: 11,
							address: '1-11',
							title: '菜单1-11',
							children: [{
								id: 111,
								address: '1-11-111',
								title: '菜单1-1-111',
								children: [{
									id: 1111,
									address: '1-11-111-1111',
									title: '菜单1-1-111-1111'
								}]
							}]
						},
						{
							id: 12,
							address: '1-12',
							title: '菜单1-12',
							children: [{
								id: 121,
								address: '1-12-121',
								title: '菜单1-12-121'
							}]
						}
					]
				}];
				this.myTreeTemplate = this.getMenuTemplate(data);
				this.myTreeNode = this.getMenuNodeList(data);
				this.myTreeShow = true;
			},
			getMenuTemplate(arr) {
				let loopTree = function(i, level) {
					i.level = level;
					if (i.children && i.children.length) {
						i.expend = false;
						i.children.forEach(item => {
							return loopTree(item, level + 1);
						})
					}
				};
				arr.forEach(item => {
					return loopTree(item, 1);
				});
				return arr;
			},
			getMenuNodeList(arr) {
				let that = this;
				let conut = 0;
				let endArr = [];
				let loopTree = function(i, p) {
					let cou = conut++;
					i.nodeKey = cou;
					endArr[i.nodeKey] = {
						nodeKey: i.nodeKey,
						node: i
					}
					if (typeof p != 'undefined') {
						endArr[i.nodeKey]['parentKey'] = p.nodeKey;
						endArr[p.nodeKey]['childIds'].push(i.nodeKey);
					}
					if (i.children && i.children.length) {
						endArr[i.nodeKey]['childIds'] = [];
						i.children.forEach(c => {
							return loopTree(c, i);
						})
					}
				};
				arr.forEach(item => {
					loopTree(item);
				});
				return endArr;
			}
		}
	}
</script>

<style lang="less">
	.test {
		.show-date {
			width: 100%;
			border: 1rpx solid #eee;

			.hotel {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				&>text {
					width: 45%;
					padding: 30rpx 0;
					text-align: center;
				}

				text.zhi {
					color: #333;
					width: 10%
				}

				text.value {
					color: #000;
					font-size: 32rpx;
					// font-weight:bold;
				}
			}

			.traffic {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				text.value {
					font-size: 36rpx;
					color: #000;
					padding: 30rpx 0;
					text-align: center;
				}
			}
		}
	}
</style>
