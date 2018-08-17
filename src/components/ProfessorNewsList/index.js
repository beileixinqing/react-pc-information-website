import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';
import host from '../../config/host'

import TitleText from '../TitleText';

export default class ProfessorNewsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsList: [],
        };
        this.fetchHotNewsList=this.fetchHotNewsList.bind(this);
    }
    fetchHotNewsList(pubId,newsId){
        let _this=this;
        fetch(`${host}/web/news/list_by_follow?pubId=${pubId}&page=0&size=10`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            _this.setState({
                loading:false
            })
            return response.json().then(function(res){
                let newsList=res.content;
                newsList.filter(function (value,index) {
                    if(value.id===newsId){
                        return newsList.splice(index,1);
                    }
                    return newsList
                })
                _this.setState({
                    newsList:newsList,
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
        if (nextProps.pubId !== this.props.pubId||nextProps.newsId!== this.props.newsId) {
            _this.fetchHotNewsList(nextProps.pubId,nextProps.newsId);
        }
    }
    render() {
        let newsList=this.state.newsList;
        return (
            <div className="hot-news-list">
                <TitleText headerName={'专家文章'}/>
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

