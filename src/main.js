import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './router'
import i18n from './i18n'
import store from './store'

import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/style/reset.styl'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')