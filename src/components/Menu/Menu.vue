<template>
  <!-- menu -->
  <el-menu
    v-bind="$attrs"
    ref="menuRef"
    :default-active="'1'"
    class="el-menu-custom flex-1"
    :mode="mode"
    :collapse="collapse"
    :background-color="backgroundColor"
    text-color="#ffffffb3"
    active-text-color="#fff"
    :style="{ '--menu-width': width }"
  >
    <slot></slot>
    <el-scrollbar ref="scroll" :max-height="menuHeight">
      <template v-for="item in menusWithKeys" :key="item.path">
        <sub-menu :item="item"></sub-menu>
      </template>
    </el-scrollbar>
  </el-menu>
</template>

<script lang="ts">
  import type { AppRouteRecordRaw } from '@/router/types'
  import { useNav } from './useNav'

  import type { PropType } from 'vue'

  export default defineComponent({
    name: 'Menu',
    props: {
      mode: {
        type: String as PropType<'vertical' | 'horizontal'>,
        default: 'vertical'
      },
      menus: {
        type: Array as PropType<AppRouteRecordRaw[]>,
        default: () => []
      },
      collapse: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '210px'
      },
      backgroundColor: {
        type: String,
        default: '#000'
      }
    },
    emits: ['menuClick'],
    setup(props, ctx) {
      const { menus } = toRefs(props)
      // 设置menu的调试
      const menuHeight = ref(0)
      const scroll = ref()
      const menuRef = ref()
      const { genMenuKeys } = useNav(ctx.emit)

      // 给树形菜单添加key
      const menusWithKeys = genMenuKeys(menus.value)

      const initHeight = async () => {
        const { slots } = ctx
        if (slots.default) {
          const defaults = slots.default()
          if (defaults.length) {
            const elRef = defaults[0]
            const dom = elRef.el as HTMLElement
            // -100的目的是距离底部一定的距离
            menuHeight.value = window.innerHeight - dom.offsetHeight
            scroll.value?.update()
          }
        }
      }

      onMounted(() => {
        // 获取slots的高度
        initHeight()

        const debouncedFn = useDebounceFn(() => {
          initHeight()
        }, 500)

        useResizeObserver(menuRef, debouncedFn)
      })

      return {
        menusWithKeys,
        menuHeight,
        menuRef
      }
    }
  })
</script>

<style lang="scss" scoped>
  .el-menu-custom {
    // --menu-width: 210px;
    &:not(.el-menu--collapse) {
      width: var(--menu-width);
    }
  }
</style>
