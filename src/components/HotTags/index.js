import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';
import host from '../../config/host'

import TitleText from '../TitleText';

export default class HotTags extends Component {
    constructor(props){
        super(props);
        this.state = {
            tagsList: [],
        };
        this.fetchHotTags=this.fetchHotTags.bind(this);
    }
    fetchHotTags(channelId){
        let _this=this;
        fetch(`${host}/web/news/list_channel_tags?channelId=${channelId}&page=1&size=10`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                _this.setState({
                    tagsList:res
                });
            });
        }).then(function(res){
            if(res){
                console.log(res);
            }
        });
    }
    componentDidMount(){
        this.fetchHotTags(this.props.channelId);
    }
    componentWillReceiveProps(nextProps) {
        let _this=this;
        if (nextProps.channelId !== this.props.channelId) {
            _this.fetchHotTags(nextProps.channelId);
        }
    }
    render() {
        let tagsList=this.state.tagsList;
        return (
            <div className="tags-wrap">
                <TitleText headerName='热门标签'/>
                <ul className="tags-box">
                    {
                        tagsList.map((value, index) => {
                            return (<li key={index}><Link to={"/news_list/tag/"+this.props.channelId+"/"+value.tag}>{value.tag}</Link></li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

