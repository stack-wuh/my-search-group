import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MySearch from './components/index'

Vue.use(ElementUI)
Vue.use(MySearch)

new Vue({
  el: '#app',
  render: h => h(App)
})
