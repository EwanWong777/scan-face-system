import Mock from 'mockjs'

let companyConfiguration = []
for (let i = 0; i < 10; i++) {
    companyConfiguration.push(Mock.mock({
        name: '@cword(3, 5)' + '公司',
        ip: /\d{10}/,
        type: /[0-9]/,
        state: Mock.Random.pick([
            "在线",
            "离线"
        ]),
        dictionaries: /[0-9]/,
        noise: /[0-9]/,
        semantic: /\d{5,10}/,
        "meaning|0.1": 1
    }))
}

export default {
    getCompanyConfiguration: () => {
        return {
            companyConfiguration
        }
    }
}