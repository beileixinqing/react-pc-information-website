import React, {Component} from 'react';
import {Link,NavLink} from "react-router-dom";
import './index.less';

import logoName from '../../images/logo_name.png';

export default class TopBar extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="nav-bar">
                    <div className="container">
                        <div className="logo-name">
                            <Link to="/"><img src={logoName} alt="华语智库" /></Link>
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/about" activeClassName="nav-active">关于我们</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="nav-active">联系我们</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

