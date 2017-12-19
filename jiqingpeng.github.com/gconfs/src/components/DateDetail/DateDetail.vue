<template>
	<div class="">
		<article class="DateDetail">
			<header>2017年07月04日</header>
			<section class="date-content">
				<div class="date-list">
					<span>10.10-10.10</span>
					<span class="txt">欢迎致辞</span>
				</div>
				<div class="date-list">
					<span>10.10-10.10</span>
					<span class="txt">功能介绍与应用实操</span>
				</div>
				<div class="date-list">
					<span>10.10-10.10</span>
					<span class="txt">平台应用政策</span>
				</div>
			</section>
		</article>
	</div>
</template>
<script>
	export default{
		name:"DateDetail",
		created(){
			console.log(1)
		},
		components:{
			
		}
	}
</script>
<style scoped lang="stylus">
	.DateDetail
		width 94%
		padding 0 3%
		header
			margin 15px 0
			text-align center
		.date-list
			display flex
			height 40px
			align-items center
			.txt
				margin-left 5px
</style>