import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import echarts from 'echarts'
Vue.prototype.echarts = echarts

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  echarts,
  render: h => h(App)
}).$mount('#app')
