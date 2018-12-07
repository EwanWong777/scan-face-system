import request from '@/util/request'

export function getCompanyConfiguration() {
    return request({
        url: '/companyConfiguration/getCompanyConfiguration',
        method: 'post'
    })
}