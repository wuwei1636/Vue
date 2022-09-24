<template>
  <div class="container">
    <Category title="美食">
      <img src="https://github-1308115823.cos.ap-nanjing.myqcloud.com/vedio%2F2.jpg" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g,index) in games" v-text="g" :key="index"></li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="https://github-1308115823.cos.ap-nanjing.myqcloud.com/vedio%2F1.mp4"></video>
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
  .container{
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