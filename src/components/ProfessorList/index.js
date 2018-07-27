import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';

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
        fetch(`http://120.77.215.34:9001/web/pub/list_pub_in_channel?channelId=586b5112abb8aa1973d1a661&page=0&size=6`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                console.log(res)
                _this.setState({
                    professorList:res.content
                });
            });
        }).then(function(res){
            console.log(res);
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
                                    <Link to="/professor_index">
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
            </div>
        );
    }
}

