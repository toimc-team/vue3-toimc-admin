import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const componentsRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'MenusDemo',
    meta: {
      title: '多级菜单',
      order: 40,
      icon: 'Guide'
    },
    path: '/menus',
    component: LayoutsDefault,
    redirect: '/menus/menu',
    children: [
      {
        name: 'Menus1',
        path: 'menu',
        meta: {
          title: 'Menu1'
        },
        component: () => import('@/views/menus/menu1.vue'),
        redirect: '/comp/icon/element',
        children: [
          {
            name: 'Menus1-1',
            path: 'menu1-1',
            component: () => import('@/views/menus/menu1-1.vue'),
            meta: {
              title: 'Menu1-1'
            },
            children: [
              {
                name: 'Menus1-1-1',
                path: 'menu1-1-1',
                component: () => import('@/views/menus/menu1-1-1.vue'),
                meta: {
                  title: 'Menu111'
                }
              }
            ]
          },
          {
            name: 'Menus1-2',
            path: 'menu1-2',
            component: () => import('@/views/menus/menu1-2.vue'),
            meta: {
              title: 'Menu1-2'
            }
          }
        ]
      },
      {
        name: 'Menus2',
        path: 'menu',
        meta: {
          title: 'Menu2'
        },
        component: () => import('@/views/menus/menu2.vue')
      }
    ]
  }
]

export default componentsRoutes
