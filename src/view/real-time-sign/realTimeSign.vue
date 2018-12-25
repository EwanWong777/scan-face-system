<template>
  <div class="m-real-time-sign">
    <div class="m-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="m-card-panel">
            <h4>星期一</h4>
            <h1>2018/12/10</h1>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="m-card-panel">
            <h4>当前:上班时间</h4>
            <h1>2018/12/10</h1>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="m-card-panel">
            <h4>上班打卡(人数)</h4>
            <h1>4/93</h1>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="m-card-panel">
            <h4>下班打卡(人数)</h4>
            <h1>0/93</h1>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="14">
        <div class="m-chart">
          <div class="m-chart-header">
            <div class="m-chart-header-left">
              <div class="m-chart-title">
                员工动态
              </div>
            </div>
            <div class="m-chart-header-right">
              <el-form :inline="true">
                <el-form-item>
                  <el-input
                    v-model="mTableSearch.key"
                    placeholder="请输入关键字"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="default">查询</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="m-chart-body">
            <el-table :data="dynamicList">
              <el-table-column
                prop="name"
                label="员工姓名"
              >
              </el-table-column>
              <el-table-column
                prop="department"
                label="部门"
              >
              </el-table-column>
              <el-table-column
                prop="work"
                label="上班打卡"
              >
              </el-table-column>
              <el-table-column
                prop="afterwork"
                label="下班打卡"
              >
              </el-table-column>
            </el-table>
          </div>
          <div class="m-chart-footer">
            <el-pagination
              background
              layout="total, prev, pager, next, jumper"
              :total="1000"
            >
            </el-pagination>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="m-chart">
          <div class="m-chart-header">
            <div class="m-chart-header-left">
              <div class="m-chart-title">
                签到动态
              </div>
            </div>
          </div>
          <div class="m-chart-body">
            <el-table :data="signList">
              <el-table-column
                prop="name"
                label="客户名称"
              >
              </el-table-column>
              <el-table-column
                prop="time"
                label="打卡时间"
              >
              </el-table-column>
            </el-table>
          </div>
          <div class="m-chart-footer">
            <el-pagination
              background
              layout="total, prev, pager, next, jumper"
              :total="1000"
            >
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getDynamicList, getSignList } from "@/api/realTimeSign";
export default {
  created() {
    this.getDynamicList();
    this.getSignList();
  },
  data() {
    return {
      mTableSearch: {
        key: "",
        sex: ""
      },
      dynamicList: null,
      signList: null
    };
  },
  methods: {
    getDynamicList() {
      getDynamicList()
        .then(res => {
          this.dynamicList = res.data.dynamicList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSignList() {
      getSignList()
        .then(res => {
          this.signList = res.data.signList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-real-time-sign
  padding 20px
.m-card
  margin-bottom 20px
.m-card-panel
  background-color $white0
  padding 20px
  h4
    margin-bottom 20px
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
.m-chart-header-right
  .el-form-item
    margin-bottom 0
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
.m-chart-footer
  margin-top 40px
  text-align right
</style>