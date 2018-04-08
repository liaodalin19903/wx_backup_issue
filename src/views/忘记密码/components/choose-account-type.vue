<template>
  <div class="choose-account">
    <div class="choose-account-title">
      <span>请选择您的账号类型</span>
    </div>
    <div class="account">
      <IRadioGroup v-model="vertical" vertical>
        <IRadio label="telephone">
          <IIcon type="ios-telephone"></IIcon>
          <span>手机账号</span>
          <IInput v-model="telephone" placeholder="请输入手机号码" :number="true" clearable :class="vertical==='telephone' ? '' : 'hidden' "></IInput>
        </IRadio>

        <Radio class="email-radio" label="email">
          <Icon type="ios-email"></Icon>
          <span>邮箱账号</span>
          <IInput v-model="email" placeholder="请输入邮箱账号" clearable :class="vertical==='email' ? '' : 'hidden' "></IInput>
        </Radio>
      </IRadioGroup>

      <div class="next-step">
        <IButton type="success" class="next-step-button" @click="next_step">下一步</IButton>
      </div>

    </div>
  </div>
</template>

<script>

  import {
    RadioGroup,
    Radio,
    Icon,
    Input,
    Button,
  } from 'iview'

  import {paths} from '../../../router.js'

  export default{
    data(){
      return {
        vertical: 'telephone',
        telephone:null,
        email:null,

      }
    },
    components: {
      IRadioGroup:RadioGroup,
      IRadio:Radio,
      IIcon:Icon,
      IInput:Input,
      IButton:Button
    },

    methods: {
      next_step(){
        if (this.vertical==='email') {
          this.$router.push({path:paths.forgetPassword+'/'+paths.forgetPassword_emailHasSent})
        }else {
          this.$router.push({path:paths.forgetPassword+'/'+paths.forgetPassword_msgHasSent})
        }

      }
    }
  }
</script>

<style scoped>

  .account, .choose-account-title{
    margin-top: 20px;
    margin-left: 20px;
  }

  .choose-account-title {
    font-size: 16px;
    font-weight: bold;
  }

  .email-radio {
    margin-top: 30px;
  }
  
  .hidden {
    display: none;
  }

  .next-step {
    border-top: 1px solid #eeeeee;
    margin-top: 20px;

    /*text-align: center;*/
  }

  .next-step-button {
    margin-top: 20px;
    width: 100px;
  }

</style>