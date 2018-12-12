<template>
  <div class="m-attendance-record">
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
              <el-select
                v-model="mTableSearch.sex"
                placeholder="请选择性别"
              >
                <el-option
                  label="男"
                  value="1"
                ></el-option>
                <el-option
                  label="女"
                  value="2"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="default">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="m-table-header-right">
          <el-button><i class="fas fa-redo-alt"></i> 刷新</el-button>
          <el-button
            type="primary"
            @click="handleAdd"
          >添加</el-button>
          <el-button type="danger">删除</el-button>
        </div>
      </div>
      <div class="m-table-body">
        <template>
          <el-table :data="userlist">
            <el-table-column
              type="selection"
              width="50"
            >
            </el-table-column>
            <el-table-column
              prop="avatar"
              label="头像"
              width="80"
            >
              <template slot-scope="scope">
                <img
                  :src="scope.row.avatar"
                  alt=""
                >
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
            >
            </el-table-column>
            <el-table-column
              prop="phoneNumber"
              label="手机号码"
            >
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
            >
            </el-table-column>
            <el-table-column
              prop="registerTime"
              label="注册时间"
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
    <el-dialog
      title="添加"
      :visible.sync="dialogAdd"
      :append-to-body="true"
    >
      <el-form
        :model="addForm"
        label-width='100px'
      >
        <el-form-item label="姓名">
          <el-input
            v-model="addForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input
            v-model="addForm.phoneNumber"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input
            v-model="addForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogAdd = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogAdd = false"
        >确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="编辑"
      :visible.sync="dialogEdit"
      :append-to-body="true"
    >
      <el-form
        :model="editForm"
        label-width='100px'
      >
        <el-form-item label="姓名">
          <el-input
            v-model="editForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input
            v-model="editForm.phoneNumber"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input
            v-model="editForm.email"
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
import { getUserList } from "@/api/userManagement";
export default {
  created() {
    this.getUserList();
  },
  data() {
    return {
      mTableSearch: {
        key: "",
        sex: ""
      },
      userlist: null,
      dialogAdd: false,
      addForm: {
          avatar: "",
        name: "",
        phoneNumber: "",
        email: ""
      },
      dialogEdit: false,
      editForm: {
        avatar: "",
        name: "",
        phoneNumber: "",
        email: ""
      }
    };
  },
  methods: {
    getUserList() {
      getUserList()
        .then(res => {
          this.userlist = res.data.userlist;
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
.m-attendance-record
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