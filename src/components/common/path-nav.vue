<template>
  <div class="path-nav">
    <i-breadcrumb>
      <i-breadcrumb-item for-in="route in routes" to="route.route">{{ route.name }}</i-breadcrumb-item>
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
        type: list,
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

</style>