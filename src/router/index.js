import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'

import Login from '@/view/login/login'
import Layout from '@/view/layout/layout'
import Home from '@/view/home/home'
import AuthorityManagement from '@/view/authority-management/authorityManagement'
import UserManagement from '@/view/user-management/userManagement'
import EquipmentManagement from '@/view/equipment-management/equipmentManagement'
import CompanyConfiguration from '@/view/company-configuration/companyConfiguration'
import InternalAddressBook from '@/view/internal-address-book/internalAddressBook'
import VisitorStatistics from '@/view/visitor-statistics/visitorStatistics'
import VisitorRecord from '@/view/visitor-record/visitorRecord'
import VisitorList from '@/view/visitor-list/visitorList'
import VisitorCard from '@/view/visitor-card/visitorCard'
import RealTimeSign from '@/view/real-time-sign/realTimeSign'
import SignStatistics from '@/view/sign-statistics/signStatistics'
import AttendanceRecord from '@/view/attendance-record/attendanceRecord'
import Blank from '@/view/blank/blank'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    component: Login
}, {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
        path: '/home',
        component: Home,
    }, {
        path: '/authorityManagement',
        component: AuthorityManagement,
    }, {
        path: '/userManagement',
        component: UserManagement,
    }, {
        path: '/equipmentManagement',
        component: EquipmentManagement,
    }, {
        path: '/companyConfiguration',
        component: CompanyConfiguration,
    }, {
        path: '/internalAddressBook',
        component: InternalAddressBook,
    }, {
        path: '/visitorStatistics',
        component: VisitorStatistics,
    }, {
        path: '/visitorRecord',
        component: VisitorRecord,
    }, {
        path: '/visitorList',
        component: VisitorList,
    }, {
        path: '/visitorCard',
        component: VisitorCard,
    }, {
        path: '/realTimeSign',
        component: RealTimeSign,
    }, {
        path: '/signStatistics',
        component: SignStatistics,
    }, {
        path: '/attendanceRecord',
        component: AttendanceRecord,
    }, {
        path: '/blank',
        component: Blank,
    }],
    meta: {
        login: true
    }
}]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    let token = Cookie.get("Token");
    let needAuth = to.matched.some(item => item.meta.login);
    if (!token && needAuth) {
        next({
            path: "/login"
        })
    } else {
        next()
    }
})

export default router