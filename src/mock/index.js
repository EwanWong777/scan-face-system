import Mock from 'mockjs'

import login from './login'
import user from './user'

Mock.mock('/login/loginByUserName', login.loginByUserName)
Mock.mock('/login/getUserInfo', login.getUserInfo)
Mock.mock('/login/logout', login.logout)

Mock.mock('/user/getUserList', user.getUserList)