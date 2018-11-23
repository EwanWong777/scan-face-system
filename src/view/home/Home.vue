<template>
    <div class="m-home">
        <div class="m-card">
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
        <div class="m-chart">
            <div ref="mEchart" class="m-chart-container"></div>
        </div>
    </div>
</template>
<script>
import echarts from "echarts";
export default {
    data() {
        return {
            chart: null
        };
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$refs.mEchart);
            let option = {
                legend: {
                    data: ["销量"]
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "line",
                        data: [5, 20, 36, 10, 10, 20],
                        smooth: true
                    }
                ],
                color: ["#FF9800"]
            };
            this.chart.setOption(option);
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-home
    padding 20px
.m-card
    margin-bottom 20px
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
.m-chart
    height 400px
    background-color $white0
    padding 20px
.m-chart-container
    height 100%
</style>