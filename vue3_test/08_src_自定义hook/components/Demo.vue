<template>
  <h2>当前求和为：{{sum}}</h2>
  <h3>当前鼠标的位置为：{{point.x}},{{point.y}}</h3>
</template>
<script>
import {ref} from "vue";
import usePoint from "@/hooks/usePoint";
export default {
  name: "Demo",
  setup(){
    let sum = ref(0)
    let point = usePoint()

    return {
      sum,
      point
    }
  }
}
</script>

<style scoped>

</style>