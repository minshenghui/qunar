<template>
  <div class="alphabet">
    <ul class="list-item">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet"
};
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list-item
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    bottom: 0
    top: 1.76rem
    .item
      display: block
      font-size: .28rem
      line-height: .36rem
      text-align: center
      color: $bgColor
</style>