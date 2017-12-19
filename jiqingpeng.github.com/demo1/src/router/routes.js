import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/index'
import three from '../page/thireePage'
import a from '../page/A'
import b from '../page/B'
import c from '../page/C'
import my from '../page/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/home',
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/home/',
          component: a
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/a',
          component: a
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: '/b',
          component: b
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: '/c',
          component: c
        }
      ],
      name: 'home',
      component: home
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
