import React, { Component } from 'react';
import {
    HashRouter as Router,//路由容器 app
    Route,//是单条路由 app.get()
    Link,
    Switch
} from 'react-router-dom';

import Ment from './joblist/joblist';
import Home from './Home/home';
import Datail from './Datail/datail';
import NotFound from './NotFound/404';
import Footer from '../../../components/footer/footer';

class App extends Component {
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
                    {
                        this.state.initDone
                        ? <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/Ment" component={Ment}/>
                                <Route path="/Datail" component={Datail}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                        :<div>加载中...</div>
                    }
                    <Footer/>
                </div>
            </Router>
        )
    }
    // 组件第一次加载时渲染完成的事件，一般在此获取网络数据。实际开始项目开发时，会经常用到。
    componentDidMount() {
        // 一开始默认所有参数都是'不限'
        let cityName = '不限';
        let opName = '不限';
        let workName = '不限';
        let cat = '不限';
        // 把用户的选择存储到Redux中

        this.setState({
            initDone: true
        })
    }
}
export default App
