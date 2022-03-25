import { createApp } from 'vue'
import App from './App.vue'

import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { setupPlugins } from './utils/index'

import '@/assets/style/index.scss'

// windicss setup
import 'virtual:windi.css'
// svg sprite setup
import 'virtual:svg-icons-register'

// 全局Element样式引入
import 'element-plus/dist/index.css'

import * as plugins from './plugins/index'

const app = createApp(App)

setupStore(app)
setupRouter(app)
setupPlugins(app, plugins)

app.mount('#app')
