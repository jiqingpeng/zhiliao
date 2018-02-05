<template>
	<transition>
		<div class="actList">
			<article>
				<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
					<ul class="act-box">
						<li class="act-list" v-for="(item,index) in actList" @click="goDetail(item)">
							<header class="act-tit">{{item.name}}</header>
							<section class="act-cont">
								<div class="act-group">
									<p class="act-item">
										<img class="icon" src="../../../static/time-icon.png"/>
										<span class="time">时间：</span>
										<span class="txt">{{item.date}}</span>
									</p>
									<p class="act-item">
										<img class="icon" src="../../../static/site-icon.png"/>
										<span class="address">地点:</span>
										<span class="txt">{{item.address}}</span>
									</p>
								</div>
								<div class="act-atten">
									<img class="atten" src="../../../static/no-atten.png" alt="">
									<span class="txt">未关注</span>
								</div>
								<div class="act-state">
									已报名
								</div>
							</section>
						</li>
					</ul>
				</mt-loadmore>
			</article>
		</div>
	</transition>
</template>
<script>
	import axios from 'axios'
	import { Loadmore } from 'mint-ui'
	import router from '../../router/index'
	import aa from '../../mock.js'
	export default{
		name:"actList",
		data(){
			return {
				actList:[]
			}
		},
		created(){
			this.fetchData();
		},
		methods:{
			//获取最新消息
		    fetchData() {
		        axios.get('/aa')
			      .then(data => {
			      	this.actList=data.data.articles
			       })
			      .catch((error) => {
			        console.log(error);
			    });
			},
		    add(){
		    	var length = this.actList.length
				for(var i=length+1;i<length+11;i++){
					this.actList.push({"name":i})
				}
		    },
		    //上拉刷新
		    loadTop() {
				this.actList=[];
				this.fetchData();
				this.$refs.loadmore.onTopLoaded();
			},
			//下拉加载
			loadBottom() {
				this.add()
				this.$refs.loadmore.onBottomLoaded();
			},
			//详情页
			goDetail(item){
				this.$store.dispatch('getMessDetail',item);
				router.push({ name:'Detail', params:{ id:item.id }});
			}
		},
		components:{
			Loadmore
		}
	}
</script>
	<style scoped>
	.actList{
		position:fixed;
		top:48px;
		width:96%;
		bottom:40px;
		padding:0 2%;
		font-size:14px;
		overflow-x: auto;
		background:#f0f0f0;
	}
	.act-list{
		width:96%;
		padding:10px 2%;
		margin:5px 0;
		background:#fff;
		border-radius:6px;
		border:1px solid #fff;
		box-shadow:0px 1px 0.3px #e8e8e8;
	}
	.act-list .act-tit{
		width:100%;
		margin:10px 0;
		line-height: 20px;
	}
	.act-list .act-cont{
		display: flex;
		justify-content: space-between;
	}
	.act-list .act-cont .act-group{
		width:200px;
	}
	.act-list .act-cont .act-state{
		background:#fd823d;
		width:70px;
		height:22px;
		margin-top:26px;
		text-align: center;
		border-radius:10px;
		color:#fff;
		margin-left:4px;
	}
	.act-list .act-cont .act-atten{
		display: flex;
		justify-content: center;
		align-items: center;
		width:70px;
		height:20px;
		margin-top:26px;
		border:1px solid #f60;
		border-radius:10px;
		color:#f60;
	}
	.act-atten .atten{
		width:14px;
		height:14px;
	}
	.act-item{
		display: flex;
		height:30px;
	}
	.act-item span{
		margin-left:10px;
	}
	.act-item .icon{
		width:20px;
		height:20px;
	}
	.act-list .act-cont .green{
		background:#8fda37;
	}
	.act-list .act-cont .ccc{
		background:#ccc;
	}
	.slide-enter-active,.slide-leave-active{
		 transition: all 0.3s
	}
   	.slide-enter,.slide-leave-to{
		transform: translate3d(100%, 0, 0)
	}
</style>
