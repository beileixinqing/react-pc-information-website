import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment'
import 'moment/locale/zh-cn';
import './index.less';
import loading from '../../images/loading.gif';

import host from '../../config/host'

import Header from '../../components/Header';
import RelatedNewsList from '../../components/RelatedNewsList';
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
            pubId:"",
            intro:"",
            loading:true
        };
        this.fetchDetail=this.fetchDetail.bind(this);
        this.clickToLike=this.clickToLike.bind(this);
    }
    clickToLike(){
        let _this=this;
        let id=_this.props.match.params.id;
        if(_this.state.like===false){
            fetch(`${host}/web/news/like?newsId=${id}`,{
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
    fetchDetail(id){
        let _this=this;
        fetch(`${host}/web/news/detail_and_pub_info?id=${id}`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            _this.setState({
                loading:false
            })
            return response.json().then(function(res){
                _this.setState({
                    newsDetail:res.news,
                    likeCount:res.news.like?res.news.like:"",
                    avatarUrl:res.pubInfo?res.pubInfo.avatarUrl:"https://cdn.zhongwentoutiao.com/user%403x.png",
                    pubId:res.pubInfo?res.pubInfo.pubId:"",
                    intro:res.pubInfo?res.pubInfo.introduction:"",
                });
                document.title=res.news.title;
                let reg1 = /<p[^>]*>(?:(?!<\/p>)[\s\S])*<\/p>/i;
                // let reg1 = /<p[^>]*>[^</?(?:img).*?>|</?[pP]*?>](.*?)<\/p>/i;
                let reg2 = /<(\/)*p>/gi;
                let description=res.news.content.match(reg1)[0].replace(reg2,"");
                let descriptionLen=description.length;
                let metas = document.getElementsByTagName("meta");
                if(descriptionLen>150){
                    metas["description"].setAttribute('content',description.substr(0,150));
                }else{
                    metas["description"].setAttribute('content',description);
                }
                let keywords=res.news.tag.join(",")?res.news.tag.join(","):"译世界资讯，译世界资讯官网，头条资讯，华人资讯，头条新闻，中文资讯，海外资讯，华语互动";
                metas["keywords"].setAttribute('content',keywords);
            });
        }).then(function(res){
            if(res){
                console.log(res);
            }
        });
    }
    componentDidMount(){
        this.fetchDetail(this.props.match.params.id);
        moment.locale('zh-cn');
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    }
    componentWillReceiveProps(nextProps) {
        let _this=this;
        if (nextProps.match.params.id !== _this.props.match.params.id) {
            _this.fetchDetail(nextProps.match.params.id);
        }
    }
    render() {
        let newsDetail=this.state.newsDetail;
        let createAt=moment(newsDetail.createAt).format("YYYY-MM/DD-HH:MM:SS");
        let year=createAt.split("-")[0];
        let date=createAt.split("-")[1];
        let time=createAt.split("-")[2];
        let tagList="";
        let tagInfo="";
        if(newsDetail.tag&&newsDetail.tag.length>0){
            tagList=newsDetail.tag.map((value,index) => {
                return (<Link to={"/news_list/tag/"+newsDetail.channelId+"/"+value} key={index} className="tagItem">{value}</Link>)
            })
            tagInfo=<p className="tag-info">标签：{tagList}</p>;
        }
        let detail=null;
        if(this.state.loading===true){
            detail=<div className="text-center"><img src={loading} alt=""/> 加载中 </div>
        }else{
            let editorName=null;
            if(newsDetail.editorName){
                editorName=<p className="color-6">责任编辑：{newsDetail.editorName}</p>
            }
            detail=<div className="detailContainer">
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
                        <div className="author">
                            <div className="avatar">
                                <img src={this.state.avatarUrl} alt=""/>
                            </div>
                            <div>
                                {newsDetail.authorName}
                            </div>
                            <br/>
                            <div>
                                {this.state.intro}
                            </div>
                        </div>
                    </div>
                    <div className="detail-content">
                        <div className="breadcrumb">
                            <Link className="" to={'/news/'+newsDetail.channelId}>{newsDetail.channelName}</Link>
                            &nbsp;&nbsp;>&nbsp;&nbsp;正文
                        </div>
                        <div className="detail-title">{newsDetail.title}</div>
                        <div className="detail-article" dangerouslySetInnerHTML = {{ __html:newsDetail.content }}></div>
                        {editorName}
                        <div className="end-line">
                            <p className="end-text through"><span>THE END</span></p>
                            <div className={`zan-text ${this.state.like === true ? "icon-active" : ""}`} >
                                <div className="icon-box" onClick={this.clickToLike}>
                                    <i className="iconfont icon-dianzan"></i>
                                </div>
                                &nbsp;&nbsp;{this.state.likeCount}
                            </div>
                            <div>{tagInfo}</div>
                        </div>
                    </div>
                </div>
                <RelatedNewsList newsId={this.props.match.params.id} />
            </div>
        }
        return (
            <div>
                <Header/>
                {detail}
                <ToolBar/>
                <Footer/>
            </div>
        );
    }
}

