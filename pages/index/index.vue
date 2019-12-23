<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="primary" @click="richalert">Rich Alert</button>
		<button type="primary" @click="qqlogin">QQ Login</button>
	</view>
</template>

<script>
	import {
		MemberPage
	} from '../root'

	export default {
		//components:{parent},
		extends: MemberPage,

		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log('load index')
		},
		methods: {
			qqlogin(){
				const ysQQLogin = uni.requireNativePlugin('YS-QQLogin');
				ysQQLogin.login({
					appId: '1110039343'
				}, result => {
					console.log('qqlogin result');
					console.log(result)
				})
			},
			
			richalert(){
				const modal = uni.requireNativePlugin('modal');
				const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');
				dcRichAlert.show({
					position: 'bottom',
					title: "提示信息",
					titleColor: '#FF0000',
					content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
					contentAlign: 'left',
					checkBox: {
						title: '不再提示',
						isSelected: true
					},
					buttons: [{
							title: '取消'
						},
						{
							title: '否'
						},
						{
							title: '确认',
							titleColor: '#3F51B5'
						}
					]
				}, result => {
					const msg = JSON.stringify(result);
					modal.toast({
						message: msg,
						duration: 1.5
					});
					switch (result.type) {
						case 'button':
							console.log("callback---button--" + result.index);
							break;
						case 'checkBox':
							console.log("callback---checkBox--" + result.isSelected);
							break;
						case 'a':
							console.log("callback---a--" + JSON.stringify(result));
							break;
						case 'backCancel':
							console.log("callback---backCancel--");
							break;
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
