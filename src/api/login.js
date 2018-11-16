import request from '@/util/request'

export function loginByUserName(username, password) {
    return request({
        url: '/login/loginByUserName',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export function getUserInfo(token) {
    return request({
        url: '/login/getUserInfo',
        method: 'post',
        data: {
            token
        }
    })
}

export function logout() {
    return request({
        url: '/login/logout',
        method: 'post',
    })
}