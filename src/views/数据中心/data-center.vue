<template>
  <div class="page-common">
    <i-tabs>
      <i-tab-pane label="微信号备份">
        内容
      </i-tab-pane>
    </i-tabs>
  </div>
</template>

<script>

  import {
    Tabs,
    Tabpane
  } from 'iview'

  export default{
    name:"data-center",
    data(){
      return {msg: 'hello vue'}
    },
    components: {
      'i-tabs' : Tabs,
      'i-tab-pane': Tabpane
    }
  }
</script>

<style scoped>

  @import '../../styles/common/common.css';



</style>