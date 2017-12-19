<template>
	<div class="date">
		<v-header></v-header>
		<DateDetail class="date-box"></DateDetail>
	</div>
</template>
<script>
	import Header from "@/components/Header/Header.vue"
	import DateDetail from "@/components/DateDetail/DateDetail.vue"
	export default{
		name:"actDate",
		components:{
			"v-header":Header,
			DateDetail
		}
	}
</script>
<style scoped lang="stylus">
	.date-box
		width 100%
		position fixed
		top 48px
</style>