import React, { Component } from 'react';
import {getList} from '../../../../fetch/List/index';

import Products from '../../../../conmmons/Products/index';
import './List.less';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false,
            data: []
        };
    }
    render(){
        return (
            <div className="List">
                <Products List={this.state.data}/>
            </div>
        )
    }
    componentDidMount() {
        getList('深圳').then((res) => {
            if (res.data.length) {
                this.setState({
                    hasMore: res.hasMore,
                    data: res.data,
                });
            }
        })
    }
}

export default List