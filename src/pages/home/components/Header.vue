<template>
  <div class="header">
    <div class="header-back">
      <span class="iconfont back-icon">&#xe601;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe600;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-select">
        {{ this.city }}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from "vuex"
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city'])
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  .header-back
    width: 0.64rem
    float: left
    color: #fff
    text-align: center
    .back-icon
      font-size: 0.4rem
  .header-search
    flex: 1
    height: 0.64rem
    line-height: 0.64rem
    border-radius: 0.1rem
    background: #fff
    margin: 0.12rem 0 0 0.2rem
    padding-left: 0.2rem
    color: #ccc
  .header-select
    min-width: 1.04rem
    padding: 0 0.1rem
    float: right
    color: #fff
    text-align: center
    .arrow-icon
      font-size: 0.24rem
      margin-left: 0.05rem
</style>