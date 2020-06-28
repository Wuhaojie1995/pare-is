import React from 'react';
import './index.less';
import state from './index.state';
import { Menu } from 'antd';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
class App extends React.Component {
    state = {
        current: '1'
    };
    handleClick = e => {
        this.setState({
            current: e.key
        });
        state.tiaozhuang(e.key);
    };
    render() {
        return (
            <div className='header'>
                <div className='header-left'></div>
                <div className='header-menu'>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal'>
                        <Menu.Item key='1'>首页</Menu.Item>
                        <Menu.Item key='2'>首页2</Menu.Item>
                        <Menu.Item key='3'>首页3</Menu.Item>
                    </Menu>
                </div>
                <div className='header-right'>
                    <div className='herder-user'>
                        <span> <UserOutlined /></span>
                        <span>武浩杰</span>
                    </div>
                    <div className='herder-out' onClick={state.getOut}>
                        <PoweroffOutlined />
                    </div>

                </div>
            </div>
        );
    }
}
export default App;