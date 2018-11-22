import request from '@/util/request'

export function getUserList() {
    return request({
        url: '/user/getUserList',
        method: 'post'
    })
}