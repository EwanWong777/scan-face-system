import Mock from 'mockjs'

let companylist = []
for (let i = 0; i < 10; i++) {
    companylist.push(Mock.mock({
        name: '@cword(3, 5)' + '公司',
        count: /\d{5}/,
    }))
}

export default {
    getCompanyList: () => {
        return {
            companylist
        }
    }
}