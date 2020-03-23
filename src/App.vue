<template>
  <div id="app">
    <router-view></router-view>
    <!-- <home></home> -->
  </div>
</template>

<script>
import Home from './pages/home/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
</style>
