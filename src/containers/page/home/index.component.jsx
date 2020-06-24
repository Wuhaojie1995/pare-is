import React from 'react';
import './index.less';
import { DownOutlined } from '@ant-design/icons';
const data = [
    {
        title: 'Java 提取和删除照片图片 Exif GPS 等隐私信息',
        centent: '照片图片 Exif 通过手机相机或者数码相机拍摄的照片都带有 Exif 元数据信息，比如下面这张照片： 它的 Exif 信息为： 1Root: 2 ImageWi',
        time: '2020-06-22',
        pinglun: '12',
        liulan: '22'
    }, {
        title: 'Java 提取和删除照片图片 Exif GPS 等隐私信息',
        centent: '照片图片 Exif 通过手机相机或者数码相机拍摄的照片都带有 Exif 元数据信息，比如下面这张照片： 它的 Exif 信息为： 1Root: 2 ImageWi',
        time: '2020-06-22',
        pinglun: '12',
        liulan: '22'
    }, {
        title: 'Java 提取和删除照片图片 Exif GPS 等隐私信息',
        centent: '照片图片 Exif 通过手机相机或者数码相机拍摄的照片都带有 Exif 元数据信息，比如下面这张照片： 它的 Exif 信息为： 1Root: 2 ImageWi',
        time: '2020-06-22',
        pinglun: '12',
        liulan: '22'
    }, {
        title: 'Java 提取和删除照片图片 Exif GPS 等隐私信息',
        centent: '照片图片 Exif 通过手机相机或者数码相机拍摄的照片都带有 Exif 元数据信息，比如下面这张照片： 它的 Exif 信息为： 1Root: 2 ImageWi',
        time: '2020-06-22',
        pinglun: '12',
        liulan: '22'
    }, {
        title: 'Java 提取和删除照片图片 Exif GPS 等隐私信息',
        centent: '照片图片 Exif 通过手机相机或者数码相机拍摄的照片都带有 Exif 元数据信息，比如下面这张照片： 它的 Exif 信息为： 1Root: 2 ImageWi',
        time: '2020-06-22',
        pinglun: '12',
        liulan: '22'
    }
];
class RootComponent extends React.Component {
    state = {
        offsetHeight: 0
    }

    componentDidMount() {
        this.props.setTitle('首页');
        this.setState({
            offsetHeight: this.refs.DownOutlined.offsetHeight
        });
    }
    taskSalePlanAndActual = () => {

        if (document.documentElement.scrollTop == this.state.offsetHeight) {
            clearInterval(this.salePlanAndActualTimer);

        } else {
            if (
                document.documentElement.scrollTop > this.state.offsetHeight
            ) {
            } else {
                document.documentElement.scrollTop += 45;
            }
        }
    }
    DownOutlined = () => {
        this.salePlanAndActualTimer = setInterval(this.taskSalePlanAndActual, 50);

    }
    render() {
        return (
            <div className='home' ref='salePlanAndActualtDiv'>
                <div className='Header' ref='DownOutlined'>
                    <div className='header-title'>
                        <h1 className='header-title-h1'>  武浩杰的个人博客</h1>
                        <h2 className='header-title-h2'>前端开发工作者</h2>
                        <DownOutlined className='DownOutlined' onClick={this.DownOutlined} />
                    </div>

                </div>
                <div className='home-one'>
                    {this.renderMapDiv(data)}
                </div>
            </div>
        );
    }

    renderMapDiv = (key) => {
        return key.map(item => {
            return <div className='home-one-content'>
                <h1>{item.title}</h1>
                <span>{item.centent} </span>
                <div className='home-one-content-bottom'>
                    <span>{item.time}</span>
                    <span>评论{item.pinglun}</span>
                    <span>浏览{item.liulan}</span>
                </div>
            </div>;
        });
    }
}
export default RootComponent;