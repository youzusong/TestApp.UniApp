<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="primary" @click="qqlogin">QQ Login</button>
	</view>
</template>

<script>
	import { MemberPage } from '../root'
	
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
				uni.showToast({
					title: 'QQ Login'
				})
				
				const ysQQLogin = uni.requireNativePlugin('YS-QQLogin');
				
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
