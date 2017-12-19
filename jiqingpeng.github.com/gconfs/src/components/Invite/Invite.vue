<template>
	<transition>
		<div class="invite">
			<v-header></v-header>
			<div class="swiper">
				<swiper :options="swiperOption"  ref="mySwiper">  
	                <!-- 这部分放你要渲染的那些内容 -->  
	                <!-- <swiper-slide v-for="item in items"> 
	                    <img :src="item" class="index_img">
	                </swiper-slide>  --> 
	                <swiper-slide class="home">
	                	<img src="../../../static/inviTitle.png" alt="">
	            		<article>
	            			<div class="invit-group">
	            				<header class="tit">2017中国东盟企业2017中国东盟企业</header>
		            			<p class="time">
		            				<span>会议时间</span>
		            				<span>2017-11-15</span>
		            			</p>
		            			<p class="address">
		            				<span>会议地点</span>
		            				<span>北京市</span>
		            			</p>
	            			</div>
	            		</article>
	                </swiper-slide>
	    			<swiper-slide class="home">
	    				<article>
	            			<div class="invit-group">
	            				<header class="tit">欢迎词</header>
		            			<div class="scroll">我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额我们这么多人什么的的干涉他额</div>
	            			</div>
	            		</article>
	    			</swiper-slide>
	    			<swiper-slide class="bg">
	    				<article>
	                		<header>活动日程</header>
							<DateDetail></DateDetail>
	                	</article>
	    			</swiper-slide>
	    			<swiper-slide class="bg">
	    				<article>
	                		<header>住址机构</header>
							<OrgDetail></OrgDetail>
	                	</article>
	    			</swiper-slide>
	                <!-- 这是轮播的小圆点 -->  
	                <!-- <div class="swiper-pagination" slot="pagination"></div>   -->
	            </swiper>
			</div>
		</div>
	</transition>
</template>
<script>
	import Header from '@/components/Header/Header.vue'
	import OrgDetail from '@/components/OrgDetail/OrgDetail.vue'
	import DateDetail from '@/components/DateDetail/DateDetail.vue'
	import Vue from 'vue'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css') 
	export default{
		name:"Invite",
		data () {
	      return {
	        swiperOption: {  
                	notNextTick: true,
                    pagination: '.swiper-pagination',  
                    slidesPerView: 'auto',  
                    centeredSlides: true,  
                    paginationClickable: true,
                    direction : 'horizontal',
                    // loop:"auto",
                    // autoplay : 3000,
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex; 
                    },  
                }, 
            swiperSlides: [1, 2, 3, 4, 5]
	      }
    	},
	    mounted() {
	      // setInterval(() => {
	      //   console.log('simulate async data')
	      //   let swiperSlides = this.swiperSlides
	      //   if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
	      // }, 3000)
	    },
		components:{
			"v-header":Header,
			swiper,
			swiperSlide,
			OrgDetail,
			DateDetail
		}
	}
</script>
<style scoped lang="stylus">
	.swiper
		width 100%
		height 100%
		position fixed
		top 48px
		.swiper-wrapper
			width 100%;
			height 100%
			.home
				width 100%
				height 520px
				position relative
				img
					width 100%
					height 520px
				article
					width 100%
					display flex
					justify-content center
					position absolute
					left 0
					top 50px
					bottom 1px
					overflow-y auto
					color #fdad30
					.invit-group
						width 80%
						display flex
						flex-direction column
						justify-content center
						align-items center
						
					.tit
						font-size 20px
						text-align center
					.time
						margin-top 20px
					.address
						margin-top 20px
			.h400
				width 100%
				height 500px
				
			.h500
				width 100%
				height 600px
</style>