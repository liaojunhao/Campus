import React, { Component } from 'react';
import {getSchool} from '../../../../fetch/School';

import ShoolLit from '../../../../conmmons/ShoolList';
import './style.less'

class SchoolList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            data: []
        };
    }
    componentDidMount() {
        getSchool('深圳').then((res) => {
            if (res.data.length) {
                this.setState({
                    success: res.success,
                    data: res.data,
                });
            }
        })
    }
    render(){
        return (
            <div className="schoolBox">
                    {/* list */}
                    <ShoolLit ShoolLit={this.state.data}/>
            </div>
        )
    }
}

export default SchoolList