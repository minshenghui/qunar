<template>
  <div>
    <div class="city-search">
      <input v-model="keyword" class="search-input" placeholder="输入城市名或者拼音" type="text" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="border-bottom"
          v-for="item in searchList"
          :key="item.id"
          @click="handClickCity(item.name)"
        >{{ item.name }}</li>
        <li v-show="noDataList" class="border-bottom">暂无匹配的数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: ["cities"],
  data() {
    return {
      keyword: "",
      searchList: [],
      timer: null,
      clearKeyword: this.$store.state.clearKeyword
    };
  },
  computed: {
    noDataList() {
      return !this.searchList.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const list = [];
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (
              item.spell.indexOf(this.keyword) > -1 ||
              item.name.indexOf(this.keyword) > -1
            ) {
              list.push(item);
            }
          });
          this.searchList = list;
        }
      }, 200);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    });
  },
  methods: {
    handClickCity(city) {
      this.$store.state.city = city;
      this.$router.push("/");
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.city-search
  margin-top: -0.02rem
  padding: 0.05rem 1%
  height: 0.62rem
  background: $bgColor
  .search-input
    width: 98%
    color: #666
    font-size: 0.26rem
    height: 0.44rem
    padding: 0.05rem
    text-align: center
    line-height: 0.44rem
    box-sizing: broder-box
    border-radius: 0.05rem
.search-content
  overflow: hidden
  background: #eee
  position: absolute
  top: 1.58rem
  bottom: 0
  left: 0
  right: 0
  z-index: 1
.search-content li
  padding: 0.1rem
  background: #fff
  font-size: 0.28rem
  line-height: 0.4rem
</style>