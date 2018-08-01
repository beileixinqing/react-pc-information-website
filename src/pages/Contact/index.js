import React, { Component } from 'react';
import './index.less';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

import wxGroup from '../../images/wx_group.jpg';

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: true,
        };
        this.handleSearch=this.handleSearch.bind(this);
        this.handleCheckBox=this.handleCheckBox.bind(this);
    }
    handleSearch(keywods){
        this.setState({
            filterText:keywods
        });
    }
    handleCheckBox(checkBoxStatus){
        this.setState({
            inStockOnly:checkBoxStatus
        });
    }
    render() {
        return (
            <div>
                <TopBar/>
                <div className="container min-height">
                    <div className="text-box">
                        <h1 className="text-center">华语经纬（北京）国际文化发展中心</h1>
                        <h1 className="text-center">Chinese Jingwei (Beijing) International Cultural Development Center</h1>
                        <p>地址：北京市朝阳区朝阳门外金台里2号首都经贸大学红庙校区14号楼2层</p>
                        <p className="text-bold">商务合作/广告媒体代理：</p>
                        <p>联系人：陈女士</p>
                        <p>微信：mailziyi</p>
                        <p>电话：13811955092</p>
                        <p>邮件：hjadv@126.com</p>
                        <br/>
                        <p>电话：13301377001</p>
                        <p>座机：010-85801298</p>
                        <p>传真：010-85801304</p>
                        <p className="text-bold">意见反馈</p>
                        <p>电话：010-53381611</p>
                        <p>邮箱：app@heydaycn.com</p>
                        <p className="text-bold">加入群聊</p>
                        <p>
                            <img src={wxGroup} alt=""/>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

