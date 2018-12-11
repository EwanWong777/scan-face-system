import Mock from 'mockjs'

let visitorList = []
for (let i = 0; i < 10; i++) {
    visitorList.push(Mock.mock({
        name: '@cname',
        object: '@cname',
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