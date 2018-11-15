const getters = {
    // login
    token: state => state.login.token,
    // layout
    language: state => state.layout.language,
    isCollapse: state => state.layout.isCollapse
}

export default getters