import React,{Component} from 'react';
import Product from './Product';

export default class Products extends Component{
    render(){
        return (
            <ul className="products">
                {
                    this.props.List.map((item,index)=>(
                        <Product List={item} key={index}/>
                    ))
                }
            </ul>
        )
    }
}