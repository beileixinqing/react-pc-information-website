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
        if (news.type === 'little'||news.type === 'big'||news.type === 'auto') {
            let id='/detail/'+news.id;
            itemBox = <Link to={id}>
                <div className="item-box">
                    <div className="item-left-box">
                        {/*<img src={thumb[0]} alt=""/>*/}
                        <div style={{display:'inline-block',width:'208px',height:'150px',background:`url("${thumb[0]}")`,backgroundReapeat:"no-repeat",backgroundPositon:"center center",backgroundSize:"cover"}}></div>
                    </div>
                    <div className="item-right-box">
                        <div className="item-title" dangerouslySetInnerHTML = {{ __html:news.title }}></div>
                        <div className="item-info">
                            <span className="info-avatar"><img src={news.avatar} alt=""/></span>
                            <span className="right-margin-12">{news.authorName}</span>
                            <span className="right-margin-12">{news.like} 赞</span>
                            <span>{moment(news.createAt).fromNow()}</span>
                        </div>
                    </div>
                </div>
            </Link>
        } else if (news.type === 'pic') {
            let id='/detail/'+news.id;
            itemBox = <Link to={id}>
                <div className="item-box">
                    <div className="item-title" dangerouslySetInnerHTML = {{ __html:news.title }}></div>
                    <div className="item-img-box">
                        {
                            thumb.map((value, index) => {
                                return (<div style={{display:'inline-block',width:'32%',height:'150px',marginRight:"5px",background:`url("${value}")`,backgroundReapeat:"no-repeat",backgroundPositon:"center center",backgroundSize:"cover"}} key={index}></div>)
                                // return (
                                //     <img src={value} alt=""/>
                                // )
                            })
                        }
                    </div>
                    <div className="item-info">
                        <span className="info-avatar"><img src={news.avatar} alt=""/></span>
                        <span className="right-margin-12">{news.authorName}</span>
                        <span className="right-margin-12">{news.like} 赞</span>
                        <span>{moment(news.createAt).fromNow()}</span>
                    </div>
                </div>
            </Link>
        } else if (news.type === 'text') {
            let id='/detail/'+news.id;
            itemBox = <Link to={id}>
                <div className="item-box">
                    <div className="item-title" dangerouslySetInnerHTML = {{ __html:news.title }}></div>
                    <div className="item-info">
                        <span className="info-avatar"><img src={news.avatar} alt=""/></span>
                        <span className="right-margin-12">{news.authorName}</span>
                        <span className="right-margin-12">{news.like} 赞</span>
                        <span>{moment(news.createAt).fromNow()}</span>
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

