import { createRouter,createWebHashHistory } from 'vue-router'
import ListDemo from '../page/list-page.vue'
import One from '../page/one.vue'
import VirtualScroll from '../page/virtual-scroll/virtual-scroll-page.vue'
import Layout from '../page/layout-page.vue'

const routes = [
    { path: '/', redirect: '/layout' },
    { path: '/list', component: ListDemo },
    { path: '/one', component: One },
    { path: '/virtual-scroll', component: VirtualScroll},
    { path: '/layout', component: Layout}
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

export default router