import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/HomeView.vue'
import { computed } from '@vue/reactivity'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:query?/:page?',
    name: 'SearchResult',
    component: () => import(/* webpackChunkName: "searchResult" */ '@/pages/SearchResultView.vue')
  },
  {
    path: '/video/:id?/:query?/:page?',
    name: 'VideoPlayerView',
    component: () => import(/* webpackChunkName: "VideoPlayer" */ '@/pages/VideoPlayerView.vue')
  }
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
  const isLoading = computed(() => store.state.isLoading)
  if(isLoading.value) {
    next(false)
  } else {
    next()
  }
})

export default router
