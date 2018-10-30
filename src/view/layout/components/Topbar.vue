<template>
    <div class="m-topbar">
        <div class="m-topbar-left">
            <div class="m-logo">
                <img src="@/assets/logo-white.svg" alt="">
            </div>
            <div class="m-title">
                DEMO-ADMIN
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
    background-color $deepPurple500
    display flex
.m-topbar-left
    display flex
.m-logo
    height 30px
    padding 15px
    img
        height 100%
.m-title
    color #fff
    line-height 60px
    font-weight bold
    font-size 20px
</style>