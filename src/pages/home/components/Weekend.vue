<template>
  <div class="recommend-content">
    <div class="recommend-title">周末去哪儿</div>
    <div
      class="recommend-row border-bottom"
      v-for="item in list"
      :key="item.id"
    >
      <img
        class="recommend-row-img"
        :src="item.imgUrl"
      />
      <div class="recommend-row-info">
        <p class="recommend-row-title">{{ item.title }}</p>
        <p class="recommend-row-desc">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mintext.styl'
.recommend-title
  background: #eee
  font-size: 0.28rem
  padding: 0.3rem
.recommend-row
  padding: 0.2rem
  .recommend-row-img
    width: 100%
  .recommend-row-info
    min-width: 0
    padding: 0.1rem
  .recommend-row-title
    font-weight: bold
    font-size: 0.32rem
    line-height: 0.46rem
    ellipsis()
  .recommend-row-desc
    color: #ccc
    line-height: 0.36rem
    ellipsis()
  .recommend-row-more
    font-size: 0.28rem
    background: #ff7f00
    color: #fff
    padding: 0.05rem
    margin-top: 0.1rem
    border-radius: 0.05rem
</style>