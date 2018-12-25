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
              prop="account"
              label="Q-link账号"
            >
            </el-table-column>
            <el-table-column
              prop="phoneNumber"
              label="手机号码"
            >
            </el-table-column>
            <el-table-column
              prop="registerTime"
              label="上次登录时间"
            >
            </el-table-column>
            <el-table-column
              prop="role"
              label="角色"
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
        <el-form-item label="Q-link账号">
          <el-input
            v-model="addForm.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select
            class="m-el-select"
            v-model="addForm.role"
            placeholder="请选择角色"
          >
            <el-option
              v-for="(item,index) in rolelist"
              :key="index"
              :label="item.name"
              :value="index"
            ></el-option>
          </el-select>
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
        <el-form-item label="角色">
          <el-select
            class="m-el-select"
            v-model="editForm.role"
          >
            <el-option
              v-for="(item,index) in rolelist"
              :key="index"
              :label="item.name"
              :value="index"
            ></el-option>
          </el-select>
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
        account: "",
        role: ""
      },
      dialogEdit: false,
      editForm: {
        phoneNumber: "",
        role: ""
      },
      rolelist: [
        {
          name: "角色一"
        },
        {
          name: "角色二"
        },
        {
          name: "角色三"
        },
        {
          name: "角色四"
        },
        {
          name: "角色五"
        }
      ]
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