<template>
  <a-layout id="components-layout-main">
    <a-layout-header class="header">
      <div class="logo" @click="$openWindow('/', '_self')">
        <div class="logo-img">
          <img src="/static/images/logo.png" alt="">
        </div>
        <!--<div class="logo-label">-->
          <!--<div>{{userInfo.companyUserName}}<span v-if="userInfo.deptName">（{{userInfo.deptName}}）</span></div>-->
          <!--<div class="powered-by">斜杠伙伴兼职管理系统 Powered by 斜杠伙伴</div>-->
        <!--</div>-->
      </div>
      <div style="float: right;height: 64px;display: flex;">
        <a-dropdown>
          <span class="action ant-dropdown-link user-dropdown-menu">
            <!--<a-avatar style="background-color:#87d068" size="small"
                      :src="userInfo.headImage"></a-avatar>
              <span>{{userInfo.contact || '我的工作台'}}</span>
            <a-tag color="orange">{{userInfo.userType === 'C' ? '企业用户' : '个人用户'}}</a-tag>-->
          </span>
          <a-menu slot="overlay" @click="onTopMenuSelect" class="user-dropdown-menu-wrapper">
            <a-menu-item key="top-menu-account">
              <a-icon type="user"></a-icon>
              账号设置
            </a-menu-item>
            <a-menu-item key="top-menu-chang-password">
              <a-icon type="setting"></a-icon>
              密码修改
            </a-menu-item>
            <a-menu-divider></a-menu-divider>
            <a-menu-item key="top-menu-logout">
              <a-icon type="logout"></a-icon>
              退出登录
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        width="150"
        collapsible
        v-model="menuIsCollapse"
        :style="{ lineHeight: '64px', overflow: 'hidden', height: '100vh',  position: 'fixed', left: 0 }">
        <span slot="trigger">
          <span v-if="!menuIsCollapse" class="text-gray-dark">折叠菜单</span> <a-icon :type="menuIsCollapse ? 'menu-unfold' : 'menu-fold'" />
        </span>
        <a-menu
          class="sider-menu"
          mode="inline"
          theme="dark"
          @select="onMenuSelect"
          :inlineIndent="14"
          :defaultOpenKeys="menuIsCollapse ? [] : menuOpenKeys"
          :selectedKeys="[$route.path]"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <template v-for="menu in userMenus">
            <template v-if="menu.children">
              <a-sub-menu v-show="!menu.disabled" :key="menu.id">
                <span slot="title">
                  <a-icon v-if="menu.icon" :type="menu.icon"></a-icon>
                  <span>{{menu.title}}</span>
                </span>
                <template v-for="child in menu.children">
                  <template v-if="child.children">
                    <a-menu-item-group :key="child.id">
                      <template slot="title">
                        <a-icon v-if="child.icon" :type="child.icon"></a-icon>
                        <span>{{child.title}}</span>
                      </template>
                      <template v-for="c in child.children">
                        <a-menu-item v-show="!c.disabled" :key="c.path">
                          <span>{{c.title}}</span>
                        </a-menu-item>
                      </template>
                    </a-menu-item-group>
                  </template>
                  <a-menu-item v-else v-show="!child.disabled" :key="child.path">
                    <span>{{child.title}}</span>
                  </a-menu-item>
                </template>
              </a-sub-menu>
            </template>
            <a-menu-item v-else v-show="!menu.disabled" :key="menu.path">
              <a-icon v-if="menu.icon" :type="menu.icon"></a-icon>
              <span>{{menu.title}}</span>
            </a-menu-item>
          </template>
        </a-menu>
      </a-layout-sider>
      <transition :name="routerPageDirection"
                  @before-enter="beforeEnter"
                  @after-leave="afterEnter" mode="out-in">
        <keep-alive :include="routerCachePages">
          <router-view></router-view>
        </keep-alive>
      </transition>
    </a-layout>
  <!--  <a-dialog
      v-drag-dialog
      title="修改密码"
      okText="保存密码"
      width="500px"
      :bodyStyle="{paddingTop: '10px'}"
      @ok="() => $refs.cmp.onSaveNewPassword.bind($refs.cmp)()"
      v-model="centerDialogVisible"
    >
      <change-my-password ref="cmp" @change-success="centerDialogVisible=false"/>
    </a-dialog>-->
  </a-layout>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex' //
  // import ChangeMyPassword from "./ChangeMyPassword"

  export default {
    name: "MainLayout",
    components: {
        // ChangeMyPassword
    },
    data() {
      return {
        transitionName: 'router-slide-right',
        centerDialogVisible: false
      }
    },
    computed: { //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
        ...mapGetters(['routerPageDirection', 'routerCachePages', 'userMenus', 'userInfo']),
        menuIsCollapse: {
        get() {
          return this.$store.getters.menuIsCollapse
        },
        set(val) {
          this.setMenuIsCollapse(val)
        }
      },
      menuOpenKeys(){
        const path = this.$route.path
        const menus = this.$store.state.user.menus
        let x = []
        for (let item of menus) {
          if (item.path === path) {
            if (item.pid > 0) {
              x = [item.pid]
              break
            }
          }
        }
        return x
      }
    },
    methods: {
        // 在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用
        // mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
        // （需要先在根节点注入 store）：
      ...mapActions(['pullMenus', 'clearUserInfo', 'setMenuIsCollapse']),
      beforeEnter() {
        document.body.style.overflow = 'hidden'
      },
      afterEnter() {
        document.body.style.overflow = 'auto'
      },
      onTopMenuSelect(menu) {
        switch (menu.key) {
          case 'top-menu-logout':
            this.$confirm({
              content: '您确定要退出登录吗？',
              title: '提示',
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              onOk: async () => {
                try {
                  await this.$$main.userLogout()
                  this.$message.success('您已退出登录!')
                  this.clearUserInfo()
                  this.$router.push('/login')
                } catch (e) {
                  e && e.message && this.$message.error(e.message)
                }
              }
            })
            break
          case 'top-menu-chang-password':
            this.centerDialogVisible = true
            break
          case 'top-menu-account':
            this.$router.push('/account/settings')
            break
        }
      },
      onMenuSelect(menu) {
        this.$router.push(menu.key)
      }
    },
    mounted() {
      this.pullMenus()
      // this.$nextTick(() => {
      //   this.$el.querySelectorAll('.ant-menu-submenu-title').forEach(item => {
      //     item.style = ''
      //   })
      // })
    }
  }
</script>

<style lang="less">
  @import "../style/colors.less";
  #components-layout-main {
    height: 100%;

    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color .3s;
    }

    .logo {
      /*width: 120px;*/
      /*height: 31px;*/
      /*background: rgba(0, 0, 0, .2);*/
      /*margin: 16px;*/
      border-radius: 5px;
      float: left;
      display: flex;
      height: 100%;padding-left: 10px;
      cursor: pointer;
      .logo-img img{
        width: 50px;
        height: 50px;
        user-select: none;
      }
      .logo-label {
        color: #fff;
        align-self: center;
        margin-left: 10px;
        line-height: 1;
        font-size: 20px;
        .powered-by {
          margin-top: 5px;
          color: #dcdee1;
          font-size: 12px;
        }
      }
    }

    .ant-menu-item .anticon, .ant-menu-submenu-title .anticon {
      /*margin-right: 0px;*/
      /*margin-left: 0px !important;*/
    }

    .header {
      padding: 0 12px 0 0;
      background-color: @primaryColor;

      .action {
        cursor: pointer;
        padding: 0 12px;
        display: inline-block;
        -webkit-transition: all .3s;
        transition: all .3s;
        height: 100%;
        color: #ffffff;
      }
    }

    // 外置的样式控制
    .user-dropdown-menu {
      span {
        user-select: none;
      }

      cursor: pointer;
    }

    .user-dropdown-menu-wrapper.ant-dropdown-menu {
      padding: 4px 0;

      .ant-dropdown-menu-item {
        width: 160px;
      }

      .ant-dropdown-menu-item > .anticon:first-child,
      .ant-dropdown-menu-item > a > .anticon:first-child,
      .ant-dropdown-menu-submenu-title > .anticon:first-child .ant-dropdown-menu-submenu-title > a > .anticon:first-child {
        min-width: 12px;
        margin-right: 8px;
      }
    }
  }
</style>
