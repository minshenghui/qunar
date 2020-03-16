<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon" v-for="item in iconsList" :key="item.id">
          <div class="icon-content">
            <img class="icon-img" :src="item.iconImg" />
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconsList: [
        {
          id: 1,
          iconImg:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: 2,
          iconImg:
            "https://imgs.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png",
          desc: "天门山公园"
        },
        {
          id: 3,
          iconImg:
            "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "长沙必游"
        },
        {
          id: 4,
          iconImg:
            "https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "张家界公园"
        },
        {
          id: 5,
          iconImg:
            "https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
          desc: "演出"
        },
        {
          id: 6,
          iconImg:
            "https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
          desc: "动植物园"
        },
        {
          id: 7,
          iconImg:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/91a810441506568937171df66f754375.png",
          desc: "红石林"
        },
        {
          id: 8,
          iconImg:
            "https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
          desc: "凤凰古城"
        },
        {
          id: 9,
          iconImg:
            "https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
          desc: "凤凰古城334"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons >>> .swiper-container
  margin-top: 0.1rem
  height: 0
  padding-bottom: 50%
  .icon
    position: relative
    float: left
    width: 25%
    padding-bottom: 25%
    overflow: hidden
    .icon-content
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      padding: 0.1rem
      .icon-img
        display: block
        height: 100%
        margin: 0 auto
      .icon-desc
        position: relative
        left: 0
        right: 0
        bottom: 0
        height: 0.44rem
        line-height: 0.44rem
        text-align: center
</style>