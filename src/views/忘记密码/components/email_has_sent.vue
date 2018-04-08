<template>
  <div class="email_has_sent">
    <div class="content-wrapper">

      <div class="img-and-title">
        <img src="../../../assets/img/forget-pwd/email-sent.png">

        <div class="title-info">
          <h3>密码重置已经发送到你的注册邮箱:{{}}</h3>

          <span>请访问邮件中给出的网页链接,根据页面提示完成密码重置。</span>
        </div>
      </div>


      <div class="attention">
        <IButton class="login-button" type="success">登录邮箱</IButton>
        <br>
        <span>没有收到邮件?</span>

        <div>
          <ul>
            <li>请检查邮箱地址是否正确,你可以返回<span>重新填写</span></li>
            <li>检查你的邮件垃圾箱</li>
            <li>若仍未收到确认,请尝试<span>重新发送</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {
    Button,

  } from 'iview'

  export default{
    data(){
      return {msg: 'hello vue'}
    },
    components: {
      IButton:Button
    }
  }
</script>

<style scoped>

  .content-wrapper {
    /*text-align: center;*/
    padding-top: 20px;
    width: 500px;
    margin: 0 auto;
  }

  .img-and-title > img, .title-info {
    display: inline-block;
  }

  .img-and-title > img {
    width: 56px;

  }
  .title-info {
    line-height: 26px;
  }

  .title-info > h3 {
    text-align: left;
    font-weight: normal;
  }
  

  .login-button {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .login-button ~ span {
    left: -100px;
    color: #cccccc;
    margin-bottom: 20px;
  }

  .attention {
    margin-left: 60px;
  }

  ul {
    list-style-type: decimal;
    position: relative;
    margin-left: 14px;
    margin-top: 10px;
  }

</style>