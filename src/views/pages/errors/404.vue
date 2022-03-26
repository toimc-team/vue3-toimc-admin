<template>
  <div class="flex flex-col justify-center items-center h-full">
    <Result title="404" sub-title="抱歉，您访问的页面不存在。" @onback="handleBack"> </Result>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    }
  })
</script>

<style lang="scss" scoped></style>
