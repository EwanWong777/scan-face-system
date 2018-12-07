import Mock from 'mockjs'

let internalAddressBook = []
for (let i = 0; i < 10; i++) {
    internalAddressBook.push(Mock.mock({
        account: /\d{10}/,
        name: '@cname',
        phoneNumber: /^1[34578]\d{9}$/,
        position: Mock.Random.pick([
            "经理",
            "员工",
            "总监",
            "老板",
        ]),
        department: Mock.Random.pick([
            "研发中心",
            "业务部",
            "财务部",
            "行政部",
        ]),
        photo: /[0-9]/,
    }))
}

export default {
    getInternalAddressBook: () => {
        return {
            internalAddressBook
        }
    }
}