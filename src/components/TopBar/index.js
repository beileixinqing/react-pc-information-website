import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './index.less';

// import logo from './logo.svg';

export default class TopBar extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="nav-bar">
                    <div className="logo">
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        华语智库
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
        );
    }
}

