<template>
  <div class="index">
    <i-header ></i-header>
    <router-view></router-view>
    <i-footer></i-footer>
  </div>
</template>

<script>

  import Home from './首页/home.vue'
  import Header from '../components/header/header.vue'
  import Footer from '../components/footer/footer.vue'


  export default {
    data() {
      return {

      }
    },
    methods: {



    },

    components: {
      'home': Home,
      'i-header': Header,
      'i-footer': Footer,

    }
  };
</script>

<style scoped>

  .index {

  }

</style>