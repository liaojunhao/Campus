import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <nav>
                {/*logo*/}
                <h1><img src="" alt=""/></h1>
                <ul>
                    <li><a href="">首页</a></li>
                    <li><a href="/list.html">校园职位</a></li>
                    <li><a href="/list.html#/Ment">招聘流程</a></li>
                    <li><a href="/list.html#/Datail">走进美联</a></li>
                    <li><a href="/list.html#/Datail">校园福利</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header