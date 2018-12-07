import Mock from 'mockjs'

import login from './login'
import userManagement from './userManagement'
import equipmentData from './equipmentData'
import companyConfiguration from './companyConfiguration'

Mock.mock('/login/loginByUserName', login.loginByUserName)
Mock.mock('/login/getUserInfo', login.getUserInfo)
Mock.mock('/login/logout', login.logout)

Mock.mock('/userManagement/getUserList', userManagement.getUserList)

Mock.mock('/equipmentData/getEquipmentData', equipmentData.getEquipmentData)

Mock.mock('/companyConfiguration/getCompanyConfiguration', companyConfiguration.getCompanyConfiguration)