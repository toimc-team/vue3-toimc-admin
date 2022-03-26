<template>
  <basic-transition :name="name" v-bind="$attrs" v-on="on">
    <slot></slot>
  </basic-transition>
</template>
<script lang="ts">
  import { HTMLExpandElement } from './types'

  export default defineComponent({
    name: 'ExpandTransition',
    props: {
      x: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'expand-transition'
      }
    },
    setup(props) {
      const { x, name } = unref(props)

      function upperFirst(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }

      function afterLeave(el: HTMLExpandElement) {
        if (name && el._parent) {
          el._parent.classList.remove(name)
        }
        resetStyles(el)
      }

      function resetStyles(el: HTMLExpandElement) {
        const size = el._initialStyle[sizeProperty]
        el.style.overflow = el._initialStyle.overflow!
        if (size != null) el.style[sizeProperty] = size
        Reflect.deleteProperty(el, '_initialStyle')
      }

      const sizeProperty = x ? 'width' : ('height' as 'width' | 'height')
      const offsetProperty = `offset${upperFirst(sizeProperty)}` as 'offsetHeight' | 'offsetWidth'

      return {
        on: {
          beforeEnter(el) {
            el._parent = el.parentNode as (Node & ParentNode & HTMLElement) | null
            el._initialStyle = {
              transition: el.style.transition,
              overflow: el.style.overflow,
              [sizeProperty]: el.style[sizeProperty]
            }
          },

          enter(el) {
            const initialStyle = el._initialStyle

            el.style.setProperty('transition', 'none', 'important')
            el.style.overflow = 'hidden'
            // const offset = `${el[offsetProperty]}px`;

            // el.style[sizeProperty] = '0';

            void el.offsetHeight // force reflow

            el.style.transition = initialStyle.transition

            if (name && el._parent) {
              el._parent.classList.add(name)
            }

            requestAnimationFrame(() => {
              // el.style[sizeProperty] = offset;
            })
          },

          afterEnter: resetStyles,
          enterCancelled: resetStyles,

          leave(el: HTMLExpandElement) {
            el._initialStyle = {
              transition: '',
              overflow: el.style.overflow,
              [sizeProperty]: el.style[sizeProperty]
            }

            el.style.overflow = 'hidden'
            el.style[sizeProperty] = `${el[offsetProperty]}px`
            /* eslint-disable-next-line */
            void el.offsetHeight // force reflow

            requestAnimationFrame(() => (el.style[sizeProperty] = '0'))
          },

          afterLeave,
          leaveCancelled: afterLeave
        }
      }
    }
  })
</script>
