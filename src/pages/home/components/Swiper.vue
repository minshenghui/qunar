<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  .swiper-container >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper-container
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 30%
    background: #eee
  .swiper-img
    width: 100%
</style>