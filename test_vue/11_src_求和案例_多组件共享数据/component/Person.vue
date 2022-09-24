<template>
  <div>
    <h1>人员列表</h1>
    <h2>上方的组件求和为：{{sum}}</h2>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="(p) in personList" v-text="p.name" :key="p.id"></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: "Person",
  data(){
    return {
      name:''
    }
  },
  computed:{
    ...mapState(['personList','sum'])
  },
  methods:{
    add(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('ADD_PERSON',personObj)
      this.name = ''
    }
  }
}
</script>

<style scoped>
  li {
    text-decoration: none;
  }
</style>