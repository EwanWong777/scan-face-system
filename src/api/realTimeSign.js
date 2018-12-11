import request from '@/util/request'

export function getRankingList() {
    return request({
        url: '/visitorStatistics/getRankingList',
        method: 'post'
    })
}