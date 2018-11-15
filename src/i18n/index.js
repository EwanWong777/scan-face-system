import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

import en from './lang/en'
import zh_CN from './lang/zh-CN'
import element_en from 'element-ui/lib/locale/lang/en'
import element_zh_CN from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
    en: {
        ...en,
        ...element_en
    },
    zh_CN: {
        ...zh_CN,
        ...element_zh_CN
    }
}

const i18n = new VueI18n({
    locale: Cookies.get('language') || 'en',
    messages,
    silentTranslationWarn: true
})

export default i18n