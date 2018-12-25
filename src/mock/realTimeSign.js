import Mock from 'mockjs'

let dynamicList = []
for (let i = 0; i < 10; i++) {
    dynamicList.push(Mock.mock({
        name: '@cname',
        department: Mock.Random.pick([
            "研发中心",
            "业务部",
            "财务部",
            "行政部",
        ]),
        work: Mock.Random.pick([
            "打卡",
            "未打卡"
        ]),
        afterwork: Mock.Random.pick([
            "打卡",
            "未打卡"
        ])
    }))
}

let signList = []
for (let i = 0; i < 10; i++) {
    signList.push(Mock.mock({
        name: "@cname",
        time: "@time",
    }))
}

export default {
    getDynamicList: () => {
        return {
            dynamicList
        }
    },
    getSignList: () => {
        return {
            signList
        }
    }
}