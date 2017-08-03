import React,{Component} from 'react';

import ShoolLists from './ShoolLists';

export default class ShoolList extends Component{
    render(){
        return (
            <ul className="ShoolList">
                {
                    this.props.ShoolLit.map((item,index)=>(
                        <ShoolLists ShoolDate={item} key={index}/>
                    ))
                }
            </ul>
        )
    }
}