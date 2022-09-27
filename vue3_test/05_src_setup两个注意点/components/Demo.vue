<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄：{{person.age }}</h2>
  <button @click="showHello">展示value信息</button>
</template>
<script>
import {reactive} from "vue";

export default {
  name: "Demo",
  props:[],
  emits:['hello'],
  setup(props,context){
    console.log('---------setup-------------')
    let person = reactive({
      name:'张三',
      age : 18,
    })

    function showHello(){
      context.emit('hello',666)
    }

    return {
      person,
      showHello
    }
  }
}
</script>

<style scoped>

</style>