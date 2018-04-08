<template>
  <div class="register">
    <div class="register-wrapper">
      <IForm :model="formItem" :label-width="80">
        <IFormItem label="用户名">
          <IInput class="form-input" :class="invalid_username_input" v-model="formItem.username" placeholder="请输入用户名"></IInput><span class="must">*</span>
          <span class="prompt" :class=" invalid_username_input ? 'invalid_input' : '' ">   请填写6位以上用户名,字母或者数字组合</span>
        </IFormItem>
        <IFormItem label="微信号">
          <IInput class="form-input" v-model="formItem.wechat_num" placeholder="请输入微信号"></IInput>
          <!--<IButton style="width: 100px" type="success">发送验证码</IButton>-->
        </IFormItem>
        <IFormItem label="密码">
          <IInput class="form-input" v-model="formItem.password" type="password" placeholder="密码"></IInput><span class="must">*</span>
          <span class="prompt" :class="invalid_password_input ? 'invalid_input' : '' ">   请填写6位以上字母或者数字组合</span>
        </IFormItem>
      </IForm>


      <div id="mpanel4" style="margin-top:50px;">
      </div>

      <IButton class="register-btn" size="large" type="success" :loading="loading" @click="register">注册</IButton>

    </div>
  </div>

  <!--  <script type="text/javascript" src="../../third_libs/verify/js/jquery.min.js" ></script>  -->
  <!--<script type="text/javascript" src="../../third_libs/verify/js/verify.js" ></script>-->
  <!---->
  <!--<script>-->
  <!--$('#mpanel4').slideVerify({-->
  <!--type : 2,		//类型-->
  <!--vOffset : 5,	//误差量，根据需求自行调整-->
  <!--vSpace : 5,	//间隔-->
  <!--imgName : ['1.jpg', '2.jpg'],-->
  <!--imgSize : {-->
  <!--width: '400px',-->
  <!--height: '200px',-->
  <!--},-->
  <!--blockSize : {-->
  <!--width: '40px',-->
  <!--height: '40px',-->
  <!--},-->
  <!--barSize : {-->
  <!--width : '400px',-->
  <!--height : '40px',-->
  <!--},-->
  <!--ready : function() {-->
  <!--},-->
  <!--success : function() {-->
  <!--alert('验证成功，添加你自己的代码！');-->
  <!--//......后续操作-->
  <!--},-->
  <!--error : function() {-->
  <!--//alert('验证失败！');-->
  <!--}-->

  <!--});-->
  <!--</script>-->


</template>

<script>

  import {
    Form,
    FormItem,
    Input,
    Button
  } from 'iview'

  import Validator from '../../utils/validator'
  import Urls from '../../api/backend_urls'
  import Util from '../../libs/util'
  import {paths} from '../../router'


  export default{
    data(){
      return {
        loading: false,
        formItem: {
          username:'',
          wechat_num:'',
          password:''
        },
        invalid_username_input: false,
        invalid_password_input: false,
      }
    },
    components: {
      IForm:Form,
      IFormItem:FormItem,
      IInput:Input,
      IButton:Button
    },

    methods: {
      register(){

        // 1.先验证username是否合格
        if (Validator.validate_register_username(this.formItem.username) === false) {
          this.invalid_username_input=true
          return
        }
        // 2.验证password
        if (Validator.validate_register_password(this.formItem.password) === false) {
          this.invalid_password_input=true
          return
        }
        // 3.活动指示器
        this.loading=true
        // 4.注册接口
        this.$http.post(Urls.users.register(), this.formItem).then((response) => {

          this.loading=false
          this.$Message.success(Util.convert_error_data_to_str(response.statusText, response.data))

          // 跳转页面
          this.$router.push({path: paths.home})
        }).catch((response) => {

          this.loading=false

          this.$Message.error(Util.convert_error_data_to_str(response.statusText, response.data))
        })
      },

    }
  }




</script>

<style scoped>

  .register-wrapper {
    margin: 40px;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .form-input {
    width: 350px;
  }

  .must {
    color: red;
    margin-left: 4px;
    font-size: 20px;
  }

  .register-btn {
    width: 100px!important;
    margin-left: 80px;
  }

  .prompt {
    color: #bbb;
  }

  .invalid_input {
    color: red;
  }


</style>