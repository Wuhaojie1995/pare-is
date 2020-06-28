class Utils {
    setCookie = (name, value) => {
        let Days = 365;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days + 24 * 60 * 60 * 1000);
        //path=/表示全站有效，而不是当前也
        document.cookie = name + '=' + value + ';expires' + exp.toUTCString();

    }
    getCookie = (name) => {
        let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
        if (arr != null) {
            return (arr[2]);
        }
        return null;
    }

    delCookie = (name) => {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.getCookie(name);
        if (cval != null) {
            document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
        }
    }

}
export default new Utils();