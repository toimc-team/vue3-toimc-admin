import { t } from '@/hooks/useI18n'
import LayoutsDefault from '@/layouts/default.vue'
import type { AppRouteRecordRaw } from '../types'

const componentsRoutes: Array<AppRouteRecordRaw> = [
  {
    name: 'Components',
    meta: {
      title: t('menu.component.title'),
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
          title: t('menu.component.icons.icon')
        },
        component: () => import('@/views/components/icon/index.vue'),
        redirect: '/comp/icon/element',
        children: [
          {
            name: 'ElementIcons',
            path: 'element',
            component: () => import('@/views/components/icon/element-icon.vue'),
            meta: {
              title: t('menu.component.icons.element')
            }
          },
          {
            name: 'IconifyIcons',
            path: 'iconify',
            component: () => import('@/views/components/icon/iconify.vue'),
            meta: {
              title: t('menu.component.icons.iconify')
            }
          },
          {
            name: 'IconPicker',
            path: 'picker',
            component: () => import('@/views/components/icon/picker.vue'),
            meta: {
              title: t('menu.component.icons.icon-picker')
            }
          },
          {
            name: 'SvgIcons',
            path: 'svgs',
            component: () => import('@/views/components/icon/svg-icons.vue'),
            meta: {
              title: t('menu.component.icons.svg')
            }
          }
        ]
      },
      {
        name: 'Forms',
        path: 'form',
        meta: {
          title: t('menu.component.form.title')
        },
        component: () => import('@/views/components/forms/index.vue'),
        redirect: '/comp/forms/basic',
        children: [
          {
            name: 'BasicForms',
            path: 'basic',
            component: () => import('@/views/components/forms/basic.vue'),
            meta: {
              title: t('menu.component.form.basic')
            }
          },
          {
            name: 'ComprehensiveFormJson',
            path: 'comprehensive-json',
            component: () => import('@/views/components/forms/comprehensive-json.vue'),
            meta: {
              title: t('menu.component.form.schema')
            }
          },
          {
            name: 'ComprehensiveFormDom',
            path: 'comprehensive-dom',
            component: () => import('@/views/components/forms/comprehensive-dom.vue'),
            meta: {
              title: t('menu.component.form.dom')
            }
          },
          {
            name: 'StepForm',
            path: 'step-form',
            component: () => import('@/views/components/forms/step-form.vue'),
            meta: {
              title: t('menu.component.dynamic.step-form')
            }
          }
        ]
      },
      {
        name: 'Tables',
        path: 'table',
        meta: {
          title: t('menu.component.table.title')
        },
        component: () => import('@/views/components/table/index.vue'),
        redirect: '/comp/table/basic',
        children: [
          {
            name: 'BasicTable',
            path: 'basic',
            component: () => import('@/views/components/table/basic.vue'),
            meta: {
              title: t('menu.component.table.basic')
            }
          }
        ]
      },
      {
        name: 'Selectors',
        path: 'select',
        meta: {
          title: t('menu.component.select.title')
        },
        component: () => import('@/layouts/blank.vue'),
        children: [
          {
            name: 'Area',
            path: 'area',
            meta: {
              title: t('menu.component.select.area')
            },
            component: () => import('@/views/components/area/index.vue')
          },
          {
            name: 'City',
            path: 'city',
            meta: {
              title: t('menu.component.select.city')
            },
            component: () => import('@/views/components/city/index.vue')
          }
        ]
      },
      {
        name: 'Menus',
        path: 'menu',
        meta: {
          title: t('menu.component.menu.title')
        },
        component: () => import('@/layouts/blank.vue'),
        children: [
          {
            name: 'DropDown',
            path: 'dropdown',
            meta: {
              title: t('menu.component.menu.dropdown')
            },
            component: () => import('@/views/components/menu/dropdown.vue')
          }
        ]
      },
      {
        name: 'DynamicShows',
        path: 'dynamic',
        meta: {
          title: t('menu.component.dynamic.title')
        },
        component: () => import('@/layouts/blank.vue'),
        children: [
          {
            name: 'Trends',
            path: 'trends',
            meta: {
              title: t('menu.component.dynamic.trends')
            },
            component: () => import('@/views/components/trends/index.vue')
          },
          {
            name: 'Progress',
            path: 'progress',
            meta: {
              title: t('menu.component.dynamic.progress')
            },
            component: () => import('@/views/components/progress/index.vue')
          },
          {
            name: 'DynamicNumbers',
            path: 'numbers',
            meta: {
              title: t('menu.component.dynamic.numbers')
            },
            component: () => import('@/views/components/numbers/index.vue')
          },
          {
            name: 'Slider',
            path: 'slider',
            meta: {
              title: t('menu.component.dynamic.slider')
            },
            component: () => import('@/views/components/slider/index.vue')
          },
          {
            name: 'StrengthMeter',
            path: 'password',
            meta: {
              title: t('menu.component.password-comp.title')
            },
            component: () => import('@/views/components/password/index.vue')
          }
        ]
      },
      {
        name: 'NoticeAbout',
        path: 'notice',
        meta: {
          title: t('menu.component.notice.title')
        },
        component: () => import('@/layouts/blank.vue'),
        children: [
          {
            name: 'NoticeMessage',
            path: 'notice',
            meta: {
              title: t('menu.component.notice.notice')
            },
            component: () => import('@/views/components/notice-message/index.vue')
          },
          {
            name: 'Qrcode',
            path: 'qrcode',
            meta: {
              title: t('menu.component.notice.qrcode')
            },
            component: () => import('@/views/components/share/qrcode.vue')
          },
          {
            name: 'CopyAndShare',
            path: 'copy',
            meta: {
              title: t('menu.component.notice.copy')
            },
            component: () => import('@/views/components/share/copy.vue')
          }
        ]
      },
      {
        name: 'Functions',
        path: 'func',
        meta: {
          title: t('menu.component.function.title')
        },
        component: () => import('@/layouts/blank.vue'),
        children: [
          {
            name: 'TransitionsDemo',
            path: 'transition',
            meta: {
              title: t('menu.component.function.transition')
            },
            component: () => import('@/views/components/transitions/index.vue')
          },
          {
            name: 'CropperDemo',
            path: 'crop',
            meta: {
              title: t('menu.component.function.crop')
            },
            component: () => import('@/views/components/cropper/index.vue')
          },
          {
            name: 'Downloads',
            path: 'download',
            meta: {
              title: t('menu.component.function.download')
            },
            component: () => import('@/views/components/tools/download.vue')
          },
          {
            name: 'Prints',
            path: 'print',
            meta: {
              title: t('menu.component.function.print')
            },
            component: () => import('@/views/components/tools/print.vue')
          },
          {
            name: 'I18n',
            path: 'i18n',
            meta: {
              title: t('menu.component.function.i18n')
            },
            component: () => import('@/views/components/tools/i18n.vue')
          },
          {
            name: 'Watermark',
            path: 'watermark',
            meta: {
              title: t('menu.component.function.watermark')
            },
            component: () => import('@/views/components/tools/watermark.vue')
          },
          {
            name: 'VerifyComponents',
            path: 'verify',
            meta: {
              title: t('menu.component.display.verify')
            },
            component: () => import('@/views/components/verify/index.vue')
          },
          {
            name: 'CopyImageToClipBoard',
            path: 'copy-image',
            meta: {
              title: t('menu.component.function.copy-image')
            },
            component: () => import('@/views/components/tools/copy-image-clipboard.vue')
          }
        ]
      },
      {
        name: 'EditorDemo',
        path: 'editor',
        meta: {
          title: t('menu.component.editor.title')
        },
        component: () => import('@/layouts/blank.vue'),
        children: [
          {
            name: 'ToastUiEditor',
            path: 'toast',
            meta: {
              title: t('menu.component.editor.toast-ui')
            },
            component: () => import('@/views/components/editor/toast-ui/index.vue')
          },
          {
            name: 'Vditor',
            path: 'vditor',
            meta: {
              title: t('menu.component.editor.vditor')
            },
            component: () => import('@/views/components/editor/vditor/index.vue')
          },
          {
            name: 'MilkDownEditor',
            path: 'milkdown',
            meta: {
              title: t('menu.component.editor.milkdown')
            },
            component: () => import('@/views/components/editor/milkdown/index.vue')
          }
        ]
      },
      {
        name: 'Display',
        path: 'display',
        meta: {
          title: t('menu.component.display.title')
        },
        component: () => import('@/layouts/blank.vue'),
        children: [
          {
            name: 'DescriptionDemo',
            path: 'desc',
            meta: {
              title: t('menu.component.display.desc')
            },
            component: () => import('@/views/components/display/desc.vue')
          },
          {
            name: 'AvatarList',
            path: 'avatar',
            meta: {
              title: t('menu.component.display.avatar')
            },
            component: () => import('@/views/components/display/avatars.vue')
          },
          {
            name: 'Cards',
            path: 'cards',
            meta: {
              title: t('menu.component.display.card')
            },
            component: () => import('@/views/components/display/card.vue')
          },
          {
            name: 'Calendar',
            path: 'calendar',
            meta: {
              title: t('menu.component.display.calendar')
            },
            component: () => import('@/views/components/display/calendar.vue')
          },
          {
            name: 'WaterFall',
            path: 'waterfall',
            meta: {
              title: t('menu.component.dynamic.waterfall')
            },
            component: () => import('@/views/components/display/waterfall.vue')
          },
          {
            name: 'splitpanel',
            path: 'splitpanel',
            meta: {
              title: t('components.tools.splitpanel')
            },
            component: () => import('@/views/components/display/split-panel.vue')
          }
        ]
      },
      {
        name: 'SmallComp',
        path: 'small-comp',
        meta: {
          title: t('menu.component.small-comp.title')
        },
        component: () => import('@/layouts/blank.vue'),
        children: [
          {
            name: 'CalendarCard',
            path: 'calendar',
            meta: {
              title: t('menu.component.small-comp.calendar')
            },
            component: () => import('@/views/components/small-components/calendar.vue')
          },
          {
            name: 'Weather',
            path: 'weather',
            meta: {
              title: t('menu.component.small-comp.weather')
            },
            component: () => import('@/views/components/small-components/weather.vue')
          },
          {
            name: 'CountDown',
            path: 'countdown',
            meta: {
              title: t('menu.component.small-comp.countDown')
            },
            component: () => import('@/views/components/small-components/number.vue')
          }
        ]
      },
      {
        name: 'SmallComp',
        path: 'small-comp',
        meta: {
          title: t('menu.component.web-socket.title')
        },
        component: () => import('@/views/components/weboscket/index.vue')
      }
    ]
  }
]

export default componentsRoutes
