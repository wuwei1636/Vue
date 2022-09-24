<template>
  <div class="container">
    <Category title="美食">
      <img slot="center"  src="https://github-1308115823.cos.ap-nanjing.myqcloud.com/vedio%2F2.jpg" alt="">
      <a slot="footer" href="https://nan-bluesky.top">111111</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" v-text="g" :key="index"></li>
      </ul>
      <div slot="footer" class="foot">
        <a href="https://nan-bluesky.top">单机游戏</a>
        <a href="https://nan-bluesky.top">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="https://github-1308115823.cos.ap-nanjing.myqcloud.com/vedio%2F1.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a slot="footer" href="https://nan-bluesky.top">经典</a>
          <a slot="footer" href="https://nan-bluesky.top">热门</a>
          <a slot="footer" href="https://nan-bluesky.top">推荐</a>
        </div>
        <h4 ></h4>
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