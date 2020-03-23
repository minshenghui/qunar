<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(page, index) in pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item in page"
          :key="item.id"
        >
          <div class="icon-content">
            <img
              class="icon-img"
              :src="item.imgUrl"
            />
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: ["list"],
  porps: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        !pages[page] ? pages[page] = [] : ''
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '~styles/mintext.styl'
@import '~styles/varibles.styl'
.icons >>> .swiper-container
  margin-top: 0.1rem
  height: 0
  padding-bottom: 50%
  .icon
    position: relative
    float: left
    width: 25%
    padding-bottom: 25%
    overflow: hidden
    .icon-content
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      padding: 0.1rem
      .icon-img
        display: block
        height: 100%
        margin: 0 auto
      .icon-desc
        position: relative
        left: 0
        right: 0
        bottom: 0
        height: 0.44rem
        line-height: 0.44rem
        text-align: center
        ellipsis()
</style>