<template>
  <div class="m-visitor-statistics">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="m-chart">
          <div class="m-chart-header">
            <div class="m-chart-header-left">
              <div class="m-chart-title">
                来访量统计
              </div>
            </div>
            <div class="m-chart-header-right">
              <div class="m-chart-form">
                <el-date-picker
                  v-model="value1"
                  type="datetimerange"
                  :picker-options="pickerOptions"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="right"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
          <div class="m-chart-body">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="m-statistics-number">
                  <h4>来访量（次）</h4>
                  <h1>23574</h1>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="m-statistics-number">
                  <h4>访问数（个）</h4>
                  <h1>84948</h1>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="m-statistics-number">
                  <h4>接待完成（次）</h4>
                  <h1>4574</h1>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="m-chart">
          <div class="m-chart-header">
            <div class="m-chart-header-left">
              <div class="m-chart-title">
                客户来访排行榜
              </div>
            </div>
            <div class="m-chart-header-right">
              <div class="m-chart-form">
                <el-date-picker
                  v-model="value4"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </div>
            </div>
          </div>
          <div class="m-chart-body">
            <el-table :data="rankingList">
              <el-table-column
                type="index"
                label="排名"
                width="80"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="客户名称"
              >
              </el-table-column>
              <el-table-column
                prop="count"
                label="来访次数"
              >
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="m-chart">
          <div class="m-chart-header">
            <div class="m-chart-header-left">
              <div class="m-chart-title">
                访客时间趋势
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
              ref="mLineChart"
              class="m-line-chart"
            ></div>
          </div>
        </div>
        <div class="m-chart">
          <div class="m-chart-header">
            <div class="m-chart-header-left">
              <div class="m-chart-title">
                新访客访问量
              </div>
            </div>
            <div class="m-chart-header-right">
              <div class="m-chart-form">
                <el-date-picker
                  v-model="value3"
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getRankingList } from "@/api/visitorStatistics";
export default {
  created() {
    this.getRankingList();
  },
  data() {
    return {
      rankingList: null,
      date: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.date = this.initDate(new Date());
    this.initLineChart();
    this.initPieChart();
    this.value1 = new Date();
    this.value2 = new Date();
    this.value3 = new Date();
    this.value4 = new Date();
  },
  methods: {
    // 获取排行榜
    getRankingList() {
      getRankingList()
        .then(res => {
          this.rankingList = res.data.rankingList;
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
    // 访客时间趋势
    initLineChart() {
      let mLineChart = this.$echarts.init(this.$refs.mLineChart);
      let option = {
        legend: {
          data: ["来访次数"]
        },
        xAxis: {
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31"
          ]
        },
        yAxis: {},
        series: [
          {
            name: "来访次数",
            type: "line",
            data: [
              5,
              20,
              36,
              10,
              1,
              20,
              20,
              36,
              10,
              11,
              20,
              90,
              36,
              10,
              10,
              15,
              20,
              36,
              14,
              15,
              28,
              60,
              36,
              80,
              10,
              20,
              20,
              36,
              10,
              10,
              40
            ],
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
    // 新访客访问量
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
          data: ["新访客", "老访客"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "新访客" },
              { value: 610, name: "老访客" }
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
.m-visitor-statistics
  padding 20px
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
.m-statistics-number
  h4
    margin-bottom 20px
.m-line-chart
  height 280px
.m-pie-chart
  height 320px
</style>