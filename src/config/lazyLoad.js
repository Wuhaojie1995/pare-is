import React from 'react';
import Loadable from '@loadable/component';
import Loading from '@coms/loading/index.component';
export default (path, props) => {
    const AsyncPage = Loadable(() => import(`@/${path}`), { fallback: <Loading /> });
    return class extends React.Component {
        render() {
            return (
                <AsyncPage {...props} />
            );
        }
    }
};