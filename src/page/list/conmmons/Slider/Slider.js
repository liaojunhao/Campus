import React, { Component } from 'react';

// 样式
import './slider.less';

import SliderItem from './SliderItem';
import SliderDots from './SliderDots';
import SliderArrows from './SliderArrows';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0,
        };
    }

    // 向前向后多少
    turn(n) {
        var _n = this.state.nowLocal + n;
        if(_n < 0) {
            _n = _n + this.props.items.length;
        }
        if(_n >= this.props.items.length) {
            _n = _n - this.props.items.length;
        }
        this.setState({nowLocal: _n});
    }

    // 开始自动轮播
    goPlay() {
        if(this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }

    // 暂停自动轮播
    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    // 组件渲染完成时候调用
    componentDidMount() {
        this.goPlay();
    }

    // 渲染组件
    render() {
        let count = this.props.items.length;

        let itemNodes = this.props.items.map((item, idx) => {
            return <SliderItem item={item} count={count} key={'item' + idx} />;
        });

        let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;

        let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;

        return (
            <div className="slider" onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
                <ul style={{
                    left: -100 * this.state.nowLocal + "%",
                    transitionDuration: this.props.speed + "s",
                    width: this.props.items.length * 100 + "%"
                }}>
                    {itemNodes}
                </ul>
                {this.props.arrows?arrowsNode:null}
                {this.props.dots?dotsNode:null}
            </div>
        );
    }
}

// getDefaultProps()：设置默认的props，也可以用dufaultProps设置组件的默认属性
Slider.defaultProps = {
    speed: 1,  // 切换图片时候的速度
    delay: 2,  // 图片停留的时间
    pause: true, // 需要自动轮播的时候，鼠标停留在图片上，是否暂停轮播
    autoplay: true, // 是否需要自动轮播
    dots: true, // 是否需要轮播下面的小点
    arrows: true, // 是否需要轮播的前后箭头
    items: [], // 轮播的内容
};
Slider.autoPlayFlag = null; // 加了一个自定义属性，用来存储定时器的返回值