import Cookies from 'js-cookie'

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
const SET_LANGUAGE = 'SET_LANGUAGE'

const layout = {
    state: {
        language: Cookies.get('language') || 'en',
        isCollapse: false
    },
    mutations: {
        [TOGGLE_SIDEBAR](state) {
            state.isCollapse = !state.isCollapse
        },
        [SET_LANGUAGE](state, language) {
            state.language = language
        }
    },
    actions: {
        toggleSidebar({
            commit
        }) {
            commit('TOGGLE_SIDEBAR')
        },
        setLanguage({
            commit
        }, language) {
            commit('SET_LANGUAGE', language)
            Cookies.set('language', language)
        }
    }
}

export default layout