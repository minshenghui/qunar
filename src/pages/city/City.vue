<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :hotCities="hotCities"
      :cities="citys"
    ></city-list>
    <city-alphabet :cities="citys"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
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
      citys: []
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(this.successGetCity)
    },
    successGetCity(res) {
      const data = res.data.data;
      if (res.data.ret && data) {
        this.hotCities = data.hotCities
        this.citys = data.cities
      }
      // console.log(this.citys)
      // console.log(res.data.data.hotCities)
    }
  }
}
</script>