<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        :src="bannerImg"
        @click="handClickGallery"
      />
      <div class="banner-info">
        <p class="banner-number">
          <span class="iconfont icon-img">&#xe699;</span>{{ galleryImg.length }}
        </p>
        <p class="banner-title">{{ sightName }}</p>
      </div>
    </div>
    <common-gallery  v-show="showGallery" @closeGallery="handClickGallery" :galleryImg="galleryImg"></common-gallery>
  </div>
</template>
<script>
import CommonGallery from "Common/gallery/Gallery";
export default {
  name: "DetailBanner",
  props: ["bannerImg", "sightName", "galleryImg"],
  components: {
    CommonGallery
  },
  data() {
    return {
      showGallery: false
    }
  },
  methods: {
    handClickGallery() {
      this.showGallery = !this.showGallery
      console.log(this.galleryImg)
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner
  position: relative
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    width: 100%
    position: absolute
    color: #fff
    bottom: 0
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      font-size: 0.36rem
      padding: 0.2rem
    .banner-number
      width: 1.2rem
      padding: 0.06rem
      position: absolute
      top: -0.46rem
      left: 0.28rem
      font-size: 0.24rem
      line-height: 0.28rem
      border-radius: 0.66rem
      background: linear-gradient(rgba(0, 0, 0, 0.46))
      text-align: center
      .icon-img
        font-size: 0.24rem
        margin-right: 0.1rem
</style>