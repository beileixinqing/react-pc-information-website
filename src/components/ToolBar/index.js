import React, { Component } from 'react';
import './index.less';
import code from '../../images/zhiku_qrcode.jpg';

export default class ToolBar extends Component {
    constructor(props){
        super(props);
        this.handleScrollToTop=this.handleScrollToTop.bind(this);
    }
    handleScrollToTop(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="tool-bar">
                <div className="tool-item">
                    <i className="iconfont icon-erweima"></i>
                    <div className="tool-item-hover code-hover">
                        <img src={code} alt=""/>
                        <p>扫码关注公众号</p>
                    </div>
                </div>
                <div className="tool-item" onClick={this.handleScrollToTop}>
                    <i className="iconfont icon-fanhuidingbu"></i>
                    <div className="tool-item-hover text-hover">
                        返回顶部
                    </div>
                </div>
            </div>
        );
    }
}

