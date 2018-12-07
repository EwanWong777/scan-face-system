import Mock from 'mockjs'

let equipmentData = []
for (let i = 0; i < 10; i++) {
    equipmentData.push(Mock.mock({
        eid: /^1[34578]\d{9}$/,
        name: '@name',
    }))
}

export default {
    getEquipmentData: () => {
        return {
            equipmentData
        }
    }
}