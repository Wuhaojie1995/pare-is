import { number } from 'prop-types';

class localMessage {
    getlocal = (str) => {
        try {
            if (window.Storage && window.localStorage && window.localStorage instanceof Storage) {
                //获取数据
                const localMessage = JSON.parse(window.localStorage.getItem(str)) || null;
                return localMessage;
            }
        }
        catch (error) {
            console.log('str', error);
        }
    }

    setlocal = (str, obj) => {
        try {
            if (window.Storage && window.localStorage && window.localStorage instanceof Storage) {
                //存入localStorage
                localStorage.setItem(str, JSON.stringify(obj));
            }
        }
        catch (error) {
            console.log('str', error);
        }
    }
    removelocal = (str) => {
        try {
            if (window.Storage && window.localStorage && window.localStorage instanceof Storage) {
                //删除指定localStorage
                localStorage.removeItem(str);
            }
        }
        catch (error) {
            console.log('str', error);
        }
    }
    //删除所有localStorage
    clearAllLocal = (str) => {
        try {
            if (window.Storage && window.localStorage && window.localStorage instanceof Storage) {

                localStorage.clear();
            }
        }
        catch (error) {
            console.log('str', error);
        }
    }
    //设置cookie
    setCookie = (name, value, liveMinutes) => {
        if (liveMinutes == undefined || liveMinutes == null) {
            liveMinutes = 60 * 1;
        }
        if (typeof (liveMinutes) != number) {
            liveMinutes = 60 * 1;//默认120分钟
        }
        var minutes = liveMinutes * 60 * 1000;
        var exp = new Date();
        exp.setTime(exp.getTime() + minutes + 8 * 3600 * 1000);
        //path=/表示全站有效，而不是当前也
        document.cookie = name + '=' + value + ';path=/;expires' + exp.toUTCString();

    }
    //获取cooking
    getCookie = (cname) => {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);

        }
        return '';
    }
    //删除所有Cooking
    clearAllCooking = () => {
        var keys = document.cookie.match(/[^=;]+(?=\+)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
            }
        }
    }
    //删除指定Cookie
    delCookie = (name) => {
        var exp = new Date();
        exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
        var cval = this.getCookie(name);
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();

    }




}
export default new localMessage();