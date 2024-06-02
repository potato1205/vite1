import { createRouter,createWebHashHistory } from 'vue-router'
import ListDemo from '../page/list-page.vue'
const routes = [
    { path: '/', redirect: '/list' },
    { path: '/list', component: ListDemo },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

export default router