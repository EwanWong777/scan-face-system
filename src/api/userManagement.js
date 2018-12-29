import request from '@/util/request'

export function getUserList() {
    return request({
        url: '/userManagement/getUserList',
        method: 'post'
    })
}

export function getCompanyList() {
    return request({
        url: '/userManagement/getCompanyList',
        method: 'post'
    })
}