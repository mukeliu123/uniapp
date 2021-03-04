<template>
	<!-- test -->
	<div class="test">
		<view class="show-date" @click="showCalendar">
			<text class="value" v-if="currentDate.show">{{currentDate.show}}</text>
			<text class="empty" v-else>请选择日期</text>
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
				currentDate:{
					year:'',
					month:'',
					day:'',
					show:'',
					timeStamp:''
				},
				myTreeTemplate: [],
				myTreeNode: [],
				myTreeShow: false,
				myCalendar:{
					show:false,
					options:{
						showMonthNum:6,
					}
				}
			}
		},
		onLoad(e) {
			if(e.timeStamp){
				console.log('load ---1')
				let checkDate = new Date(e.timeStamp*1);
				this.currentDate.year = checkDate.getFullYear();
				this.currentDate.month = checkDate.getMonth();
				this.currentDate.day = checkDate.getDate();
				this.currentDate.timeStamp = e.timeStamp;
				this.currentDate.show = this.currentDate.month+1+'月'+this.currentDate.day+'日';
			} else{
				console.log('load ---2')
				this.currentDate.year = '';
				this.currentDate.month = '';
				this.currentDate.day = '';
				this.currentDate.timeStamp = '';
				this.currentDate.show = '';
			}
		},
		onShow(){},
		created() {
			// this.myTreeInit();
		},
		methods: {
			/******************* 日历 **********************/
			showCalendar(){
				let nowDate = new Date();
				let nowYear = nowDate.getFullYear();
				let nowMonth = nowDate.getMonth();
				let nowDay = nowDate.getDate();
				let path = '/pages/test/test';
				let times = '';
				if(this.currentDate.year && this.currentDate.month && this.currentDate.day){
					console.log(1);
					times = new Date(this.currentDate.year,this.currentDate.month, this.currentDate.day).getTime();
				} else{
					console.log(2);
					times = new Date(nowYear, nowMonth, nowDay).getTime();
				}
				console.log(times);
				let url = '/pages_a/calendar-transfer/calendar-transfer?num=2&type=hotel&timeStamp='+times+'&path='+path;
				uni.navigateTo({
					url:url
				});
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
	.test{
		.show-date{
			width:100%;
			border:1rpx solid #eee;
			.value{
				width:100%;
				height:80rpx;
				line-height: 80rpx;
				box-sizing: border-box;
				padding-left: 20rpx;
			}
			.empty{
				width:100%;
				height:80rpx;
				line-height: 80rpx;
				box-sizing: border-box;
				padding-left: 20rpx;
				color:#ccc;
			}
		}
	}
</style>
