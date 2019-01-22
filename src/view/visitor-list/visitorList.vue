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
          <el-button type="danger">删除</el-button>
        </div>
      </div>
      <div class="m-table-body">
        <template>
          <el-table :data="visitorList">
            <el-table-column
              type="selection"
              width="50"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="访客名称"
            >
            </el-table-column>
            <el-table-column
              prop="phoneNumber"
              label="手机号"
            >
            </el-table-column>
            <el-table-column
              prop="photo"
              label="访客照片"
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
        <el-form-item label="访客名单">
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
import { getVisitorList } from "@/api/visitorList";
export default {
  created() {
    this.getVisitorList();
  },
  data() {
    return {
      mTableSearch: {
        key: "",
        sex: ""
      },
      visitorList: null,
      dialogViewPhotos: false,
      dialogEdit: false,
      editForm: {
        name: "",
        object: ""
      },
      fileList: [],
      memberPhotos: [
        { url: require("../../assets/demo1.jpg"), alt: "" },
        { url: require("../../assets/demo2.jpg"), alt: "" }
      ]
    };
  },
  methods: {
    getVisitorList() {
      getVisitorList()
        .then(res => {
          this.visitorList = res.data.visitorList;
        })
        .catch(err => {
          console.log(err);
        });
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