import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css';
Vue.use(vuescroll, {
  ops: {
    bar: {
      background: "#000",
      opacity: .2
    }
  }
})

import VeeValidate from 'vee-validate'
import VeeValidate_en from 'vee-validate/dist/locale/en'
import VeeValidate_zh_CN from 'vee-validate/dist/locale/zh_CN'
const config = {
  errorBagName: 'errorBags',
  fieldsBagName: 'fieldBags',
  i18nRootKey: 'validations',
  i18n,
  dictionary: {
    en: {
      ...VeeValidate_en,
    },
    zh_CN: {
      ...VeeValidate_zh_CN,
    }
  }
};
Vue.use(VeeValidate, config);

import router from './router'
import i18n from './i18n'
import store from './store'

import './mock'

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