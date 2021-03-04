<template>
	<!-- lb-picker -->
	<view class="lb-picker">
		<view class="picker-lb-liu-title" @click="showPicker1">单列picker--值:--{{picker1.show}}</view>
		<lb-picker ref="picker1" :value="picker1.send" :list="picker1.list" @confirm="confirmPicker1" mode="selector"></lb-picker>
		<view class="picker-lb-liu-title" @click="showPicker2">非联动多列--值:--{{picker2.show}}</view>
		<lb-picker ref="picker2" :value="picker2.send" :list="picker2.list" @confirm="confirmPicker2" mode="unlinkedSelector"></lb-picker>
		<view class="picker-lb-liu-title" @click="showPicker3">联动多列--值:--{{picker3.show}}</view>
		<lb-picker ref="picker3" level="3" :props="picker3.props" :value="picker3.send" :list="picker3.list" @confirm="confirmPicker3"
		 mode="multiSelector"></lb-picker>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	export default {
		components: {
			LbPicker
		},
		data() {
			return {
				picker1: {
					list: ['1', '2', '3', '4'],
					send: '2',
					show: '2'
				},
				picker2: {
					list: [
						[{
								label: '选项1',
								value: '1'
							},
							{
								label: '选项2',
								value: '2'
							},
							{
								label: '选项3',
								value: '3'
							}
						],
						[{
								label: '选项11',
								value: '11'
							},
							{
								label: '选项22',
								value: '22'
							},
							{
								label: '选项33',
								value: '33'
							}
						],
						[{
								label: '选项111',
								value: '111'
							},
							{
								label: '选项222',
								value: '222'
							},
							{
								label: '选项333',
								value: '333'
							}
						]
					],
					send: ['1', '11', '111'],
					show: '1-11-111'
				},
				picker3: {
					list: [{
							id: 1,
							name: '1',
							children: [{
									id: 2,
									name: '1-1',
									children: [{
										id: 3,
										name: '1-1-1'
									}]
								},
								{
									id: 4,
									name: '1-2'
								}
							]
						},
						{
							id: 5,
							name: '2'
						}
					],
					send: [],
					show: '',
					props: {
						label: 'name',
						value: 'id',
						children: 'children'
					}
				},
			}
		},
		onLoad(option) {

		},
		methods: {
			leftNavTap() {
				uni.navigateBack();
			},
			/************************** 单列picker *******************************************/
			showPicker1() {
				this.$refs.picker1.show();
			},
			confirmPicker1(e) {
				this.picker1.send = e.value;
				this.picker1.show = e.value;
			},
			/************************** 多列picker - 非联动 *******************************************/
			showPicker2() {
				this.$refs.picker2.show();
			},
			confirmPicker2(e) {
				this.picker2.send = e.value;
				this.picker2.show = e.value.join('-');
			},
			/************************** 多列picker - 联动 *******************************************/
			showPicker3() {
				this.$refs.picker3.show()
			},
			confirmPicker3(e) {
				console.log(e)
				this.picker3.send = e.value;
				this.picker3.show = e.item.map(item => item.name).join(',');
			},
		}
	}
</script>

<style lang="less">
	.picker-lb-liu-title {
		width: 90%;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1rpx solid red;
		margin: 10rpx auto;
	}
</style>
