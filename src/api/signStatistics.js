import request from '@/util/request'

export function getLateList() {
    return request({
        url: '/signStatistics/getLateList',
        method: 'post'
    })
}

export function getWorkingList() {
    return request({
        url: '/signStatistics/getWorkingList',
        method: 'post'
    })
}

export function getEarlyList() {
    return request({
        url: '/signStatistics/getEarlyList',
        method: 'post'
    })
}