import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

// 公共组件
import Header from '../../components/header/header';
import Footer from '../../components/Bottom/Footer'

// 公共样式
import "../../common/css/reset.css"; // 重置CSS
import "../../common/iconCss/iconfont.css"; // 图标字体CSS

// 首页的组件
import Flow from './subpage/flow/Flow';
import PostClass from './subpage/PostClass/PostClass';
import DeliveryBtn from './subpage/delivery/deliveryBtn';

import './stylee.less'; // 首页样式

class App extends Component {
    render(){
        return (
            <div className="box">
                <Header/>
                <DeliveryBtn/>
                <Flow/>
                <PostClass/>
                <Footer/>
            </div>
        )
    }
}
render(<App />, document.getElementById('app'));