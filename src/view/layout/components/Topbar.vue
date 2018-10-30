<template>
    <div class="m-topbar">
        <div class="m-topbar-left">
            <div class="m-logo">
                <img src="@/assets/logo-white.svg" alt="">
            </div>
            <div class="m-title">
                后台管理系统模板
            </div>
        </div>
        <div class="m-topbar-right">

        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
@import '../../../style/variables.styl'
.m-topbar
    height 60px
    background-color $base500
    display flex
.m-topbar-left
    display flex
.m-logo
    height 20px
    padding 20px
    border-right 1px solid $white
    img
        height 100%
.m-title
    color $white
    line-height 60px
    padding 0 20px;
    font-weight bold
    font-size 18px
    border-right 1px solid $white
</style>