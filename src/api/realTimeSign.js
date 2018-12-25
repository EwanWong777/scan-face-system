import request from '@/util/request'

export function getDynamicList() {
    return request({
        url: '/realTimeSign/getDynamicList',
        method: 'post'
    })
}

export function getSignList() {
    return request({
        url: '/realTimeSign/getSignList',
        method: 'post'
    })
}