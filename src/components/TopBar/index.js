import React, {Component} from 'react';
import {Link,NavLink} from "react-router-dom";
import './index.less';

import logoName from '../../images/logo_name.png';

const topBarItem=[
    {
        name:"用户协议",
        link:"/terms"
    },
    {
        name:"隐私声明",
        link:"/privacy"
    },
    {
        name:"关于我们",
        link:"/about"
    },
    {
        name:"联系我们",
        link:"/contact"
    },
    {
        name:"生活社区公约",
        link:"/convention"
    },
    /*{
        name:"下载APP",
        link:"/download"
    },*/
];

export default class TopBar extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="nav-bar">
                    <div className="container">
                        <div className="logo-name">
                            <Link to="/"><img src={logoName} alt="译世界资讯" /></Link>
                        </div>
                        <ul>
                            {
                                topBarItem.map((value,index)=>{
                                    return (
                                        <li key={index}>
                                            <NavLink to={value.link} activeClassName="nav-active">{value.name}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

