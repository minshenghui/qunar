<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="list-area">
        <div class="list-title border-topbottom">
          您的位置
        </div>
        <div class="now-city">
          <span class="city-item">长沙</span>
        </div>
      </div>
      <div class="list-area">
        <div class="list-title border-topbottom">
          热门城市
        </div>
        <div class="hot-citys">
          <span class="city-item">长沙</span>
          <span class="city-item">长沙</span>
          <span class="city-item">西双版纳</span>
          <span class="city-item">长沙</span>
        </div>
      </div>
      <div class="list-area">
        <div class="list-title border-topbottom">
          A
        </div>
        <ul
          class="list-item"
          v-for="item in list"
          :key="item.id"
        >
          <li class="border-bottom">巴基斯坦</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 123, 12, 312, 312, 312, 3, 123, 123, 12, 312]
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.city-list
  position: absolute
  overflow: hidden
  right: 0
  left: 0
  bottom: 0
  top: 1.78rem
.list-title
  background: #eee
  padding: 0 0.2rem
  font-size: 0.28rem
  line-height: 0.46rem
.list-item li
  padding: 0.1rem
  font-size: 0.28rem
  line-height: 0.46rem
.hot-citys, .now-city
  display: flex
  flex-wrap: wrap
  padding: 0.1rem
  margin-right: 0.5rem
  .city-item
    width: 26%
    display: block
    margin: 0.1rem 0.1rem 0 0.1rem
    padding: 0.1rem
    text-align: center
    border-radius: 0.1rem
    border: .02rem solid #eee
</style>