<template>
	<div class="org">
		<v-header></v-header>
		<OrgDetail class="org-box"></OrgDetail>
	</div>
</template>
<script>
	import Header from "@/components/Header/Header.vue"
	import OrgDetail from "@/components/OrgDetail/OrgDetail.vue"
	export default{
		name:"Org",
		components:{
			"v-header":Header,
			OrgDetail
		}
	}
</script>
<style scoped lang="stylus">
	.org-box
		position fixed
		top 48px
</style>