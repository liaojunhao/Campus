import React, { Component } from 'react';
import './Flow.less';

class Flow extends Component {
    render() {
        return (
            <div>
                <ul className="flow clearfix">
                    <li>投递简历</li>
                    <li>网上申请</li>
                    <li>参加宣讲会</li>
                    <li>面试审批</li>
                    <li>发放offer</li>
                </ul>
            </div>
        )
    }
}

export default Flow