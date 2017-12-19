<template>
	<div class="home">
		<v-header :title="title"></v-header>
		<actList></actList>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import Header from '@/components/Header/Header.vue'
	import actList from '@/components/actList/actList.vue'
	import Footer from '@/components/Footer/Footer.vue'
	export default{
		name:"Home",
		data(){
			return{
				title:"群英会会议"
			}
		},
		components:{
			"v-header":Header,
			actList,
			"v-footer":Footer,
		}
	}
</script>
<style lang="stylus">
	.home
		position relative
</style>