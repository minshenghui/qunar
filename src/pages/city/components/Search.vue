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
  margin-top: -1px
  padding: 0.1rem
  height: 0.72rem
  background: $bgColor
  .search-input
    margin: 0 auto
    width: 95%
    display: block
    color: #666
    height: 0.44rem
    padding: 0.1rem
    text-align: center
    line-height: 0.64rem
    box-sizing: broder-box
    border-radius: 0.05rem
</style>