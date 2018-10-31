const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

const app = {
    state: {
        sidebarCollapse: false
    },
    mutations: {
        [TOGGLE_SIDEBAR](state) {
            state.sidebarCollapse = !state.sidebarCollapse
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

export default app