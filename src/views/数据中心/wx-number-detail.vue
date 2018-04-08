<style scoped>

  @import '../../styles/common/common.css';

  .wx-number-detail {
    margin: 20px;
  }

</style>

<template>
  <div class="wx-number-detail">
    <h3>微信号码详情</h3>
    <div class="line"></div>
    <label>微信号码</label>
    <br>
    <span>xx</span>
    <label>手机号码</label>
    <br>
    <span>xx</span>
    <label>备注</label>
    <br>
    <span>xx</span>

  </div>
</template>

<script>

  export default{
    props: {

    },
    data(){
      return {msg: 'hello vue'}
    },
    components: {

    },
    methods: {

    },
    // 生命周期方法
    created(){
      var id = this.$route.params.id

      this.$http.get(this.$Urls.wx_numbers.detail(id)).then(response => {

      }).catch(response => {

      })
    }

  }

</script>

