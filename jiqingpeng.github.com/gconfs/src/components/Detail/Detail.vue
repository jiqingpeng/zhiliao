<template>
	<div class="detail">
		<v-header></v-header>
		<section class="detail-box content postit ">
			<section class="intro dist">
				<header class="tit">{{item.name}}</header>
				<article>
					<div class="int-list">
						<img src="" alt="">
						<span>时间:</span>
						<span>{{item.date}}</span>
					</div>
					<div class="int-list">
						<img src="" alt="">
						<span>地点:</span>
						<span>{{item.address}}</span>
					</div>
					<transition
						name="fade"
					    enter-active-class="animated fadeInDown"
					    leave-active-class="animated fadeOutDown"
				  	>
						<div v-if="isActive">
							<div  class="int-list">
								<img src="" alt="">
								<span>参会状态:</span>
								<span>
									<i class="f60">待审核</i>
									<i class="f60">-</i>
									<i class="f60">审核通过</i>
									<i>-</i>
									<i>参会</i>
								</span>
							</div>
							<div  class="unit int-list">
								<div>
									<img src="" alt="">
									<span>主办方:</span>
								</div>
								<ul>
									<li>北京市泽财汇中科技有些公司</li>
									<li>北京市泽财汇中科技有些公司</li>
									<li>北京市泽财汇中科技有些公司</li>
								</ul>
							</div>
						</div>
					</transition>
					<div class="toggle-btn">
						<img @click="toggle" :src="isActive ? a : b" alt="">
					</div>
				</article>
			</section>
			<section class="latex dist">
				<div class="latex-col">
					
						<div class="latex-box latex-l" @click="goInvite()">
							<span class="round"><img src="../../../static/intro.png" alt=""></span>
							<span class="txt">邀请函</span>
						</div>
					
					<div class="latex-box" @click="goOrg()">
						<span class="round"><img src="../../../static/institution.png" alt=""></span>
						<span class="txt">组织机构</span>
					</div>
					<div class="latex-box latex-r" @click="goDate()">
						<span class="round"><img src="../../../static/institution.png" alt=""></span>
						<span class="txt">日程</span>
					</div class="latex-box">
				</div>
				<div class="latex-col">
					<div class="latex-box latex-l" @click="fade()" :class="aa" ref="fade">
						<span class="round"><img src="../../../static/intro.png" alt=""></span>
						<span class="txt">嘉宾</span>
					</div>
					<div class="latex-box" @click="goEchart()">
						<span class="round"><img src="../../../static/fingerpost.png" alt=""></span>
						<span class="txt">会议指南</span>
					</div>
					<div class="latex-box latex-r" @click="goPay()">
						<span class="round"><img src="../../../static/intro.png" alt=""></span>
						<span class="txt">缴费</span>
					</div class="latex-box">
				</div>	
			</section>
			<section class="fnav">
				<section class="fnav-list dist">
					<div>
						<img src="" alt="">
						<span>机票高铁</span>
					</div>
					<div>></div>
				</section>
				<section class="fnav-list  dist" @click="goInform()">
					<div>
						<img src="" alt="">
						<span>活动通知</span>
					</div>
					<div>></div>
				</section>
				<section class="fnav-list  dist">
					<div>
						<img src="" alt="">
						<span>会议讨论</span>
					</div>
					<div>></div>
				</section>
				<section class="fnav-list  dist" @click="goEnrol()">
					<div>
						<img src="" alt="">
						<span>报名信息</span>
					</div>
					<div>></div>
				</section>
			</section>
		</section>
	</div>
</template>
<script>
	import Header from '@/components/Header/Header.vue'
	import router from '../../router/index'
	export default{
		name:"Detail",
		data () {
            return {
                isActive: false,
            	a:require('../../../static/downward.png'),
            	b:require('../../../static/upward.png'),
            	title:"会议详情",
            	item:this.$store.state.getMessDetail,
            	aa:'aa'
            }
        },
        created(){
        	this.init();
        },
		methods:{
			fade:function(){
		        console.log(this.aa)
		        this.aa="animated bounceOutLeft"
		        // addClass('animated bounceOutLeft')
		    },
			init(){
				this.item=this.$store.state.getMessDetail
				console.log(this.item)
			},
			toggle(){
				this.isActive=!this.isActive
			},
			goInvite(){
				router.push({ name:'Invite', params:{ id:2 }})
			},
			goOrg(){
				router.push({ name:'Org', params:{ id:2 }})
			},
			goDate(){
				router.push({ name:'actDate', params:{ id:2 }})
			},
			goEnrol(){
				router.push({ name:'Enrol', params:{ id:2 }})
			},
			goEchart(){
				router.push({ name:'Echart', params:{ id:2 }})
			},
			goInform(){
				router.push({ name:'Inform', params:{ id:2 }})
			},
			goPay(){
				router.push({ name:'Pay', params:{ id:2 }})
			}
		},
		// computed:{
		// 	item(){
		// 		return this.$store.state.getMessDetail
		// 	}
		// },
		components:{
			"v-header":Header
		}
		
	}
</script>
<style lang="stylus" scoped>
	.detail
		
		.active
			display none
		.f60
			color #f60
		.detail-box
			.intro
				font-size 16px
				.tit
					font-size 18px
					margin-top 10px
				.int-list
					display flex
					margin-top 10px
				.unit
					display flex
				.active
					display none
				.toggle-btn
					display flex
					align-items center
					justify-content center
					img
						width 20px
						margin 10px 0
			.latex
				display flex
				flex-direction column
				.latex-col
					display flex
					justify-content space-between
					.latex-box
						display flex
						flex 1
						flex-direction column
						align-items center
						justify-content center
						margin 10px 0
						.round
							width 60px
							height 60px
							background #f60
							display flex
							align-items center
							justify-content center
							border-radius 50%
							img
								width 25px
								height 25px
					.latex-l
						justify-content left
					.latex-r
						justify-content right
			.fnav
				.fnav-list
					display flex
					justify-content space-between
					align-items center
					height 40px
</style>
