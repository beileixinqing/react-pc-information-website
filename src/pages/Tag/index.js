import React, { Component } from 'react';
import './index.less';

import Header from '../../components/Header';
import ProfessorList from '../../components/ProfessorList';
import HotNewsList from '../../components/HotNewsList';
import NewsList from '../../components/NewsList';
import HotTags from '../../components/HotTags';
import Follow from '../../components/Follow';
import ToolBar from '../../components/ToolBar';
import Footer from '../../components/Footer';

export default class Tag extends Component {
    constructor(props){
        super(props);
        this.state = {
            tag:this.props.match.params.tag
        };
    }
    componentWillReceiveProps(nextProps) {
        let _this=this;
        if (nextProps.match.params.tag !== this.props.match.params.tag) {
            _this.setState({
                tag:nextProps.match.params.tag
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
                            <div className="tag-box">
                                <p><span className="tag-highlight">{this.state.tag}</span>相关文章</p>
                            </div>
                            <NewsList type="tag" id={this.state.tag}/>
                        </div>
                        <div className="right-box">
                            <ProfessorList/>
                            <HotNewsList/>
                            <HotTags/>
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

