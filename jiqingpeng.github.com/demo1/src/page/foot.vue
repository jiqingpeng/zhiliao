<template>
  	<div class="">
	  	<el-row>
	      <el-col :span="8" class='tc'>
	        <router-link to="/" class='color'>首页</router-link>
	      </el-col>
	      <el-col :span="8" class='tc'>
	        <router-link to="/" class='color'>找商家</router-link>
	      </el-col>
	      <el-col :span="8"  class='tc'>
	        <router-link to="/my" class='color'>我的</router-link>
	      </el-col>
	    </el-row>
	</div>
</template>
<style>
	.tc{text-align:center;}
	.color{color:#000;}
</style>
