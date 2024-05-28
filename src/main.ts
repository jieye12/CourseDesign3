import { createApp } from 'vue'
import App from './App.vue'
// 样式
import "@/style/common.scss"
// 路由
import "@/router/index"
import router from '@/router/index'
// 仓库
import { createPinia } from 'pinia'
const pinia = createPinia()
// 请求
// 
import gloalComponent from '@/components'
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(gloalComponent)
app.mount('#app')
