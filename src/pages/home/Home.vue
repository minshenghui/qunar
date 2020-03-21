<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: ''
    }
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json')
        .then(this.successGetHomeInfo)
    },
    successGetHomeInfo(res) {
      const data = res.data.data;
      if(res.data.ret && data) {
        this.city = data.city
      }
      
      console.log(data)
      console.log(this.city)
    }
  },
  mounted() {
    this.getHomeInfo()
  }
};
</script>