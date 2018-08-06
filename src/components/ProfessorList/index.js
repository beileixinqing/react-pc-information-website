import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';
import channelId from '../../config/channel'
import host from '../../config/host'

import TitleText from '../TitleText';

export default class ProfessorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            professorList: [],
        };
        this.fetchProfessorList=this.fetchProfessorList.bind(this);
    }
    fetchProfessorList(){
        let _this=this;
        fetch(`${host}/web/pub/list_pub_in_channel?channelId=${channelId}&page=0&size=6`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                _this.setState({
                    professorList:res.content
                });
            });
        }).then(function(res){
            if(res){
                console.log(res);
            }
        });
    }
    componentDidMount(){
        this.fetchProfessorList();
    }
    render() {
        let professorList=this.state.professorList;
        return (
            <div className="professorList">
                <TitleText headerName={'专家列表'}/>
                <ul>
                    {
                        professorList.map((value, index) => {
                            return (
                                <li key={index}>
                                    <Link to={"/news_list/professor/"+value.pubId}>
                                        <div className="avatarBox">
                                            <img src={value.avatarUrl} alt=""/>
                                        </div>
                                        <div className="professor-name">{value.name}</div>
                                        <div className="professor-introduction">{value.introduction}</div>
                                    </Link>
                                </li>)
                        })
                    }
                </ul>
                <Link to="/professor_list">
                    <div className="btn-more">
                        查看更多
                    </div>
                </Link>
            </div>
        );
    }
}

