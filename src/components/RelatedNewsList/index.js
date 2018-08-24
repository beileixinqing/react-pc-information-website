import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';
import host from '../../config/host'

import TitleText from '../TitleText';

export default class RelatedNewsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsList: [],
        };
        this.fetchRelatedNewsList=this.fetchRelatedNewsList.bind(this);
    }
    fetchRelatedNewsList(newsId){
        let _this=this;
        fetch(`${host}/web/news/detail_and_pub_info?id=${newsId}`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            _this.setState({
                loading:false
            })
            return response.json().then(function(res){
                _this.setState({
                    newsList:res.related.content,
                });
            });
        }).then(function(res){
            if(res){
                console.log(res);
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        let _this=this;
        if (nextProps.newsId!== this.props.newsId) {
            _this.fetchRelatedNewsList(nextProps.newsId);
        }
    }

    componentDidMount() {
        this.fetchRelatedNewsList(this.props.newsId);
    }
    render() {
        let newsList=this.state.newsList;
        return (
            <div className="hot-news-list">
                <TitleText headerName={'相关新闻'}/>
                <ul>
                {
                    newsList.map((value, index) => {
                        return (
                            <li key={index}>
                                <Link to={"/detail/"+value.id}>
                                    <div className="news-left">
                                        <img src={value.thumb[0]} alt=""/>
                                    </div>
                                    <div className="news-right" style={{"WebkitBoxOrient": "vertical"}}>
                                        {value.title}
                                    </div>
                                </Link>
                            </li>)
                    })
                }
            </ul>
            </div>
        );
    }
}

