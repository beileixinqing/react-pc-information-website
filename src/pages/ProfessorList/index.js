import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';

import Header from '../../components/Header';
import ToolBar from '../../components/ToolBar';
import Footer from '../../components/Footer';
import channelId from '../../config/channel'

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
        fetch(`http://120.77.215.34:9001/web/pub/list_pub_in_channel?channelId=${channelId.dev}&page=0&size=6`,{
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
            <div>
                <Header/>
                <div className="container">
                    <div className="professor-list-box">
                        <ul>
                            {
                                professorList.map((value, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={"/news_list/professor/"+value.pubId}>
                                                <div className="professor-avatar">
                                                    <img src={value.avatarUrl} alt=""/>
                                                </div>
                                                <div className="professor-info">
                                                    <div className="professor-name">
                                                        {value.name}
                                                    </div>
                                                    <div className="professor-intro">
                                                        {value.introduction}
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <ToolBar/>
                <Footer/>
            </div>
        );
    }
}

