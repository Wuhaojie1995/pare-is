import React from 'react';
import { Layout } from 'antd';
import Routes from '@c/routes';
import { setTitle } from '@utils';
import './index.less';
import { Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
class RootComponent extends React.Component {
    state = {
        buttonType: false,
        key:0
    }

    componentDidMount(){
        window.addEventListener('scroll', this.bindHandleScroll);
    }
    setTitle(t) {
        setTitle(t);
    }
    changeMenu = () => {
        console.log('2222');
        
        this.setState({
            buttonType: !this.state.buttonType
        });
        console.log(this.state.buttonType);
        
    }

    bindHandleScroll = (e) => {
      
        
        // 滚动的高度(兼容多种浏览器)
        const scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);
        this.setState({
            key: scrollTop
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }
    render() {
        return (
            <div className='rootIndex'>
                <Button icon={<UnorderedListOutlined />} className={this.state.key > 700 ? 'side__menu--edge' : 'rootButton'} onClick={this.changeMenu} >MENU</Button>
                <div className={this.state.buttonType ? 'side__main_show' : 'side__main'}>
                    <div className='side__bg' onClick={this.changeMenu} >
                    </div>
                    <div className='side__panel'>
                    </div>
                </div>
                <Layout className='layout'>
                    <Routes {...this.props} setTitle={this.setTitle} />
                </Layout>
            </div >
        );
    }
}
export default RootComponent;