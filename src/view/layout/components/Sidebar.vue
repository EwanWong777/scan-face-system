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
        <ul class="m-menu-first">
            <li v-for="(firstmenu,index) in menu" :key="index" @click="handleToggleSubmenu(firstmenu)">
                <router-link :to="firstmenu.link">
                    <div class="m-menu-first-icon" v-html="firstmenu.icon"></div>
                    <div class="m-menu-first-text">
                        {{firstmenu.title}}
                    </div>
                </router-link>
                <ul class="m-menu-second" v-show="sidebarCollapse || firstmenu.showChildren" v-if="firstmenu.children">
                    <li v-for="(secondmenu,index) in firstmenu.children" :key="index">
                        <router-link :to="secondmenu.link">
                            <div class="m-menu-second-text">
                                {{secondmenu.title}}
                            </div>
                        </router-link>
                    </li>
                </ul>
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
                    title: "菜单一",
                    link: "",
                    icon: '<i class="fas fa-home"></i>',
                    showChildren: true,
                    children: [
                        {
                            id: 1 - 1,
                            title: "菜单一一",
                            link: "/home"
                        },
                        {
                            id: 1 - 1,
                            title: "菜单一二",
                            link: "/home"
                        }
                    ]
                },
                {
                    title: "菜单二",
                    link: "",
                    icon: '<i class="fas fa-lock"></i>',
                    showChildren: false,
                    children: [
                        {
                            title: "菜单二一",
                            link: "/home"
                        },
                        {
                            title: "菜单二二",
                            link: "/home"
                        }
                    ]
                },
                {
                    title: "菜单三",
                    link: "/user",
                    icon: '<i class="fas fa-lock"></i>',
                    showChildren: false
                }
            ]
        };
    },
    computed: {
        ...mapGetters(["sidebarCollapse"])
    },
    methods: {
        handleToggleSubmenu: function(item) {
            item.showChildren = !item.showChildren;
        }
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
.m-menu-first>li
    position relative
.m-menu-first>li>a
    display block
    color $white0
    line-height 60px
    display flex
    &:hover
        background-color $white2
.m-menu-first-icon
    width 20px
    text-align center
    margin-left 20px
.m-menu-first-text
    margin-left 10px
    white-space nowrap
    overflow hidden
    flex 1
.m-menu-second>li>a
    display block
    color $white0
    line-height 60px
    &:hover
        background-color $white2
.m-menu-second-text
    margin-left 50px
    white-space nowrap
    overflow hidden
    flex 1
.m-sidebar-open
    .m-menu-first-text
        opacity 1
    .m-menu-second-text
        margin-left 50px
.m-sidebar-close
    .m-menu-first>li
        &:hover .m-menu-second
            display block
    .m-menu-first>li>a
        border-bottom 1px solid $black1
    .m-menu-first-text
        opacity 0
    .m-menu-second
        position absolute
        left 65px
        top 0
        background-color #fff
        padding 0 20px
        display none
    .m-menu-second>li>a
        color #333
    .m-menu-second-text
        margin-left 0
</style>

