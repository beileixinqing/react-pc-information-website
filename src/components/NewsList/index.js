import React, { Component } from 'react';
import './index.less';
import 'whatwg-fetch'

import NewsListItem from '../../components/NewsListItem';

export default class NewsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:0,
            size:10,
            totalPages:0,
            newsList: [],
            loadingText:'点击加载更多'
        };
        this.fetchNewsList=this.fetchNewsList.bind(this);
        this.fetchMoreList=this.fetchMoreList.bind(this);
    }
    fetchNewsList(){
        let _this=this;
        fetch(`http://120.77.215.34:9001/web/news/list?channelId=586b5112abb8aa1973d1a661&page=${_this.state.page}&size=${_this.state.size}`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                _this.setState({
                    newsList:res.content,
                    page:1,
                    totalPages:res.totalPages
                });
            });
        }).then(function(res){
            // console.log(res);
        });
    }
    fetchMoreList(){
        let _this=this;
        let page=_this.state.page+1;
        _this.setState({
            page:page
        });
        console.log(_this.state.page)
        if(_this.state.page<_this.state.totalPages){
            fetch(`http://120.77.215.34:9001/web/news/list?channelId=586b5112abb8aa1973d1a661&page=${_this.state.page}&size=${_this.state.size}`,{
                method:'GET',
                mode:'cors',
            }).then(function(response){
                return response.json().then(function(res){
                    let newsList=_this.state.newsList.concat(res.content);
                    _this.setState({
                        newsList:newsList
                    });
                });
            }).then(function(res){
                // console.log(res);
            });
        }else{
            _this.setState({
                loadingText:"加载完成"
            });
        }
    }
    componentDidMount(){
        this.fetchNewsList();
    }
    render() {
        const newsList=this.state.newsList;
        return (
            <div>
                {newsList.map((value,index) => {
                    return (<NewsListItem news={value} key={index} />)
                    })
                }
                <div className="btn-more transition" onClick={this.fetchMoreList}>{this.state.loadingText}</div>
            </div>
        );
    }
}

