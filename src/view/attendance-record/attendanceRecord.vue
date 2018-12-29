<template>
  <div class="m-attendance-record">
    <div class="m-search-bar">
      <el-form :inline="true">
        <el-form-item>
          <el-select
            v-model="departmentSelect"
            placeholder="请选择部门"
          >
            <el-option
              v-for="(item,index) in department"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="default">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="m-table">
      <div class="m-table-header">
        <div class="m-table-header-left">
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
        <div class="m-table-header-right">
          <el-button type="primary">一键导出</el-button>
        </div>
      </div>
      <div class="m-table-body">
        <template>
          <el-table :data="recordlist">
            <el-table-column
              prop="staffName"
              label="员工姓名"
            >
            </el-table-column>
            <el-table-column
              prop="checkNumber"
              label="考勤编号"
            >
            </el-table-column>
            <el-table-column
              prop="department"
              label="部门"
            >
            </el-table-column>
            <el-table-column
              prop="useRobot"
              label="使用机器人"
            >
            </el-table-column>
            <el-table-column
              prop="punchWay"
              label="打卡方式"
            >
            </el-table-column>
            <el-table-column
              prop="punchTime"
              label="打卡时间"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="100"
            >
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleViewPhotos"
                >查看照片</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="m-table-footer">
        <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
    <!-- 查看照片 -->
    <el-dialog
      title="查看照片"
      :visible.sync="dialogViewPhotos"
      :append-to-body="true"
    >
      <div class="m-member-photos">
        <img src="@/assets/demo1.jpg">
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogViewPhotos = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogViewPhotos = false"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getRecordList } from "@/api/attendanceRecord";
export default {
  created() {
    this.getRecordList();
  },
  data() {
    return {
      departmentSelect: "研发中心",
      department: [
        {
          value: 0,
          label: "研发中心"
        },
        {
          value: 1,
          label: "行政部"
        },
        {
          value: 2,
          label: "财务部"
        }
      ],
      value1: "",
      mTableSearch: {
        key: "",
        sex: ""
      },
      dialogViewPhotos: false,
      recordlist: null,
    };
  },
  mounted() {
    this.value1 = [new Date().setMonth(new Date().getMonth() - 1), new Date()];
  },
  methods: {
    getRecordList() {
      getRecordList()
        .then(res => {
          this.recordlist = res.data.recordlist;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleViewPhotos() {
      this.dialogViewPhotos = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-attendance-record
  padding 20px
.m-search-bar
  padding 20px
  background-color $white0
  margin-bottom 20px
  display flex
  justify-content center
  line-height 40px
.m-table
  background-color $white0
  padding 20px
.m-table-header
  display flex
  margin-bottom 20px
.m-table-header-left
  .el-form-item
    margin-bottom 0
.m-table-header-right
  flex 1
  display flex
  justify-content flex-end
.m-table-body
  margin-bottom 40px
.m-table-footer
  display flex
  justify-content flex-end
.m-member-photos
  img
    width 100%
    margin-bottom 20px
</style>