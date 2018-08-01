import React, { Component } from 'react';
import './index.less';
import 'whatwg-fetch'

import NewsListItem from '../../components/NewsListItem';
import loading from '../../images/loading.gif';
import channelId from '../../config/channel'

export default class NewsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:0,
            size:10,
            totalPages:0,
            newsList: [],
            loadingText:'点击加载更多',
            loading:true
        };
        this.fetchNewsList=this.fetchNewsList.bind(this);
        this.fetchMoreList=this.fetchMoreList.bind(this);
    }
    fetchNewsList(id,type){
        let _this=this;
        if(type==='pub'){
            fetch(`http://120.77.215.34:9001/web/news/list_by_follow?pubId=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
                method:'GET',
                mode:'cors',
            }).then(function(response){
                _this.setState({
                    loading:false
                })
                return response.json().then(function(res){
                    _this.setState({
                        newsList:res.content,
                        totalPages:res.totalPages
                    });
                });
            }).then(function(res){
                // console.log(res);
            });
        }else if(type==='index'){
            fetch(`http://120.77.215.34:9001/web/news/list?channelId=${channelId.dev}&page=${_this.state.page}&size=${_this.state.size}`,{
                method:'GET',
                mode:'cors',
            }).then(function(response){
                _this.setState({
                    loading:false
                })
                return response.json().then(function(res){
                    _this.setState({
                        newsList:res.content,
                        totalPages:res.totalPages
                    });
                });
            }).then(function(res){
                // console.log(res);
            });
        }else if(type==='tag'){
            fetch(`http://120.77.215.34:9001/web/news/list_by_tag?channelId=${channelId.dev}&tag=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
                method:'GET',
                mode:'cors',
            }).then(function(response){
                _this.setState({
                    loading:false
                })
                return response.json().then(function(res){
                    _this.setState({
                        newsList:res.content,
                        totalPages:res.totalPages
                    });
                });
            }).then(function(res){
                // console.log(res);
            });
        }else if(type==='search'){
            fetch(`http://120.77.215.34:9001/web/news/search?q=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
                method:'GET',
                mode:'cors',
            }).then(function(response){
                _this.setState({
                    loading:false
                })
                return response.json().then(function(res){
                    _this.setState({
                        newsList:res.content,
                        totalPages:res.totalPages
                    });
                });
            }).then(function(res){
                // console.log(res);
            });
        }
    }
    fetchMoreList(){
        let _this=this;
        let page=_this.state.page+1;
        let id=this.props.id;
        let type=this.props.type;
        if(type==='pub'){
            _this.setState({
                page:page
            },function () {
                if(_this.state.page<_this.state.totalPages){
                    fetch(`http://120.77.215.34:9001/web/news/list_by_follow?pubId=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
            });
        }else if(type==='index'){
            _this.setState({
                page:page
            },function () {
                if(_this.state.page<_this.state.totalPages){
                    fetch(`http://120.77.215.34:9001/web/news/list?channelId=${channelId.dev}&page=${_this.state.page}&size=${_this.state.size}`,{
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
            });
        }else if(type==='tag'){
            _this.setState({
                page:page
            },function () {
                if(_this.state.page<_this.state.totalPages){
                    fetch(`http://120.77.215.34:9001/web/news/list_by_tag?channelId=${channelId.dev}&tag=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
            });
        }else if(type==='search'){
            _this.setState({
                page:page
            },function () {
                if(_this.state.page<_this.state.totalPages){
                    fetch(`http://120.77.215.34:9001/web/news/search?q=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
                        _this.setState({
                            loading:true
                        })
                    });
                }else{
                    _this.setState({
                        loadingText:"加载完成"
                    });
                }
            });
        }
    }
    componentDidMount(){
        this.fetchNewsList(this.props.id,this.props.type);
    }
    componentWillReceiveProps(nextProps) {
        let _this=this;
        if (nextProps.id !== this.props.id||nextProps.type !== this.props.type) {
            _this.fetchNewsList(nextProps.id,nextProps.type);
        }
    }
    render() {
        const newsList=this.state.newsList;
        if(this.props.type==='tag'||this.props.type==='search'){
            let keyword=this.props.id;
            newsList.filter((value,index) => {
                var re =new RegExp(keyword,"g");
                value.title=value.title.replace(re, `<span class="keyword">${keyword}</span>`);
            })
        }
        let list=null;
        if(this.state.loading===true){
            list=<div className="text-center"><img src={loading} alt=""/> 加载中 </div>
        }else{
            list=<div>
                {newsList.map((value,index) => {
                    return (<NewsListItem news={value} key={index} />)
                })
                }
                <div className="btn-more transition" onClick={this.fetchMoreList}>{this.state.loadingText}</div>
            </div>
        }
        return (
            <div>
                {list}
                {/*{newsList.map((value,index) => {*/}
                    {/*return (<NewsListItem news={value} key={index} />)*/}
                    {/*})*/}
                {/*}*/}
                {/*<div className="btn-more transition" onClick={this.fetchMoreList}>{this.state.loadingText}</div>*/}

            </div>
        );
    }
}

