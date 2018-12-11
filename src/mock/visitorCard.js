import Mock from 'mockjs'

let visitorCard = []
for (let i = 0; i < 10; i++) {
    visitorCard.push(Mock.mock({
        name: '@cname',
        position: Mock.Random.pick([
            "经理",
            "员工",
            "总监",
            "老板",
        ]),
        phoneNumber: /^1[34578]\d{9}$/,
        companyName: '@csentence(3, 5)',
        companyAddress: '@county(true) @csentence(3, 5)',
        contactAddress: '@county(true) @csentence(3, 5)',
        photo: /[0-9]/,
    }))
}

export default {
    getVisitorCard: () => {
        return {
            visitorCard
        }
    }
}