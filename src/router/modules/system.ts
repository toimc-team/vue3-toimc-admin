import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const systemRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'System',
    meta: {
      title: '系统管理',
      order: 200,
      icon: 'Setting'
    },
    path: '/system',
    component: LayoutsDefault,
    redirect: '/system/user',
    children: [
      {
        name: 'UsersPage',
        path: 'user',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/system/user.vue')
      },
      {
        name: 'RolesPage',
        path: 'role',
        meta: {
          title: '角色管理'
        },
        component: () => import('@/views/system/role.vue')
      },
      {
        name: 'MenusPage',
        path: 'menu',
        meta: {
          title: '菜单管理'
        },
        component: () => import('@/views/system/menu.vue')
      },
      {
        name: 'DepartmentPage',
        path: 'department',
        meta: {
          title: '部门管理'
        },
        component: () => import('@/views/system/department.vue')
      },
      {
        name: 'LogsPage',
        path: 'logs',
        meta: {
          title: '系统日志'
        },
        component: () => import('@/views/system/logs.vue')
      }
    ]
  }
]

export default systemRoutes
