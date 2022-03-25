import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const pagesRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'Pages',
    meta: {
      title: '页面',
      order: 40,
      icon: 'CopyDocument'
    },
    path: '/page',
    component: LayoutsDefault,
    redirect: '/pages/form',
    children: [
      {
        name: 'FormPages',
        path: 'form',
        component: () => import('@/views/pages/form/index.vue'),
        meta: {
          title: '表单页'
        },
        children: [
          {
            name: 'DefaultFormPages',
            path: 'default',
            component: () => import('@/views/pages/form/default.vue'),
            meta: {
              title: '默认表单页'
            }
          }
        ]
      },
      {
        name: 'DetailPages',
        path: 'detail',
        component: () => import('@/views/pages/form/index.vue'),
        meta: {
          title: '详情页'
        }
      },
      {
        name: 'ResultPages',
        path: 'result',
        component: () => import('@/views/pages/form/index.vue'),
        meta: {
          title: '结果页'
        }
      },
      {
        name: 'UsersPages',
        path: 'users',
        component: () => import('@/views/pages/form/index.vue'),
        meta: {
          title: '个人页'
        }
      },
      {
        name: 'SettingsPages',
        path: 'settings',
        component: () => import('@/views/pages/form/index.vue'),
        meta: {
          title: '设置页'
        }
      },
      {
        name: 'ErrorsPages',
        path: 'errors',
        component: () => import('@/views/pages/errors/index.vue'),
        meta: {
          title: '异常页'
        },
        children: [
          {
            name: 'Default404',
            path: 'default',
            component: () => import('@/views/pages/errors/default.vue'),
            meta: {
              title: '默认异常页'
            }
          }
        ]
      },
      {
        name: 'ListsPages',
        path: 'lists',
        component: () => import('@/views/pages/form/index.vue'),
        meta: {
          title: '列表页'
        }
      }
    ]
  }
]

export default pagesRoutes
