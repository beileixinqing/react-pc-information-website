import React, { Component } from 'react';
import './index.less';
import 'whatwg-fetch'
import host from '../../config/host'

import NewsListItem from '../../components/NewsListItem';
import loading from '../../images/loading.gif';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:0,
            size:10,
            totalPages:0,
            newsList: [],
            loadingText:'点击加载更多',
            loading:true,
        };
        this.fetchNewsList=this.fetchNewsList.bind(this);
        this.fetchMoreList=this.fetchMoreList.bind(this);
    }
    fetchNewsList(id,type,channelId){
        let _this=this;
        if(type==='pub'){
            fetch(`${host}/news/list?pubId=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
            fetch(`${host}/news/list?channelId=${channelId}&page=${_this.state.page}&size=${_this.state.size}`,{
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
            fetch(`${host}/web/news/list_by_tag?channelId=${channelId}&tag=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
            fetch(`${host}/web/news/search?q=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
        let channelId=this.props.channelId;
        if(type==='pub'){
            _this.setState({
                page:page
            },function () {
                if(_this.state.page<_this.state.totalPages){
                    fetch(`${host}/web/news/list_by_follow_with_pub_info?pubId=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
                    fetch(`${host}/news/list?channelId=${channelId}&page=${_this.state.page}&size=${_this.state.size}`,{
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
                    fetch(`${host}/web/news/list_by_tag_with_pub_info?channelId=${channelId}&tag=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
                    fetch(`${host}/web/news/search?q=${id}&page=${_this.state.page}&size=${_this.state.size}`,{
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
        this.fetchNewsList(this.props.id,this.props.type,this.props.channelId);
    }
    componentWillReceiveProps(nextProps) {
        let _this=this;
        if (nextProps.id !== this.props.id||nextProps.type !== this.props.type||nextProps.channelId !== this.props.channelId) {
            _this.fetchNewsList(nextProps.id,nextProps.type,nextProps.channelId);
        }
    }
    render() {
        const newsList=this.state.newsList;
        if(this.props.type==='tag'||this.props.type==='search'){
            let keyword=this.props.id;
            newsList.filter((value,index) => {
                var re =new RegExp(keyword,"g");
                return value.title=value.title.replace(re, `<span class="keyword">${keyword}</span>`);
            })
        }
        let list=null;
        if(this.state.loading===true){
            list=<div className="text-center"><img src={loading} alt=""/> 加载中 </div>
        }else{
            if(newsList.length===0){
                list=<div>暂无相关新闻</div>
            }else if(newsList.length>0){
                list=<div>
                    {newsList.map((value,index) => {
                        return (<NewsListItem news={value} key={index} />)
                    })
                    }
                    <div className="btn-more transition" onClick={this.fetchMoreList}>{this.state.loadingText}</div>
                </div>
            }
        }
        return (
            <div>
                {list}
            </div>
        );
    }
}

