<template>
  <div>
    <h1>人员列表</h1>
    <h2>上方的组件求和为：{{sum}}</h2>
    <h3>列表中第一个人的名字：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
<!--    使用mapMutations使用如下的方法，在data中创建一个id，并且放上名字-->
<!--    <button @click="add({id:id,name:name})">添加</button>-->
    <button @click="wang">添加一个姓王的人</button>
    <button @click="addPersonServer">随机添加一个姓王的人</button>
    <ul>
      <li v-for="(p) in personList" v-text="p.name" :key="p.id"></li>
    </ul>
  </div>
</template>

<script>
// import {mapMutations} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: "Person",
  data(){
    return {
      name:'',
    }
  },
  computed:{
    // ...mapState('personAbout',['personList']),
    // ...mapState('countAbout',['sum']),
    //
    sum(){
      return this.$store.state.countAbout.sum
    },
    personList(){
      return this.$store.state.personAbout.personList
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    }

  },
  methods:{
    add(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('personAbout/ADD_PERSON',personObj)
      this.name = ''
    },

    // ...mapMutations('personAbout',{add:'ADD_PERSON'}),

    wang(){
      const personObj = {id:nanoid(),name:this.name}
      console.log(personObj)
      this.$store.dispatch('personAbout/addPresonWang',personObj)
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personAbout/addPersonServer')
    }
  }
}
</script>

<style scoped>
  li {
    text-decoration: none;
  }
</style>