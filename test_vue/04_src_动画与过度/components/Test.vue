<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="fir" :appear="true">
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1 {
    background-color: orange;
  }

  .fir-enter-active {
    animation: atguigu 1s;
  }
  .fir-leave-active {
    animation: atguigu 1s reverse;
  }

  /*动画*/
  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>