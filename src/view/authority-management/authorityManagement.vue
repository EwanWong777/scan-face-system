<template>
  <div class="m-authority-management">
    <div class="m-role">
      <div
        class="m-role-list"
        v-for="(item,index) in roleList"
        :key="index"
      >
        <div class="m-role-item">
          <div class="m-role-item-left">
            {{item.name}}
          </div>
          <div
            class="m-role-item-right"
            v-if="item.cantOperation"
          >
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              circle
              @click="handleEditRole(item.name)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              circle
              @click="handleDeleteRole(index)"
            ></el-button>
          </div>
        </div>
      </div>
      <div class="m-role-add">
        <el-button
          type="primary"
          @click="handleAddRole"
        >添加角色</el-button>
      </div>
    </div>
    <div class="m-auth">
      <div class="m-auth-header">
        <el-button type="primary">保存修改</el-button>
      </div>
      <div
        class="m-auth-first"
        v-for="(first,index) in authTable"
        :key="index"
      >
        <div class="m-auth-first-item">
          <el-checkbox v-model="first.check">{{first.label}}</el-checkbox>
        </div>
        <div
          class="m-auth-second"
          v-if="first.children"
        >
          <div
            class="m-auth-second-item"
            v-for="(second,index) in first.children"
            :key="index"
          >

            <el-checkbox v-model="second.check">{{second.label}}</el-checkbox>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加角色 -->
    <el-dialog
      title="添加角色"
      :visible.sync="dialogAddRole"
      :append-to-body="true"
    >
      <el-form
        :model="addRoleForm"
        label-width='100px'
      >
        <el-form-item label="角色名称">
          <el-input
            v-model="addRoleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogAddRole = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogAddRole = false"
        >确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改角色 -->
    <el-dialog
      title="修改角色"
      :visible.sync="dialogEditRole"
      :append-to-body="true"
    >
      <el-form
        :model="editRoleForm"
        label-width='100px'
      >
        <el-form-item label="角色名称">
          <el-input
            v-model="editRoleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogEditRole = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogEditRole = false"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roleList: [
        {
          name: "普通用户",
          cantOperation: false
        },
        {
          name: "角色一",
          cantOperation: true
        },
        {
          name: "角色二",
          cantOperation: true
        },
        {
          name: "角色三",
          cantOperation: true
        }
      ],
      dialogAddRole: false,
      addRoleForm: {
        name: ""
      },
      dialogEditRole: false,
      editRoleForm: {
        name: ""
      },
      authTable: [
        {
          label: "主页",
          check: true,
          children: [
            {
              label: "操作一",
              check: false
            },
            {
              label: "操作二",
              check: true
            },
            {
              label: "操作三",
              check: false
            }
          ]
        },
        {
          label: "权限管理",
          check: true
        },
        {
          label: "用户管理",
          check: true
        },
        {
          label: "设备管理",
          check: false
        },
        {
          label: "公司配置",
          check: true
        },
        {
          label: "内部通讯录",
          check: false
        },
        {
          label: "访客统计",
          check: true
        },
        {
          label: "访客记录",
          check: true
        },
        {
          label: "访客名单",
          check: false
        },
        {
          label: "访客名片",
          check: false
        },
        {
          label: "实时签到",
          check: true
        },
        {
          label: "签到统计",
          check: true
        },
        {
          label: "考勤记录",
          check: false
        }
      ]
    };
  },
  methods: {
    handleAddRole() {
      this.dialogAddRole = true;
    },
    handleEditRole(name) {
      this.dialogEditRole = true;
      this.editRoleForm.name = name;
    },
    handleDeleteRole(index) {
      this.roleList.splice(index, 1);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-authority-management
  padding 20px
  display flex
// 角色
.m-role
  width 256px
  background-color $white0
  margin-right 20px
.m-role-list
  cursor pointer
.m-role-item
  padding 10px 20px
  display flex
  &:hover
    background-color $base1
.m-role-item
  &:hover .m-role-item-right
    display block
.m-role-item-left
  flex 1
  line-height 28px
.m-role-item-right
  display none
.m-role-add
  padding 20px
  .el-button
    width 100%
// 权限
.m-auth
  flex 1
  background-color $white0
  padding 20px
.m-auth-first
  padding 20px 0
.m-auth-second
  margin-left 20px
  display flex
  flex-wrap wrap
.m-auth-second-item
  padding-top 20px
  margin-right 20px
</style>