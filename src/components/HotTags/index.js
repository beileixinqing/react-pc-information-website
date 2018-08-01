import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';

import TitleText from '../TitleText';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import IndexContent from '../IndexContent';

export default class HotTags extends Component {
    constructor(props){
        super(props);
        this.state = {
            tagsList: [],
        };
        this.fetchHotTags=this.fetchHotTags.bind(this);
    }
    fetchHotTags(){
        let _this=this;
        fetch(`http://120.77.215.34:9001/web/news/list_channel_tags?channelId=586b5112abb8aa1973d1a661&page=1&size=10`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                _this.setState({
                    tagsList:res
                });
            });
        }).then(function(res){
            console.log(res);
        });
    }
    componentDidMount(){
        this.fetchHotTags();
    }
    render() {
        let tagsList=this.state.tagsList;
        return (
            <div className="tags-wrap">
                <TitleText headerName='热门标签'/>
                <ul className="tags-box">
                    {
                        tagsList.map((value, index) => {
                            return (<li key={index}><Link to={"/news_list/tag/"+value.tag}>{value.tag}</Link></li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

