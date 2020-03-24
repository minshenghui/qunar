<template>
  <div class="city-search">
    <input class="search-input" placeholder="输入城市名或者拼音" type="text" />
  </div>
</template>
<script>
export default {
  name: "CitySearch"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.city-search
  margin-top: -0.02rem
  padding: 0.05rem 1%
  height: 0.62rem
  background: $bgColor
  .search-input
    width: 98%
    color: #666
    font-size: 0.26rem
    height: 0.44rem
    padding: 0.05rem
    text-align: center
    line-height: 0.44rem
    box-sizing: broder-box
    border-radius: 0.05rem
</style>