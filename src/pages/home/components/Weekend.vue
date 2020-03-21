<template>
  <div class="recommend-content">
    <div class="recommend-title">周末去哪儿</div>
    <div class="recommend-row border-bottom" v-for="item in list" :key="item.id">
      <img class="recommend-row-img" :src="item.imgUrl" />
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
  data() {
    return {
      list: [
        {
          id: 1,
          title: '亚特兰斯蒂斯',
          imgUrl: 'http://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg',
          desc: '阿六点十分阿斯蒂芬阿斯蒂芬手打发大水范德萨发大发大水'
        },
        {
          id: 2,
          title: "亚特兰斯蒂斯",
          imgUrl:
            "http://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg",
          desc: "阿六点十分阿斯蒂芬阿斯蒂芬手打发大水范德萨发大发大水"
        },
        {
          id: 3,
          title: "亚特兰斯蒂斯",
          imgUrl:
            "http://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg",
          desc: "阿六点十分阿斯蒂芬阿斯蒂芬手打发大水范德萨发大发大水"
        }
      ]
    };
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