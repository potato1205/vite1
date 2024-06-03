import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// vue-router@4
import router from './router/index.ts'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
.use(router)
.use(ElementPlus)
.mount('#app')
