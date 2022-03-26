<template>
  <div class="p-4">
    <el-card header="过渡动画" class="min-h-[1080px]">
      <el-row justify="space-between" class="w-full">
        <el-row align="middle">
          <el-button type="primary" @click="start">开始动画</el-button>
          <el-button @click="stop">停止动画</el-button>
          <div class="ml-4">是否开始：{{ state ? '已开始' : '已停止' }}</div>
        </el-row>
        <el-row align="middle">
          <div class="mr-4">状态：{{ show ? '显示中...' : '隐藏中...' }}</div>
          <div>时间控制：</div>
          <el-radio-group v-model="delay" size="default" @change="handleChange">
            <el-radio-button :label="0.3">0.3s</el-radio-button>
            <el-radio-button :label="1">1s</el-radio-button>
            <el-radio-button :label="3">3s</el-radio-button>
            <el-radio-button :label="5">5s</el-radio-button>
          </el-radio-group>
        </el-row>
      </el-row>
      <h1 class="py-4">内置动画</h1>
      <el-row>
        <el-col
          v-for="(item, index) in transitionList"
          :key="index"
          :span="6"
          class="flex flex-col items-center justify-center mb-6"
        >
          <div>{{ item }}</div>
          <div class="min-h-45">
            <transition-list :name="item" :delay="delay">
              <div v-show="show" class="box"></div>
            </transition-list>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const show = ref(true)
      const delay = ref(0.3)
      const state = ref(false)

      const transitionList = [
        'Fade',
        'Scale',
        'SlideY',
        'ScrollY',
        'SlideYReverse',
        'ScrollYReverse',
        'SlideX',
        'ScrollX',
        'SlideXReverse',
        'ScrollXReverse',
        'ScaleRotate',
        'ExpandX',
        'Expand'
      ]

      let ctrl
      const start = () => {
        stop()
        state.value = true
        ctrl = setInterval(() => {
          show.value = false
          setTimeout(() => {
            show.value = true
          }, delay.value * 1000)
        }, delay.value * 2000)
      }

      const stop = () => {
        state.value = false
        clearInterval(ctrl)
      }

      const handleChange = (val) => {
        delay.value = val
        stop()
        start()
      }

      return {
        show,
        start,
        stop,
        transitionList,
        delay,
        handleChange,
        state
      }
    }
  })
</script>

<style lang="scss" scoped>
  .box {
    width: 150px;
    height: 150px;
    margin-top: 20px;
    background-color: rgb(126 170 236);
  }
</style>
