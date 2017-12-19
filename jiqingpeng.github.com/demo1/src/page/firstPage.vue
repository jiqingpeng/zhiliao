<template>
  <div class="">
    <router-link to="/about">about</router-link>
    <router-link to="/a">隔断门</router-link>
    <router-link to="b">阳光房</router-link>
    <router-link to="/c">节能窗</router-link>
    <router-view class='y'></router-view>
    <my-footer></my-footer> 
  </div>
</template>

<script>
import foot from '../page/foot'
export default {

  name: '',
  data () {
    return {
      msg: '隔断门'
    }
  },
  components: {
    'my-footer': foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.y{border:1px solid yellow;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
