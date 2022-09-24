<!--组件的结构-->
<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{SchoolAddress}}</h2>
  </div>
</template>

<!--组件交互相关的代码-->
<script>
// 引入一个混合
import {mixin} from "@/mixin";

export default {
  name: "School",
  data(){
    return{
      name:"嵩阳高中",
      SchoolAddress:"北京"
    }
  },
  mixins:[mixin],
  mounted() {
    this.$bus.$on('hello',(date)=>{
      console.log(date)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  },
}
</script>

<!--组件的样式-->
<style scoped>

</style>