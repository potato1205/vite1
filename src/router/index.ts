import { createRouter,createWebHashHistory } from 'vue-router'
import ListDemo from '../page/list-page.vue'
import One from '../page/one.vue'

const routes = [
    { path: '/', redirect: '/list' },
    { path: '/list', component: ListDemo },
    { path: '/one', component: One },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

export default router