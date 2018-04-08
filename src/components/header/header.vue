<template>
  <div class="header">
    <div class="container flex-box">
      <div class="logo">
        <img src="../../assets/img/common/logo.png">
      </div>
      <ul class="nav">
        <li class="nav-item" ><router-link :to="homePath" exact active-class="selected"  @click.native="selectedIndex=0">首页</router-link></li>
        <li class="nav-item" ><router-link :to="dataCenterPath" active-class="selected"  @click.native="selectedIndex=1">数据中心</router-link></li>
      </ul>
      <div class="right-buttons">

        <div class="qrcode" @mouseover="overShow" @mouseout="outHide" >
          <img src="../../assets/img/home/little-qrcode.png">
        </div>

        <div v-if="user_info" class="welcome">
          <a @click="welcome_username">欢迎您,{{user_info.username}}!</a>/<a @click="logout">退出</a>

        </div>

        <div v-if="!user_info" class="login-logout">
          <a @click="login">登录</a>/<a @click="register">注册</a>

        </div>
      </div>
      <div :class="{ 'qrcode-big': true, 'box-shadow': true, 'i-hide':qrcodeIsHidden }">
        <img src="../../assets/img/home/little-qrcode.png">
        <span>请扫码关注,接收重要通知</span>
      </div>
    </div>

    <!-- login 模态层 -->
    <i-modal
      v-model="loginModal"
      title="登录"
      width="400"
      @on-ok="login_btn"
      @on-cancel="cancel_btn">

      <i-tabs>
        <i-tab-pane label="用户名登录" icon="ios-username">
          <i-input v-model="username" clearable placeholder="请输入用户名" style="width: 300px"></i-input>
          <i-input v-model="password" clearable placeholder="请输入密码" type="password" style="width: 300px"></i-input>
          <i-checkbox >是否记住密码</i-checkbox>
          <router-link class="forget-pwd" type="text" :to="forgetPwdPath" @click.native="closeModal" >忘记密码?</router-link>

        </i-tab-pane>

        <i-tab-pane label="邮箱登录" icon="ios-email">
          <i-input v-model="email" clearable placeholder="请输入邮箱" style="width: 300px"></i-input>
          <i-input v-model="password" clearable placeholder="请输入密码" type="password" style="width: 300px"></i-input>
        </i-tab-pane>
      </i-tabs>

    </i-modal>

  </div>


</template>

<script>

  import {paths} from '../../router'

  import {
    Modal,
    Input,
    Tabs,
    TabPane,
    Checkbox,
    Button
  } from 'iview'

  import Urls from '../../api/backend_urls'
  import Util from '../../libs/util'
  import LocalStorageUtil from '../../utils/local_storage_util'

  import { mapState } from "vuex";

  export default{
    name: 'iheader',
    data(){
      return {
        qrcodeIsHidden:true,
        selectedIndex: 0,

        loginModal: false,  // 登录模态层

        username: null,
        email: null,
        password: null,

        remenberPwd: false,

        paths: paths,  // 路径
        homePath: paths.home,
        dataCenterPath:paths.dataCenter,
        forgetPwdPath: paths.forgetPassword,

      }
    },
    computed: {

      ...mapState(["user_info"])

    },
    components: {
      'i-modal':Modal,
      'i-input':Input,
      'i-tabs':Tabs,
      'i-tab-pane':TabPane,
      'i-checkbox':Checkbox,
      'i-button':Button,
    },
    methods: {
      overShow(){
        this.qrcodeIsHidden=false

      },
      outHide(){
        this.qrcodeIsHidden=true
      },

      clickLi(page_num){

      },
      // 登录
      login() {

        this.loginModal = true
      },
      register() {
        this.$router.push({path:this.paths.register})
      },



      /* 登录modal */
      // 模态登录:ok
      login_btn() {

        // 验证
        if (!this.username && !this.email) {
          this.$Message.error("请输入用户名或者邮箱")
          return
        }

        if (!this.password) {
          this.$Message.error("请输入密码")
          return
        }

        // 构建参数
        var params = null
        if (this.username) {
          params = {
            username: this.username,
            password: this.password
          }
        }else {
          params = {
            email: this.email,
            password: this.password
          }
        }

        const loading = this.$Message.loading({
          content: '登录中...',
          duration: 0
        });

        var that = this

        // 登录接口请求
        that.$http.post(Urls.users.login(), params).then((response) => {

          setTimeout(loading, 0)
          that.$Message.success(Util.convert_error_data_to_str("登录成功"))
          that.$Cookies.set('token', response.data.key);

          that.get_user_info()

        }).catch((response) => {

            setTimeout(loading, 0)
            that.$Message.error(Util.convert_error_data_to_str(response.statusText, response.data))
          }
        )

      },
      // 请求user信息
      get_user_info(){

        this.$http.get(this.$Urls.users.user_info()).then((response) => {

          // 用户信息存在localStorage
          LocalStorageUtil.set('user_info', response.data)

          this.$store.state.user_info = response.data
        }).catch( (response) => {

          this.$Message.error(Util.convert_error_data_to_str(response.statusText, response.data))
        })
      },

      // 模态登录:cancel
      cancel_btn() {

      },

      closeModal() {
        this.loginModal=false
      },

      // 欢迎您
      welcome_username() {


      },
      // 退出登录
      logout() {

        this.$http.post(this.$Urls.users.logout()).then((response) => {

          LocalStorageUtil.clear('user_info')

          this.$store.commit('set_user_info_null')  // store设置为null

          this.$Message.success(Util.convert_error_data_to_str(response.statusText, response.data))

        }).catch((response) => {
          this.$Message.error(Util.convert_error_data_to_str(response.statusText, response.data))
        })
      }

    },
    props: {

    }
  }


</script>

<style scoped>
  .header {
    width: 100%;
    height: 68px;
    background-color: #363636;
  }

  .container {
    padding-left: 40px;
    padding-right: 40px;
  }

  .container > div {
    display: inline-block;
  }

  .logo {
    height: 68px;
    width: 240px;
    float: left;
  }

  .logo img {
    width: 100%;
    height: 68px;
  }
  
  .nav {
    display: inline-block;
    float: left;
  }



  .nav li {
    width: 96px;
    height: 100%;
    color: #afafaf;
    line-height: 68px;
    float: left;
    text-align: center;
  }

  .nav li :hover {
    color: #fff;
    text-align: center;
  }

  .nav-item a {
    font-size: 16px;
    color: #afafaf;
  }

  .nav .selected {
    color: #fff;
  }

  .right-buttons {
    position:absolute;
    right: 0;

  }

  .login-logout, .welcome {

    float: right;
    display: inline-block;
    height: 68px;
    color: #ffffff;
    line-height: 68px;
  }

  .login-logout a, .welcome a {
    font-size: 14px;
    color: #afafaf;

  }

  .login-logout a:hover {
    font-size: 14px;
    color: #ffffff;

  }

  .qrcode {
    float: right;
    display: inline-block;
    width: 68px;
    height: 68px;
    text-align: center;
    line-height: 68px;

  }

  .qrcode-big {
    width: 110px;
    height: 140px;
    background-color: #fff;

    text-align: center;

    position: absolute;
    right: 10px;
    top: 50px;
    z-index: 100;
  }

  .i-hide {
    display: none!important;;
  }

  .qrcode-big img, span {
    margin: 0 auto;
  }

  .qrcode-big img {
    display: block;
    width: 50px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 14px;

  }

  .box-shadow{
    -webkit-box-shadow:0 0 10px rgba(204, 204, 204, .5);
    -moz-box-shadow:0 0 10px rgba(204, 204, 204, .5);
    box-shadow:0 0 10px rgba(204, 204, 204, .5);
  }

  .qrcode-big span {
    font-size: 12px;
    color: #000;
  }

  .qrcode img {
    line-height: 68px;
    width: 14px;
    height: 14px;
    margin: 4px auto -4px auto;
    background-color: #c3c3c3;
  }

  .flex-box {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
  }

  .forget-pwd {
    float: right;
  }

</style>