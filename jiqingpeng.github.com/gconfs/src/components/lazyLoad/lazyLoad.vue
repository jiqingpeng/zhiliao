<template>
	<div>
		<img v-for="newItem in item" v-lazy="newItem.picUrl" class="item" alt="" >
		<!-- <li v-for="items in item" class="item">{{items.picUrl}}</li> -->
	</div>
</template>
<script>
	export default{
		name:"lazyLoad",
		data(){
			return{
				item:[
					{picUrl:"../../../static/swiper4.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"},
					{picUrl:"../../../static/swiper1.png"}
				]
			}
		}
	}
</script>
<style scoped lang="stylus">
	.item
		width 200px
		height 60px
		border 1px solid red
</style>