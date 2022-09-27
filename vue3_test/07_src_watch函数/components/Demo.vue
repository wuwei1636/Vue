<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum ++">点我+1</button>

  <h2>当前的信息为{{msg}}</h2>
  <button @click="msg += '!'">修改信息</button>

  <h2>姓名{{person.name}}</h2>
  <h2>年龄{{person.age}}</h2>
  <button @click="person.name += '!'">修改信息</button>
  <button @click="person.age ++">修改年龄</button>
</template>
<script>
import {ref,watch,reactive} from "vue";

export default {
  name: "Demo",
  setup(){
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age:18
    })

    // 情况一：监视ref定义的一个响应式数据
    // watch(sum,(newValue , oldValue) => {
    //   console.log('sum变了',newValue,oldValue)
    // })

    //情况二：监视多个ref定义的响应式数据
    // watch([msg,sum],(newValue , oldValue) => {
    //   console.log(newValue,oldValue)
    // },{immediate:true})

      /*
      * 情况三： 监视reactive所定义的一个响应式数据
      * 注意，此处无法正确获取oldvalue
      * 强制开启了深度监视，无法关闭
      * */
      // watch(person,(newValue , oldValue) => {
      //   console.log('person变化了',newValue,oldValue)
      // })

    //情况四：监视ractive所定义的一个响应式数据的一个属性
    // watch(() => person.age,(newValue,oldValue) => {
    //   console.log(newValue,oldValue)
    // })

    //情况五：监视ractive所定义的一个响应式数据中的某些属性
    // watch([() => person.name,() => person.age],(ne,old) => {
    //   console.log(ne,old)
    // })

    //特殊情况
    watch(() => person.job , (ne , old) => {
      console.log(ne,old)
    },{deep:true})


    return {
      sum,
      msg,
      person,
    }
  }
}
</script>

<style scoped>

</style>