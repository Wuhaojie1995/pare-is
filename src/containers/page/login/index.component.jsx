import React from 'react';
import './index.less';
import { observer } from 'mobx-react';
import { Input, Button, Checkbox } from 'antd';
import state from './index.stste';
import {setTitle} from '@utils';
@observer
class Index extends React.Component {
    componentDidMount() {
        // this.props.setTitle('登录 ');
        setTitle('登录');
        state.oninit();
    }
    render() {
        return (
            <div className='loginDIv'>
                <div className='loginText'>
                    <div className='loginText-left'>
                        <div className='InputContent-text'>
                            <Input size='large' placeholder='请输入账号' value={state.um} onChange={state.textOnchange} />
                        </div>
                        <div className='InputContent'>
                            <Input type='password' size='large' value={state.password} onChange={state.passWordOnchange} placeholder='请输入密码' />
                        </div>
                        <div className='InputContent-Checkbox'>
                            <Checkbox checked={state.checked} onChange={state.CheckboxOnChange} >记住密码</Checkbox>
                        </div>
                        <div className='InputContent'>
                            <Button onClick={state.BtnDenglu} type='primary' >登录</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Index;
