import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

class HelloWorld extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <h1>这是首页</h1>
                    <ul>
                        <li><a href="/list.html">岗位列表</a></li>
                    </ul>
                <Footer></Footer>
            </div>
        )
    }
}
render(<HelloWorld />, document.getElementById('app'));