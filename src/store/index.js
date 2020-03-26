import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: localStorage.city || '长沙',
    clearKeyword: false
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      localStorage.city = city
    }
  }
})