import {
    getToken,
    setToken,
    removeToken
} from '@/util/auth'
import {
    loginByUserName,
    getUserInfo,
    logout
} from '@/api/login'

const SET_ROLES = 'SET_ROLES'
const SET_TOKEN = 'SET_TOKEN'
const SET_NAME = 'SET_NAME'
const SET_AVATAR = 'SET_AVATAR'

const login = {
    state: {
        userInfo: {
            roles: [],
            token: getToken(),
            introduction: '',
            avatar: '',
            name: ''
        }
    },
    mutations: {
        [SET_ROLES](state, roles) {
            state.userInfo.roles = roles
        },
        [SET_TOKEN](state, token) {
            state.userInfo.token = token
        },
        [SET_NAME](state, name) {
            state.userInfo.name = name
        },
        [SET_AVATAR](state, avatar) {
            state.userInfo.avatar = avatar
        }
    },
    actions: {
        loginByUserName({
            commit
        }, loginForm) {
            return new Promise((resolve, reject) => {
                loginByUserName(loginForm.username, loginForm.password)
                    .then((res) => {
                        const data = res.data
                        commit('SET_ROLES', data.roles)
                        commit('SET_TOKEN', data.token)
                        setToken(data.token)
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        getUserInfo({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.userInfo.token)
                    .then((res) => {
                        const data = res.data
                        commit('SET_NAME', data.name)
                        commit('SET_AVATAR', data.avatar)
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        logout({
            commit
        }) {
            return new Promise((resolve, reject) => {
                logout()
                    .then(() => {
                        commit('SET_ROLES', [])
                        commit('SET_TOKEN', '')
                        removeToken()
                        resolve()
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        }
    }
}
export default login