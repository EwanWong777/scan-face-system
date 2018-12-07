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
          <el-button
            type="primary"
            @click="handleAdd"
          >添加成员</el-button>
          <el-button
            type="primary"
            @click="handleLead"
          >导入成员</el-button>
          <el-button type="primary">模板下载</el-button>
          <el-button type="danger">删除</el-button>
        </div>
      </div>
      <div class="m-table-body">
        <template>
          <el-table :data="internalAddressBook">
            <el-table-column
              type="selection"
              width="50"
            >
            </el-table-column>
            <el-table-column
              prop="account"
              label="账号"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="成员名称"
            >
            </el-table-column>
            <el-table-column
              prop="phoneNumber"
              label="手机号"
            >
            </el-table-column>
            <el-table-column
              prop="position"
              label="职位"
            >
            </el-table-column>
            <el-table-column
              prop="department"
              label="所属部门"
            >
            </el-table-column>
            <el-table-column
              prop="photo"
              label="成员照片"
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
                  @click="handleViewPhotos"
                >查看照片</el-button>
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
    <!-- 添加成员 -->
    <el-dialog
      title="添加成员"
      :visible.sync="dialogAdd"
      :append-to-body="true"
    >
      <el-form
        :model="addForm"
        label-width='100px'
      >
        <el-form-item label="账号">
          <el-input
            v-model="addForm.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="成员名称">
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
        <el-form-item label="职位">
          <el-input
            v-model="addForm.position"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select
            class="m-el-select"
            v-model="addForm.department"
            placeholder="请选择目标分组"
          >
            <el-option
              v-for="(item,index) in departmentList"
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
    <!-- 导入成员 -->
    <el-dialog
      title="导入成员"
      :visible.sync="dialogLead"
      :append-to-body="true"
    >
      <el-form
        :model="addForm"
        label-width='100px'
      >
        <el-form-item label="上传文件">
          <div class="m-el-upload">
            <el-upload
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div
                class="el-upload__tip"
                slot="tip"
              >只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogLead = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogLead = false"
        >确 定</el-button>
      </div>
    </el-dialog>
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
        <el-form-item label="账号">
          <el-input
            v-model="editForm.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="成员名称">
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
        <el-form-item label="职位">
          <el-input
            v-model="editForm.position"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select
            class="m-el-select"
            v-model="editForm.department"
            placeholder="请选择目标分组"
          >
            <el-option
              v-for="(item,index) in departmentList"
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
import { getInternalAddressBook } from "@/api/internalAddressBook";
export default {
  created() {
    this.getInternalAddressBook();
  },
  data() {
    return {
      mTableSearch: {
        key: "",
        sex: ""
      },
      internalAddressBook: null,
      dialogAdd: false,
      addForm: {
        account: "",
        name: "",
        phoneNumber: "",
        position: "",
        department: "",
        photo: ""
      },
      dialogLead: false,
      dialogViewPhotos: false,
      dialogEdit: false,
      editForm: {
        account: "",
        name: "",
        phoneNumber: "",
        position: "",
        department: "",
        photo: ""
      },
      departmentList: [
        {
          name: "研发中心"
        },
        {
          name: "业务部"
        },
        {
          name: "财务部"
        },
        {
          name: "行政部"
        }
      ]
    };
  },
  methods: {
    getInternalAddressBook() {
      getInternalAddressBook()
        .then(res => {
          this.internalAddressBook = res.data.internalAddressBook;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleAdd() {
      this.dialogAdd = true;
    },
    handleLead() {
      this.dialogLead = true;
    },
    handleViewPhotos() {
      this.dialogViewPhotos = true;
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
.m-member-photos
  img
    width 100%
    margin-bottom 20px
</style>