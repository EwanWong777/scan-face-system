<template>
  <div class="m-sign-statistics">
    <div class="m-match-bar">
      <el-radio-group v-model="mSignRadio">
        <el-radio-button label="time">时间</el-radio-button>
        <el-radio-button label="staff">员工</el-radio-button>
      </el-radio-group>
    </div>
    <!-- 时间 -->
    <div v-show="mSignRadio === 'time'">
      <div class="m-search-bar">上班时间：<a href="javascript:;">8:00 ~ 10:00</a></div>
      <!-- 昨日打卡统计 -->
      <div class="m-chart">
        <div class="m-chart-header">
          <div class="m-chart-header-left">
            <div class="m-chart-title">
              昨日打卡统计
            </div>
          </div>
          <div class="m-chart-header-right">
            <a href="javascript:;">查看详情</a>
          </div>
        </div>
        <div class="m-chart-body">
          <div class="m-yesterday-chart">
            <div class="m-yesterday-chart-left">
              <div
                ref="mPieChart"
                class="m-pie-chart"
              ></div>
            </div>
            <div class="m-yesterday-chart-right">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="m-yesterday-chart-text">
                    <h4>迟到</h4>
                    <h1>4</h1>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="m-yesterday-chart-text">
                    <h4>早退</h4>
                    <h1>0</h1>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="m-yesterday-chart-text">
                    <h4>旷工</h4>
                    <h1>4</h1>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="m-yesterday-chart-text">
                    <h4>上班未打卡</h4>
                    <h1>4</h1>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="m-yesterday-chart-text">
                    <h4>下班未打卡</h4>
                    <h1>0</h1>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :span="14">
          <!-- 本周打卡统计 -->
          <div class="m-chart">
            <div class="m-chart-header">
              <div class="m-chart-header-left">
                <div class="m-chart-title">
                  本周打卡统计
                </div>
              </div>
              <div class="m-chart-header-right">
                <a href="javascript:;">查看详情</a>
              </div>
            </div>
            <div class="m-chart-body">
              <div class="m-week-chart">
                <div class="m-week-chart-left">
                  <h1>正常打卡率</h1>
                  <h1>80%</h1>
                </div>
                <div class="m-week-chart-right">
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <div class="m-week-chart-text">
                        <h4>迟到</h4>
                        <h1>4</h1>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="m-week-chart-text">
                        <h4>早退</h4>
                        <h1>0</h1>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="m-week-chart-text">
                        <h4>旷工</h4>
                        <h1>4</h1>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <div class="m-week-chart-text">
                        <h4>上班未打卡</h4>
                        <h1>4</h1>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="m-week-chart-text">
                        <h4>下班未打卡</h4>
                        <h1>0</h1>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="m-chart">
            <div class="m-chart-header">
              <div class="m-chart-header-left">
                <div class="m-chart-title">
                  本月异常考勤统计
                </div>
              </div>
            </div>
            <div class="m-chart-body">
              <div
                ref="mBarChart"
                class="m-bar-chart"
              ></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 员工 -->
    <div v-show="mSignRadio === 'staff'">
      <div class="m-search-bar">
        <el-date-picker
          v-model="value1"
          type="month"
          placeholder="选择月"
        >
        </el-date-picker>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="m-chart">
            <div class="m-chart-header">
              <div class="m-chart-header-left">
                <div class="m-chart-title">
                  迟到榜
                </div>
              </div>
            </div>
            <div class="m-chart-body">
              <el-table :data="latelist">
                <el-table-column
                  type="index"
                  label="排名"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                >
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="次数"
                >
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="累计时长"
                >
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="m-chart">
            <div class="m-chart-header">
              <div class="m-chart-header-left">
                <div class="m-chart-title">
                  勤奋榜
                </div>
              </div>
            </div>
            <div class="m-chart-body">
              <el-table :data="workinglist">
                <el-table-column
                  type="index"
                  label="排名"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                >
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="次数"
                >
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="累计时长"
                >
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="m-chart">
            <div class="m-chart-header">
              <div class="m-chart-header-left">
                <div class="m-chart-title">
                  早到榜
                </div>
              </div>
            </div>
            <div class="m-chart-body">
              <el-table :data="earlylist">
                <el-table-column
                  type="index"
                  label="排名"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                >
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="次数"
                >
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="累计时长"
                >
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import {
  getLateList,
  getWorkingList,
  getEarlyList
} from "@/api/signStatistics";
export default {
  created() {
    this.getLateList();
    this.getWorkingList();
    this.getEarlyList();
  },
  data() {
    return {
      mSignRadio: "time",
      latelist: null,
      workinglist: null,
      earlylist: null,
      value1: ""
    };
  },
  mounted() {
    this.initPieChart();
    this.initBarChart();
    this.value1 = new Date();
  },
  methods: {
    getLateList() {
      getLateList()
        .then(res => {
          this.latelist = res.data.latelist;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getWorkingList() {
      getWorkingList()
        .then(res => {
          this.workinglist = res.data.workinglist;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getEarlyList() {
      getEarlyList()
        .then(res => {
          this.earlylist = res.data.earlylist;
        })
        .catch(err => {
          console.log(err);
        });
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
          right: "right",
          data: ["打卡", "未打卡"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "打卡" },
              { value: 310, name: "未打卡" }
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
    },
    // 柱状图
    initBarChart() {
      let mBarChart = this.$echarts.init(this.$refs.mBarChart);
      let option = {
        legend: {
          data: ["人数", "次数"]
        },
        xAxis: {
          data: ["迟到", "早退", "上班未打卡", "下班未打卡", "旷工", "手动打卡"]
        },
        yAxis: {},
        series: [
          {
            name: "人数",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            smooth: true
          },
          {
            name: "次数",
            type: "bar",
            data: [10, 20, 30, 15, 10, 18],
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
      mBarChart.setOption(option);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-sign-statistics
  padding 20px
.m-match-bar
  padding 20px
  background-color $white0
  margin-bottom 20px
  display flex
  justify-content center
.m-search-bar
  padding 20px
  background-color $white0
  margin-bottom 20px
  display flex
  justify-content center
  line-height 40px
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
.m-yesterday-chart
  display flex
.m-yesterday-chart-left
  width 480px
.m-yesterday-chart-right
  flex 1
.m-yesterday-chart-text
  padding 40px 0
  text-align center
  h4
    margin-bottom 20px
    color $font2
.m-week-chart
  display flex
.m-week-chart-left
  width 300px
  text-align center
  padding 40px 0
  h1
    &:first-child
      margin-bottom 40px
    &:last-child
      font-size 72px
.m-week-chart-right
  flex 1
.m-week-chart-text
  padding 20px 0
  text-align center
  h4
    margin-bottom 20px
    color $font2
.m-staff-rank
  background-color $white0
  padding 20px
  margin-bottom 20px
.m-pie-chart
  height 320px
.m-bar-chart
  height 240px
</style>