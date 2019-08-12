<template>
  <div>
    <p class="text-center mt" style="font-size: 24px;">重置密码</p>
    <transition :name="step === 'send-code' ? 'vux-pop-out':'vux-pop-in'" mode="out-in">
      <a-form v-if="step === 'send-code'" @submit.prevent="sendCodeSubmit" :form="codeForm">
        <a-form-item>
          <a-input size="large" v-decorator="['loginName', {rules: [{
                      required: true, message: '手机号不能为空'
                    }]}]" placeholder="请输入你注册账号时的手机号">
            <a-icon slot="prefix" type="user"></a-icon>
          </a-input>
        </a-form-item>
        <a-form-item class="verifyCode">
          <a-input type="tel" size="large" autocomplete="off" v-decorator="['verifyCode', {rules: [{
                      required: true, message: '请输入图片中的内容'
                    }]}]" placeholder="验证码,右侧图片字符">
            <a-icon slot="prefix" type="warning"></a-icon>
            <div slot="addonAfter">
              <div v-if="!verifyCodeInfo.base64Image" class="verifyCodeImg">验证码图片</div>
              <img v-else :src="verifyCodeInfo.base64Image" @click="verifyCode" class="verifyCodeImg"
                   title="点击刷新验证码" alt="验证码图片">
            </div>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button :loading="loading" style="width: 100%;" size="large" html-type="submit" type="primary">
            发送验证码
          </a-button>
        </a-form-item>
      </a-form>
      <a-form v-else-if="step === 'reset-password'" @submit.prevent="resetPasswordSubmit" :form="resetForm">
        <a-form-item>
          <a-input size="large" v-decorator="['verifyCode', {rules: [{
                      required: true, message: '短信验证码不能为空'
                    }]}]" placeholder="请输入您收到的短信验证码">
            <a-icon slot="prefix" type="user"></a-icon>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input size="large" v-decorator="['password', {rules: [{
                      required: true, message: '新密码不能为空'
                    }]}]" placeholder="请输入您账号的新密码" type="password">
            <a-icon slot="prefix" type="key"></a-icon>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input size="large" v-decorator="['repassword', {rules: [{
                      required: true, message: '请再次输入新密码'
                    }]}]" placeholder="请再输入您账号的新密码" type="password">
            <a-icon slot="prefix" type="key"></a-icon>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button :loading="loading" style="width: 100%;" size="large" html-type="submit" type="primary">
            确认修改密码
          </a-button>
        </a-form-item>
      </a-form>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'ResetPassword',
    data(){
      return {
        codeForm: this.$form.createForm(this),
        resetForm: this.$form.createForm(this),
        verifyCodeInfo: {},
        loading: false,
        step: 'send-code'
      }
    },
    methods: {
      async verifyCode(){
        try {
          const verifyCodeInfo = await this.$$main.commonCodeImage()
          if (verifyCodeInfo && !verifyCodeInfo.base64Image.startsWith('data:image')) {
            verifyCodeInfo.base64Image = 'data:image/jpg;base64,' + verifyCodeInfo.base64Image
          }
          this.verifyCodeInfo = verifyCodeInfo
        } catch (e) {
          console.error(e.message)
        }
      },
      sendCodeSubmit(){
        this.codeForm.validateFields(async (err, {loginName, verifyCode}) => {
          if (!err) {
            this.loading = true
            try {
              const res = await this.$$main.userResetPwdSms({
                'mobile': loginName,
                'code': verifyCode,
                'codeSn': this.verifyCodeInfo.codeSn
              })
              this.smsCodeSn = res.smsCodeSn
              this.step = 'reset-password'
              this.$message.success('验证码已发送至手机，请注意查收')
            } catch (e) {
              e.message && this.$message.error(e.message)
              this.verifyCode()
            } finally {
              this.loading = false
            }
          }
        })
      },
      resetPasswordSubmit(){
        this.resetForm.validateFields(async (err, {verifyCode, password, repassword}) => {
          if (!err) {
            this.loading = true
            try {
              const res = await this.$$main.userResetPwdChange({
                'smsCode': verifyCode,
                'pwd': password,
                'confirmPwd': repassword,
                'smsCodeSn': this.smsCodeSn
              })
              if (res) {
                this.$success({
                  title: '密码修改成功',
                  content: '密码已修改，请使用新密码登录',
                  onOk: () => {
                    setTimeout(() => {
                      this.$parent.loginType = 'user' // 返回登录页面
                    }, 500)
                  }
                })
              } else {
                this.$message.error('密码修改失败')
              }
            } catch (e) {
              e.message && this.$message.error(e.message)
            } finally {
              this.loading = false
            }
          }
        })
      }
    },
    mounted() {
      this.verifyCode()
    }
  }
</script>

<style lang="less" scoped>
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
</style>
