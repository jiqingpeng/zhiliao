<template>
	<div class="header">
		<img class="back" v-if='title !== "会议"&&title!== "我的"&&title!== "消息"' @click="goback()" src="../../../static/icon-back.png" alt="">
		<article class="txt">{{title}}</article>
	</div>
</template>	
<script>
	export default{
		name:"Header",
		methods:{
			goback(){
				this.$router.back()
			}
		},
		created(){
			
		},
		computed: {
      		title () {
		        switch (this.$route.path.split('/')[1]) {
		          case 'Home':
		            return '会议'
		          case 'Detail':
		            return '会议详情'
		          case 'Invite':
		            return '邀请函'
		          case 'Org':
		            return '组织机构'
		          case 'actDate':
		            return '日程'
		          case 'Enrol':
		            return '报名信息'
		          case 'Inform':
		            return "消息详情"
		          case 'My':
		            return "我的"
		          case 'Info' :
		          	return"消息"
		        }
	      }
    	}
	}
</script>
<style lang="stylus">
	.header
		position fixed
		width 100%
		height 48px
		background #f60
		display flex
		align-items center
		justify-content center
		color #fff
		z-index 1
		.txt
			height 20px
		.back
			position fixed
			width 20px
			heigth 20px
			left 10px
			top 14px	

</style>	