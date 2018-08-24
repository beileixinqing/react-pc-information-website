import React, { Component } from 'react';
import './index.less';

import Header from '../../components/Header';
import HotNewsList from '../../components/HotNewsList';
import NewsList from '../../components/NewsList';
import HotTags from '../../components/HotTags';
import Follow from '../../components/Follow';
import ToolBar from '../../components/ToolBar';
import Footer from '../../components/Footer';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:this.props.match.params.id,
        };
    }
    componentWillReceiveProps(nextProps) {
        let _this=this;
        if (nextProps.match.params.id !== this.props.match.params.id) {
            _this.setState({
                keyword:nextProps.match.params.id
            })
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="index-container">
                        <div className="left-box">
                            <div>
                                <div className="keyword-box">
                                    <div><span className="keyword-highlight">{this.state.keyword}</span>相关文章</div>
                                </div>
                                <NewsList type="search" id={this.state.keyword} />
                            </div>
                        </div>
                        <div className="right-box">
                            <HotNewsList channelId={this.props.match.params.channelId}/>
                            <HotTags channelId={this.props.match.params.channelId}/>
                            <Follow/>
                        </div>
                    </div>
                </div>
                <ToolBar/>
                <Footer/>
            </div>
        );
    }
}

