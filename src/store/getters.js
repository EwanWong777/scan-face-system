const getters = {
    // login
    roles: state => state.login.userInfo.roles,
    token: state => state.login.userInfo.token,
    name: state => state.login.userInfo.name,
    avatar: state => state.login.userInfo.avatar,
    // layout
    language: state => state.layout.language,
    isCollapse: state => state.layout.isCollapse,
}

export default getters