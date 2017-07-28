import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Flow from './subpage/flow/Flow';
import PostClass from './subpage/PostClass/PostClass';
import DeliveryBtn from './subpage/delivery/deliveryBtn';

import './stylee.less'
import "../../common/iconCss/iconfont.css";

class HelloWorld extends Component {
    render(){
        return (
            <div className="box">
                <Header></Header>
                <DeliveryBtn/>
                <Flow/>
                <PostClass/>
                <Footer></Footer>
            </div>
        )
    }
}
render(<HelloWorld />, document.getElementById('app'));