<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="forward">εθΏ</button>
      <button @click="back">ει</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    forward(){
      this.$router.forward()
    },
    back(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>

</style>