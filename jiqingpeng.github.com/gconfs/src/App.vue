<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="stylus">
  *
    margin 0
    padding 0
    ul,li
    	list-style none
    .content
    	width 100%
    	background #f0f0f0
    .dist
        width 92%
        padding 2% 4%
        margin-bottom 10px
        background #fff
        border-radius 6px
    .postit
        position fixed
        left 0px
        top 48px
        bottom 40px   
        overflow-y auto     
    .flex
    	display flex
    .flex1
    	flex 0.5
    .space-center
        display flex
        align-items center
        justify-content center
	.space-between
        display flex
        align-items center
        justify-content space-between
	.icon
        width 14px
    .indent
        text-indent 2em 
        line-height 30px    
</style>
<style>
  
</style>
