import React, { Component } from 'react';

// 列表页面子组件
import List from './subpage/List/List';
import Screen from './subpage/screen';

import './home.less';

class Home extends Component {

    render(){
        return (
            <div>
                <Screen/>
                <div className="ListTitle clearfix">
                    <div>职位名称</div>
                    <div>职业类别</div>
                    <div>工作地点</div>
                    <div>招聘人数</div>
                    <div>招聘类别</div>
                    <div>发布时间</div>
                </div>
                <List/>
                <h2>分页组件</h2>
            </div>
        )
    }
}

export default Home