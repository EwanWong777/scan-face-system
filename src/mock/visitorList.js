import Mock from 'mockjs'

let visitorList = []
for (let i = 0; i < 10; i++) {
    visitorList.push(Mock.mock({
        name: '@cname',
        phoneNumber: /^1[34578]\d{9}$/,
        photo: /[0-9]/,
    }))
}

export default {
    getVisitorList: () => {
        return {
            visitorList
        }
    }
}