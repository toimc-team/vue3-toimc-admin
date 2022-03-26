<template>
  <div class="h-full">
    <Result title="500错误" sub-title="抱歉，服务器报告错误。" @onback="handleBack"> </Result>
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
