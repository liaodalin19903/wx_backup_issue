<template>

  <div class="page-common">
    ABC
  </div>

</template>

<script>

  import PathNav from '../../components/common/path-nav.vue'

  import {paths} from '../../router'  // 路径

  import {Checkbox, RadioGroup, Radio} from 'iview'

  export default{
    data(){
      return {
        routes: [
          {
            name:"首页",
            route:paths.home
          },
          {
            name:"忘记密码",
            route:paths.forgetPassword
          }
        ]
      }
    },
    components: {
      'path-nav':PathNav,
      'i-checkbox': Checkbox,
      'i-radio-group': RadioGroup,
      'i-radio': Radio
    }
  }



</script>

<style scoped>

  @import '../../styles/common/common.css';



</style>