import Mock from 'mockjs'

import login from './login'

Mock.mock('/login/loginByUserName', login.loginByUserName)
Mock.mock('/login/getUserInfo', login.getUserInfo)
Mock.mock('/login/logout', login.logout)