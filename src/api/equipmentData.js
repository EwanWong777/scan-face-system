import request from '@/util/request'

export function getEquipmentData() {
    return request({
        url: '/equipmentData/getEquipmentData',
        method: 'post'
    })
}