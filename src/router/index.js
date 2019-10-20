import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'
import { handleLogin } from '@/router/beforeEachHooks'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes,
})

router.beforeEach(handleLogin)

export default router
