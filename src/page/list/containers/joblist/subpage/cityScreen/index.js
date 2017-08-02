import React, { Component } from 'react';

import './style.less';

class CityScreen extends Component {
    render(){
        return (
            <div>
                <ul className="cityscreen">
                    <li><a href="">全部</a></li>
                    <li><a href="">深圳</a></li>
                    <li><a href="">广州</a></li>
                    <li><a href="">北京</a></li>
                    <li><a href="">成都</a></li>
                    <li><a href="">重庆</a></li>
                </ul>
            </div>
        )
    }
}

export default CityScreen