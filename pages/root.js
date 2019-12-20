import Vue from 'vue'

export const MemberPage = Vue.component('MemberPage', {
	onLoad() {
		console.log('load MemberPage')
	}
})

export const ShopPage = Vue.component('ShopPage', {
	onLoad(){
		console.log('load ShopPage')
		
		uni.showToast({
			title: 'load shop'
		})
	}
})