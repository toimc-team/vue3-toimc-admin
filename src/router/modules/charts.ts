import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const chartsRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'Charts',
    meta: {
      title: '图表',
      order: 50,
      icon: 'Histogram'
    },
    path: '/charts',
    component: LayoutsDefault,
    redirect: '/charts/user',
    children: [
      {
        name: 'BaiduCharts',
        path: 'baidu',
        meta: {
          title: '百度地图'
        },
        component: () => import('@/views/charts/baidu.vue')
      },
      {
        name: 'AmapCharts',
        path: 'amap',
        meta: {
          title: '高德地图'
        },
        component: () => import('@/views/charts/amap.vue')
      },
      {
        name: '腾讯地图',
        path: 'tencent',
        meta: {
          title: '腾讯地图'
        },
        component: () => import('@/views/charts/tencent.vue')
      },
      {
        name: '谷歌地图',
        path: 'google',
        meta: {
          title: '谷歌地图'
        },
        component: () => import('@/views/charts/google.vue')
      },
      {
        name: 'Echarts',
        path: 'echarts',
        meta: {
          title: 'Echarts'
        },
        component: () => import('@/views/charts/echarts.vue')
      }
    ]
  }
]

export default chartsRoutes
