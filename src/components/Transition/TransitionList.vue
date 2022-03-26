<template>
  <component
    :is="/Expand/.test(name) ? 'expand-transition' : 'simple-transition'"
    :name="toLine(name + 'Transition')"
    :x="name === 'ExpandX'"
    :delay="delay"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
  import { toLine } from '@/utils'
  import { defineComponent, PropType } from 'vue'
  import { TransitionList } from './types'
  import SimpleTransition from './SimpleTransition.vue'
  import ExpandTransition from './ExpandTransition.vue'

  export default defineComponent({
    components: {
      SimpleTransition,
      ExpandTransition
    },
    props: {
      name: {
        type: String as PropType<TransitionList>,
        default: ''
      },
      delay: {
        type: [String, Number],
        default: '0.3s'
      }
    },
    setup() {
      return {
        toLine
      }
    }
  })
</script>

<style scoped></style>
