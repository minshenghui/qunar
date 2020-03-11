<template>
  <div class="header">
    <div class="header-back">
      <span class="iconfont back-icon">&#xe601;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe600;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-select">
      长沙<span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>
<style lang="stylus" scoped>
.header
  display: flex
  line-height: .86rem
  background: #00bcd4

  .header-back 
    width: .64rem
    float: left
    color: #fff
    text-align: center
    .back-icon
      font-size: .4rem

  .header-search
    flex: 1
    height: .64rem
    line-height: .64rem
    border-radius: .1rem
    background: #fff
    margin: .12rem 0 0 .2rem
    padding-left: .2rem
    color: #ccc

  .header-select
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    color: #fff
    text-align: center
    .arrow-icon
      font-size: .24rem
      margin-left: .05rem
</style>