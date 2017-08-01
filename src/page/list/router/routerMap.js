import React, { Component } from 'react'
import {
    HashRouter as Router,//路由容器 app
    Route,//是单条路由 app.get()
    Link,
    NavLink,
    Switch
} from 'react-router-dom';

import Ment from '../containers/joblist/joblist';
import NotFound from '../containers/NotFound/404';
import Home from '../containers/Home/home';
import Datail from '../containers/Datail/datail';

import Slider from '../conmmons/Slider/Slider';

// 导航样式
import './nav.less';

const IMAGE_DATA = [
    {
        src: require('../images/banner1.jpg'),
        alt: 'images-1',
    },
    {
        src: require('../images/banner2.jpg'),
        alt: 'images-2',
    }
];

class RoutMap extends Component {
    constructor(){
        super();
        this.state = {
            initDone: false
        };
    }
    render() {
        return (
            <Router>
                <div>
                    <nav className="nav">
                        <ul className="clearfix">
                            <h1 className="clearfix">
                                <span></span>
                                <div>校园招聘</div>
                            </h1>
                            <li><a href="/index.html">首页</a></li>
                            <li><NavLink exact to="/">校园职位</NavLink></li>
                            <li><NavLink to="/Ment">招聘流程</NavLink></li>
                            <li><NavLink to="/Datail">走进美联</NavLink></li>
                            <li><a>校园福利</a></li>
                        </ul>
                    </nav>
                    <Slider items={IMAGE_DATA} speed={1.2} delay={5} pause={true} autoplay={true} dots={true} arrows={false}/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/Ment" component={Ment}/>
                            <Route path="/Datail" component={Datail}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
    // 组件第一次加载时渲染完成的事件，一般在此获取网络数据。实际开始项目开发时，会经常用到。
    componentDidMount() {
        this.setState({
            initDone: true
        })
    }
}

export default RoutMap