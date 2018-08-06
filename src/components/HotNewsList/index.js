import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';
import channelId from '../../config/channel'
import host from '../../config/host'

import TitleText from '../TitleText';

export default class HotNewsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsList: [],
        };
        this.fetchHotNewsList=this.fetchHotNewsList.bind(this);
    }
    fetchHotNewsList(){
        let _this=this;
        fetch(`${host}/web/news/list?channelId=${channelId}&page=0&size=10&sort=read,desc`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                _this.setState({
                    newsList:res.content
                });
            });
        }).then(function(res){
            // console.log(res);
        });
    }
    componentDidMount(){
        this.fetchHotNewsList();
    }
    render() {
        let newsList=this.state.newsList;
        return (
            <div className="hot-news-list">
                <TitleText headerName={'热门文章'}/>
                <ul>
                    {
                        newsList.map((value, index) => {
                            return (
                                <li key={index}>
                                    <Link to={"/detail/"+value.id}>
                                        <div className="news-left">
                                            <img src={value.thumb[0]} alt=""/>
                                        </div>
                                        <div className="news-right">
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

