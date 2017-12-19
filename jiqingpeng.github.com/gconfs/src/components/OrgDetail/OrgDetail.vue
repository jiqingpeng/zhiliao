<template>
	<div class="orgDetail">
		<section class="box">
			<section class="org">
				<article class="org-unit">
					<header class="org-tit">
						<span class="org-line"></span>
						<span class="org-txt">主办单位</span>
					</header>
					<section class="org-list">
						<div class="org-name">中国教育后勤协会</div>
						<div class="org-name">中国教育后勤协会</div>
						<div class="org-name">中国教育后勤协会</div>
					</section>
				</article>
			</section>
			<section class="org-instruction">
				说明：每场会议的组织机构的类型都不相同，如主办单位，协办单位，承办单位，指导单位规范行业秩序，健全各项管理自律性管理制度，制定并组织实施教育系统后勤管理服务行业准则，建立完善行业自律性管理约束机制，规范会员行为，协调会员关系，维护行业的和谐与稳定。
			</section>
		</section>
	</div>
</template>
<script>
	export default{
		name:"OrgDetail",
		components:{
			
		}
	}
</script>
<style scoped >
.box{
	width:100%;
}
.org{
	width:96%;
	padding:0 2%;
	display: flex;
	flex-direction:column;
}
.org-unit{
	width:96%;
	padding:0 2%;
	background:#fff;
	border-radius:10px;
	box-shadow:0px 2px 4px #e0dcdb; 
	border-radius:10px;
	margin-top:5px;
}
.org-unit .org-tit{
	margin:10px 0;
	display:flex;
}
.org-unit .org-tit .org-txt{
	margin-left:10px;
}
.org-unit .org-tit .org-line{
	width:5px;
	border-radius:3px;
	background:#f9752b;
}
.org-unit .org-name{
	margin:10px 0;
}
.org-list{
	margin-left:15px;
}
.org-instruction{
	width:92%;
	padding:0 3%;
	font-size: 12px;
	margin-top:20px;
	color:#b4b4b4;
	line-height: 24px;
}
</style>