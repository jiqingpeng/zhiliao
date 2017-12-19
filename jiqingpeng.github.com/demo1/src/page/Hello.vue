<template>
  <div class="">
    <my-footer></my-footer>
  </div>
</template>

<script>
import foot from '../page/foot'
export default {
  name: '',
  data () {
    return {
      msg: '节能窗'
    }
  },
  components: {
    'my-footer': foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
