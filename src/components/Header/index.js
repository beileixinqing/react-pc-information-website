import React, {Component} from 'react';
import { NavLink,Link } from "react-router-dom";
import './index.less';

import logo from '../../images/hyzklogo.png';
import logoName from '../../images/logo_name.png';

export default class Header extends Component {
    render() {
        return (
               <div className="wrapper">
                   <div className="header">
                       <div className="logo-bar">
                           <div className="container">
                               <Link to="/index"><img src={logo} alt="华语智库logo" className="logo" /></Link>
                               <Link to="/index"><img src={logoName} alt="华语智库" className="logo-name" /></Link>
                               <div className="search-bar">

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
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
        );
    }
}

