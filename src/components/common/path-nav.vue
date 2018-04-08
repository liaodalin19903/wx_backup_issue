<template>
    <div class="path-nav">
      <i-breadcrumb class="breadcrmb">
        <i-breadcrumb-item v-for="route in route_list" :to="route.route">{{ route.name }}</i-breadcrumb-item>
      </i-breadcrumb>
    </div>
</template>

<script>

  import {
    Breadcrumb,
    BreadcrumbItem
  } from 'iview'

  export default{
    data(){
      return {msg: 'hello vue'}
    },
    components: {
      'i-breadcrumb':Breadcrumb,
      'i-breadcrumb-item': BreadcrumbItem
    },

    props: {
      route_list: {
        type: Array,
        default: []
      }
    },

    methods: {
      gotoRoute(link){

      }
    }
  }
</script>

<style scoped>

  .path-nav {
    border-bottom: 1px solid #f8f8f8;
  }

  .breadcrmb {
    height: 64px;
    line-height: 64px;
    margin-left: 20px;
  }

</style>