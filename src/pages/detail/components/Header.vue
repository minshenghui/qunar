<template>
  <div>
    <span class="iconfont back-icon" @click="backHome">&#xe601;</span>
    <div class="detail-header" :style="opacityStyle" v-show="showHeader">
      <span class="iconfont detail-back-icon" @click="backHome">&#xe601;</span>
      <span class="header-title">景点详情</span>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
    handleScroll() {
      let top = document.documentElement.scrollTop;
      if(top > 60) {
        let opacity = top / 140;
        this.opacityStyle = {
          opacity: opacity > 1 ? 1 : opacity
        }
        this.showHeader = true
      } else {
        this.showHeader = false
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.back-icon
  position: absolute
  top: 0.18rem
  left: 0.18rem
  display: block
  width: 0.68rem
  height: 0.68rem
  text-align: center
  line-height: 0.68rem
  border-radius: 50%
  color: #fff
  background: rgba(0, 0, 0, 0.46)
.detail-header
  position: fixed
  width: 100%;
  top: 0
  color: #fff
  text-align: center
  background: $bgColor
  height: $headerHeight
  line-height: $headerHeight
  .detail-back-icon
    color: #fff
    float: left
    font-size: 0.4rem
    margin-left: 0.1rem
  .header-title
    color: #fff
    font-size: 0.36rem
.content
  height: 15rem
</style>