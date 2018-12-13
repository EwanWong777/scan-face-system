import request from '@/util/request'

export function getCompanyList() {
    return request({
        url: '/layout/getCompanyList',
        method: 'post'
    })
}