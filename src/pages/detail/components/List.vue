<template>
  <div>
    <div v-for="(item, index) of list" :key="index">
      <div class="list-title border-bottom">
        <span class="list-title-icon"></span>
        <p>{{ item.title }}</p>
      </div>
      <div class="list-children-title" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailList",
  props: ["list"]
};
</script>
<style lang="stylus" scoped>
.list-title
  padding: 0.2rem
  font-size: 0.32rem
  .list-title-icon
    display: inline-block
    width: 0.36rem
    height: 0.36rem
    background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
    margin-right: 0.1rem
    float: left
    background-size: 0.4rem 3rem
.list-children-title
  margin-left: .28rem
</style>