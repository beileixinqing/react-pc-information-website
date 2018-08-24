import React, { Component } from 'react';
import './index.less';
import code from '../../images/code_download_text.png';

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

