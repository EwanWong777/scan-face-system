import Mock from 'mockjs'

let userlist = []
for (let i = 0; i < 10; i++) {
    userlist.push(Mock.mock({
        account: /^[a-z0-9]{5,8}$/,
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

export default {
    getUserList: () => {
        return {
            userlist
        }
    }
}