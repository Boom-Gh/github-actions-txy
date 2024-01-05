import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// tailwindcss 基础类样式
import '@/styles/tailwind.css'
// 自定义tailwind-base.css 解决默认样式和ui框架冲突问题
import '@/styles/tailwind-base.css'
// 导入公共样式 scss 安装=> https://cn.vitejs.dev/guide/features.html#css-pre-processors 
import '@/styles/index.scss'
import '@/styles/theme.scss'

import '@/router/guards/index'

import App from './App.vue'
import router from '@/router/index'

import 'virtual:svg-icons-register'

import '@/api/request'

import dayjs from 'dayjs'
// import { theme } from 'ant-design-vue'

// import { theme } from 'ant-design-vue'
// const { token } = theme.useToken()

const app = createApp(App)
// app.config.globalProperties.$token = token
app.config.globalProperties.$dayjs = dayjs
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.mount('#app')

// app.mixin({
//   setup() {
//     const { useToken } = theme
//     const { token } = useToken()
//     return {
//       token
//     }
//   }
// })
// app.use(router).use(pinia).mount('#app')
