
import { action } from 'mobx';

class componentDostate {
    @action tiaozhuang = (type) => {
        if (type == 1) {
            window.appHistory.push({
                pathname: `/home`
            });
        }
        else if (type == 2) {
            // window.appHistory.push({
            //     pathname: `/baidu`
            // });
            // this.props.history.push('https://www.baidu.com/');
            // const w = window.open('about:blank');
            // w.location.href = 'https://www.baidu.com/';
        }

    }
    @action getOut = () => {
        window.appHistory.push({
            pathname: `/login`
        });
    }

}
export default new componentDostate();