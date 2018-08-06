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

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword:this.props.match.params.id,
            result:"true",
            _isMounted:true
        };
        this.handleFetch = this.handleFetch.bind(this)
    }
    handleFetch(status){
        console.log(status)
        let _this=this;
        _this.setState({
            result:status
        })
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
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.result !== nextState.result) {
            return true;
        }
        return true
    }
    render() {
        let result=null;
        if(this.state.result==="true"){
            result=<div>
                <div className="keyword-box">
                    <div><span className="keyword-highlight">{this.state.keyword}</span>相关文章</div>
                </div>
                <NewsList type="search" id={this.state.keyword} handleFetch={this.handleFetch}/>
            </div>
        }else{
            result=<div>
                <div className="keyword-box">
                    <div>暂无 <span className="keyword-highlight">{this.state.keyword}</span>相关文章</div>
                </div>
            </div>
        }
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="index-container">
                        <div className="left-box">
                            {result}
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

