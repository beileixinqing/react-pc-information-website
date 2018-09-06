import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';
import 'whatwg-fetch'

const footerItem=[
    {
        name:"下载APP",
        link:"/download"
    },
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
];

export default class NewsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsList: [],
            inStockOnly: true,
        };
    }
    componentDidMount(){
    }
    render() {
        return (
            <footer className="container">
                <p>
                    {footerItem.map((value,index) => {
                        return (<span><Link to={value.link} key={index} target="_blank">{value.name}</Link> | </span>)
                        })
                    }
                    <span><a href="https://internal.zhongwentoutiao.com/admin/news_list" target="_blank" rel="noopener noreferrer">管理员入口</a></span>
                    |
                    <span><a href="https://internal.zhongwentoutiao.com/pub/news_list" target="_blank" rel="noopener noreferrer">中文号</a></span>
                    |
                    <span><a href="https://www.shuzizhongwen.com/" target="_blank" rel="noopener noreferrer">唐人家</a></span>
                    |
                    <span><a href="https://www.huayuzhiku.com" target="_blank" rel="noopener noreferrer">华语智库</a></span>
                    |
                    <span><a href="https://m.zhongwentoutiao.com" rel="noopener noreferrer">手机版</a></span>
                </p>
                <p>
                    &copy; Copyright &copy;2003-2018 HEYDAY INTERACTIVE IT CO., LTD.
                </p>
                <p>华语互动信息科技(北京)股份有限公司 版权所有</p>
                <p>京ICP备17015534号-1</p>
            </footer>
        );
    }
}

