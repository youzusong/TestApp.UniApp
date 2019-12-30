<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="primary" @click="qqlogin">QQ Login</button>
		<button type="primary" @click="gglogin">GG Login</button>
		<text>{{errmsg}}</text>
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
				title: 'Hello',
				errmsg: ''
			}
		},
		onLoad() {
			console.log('load index')
		},
		methods: {
			_login(p){
				console.log('click login : ' + p);
				
				try{
					const ysOauth = uni.requireNativePlugin('YS-Oauth');
					ysOauth.login({
						provider: p
					}, res => {
						console.log('login success');
						console.log(res);
					}, err => {
						console.log('login error');
						console.log(err);
					});
				}catch(e){
					let msg = this.errmsg;
					this.errmsg = msg + '\r\n' + e.message;
				}
			},
			
			qqlogin(){
				this._login('qq');
			},
			
			gglogin(){
				this._login('google');
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
