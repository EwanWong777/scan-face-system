<template>
    <div class="m-sidebar" :class="sidebarCollapse?'m-sidebar-close':'m-sidebar-open'">
        <div class="m-logo">
            <div class="m-logo-container">
                <div class="m-logo-img">
                    <img src="@/assets/logo-white.svg" alt="">
                </div>
                <div class="m-logo-text">
                    后台管理系统模板
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["sidebarCollapse"])
    }
};
</script>

<style lang="stylus" scoped>
@import '../../../style/variables.styl'
.m-sidebar
    height 100%
    border-right 1px solid $black1
.m-logo
    display flex
    justify-content center
    align-items center
    cursor pointer
.m-logo-container
    overflow hidden
.m-logo-img
    img
        display block
        width 100%
        height 100%
.m-logo-text
    color $white0
    font-weight bold
    font-size 18px
    text-align center
    white-space nowrap
    overflow hidden
// 展开
.m-sidebar-open
    width 300px
    transition all 0.5s
    .m-logo
        height 180px
        transition all 0.5s
    .m-logo-img
        padding 0 40px
        transition all 0.5s
    .m-logo-container
        max-width 180px
        max-height 180px
        transition all 0.5s
    .m-logo-text
        margin-top 20px
        height 20px
        transition all 0.5s
// 折叠
.m-sidebar-close
    width 60px
    transition all 0.5s
    .m-logo
        height 60px
        border-bottom 1px solid $black1
        transition all 0.5s
    .m-logo-img
        padding 0
        transition all 0.5s
    .m-logo-container
        max-width 40px
        max-height 40px
        transition all 0.5s
    .m-logo-text
        margin-top 0
        height 0
        transition all 0.5s
</style>

