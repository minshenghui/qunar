<template>
  <div class="city-header">
    <span class="iconfont back-icon" @click="backPage">&#xe601;</span>
    <span class="city-title">选择城市</span>
  </div>
</template>
<script>
export default {
  name: "CityHeader",
  props: ["keyword"],
  methods: {
    backPage() {
      this.keyword ? this.$emit("clearKeyword", '') : this.$router.push("/")
    }
  }
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
    margin-left: 0.1rem
  .city-title
    color: #fff
    font-size: 0.36rem
</style>