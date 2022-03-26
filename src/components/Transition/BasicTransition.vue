<template>
  <Transition
    :name="name"
    :mode="mode"
    :on-before-enter="functions?.beforeEnter"
    :on-enter="functions?.enter"
    :on-leave="functions?.leave"
    :on-after-leave="functions?.afterLeave"
    :on-leave-cancelled="functions?.afterLeave"
    :style="{
      '--transition-delay': typeof delay === 'string' ? delay : delay + 's',
      '--transition-timing-function': timingFunction
    }"
    v-bind="$attrs"
  >
    <slot></slot>
  </Transition>
</template>

<script lang="ts">
  import { Mode } from './types'

  export default defineComponent({
    props: {
      mode: {
        type: String as PropType<Mode>,
        default: 'in-out'
      },
      name: {
        type: String,
        default: ''
      },
      functions: {
        type: Object as PropType<Recordable>,
        default: () => {}
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
    setup() {
      return {}
    }
  })
</script>

<style scoped></style>
