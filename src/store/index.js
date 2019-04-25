import Vue from 'vue'
import Vuex from 'vuex'
import Feed from './modules/Feed'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Feed
  }
})
