import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Header from '../../components/header/header';
import Footer from '../../components/Bottom/Footer'

import Flow from './subpage/flow/Flow';
import PostClass from './subpage/PostClass/PostClass';
import DeliveryBtn from './subpage/delivery/deliveryBtn';

import './stylee.less'
import "../../common/iconCss/iconfont.css";
import "./reset.css";

class App extends Component {
    render(){
        return (
            <div className="box">
                <Header/>
                <DeliveryBtn/>
                <Flow/>
                <PostClass/>
                <Footer/>
            </div>
        )
    }
}
render(<App />, document.getElementById('app'));