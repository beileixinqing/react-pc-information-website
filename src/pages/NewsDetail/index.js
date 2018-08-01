import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment'
import 'moment/locale/zh-cn';
import './index.less';
import code from '../../images/zhiku_qrcode.jpg';

import Header from '../../components/Header';
import ProfessorList from '../../components/ProfessorList';
import ToolBar from '../../components/ToolBar';
import Footer from '../../components/Footer';

export default class NewsDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsDetail: {},
            like:false,
            likeCount:0,
            avatarUrl:"",
            pubId:""
        };
        this.fetchDetail=this.fetchDetail.bind(this);
        this.clickToLike=this.clickToLike.bind(this);
    }
    clickToLike(){
        let _this=this;
        let id=_this.props.match.params.id;
        if(_this.state.like===false){
            fetch(`http://120.77.215.34:9001/web/news/like?newsId=${id}`,{
                method:'GET',
                mode:'cors',
            }).then(function(response){
                return response.json().then(function(res){
                    _this.setState({
                        like:true,
                        likeCount: _this.state.likeCount+1
                    });
                });
            }).then(function(res){
                console.log(res);
            });
        }else{
            _this.setState({
                like:false,
                likeCount: _this.state.likeCount-1
            });
        }
    }
    fetchDetail(){
        let _this=this;
        let id=_this.props.match.params.id;
        fetch(`http://120.77.215.34:9001/web/news/detail_and_pub_info?id=${id}`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                _this.setState({
                    newsDetail:res.news,
                    likeCount:res.news.like,
                    avatarUrl:res.pubInfo.avatarUrl,
                    pubId:res.pubInfo.pubId
                });
            });
        }).then(function(res){
            console.log(res);
        });
    }
    componentDidMount(){
        this.fetchDetail();
        moment.locale('zh-cn');
    }
    render() {
        let newsDetail=this.state.newsDetail;
        let createAt=moment(newsDetail.createAt).format("YYYY-MM/DD-HH:MM:SS");
        let year=createAt.split("-")[0];
        let date=createAt.split("-")[1];
        let time=createAt.split("-")[2];

        return (
            <div>
                <Header/>
                <div className="detailContainer">
                    <div className="left-box-detail">
                        <div className="detail-info">
                            <div className="year through">
                                <span>{year}</span>
                            </div>
                            <div className="md">
                                {date}
                            </div>
                            <div className="time">
                                {time}
                            </div>
                            <div>
                                <Link className="author" to={"/news_list/professor/"+this.state.pubId}>
                                    <div className="avatar">
                                        <img src={this.state.avatarUrl} alt=""/>
                                    </div>
                                    <div>
                                        {newsDetail.authorName}
                                    </div>
                                    {/*<span className="qiehao">企鹅号</span>*/}
                                </Link>
                            </div>
                        </div>
                        <div className="detail-content">
                            <div className="detail-title">{newsDetail.title}</div>
                            <div className="detail-article" dangerouslySetInnerHTML = {{ __html:newsDetail.content }}></div>
                            <div className="end-line">
                                <p className="end-text through"><span>THE END</span></p>
                                <div className={`zan-text ${this.state.like === true ? "icon-active" : ""}`} >
                                    <div className="icon-box" onClick={this.clickToLike}>
                                        <i className="iconfont icon-dianzan"></i>
                                    </div>
                                    &nbsp;&nbsp;{this.state.likeCount}
                                </div>
                                <p className="statement">本文系华语智库专家 {newsDetail.authorName} 专稿，转载请注明出处、作者和本文链接</p>
                            </div>
                            <div className="code-box">
                                <img src={code} alt=""/>
                                <p>
                                    还没看够？扫描识别上方二维码，或在微信公众号中搜索「华语智库」或「huayujunshi」，即可获得华语智库每日最新内容推送、参与互动活动。
                                </p>
                            </div>
                        </div>
                    </div>
                    <ProfessorList />
                </div>
                <ToolBar/>
                <Footer/>
            </div>
        );
    }
}

