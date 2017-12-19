<template>
  <div class="">
    <el-row>
      <el-col :span="24">
        <div class="tit tc">
          {{tit}}
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
      <div class="banner">
          <img src="../../static/img/banner.jpg" alt="banner">
      </div>
      </el-col>
    </el-row>
    <!-- list -->
    <el-row>
      <el-col :span="6">
          <el-row class="mc">
              <el-col :span="24" class="">
                  <img src="../../static/img/list1.jpg" height="100%" width="100%" alt="">
              </el-col>
              <el-col :span="24" class="tc">
                  找商家
              </el-col>
          </el-row>
      </el-col>
      <el-col :span="6">
          <el-row class="mc">
              <el-col :span="24" class="">
                  <img src="../../static/img/list1.jpg" height="100%" width="100%" alt="">
              </el-col>
              <el-col :span="24" class="tc">
                  找商家
              </el-col>
          </el-row>
      </el-col>
      <el-col :span="6">
          <el-row class="mc">
              <el-col :span="24" class="">
                  <img src="../../static/img/list1.jpg" height="100%" width="100%" alt="">
              </el-col>
              <el-col :span="24" class="tc">
                  找商家
              </el-col>
          </el-row>
      </el-col>
      <el-col :span="6">
          <el-row class="mc">
              <el-col :span="24" class="">
                  <img src="../../static/img/list1.jpg" height="100%" width="100%" alt="">
              </el-col>
              <el-col :span="24" class="tc">
                  找商家
              </el-col>
          </el-row>
      </el-col>
    </el-row>
    <!-- message -->
    <el-row class="mc">
      <el-col :span="6">
          <el-row >
              <img src="../../static/img/sctit.jpg" height="100%" width="100%" alt="">
          </el-row>
      </el-col>
      <el-col :span="18" class='txtz'>
          <el-row>
              <el-col :span="24" class="txt1">
                  北京雾霾这么大,你想去哪看看
              </el-col>
              <el-col :span="24" class="txt1">
                  北京雾霾这么大,你想去哪看看
              </el-col>
          </el-row>
      </el-col>
    </el-row>
    <el-row class="price">
      <el-col :span="8" class="price-l">
          <el-row class="price-limg">  
            <img src="../../static/img/price1.jpg"  alt="">
          </el-row>
          <el-row>
            <div class="tf85 price-lt">免费报价</div>
          </el-row>
      </el-col>
      <el-col :span="16" class="price-r">
          <el-row class="prc">  
               <el-col class="prc-img" :span="9">
                  <img src="../../static/img/list1.jpg" alt="">
               </el-col>
               <el-col :span="15" class="prc-txt">
                  <el-row>
                      预约测量/设计
                  </el-row>
                  <el-row>
                      提前预约专家
                  </el-row>
               </el-col>  
          </el-row>
          <el-row class="prc">  
               <el-col class="prc-img" :span="9">
                  <img src="../../static/img/list1.jpg" alt="">
               </el-col>
               <el-col :span="15" class="prc-txt">
                  <el-row>
                      预约测量/设计
                  </el-row>
                  <el-row>
                      提前预约专家
                  </el-row>
               </el-col>  
          </el-row>
      </el-col>
    </el-row>
    <input type="button" value="按钮" @click="get">
    <div class='a'>11
      <div class='b'>11</div>
    </div>
  

    <my-footer></my-footer> 
  </div>
  
</template>

<script>
  import head from '../page/head'
  import foot from '../page/foot'
  export default {
    name: '',
    data () {
      return {
        msg: '隔断门',
        tit: '搜窗网'
      }
    },
    components: {
      'my-header': head,
      'my-footer': foot
    },
    methods: {
      get: function () {
        this.$http.get('static/txt/a.json').then((res) => {
          this.tit = res.data.a
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
*{margin:0;padding:0;}
img{width:100%;height:100%;}
.tit{background:#0099ff;color:#fff;height:3.35rem;font-size:1.05rem;line-height:3.35rem;}
.banner{height:6.25rem;}
.banner img{width:100%;height:100%;}
.mc{padding:0.5rem;}
.tc{text-align: center;font-size:0.6rem;}
.txtz{margin-top:1rem;border-left: 1px solid #000;}
.txt1{font-size:0.65rem;text-align: center;margin-top:0.25rem;}
.mobile{font-size: 1rem;}
.price{height:9.5rem;}
.price .price-l{height:9.5rem;}
.price .price-l .price-limg{width:4.75rem;height:6.25rem;margin-left:0.85rem;margin-top:1rem;}
.price .price-l .price-lt{text-align: center;margin-top:0.5rem;}
.price .price-l .tf85{font-size:0.85rem;}
.price .price-r{height:9.5rem;}
.price .price-r .prc{padding:0.75rem 1.25rem;}
.price .price-r .prc .prc-img{height:2.75rem;}
.price .price-r .prc .prc-txt{font-size:0.85rem;margin-top:0.55rem;}


</style>
