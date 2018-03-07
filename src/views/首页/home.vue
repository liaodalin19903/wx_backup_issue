<template>
  <div class="page-common">
    <banner></banner>
    <div class="functions">
      <function-intro :class="'inline-block'"></function-intro>
      <function-intro :class="'inline-block'"></function-intro>
      <function-intro :class="'inline-block'"></function-intro>
      <function-intro :class="'inline-block'"></function-intro>
    </div>

  </div>
</template>

<script>

  import Banner from './components/banner.vue'
  import FunctionIntro from './components/function-intro.vue'

  export default{

    components: {
      'banner': Banner,
      'function-intro': FunctionIntro  // 功能介绍
    }

  }
</script>

<style scoped>

  @import '../../styles/common/common.css';

  .functions {

  }




</style>