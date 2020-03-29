<template>
  <div class="banner">
    <img
      class="banner-img"
      src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
    >
    <div class="banner-info">
      <p class="banner-number">
        <span class="iconfont icon-img">&#xe699;</span>13</p>
      <p class="banner-title">故宫(AAAAA景区)</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBanner'
}
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
        font-size: .24rem
        margin-right: .1rem
</style>