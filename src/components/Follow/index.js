import React, { Component } from 'react';
import './index.less';

import TitleText from '../TitleText';
import code from '../../images/code_download.png';
import logoName from '../../images/logo_name.png';

export default class Follow extends Component {
    render() {
        return (
            <div className="follow-wrap">
                <TitleText headerName='下载APP'/>
                <div className="follow-box">
                    <div className="code"><img src={code} alt=""/></div>
                    <div className="code-info">
                        <p><img src={logoName} alt=""/></p>
                        <p>扫码下载译世界APP</p>
                    </div>
                </div>
            </div>
        );
    }
}

