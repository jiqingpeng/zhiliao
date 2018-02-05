<template>
	<transition>
		<div class="invite">
			<v-header></v-header>
			<section class="content postit">
				<article class="invite-icon">
					<img src="../../../static/invitationImg.png" alt="">
				</article>
				<Address></Address>
				<article class="dist">
					<header class="space-center">
						<span class="item">组织机构</span>
					</header>
					<div class="space-center">
						<p class="space-between line-count">
							<span class="line bf60"></span>
							<span class="line bccc"></span>
						</p>
					</div>
					<OrgDetail class="dist item"></OrgDetail>
				</article>
				<article class="dist">
					<p class="btn">
						<span>已报名点击查看详情</span>
					</p>
					<p class="item space-center">
						<img class="qrcode" src="../../../static/qrcode.jpg" alt="qrcode">
					</p>
					<p class="item space-center">
						<span>微信扫一扫 关注更多</span>
					</p>
					<p class="item space-center cf60">
						<span class="f30">盛情特邀您出席</span>
					</p>
				</article>
				<article class="dist">
					<div>xxx会议服务平台</div>
				</article>	
			</section>
		</div>
	</transition>
</template>
<script>
	import Header from '@/components/Header/Header.vue'
	import Address from '@/component/Address/Address.vue'
	import OrgDetail from '@/components/OrgDetail/OrgDetail.vue'
	export default{
		name:"Invite",
		
	    mounted() {
	      
	    },
		components:{
			"v-header":Header,
			Address,
			OrgDetail
		}
	}
</script>
<style scoped lang="stylus">
	.invite-icon
		width 100%
		img 
			width 100%
	.line-count
		width 120px
	.line
		width 56px
		height 6px
		border-radius 6px
	.qrcode
		width 210px
</style>