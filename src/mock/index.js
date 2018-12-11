import Mock from 'mockjs'

import login from './login'
import userManagement from './userManagement'
import equipmentData from './equipmentData'
import companyConfiguration from './companyConfiguration'
import internalAddressBook from './internalAddressBook'
import visitorStatistics from './visitorStatistics'
import visitorRecord from './visitorRecord'
import visitorList from './visitorList'
import visitorCard from './visitorCard'

Mock.mock('/login/loginByUserName', login.loginByUserName)
Mock.mock('/login/getUserInfo', login.getUserInfo)
Mock.mock('/login/logout', login.logout)

Mock.mock('/userManagement/getUserList', userManagement.getUserList)

Mock.mock('/equipmentData/getEquipmentData', equipmentData.getEquipmentData)

Mock.mock('/companyConfiguration/getCompanyConfiguration', companyConfiguration.getCompanyConfiguration)

Mock.mock('/internalAddressBook/getInternalAddressBook', internalAddressBook.getInternalAddressBook)

Mock.mock('/visitorStatistics/getRankingList', visitorStatistics.getRankingList)

Mock.mock('/visitorRecord/getVisitorRecord', visitorRecord.getVisitorRecord)

Mock.mock('/visitorList/getVisitorList', visitorList.getVisitorList)

Mock.mock('/visitorCard/getVisitorCard', visitorCard.getVisitorCard)