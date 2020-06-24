import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Lazy from '@c/lazyLoad';
const RoutsComponent = (props) => (
    <Switch>
        <Redirect exact strict from='/' to='/login' />
        <Route path='/login' exact component={Lazy('containers/page/login/index.component', props)} />
        <Route path='/home' exact component={Lazy('containers/page/home/index.component', props)} />
        <Redirect exact strict from='https://www.baidu.com/' to='/baidu'  />
    </Switch>
);
export default RoutsComponent;