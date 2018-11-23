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
                        <transition name="slide-fade" mode="out-in" appear>
                            <router-view></router-view>
                        </transition>
                    </vue-scroll>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/sidebar";
import { mapActions } from "vuex";
export default {
    created() {
        this.getUserInfo();
    },
    components: {
        Topbar,
        Sidebar
    },
    methods: {
        ...mapActions(["getUserInfo"])
    }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
// 布局
.m-layout
    width 100%
    height 100%
    position relative
.m-layout-bg
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    background #212121
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
    background-color $white9
    overflow auto
    z-index 99
</style>
