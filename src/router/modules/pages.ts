import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const pagesRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'Pages',
    path: '/pages',
    component: LayoutsDefault,
    redirect: '/pages/exception',
    meta: {
      title: '页面',
      order: 50,
      icon: 'DocumentCopy'
    },
    children: [
      {
        name: 'ExceptionPages',
        path: 'exceptions',
        redirect: '/pages/exceptions/403',
        component: () => import('@/views/pages/exception/index.vue'),
        meta: {
          title: '异常页'
        },
        children: [
          {
            name: '403',
            path: '403',
            component: () => import('@/views/pages/exception/403.vue'),
            meta: {
              title: '403'
            }
          },
          {
            name: '404',
            path: '404',
            component: () => import('@/views/pages/exception/404.vue'),
            meta: {
              title: '404'
            }
          },
          {
            name: '500',
            path: '500',
            component: () => import('@/views/pages/exception/500.vue'),
            meta: {
              title: '500'
            }
          }
        ]
      },
      {
        name: 'ResultPages',
        path: 'result',
        redirect: '/pages/result/success',
        component: () => import('@/views/pages/result/index.vue'),
        meta: {
          title: '结果页'
        },
        children: [
          {
            name: 'success',
            path: 'success',
            component: () => import('@/views/pages/result/success.vue'),
            meta: {
              title: '成功页'
            }
          },
          {
            name: 'fail',
            path: 'fail',
            component: () => import('@/views/pages/result/fail.vue'),
            meta: {
              title: '失败页'
            }
          }
        ]
      }
    ]
  }
]

export default pagesRoutes
