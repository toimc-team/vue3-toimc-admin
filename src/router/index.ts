import type { App } from 'vue'
import type { AppRouteRecordRaw } from './types'

import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import { sortMenu } from '@/utils'

const modules = import.meta.globEager('./modules/**/*.ts')

const routeModuleList: AppRouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

// 公共路由
const publicRoutes = [
  {
    name: 'RegisterLoginsPages',
    path: '/login',
    redirect: '/login/pwd',
    component: () => import('@/views/pages/login/index.vue'),
    meta: {
      hideMenu: true,
      title: '注册登录'
    },
    children: [
      {
        name: 'LoginPages',
        path: 'pwd',
        component: () => import('@/views/pages/login/login.vue'),
        meta: {
          title: '密码登录'
        }
      },
      {
        name: 'ScanPages',
        path: 'scan',
        component: () => import('@/views/pages/login/scan.vue'),
        meta: {
          title: '扫码登录'
        }
      },
      {
        name: 'RegPages',
        path: 'reg',
        component: () => import('@/views/pages/login/reg.vue'),
        meta: {
          title: '注册'
        }
      },
      {
        name: 'ForgetPages',
        path: 'forget',
        component: () => import('@/views/pages/login/forget.vue'),
        meta: {
          title: '忘记密码'
        }
      }
    ]
  }
]

export const asyncRoutes = sortMenu([...publicRoutes, ...routeModuleList])

const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
