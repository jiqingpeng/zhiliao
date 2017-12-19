<template>
	<div class="Info">
		<v-header></v-header>
		<ul class="info">
			<li class="info-list" v-for="data in actList" @click="goInfo()">
				<div class="info-l">
					<span>{{data.date}}</span>
					<span>{{data.name}}</span>
				</div>
				<div>></div>
			</li>
		</ul>
		<v-footer></v-footer>
	</div>
</template>
<script>
	import axios from 'axios'
	import router from '../../router/index'
	import Header from '@/components/Header/Header.vue'
	import Footer from '@/components/Footer/Footer.vue'
	export default{
		name:"Info",
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
		        axios.get('/info')
			      .then(data => {
			      	console.log(data)
			        this.actList=data.data.articles
			        console.log(this.actList)
			      })
			      .catch((error) => {
			        console.log(error);
			    });
		    },
		    goInfo(){
		    	router.push({ name:'Inform'});
		    }
		},
		components:{
			"v-header":Header,
			"v-footer":Footer
		}
	}
</script>
<style lang="stylus" scoped>
	.info
		width 100%
		position absolute
		top 48px
		.info-list
			display flex
			justify-content: space-between;
			width 100%
			height 40px
			align-items center

</style>