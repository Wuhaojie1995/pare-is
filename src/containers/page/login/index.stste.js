import { observable, action } from 'mobx';
import utils from './utils';
import { message, localMessage } from '@utils';

class componentDostate {

    @observable um = '';//账号
    @observable password = '';//密码
    @observable checked = false;
    @observable load = false;

    //修改账号
    @action textOnchange = (e) => {
        if (e) {
            this.um = e.target.value;
        }
        else {
            this.um = '';
        }
    }
    //修改密码
    @action passWordOnchange = (e) => {
        if (e) {
            this.password = e.target.value;
        }
        else {
            this.password = '';
        }
    }
    //修改密码
    @action CheckboxOnChange = (e) => {
        if (e) {
            this.checked = e.target.checked;
        }
        else {
            this.checked = false;
        }
    }

    @action BtnDenglu = () => {
        if (!this.CheckParm()) return;
        this.load = true;
        this.onCookie();
        // localMessage.setlocal('menuData', menuData);
        localMessage.setlocal('UM', this.um);
        window.appHistory.push({
            pathname: `/home`
        });


    }

    //验证登录参数
    @action CheckParm = () => {
        if (this.load) return; // c重复点击无效
        if (!this.um) {
            message.warning('请填写账号');
            return;
        }
        if (!this.password) {
            message.warning('请填写密码');
            return;
        }
        return true;

    }

    @action onCookie = () => {
        if (this.checked) {
            utils.setCookie('account', this.um);
            utils.setCookie('password', this.password);
            utils.setCookie('checked', this.checked);
        }
        else {
            utils.delCookie('password');
            utils.delCookie('checked');

        }
    }

    @action oninit = () => {
        this.um = '';
        this.password = '';
        this.load = false;
        this.checked = false;
        if (utils.getCookie('account')) {
            this.um = utils.getCookie('account');
        }
        if (utils.getCookie('password')) {
            this.password = utils.getCookie('password');
        }
        if (utils.getCookie('checked')) {
            this.checked = utils.getCookie('checked');
        }
    }

}
export default new componentDostate();