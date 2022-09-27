<template>
  <h1>一个人的信息</h1>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h3>工作种类：{{person.job.type}}</h3>
  <h3>工作薪水：{{person.job.salary}}</h3>
  <h3>c：{{person.job.a.b.c}}</h3>
  <h3>爱好：{{person.hobby}}</h3>
  <button @click="changeInfo">修改个人的信息</button>
</template>

<script>
import { reactive} from "vue";
export default {
  name: 'App',
  setup(){

    let person = reactive({
      name:'张三',
      age : 18,
      job: {
        type:'前端工程师',
        salary:'30k',
        a :{
          b:{
            c:666
          }
        }
      },
      hobby: ['抽烟','喝酒','烫头']
    })

    function changeInfo(){
      person.name = '里斯'
      person.age = 48
      person.job.salary = '30k'
      person.job.type = '后端工程师'
      person.job.a.b.c = 999
      person.hobby[0] = '学习'
    }

    return {
      person,
      changeInfo,

    }
  }
}
</script>

<style>
</style>
