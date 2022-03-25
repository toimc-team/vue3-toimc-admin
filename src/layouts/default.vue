<template>
  <div class="w-full h-screen flex bg-content-bg overflow-hidden">
    <div class="w-auto h-full flex flex-col">
      <Menu :menus="asyncRoutes" :collapse="isCollapse">
        <div class="py-8 px-3 bg-black">
          <img class="inline-block" src="@/assets/images/logo.png" />
        </div>
      </Menu>
    </div>
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- header -->
      <custom-header v-model:collapse="isCollapse"></custom-header>
      <!-- content -->
      <el-scrollbar class="custom-scroll">
        <router-view></router-view>
      </el-scrollbar>
      <!-- footer -->
    </div>
  </div>
</template>

<script lang="ts">
  import { asyncRoutes } from '@/router/index'

  export default defineComponent({
    setup() {
      const isCollapse = ref(false)
      return {
        asyncRoutes,
        isCollapse
      }
    }
  })
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: none;
  }

  .el-menu-vertical {
    .is-active {
      background-color: #0960bd !important;
    }
  }

  :deep(.custom-scroll) {
    .el-scrollbar__view {
      height: 100%;
    }
  }
</style>
