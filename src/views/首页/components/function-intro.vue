<template>
  <div class="function-intro">
    <div class="icon">
      <i-icon :name="icon_data.name" scale="5"></i-icon>
    </div>
    <div id="title">
      <label>{{icon_data.title}}</label>
    </div>
    <div id="content">
      <span>{{ icon_data.desc }}</span>
    </div>
    <div id="more">
      <a>了解更多</a>
    </div>
  </div>
</template>

<script>


  export default{
    props: {
      icon_data: {
        type: Object,
        require: true
      }
    },
    data(){
      return {
        msg: 'hello vue',

      }
    },
    components: {

    }
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