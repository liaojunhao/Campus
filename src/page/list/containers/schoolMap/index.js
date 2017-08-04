import React,{Component} from 'react';
import {getSchool} from '../../fetch/School';

import './schoolmap.less'

class SchoolMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            URL:this.props.match.params.id,
            data:[]
        }
    }
    definModel = (e) => {
        var Top = document.body.scrollTop;
        let ModDOM = this.refs.model;
        ModDOM.style.height = document.documentElement.clientHeight + 6 + 'px'
        ModDOM.style.top = Top + 'px'
        document.body.style.overflow = 'hidden'
    }
    back = (e) => {
        let target = e.srcElement||e.target

        if (target.className !== 'model') {
            return
        }
        e.stopPropagation()
        this.props.history.goBack()
        document.body.style.overflow = ''
    }
    transform = (obj) => {
        var arr = [];
        for(var item in obj){
            arr.push(obj[item]);
        }
        return arr;
    }

    MAP = (option) => {
        var BMap = window.BMap
        var map = new BMap.Map(this.refs.map); // 创建Map实例
        map.centerAndZoom(new BMap.Point(option[0],option[1]), 15); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

        map.setCurrentCity("合肥市"); // 设置地图显示的城市 此项是必须设置的

        var marker = new BMap.Marker(new BMap.Point(option[0],option[1])); // 创建点
        map.addOverlay(marker);
    }

    componentDidMount() {
        this.definModel()
        getSchool('深圳').then((res) => {
            if (res.data.length) {
                let Data = null
                res.data.forEach((item,index) => {
                    if(item.id == this.state.URL){
                        Data = this.transform(item.Lit)
                    }
                })
                this.setState({
                    data: Data
                })
                this.MAP(this.state.data)
            }
        })
    }
    render(){
        return (
            <div className="model" onClick={this.back} ref="model">
                <div className="modelContent">
                    <div id="map" ref="map"></div>
                </div>
            </div>
        )
    }
}

export default SchoolMap