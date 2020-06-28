import React from 'react';
import './index.less';
import { HeartFilled, AlipayCircleOutlined, TaobaoOutlined } from '@ant-design/icons';
class RootComponent extends React.Component {

    render() {
        return (
            <div className='indexBottom' >
                <div className='wrapper'>
                    <div>
                        <AlipayCircleOutlined style={{ fontSize: '25px' }} />
                        <TaobaoOutlined  style={{ fontSize: '25px',marginLeft:'15px' }}/>
                    </div>
                    <div>
                        <span>@2020 Casual的个人博客</span> <HeartFilled className='HeartFilled' style={{ color: 'red' }} />
                    </div>
                </div>

            </div>
        );
    }

}
export default RootComponent;