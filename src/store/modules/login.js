import {
    getToken,
    setToken,
    removeToken
} from '@/util/auth'
import {
    loginByUserName,
    logout
} from '@/api/login'

const SET_TOKEN = 'SET_TOKEN'
const SET_NAME = 'SET_NAME'
const SET_AVATAR = 'SET_AVATAR'

const login = {
    state: {
        userInfo: {
            token: getToken(),
            name: window.localStorage.getItem("name"),
            avatar: window.localStorage.getItem("avatar"),
        }
    },
    mutations: {
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
                        if (data.token) {
                            commit('SET_TOKEN', data.token)
                            setToken(data.token)
                            commit('SET_NAME', data.alias)
                            window.localStorage.setItem("name", data.alias)
                            commit('SET_AVATAR', data.avatar)
                            window.localStorage.setItem("avatar", data.avatar)
                            resolve()
                        } else {
                            resolve(data.errmsg)
                        }
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
                        commit('SET_TOKEN', '')
                        removeToken()
                        window.localStorage.clear()
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