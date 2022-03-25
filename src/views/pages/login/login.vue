<template>
  <div class="w-full p-1 custom-login">
    <div class="flex items-center justify-end">
      <div class="px-3 py-2 rounded-md mr-2 flex items-center bg-[#ECFAF3]">
        <span class="we inline-block pr-2 bg-contain"></span>
        <span class="text-sm text-[#07C160]">微信扫码登录</span>
      </div>
      <router-link to="/login/scan">
        <img class="relative cursor-pointer" src="@/assets/images/qr.png" />
      </router-link>
    </div>
    <div class="my-10 mx-auto max-w-96">
      <div class="text-3xl pb-6">toimc管理系统</div>
      <el-tabs v-model="activeName" class="pt-5" @tab-click="handleClick">
        <el-tab-pane label="密码登录" name="pwd">
          <basic-form :schemas="loginForm" label-width="0" class="pt-4">
            <template #action>
              <el-button type="primary" size="large" class="w-full">登录</el-button>
            </template>
          </basic-form>
        </el-tab-pane>
        <el-tab-pane label="验证码登录" name="code">
          <basic-form :schemas="codeLoginForm" label-width="0" class="pt-4">
            <template #suffix>
              <el-link
                v-if="!state.sending"
                type="primary"
                :underline="false"
                class="mr-2"
                href="javascript:;"
                @click="sendCode"
                >获取验证码</el-link
              >
              <span
                v-else
                class="text-sm text-gray-400 w-[70px] text-center inline-block flex items-center"
                >重发{{ leftCount }}秒</span
              >
            </template>
            <template #action>
              <el-button type="primary" size="large" class="w-full">登录</el-button>
            </template>
          </basic-form>
        </el-tab-pane>
      </el-tabs>
      <div class="flex justify-between text-sm text-gray-400">
        <router-link class="text-blue-400" to="/login/forget">忘记密码？</router-link>
        <div>
          还没有账号？
          <router-link class="text-blue-400" to="/login/reg">立即注册></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { FormSchema } from '@/components/Form/types/types'
  import { TabsPaneContext } from 'element-plus'
  import { defineComponent } from 'vue'
  import sendUtils from '@/utils/sendCode'

  export default defineComponent({
    setup() {
      const activeName = ref('pwd')
      const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
      }

      const loginForm = [
        {
          component: 'input',
          class: 'py-1',
          attrs: {
            placeholder: '请输入手机号/账号',
            size: 'large',
            prefixIcon: 'Avatar'
          }
        },
        {
          component: 'input',
          class: 'py-1',
          attrs: {
            placeholder: '请输入密码',
            type: 'password',
            size: 'large',
            prefixIcon: 'Lock'
          }
        }
      ] as FormSchema[]

      const codeLoginForm = [
        {
          component: 'input',
          class: 'py-1',
          attrs: {
            placeholder: '请输入手机号',
            size: 'large',
            prefixIcon: 'Avatar'
          }
        },
        {
          component: 'input',
          class: 'py-1',
          attrs: {
            placeholder: '请输入验证码',
            size: 'large',
            prefixIcon: 'Lock'
          },
          itemSlot: 'suffix',
          slot: 'suffix'
        }
      ] as FormSchema[]

      const { state, sendCode, leftCount } = sendUtils()
      return {
        activeName,
        handleClick,
        loginForm,
        codeLoginForm,
        state,
        sendCode,
        leftCount
      }
    }
  })
</script>

<style scoped lang="scss">
  .we {
    width: 19px;
    height: 19px;
    background: url("@/assets/images/security.png") no-repeat center center;
  }

  .custom-login {
    :deep(.el-tabs__nav-wrap::after) {
      height: unset;
    }
  }
</style>
