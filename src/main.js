import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick=attach(document.body)
Vue.user(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
}).$mount('#app')