<template>
  <div class="function-intro">
    <div class="icon">
      <Icon class="heart" type="star" size="30"></Icon>
    </div>
    <div id="title">
      <label>备份微信号码</label>
    </div>
    <div id="content">
      <span>接入微信开放平台，让你的移动应用支持微信分享、微信收藏和微信支付。</span>
    </div>
    <div id="more">
      <a>了解更多</a>
    </div>
  </div>
</template>

<script>

  import {Icon} from 'iview'

  export default{
    data(){
      return {msg: 'hello vue'}
    },
    components: {}
  }
</script>

<style scoped>


  .function-intro {
    width: 280px;
    height: 300px;

    text-align: center;
  }


  .icon {
    display: inline-block;
    margin-top: 50px;
  }

  #title label {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;

    margin-top: 20px;
  }

  #content span {
    display: inline-block;
    margin: 4px 32px 4px 32px;
  }

  #more a {
    display: inline-block;
    font-size: 14px;
    color: #51a0fc;
    margin-top: 60px;
  }

  #more a:hover {
    text-decoration:underline;
  }

  .inline-block {
    display: inline-block;
  }


</style>