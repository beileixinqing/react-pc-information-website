import React, { Component } from 'react';
import './index.less';

import TitleText from '../TitleText';
import code from '../../images/zhiku_qrcode.jpg';
import logoName from '../../images/logo_name.png';

export default class Follow extends Component {
    render() {
        return (
            <div className="follow-wrap">
                <TitleText headerName='关注我们'/>
                <div className="follow-box">
                    <div className="code"><img src={code} alt=""/></div>
                    <div className="code-info">
                        <p><img src={logoName} alt=""/></p>
                        <p>扫码关注公众号</p>
                    </div>
                </div>
            </div>
        );
    }
}

