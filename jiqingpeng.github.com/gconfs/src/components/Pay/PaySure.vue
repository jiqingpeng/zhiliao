<template>
	<div class="pay-sure">
		<v-header></v-header>
		<section class="pay-box postit content">
			<article class="pay-tit dist">
				<header class="item">{{item.name}}</header>
				<div class="flex payt-body item">
					<p class="address">
						<img class="icon" src="../../../static/site-icon.png" alt="site-icon">
						<span>{{item.address}}</span>
					</p>
					<p class="time">
						<img class="icon" src="../../../static/time-icon.png" alt="time-icon">
						<span>
							<!-- <span>03/25</span>
							<span>-</span>
							<span>03/28</span> -->
							{{item.date}}
						</span>
					</p>
				</div>
			</article>
			<article class="pay-status dist">
				<div class="space-between item">
					<p>吉庆鹏</p>
					<p>18201571705</p>
				</div>
				<div class="space-between item">
					<p>VIP嘉宾</p>
					<p>￥{{itemData.price}}*{{itemData.num}}</p>
				</div>
			</article>
			<article class="pay-calc dist">
				<div v-if="itemData.payType">
					<p>支付说明</p>
					<p class="indent">通过平台在线支付，主办方将立即收到您的缴费信息；缴费成功后，请及时安排参会议行程；您可通过群英汇平台预定官方活动指定酒店，增加更多与参会代表交流机会。</p>
					<p class="indent">缴费成功后如特殊原因无法参加，需要退款，请联系主办方。</p>
				</div>
				<div v-else>
					<p>转账说明</p>
					<p class="indent">通过平台在线支付，主办方将立即收到您的缴费信息；缴费成功后，请及时安排参会议行程；您可通过群英汇平台预定官方活动指定酒店，增加更多与参会代表交流机会。</p>
					<p class="indent">缴费成功后如特殊原因无法参加，需要退款，请联系主办方。</p>
				</div>
			</article>
		</section>
		<div class="pay-btn flex">
			<p class="flex1 txt space-center">
				<span>合计:</span>
				<span>￥{{itemData.price*itemData.num}}</span>
			</p>
			<p class="flex1 online space-center" v-if="itemData.payType">
				<span @click="goPaySure()">在线支付</span>
			</p>
			<p class="flex1 bank space-center" v-else>
				<span @click="goPaySure()">银行转账</span>
			</p>
		</div>
	</div>
</template>
<script>
	import Header from "@/components/Header/Header.vue"
	import router from '../../router/index'
	export default{
		name:"PaySure",
		data(){
			return{
				itemData:{}
            }
        },
        created(){
        	this.init()
        },
		components:{
			"v-header":Header,
		},
		methods:{
			init:function(){
				this.item=this.$store.state.getMessDetail;
				this.itemData = this.$route.params
				console.log(this.itemData)
			},
			add:function(event){
				this.num++;
				event.stopPropagation(); 
			},
			redu:function(event){
				this.num--;
				event.stopPropagation(); 
			},	
			payInit:function(index,event){
				this.nowIndex= index;
				this.num= 1;
			},	
			goPayDetail:function(){
				this.router.push()
			}
		}
	}
</script>
<style scoped lang="stylus">
	.address
		flex 0.4
	.time
		flex 0.6
	.item
		padding 4px 0
	.round
		width 16px
		border 1px solid #ccc
		border-radius 50%
	.pay-item
		border-radius 6px
		border 1px solid #ccc
		margin-top 10px
		padding 5px
	.pay-btn
		width 100%
		position fixed
		bottom 0
		left 0
		color #fff
		height 40px
		background #fff
		.txt
			color #000
		.bank
			background red
		.online
			background #f60	
	.redbord
		border 1px solid red
	.active
		display none
</style>