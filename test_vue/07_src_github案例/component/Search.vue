<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    searchUsers(){
      this.$bus.$emit('updateListData',{isFirst:false , isLoding:true,errMsg:'',users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        response => {
          //请求成功后更新list的数据
          this.$bus.$emit('updateListData',{ isLoding:false,errMsg:'',users:response.data.items})
          console.log('获取')
        },
          error => {
            //请求失败后更新list的数据
            this.$bus.$emit('updateListData',{ isLoding:false,errMsg:error.message,users:[]})
          }
      )
    }
  }
}
</script>

<style scoped>

</style>