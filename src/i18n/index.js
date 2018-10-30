import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'

import zh_CN from './lang/zh-CN'
import en from './lang/en'

Vue.use(VueI18n)

const messages = {
    en: {
        ...en
    },
    zh_CN: {
        ...zh_CN
    }
}

const i18n = new VueI18n({
    locale: Cookie.get('language') || 'en',
    messages
})

export default i18n