<template>
  <div class="recommend-content">
    <div class="recommend-title">热销推荐</div>
    <router-link tag="li" :to="'/detail/' + item.id" class="recommend-row border-bottom" v-for="item in list" :key="item.id">
      <img class="recommend-row-img" :src="item.imgUrl" />
      <div class="recommend-row-info">
        <p class="recommend-row-title">{{ item.title }}</p>
        <p class="recommend-row-desc">{{ item.desc }}</p>
        <button class="recommend-row-more">查看详细</button>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mintext.styl'
.recommend-content
  margin-top: 0.2rem
  .recommend-title
    background: #eee
    font-size: 0.28rem
    padding: 0.3rem
  .recommend-row
    padding: 0.2rem
    display: flex
    .recommend-row-img
      width: 1.7rem
      height: 1.7rem
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
      font-size: 0.24rem
      background: #ff7f00
      color: #fff
      padding: 0.05rem
      margin: 0.1rem
      border-radius: 0.05rem
</style>