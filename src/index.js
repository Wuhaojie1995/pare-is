import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/index';
import * as serviceWorker from './serviceWorker';
window.renderFp = (domId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(domId)
    );
    serviceWorker.unregister();
};
window.unmountFp = (Id) => {
    ReactDOM.unmountComponentAtNode(Id);
};

