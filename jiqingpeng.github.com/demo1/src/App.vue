<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import base from './components/base.js'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to app'
    }
  },
  base
}
</script>

<style>
.red{border:1px solid red;}

</style>
