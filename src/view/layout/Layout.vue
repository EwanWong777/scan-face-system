<template>
    <div class="m-layout">
        <div class="m-layout-header">
            <Topbar></Topbar>
        </div>
        <div class="m-layout-body">
            <div class="m-layout-body-left">
                <Menu></Menu>
            </div>
            <div class="m-layout-body-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
export default {
  components: {
    Topbar,
    Menu
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-layout
    height 100%
    display flex
    flex-direction column
.m-layout-body
    flex 1
    display flex
.m-layout-body-left
    width 240px;
.m-layout-body-right
    flex 1
</style>
