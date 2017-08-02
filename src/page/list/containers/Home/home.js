import React, { Component } from 'react';

// 列表页面子组件
import List from './subpage/List/List';
import Screen from './subpage/screen';
import Pagination from './subpage/Pagination';

import './home.less';

class Home extends Component {

    componentWillMount() {
      // 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
    }
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
                <Pagination/>
            </div>
        )
    }
}

export default Home