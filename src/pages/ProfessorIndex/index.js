import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment'
import 'moment/locale/zh-cn';
import './index.less';

import TopBar from '../../components/TopBar';
import ProfessorList from '../../components/ProfessorList';
import Footer from '../../components/Footer';

export default class ProfessorIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsDetail: {},
            inStockOnly: true,
        };
        this.handleSearch=this.handleSearch.bind(this);
        this.handleCheckBox=this.handleCheckBox.bind(this);
        this.fetchDetail=this.fetchDetail.bind(this);
    }
    handleSearch(keywods){
        this.setState({
            filterText:keywods
        });
    }
    handleCheckBox(checkBoxStatus){
        this.setState({
            inStockOnly:checkBoxStatus
        });
    }
    fetchDetail(){
        console.log(this.props)
        let _this=this;
        let id=this.props.match.params.id;
        fetch(`http://120.77.215.34:9001/web/news/detail?id=${id}`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                _this.setState({
                    newsDetail:res.news
                });
                console.log(res.news)
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
                <TopBar/>
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
                            <div data-bossirs="ly">
                                <Link className="author" to="">
                                    <div>
                                        <img src={newsDetail.avatar} alt=""/>
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
                            </div>
                            <div>
                                <img src="../../images/zhiku_qrcode.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <ProfessorList />
                </div>
                <Footer/>
            </div>
        );
    }
}

