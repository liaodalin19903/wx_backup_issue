<template>
  <div class="page-common">
    <banner></banner>
    <div class="functions">
      <function-intro v-for="icon_data in icons_data" :icon_data="icon_data"  :class="'inline-block'"></function-intro>
    </div>

  </div>
</template>


<script>

  import Banner from './components/awesome-banner.vue'
  import FunctionIntro from './components/function-intro.vue'

  export default{
    data() {
      return {
        icon_names: [{name:"wxb主页"},{name:"wxb品牌宝"},{name:"wxb明星店铺"},{name:"企业名称认证"}],
        icons_data: [
          {
            name:"wxb主页",
            title: "微信号码备份",
            desc: "让您的重要客户资源不会流失，自己的微信账号掉了也不用怕！"
          },
          {
            name:"wxb品牌宝",
            title: "服务器租赁/托管/销售",
            desc: "我们还有高端服务器租赁/托管/销售的业务，详情请联系QQ：2356030721"
          },
          {
            name:"wxb明星店铺",
            title: "网站/APP开发",
            desc: "我们承接网站/APP的开发，给你高端体验，实现你的想法。"
          },
          {
            name:"企业名称认证",
            title: "网站运维运营",
            desc: "我们承接网站的运维运营项目，让你不用考虑技术问题。"
          }
        ]
      }
    }
    ,
    components: {
      'banner': Banner,
      'function-intro': FunctionIntro  // 功能介绍
    }
    ,
    methods: {

      init_data(){
        this.$http.get(this.$Urls.website.main_service.list()).then(response => {

        }).catch(response => {
          this.$Message.error(this.$Utils.convert_error_data_to_str(response.statusText, response.data))
        })
      }
    },
    // 生命周期方法
    created() {
      this.init_data()
    }
  }
</script>

<style scoped>

  @import '../../styles/common/common.css';

  .functions {

  }




</style>