import React, { Component } from 'react';
import './index.less';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

export default class Contact extends Component {
    render() {
        return (
            <div className="gray-contaniner">
                <TopBar/>
                <div className="container mar-container">
                    <div className="text-box">
                        <p className="text-bold">商务合作/广告媒体代理：</p>
                        <p>联系人：陈女士</p>
                        <p>微信：mailziyi</p>
                        <p>电话：13811955092</p>
                        <p>邮件：mailziyi@126.com</p>
                        <p>地址：北京市朝阳区朝阳门外金台里2号首都经贸大学红庙校区14号楼2层</p>
                        <p className="text-bold">意见反馈</p>
                        <p>电话：010-53381611</p>
                        <p>邮箱：app@heydaycn.com</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

