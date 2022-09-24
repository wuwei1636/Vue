<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>放大十倍：{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3>下方组件的总人数：{{personList.length}}</h3>
    <select v-model.number="n" name="" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n:1,
    }
  },
  computed:{
    // 借助mapState生成计算属性，从state中读取数据  对象写法
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),

    // 借助mapState生成计算属性，从state中读取数据  数组写法
    ...mapState(['sum','school','subject','personList']),

    // 借助mapGetters生成计算属性，从Getters中读取数据  对象写法
    // ...mapGetters({bigSum:'bigSum'}),
    // 借助mapGetters生成计算属性，从Getters中读取数据  数组写法
    ...mapGetters(['bigSum'])
  },
  methods:{

    // 借助mapMutataions生成对应的方法，方法中调用commit去联系mutations  对象写法
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    // 借助mapMutataions生成对应的方法，方法中调用commit去联系mutations  数组写法
    // ...mapMutations(['JIA','JIAN']),

    /* ********************************************  */

    // 借助mapActions生成对应的方法，方法中调用dispatch去联系Actions  对象写法
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

    // 借助mapActions生成对应的方法，方法中调用dispatch去联系Actions  数组写法
    // ...mapActions(['jiaOdd','jiaWait']),

  },
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>