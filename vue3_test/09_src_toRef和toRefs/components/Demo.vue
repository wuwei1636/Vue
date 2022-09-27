<template>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>薪资：{{job.j1.salary}}</h3>
  <button @click="name += '!2'">修改名字</button>
  <button @click="age ++">修改年龄</button>
  <button @click="job.j1.salary ++">修改薪资</button>
</template>
<script>
import {reactive,toRefs} from "vue";
export default {
  name: "Demo",
  setup(){
    let person = reactive({
      name:'张三',
      age:18,
      job: {
        j1:{
          salary:20
        }
      }
    })
    return {
      // name1:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary'),
      person,

      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>