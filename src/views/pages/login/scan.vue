<template>
  <div class="w-full p-1 custom-login">
    <div class="flex items-center justify-end">
      <div class="px-3 py-2 rounded-md mr-2 flex items-center bg-[#ECFAF3]">
        <span class="we inline-block pr-2 bg-contain"></span>
        <span class="text-sm text-[#07C160]">账号密码登录</span>
      </div>
      <router-link to="/login/pwd">
        <img src="@/assets/images/headportrait.png" class="img0" />
      </router-link>
    </div>
    <div class="my-10 mx-auto max-w-96 flex flex-col items-center">
      <div class="text-3xl pb-6">toimc管理系统</div>
      <div class="text-gray-600 py-3">微信登录</div>
      <img class="h-50 w-50" src="@/assets/images/code.jpg" />
      <div class="text-gray-300">请使用微信扫描二维码进行登录</div>
      <div class="text-gray-400">
        还没有账号？
        <router-link class="text-blue-400" to="/login/reg">立即注册></router-link>
      </div>
    </div>
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

<style scoped lang="scss">
  .we {
    width: 19px;
    height: 19px;
    background: url("@/assets/images/security.png") no-repeat center center;
  }
</style>
