<template>
    <div id="app">
        <div class="m-app-bg"></div>
        <div class="m-app-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
#app
    position relative
    height 100%
    min-width 1280px
    min-height 720px
.m-app-bg
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    background #aa4b6b
    background -webkit-linear-gradient(to left, #3b8d99, #6b6b83, #aa4b6b)
    background linear-gradient(to left, #3b8d99, #6b6b83, #aa4b6b)
.m-app-container
    position absolute
    left 0
    top 0
    width 100%
    height 100%
</style>
