import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { createBrowserHistory } from 'history';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './index.less';
import Lazy from '@c/lazyLoad';
import Root from './page/root.component';
const defaultHistory = createBrowserHistory();
const history = defaultHistory;
window.appHistory = history;


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route  {...rest}
        render={props => <Component {...props} />}
    />
);
const App = ({ history }) => (

    <ConfigProvider locale={zhCN}>
        <Router history={history || defaultHistory}>
            <Switch>
                <Route path='/login' exact component={Lazy('containers/page/login/index.component')} />
                <PrivateRoute path='/' component={Root} />
            </Switch>
        </Router>
    </ConfigProvider>
);
export default App;