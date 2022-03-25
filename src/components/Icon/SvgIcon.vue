<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" />
  <svg
    v-else
    :class="svgClass"
    aria-hidden="true"
    :style="{ height: height || size, width: width || size }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      },
      width: {
        type: [Number, String],
        default: ''
      },
      height: {
        type: [Number, String],
        default: ''
      },
      size: {
        type: [Number, String],
        default: ''
      }
    },
    setup(props) {
      const isExternal = /^(https?:|mailto:|tel:)/.test(props.iconClass)
      const iconName = `#icon-${props.iconClass}`
      const svgClass = props.className ? `svg-icon ${props.className}` : 'svg-icon '
      const styleExternalIcon = () => {
        return {
          mask: `url(${props.iconClass}) no-repeat 50% 50%`,
          '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`,
          width: props.width || props.size,
          height: props.height || props.size
        }
      }
      return {
        isExternal,
        iconName,
        svgClass,
        styleExternalIcon
      }
    }
  })
</script>

<style lang="postcss" scoped>
  .svg-icon {
    overflow: hidden;

    /* width: 100%;
  height: 100%; */
    vertical-align: -0.15em;
    fill: currentcolor;
  }

  .svg-external-icon {
    display: inline-block;
    background-color: currentcolor;
    mask-size: cover !important;
  }
</style>
