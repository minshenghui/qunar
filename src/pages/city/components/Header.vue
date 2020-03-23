<template>
  <div class="city-header">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe601;</span>
    </router-link>
    <span class="city-title">选择城市</span>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.city-header
  color: #fff
  text-align: center
  background: $bgColor
  height: $headerHeight
  line-height: $headerHeight
  .back-icon
    color: #fff
    float: left
    font-size: 0.4rem
    margin-left: .1rem
  .city-title
    color: #fff
    font-size: .36rem
</style>