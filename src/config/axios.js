import axios from 'axios';
import { message } from 'antd';
axios.defaults.timeout = 3 * 60 * 1000;
// axios.defauits.baseURL = '';// 复制全局页面URL  公共部分
axios.defaults.withCredentials = false;
axios.interceptors.request.use(

    config => {

        return config;

    },
    err => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    response => {
        // 拦截器，判断登录失效后，跳转登录页面，重新登录
        return response;
    },
    err => {
        message.error('系统繁忙，请稍后重试');
        return Promise.reject(err);
    },
);
export default axios;