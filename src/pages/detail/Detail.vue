<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :galleryImg="galleryImg" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <div class="detail-list">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner"
import DetailHeader from "./components/Header"
import DetailList from "./components/List"
import axios from "axios"
export default {
  name: "Detail",
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  data() {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      galleryImg: []
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      axios.get("/api/detail.json").then(
        this.succGetDetail
      )
    },
    succGetDetail(res) {
      let data = res.data;
      if(data.ret && data.data) {
        this.list = data.data.categoryList
        this.sightName = data.data.sightName
        this.bannerImg = data.data.bannerImg
        this.galleryImg = data.data.galleryImg
      }
      console.log(res)
    }
  }
};
</script>
<style lang="stylus" scoped></style>