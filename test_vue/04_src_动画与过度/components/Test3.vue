<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
        :appear="true"
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInDown"
        leave-active-class="animate__backOutDown"
    >
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">北京</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
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

</style>