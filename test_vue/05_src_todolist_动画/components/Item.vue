<template>
  <transition name="fir" :appear="true">
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
        <!--      <input type="checkbox" v-model="todo.done"/>-->
        <span v-show="!todo.isEdit" v-text="todo.title"></span>
        <input
            type="text"
            v-show="todo.isEdit"
            :value="todo.title"
            @blur="handleBlur(todo,$event)"
            ref="inputTitle"
        >
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
      <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
  </transition>
</template>

<script>
import 'animate.css'
export default {
  name: "Item",
  props:['todo'],
  methods:{
    handleCheck(id){
      // 通知 app 组件 将对应的todo的done值取反
      // this.checkTo(id)
      this.$bus.$emit('checkTo',id)
    },
    handleDelete(id){
      if(confirm("确认删除嘛？")){
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo',id)
      }
    },
    handleEdit(todo){
      // eslint-disable-next-line no-prototype-builtins
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit = true;
      }else{
        this.$set(todo,'isEdit',true)
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo,e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert("输入不能为空")
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    },
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
  /*fir对应上面 transition的 name*/
  .fir-enter-active {
    animation: atguigu 1s;
  }
  .fir-leave-active {
    animation: atguigu 1s reverse;
  }

  /*动画*/
  @keyframes atguigu {
    from{
      transform: translateX(100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>