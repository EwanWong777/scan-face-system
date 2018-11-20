<template>
    <div class="m-home">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="m-card-panel">
                    <div class="m-card-panel-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="m-card-panel-text">
                        <h4>用户</h4>
                        <h1>10,000</h1>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="m-card-panel">
                    <div class="m-card-panel-icon">
                        <i class="fas fa-comment-dots"></i>
                    </div>
                    <div class="m-card-panel-text">
                        <h4>消息</h4>
                        <h1>20</h1>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="m-card-panel">
                    <div class="m-card-panel-icon">
                        <i class="fas fa-yen-sign"></i>
                    </div>
                    <div class="m-card-panel-text">
                        <h4>收益</h4>
                        <h1>88,888</h1>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="m-card-panel">
                    <div class="m-card-panel-icon">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="m-card-panel-text">
                        <h4>日期</h4>
                        <h1>10,000</h1>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-home
    padding 20px
.m-card-panel
    background-color $white0
    padding 20px
    display flex
.m-card-panel-icon
    color $base5
    font-size 60px
    width 60px
    text-align center
    margin-right 20px
.m-card-panel-text
    flex 1
    text-align right
    h4
        margin-bottom 10px
        color $font2
</style>