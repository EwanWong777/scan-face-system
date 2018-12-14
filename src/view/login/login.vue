<template>
  <div class="m-login">
    <div class="m-login-bg"></div>
    <div class="m-login-container">
      <div class="m-login-panel">
        <div class="m-login-logo">
          <img
            src="@/assets/logo-orange.svg"
            alt=""
          >
        </div>
        <div class="m-login-title">
          {{$t('login.title')}}
        </div>
        <el-form>
          <el-form-item :class="errorBags.has('username')?'is-error':''">
            <el-input
              v-validate="{ required: true, regex: /^[a-zA-Z0-9_-]{4,16}$/ }"
              :data-vv-as="$t('login.username')"
              v-model="loginForm.username"
              name="username"
              :placeholder="$t('login.usernamePlaceholder')"
              auto-complete="on"
              class="m-login-input"
            >
            </el-input>
            <div
              class="m-form-error"
              v-show="errorBags.has('username')"
            >{{ errorBags.first('username') }}</div>
          </el-form-item>
          <el-form-item :class="errorBags.has('password')?'is-error':''">
            <el-input
              type="password"
              v-validate="{ required: true, regex: /^[a-zA-Z0-9_.@~!?]{6,17}$/ }"
              :data-vv-as="$t('login.password')"
              v-model="loginForm.password"
              name="password"
              :placeholder="$t('login.passwordPlaceholder')"
              auto-complete="on"
              class="m-login-input"
              @keyup.enter.native="handleLoginByUserName"
            >
            </el-input>
            <div
              class="m-form-error"
              v-show="errorBags.has('password')"
            >{{ errorBags.first('password') }}</div>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="m-login-btn"
              @click="handleLoginByUserName"
            >{{$t('login.login')}}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["loginByUserName"]),
    handleLoginByUserName: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.loginByUserName(this.loginForm)
            .then(res => {
              this.$router.push({ path: this.redirect || "/" });
              if (res) {
                this.$message.error(res);
              }
            })
            .catch(() => {
              this.$message.error("网络错误");
            });
        } else {
          this.$message.error("输入内容格式错误");
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../style/variables.styl'
.m-login
  height 100%
  position relative
.m-login-bg
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background #212121
.m-login-container
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  display flex
  justify-content center
  align-items center
.m-login-panel
  width 500px
  background-color $white0
  padding 60px
  border-radius 10px
.m-login-logo
  text-align center
  margin-bottom 20px
  img
    width 120px
.m-login-title
  text-align center
  font-size 28px
  font-weight bold
  margin-bottom 40px
.m-form-error
  color $danger5
.m-login-btn
  width 100%
</style>
