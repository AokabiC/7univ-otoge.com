import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import about from '@/pages/about'
import rule from '@/pages/rule'
import task from '@/pages/task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
    {
      path: '/task',
      name: 'task',
      component: task
    }
  ]
})
