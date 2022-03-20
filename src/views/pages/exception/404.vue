<template>
  <div class="flex flex-col items-center h-full mt-30 text-gray-800">
    <div class="title font-bold text-[200px]" :class="{ hinge: animated }" @mouseenter="handleEnter"
      >404</div
    >
    <div class="mt-20 text-lg">抱歉，您访问的内容不存在</div>
    <div class="mt-1 text-sm">Not found</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const animated = ref(false)

      const handleEnter = () => {
        animated.value = true
      }

      return {
        animated,
        handleEnter
      }
    }
  })
</script>

<style lang="scss" scoped>
  .title {
    animation: swing 1.5s ease-in-out alternate;
    animation-duration: 1s;
    animation-fill-mode: both;
    transform-origin: top center;
  }

  .hinge {
    animation-duration: 3s;
    animation-name: hinge;
  }

  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }

    100% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

  @keyframes hinge {
    0% {
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }

    20%,
    60% {
      transform: rotate3d(0, 0, 1, 80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }

    40%,
    80% {
      opacity: 1;
      transform: rotate3d(0, 0, 1, 60deg);
      animation-timing-function: ease-in-out;
      transform-origin: top left;
    }

    100% {
      opacity: 0;
      transform: translate3d(0, 700px, 0);
    }
  }
</style>
