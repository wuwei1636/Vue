<template>
  <h1>一个人的信息</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo">修改个人的信息</button>
</template>

<script>
import {ref} from "vue";
export default {
  name: 'App',
  setup(){
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })


    function changeInfo(){
      name.value = '里斯'
      age.value = 48
      job.value.salary = '30k'
      job.value.type = '后端工程师'
    }

    return {
      name,
      age,
      changeInfo,
      job
    }
  }
}
</script>

<style>
</style>
