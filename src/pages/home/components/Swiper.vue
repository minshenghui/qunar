<template>
  <div class="swiper-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          'id': 1,
          'imgUrl': 'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
        },
        {
          'id': 2,
          'imgUrl': 'https://imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg'
        },
        {
          'id': 3,
          'imgUrl': 'https://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
        }
      ]
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