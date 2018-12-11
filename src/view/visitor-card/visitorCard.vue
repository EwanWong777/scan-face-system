<template>
  <div class="m-visitor-card">
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
          <el-button type="danger">删除</el-button>
        </div>
      </div>
      <div class="m-table-body">
        <template>
          <el-table :data="visitorCard">
            <el-table-column
              type="selection"
              width="50"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
            >
            </el-table-column>
            <el-table-column
              prop="position"
              label="职位"
            >
            </el-table-column>
            <el-table-column
              prop="phoneNumber"
              label="手机号"
            >
            </el-table-column>
            <el-table-column
              prop="companyName"
              label="公司名称"
            >
            </el-table-column>
            <el-table-column
              prop="companyAddress"
              label="公司地址"
              :show-overflow-tooltip="true"
            >
            </el-table-column>
            <el-table-column
              prop="contactAddress"
              label="联系地址"
              :show-overflow-tooltip="true"
            >
            </el-table-column>
            <el-table-column
              prop="photo"
              label="访客照片"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="240"
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
                  @click="handleViewPhotos"
                >关联</el-button>
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
        <el-form-item label="姓名">
          <el-input
            v-model="editForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input
            v-model="editForm.position"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input
            v-model="editForm.phoneNumber"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="公司名称">
          <el-input
            v-model="editForm.companyName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="公司地址">
          <el-input
            v-model="editForm.companyAddress"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input
            v-model="editForm.contactAddress"
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
import { getVisitorCard } from "@/api/visitorCard";
export default {
  created() {
    this.getVisitorCard();
  },
  data() {
    return {
      mTableSearch: {
        key: "",
        sex: ""
      },
      visitorCard: null,
      dialogViewPhotos: false,
      dialogEdit: false,
      editForm: {
        name: "",
        position: "",
        phoneNumber: "",
        companyName: "",
        companyAddress: "",
        contactAddress: ""
      }
    };
  },
  methods: {
    getVisitorCard() {
      getVisitorCard()
        .then(res => {
          this.visitorCard = res.data.visitorCard;
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
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-visitor-card
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