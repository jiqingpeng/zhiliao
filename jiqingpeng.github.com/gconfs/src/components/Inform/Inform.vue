<template>
	<div class="Info">
		<v-header></v-header>
		<article class="infoData">
			<mt-loadmore :top-method="loadTop" :topPullText="txt" ref="loadmore">
				<ul class="info-box">
					<li class="info-list" v-for="(item,index) in actList" @click="goDetail(item)">
						<p class="time"><span>{{item.date}}</span></p>
						<p class="info"><span>{{item.name}}</span></p>
					</li>
				</ul>
			</mt-loadmore>
		</article>
	</div>
</template>
<script>
	import Header from '@/components/Header/Header.vue'
	import axios from 'axios'
	import { Loadmore } from 'mint-ui'
	import bb from '../../mock.js'
	export default{
		name:"Inform",
		data(){
			return {
				actList:[],
				txt:"上拉加载"
			}
		},
		created(){
			this.fetchData();
		},
		methods:{
			//获取最新消息
		    fetchData() {
		        axios.get('/bb')
			      .then(data => {
			      	console.log(data)
			        this.actList=data.data.articles
			        console.log(this.actList)
			      })
			      .catch((error) => {
			        console.log(error);
			    });
		    },
		    add(){
		    	var length = this.actList.length
				for(var i=length+1;i<length+11;i++){
					this.actList.unshift({"name":i})
				}
		    },
		    //上拉刷新
		    loadTop() {
		    	this.add();
				this.$refs.loadmore.onTopLoaded();
			},
			//下拉加载
			// loadBottom() {
			// 	this.add()
			// 	this.$refs.loadmore.onBottomLoaded();
			// }
		},
		components:{
			"v-header":Header,
			Loadmore
		}
	}
</script>
<style lang="stylus" scoped>
	.infoData
		position fixed
		width 100%
		top 74px
		bottom 40px
		overflow-y auto
		.info-box
			width 100%
			.info-list
				display flex
				width 100%
				flex-direction column
				justify-content center
				align-items center
				.time,.info
					display flex
					justify-content center
					align-items center
				.time
					margin-top 10px
					height 40px
					justify-content center
					align-items center
				.info
					width 80%
				
</style>