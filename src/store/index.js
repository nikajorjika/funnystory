import Vue from 'vue'
import Vuex from 'vuex'
import Story from './modules/Story'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Story
  }
})
