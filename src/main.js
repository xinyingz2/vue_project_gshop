/* js 入口文件 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
  el: '#app',
  render: h => h(App),
  //配置路由器
  router 
})