import Mock from 'mockjs'

let latelist = []
for (let i = 0; i < 10; i++) {
    latelist.push(Mock.mock({
        name: '@cname',
        count: /\d{5}/,
        time: /\d{1,3}/,
    }))
}

let workinglist = []
for (let i = 0; i < 10; i++) {
    workinglist.push(Mock.mock({
        name: '@cname',
        count: /\d{5}/,
        time: /\d{1,3}/,
    }))
}

let earlylist = []
for (let i = 0; i < 10; i++) {
    earlylist.push(Mock.mock({
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
    },
    getWorkingList: () => {
        return {
            workinglist
        }
    },
    getEarlyList: () => {
        return {
            earlylist
        }
    }
}