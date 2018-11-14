const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

const layout = {
    state: {
        isCollapse: false
    },
    mutations: {
        [TOGGLE_SIDEBAR](state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {
        toggleSidebar({
            commit
        }) {
            commit('TOGGLE_SIDEBAR')
        }
    }
}

export default layout