<template>
  <div class="h-full">
    <Result
      title="403错误"
      sub-title="抱歉，您无权访问此页面。"
      img="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      img-class="result-img"
      @onback="handleBack"
    >
    </Result>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const handleBack = () => {
        ElMessage.info('点击了返回')
      }
      return {
        handleBack
      }
    }
  })
</script>

<style lang="scss" scoped>
  ::v-deep .result-img {
    border-radius: 50%;
  }
</style>
