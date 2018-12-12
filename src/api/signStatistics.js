import request from '@/util/request'

export function getLateList() {
    return request({
        url: '/signStatistics/getLateList',
        method: 'post'
    })
}