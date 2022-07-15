import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/HomeView.vue'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, scrollPosition) => {
    if(scrollPosition) return scrollPosition
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if(store.state.isLoading) {
    next(false)
  } else {
    next()
  }
})

export default router
