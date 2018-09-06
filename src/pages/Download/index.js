import React, { Component } from 'react';
import './index.less';

// import Footer from '../../components/Footer';
import code from '../../images/code_download_text.png';
import arrow from '../../images/arrow.png';
import more from '../../images/more.png';

function isWeixinBrowser() {
    let ua = navigator.userAgent.toLowerCase();
    return (/micromessenger/.test(ua));
}

/*function isAndroid() {
    let ua = navigator.userAgent.toLowerCase();
    return (/android/.test(ua));
}

function isIos() {
    let ua = navigator.userAgent.toLowerCase();
    return (/(iphone|ipod|ipad)/.test(ua));
}*/
export default class Download extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: "none",
        };
        this.goToAppStore=this.goToAppStore.bind(this);
        this.goToAndroid=this.goToAndroid.bind(this);
        this.goAndroidDownloadUrl=this.goAndroidDownloadUrl.bind(this);
        this.goAppstoreDownloadUrl=this.goAppstoreDownloadUrl.bind(this);
        this.goYingYongBaoDownloadUrl=this.goYingYongBaoDownloadUrl.bind(this);
        this.goBaiDuDownloadUrl=this.goBaiDuDownloadUrl.bind(this);
        this.goWanDouJiaDownloadUrl=this.goWanDouJiaDownloadUrl.bind(this);
        this.closeMask=this.closeMask.bind(this);
    }
    //安卓下载
    goAndroidDownloadUrl() {
        window.location.href = "http://cdn.zhongwentoutiao.com/app/%E8%AF%91%E4%B8%96%E7%95%8C%E8%B5%84%E8%AE%AF%E6%9C%80%E6%96%B0%E7%89%88.apk"
    }
    //appstore下载
    goAppstoreDownloadUrl() {
        window.location.href = "https://itunes.apple.com/cn/app/%E8%AF%91%E4%B8%96%E7%95%8C%E8%B5%84%E8%AE%AF/id1266202262?mt=8"
    }
    //应用宝下载
    goYingYongBaoDownloadUrl() {
        window.location.href = "http://cdn.zhongwentoutiao.com/app/%E8%AF%91%E4%B8%96%E7%95%8C%E8%B5%84%E8%AE%AF%E6%9C%80%E6%96%B0%E7%89%88.apk"
        // window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.xinwenhd.app&from=singlemessage&isappinstalled=1"
    }
    //百度手机助手下载
    goBaiDuDownloadUrl() {
        window.location.href = "https://shouji.baidu.com/software/24687227.html"
    }
    //豌豆荚下载
    goWanDouJiaDownloadUrl() {
        window.location.href = "https://www.wandoujia.com/apps/com.xinwenhd.app"
    }
    //去Appstore下载
    goToAppStore(){
        this.goAppstoreDownloadUrl();
    }
    //去andriod下载
    goToAndroid(){
        let _this=this;
        if (isWeixinBrowser()) {
            _this.setState({
                show:"block"
            })
            // _this.goWanDouJiaDownloadUrl();
        } else {
            _this.goAndroidDownloadUrl();
        }
    }
    closeMask(){
        this.setState({
            show:"none"
        })
    }
    componentDidMount() {
        /*if (isWeixinBrowser()) {
            if (isIos()) {
                this.goAppstoreDownloadUrl();
            } else if (isAndroid()) {
                this.goYingYongBaoDownloadUrl()
            }
        } else {
            if (isIos()) {
                this.goAppstoreDownloadUrl();
            } else {
                this.goAndroidDownloadUrl();
            }
        }*/
    }
    render() {
        return (
            <div className="download">
                <div className="download-bg">
                    <div className="container">
                        <div className="left-box">
                            <h1 className="title">译世界资讯</h1>
                            <h1>定制化阅读</h1>
                            <p>更懂你的新闻资讯APP</p>
                            <p>智能推送前沿资讯、热点新闻、优质原创</p>
                            <p>自定义添加定制化偏好频道，随时随地尽阅海量资讯</p>
                            <p>译世界资讯 为你捍卫自主阅读的权力</p>
                            <p className="code-box">
                                <img src={code} alt=""/>
                            </p>
                        </div>
                        <div className="right-box">
                            <img src="http://x-test.oss-cn-shenzhen.aliyuncs.com/h5/app_index.jpg" alt=""/>
                        </div>
                        <div className="download-btn-box">
                            <span className="btn-download btn-download-iphone" onClick={this.goToAppStore}>
                                <i className="iconfont icon-iphone"></i>
                                iPhone版下载
                            </span>
                            <span className="btn-download btn-download-android" onClick={this.goToAndroid}>
                                <i className="iconfont icon-Android"></i>
                                andriod版下载
                            </span>
                        </div>
                        <div className="maskBox">
                            <div className="mask" onClick={this.closeMask} style={{'display':this.state.show}}>
                                <p><span className="icon-arrow"><img src={arrow} alt=""/></span></p>
                                <p>点击右上角 <span className="icon-more"><img src={more} alt=""/></span>选择从浏览器打开</p>
                                <p>即可下载app</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<Footer/>*/}
            </div>
        );
    }
}

