// 该文件用于创建vuex最核心的store

//引入vuex
import Vuex from "vuex";
import Vue from "vue";
// 使用vuex
Vue.use(Vuex)

// 准备actions，用于想用组件中的动作
const actions = {
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        },500)
    },
}
// 准备mutations，用于操作数据（state）
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
}
// 准备state，用于存储数据
const state = {
    sum:0,
    school:'嵩阳高中',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}
// 准备getters，用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

