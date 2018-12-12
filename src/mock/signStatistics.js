import Mock from 'mockjs'

let latelist = []
for (let i = 0; i < 10; i++) {
    latelist.push(Mock.mock({
        name: '@cname',
        count: /\d{5}/,
        time: /\d{1,3}/,
    }))
}

export default {
    getLateList: () => {
        return {
            latelist
        }
    }
}