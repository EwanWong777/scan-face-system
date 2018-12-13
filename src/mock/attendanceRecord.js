import Mock from 'mockjs'

let recordlist = []
for (let i = 0; i < 10; i++) {
    recordlist.push(Mock.mock({
        staffName: '@cname',
        checkNumber: /[0-9]/,
        department: Mock.Random.pick([
            "研发中心",
            "财务部",
            "行政部"
        ]),
        useRobot: /\d{10}/,
        punchWay: Mock.Random.pick([
            "手动打卡",
            "正常打卡"
        ]),
        punchTime: '@datetime'
    }))
}

export default {
    getRecordList: () => {
        return {
            recordlist
        }
    }
}