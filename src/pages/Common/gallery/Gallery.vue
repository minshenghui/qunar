<template>
  <div class="gallery" @click="closeGallery">
    <div class="gallery-wrapper">
      <swiper class="gallery-swiper" :options="swiperOption">
        <swiper-slide>
          <img
            class="gallery-img"
            src="http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="gallery-img"
            src="http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="gallery-img"
            src="http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallery",
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observe: true,
        observeParents: true
      }
    };
  },
  methods: {
    closeGallery() {
      this.$emit("closeGallery");
    }
  }
};
</script>
<style lang="stylus" scoped>
.gallery
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 99
  background: #000
  color: #ffffff
  .gallery-wrapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallery-swiper
      overflow: inherit
      .gallery-img
        width: 100%
        height: 100%
    .swiper-pagination
      position: relative
      top: 1rem
</style>