<template>
	<div>
		<article class="head-bg">
			<img src="../../../static/bg.png" alt="">
		</article>
		<article class="login-txt">
			<img class="icon" src="../../../static/password-icon.png" alt="">
			<span class="txt">手机号</span>
			<input ref="user" type="text">
		</article>
		<article class="login-txt">
			<img class="icon" src="../../../static/user-icon.png" alt="">
			<span class="txt">密码</span>
			<input ref="password" type="text">
		</article>
		<article class="login-btn" @click="goHome()">
			<p>
				<i>登陆</i>
			</p>
		</article>
		<article class="login-link">
			<p>忘记密码</p>
			<p>注册</p>
		</article>
		<article class="login-log">
			<p>群英会管理系统平台</p>
		</article>
	</div>
</template>
<script>
	import router from '../../router/index'
	import Home from '../Home/Home.vue'
	export default{
		name:"Login",
		methods:{
			goHome(){
				console.log(this.$refs.user.value)
				console.log(this.$refs.user.value=="111" && this.$refs.password.value=="222")
				if(this.$refs.user.value==="111" && this.$refs.password.value==="222"){
					router.push({name: 'Home'})
				}else{
					alert("账号或密码错误")
					this.$refs.user.value=" "
					this.$refs.password.value=" "
				}
			}
		}
	}
</script>
<style lang="stylus">
	.head-bg
		width 100%
		height 30%
		img
			width 100%
			height 100%
	.login-txt
		display flex
		border-bottom 1px solid #ccc
		margin 4% 6%
		padding 2%
		input 
			border none
			outline none
		.icon
			widht 20px
			height 20px
		.txt
			margin-left 10px
	.login-btn
		width 100%
		display:flex
		align-items center
		justify-content center
		p
			width 80%
			height 40px
			background #f9752b	
			color #fff
			display:flex
			align-items center
			justify-content center
			border-radius 10px
	.login-link
		width 80%
		margin 10px auto
		display flex
		justify-content space-between
	.login-log
		display flex
		justify-content center
</style>