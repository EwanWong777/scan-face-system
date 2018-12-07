<template>
  <div class="m-user-management">
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
          <el-button><i class="fas fa-redo-alt"></i> 刷新</el-button>
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
              prop="ip"
              label="服务器ip"
            >
            </el-table-column>
            <el-table-column
              prop="type"
              label="服务器类型"
            >
            </el-table-column>
            <el-table-column
              prop="state"
              label="服务器状态"
            >
            </el-table-column>
            <el-table-column
              prop="dictionaries"
              label="字典"
            >
            </el-table-column>
            <el-table-column
              prop="noise"
              label="噪声"
            >
            </el-table-column>
            <el-table-column
              prop="semantic"
              label="语义"
            >
            </el-table-column>
            <el-table-column
              prop="meaning"
              label="词义阈值"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="80"
            >
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleEdit(scope.row)"
                >编辑</el-button>
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
        label-width='100px'
      >
        <el-form-item label="字典">
          <el-input
            v-model="editForm.dictionaries"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="噪声">
          <el-input
            v-model="editForm.noise"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="语义">
          <el-input
            v-model="editForm.semantic"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="词义阈值">
          <el-input
            v-model="editForm.meaning"
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
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-user-management
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