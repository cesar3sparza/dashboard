import Vue from 'vue'
import App from './App.vue'
import vsm from 'vue-simple-markdown'

Vue.use(vsm)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')