<template>
    <div class="m-layout">
        <div class="m-layout-left">
            <Sidebar></Sidebar>
        </div>
        <div class="m-layout-right">
            <div class="m-layout-right-header">
                <Topbar></Topbar>
            </div>
            <div class="m-layout-right-body">
                <router-view></router-view>
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
.m-layout
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
</style>
