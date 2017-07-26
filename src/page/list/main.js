import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class List extends Component {
    render(){
        return (
            <div>
                <h1>这是列表页</h1>
                <a href="/index.html">首页</a>
            </div>
        )
    }
}

render(<List />, document.getElementById('app'));