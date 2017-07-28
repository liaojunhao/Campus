import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Flow from './subpage/Flow';
import PostClass from './subpage/PostClass';

class HelloWorld extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <h1>这是首页</h1>
                <ul>
                    <li><a href="/list.html">投递简历</a></li>
                </ul>
                <Flow/>
                <PostClass/>
                <Footer></Footer>
            </div>
        )
    }
}
render(<HelloWorld />, document.getElementById('app'));