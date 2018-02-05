<template>
	<div class="pay">
		<v-header></v-header>
		<section class="pay-box postit content">
			<Address></Address>
			<article class="pay-status dist">
				<div class="space-between item">
					<p>
						<span>缴费状态:</span>
						<span>未填写</span>
					</p>
					<p >
						立即填写
					</p>
				</div>
				<div class="space-between item">
					<p>
						<span>发票填写:</span>
						<span>未填写</span>
					</p>
					<p>
						立即填写
					</p>
				</div>
				<div class="space-between">
					<p>
						<span>发票领取:</span>
						<span>未填写</span>
					</p>
					<p>
						立即填写
					</p>
				</div>
			</article>
			<article class="pay-calc dist">
				<div refs="a" class="pay-item" v-for="(payitem,index) in pay" :class='{redbord:index==nowIndex}' @click="payInit(index,$event)">
					<div class="space-between item">
						<p>{{payitem.type}}</p>
						<p v-if='index==nowIndex'>
							<span class="round redu" @click="redu($event)">-</span>
							<span>{{num}}</span>
							<span class="round add" @click="add($event)">+</span>
						</p>
						<p v-else>报名人数众多请尽快缴费</p>
					</div>
					<p class="item">￥{{payitem.price}}</p>
					<p class="item">{{payitem.msg}}</p>
				</div>
			</article>
		</section>
		<div class="pay-btn flex">
			<p class="flex1 txt space-center">
				<span>合计:</span>
				<span>￥{{pay[nowIndex].price*num}}</span>
			</p>
			<p class="flex1 online space-center">
				<span @click="goPaySure(online)">在线支付</span>
			</p>
			<p class="flex1 bank space-center">
				<span @click="goPaySure(bank)">银行转账</span>
			</p>
		</div>
	</div>
</template>
<script>
	import Header from "@/components/Header/Header.vue"
	import Address from "@/component/Address/Address.vue"
	import router from '../../router/index'
	export default{
		name:"Pay",
		data(){
			return{
				pay:[{
                    	type:"参会费",
                    	price:"1",
                    	msg:"缴费说明:缴费说明1"
               		 },{
                    	type:"报名费",
                    	price:"2",
                    	msg:"缴费说明:缴费说明2"
                    },{
                    	type:"会议费",
                    	price:"4",
                    	msg:"缴费说明:缴费说明3"
                    },{
                    	type:"签到费",
                    	price:"8",
                    	msg:"缴费说明:缴费说明4"
                    }],
                nowIndex:0,
                num:1,
                bank:0,
                online:1,
            }
        },
        created(){
        	this.init()
        },
		components:{
			"v-header":Header,
			Address
		},
		methods:{
			add:function(event){
				this.num++;
				event.stopPropagation(); 
			},
			redu:function(event){
				if(this.num = 2){
					this.num = 2
				}
				this.num--;
				event.stopPropagation(); 
			},	
			payInit:function(index,event){
				this.nowIndex= index;
				this.num= 1;
			},	
			init:function(){
				this.item=this.$store.state.getMessDetail;
			},
			goPaySure:function(type){
				router.push({ name:'PaySure', params:{ id:2,num:this.num,price:this.pay[this.nowIndex].price,payType:type}});
			}
		}
	}
</script>
<style scoped lang="stylus">
	.address
		flex 0.4
	.time
		flex 0.6
	.round
		width 16px
		height 16px
		line-height 16px
		text-align center
		display inline-block
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