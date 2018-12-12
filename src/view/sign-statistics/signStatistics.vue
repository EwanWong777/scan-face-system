<template>
  <div class="m-sign-statistics">
    <div class="m-match-bar">
      <el-radio-group v-model="mSignRadio">
        <el-radio-button label="time">时间</el-radio-button>
        <el-radio-button label="staff">员工</el-radio-button>
      </el-radio-group>
    </div>
    <div v-show="mSignRadio === 'time'">
      <div class="m-search-bar">上班时间：<a href="javascript:;">8:00 ~ 10:00</a></div>
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
                v-model="value1"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </div>
        </div>
        <div class="m-chart-body">
          <div class="m-check-chart">
            <div class="m-check-chart-left">
              <div
                ref="mPieChart"
                class="m-pie-chart"
              ></div>
            </div>
            <div class="m-check-chart-right">
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="m-check-chart-text">
                    <h4>迟到</h4>
                    <h1>4</h1>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="m-check-chart-text">
                    <h4>早退</h4>
                    <h1>0</h1>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="m-check-chart-text">
                    <h4>手动打卡</h4>
                    <h1>4</h1>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <div class="m-check-chart-text">
                    <h4>上班未打卡</h4>
                    <h1>4</h1>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="m-check-chart-text">
                    <h4>下班未打卡</h4>
                    <h1>0</h1>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="m-check-chart-text">
                    <h4>旷工</h4>
                    <h1>4</h1>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="mSignRadio === 'staff'">
      <div class="m-search-bar">
        <el-date-picker
          v-model="value2"
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
                  早到榜
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
      </el-row>
    </div>
  </div>
</template>
<script>
import { getLateList } from "@/api/signStatistics";
export default {
  created() {
    this.getLateList();
  },
  data() {
    return {
      mSignRadio: "time",
      latelist: null,
      date: "",
      value1: "",
      value2: ""
    };
  },
  mounted() {
    this.date = this.initDate(new Date());
    this.initPieChart();
    this.value1 = new Date();
    this.value2 = new Date();
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
    // 格式化时间
    initDate(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
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
.m-check-chart
  display flex
.m-check-chart-left
  width 480px
.m-check-chart-right
  flex 1
.m-check-chart-text
  padding 40px 0
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
</style>