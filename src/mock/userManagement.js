import Mock from 'mockjs'

let userlist = []
for (let i = 0; i < 10; i++) {
    userlist.push(Mock.mock({
        account: /^[a-z0-9]{5,8}$/,
        company: '@cword(3, 5)' + '公司',
        phoneNumber: /^1[34578]\d{9}$/,
        email: '@email',
        registerTime: '@datetime',
        role: Mock.Random.pick([
            "角色一",
            "角色二",
            "角色三",
            "角色四",
        ])
    }))
}

let companylist = []
for (let i = 0; i < 10; i++) {
    companylist.push(Mock.mock({
        name: '@cword(3, 5)' + '公司',
        count: /\d{5}/,
    }))
}

export default {
    getUserList: () => {
        return {
            userlist
        }
    },
    getCompanyList: () => {
        return {
            companylist
        }
    }
}