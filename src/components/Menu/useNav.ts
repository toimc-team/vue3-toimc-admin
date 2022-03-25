import type { IconTypes } from '@/components/Icon/types'
import type { AppRouteRecordRaw } from '@/router/types'
import { useRouter } from 'vue-router'

export function useNav(emit) {
  const router = useRouter()

  // 给树形菜单添加key
  function genMenuKeys(menus: Array<AppRouteRecordRaw>, level = '0') {
    // 过滤隐藏菜单
    menus = menus.filter((item) => !item.meta?.hideMenu)
    menus.forEach((item, index) => {
      const key = level.indexOf('-') !== -1 ? `${level}${index}` : index + ''
      item.meta = {
        ...item.meta,
        key
      }
      if (item.children) {
        return (item.children = genMenuKeys(item.children, key + '-'))
      }
    })
    return menus
  }

  // 判断是否有子菜单
  function menuHasChildren(menu: AppRouteRecordRaw): boolean {
    return (
      !menu.meta?.hideMenu &&
      !!menu.children &&
      Reflect.has(menu, 'children') &&
      menu.children.length > 0
    )
  }

  // 获取菜单key
  function getIndex(item: AppRouteRecordRaw): string {
    return item.meta?.key as string
  }

  // 菜单点击回调
  function handleMenuClick(e, item) {
    const { push } = router
    push(item)
    emit('menuClick', e)
  }

  // 获取图标
  function getIcons(item) {
    return item.meta?.icon as IconTypes
  }

  return {
    genMenuKeys,
    menuHasChildren,
    getIndex,
    handleMenuClick,
    getIcons
  }
}
