import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../view/layout/Layout'
import Login from '../view/login/Login'
import Home from '../view/home/Home'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    component: Login
}, {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
        path: '/home',
        component: Home,
    }]
}]

const router = new VueRouter({
    routes
})

export default router