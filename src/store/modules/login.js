import {
    getToken,
    setToken
} from '@/util/auth'
import {
    loginByUserName
} from '@/api/login'

const SET_TOKEN = 'SET_TOKEN'

const login = {
    state: {
        token: getToken()
    },
    mutations: {
        [SET_TOKEN](state, token) {
            state.token = token
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
                        commit('SET_TOKEN', data.token)
                        setToken(data.token)
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
            })
        }
    }
}
export default login