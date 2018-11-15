<template>
    <div class="m-layout">
        <div class="m-layout-bg"></div>
        <div class="m-layout-container">
            <div class="m-layout-left">
                <vue-scroll>
                    <Sidebar></Sidebar>
                </vue-scroll>
            </div>
            <div class="m-layout-right">
                <div class="m-layout-right-header">
                    <Topbar></Topbar>
                </div>
                <div class="m-layout-right-body">
                    <vue-scroll>
                        <router-view></router-view>
                    </vue-scroll>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
export default {
    components: {
        Topbar,
        Sidebar
    }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
// 布局
.m-layout
    height 100%
    position relative
.m-layout-bg
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    background -webkit-linear-gradient(to bottom, $base3, $base7)
    background linear-gradient(to bottom, $base3, $base7)
.m-layout-container
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    display flex
.m-layout-left
    z-index 100
.m-layout-right
    flex 1
    display flex
    flex-direction column
    z-index 99
.m-layout-right-header
    z-index 100
.m-layout-right-body
    flex 1
    z-index 99
    background-color $white7
    overflow auto
</style>
