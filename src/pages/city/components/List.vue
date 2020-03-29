<template>
  <div
    class="city-list"
    ref="wrapper"
  >
    <div>
      <div class="list-area">
        <div class="list-title border-topbottom">您的位置</div>
        <div class="now-city">
          <span class="city-item">{{ this.city }}</span>
        </div>
      </div>
      <div class="list-area">
        <div class="list-title border-topbottom">热门城市</div>
        <div class="hot-citys">
          <span
            class="city-item"
            v-for="item in hotCities"
            :key="item.id"
            @click="handClickCity(item.name)"
          >{{ item.name }}</span>
        </div>
      </div>
      <div
        class="list-area"
        v-for="(item, key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="list-title border-topbottom">{{ key }}</div>
        <ul
          class="list-item"
          v-for="cityItem in item"
          :key="cityItem.id"
        >
          <li
            class="border-bottom"
            @click="handClickCity(cityItem.name)"
          >{{ cityItem.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll"
import { mapState, mapMutations } from "vuex"
export default {
  name: "CityList",
  props: ["hotCities", "cities", 'letter'],
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
    ...mapState(['city'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      mouseWheel: true, click: true, tap: true
    });
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  methods: {
    handClickCity(city) {
      this.changeCity(city)
      // this.$store.commit('changeCity', city)
      // this.$store.state.city= city;
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
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
  top: 1.58rem
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