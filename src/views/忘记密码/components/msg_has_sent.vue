<template>
  <div class="msg_has_sent">
    <div class="wrapper">
      <span>验证码已经发送到手机:{{}}</span><br>
      <label>请输入验证码:</label><br>
      <IInput style="width: 200px" v-model="verify_code" placeholder="请输入验证码"></IInput>

      <div ></div>
      <label>请输入新密码:</label><br>
      <IInput style="width: 200px" v-model="verify_code" placeholder="请输入新密码"></IInput>
      <br>
      <IButton class="submit" type="success">提交</IButton>
    </div>
  </div>
</template>

<script>

  import {
    Input,
    Button
  } from 'iview'

  export default{
    data(){
      return {
        verify_code:null
      }
    },
    components: {
      IInput:Input,
      IButton:Button
    }
  }
</script>

<style scoped>


  .wrapper {
    width: 500px;

    margin-top: 30px;
    margin-left: 60px;

  }

  .wrapper > span {
    font-size: 16px;
  }

  .msg_has_sent > span {
    display: block;

  }

  label {
    display: inline-block;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .submit {
    margin-top: 10px;
  }


  
</style>