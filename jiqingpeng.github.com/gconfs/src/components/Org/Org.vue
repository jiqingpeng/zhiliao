<template>
	<div class="org">
		<v-header></v-header>
		
		<section class="content postit">
				<OrgDetail class="dist item"></OrgDetail>
				<div class="dist item">
					说明：每场会议的组织机构的类型都不相同，如主办单位，协办单位，承办单位，指导单位规范行业秩序，健全各项管理自律性管理制度，制定并组织实施教育系统后勤管理服务行业准则，建立完善行业自律性管理约束机制，规范会员行为，协调会员关系，维护行业的和谐与稳定。
				</div>
				
		</section>
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
	
</style>