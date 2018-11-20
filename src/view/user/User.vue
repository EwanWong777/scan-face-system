<template>
    <div class="m-user">
        <div class="m-box">
            <div class="m-empty">
                用户
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-user
    padding 20px
.m-box
    background-color $white0
    padding 20px
.m-empty
    height 800px
    display flex
    align-items center
    justify-content center
    font-size 24px
    font-weight bold
    color $font2
</style>