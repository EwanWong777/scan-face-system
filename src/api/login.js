import request from '@/util/request'

export function loginByUserName(username, password) {
    return request({
        url: '/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}