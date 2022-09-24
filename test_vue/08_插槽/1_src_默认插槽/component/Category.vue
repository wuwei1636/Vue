<template>
  <div class="category">
    <h3 v-text="title + '分类'"></h3>
<!--    <ul>-->
<!--      <li v-for="(item,index) in ListData" :key="index" v-text="item"></li>-->
<!--    </ul>-->
<!--    定义一个插槽，让组件的使用者进行填充-->
    <slot>我是默认值，如果有填充，我就不显示</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title']
}
</script>

<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3 {
    text-align: center;
    background-color: orange;
  }

</style>