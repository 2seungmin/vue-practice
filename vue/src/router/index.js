import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Join from '@/components/member/join'
import Login from '@/components/member/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/member/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/member/login',
      name: 'Login',
      component: Login
    }
  ]
})
