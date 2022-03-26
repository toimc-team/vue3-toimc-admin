<template>
  <div class="flex flex-col justify-center items-center h-full">
    <el-result :icon="icon" :title="title" :sub-title="subTitle">
      <template #icon>
        <el-image v-if="img" :class="imgClass" :src="img" />
      </template>
      <template #extra>
        <el-button type="primary" @click="$emit('onback')">{{ buttonText }}</el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Result',
    props: {
      title: {
        type: String,
        default: '错误'
      },
      subTitle: {
        type: String,
        default: '抱歉。发生了一些错误'
      },
      icon: {
        type: String,
        default: 'error'
      },
      img: {
        type: String,
        default: ''
      },
      imgClass: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: '返回'
      }
    },
    emits: ['onback'],
    setup() {
      return {}
    }
  })
</script>

<style lang="scss" scoped></style>
