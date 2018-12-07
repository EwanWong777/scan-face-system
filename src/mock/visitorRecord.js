import Mock from 'mockjs'

let visitorRecord = []
for (let i = 0; i < 10; i++) {
    visitorRecord.push(Mock.mock({
        name: '@cname',
        object: '@cname',
        photo: /[0-9]/,
    }))
}

export default {
    getVisitorRecord: () => {
        return {
            visitorRecord
        }
    }
}