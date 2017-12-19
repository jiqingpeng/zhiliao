<template>
	<div >
		<v-header></v-header>
		<article class="enrol">
			<div class="enrol-list">
				<span class="txt">姓名:</span>
				<input type="text">
				<span class="star">
					<i>*</i>
				</span>
			</div>
			<div class="enrol-list">
				<span class="txt">手机号:</span>
				<input type="text">
				<span class="star">
					<i>*</i>
				</span>
			</div>
			<div class="enrol-list">
				<span class="txt">单位名称:</span>
				<input type="text">
				<span class="star">
					<i>*</i>
				</span>
			</div>
			<div class="enrol-btn">
				<span>立即报名</span>
			</div>
		</article>
	</div>
</template>
<script>
	import Header from "@/components/Header/Header.vue" 
	export default{
		name:"Enrol",
		components:{
			"v-header":Header
		}
	}
</script>
<style scoped lang="stylus">
	.enrol
		position fixed
		top 48px
		bottom 1px
		width 92%
		padding 0 4%
		.enrol-list
			display flex
			justify-content space-between
			border-bottom 1px solid #ccc
			height 60px
			align-items center
			input
				border none
				outline none	
			.star
				width 20px
				display flex
				justify-content center
				align-items center
				color red
		.enrol-btn
			width 60%
			height 40px
			display flex
			margin 20px auto 0
			background #f60
			align-items center
			justify-content center
			color #fff
			border-radius 6px

</style>