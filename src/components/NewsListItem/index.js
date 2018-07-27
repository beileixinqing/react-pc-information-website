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
        // this.fetchNewsList();
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
                        <img src={thumb[0]} alt=""/>
                    </div>
                    <div className="item-right-box">
                        <div className="item-right-title">
                            {news.title}
                        </div>
                        <div className="item-right-info">
                            <span className="info-avatar"><img src={news.avatar} alt=""/></span>
                            {news.authorName}&nbsp;
                            {news.like} &nbsp;
                            {moment(news.createAt).fromNow()}
                        </div>
                    </div>
                </div>
            </Link>
        } else if (news.type === 'pic') {
            let id=news.id;
            itemBox = <Link to={id}>
                <div className="item-box">
                    <div className="item-title">
                        {news.title}
                    </div>
                    <div className="item-img-box">
                        {
                            thumb.map((value, index) => {
                                return (<img src={value} alt="" key={index}/>)
                            })
                        }
                    </div>
                    <div className="item-info">
                        <span className="info-avatar"><img src={news.avatar} alt=""/></span>
                        {news.authorName}&nbsp;
                        {news.like} &nbsp;
                        {moment(news.createAt).fromNow()}
                    </div>
                </div>
            </Link>
        } else if (news.type === 'text') {
            let id=news.id;
            itemBox = <Link to={id}>
                <div className="item-box">
                    <div className="item-title">
                        {news.title}
                    </div>
                    <div className="item-info">
                        <span className="info-avatar"><img src={news.avatar} alt=""/></span>
                        {news.authorName}&nbsp;
                        {news.like} &nbsp;
                        {moment(news.createAt).fromNow()}
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

