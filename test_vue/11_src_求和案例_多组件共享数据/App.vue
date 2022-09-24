<template>
  <div class="container">
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from "@/component/Count";
import Person from "@/component/Person";
export default {
  name: "App",
  components: {Count,Person},
  data(){
    return {
      food:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','地平线4','穿越火线','超级玛丽','糖豆人'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  }
}
</script>

<style >

</style>