<template>
	<view class="my-tree" v-if="menuTemplateList.length">
		<view class="my-tree-item" v-for="(item, index) in menuTemplateList" :key="index">
			<!-- 多项 -->
			<template v-if="item.children && item.children.length">
				<view class="my-tree-item-subtitle" :style="{'padding-left':item.level*15 + 'rpx'}" @click="changeExpend(item)">
					<text class="title">{{item.title}}</text>
					<text class="arrow iconfont icon-houtui" :class="{'arrow-down':item.expend}"></text>
				</view>
				<view v-if="item.expend">
					<myTree v-if="item.expend" :menuTemplate="item.children" :menuNode="menuNode"></myTree>
				</view>
			</template>
			<!-- 单项 -->
			<template v-else>
				<view class="my-tree-item-value" @click.native.stop="checkItem(item)" :style="{'padding-left':item.level*15 + 'rpx'}">
					<text>{{item.title}}</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import myTree from './my-tree.vue'
	export default {
		name: 'myTree',
		components: {
			myTree
		},
		props: {
			menuNode: {
				type: Array
			},
			menuTemplate: {
				type: Array
			}
		},
		data() {
			return {
				menuTemplateList:[],
				menuNodeList:[],
			}
		},
		created() {
			this.menuTemplateList = this.menuTemplate;
			this.menuNodeList = this.menuNode;
		},
		mounted() {},
		methods: {
			//选中当前项
			checkItem(item){
				console.log(item);
			},
			//展开子级
			changeExpend(item) {
				this.$nextTick(() => {
					let expend = !item.expend;
					this.updateExpendSomeLevel(item.level, item.nodeKey);
					this.$set(item, 'expend', expend);
					if (!expend) {
						this.updateExpendDown(item, false);
					}
				})

			},
			//寻找符合条件的子级 并收起
			updateExpendDown(node, bool) {
				let that = this;
				this.menuNodeList.forEach(item => {
					if (item.nodeKey === node.nodeKey) {
						this.$set(item.node, 'expend', bool);
						if (item.node.children && item.node.children) {
							item.node.children.forEach(child => {
								return that.updateExpendDown(child, bool);
							})
						}
					}
				});
			},
			//寻找符合条件的同级 执行对应的同级及子级收起
			updateExpendSomeLevel(level, key){
				this.menuNodeList.forEach(item=>{
					console.log(item);
					if(item.node.level == level && item.nodeKey != key){
						this.updateExpendDown(item, false);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.my-tree {
		width: 100%;
		list-style: none;
		font-size: 28rpx;

		.my-tree-item {
			box-sizing: border-box;
			width: 100%;

			.my-tree-item-subtitle {
				position: relative;
				padding: 20rpx 0;
				border-bottom: 1px solid #eee;

				.arrow {
					font-size: 28rpx;
					color: red;
					position: absolute;
					right: 10rpx;
					top: 50%;
					transform: translateY(-50%);
					transition-duration: .3s;

					&.arrow-down {
						transform: translateY(-50%) rotateZ(-90deg);
					}
				}
			}

			.my-tree-item-value {
				padding: 20rpx 0;
				border-bottom: 1px solid #eee;
			}
		}
	}
</style>
