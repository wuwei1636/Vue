<template>
  <Demo @hello = "showhelloMessage"/>
</template>

<script>
import Demo from "@/components/Demo";
export default {
  name: 'App',
  components: {Demo},
  setup(){

    function showhelloMessage(value){
      alert("自定义事件收到的参数是："+ value)
    }

    return {
      showhelloMessage,
    }
  }
}
</script>

<style>
</style>
