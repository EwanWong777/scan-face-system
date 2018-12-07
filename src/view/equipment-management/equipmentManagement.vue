<template>
  <!-- 分组 -->
  <div class="m-equipment-management">
    <div class="m-group">
      <div
        class="m-group-list"
        v-for="(item,index) in groupList"
        :key="index"
      >
        <div class="m-group-item">
          <div class="m-group-item-left">
            {{item.name}}
          </div>
          <div
            class="m-group-item-right"
            v-if="item.cantOperation"
          >
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              circle
              @click="handleEditGroup(item.name)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              circle
              @click="handleDeleteGroup(index)"
            ></el-button>
          </div>
        </div>
      </div>
      <div class="m-group-add">
        <el-button
          type="primary"
          @click="handleAddGroup"
        >添加分组</el-button>
      </div>
    </div>
    <!-- 表格 -->
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
          <el-button
            type="primary"
            @click="handleRemoveGroup"
          >移动分组</el-button>
          <el-button type="danger">删除</el-button>
        </div>
      </div>
      <div class="m-table-body">
        <template>
          <el-table :data="equipmentData">
            <el-table-column
              type="selection"
              width="50"
            >
            </el-table-column>
            <el-table-column
              prop="eid"
              label="设备ID"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="设备名称"
            >
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
    <!-- 添加分组 -->
    <el-dialog
      title="添加分组"
      :visible.sync="dialogAddGroup"
      :append-to-body="true"
      width="30%"
    >
      <el-form
        :model="addGroupForm"
        label-width='100px'
      >
        <el-form-item label="分组名称">
          <el-input
            v-model="addGroupForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogAddGroup = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogAddGroup = false"
        >确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改分组 -->
    <el-dialog
      title="修改分组"
      :visible.sync="dialogEditGroup"
      :append-to-body="true"
      width="30%"
    >
      <el-form
        :model="editGroupForm"
        label-width='100px'
      >
        <el-form-item label="分组名称">
          <el-input
            v-model="editGroupForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogEditGroup = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogEditGroup = false"
        >确 定</el-button>
      </div>
    </el-dialog>
    <!-- 移动分组 -->
    <el-dialog
      title="移动分组"
      :visible.sync="dialogRemoveGroup"
      :append-to-body="true"
      width="30%"
    >
      <el-form
        :model="removeGroupForm"
        label-width='100px'
      >
        <el-form-item label="目标分组">
          <el-select
            class="m-el-select"
            v-model="removeGroupForm.name"
            placeholder="请选择目标分组"
          >
            <el-option
              v-for="(item,index) in groupList"
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
        <el-button @click="dialogRemoveGroup = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogRemoveGroup = false"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getEquipmentData } from "@/api/equipmentData";
export default {
  created() {
    this.getEquipmentData();
  },
  data() {
    return {
      mTableSearch: {
        key: "",
        sex: ""
      },
      equipmentData: null,
      groupList: [
        {
          name: "未分组",
          cantOperation: false
        },
        {
          name: "分组一",
          cantOperation: true
        },
        {
          name: "分组二",
          cantOperation: true
        },
        {
          name: "分组三",
          cantOperation: true
        }
      ],
      dialogAddGroup: false,
      addGroupForm: {
        name: ""
      },
      dialogEditGroup: false,
      editGroupForm: {
        name: ""
      },
      dialogRemoveGroup: false,
      removeGroupForm: {
        name: ""
      }
    };
  },
  methods: {
    getEquipmentData() {
      getEquipmentData()
        .then(res => {
          this.equipmentData = res.data.equipmentData;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(row) {
      this.dialogEdit = true;
      this.editForm = Object.assign({}, row);
    },
    handleAddGroup() {
      this.dialogAddGroup = true;
    },
    handleEditGroup(name) {
      this.dialogEditGroup = true;
      this.editGroupForm.name = name;
    },
    handleDeleteGroup(index) {
      this.groupList.splice(index, 1);
    },
    handleRemoveGroup() {
      this.dialogRemoveGroup = true;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-equipment-management
  padding 20px
  display flex
// 分组
.m-group
  width 256px
  background-color $white0
  margin-right 20px
.m-group-list
  cursor pointer
.m-group-item
  padding 10px 20px
  display flex
  &:hover
    background-color $base1
.m-group-item
  &:hover .m-group-item-right
    display block
.m-group-item-left
  flex 1
  line-height 28px
.m-group-item-right
  display none
.m-group-add
  padding 20px
  .el-button
    width 100%
// 表格
.m-table
  background-color $white0
  padding 20px
  flex 1
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