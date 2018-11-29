import axios from 'axios'
import store from '@/store'
import {
    getToken
} from '@/util/auth'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 1000,
    headers: {}
});

service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (store.getters.token) {
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        config.headers['X-Token'] = getToken()
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service