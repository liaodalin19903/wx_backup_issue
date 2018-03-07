<template>
  <div class="footer">
    <div class="container">
      <label>©2018 - 2018 Malin All Right Reserved.</label>
      <ul class="nav">
        <li><a>  用户协议  |</a></li>
        <li><a>  投诉建议  |</a></li>
        <li><a>  关于我们  </a></li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {msg: 'hello vue'}
    },
    components: {}
  }
</script>

<style scoped>

  .footer {
    width: 100%;
    height: 64px;

    border-top: 1px solid #e6e6e6;
    position: relative;
    bottom: 0;
  }

  .container {
    margin-top: 14px;
  }

  label {
    color: #afafaf;
  }

  ul {
    float: right;
    margin-right: 64px;
  }

  li {
    display: inline-block;
  }

  li a {
    color: #afafaf;
    font-size: 12px;
  }

</style>