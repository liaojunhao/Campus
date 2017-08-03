import React,{Component} from 'react';

import './schoolmap.less'

class SchoolMap extends Component {
    back = (e) => {
        e.stopPropagation()
        this.props.history.goBack()
    }
    render(){
        return (
            <div className="model" onClick={this.back}>
                我是地图
            </div>
        )
    }

}

export default SchoolMap