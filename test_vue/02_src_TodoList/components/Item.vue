<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
<!--      <input type="checkbox" v-model="todo.done"/>-->
      <span v-text="todo.title"></span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:['todo','checkTo','deleteTodo'],
  methods:{
    handleCheck(id){
      // 通知 app 组件 将对应的todo的done值取反
      this.checkTo(id)
    },
    handleDelete(id){
      if(confirm("确认删除嘛？")){
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #dddddd;
}
li:hover button{
  display: block;
}
</style>