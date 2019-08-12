<template>
  <div class="main">
    <div class="login-container">
      <div class="content">
        <div class="login-box">
          <div class="top">
            <div class="header">
              <span class="title">人人财务管理系统</span>
            </div>
          </div>
          <div v-if="loginType === 'user' || loginType === 'qrcode'" class="qr-login" @click="triggerLoginType">
            <a-icon :type="loginType === 'user' ? 'qrcode' : 'mobile'"/>
            <div class="qr-login-mask"></div>
          </div>
          <div class="logo">
            <img alt="logo" src="/static/images/logo.png" />
          </div>
          <div class="bottom">
            <div class="login">
              <transition :name="loginType === 'user' ? 'vux-pop-out':'vux-pop-in'" mode="out-in">
                <!-- 账号登录 -->
                <a-form v-if="loginType === 'user'" @submit.prevent="handleSubmit" :form="form">
                  <a-form-item>
                    <a-input size="large" placeholder="手机号/ID/登录名">
                      <a-icon slot="prefix" type="user"></a-icon>
                    </a-input>
                  </a-form-item>
                  <a-form-item>
                    <a-input size="large"  placeholder="登录密码" type="password">
                      <a-icon slot="prefix" type="key"></a-icon>
                    </a-input>
                  </a-form-item>
                  <div>
                    <a-checkbox>自动登录</a-checkbox>
                    <a class="pull-right" @click="loginType = 'reset-password'">忘记密码</a>
                  </div>
                  <a-form-item>
                    <a-button :loading="loading" style="width: 100%;margin-top: 24px" size="large" html-type="submit" type="primary">登录
                    </a-button>
                  </a-form-item>
                  <div class="text-right">
                    <span>还没有账号？<a href="#" @click.prevent="loginType = 'open-account'">开通账号</a></span>
                  </div>
                </a-form>
                <!-- 扫码登录 -->
                <div v-else-if="loginType === 'qrcode'">
                  <div class="text-center">
                    <a-icon type="qrcode" style="font-size: 200px"></a-icon>
                  </div>
                  <div style="display: flex;justify-content: center;margin: 30px 0;">
                    <a-icon type="scan" style="font-size: 30px"/>
                    <div style="font-size: 12px;line-height: 15px;margin-left: 10px;">
                      <div>打开微信小程序</div>
                      <div>扫一扫登录</div>
                    </div>
                  </div>
                  <div class="text-right">
                    <span>还没有账号？<a href="#" @click.prevent="loginType = 'open-account'">开通账号</a></span>
                  </div>
                </div>
                <!-- 开通账号 -->
                <div v-else-if="loginType === 'open-account'">
                  <p class="text-center mt-lg" style="font-size: 24px;">开通账号</p>
                  <p>如果您需要使用《斜杠伙伴兼职管理系统》服务，请<br>通过以下方式联系我们的客服人员。</p>
                  <p class="mb-xl mt-xl">
                    电话：xxxxxxx   7x24小时
                    <br>
                    微信：xxxxxxx
                    <br>
                    地址：上海市怒江北路xxxx号701室
                  </p>
                  <a-button type="primary" @click.prevent="loginType = 'user'" block>返回登录</a-button>
                </div>
                <reset-password v-else-if="loginType === 'reset-password'"></reset-password>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import ResetPassword from './ResetPassword'
  export default {
    name: "login",
    components: {ResetPassword},
    data() {
      return {
        form: this.$form.createForm(this),
        verifyCodeInfo: {},
        loading: false,
        loginType: 'user'
      }
    },
    methods: {
      ...mapActions(['setUserInfo', 'pullMenus']),
      async handleSubmit () {
          let redirect = this.$route.query['redirect'] || ''
          this.$router.replace(redirect || '/')
      },
      triggerLoginType(){
        this.loginType = this.loginType === 'user' ? 'qrcode' : 'user'
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/colors";
  .login-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background: #f0f2f5 url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center 110px;
    background-size: 100%;
    .content {
      padding: 32px 0;
      flex: 1;
      @media (max-width: 768px) {
        padding: 0;
        .qr-login {
          display: none;
        }
      }
      @media (min-width: 768px){
        padding: 112px 0 24px;
        .login-box {
          width: 450px;
          margin: auto;
        }
        .login-box {
          position: relative;
          .qr-login {
            position: absolute;
            right: 0;
            top: 0;
            background-color: @primaryColor;
            cursor: pointer;
            i {
              background-color: #ffffff;
              font-size: 40px;
              color: #000;
              /*padding: 5px;*/
            }
            .qr-login-mask{
              position: absolute;
              top: 0;
            }
            .qr-login-mask:before{
              content: '';
              display: block;
              position: absolute;
              top: 0;
              width: 40px;
              height: 40px;
              background: linear-gradient(42deg, @primaryColor 50%, rgba(0, 0, 0, 0) 55%);
            }
          }
        }
      }
      .top {
        text-align: center;
        background-color: @primaryColor;
        .header {
          height: 150px;
          line-height: 100px;
          a {
            text-decoration: none;
          }
          .title {
            font-size: 33px;
            color: #fff;
            font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
      }
      .logo {
        position: absolute;
        z-index: 9;
        top: 95px;
        width: 100%;
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          background: #bbb;
          border-radius: 100px;
        }
      }
      .bottom {
        background-color: #fff;
        padding-top: 60px;
        padding-bottom: 40px;
      }
      .login{
        width: 368px;
        margin: 0 auto;
        @media screen and (max-width: 576px) {
          width: 95%;
        }
        @media screen and (max-width: 320px) {
          .captcha-button{
            font-size: 14px;
          }
        }
        [class^="el-icon-"] {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.2);
          margin-left: 6px;
          vertical-align: middle;
          cursor: pointer;
          transition: color 0.3s;
          &:hover {
            color: #1890ff;
          }
        }
      }
    }


    .el-form--label-top .el-form-item__label {
      padding: 0;
      color: #0075a8;
      font-weight: 700;
    }

    .verifyCode {
      .el-form-item__content {
        line-height: 1;
      }
      .verifyCodeImg {
        /*border: 1px solid #dddddd;*/
        height: 38px;
        width: 97px;
        line-height: 38px;
        margin: 0;
        padding: 0;
        text-align: center;
        cursor: pointer;
      }
    }

  }

</style>
