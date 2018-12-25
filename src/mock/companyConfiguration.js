import Mock from 'mockjs'

let companyConfiguration = []
for (let i = 0; i < 10; i++) {
    companyConfiguration.push(Mock.mock({
        name: '@cword(3, 5)' + '公司',
        status: Mock.Random.pick([
            "激活",
            "未激活"
        ]),
        "visitor|0.1": 1,
        "facegrade|0.1": 1,
    }))
}

export default {
    getCompanyConfiguration: () => {
        return {
            companyConfiguration
        }
    }
}