import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
const root = document.getElementById('app');

// 公共样式
import '../../common/css/reset.css';

import App from './containers/App';


render(<App/>, root)