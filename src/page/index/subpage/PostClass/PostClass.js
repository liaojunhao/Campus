import React, { Component } from 'react';

import './postClass.less';
class PostClass extends Component {
    render() {
        return (
            <div>
                <ul className="postClass clearfix iconfont">
                    <li>
                        <i className="icon-icon-test"></i>
                        <div>
                            <div>技术</div>
                            <span>web前端发开工程师</span>
                            <span>C++开发工程师</span>
                        </div>
                    </li>
                    <li>
                        <i className="icon-xiaoshou"></i>
                        <div>
                            <div>产品</div>
                            <span>web前端发开工程师</span>
                            <span>C++开发工程师</span>
                        </div>
                    </li>
                    <li>
                        <i className="icon-dengpao"></i>
                        <div>
                            <div>设计</div>
                            <span>web前端发开工程师</span>
                            <span>C++开发工程师</span>
                        </div>
                    </li>
                    <li>
                        <i className="icon-designsign"></i>
                        <div>
                            <div>销售</div>
                            <span>web前端发开工程师</span>
                            <span>C++开发工程师</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PostClass