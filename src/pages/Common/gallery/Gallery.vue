<template>
  <div class="gallery" @click="closeGallery">
    <div class="gallery-wrapper">
      <swiper class="gallery-swiper" :options="swiperOption">
        <swiper-slide v-for="item of galleryImg">
          <img
            class="gallery-img"
            :src="item"
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
  props: ["galleryImg"],
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
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