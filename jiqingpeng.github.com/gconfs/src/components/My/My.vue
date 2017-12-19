<template>
	<div class="my">
		<v-header></v-header>
		<section class="my-box">
			<header class="my-head">
				<img class="bg" src="../../../static/myBanner.png" alt=""/>
				<span class="name">用户名</span>
			</header>
			<ul>
				<li class="my-list">
					<p class="my-l">
						<img src="../../../static/inform-icon.png" alt="">
						<span>个人信息</span>
					</p>
					<p>></p>
				</li>
				<li class="my-list">
					<p class="my-l">
						<img src="../../../static/discussion-icon.png" alt="">
						<span>发票信息</span>
					</p>
					<p>></p>
				</li>
				<li class="my-list">
					<p class="my-l">
						<img src="../../../static/ticket-icon.png" alt="">
						<span>密码修改</span>
					</p>
					<p>></p>
				</li>
				<li class="my-list">
					<p class="my-l">
						<img src="../../../static/discussion-icon.png" alt="">
						<span>使用帮助</span>
					</p>
					<p>></p>
				</li>
				<li class="my-list">
					<p class="my-l">
						<img src="../../../static/apply-icon.png" alt="">
						<span>意见反馈</span>
					</p>
					<p>></p>
				</li>
			</ul>
		</section>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import Header from '@/components/Header/Header.vue'
	import Footer from '@/components/Footer/Footer.vue'
	export default{
		name:"My",
		components:{
			"v-header":Header,
			"v-footer":Footer
		}
	}
</script>
<style scoped lang="stylus">
	.my-box
		width 100%
		position fixed
		top 48px
		.my-head
			width 100%
			height 140px
			position relative
			.bg
				position absolute
				left 0
				top 0
				width 100%
				height 100%
			.name
				position absolute
				left 44%
				bottom 0
		.my-list
			
			width 84%
			padding 0 8%
			height 40px
			margin 10px 0
			display flex
			justify-content space-between
			align-items center
			.my-l
				display flex
				align-items center
				img
					width 20px
					height 20px

</style>
