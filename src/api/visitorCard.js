import request from '@/util/request'

export function getVisitorCard() {
    return request({
        url: '/visitorCard/getVisitorCard',
        method: 'post'
    })
}