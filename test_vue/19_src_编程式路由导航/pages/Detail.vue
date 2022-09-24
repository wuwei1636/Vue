<template>
  <ul>
    <li>消息id是：{{$route.query.id}}</li>
    <li>消息名称是：{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:['id','title']
}
</script>

<style scoped>

</style>