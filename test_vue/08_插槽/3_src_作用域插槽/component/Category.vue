<template>
  <div class="category">
    <h3 v-text="title + '分类'"></h3>
<!--    定义一个插槽，让组件的使用者进行填充-->
    <slot :games = "games" ></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
  data(){
    return {
      games:['红色警戒','地平线4','穿越火线','超级玛丽','糖豆人'],
    }
  }
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