import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
