import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const componentsRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'Components',
    meta: {
      title: '组件',
      order: 20,
      icon: 'ScaleToOriginal'
    },
    path: '/comp',
    component: LayoutsDefault,
    redirect: '/comp/icon',
    children: [
      {
        name: 'Icons',
        path: 'icon',
        meta: {
          title: '图标'
        },
        component: () => import('@/views/components/icon/index.vue'),
        redirect: '/comp/icon/element',
        children: [
          {
            name: 'ElementIcons',
            path: 'element',
            component: () => import('@/views/components/icon/element-icon.vue'),
            meta: {
              title: 'Element图标'
            }
          },
          {
            name: 'IconifyIcons',
            path: 'element',
            component: () => import('@/views/components/icon/iconify.vue'),
            meta: {
              title: 'Iconify图标集'
            }
          },
          {
            name: 'IconPicker',
            path: 'element',
            component: () => import('@/views/components/icon/picker.vue'),
            meta: {
              title: '图标选择器'
            }
          },
          {
            name: 'SvgIcons',
            path: 'svgs',
            component: () => import('@/views/components/icon/svg-icons.vue'),
            meta: {
              title: 'svg图标'
            }
          }
        ]
      },
      {
        name: 'Forms',
        path: 'form',
        meta: {
          title: '表单'
        },
        component: () => import('@/views/components/forms/index.vue'),
        redirect: '/comp/forms/basic',
        children: [
          {
            name: 'BasicForms',
            path: 'basic',
            component: () => import('@/views/components/forms/basic.vue'),
            meta: {
              title: '基础表单'
            }
          },
          {
            name: 'UseForms',
            path: 'use-form',
            component: () => import('@/views/components/forms/use-form.vue'),
            meta: {
              title: 'useForm'
            }
          },
          {
            name: 'ComprehensiveFormJson',
            path: 'comprehensive-json',
            component: () => import('@/views/components/forms/comprehensive-json.vue'),
            meta: {
              title: '表单Schema写法'
            }
          },
          {
            name: 'ComprehensiveFormDom',
            path: 'comprehensive-dom',
            component: () => import('@/views/components/forms/comprehensive-dom.vue'),
            meta: {
              title: '表单DOM写法'
            }
          }
        ]
      },
      {
        name: 'Tables',
        path: 'table',
        meta: {
          title: '表格'
        },
        component: () => import('@/views/components/table/index.vue'),
        redirect: '/comp/table/basic',
        children: [
          {
            name: 'BasicTable',
            path: 'basic',
            component: () => import('@/views/components/table/basic.vue'),
            meta: {
              title: '基础表格'
            }
          }
        ]
      },
      {
        name: 'Area',
        path: 'area',
        meta: {
          title: '省市区选择器'
        },
        component: () => import('@/views/components/area/index.vue')
      },
      {
        name: 'City',
        path: 'city',
        meta: {
          title: '城市选择器'
        },
        component: () => import('@/views/components/city/index.vue')
      },
      {
        name: 'Trends',
        path: 'trends',
        meta: {
          title: '趋势指示'
        },
        component: () => import('@/views/components/trends/index.vue')
      },
      {
        name: 'NoticeMessage',
        path: 'notice',
        meta: {
          title: '通知菜单'
        },
        component: () => import('@/views/components/notice-message/index.vue')
      },
      {
        name: 'Progress',
        path: 'progress',
        meta: {
          title: '动态进度条'
        },
        component: () => import('@/views/components/progress/index.vue')
      },
      {
        name: 'Descriptions',
        path: 'descriptions',
        meta: {
          title: '详情面板'
        },
        component: () => import('@/views/components/descriptions/index.vue')
      },
      {
        name: 'TransitionsDemo',
        path: 'transition',
        meta: {
          title: '过渡动画'
        },
        component: () => import('@/views/components/transitions/index.vue')
      }
    ]
  }
]

export default componentsRoutes
