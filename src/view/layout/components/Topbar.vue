<template>
    <div class="m-topbar">
        <div class="m-topbar-left">
            <div class="m-toggle-btn" @click="toggleSidebar">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        <div class="m-topbar-right">
            <div class="m-language">
                <div class="m-language-link">
                    <div class="m-language-link-text">
                        中文
                    </div>
                    <div class="m-language-link-arrow">
                        <i class="el-icon-arrow-down"></i>
                    </div>
                </div>
                <div class="m-language-panel">
                    <div class="m-language-list">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["toggleSidebar"])
    }
};
</script>
<style lang="stylus" scoped>
@import '../../../style/variables.styl'
.m-topbar
    height 60px
    background-color $white0
    display flex
    border-bottom 1px solid $black1
.m-topbar-left
    display flex
.m-toggle-btn
    width 60px
    text-align center
    line-height 60px
    border-right 1px solid $black1
    font-size 18px
    cursor pointer
.m-topbar-right
    flex 1
    display flex
    justify-content flex-end
.m-language
    border-left 1px solid $black1
    cursor pointer
.m-language-link
    padding 0 20px
    line-height 60px
    display flex
.m-language-link-arrow
    margin-left 10px
</style>