import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

class HelloWorld extends Component {
    render(){
        return (
            <div>
                <h1>这是首页</h1>
                <Header></Header>
                <a href="/list.html">岗位列表</a>
                <Footer></Footer>
            </div>
        )
    }
}
render(<HelloWorld />, document.getElementById('app'));