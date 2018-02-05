<template>
	<div>
		<article class="dist">
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
	</div>
</template>
<script>
	export default{
		created(){
			this.init()
		},
		methods:{
			init(){
				this.item=this.$store.state.getMessDetail;
			}
		}
	}
</script>