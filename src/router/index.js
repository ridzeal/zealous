import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Login from '@/pages/Login'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
