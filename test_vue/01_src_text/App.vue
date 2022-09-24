<template>
  <div>
    <school/>
    <hr>
    <Student/>

  </div>
</template>

<script>
import School from './components/School'
import Student from "./components/Student";

export default {
  name: "App",
  components:{
    Student,
    School,
  },
  data(){
    return {
      msg : "欢迎来到杭州"
    }
  }
}
</script>

<style scoped>

</style>