import React, { Component } from 'react';
import './header.less';

class Header extends Component {
    constructor(){
        super();
        this.state = {isShow:true}
    }
    render(){
        return (
            <nav className="nav clearfix">
                {/*logo*/}
                <h1 className="clearfix">
                    <img src={require('./images/LOGO-black.png')} alt="美联物业"/><span>校园招聘</span>
                </h1>
                <ul className="clearfix">
                    <li className={this.state.isShow?'active':''}><a href="">首页</a></li>
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