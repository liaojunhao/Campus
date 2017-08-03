import React, { Component } from 'react';

import './Title.less';

class Titel extends Component {
    render(){
        return (
            <div className="titBg">
                {
                    this.props.name==='招聘流程' ? this.props.name : this.props.name2 ==='宣讲会行程' ? this.props.name2 : this.props.name3
                }
            </div>
        )
    }
}

export default Titel