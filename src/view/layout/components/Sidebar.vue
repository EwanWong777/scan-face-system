<template>
    <div class="m-sidebar" :class="isCollapse?'m-sidebar-close':'m-sidebar-open'">
        <div class="m-logo">
            <div class="m-logo-container">
                <div class="m-logo-img">
                    <img src="@/assets/logo-white.svg" alt="">
                </div>
                <div class="m-logo-text">
                    {{$t('common.title')}}
                </div>
            </div>
        </div>
        <div class="m-el-menu">
            <transition name="el-fade-in">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse" router>
                    <template v-for="(first,index) in menu">
                        <el-menu-item :index="first.path" :key="index" v-if="!first.children">
                            <i :class="first.icon"></i>
                            <span slot="title">{{first.name}}</span>
                        </el-menu-item>
                        <el-submenu :index="'first'+index" :key="index" v-else>
                            <template slot="title">
                                <i :class="first.icon"></i>
                                <span slot="title">{{first.name}}</span>
                            </template>
                            <template v-for="(second,index) in first.children">
                                <el-menu-item :index="second.path" :key="index" v-if="!second.children">{{second.name}}</el-menu-item>
                                <el-submenu :index="'second'+index" :key="index" v-else>
                                    <span slot="title">{{second.name}}</span>
                                    <template v-for="(third,index) in second.children">
                                        <el-menu-item :index="third.path" :key="index">{{third.name}}</el-menu-item>
                                    </template>
                                </el-submenu>
                            </template>
                        </el-submenu>
                    </template>
                </el-menu>
            </transition>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            menu: [
                {
                    name: this.$t("common.home"),
                    icon: "fas fa-home",
                    path: "/home"
                },
                {
                    name: this.$t("common.admin"),
                    icon: "fab fa-adversal",
                    path: "/login",
                    children: [
                        {
                            name: this.$t("common.userManagement"),
                            path: "/user"
                        }
                    ]
                },
                {
                    name: this.$t("common.blank"),
                    icon: "fas fa-box-open",
                    path: "/blank"
                }
            ]
        };
    },
    computed: {
        ...mapGetters(["isCollapse"])
    }
};
</script>
<style lang="stylus" scoped>
@import '../../../style/variables.styl'
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
    width 256px
    transition all 0.2s
    .m-logo
        height 200px
        transition all 0.2s
    .m-logo-img
        padding 0 40px
        transition all 0.2s
    .m-logo-container
        max-width 180px
        max-height 180px
        transition all 0.2s
    .m-logo-text
        margin-top 20px
        height 20px
        transition all 0.2s
// 折叠
.m-sidebar-close
    width 64px
    transition all 0.2s
    .m-logo
        height 50px
        transition all 0.2s
    .m-logo-img
        padding 0
        transition all 0.2s
    .m-logo-container
        max-width 40px
        max-height 30px
        transition all 0.2s
    .m-logo-text
        margin-top 0
        height 0
        transition all 0.2s
</style>
