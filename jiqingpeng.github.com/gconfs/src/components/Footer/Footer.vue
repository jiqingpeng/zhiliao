<template>
	<div class="footer">
		<article>
			<ul class="foot-nav">
				<router-link to="/Home" tag="li" class="nav-list">
					<img src="" alt="">
					<span>会议</span>
				</router-link>
				<router-link to="/Info" tag="li" class="nav-list">
					<img src="" alt="">
					<span>消息</span>
				</router-link>
				<router-link to="/My" tag="li" class="nav-list">
					<img src="" alt="">
					<span>我的</span>
				</router-link>
			</ul>
		</article>
	</div>
</template>
<script>
	import router from '../../router/index'
	export default{
		name:"Footer",
		methods:{
			
		}
	}
</script>
<style scoped lang="stylus">
	
	.footer
		position fixed
		bottom 0
		width 100%
		.foot-nav
			width 100%
			height 40px
			display flex
			background #fff
			.nav-list
				flex 1
				display flex
				justify-content center
				align-items center
	.active
		color #f60
</style>