<template>

  <div class="page-common">
    <path-nav :route_list="route_list"></path-nav>
    <router-view></router-view>
  </div>

  </div>

</template>

<script>

  import PathNav from '../../components/common/path-nav.vue'

  import {paths} from '../../router'  // 路径

  import {Checkbox, RadioGroup, Radio} from 'iview'

  import chooseAccountType from './components/choose-account-type.vue'

  export default{
    data(){
      return {
        route_list: [
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
      'i-radio': Radio,
      'choose-accoun-type':chooseAccountType
    }
  }



</script>

<style scoped>

  @import '../../styles/common/common.css';



</style>