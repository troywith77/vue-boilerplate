import Vue from 'vue'
import Vuex from 'vuex'

const modules = {}
const MODULES_PATH = './modules/'

require.context('.', true, /\.js$/)
  .keys()
  .filter((filepath) => {
    return filepath.startsWith(MODULES_PATH)
  })
  .forEach((filepath) => {
    const name = filepath.match(/\/modules\/(\S+)\.js/)[1]
    modules[name] = require(`${filepath}`).default
  })

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
})

export default store
