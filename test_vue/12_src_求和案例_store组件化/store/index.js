// 该文件用于创建vuex最核心的store

//引入vuex
import Vuex from "vuex";
import Vue from "vue";
import count from "@/store/count";
import person from "@/store/person";
// 使用vuex
Vue.use(Vuex)

//创建并暴露 store
export default new Vuex.Store({
    modules:{
        countAbout:count,
        personAbout:person,
    }
})

