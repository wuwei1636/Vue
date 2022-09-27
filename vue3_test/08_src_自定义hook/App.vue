<template>
  <button @click="showDemo = !showDemo">点击显示隐藏</button>
  <Demo v-if="showDemo"/>
</template>

<script>
import Demo from "@/components/Demo";
import {ref, watch} from "vue";
export default {
  name: 'App',
  components: {Demo},
  setup(){

    let showDemo = ref(true)

    watch(showDemo,(newValue,oldValue) => {
      console.log(newValue,oldValue)
    })

    return {
      showDemo
    }
  }
}
</script>

<style>
</style>
