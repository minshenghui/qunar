<template>
  <div
    class="city-list"
    ref="wrapper"
  >
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
          <span
            class="city-item"
            v-for="item in hotCities"
            :key="item.id"
          >{{ item.name }}</span>
        </div>
      </div>
      <div
        class="list-area"
        v-for="(item, key) in cities"
        :key="key"
      >
        <div class="list-title border-topbottom">{{ key }}</div>
        <ul
          class="list-item"
          v-for="cityItem in item"
          :key="cityItem.id"
        >
          <li class="border-bottom">{{ cityItem.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  props: ['hotCities', 'cities'],
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i)
      }
      for(let i = 0;i < this.cities.length;i++) {
          console.log(this.cities)
        // this.cities[i].forEach((item) => {
        //   console.log(item)
        //   console.log(item)
        //   cityList.push(item)
        // })
      }
      return letters
    },
  },
  methods: {
    cityList() {
      const cityList = [];
      for(let i = 0;i < this.cities.length;i++) {
          console.log(this.cities)
        // this.cities[i].forEach((item) => {
        //   console.log(item)
        //   console.log(item)
        //   cityList.push(item)
        // })
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
    this.cityList()
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
    border: 0.02rem solid #eee
</style>