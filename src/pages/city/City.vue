<template>
  <div>
    <city-header :keyword="keyword" @clearKeyword="clearKeyword"></city-header>
    <city-search :cities="citys" @clearKeyword="clearKeyword" :clearKeyword="keyword"></city-search>
    <city-list :hotCities="hotCities" :cities="citys" :letter="letter"></city-list>
    <city-alphabet :cities="citys" @change="handleLetter"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCities: [],
      alphabet: [],
      citys: [],
      letter: "",
      keyword: ''
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.successGetCity);
    },
    successGetCity(res) {
      const data = res.data.data;
      if (res.data.ret && data) {
        this.hotCities = data.hotCities;
        this.citys = data.cities;
      }
    },
    handleLetter(letter) {
      this.letter = letter;
    },
    clearKeyword(keyword) {
      this.keyword = keyword
    }
  }
};
</script>