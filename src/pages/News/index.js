import React, { Component } from 'react';
import './index.less';

import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import HotNewsList from '../../components/HotNewsList';
import HotTags from '../../components/HotTags';
import Follow from '../../components/Follow';
import ToolBar from '../../components/ToolBar';
import Footer from '../../components/Footer';

class News extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
        this.setMetas=this.setMetas.bind(this);
    }
    setMetas(){
        document.title="译世界资讯【官方网站】";
        let metas = document.getElementsByTagName("meta");
        metas["description"].setAttribute('content',"译世界资讯是专门针对海外华人的信息资讯类网站，提供团购、房屋租售、求职招聘、留学移民、旅游定制、汽车租售、征婚交友、二手转让等海量商业资讯，是华人生活理想的交流平台。");
        let keywords="译世界资讯，译世界资讯官网，头条资讯，华人资讯，头条新闻，中文资讯，海外资讯，华语互动";
        metas["keywords"].setAttribute('content',keywords);
    }
    componentWillMount() {
        this.setMetas();
    }
    componentWillReceiveProps(nextProps) {
        const { location } = this.props;
        if (nextProps.location.pathname !== location.pathname) {
            this.setMetas();
        }
    }
    componentWillUpdate(){
        this.setMetas();
    }
    render() {
        return (
            <div>
                <Header channelId={this.props.match.params.id}/>
                <div className="container">
                    <div className="index-container">
                        <div className="left-box">
                            <NewsList type="index" channelId={this.props.match.params.id}/>
                        </div>
                        <div className="right-box">
                            <HotNewsList channelId={this.props.match.params.id}/>
                            <HotTags channelId={this.props.match.params.id}/>
                            <Follow/>
                            <ToolBar/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(News)
