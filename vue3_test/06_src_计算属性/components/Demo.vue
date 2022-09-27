<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstname">
  <br>
  名：<input type="text" v-model="person.lastname">

  <h2>全名是：{{person.fullname}}</h2>

  全名：<input type="text" v-model="person.fullname">
</template>
<script>
import {computed, reactive} from "vue";

export default {
  name: "Demo",
  setup(){
    let person = reactive({
      firstname:'张三',
      lastname : '三',
    })

    //计算属性简写 没有考虑计算属性被修改的情况
    // person.fullname = computed(() => {
    //   return person.firstname + '-' + person.lastname
    // })

    person.fullname = computed({
      get(){
        return person.firstname + '-' + person.lastname
      },
      set(value){
        const nameArr = value.split('-')
        person.firstname = nameArr[0]
        person.lastname = nameArr[1]
      }
    })

    return {
      person,
    }
  }
}
</script>

<style scoped>

</style>