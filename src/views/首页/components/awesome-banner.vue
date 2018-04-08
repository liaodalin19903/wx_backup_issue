<style scoped>
  .swiper-slide {
    font-size: 18px;
    color:#fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
    background-color: transparent!important;
    justify-content: space-around!important;
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url(./../../../assets/img/home/bg_header3.png);
  }
  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }
  .swiper-slide .subtitle {
    font-size: 21px;
  }
  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
</style>

<template>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
        <swiper-slide v-for="banner in bannerData" class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">{{ banner.title }}</div>
          <br>
          <div class="subtitle" data-swiper-parallax="-200">{{ banner.sub_title }}</div>
          <div class="text" data-swiper-parallax="-300">
            <p>
              {{ banner.desc }}
            </p>
          </div>
        </swiper-slide>

        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
</template>

<script>

  import { swiper, swiperSlide, mdCard, mdCardMedia } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')

  export default {
    data() {
      return {
        swiperOption: {
          speed: 600,
          parallax: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        bannerData: []
      }
    },
    components: {
      'swiper':swiper,
      'swiper-slide':swiperSlide,
      'md-card':mdCard,
      'md-card-media':mdCardMedia
    },
    methods: {
      // 重建banner数据

      init_data(){
        this.$http.get(this.$Urls.website.banner.list()).then(response => {
          this.bannerData = response.data
        }).catch(response => {
          this.$Message.error(this.$Utils.convert_error_data_to_str(response.statusText, response.data))
        })
      },

    },
    // 生命周期方法
    created(){
      this.init_data()
    },
  }
</script>


