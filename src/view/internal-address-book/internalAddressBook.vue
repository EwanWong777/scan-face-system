<template>
  <div class="m-internal-address-book">
    <div class="m-group">
      <div
        class="m-group-list"
        v-for="(item,index) in groupList"
        :key="index"
        :class="{'active':index==activeGroup}"
        @click="handleChangeGroup(index)"
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
        >添加部门</el-button>
      </div>
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
          <el-button
            type="primary"
            @click="handleAdd"
          >添加成员</el-button>
          <el-button
            type="primary"
            @click="handleLead"
          >导入成员</el-button>
          <el-button
            type="primary"
            @click="handleRemoveGroup"
          >移动部门</el-button>
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
    <!-- 添加部门 -->
    <el-dialog
      title="添加部门"
      :visible.sync="dialogAddGroup"
      :append-to-body="true"
    >
      <el-form
        :model="addGroupForm"
        label-width='100px'
      >
        <el-form-item label="部门名称">
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
    <!-- 修改部门 -->
    <el-dialog
      title="修改部门"
      :visible.sync="dialogEditGroup"
      :append-to-body="true"
    >
      <el-form
        :model="editGroupForm"
        label-width='100px'
      >
        <el-form-item label="部门名称">
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
    <!-- 移动部门 -->
    <el-dialog
      title="移动部门"
      :visible.sync="dialogRemoveGroup"
      :append-to-body="true"
    >
      <el-form
        :model="removeGroupForm"
        label-width='100px'
      >
        <el-form-item label="目标部门">
          <el-select
            class="m-el-select"
            v-model="removeGroupForm.name"
            placeholder="请选择目标部门"
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
        <div
          class="m-photo-box"
          v-for="(item,index) in memberPhotos"
          :key="index"
        >
          <div class="m-photo-img">
            <img
              :src="item.url"
              :alt="item.alt"
            >
          </div>
          <div class="m-photo-btn">
            <i
              class="fas fa-trash-alt"
              @click="handleDelatePhoto(index)"
            ></i>
          </div>
        </div>
      </div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button
          size="small"
          type="primary"
        >点击上传</el-button>
        <div
          slot="tip"
          class="el-upload__tip"
        >只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
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
      activeGroup: 0,
      groupList: [
        {
          name: "未分部门",
          cantOperation: false
        },
        {
          name: "部门一",
          cantOperation: true
        },
        {
          name: "部门二",
          cantOperation: true
        },
        {
          name: "部门三",
          cantOperation: true
        }
      ],
      mTableSearch: {
        key: "",
        sex: ""
      },
      equipmentData: null,
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
      ],
      fileList: [],
      memberPhotos: [
        { url: require("../../assets/demo1.jpg"), alt: "" },
        { url: require("../../assets/demo2.jpg"), alt: "" }
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
    },
    handleChangeGroup(index) {
      this.activeGroup = index;
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
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleDelatePhoto(index) {
      this.memberPhotos.splice(index, 1);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-internal-address-book
  padding 20px
  display flex
// 部门
.m-group
  width 256px
  background-color $white0
  margin-right 20px
  .active
    background-color $base1
    color $base5
.m-group-list
  cursor pointer
.m-group-item
  padding 10px 20px
  display flex
  &:hover
    background-color $base1
    color $base5
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
.m-photo-box
  position relative
  cursor pointer
  &:hover .m-photo-btn
    display block
.m-photo-img
  img
    width 100%
    margin-bottom 20px
.m-photo-btn
  position absolute
  right 15px
  top 15px
  color $white0
  cursor pointer
  display none
</style>