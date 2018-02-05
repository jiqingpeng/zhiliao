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
    .item
        padding 4px 0   
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
    .bf60
        background #ff6600 
    .bccc
        background #ccc 
    .cf60
        color #ff6600 
    .cfff
        color #fff         
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
    .f20
        font-size 20px
    .f30
        font-size 30px
    .btn
        border-radius 6px
        width 60%
        height 36px
        margin 0 auto
        display flex
        align-items center
        justify-content center 
        background #f60
        color #fff  
</style>
<style>
  
</style>
