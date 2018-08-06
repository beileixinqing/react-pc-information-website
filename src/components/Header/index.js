import React, {Component} from 'react';
import { NavLink,Link } from "react-router-dom";
import './index.less';
import PropTypes from 'prop-types';

import logo from '../../images/hyzklogo.png';
import logoName from '../../images/logo_name.png';

export default class Header extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            keyword:""
        };
        this.handleToSearch=this.handleToSearch.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.keypress=this.keypress.bind(this);
    }
    handleChange(event) {
        this.setState({keyword: event.target.value});
    }
    handleToSearch() {
        if(this.state.keyword){
            this.context.router.history.push(`/news_list/search/${this.state.keyword}`)
        }
    }
    keypress(e){
        if(e.which === 13){
            this.handleToSearch();
        }
    }
    render() {
        return (
               <div className="wrapper">
                   <div className="header">
                       <div className="logo-bar">
                           <div className="container">
                               <Link to="/index"><img src={logo} alt="华语智库logo" className="logo" /></Link>
                               <Link to="/index"><img src={logoName} alt="华语智库" className="logo-name" /></Link>
                               <div className="search-bar">
                                   <input type="text" placeholder="搜索感兴趣的军事资讯" value={this.state.keyword} onChange={this.handleChange} onKeyPress={this.keypress}/>
                                   <div onClick={this.handleToSearch}>
                                       <i className="iconfont icon-sousuo"></i>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="header-bar">
                           <div className="container">
                               <ul>
                                   <li>
                                       <NavLink to="/" exact activeClassName="nav-active">首页</NavLink>
                                   </li>
                                   <li>
                                       <NavLink to="/intro" activeClassName="nav-active">智库概况</NavLink>
                                   </li>
                                   <li>
                                       <NavLink to="/professor_list" activeClassName="nav-active">专家团队</NavLink>
                                   </li>
                                   <li>
                                       <NavLink to="/contact" activeClassName="nav-active">联系我们</NavLink>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
        );
    }
}

