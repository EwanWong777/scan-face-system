<template>
  <div class="m-company-configuration">
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
        </div>
      </div>
      <div class="m-table-body">
        <template>
          <el-table :data="companyConfiguration">
            <el-table-column
              type="selection"
              width="50"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="公司名称"
            >
            </el-table-column>
            <el-table-column
              prop="status"
              label="激活状态"
            >
            </el-table-column>
            <el-table-column
              prop="visitor"
              label="访客人数阈值"
            >
            </el-table-column>
            <el-table-column
              prop="facegrade"
              label="人脸匹配分数阈值"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="180"
            >
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleEdit(scope.row)"
                >编辑</el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleHighEdit"
                >高级配置</el-button>
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
    <!-- 编辑 -->
    <el-dialog
      title="编辑"
      :visible.sync="dialogEdit"
      :append-to-body="true"
    >
      <el-form
        :model="editForm"
        label-width='240px'
      >
        <el-form-item label="公司名称">
          <el-input
            v-model="editForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="激活状态">
          <el-input
            v-model="editForm.status"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="访客人数阈值">
          <el-input
            v-model="editForm.visitor"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸匹配分数阈值">
          <el-input
            v-model="editForm.facegrade"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogEdit = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogEdit = false"
        >确 定</el-button>
      </div>
    </el-dialog>
    <!-- 高级配置 -->
    <el-dialog
      title="高级配置"
      :visible.sync="dialogHighEdit"
      :append-to-body="true"
    >
      <el-form
        :model="highEditForm"
        label-width='240px'
      >
        <el-form-item label="人脸坐标X轴最小值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸坐标X轴最大值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸坐标Y轴最小值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸面积最小值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸置信度阈值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸上下翻转角度(pitch)阈值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸左右翻转角度(yaw)阈值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸平面内旋转角度(roll)阈值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸识别参数配置">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸坐标X轴最小值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸坐标X轴最大值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸坐标Y轴最小值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸坐标Y轴最大值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸面积最小值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸置信度阈值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸上下翻转角度(pitch)阈值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸左右翻转角度(yaw)阈值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="人脸平面内旋转角度(roll)阈值">
          <el-input
            v-model="highEditForm.meaning"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogEdit = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogEdit = false"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getCompanyConfiguration } from "@/api/companyConfiguration";
export default {
  created() {
    this.getCompanyConfiguration();
  },
  data() {
    return {
      mTableSearch: {
        key: "",
        sex: ""
      },
      companyConfiguration: null,
      dialogEdit: false,
      editForm: {
        dictionaries: "",
        noise: "",
        semantic: "",
        meaning: ""
      },
      dialogHighEdit: false,
      highEditForm: {
        dictionaries: "",
        noise: "",
        semantic: "",
        meaning: ""
      }
    };
  },
  methods: {
    getCompanyConfiguration() {
      getCompanyConfiguration()
        .then(res => {
          this.companyConfiguration = res.data.companyConfiguration;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleAdd() {
      this.dialogAdd = true;
    },
    handleEdit(row) {
      this.dialogEdit = true;
      this.editForm = Object.assign({}, row);
    },
    handleHighEdit() {
      this.dialogHighEdit = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-company-configuration
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
</style>