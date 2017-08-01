import React,{Component} from 'react';

export default class Product extends Component{
    render(){
        let {title,link,category,ReCategory,Number,Date,City} = this.props.List;
        return (
            <li className="clearfix">
                <span>{title}</span>
                <span>{category}</span>
                <span>{ReCategory}</span>
                <span>{Number}</span>
                <span>{City}</span>
                <span>{Date}</span>
            </li>
        )
    }
}