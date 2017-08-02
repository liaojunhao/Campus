import React, { Component } from 'react';

import './pagin.less';

class Pagination extends Component {
    render() {
        return (
            <div>
                <ul className="pagination clearfix">
                    <li><a href="">上一页</a></li>
                    <li className="active"><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a href="">6</a></li>
                    <li><a href="">下一页</a></li>
                </ul>
            </div>
        )
    }
}

export default Pagination