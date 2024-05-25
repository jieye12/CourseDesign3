import { createApp } from 'vue'
import App from './App.vue'
// 样式
import "@/style/common.scss"
// 路由
import "@/router/index"
import router from '@/router/index'
// 仓库
// 请求
// 
const app = createApp(App)
app.use(router)
app.mount('#app')
