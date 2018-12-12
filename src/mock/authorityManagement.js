import Mock from 'mockjs'

let userlist = []
for (let i = 0; i < 10; i++) {
    userlist.push(Mock.mock({
        avatar: Mock.Random.image('28X28'),
        name: '@cname',
        phoneNumber: /^1[34578]\d{9}$/,
        email: '@email',
        registerTime: '@datetime'
    }))
}

export default {
    getUserList: () => {
        return {
            userlist
        }
    }
}