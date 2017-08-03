import React, { Component } from 'react';

import Title from './subpage/title';
import CityScreen from './subpage/cityScreen';
import SchoolList from './subpage/SchoolList';

import './style.less';

class Ment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: '招聘流程',
            name2: '宣讲会行程',
            name3: '常见问题'
        };
    }
    render(){
        return (
            <div>
                <Title name={this.state.name1}/>
                <div className="flow"></div>
                <Title name2={this.state.name2}/>
                <CityScreen/>
                <SchoolList/>
                <Title name3={this.state.name3}/>
                <div className="QA"></div>
            </div>
        )
    }
}

export default Ment