import Vue from 'vue'
import Router from 'vue-router'
import a from '../page/firstPage'
import b from '../page/Hello'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'a',
      component: a
    },
    {
      path: '/list',
      name: 'b',
      component: b
    }
  ]
})
