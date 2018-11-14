import Mock from 'mockjs'

import login from './login'

Mock.mock('/login', login.loginByUserName)