<template>
  <div class="flex flex-col items-center h-full mt-30 text-gray-800">
    <div class="title font-bold text-[200px]">403</div>
    <div class="mt-20 text-lg">抱歉，您无权访问此页面</div>
    <div class="mt-1 text-sm">Permission denied</div>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    animation: twinkle 1.5s ease-in-out infinite alternate;
  }

  @keyframes twinkle {
    0% {
      text-shadow:
        0 0 10px #fff,
        0 0 20px #fff,
        0 0 30px #fff,
        0 0 40px #888,
        0 0 70px #888,
        0 0 80px #888,
        0 0 100px #888,
        0 0 150px #888;
    }

    100% {
      text-shadow:
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px #888,
        0 0 35px #888,
        0 0 40px #888,
        0 0 50px #888,
        0 0 75px #888;
    }
  }
</style>
