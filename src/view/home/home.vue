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
              <h4>{{$t('home.user')}}</h4>
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
              <h4>{{$t('home.message')}}</h4>
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
              <h4>{{$t('home.earnings')}}</h4>
              <h1>88,888</h1>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="m-card-panel">
            <div class="m-card-panel-icon">
              <i class="fas fa-robot"></i>
            </div>
            <div class="m-card-panel-text">
              <h4>{{$t('home.equipment')}}</h4>
              <h1>546434</h1>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="m-chart">
      <div class="m-chart-header">
        <div class="m-chart-header-left">
          <div class="m-chart-title">
            {{$t('home.lineChart')}}
          </div>
        </div>
        <div class="m-chart-header-right">
          <div class="m-chart-form">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </div>
      </div>
      <div class="m-chart-body">
        <div
          ref="mLineChart"
          class="m-line-chart"
        ></div>
      </div>
    </div>
    <div class="m-chart">
      <div class="m-chart-header">
        <div class="m-chart-header-left">
          <div class="m-chart-title">
            {{$t('home.pieChart')}}
          </div>
        </div>
        <div class="m-chart-header-right">
          <div class="m-chart-form">
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </div>
        </div>
      </div>
      <div class="m-chart-body">
        <div
          ref="mPieChart"
          class="m-pie-chart"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  mounted() {
    this.initLineChart();
    this.initPieChart();
    this.value1 = new Date();
    this.value2 = new Date();
  },
  methods: {
    // 格式化时间
    initDate(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    // 线图
    initLineChart() {
      let mLineChart = this.$echarts.init(this.$refs.mLineChart);
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
        color: [
          "#F44336",
          "#FF9800",
          "#FFEB3B",
          "#4CAF50",
          "#00BCD4",
          "#2196F3",
          "#9C27B0"
        ]
      };
      mLineChart.setOption(option);
    },
    // 饼图
    initPieChart() {
      let mPieChart = this.$echarts.init(this.$refs.mPieChart);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: [
          "#F44336",
          "#FF9800",
          "#FFEB3B",
          "#4CAF50",
          "#00BCD4",
          "#2196F3",
          "#9C27B0"
        ]
      };
      mPieChart.setOption(option);
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
  background-color $white0
  padding 20px
  margin-bottom 20px
.m-chart-header
  display flex
  margin-bottom 20px
.m-chart-header-left
  overflow hidden
.m-chart-title
  font-size 18px
  font-weight bold
  line-height 40px
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
.m-chart-header-right
  flex 1
  display flex
  justify-content flex-end
.m-line-chart
  height 360px
.m-pie-chart
  height 360px
</style>