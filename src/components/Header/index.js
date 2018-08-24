import React, {Component} from 'react';
import { NavLink,Link } from "react-router-dom";
import './index.less';
import PropTypes from 'prop-types';
import host from '../../config/host'

import logoName from '../../images/logo_name.png';
export default class Header extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            keyword:"",
            channelList:[]
        };
        this.handleToSearch=this.handleToSearch.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.keypress=this.keypress.bind(this);
        this.getChannelList=this.getChannelList.bind(this);
    }
    handleChange(event) {
        this.setState({keyword: event.target.value});
    }
    handleToSearch() {
        if(this.state.keyword){
            this.context.router.history.push(`/news_list/search/${this.props.channelId}/${this.state.keyword}`)
        }
    }
    getChannelList(){
        let _this=this;
        fetch(`${host}/channel/guest`,{
            method:'GET',
            mode:'cors',
        }).then(function(response){
            return response.json().then(function(res){
                let channelList=[...res.myList,...res.other];
                _this.setState({
                    channelList:channelList
                });
            });
        })
    }
    keypress(e){
        if(e.which === 13){
            this.handleToSearch();
        }
    }
    componentDidMount() {
        this.getChannelList();
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    }
    render() {
        return (
               <div className="wrapper">
                   <div className="header">
                       <div className="top-bar">
                           <div className="container" style={{"position":"relative"}}>
                               <a className="top-bar-text" href="https://internal.zhongwentoutiao.com/login">登录</a>&nbsp;&nbsp;
                               <a className="top-bar-text" href="https://internal.zhongwentoutiao.com/login#signup">注册</a>&nbsp;&nbsp;
                               <a className="top-bar-text" href="/download">下载APP</a>
                           </div>
                       </div>
                       <div className="logo-bar">
                           <div className="container">
                               <Link to="/index"><img src={logoName} alt="译世界资讯logo" className="logo-name" /></Link>
                               <div className="search-bar">
                                   <input type="text" placeholder="搜索感兴趣的资讯" value={this.state.keyword} onChange={this.handleChange} onKeyPress={this.keypress}/>
                                   <div onClick={this.handleToSearch}>
                                       <i className="iconfont icon-sousuo"></i>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="header-bar">
                           <div className="container">
                               <ul>
                                   {this.state.channelList.map((value,index) => {
                                       let to=`/news/${value.id}`;
                                       return (
                                           <li key={index}>
                                               <NavLink to={to} exact activeClassName="nav-active">{value.name}</NavLink>
                                           </li>
                                       )
                                   })
                                   }
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
        );
    }
}

