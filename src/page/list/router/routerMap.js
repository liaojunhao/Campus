import React, { Component } from 'react'
import {
    HashRouter as Router,//路由容器 app
    Route,//是单条路由 app.get()
    Link,
    Switch
} from 'react-router-dom';

import Ment from '../containers/joblist/joblist';
import NotFound from '../containers/NotFound/404';
import Home from '../containers/Home/home';
import Datail from '../containers/Datail/datail';

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
                    <nav>
                        <ul>
                            <li><a href="/index.html">首页</a></li>
                            <li><Link to="/">校园职位</Link></li>
                            <li><Link to="/Ment">招聘流程</Link></li>
                            <li><Link to="/Datail">走进美联</Link></li>
                        </ul>
                    </nav>
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