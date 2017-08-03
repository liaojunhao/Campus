import React,{Component} from 'react';
import {Link} from 'react-router-dom'

const IMAGE = require('../../../images/schoolicon.jpg')

export default class ShoolLists extends Component{
    transform(obj) {
        var arr = [];
        for(var item in obj){
            arr.push(obj[item]);
        }
        return arr;
    }

    render(){
        let {title,contact,add,date,imgs,Lit,id} = this.props.ShoolDate;
        var Contact =  this.transform(contact);
        var Date = this.transform(date);

        return (
            <li className="clearfix">
                <div className="photo">
                    <img src={IMAGE} alt={title}/>
                </div>
                <div className="scRight">
                    <h2>{title}</h2>
                    <div>
                        <span>联系：</span>
                        <span>{Contact[0]}</span>
                        <span>{Contact[1]}</span>
                    </div>
                    <div><span>地址：</span><span>{add}</span></div>
                    <div><span>时间：</span><span>{Date[0]}</span><span>{Date[1]}</span>-<span>{Date[2]}</span></div>
                    <Link to={{pathname: `/schoolMap/${id}`, state: { modal: true , Lit:Lit}}}>校园地图</Link>
                </div>
            </li>
        )
    }
}