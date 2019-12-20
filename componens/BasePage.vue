<template>
	<view>
		<button v-on:click="count++">点击计算点击次数：{{count}}次</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				count: 0
			}
		},
		onLoad(){
			console.log('load basepage')
		},
	}
</script>

<style>
</style>
