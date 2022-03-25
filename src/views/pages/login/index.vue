<template>
  <div class="bg fixed flex items-center justify-center w-screen h-screen overflow-hidden">
    <div class="outer flex">
      <div class="w-1/2">
        <div class="img w-4/5 h-full float-right"></div>
      </div>
      <div class="flex w-1/2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LoginView'
  }
</script>

<style lang="scss" scoped>
  .bg {
    line-height: 45px;
    background: url("@/assets/images/index1.jpg") no-repeat center center;
    background-size: cover;
  }

  .outer {
    min-width: 960px;
    min-height: 610px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;

    .img {
      background: url("@/assets/images/index.png") no-repeat center 70%;
      background-size: contain;
    }
  }
</style>
