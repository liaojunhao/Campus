import React, { Component } from 'react';

import Title from './subpage/title';
import CityScreen from './subpage/cityScreen';

import './style.less';

class Ment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: '招聘流程',
            name2: '宣讲会行程'
        };
    }
    render(){
        return (
            <div>
                <Title name={this.state.name1}/>
                <div className="flow"></div>
                <Title name2={this.state.name2}/>
                <CityScreen/>
            </div>
        )
    }
}

export default Ment