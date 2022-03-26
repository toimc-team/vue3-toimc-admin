<template>
  <component
    :is="!group ? 'Transition' : 'TransitionGroup'"
    :name="name"
    :mode="mode"
    :on-before-enter="onBeforeEnter"
    :style="{
      '--transition-delay': typeof delay === 'string' ? delay : delay + 's',
      '--transition-timing-function': timingFunction
    }"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
  import { Transition, TransitionGroup } from 'vue'
  import { Mode } from './types'

  export default defineComponent({
    components: {
      Transition,
      TransitionGroup
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      group: {
        type: Boolean as PropType<boolean>,
        default: false
      },
      mode: {
        type: String as PropType<Mode>,
        default: 'in-out'
      },
      origin: {
        type: String as PropType<string>,
        default: 'top center 0'
      },
      delay: {
        type: [String, Number],
        default: '0.3s'
      },
      timingFunction: {
        type: String,
        default: 'cubic-bezier(0.25, 0.8, 0.5, 1)'
      }
    },
    setup(props) {
      const onBeforeEnter = (el: HTMLElement) => {
        el.style.transformOrigin = props.origin
      }

      return {
        onBeforeEnter
      }
    }
  })
</script>
