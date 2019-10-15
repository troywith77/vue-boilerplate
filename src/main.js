import VConsole from 'vconsole'
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/styles/global.scss'

Vue.config.productionTip = false

/* eslint-disable */
process.env.ENV === 'sit' && new VConsole()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
