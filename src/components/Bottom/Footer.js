import React, { Component } from 'react';
import './footer.less';

export default class Footer extends Component{
    constructor(props){
        super();
    }
    render() {
        return (
            <div className="gogog">
                <div className="content clearfix">
                    <h3></h3>
                    <p>© 2016 www.1200.com.cn 粤ICP备11015476号 京公网安备110105013401号<br/>
                        京ICP证110318号新出网证(京)字242号 全国统一客服电话：4006-345-678
                    </p>
                    <ul className="clearfix">
                        <li><a href="">美联官网</a></li>
                        <li><a href="">公司介绍</a></li>
                        <li><a href="">免责声明</a></li>
                        <li><a href="">隐私政策</a></li>
                        <li><a href="">联系我们</a></li>
                    </ul>
                </div>

            </div>
        )
    }

}