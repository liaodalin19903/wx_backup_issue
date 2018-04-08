<template>
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(banner,index) in banners" :key="index">
        <img v-if="banner.src" :src="banner.src">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {

    data () {
      return {
        banners: [], //[{ src: require('../../../assets/img/home/little-qrcode.png') }, { src: require('../../../assets/img/home/002.png') }, { src: require('../../../assets/img/home/003.png') }],
        swiperOption: {
          notNextTick: false,
          autoplay: 1000,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          onSlideChangeEnd: swiper => {
            this.page = swiper.realIndex + 1
            this.index = swiper.realIndex
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    // 生命周期方法
    created(){
      this.init_data()
    },
    methods: {
      // 重建banner数据
      rebuild_banners(list){

        this.banners = list.map(item => {return {src:item.img}})
      },
      // 初始化数据
      init_data(){
        this.$http.get(this.$Urls.website.list()).then(response => {

          this.rebuild_banners(response.data)
        }).catch(response => {
          this.$Message.error(this.$Utils.convert_error_data_to_str(response.statusText, response.data))
        })
      },

    }
  }
</script>

<style scoped>

  .banner {
    height: 500px;
    width: 100%;
    overflow: hidden;
  }

  .swiper-slide{
    /*margin-top: -10px;*/
    /*height: 230px;*/
  }

  .swiper-slide img {
    width: 100%;
    /*height: 100%;*/

  }
</style>