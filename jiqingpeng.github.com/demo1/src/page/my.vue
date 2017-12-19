<template>
<div>
    <el-row class="mynav">
      <el-col :span="8" class="fs20">
        <el-col :span="12" class="tc">
        <router-link to="/" class='color fs20'><返回</router-link>
        </el-col>
        <el-col :span="12" class="tc fs20">关闭</el-col> 
      </el-col>
      <el-col :span="8" class="tc fs40">
          我的
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="list">
        <img src="../../static/img/my.jpg"  alt="">
        <div class="text">我的预约</div>
      </el-col>
      <el-col :span="6" class="list">
        <img src="../../static/img/my.jpg"  alt="">
        <div class="text">我的预约</div>
      </el-col>
      <el-col :span="6" class="list">
        <img src="../../static/img/my.jpg"  alt="">
        <div class="text">我的预约</div>
      </el-col>
      <el-col :span="6" class="list">
        <img src="../../static/img/my.jpg"  alt="">
        <div class="text">我的预约</div>
      </el-col>
    </el-row>
</div>
      
</template>

<script>

export default {
  name: '',
  data () {
    return {
      msg: '节能窗'
    }
  }
}
</script>
<style scoped>
    .mynav{height:3.55rem;background:#3399cc;padding-top:1rem;color:#fff;}
    .fs20{font-size:0.5rem;color:#fff;}
    .fs40{font-size:1rem;color:#fff;}
    .tc{text-align:center;}
    .red{border:1px solid red;} 
    .list{padding:0.4rem 0.9rem;} 
    .list img{width:2.45rem;height:2.45rem;}
    .list .text{font-size:0.65rem;text-align:center;}  
</style>
