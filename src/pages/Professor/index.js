import React, { Component } from 'react';
import moment from 'moment'
import 'moment/locale/zh-cn';
import './index.less';
import host from '../../config/host'

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import HotTags from '../../components/HotTags';
import HotNewsList from '../../components/HotNewsList';
import Follow from '../../components/Follow';
import ToolBar from '../../components/ToolBar';
import Footer from '../../components/Footer';

export default class Professor extends Component {
    constructor(props){
        super(props);
        this.state = {
            professorDetail: {},
        };
        this.fetchDetail=this.fetchDetail.bind(this);
    }
    fetchDetail(match){
        let _this=this;
        let id=match.params.id;
        fetch(`${host}/web/pub/info?id=${id}`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                _this.setState({
                    professorDetail:res
                });
            });
        }).then(function(res){
            if(res){
                console.log(res);
            }
        });
    }
    componentDidMount(){
        this.fetchDetail(this.props.match);
        moment.locale('zh-cn');
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    }
    componentWillReceiveProps(nextProps) {
        let _this=this;
        if (nextProps.match.params.id !== this.props.match.params.id) {
            _this.fetchDetail(nextProps.match);
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="index-container">
                        <div className="left-box">
                            <div className="professor-box">
                                <div className="professor-avatar">
                                    <img src={this.state.professorDetail.avatarUrl} alt=""/>
                                </div>
                                <div className="professor-info">
                                    <div className="professor-name">
                                        {this.state.professorDetail.name}
                                    </div>
                                    <div className="professor-intro">
                                        {this.state.professorDetail.introduction}
                                    </div>
                                </div>
                            </div>
                            <NewsList type="pub" id={this.props.match.params.id}/>
                        </div>
                        <div className="right-box">
                            {/*<ProfessorList/>*/}
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

