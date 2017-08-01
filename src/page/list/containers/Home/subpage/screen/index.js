import React, { Component } from 'react';

import './screen.less';

class Screen extends Component {
    render() {
        return (
            <div className="screen">
                <dl className="city clearfix">
                    <dt>工作城市</dt>
                    <dd className="active">不限</dd>
                    <dd>深圳</dd>
                    <dd>广州</dd>
                    <dd>北京</dd>
                    <dd>重庆</dd>
                    <dd>成都</dd>
                </dl>
                <dl className="category clearfix">
                    <dt>职业类别</dt>
                    <dd className="active">不限</dd>
                    <dd>开发类</dd>
                    <dd>设计类</dd>
                    <dd>销售类</dd>
                    <dd>运维类</dd>
                    <dd>产品类</dd>
                    <dd>职能类</dd>
                    <dd>金融类</dd>
                </dl>
                <dl className="work clearfix">
                    <dt>工作分组</dt>
                    <dd className="active">不限</dd>
                    <dd>前线组</dd>
                    <dd>后勤组</dd>
                </dl>
                <dl className="group clearfix">
                    <dt>招聘类别</dt>
                    <dd className="active">不限</dd>
                    <dd>应届生</dd>
                    <dd>实习生</dd>
                </dl>
            </div>
        )
    }

}

export default Screen