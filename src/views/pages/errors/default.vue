<template>
  <div class="flex flex-col justify-center items-center h-full">
    <el-row class="w-full justify-center">
      <el-col :sm="12" :lg="6">
        <el-result icon="error" title="403错误" sub-title="抱歉，您无权访问此页面。">
          <template #extra>
            <router-link to="/">
              <el-button type="primary">返回首页</el-button>
            </router-link>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result icon="error" title="404错误" sub-title="抱歉，您访问的页面不存在。">
          <template #extra>
            <router-link to="/">
              <el-button type="primary">返回首页</el-button>
            </router-link>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result icon="error" title="500错误" sub-title="抱歉，服务器报告错误。">
          <template #extra>
            <router-link to="/">
              <el-button type="primary">返回首页</el-button>
            </router-link>
          </template>
        </el-result>
      </el-col>
    </el-row>
    <el-row class="w-full justify-center">
      <el-result title="404" sub-title="抱歉，您访问的页面不存在。">
        <template #icon>
          <el-image
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          />
        </template>
        <template #extra>
          <el-button type="primary">返回首页</el-button>
        </template>
      </el-result>
      <el-result title="500" sub-title="抱歉，服务器报告错误。">
        <template #icon>
          <svg-icon icon-class="example-3" size="15rem" height="10rem"></svg-icon>
        </template>
        <template #extra>
          <el-button type="primary">返回首页</el-button>
        </template>
      </el-result>
      <el-result title="404" sub-title="抱歉，您访问的页面不存在。">
        <template #icon>
          <svg-icon icon-class="404" width="220px" height="110px"></svg-icon>
        </template>
        <template #extra>
          <el-button type="primary">返回首页</el-button>
        </template>
      </el-result>
    </el-row>
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

<style scoped></style>
