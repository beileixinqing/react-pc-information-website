import React, { Component } from 'react';
import './index.less';

import Header from '../../components/Header';
import ProfessorList from '../../components/ProfessorList';
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
            result:"true",
            _isMounted:true
        };
        this.handleFetch.bind(this);
    }
    handleFetch(){
        // this.setState({
        //     result:"false"
        // })
        console.log("搜索结果为空")
    }
    /*componentWillMount(){
        this._isMounted = true
    }
    componentWillUnmount() {
        this._isMounted = false
    }*/
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
                            <div className="keyword-box">
                                <p><span className="keyword-highlight">{this.state.keyword}</span>相关文章</p>
                            </div>
                            <NewsList type="search" id={this.state.keyword} handleFetch={this.handleFetch}/>
                        </div>
                        <div className="right-box">
                            <ProfessorList/>
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

