<template>
  <div>
    <h2 @click="showName">学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="send">点我给school发送消息</button>
  </div>
</template>

<script>
import {mixin} from "@/mixin";
export default {
  name: "Student",
  data(){
    return{
      name:"张三",
      sex:"男",
      age: 17,
    }
  },
  mixins:[mixin],
  methods: {
    send(){
      this.$bus.$emit('hello',this.name)
    }
  }
}
</script>

<style scoped>

</style>