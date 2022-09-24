import Vue from 'vue'
// 引入 element 组件库
// import ElementUI from 'element-ui';
// 引入element全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 按需引入
import { Button, Row , DatePicker } from 'element-ui';
import App from './App.vue'

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)


new Vue({
  render: h => h(App),
}).$mount('#app')
