import Mock from 'mockjs'

let rankingList = []
for (let i = 0; i < 10; i++) {
    rankingList.push(Mock.mock({
        name: '@cname',
        count: /\d{5}/,
    }))
}

export default {
    getRankingList: () => {
        return {
            rankingList
        }
    }
}