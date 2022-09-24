<template>
  <div class="container">
    <Category title="游戏">
      <template scope="category">
        <ul>
          <li v-for="(item,index) in category.games" :key="index" v-text="item"></li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(item,index) in games" :key="index" v-text="item"></li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">

          <h4 v-for="(item,index) in games" :key="index" v-text="item"></h4>

      </template>
    </Category>

  </div>
</template>

<script>
import Category from "@/component/Category";
export default {
  name: "App",
  components: {Category},
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
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 50%;
  }
  video {
    width: 100%;
  }
</style>