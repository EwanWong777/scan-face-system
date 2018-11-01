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
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="sidebarCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
        <ul class="m-menu">
            <li v-for="(item) in menu" :key="item.id">
                <div class="m-menu-first">
                    <router-link :to="item.link">
                        <div class="m-menu-link-icon" v-html="item.icon"></div>
                        <div class="m-menu-link-text">
                            {{item.title}}
                        </div>
                    </router-link>
                </div>
                <div class="m-menu-second">
                    <router-link :to="item.children.link">
                        <div class="m-menu-link-text">
                            {{item.children.title}}
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            menu: [
                {
                    id: 1,
                    link: "/home",
                    title: "主页",
                    icon: '<i class="fas fa-home"></i>',
                    children: [
                        {
                            id: 1 - 1,
                            title: "菜单一一",
                            link: "/home"
                        }
                    ]
                },
                {
                    id: 2,
                    link: "",
                    title: "菜单一",
                    icon: '<i class="fas fa-lock"></i>',
                    children: [
                        {
                            id: 1 - 1,
                            title: "菜单一一",
                            link: "/home"
                        }
                    ]
                }
            ]
        };
    },
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
// 菜单
.m-menu-first>a
    display block
    color $white0
    line-height 60px
    display flex
.m-menu-link-icon
    margin-left 20px
.m-menu-link-text
    margin-left 10px
    white-space nowrap
    overflow hidden
    flex 1
</style>

