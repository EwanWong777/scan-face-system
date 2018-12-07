<template>
  <div class="m-blank">
    <div class="m-blank-container">
      空页面
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-blank
  position absolute
  width 100%
  height 100%
  box-sizing border-box
  padding 20px
.m-blank-container
  height 100%
  padding 20px
  box-sizing border-box
  background-color $white0
  display flex
  align-items center
  justify-content center
  font-size 24px
  font-weight bold
  color $font2
</style>