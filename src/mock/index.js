import Mock from 'mockjs'

import login from './login'
import layout from './layout'
import userManagement from './userManagement'
import equipmentData from './equipmentData'
import companyConfiguration from './companyConfiguration'
import internalAddressBook from './internalAddressBook'
import visitorStatistics from './visitorStatistics'
import visitorRecord from './visitorRecord'
import visitorList from './visitorList'
import signStatistics from './signStatistics'
import realTimeSign from './realTimeSign'
import attendanceRecord from './attendanceRecord'

Mock.mock('/login/loginByUserName', login.loginByUserName)
Mock.mock('/login/getUserInfo', login.getUserInfo)
Mock.mock('/login/logout', login.logout)

Mock.mock('/layout/getCompanyList', layout.getCompanyList)

Mock.mock('/userManagement/getUserList', userManagement.getUserList)

Mock.mock('/equipmentData/getEquipmentData', equipmentData.getEquipmentData)

Mock.mock('/companyConfiguration/getCompanyConfiguration', companyConfiguration.getCompanyConfiguration)

Mock.mock('/internalAddressBook/getInternalAddressBook', internalAddressBook.getInternalAddressBook)

Mock.mock('/visitorStatistics/getRankingList', visitorStatistics.getRankingList)

Mock.mock('/visitorRecord/getVisitorRecord', visitorRecord.getVisitorRecord)

Mock.mock('/visitorList/getVisitorList', visitorList.getVisitorList)

Mock.mock('/realTimeSign/getDynamicList', realTimeSign.getDynamicList)
Mock.mock('/realTimeSign/getSignList', realTimeSign.getSignList)

Mock.mock('/signStatistics/getLateList', signStatistics.getLateList)
Mock.mock('/signStatistics/getWorkingList', signStatistics.getWorkingList)
Mock.mock('/signStatistics/getEarlyList', signStatistics.getEarlyList)

Mock.mock('/attendanceRecord/getRecordList', attendanceRecord.getRecordList)