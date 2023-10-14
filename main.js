import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import FastClick from 'fastclick'
FastClick.attach(document.body)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'	
import request  from './utils/request.js'
import * as echarts from 'echarts'
Vue.use(ElementUI)
Vue.prototype.$axios = request
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif