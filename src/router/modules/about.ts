import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const aboutRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'About',
    meta: {
      title: '关于',
      order: 100000,
      icon: 'InfoFilled',
      hideChildrenInMenu: true
    },
    path: '/about',
    component: LayoutsDefault,
    redirect: '/about/index',
    children: [
      {
        name: 'AboutPage',
        path: 'index',
        meta: {
          title: '关于我们'
        },
        component: () => import('@/views/about/index.vue')
      }
    ]
  }
]

export default aboutRoutes
