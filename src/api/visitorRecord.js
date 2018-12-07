import request from '@/util/request'

export function getVisitorRecord() {
    return request({
        url: '/visitorRecord/getVisitorRecord',
        method: 'post'
    })
}