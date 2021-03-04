<template>
	<view class="form">
		
		<!-- 表单组件 开始 -->
			<view class="form-box">
				<view class="title">button</view>
				<!-- getUserInfo -->
				<button type="primary" @getuserinfo="getuserinfo" open-type="getUserInfo">getUserInfo</button>
				<!-- getPhoneNumber -->
				<button type="primary" @getphonenumber="getPhoneNumber" open-type="getPhoneNumber">getPhoneNumber</button>
				<!-- openSetting -->
				<button type="primary" @click="openSetting">openSetting</button>
				<!-- getSetting -->
				<button type="primary" @click="getSetting">getSetting</button>
				<view class="title">登录相关</view>
				<button type="primary" @click="goLogin">买东西(必须登录)</button>
				<view class="title">跳转</view>
				<button type="primary" @click="goList">前往列表</button>
				<view class="title">checkbox</view>
				<view class="checkbox-list" v-if="checkboxs.length && checkboxsShow">
					<checkbox-group @change="checkboxChange">
						<label v-for="item in checkboxs" :key="item.value">
							<view><checkbox :value="item.value" :checked="item.checked" /></view>
							<view>{{item.name}}</view>
						</label>
					</checkbox-group>
				</view>
				<view class="title">input</view>
				<view class="input-container">
					<input class="uni-input" focus placeholder="自动获得焦点" />
					<input class="uni-input" maxlength="10" placeholder="最大输入长度为10" />
					<input class="uni-input" type="number" placeholder="这是一个数字输入框" />
					<input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
					<input class="uni-input" @input="inputReadIn" type="text" placeholder="测试input事件">
					<input class="uni-input" @blur="inputTestBlur" type="text" placeholder="测试blur事件">
				</view>
				<view class="title">radio</view>
				<view class="radio-container">
					<radio-group @change="radioGroupChange" v-if="radiosShow">
						<label v-for="(item, index) in radios" :key="item.value">
							<view>
								<radio :value="item.value" :checked="item.value === currentRadioValue"></radio>
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
				<view class="title">slider</view>
				<view>
					<slider value="60" min="1" max="100" show-value @change="sliderChange"></slider>
				</view>
				<view class="title">switch</view>
				<view>
					<switch :checked="switchFlag" @change="switchChange"></switch>
				</view>
				<view class="title">textarea</view>
				<view>
					<textarea :value="textareaValue" placeholder="请输入多行文本框" maxlength="100" ></textarea>
				</view>
			</view>
		<!-- 表单组件 结束 -->
		
	</view>
</template>

<script>
	import Token from '@/utils/verify.js';
	import {verifyTokenStorage} from '@/utils/common.js';
	export default {
		data(){
			return{
				form:{},
				/***************************** checkbox ************************************/ 
				checkboxsShow:false,
				checkboxsChecked:['USA','CHN'],
				checkboxs:[
					{
                        value: 'USA',
                        name: '美国'
                    },
                    {
                        value: 'CHN',
                        name: '中国'
                    },
                    {
                        value: 'BRA',
                        name: '巴西'
                    },
                    {
                        value: 'JPN',
                        name: '日本'
                    },
                    {
                        value: 'ENG',
                        name: '英国'
                    },
                    {
                        value: 'FRA',
                        name: '法国'
                    }
                ],
				radios:[
					{
						value:1,
						name:1
					},
					{
						value:2,
						name:2
					},
					{
						value:3,
						name:3
					}
				],
				currentRadioValue:1,
				radiosShow:false,
				switchFlag:true,
				textareaValue:'',
				pickers: ['中国', '美国', '巴西', '日本'],
				pickerIndex:0
			}
		},
		onLoad(option){
			console.log('进入form onload');
		},
		onShow(){
			console.log('进入form onshow');
			this.checkboxInit();
			this.radioGroupInit();
		},
		methods:{
			pickerChange(e){
				console.log(e.detail);
				this.pickerIndex = e.detail.value*1;
			},
			//switch - @change事件
			switchChange(e){
				console.log(e.detail.value);
			},
			//slider - @change事件
			sliderChange(e){
				console.log(e);
			},
			//radio - 初始化
			radioGroupInit(){
				this.radiosShow = false;
				setTimeout(_=>{
					this.radiosShow = true;
				}, 100);
			},
			//radio - @change事件
			radioGroupChange(e){
				console.log(e.detail.value);
			},
			//input - @blur事件
			inputTestBlur(e){
				console.log(e.detail.value);
			},
			//input- @input事件
			inputReadIn(e){
				console.log(e.detail.value);
			},
			//checkbox - 初始化
			checkboxInit(){
				this.checkboxsShow = false;
				setTimeout(_=>{
					this.checkboxs.forEach(item=>{
						if(this.checkboxsChecked.indexOf(item.value)>=0){
							item.checked = true;
						}
					});
					this.checkboxsShow = true;
				}, 100);
			},
			//checkbox - change
			checkboxChange(e){
				console.log(e);
			},
			//后退上一级
			leftNavTap(){
				console.log(1);
			},
			//获取用户基本信息
			getuserinfo(e){
				console.log(e);
			},
			//获取用户手机号信息
			getPhoneNumber(e){
				console.log(e);
			},
			//唤醒小程序的设置
			openSetting(){
				console.log('openSetting:ok');
				uni.openSetting({
					success(res){
						console.log(res);
					},
					fail(err){
						console.log(err);
					}
				})
			},
			//获取用户的当前设置
			getSetting(){
				uni.getSetting({
					success(res){
						console.log(res.authSetting);
					},
					fail(err){
						console.log(err);
					}
				})
			},
			//前往登录
			goLogin(){
				if(!!verifyTokenStorage()){
					console.log('login:ok');
				} else{
					console.log('需要登录');
					uni.navigateTo({
					    url: '/pages/auth/auth'
					});
				}
			},
			//前往列表
			goList(){
				uni.navigateTo({
					url:'/pages_a/list/list'
				})
			}
		}
	}
</script>

<style lang="less">
	.form-box{
		padding:20rpx;
		.title{
			font-size:32rpx;
			padding:10rpx 0;
		}
		button{
			margin-bottom: 10rpx;
		}
		.checkbox-list{
			width:100%;
			label{
				display: flex;
				width:100%;
				flex-direction: row;
				margin-bottom: 10rpx;
			}
		}
		.radio-container{
			width:100%;
			label{
				display: flex;
				width:100%;
				flex-direction: row;
				margin-bottom: 10rpx;
			}
		}
	}
</style>
