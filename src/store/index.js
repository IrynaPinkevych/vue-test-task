import Vue from 'vue'
import Vuex from 'vuex'

import configData from './modules/configData'
import cards from './modules/cards'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    configData,
    cards,
    auth
  }
})
