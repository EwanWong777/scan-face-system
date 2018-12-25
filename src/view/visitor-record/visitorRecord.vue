<template>
  <div class="m-visitor-list">
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
          <el-button type="primary">添加到访客名单</el-button>
        </div>
      </div>
      <div class="m-table-body">
        <template>
          <el-table :data="visitorRecord">
            <el-table-column
              type="selection"
              width="50"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="访客名单"
            >
            </el-table-column>
            <el-table-column
              prop="object"
              label="来访对象"
            >
            </el-table-column>
            <el-table-column
              prop="photo"
              label="访客照片"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="120"
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
        <img src="@/assets/demo2.jpg">
        <img src="@/assets/demo3.jpg">
        <img src="@/assets/demo4.jpg">
        <img src="@/assets/demo5.jpg">
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
import { getVisitorRecord } from "@/api/visitorRecord";
export default {
  created() {
    this.getVisitorRecord();
  },
  data() {
    return {
      mTableSearch: {
        key: "",
        sex: ""
      },
      visitorRecord: null,
      dialogViewPhotos: false
    };
  },
  methods: {
    getVisitorRecord() {
      getVisitorRecord()
        .then(res => {
          this.visitorRecord = res.data.visitorRecord;
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
.m-visitor-list
  padding 20px
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