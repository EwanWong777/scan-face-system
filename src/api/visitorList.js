import request from '@/util/request'

export function getVisitorList() {
    return request({
        url: '/visitorList/getVisitorList',
        method: 'post'
    })
}