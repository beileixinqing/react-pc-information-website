import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './index.less';
import moment from 'moment'
import 'moment/locale/zh-cn';

export default class NewsListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        moment.locale('zh-cn');
    }

    render() {
        const news = this.props.news;
        const thumb = this.props.news.thumb;
        let itemBox = null;
        let authorInfo = null;
        let picItemBox = null;
        function newsLikeFilter(n) {
            if(n>=10000){
                n=(n/10000).toFixed(1)+"万"
            }
            return n
        }
        if (news.pubInfo) {
            if (news.authorName !== '华语智库') {
                authorInfo = <div className="item-info">
                    <div className="clearfix" style={{"marginBottom": "10px"}}>
                        <span className="lf info-avatar"><img src={news.pubInfo.avatarUrl} alt=""/></span>
                        <div className="lf" style={{"width": "85%"}}>
                            <p className="right-margin-12 fw color-3">{news.authorName}</p>
                            <p className="right-margin-12 color-8 author-intro"
                               style={{"WebkitBoxOrient": "vertical"}}>{news.pubInfo.introduction}</p>
                        </div>
                    </div>
                    <span className="right-margin-12">{newsLikeFilter(news.like)}</span>
                    <span>{moment(news.createAt).fromNow()}</span>
                </div>;
                let id = '/detail/' + news.id;
                picItemBox = <Link to={id}>
                    <div className="item-box">
                        <div className="item-title" dangerouslySetInnerHTML={{__html: news.title}}></div>
                        <div className="clearfix" style={{"marginBottom": "16px", "color": "#888"}}>
                            <span className="lf info-avatar"><img src={news.pubInfo.avatarUrl} alt=""/></span>
                            <div className="lf" style={{"width": "85%"}}>
                                <p className="right-margin-12 fw color-3">{news.authorName}</p>
                                <p className="right-margin-12 color-8 author-intro"
                                   style={{"WebkitBoxOrient": "vertical"}}>{news.pubInfo.introduction}</p>
                            </div>
                        </div>
                        <div className="item-img-box">
                            {
                                thumb.map((value, index) => {
                                    return (<div style={{
                                        display: 'inline-block',
                                        width: '32%',
                                        height: '100%',
                                        marginRight: "5px",
                                        background: `url("${value}") center center / cover no-repeat`,
                                    }} key={index}></div>)
                                    // return (
                                    //     <img src={value} alt=""/>
                                    // )
                                })
                            }
                        </div>
                        <div className="item-info">
                            <span className="right-margin-12"><i className="iconfont icon-dianzan"></i> {newsLikeFilter(news.like)}</span>
                            <span>{moment(news.createAt).fromNow()}</span>
                        </div>
                    </div>
                </Link>
            } else {
                authorInfo = <div className="item-info">
                    <span className="right-margin-12">{news.authorName}</span>
                    <span className="right-margin-12"><i className="iconfont icon-dianzan"></i> {newsLikeFilter(news.like)}</span>
                    <span>{moment(news.createAt).fromNow()}</span>
                </div>;
            }
        } else {
            authorInfo = <div className="item-info">
                <span className="right-margin-12">{news.authorName}</span>
                <span className="right-margin-12"><i className="iconfont icon-dianzan"></i> {newsLikeFilter(news.like)}</span>
                <span>{moment(news.createAt).fromNow()}</span>
            </div>;
        }
        if (news.type === 'little' || news.type === 'big') {
            let id = '/detail/' + news.id;
            itemBox = <Link to={id}>
                <div className="item-box">
                    <div className="item-left-box">
                        {/*<img src={thumb[0]} alt=""/>*/}
                        <div style={{
                            display: 'inline-block',
                            width: '208px',
                            height: '100%',
                            background: `url("${thumb[0]}") center center / cover no-repeat`,
                        }}></div>
                    </div>
                    <div className="item-right-box">
                        <div className="item-title" dangerouslySetInnerHTML={{__html: news.title}}></div>
                        <div>
                            {authorInfo}
                        </div>
                    </div>
                </div>
            </Link>
        }else if (news.type === 'big') {
            let id = '/detail/' + news.id;
            itemBox = <Link to={id}>
                <div className="item-box">
                    <div className="item-title" dangerouslySetInnerHTML={{__html: news.title}}></div>
                    <div className="item-img-big-box">
                        <div style={{
                            display: 'inline-block',
                            width: '208px',
                            height: '100%',
                            background: `url("${thumb[0]}") center center / cover no-repeat`,
                        }}></div>
                    </div>
                    <div>
                        {authorInfo}
                    </div>
                </div>
            </Link>
        } else if (news.type === 'pic' || news.type === 'auto') {
            let id = '/detail/' + news.id;
            itemBox = picItemBox ? picItemBox : <Link to={id}>
                <div className="item-box">
                    <div className="item-title" dangerouslySetInnerHTML={{__html: news.title}}></div>
                    <div className="item-img-box">
                        {
                            thumb.map((value, index) => {
                                return (<div style={{
                                    display: 'inline-block',
                                    width: '32%',
                                    height: '100%',
                                    marginRight: "5px",
                                    background: `url("${value}") center center / cover no-repeat`,
                                }} key={index}></div>)
                                // return (
                                //     <img src={value} alt=""/>
                                // )
                            })
                        }
                    </div>
                    <div>
                        {authorInfo}
                    </div>
                </div>
            </Link>
        } else if (news.type === 'text') {
            let id = '/detail/' + news.id;
            itemBox = <Link to={id}>
                <div className="item-box">
                    <div className="item-title" dangerouslySetInnerHTML={{__html: news.title}}></div>
                    <div>
                        {authorInfo}
                    </div>
                </div>
            </Link>
        }
        return (
            <div className="item-container">
                {itemBox}
            </div>
        )
    }
}

