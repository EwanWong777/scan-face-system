import request from '@/util/request'

export function getInternalAddressBook() {
    return request({
        url: '/internalAddressBook/getInternalAddressBook',
        method: 'post'
    })
}