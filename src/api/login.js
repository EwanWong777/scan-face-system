import request from '@/util/request'
import md5 from 'js-md5'

export function loginByUserName(username, password) {
    let timestamp = Math.round(new Date().getTime() / 1000).toString()
    let md5Password = md5(password)
    let md5Sign = md5(timestamp + 'www.qihancloud.com')
    return request({
        url: '/api/ucenter/user/login',
        method: 'get',
        params: {
            account: username,
            password: md5Password,
            timestamp: timestamp,
            sign: md5Sign,
        }
    })
}

export function logout() {
    return request({
        url: '/login/logout',
        method: 'post',
    })
}