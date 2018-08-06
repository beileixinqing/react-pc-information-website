import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.less';
import 'whatwg-fetch'

const footerItem=[
    // {
    //     name:"用户协议",
    //     link:""
    // },
    // {
    //     name:"隐私声明",
    //     link:""
    // },
    // {
    //     name:"关于我们",
    //     link:"/about"
    // },
    // {
    //     name:"联系我们",
    //     link:"/contact"
    // },
    /*{
        name:"生活社区公约",
        link:""
    },
    {
        name:"管理员入口",
        link:""
    },
    {
        name:"中文号入口",
        link:""
    }*/
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
                        return (<span><Link to={value.link} key={index}>{value.name}</Link></span>)
                        })
                    }
                    {/*<a href="https://www.lagou.com/gongsi/j162749.html/" target="_blank">加入我们</a>*/}
                    {/*|*/}
                    {/*<a href="https://www.zhongwentoutiao.com/" target="_blank">译世界资讯</a>*/}
                    {/*|*/}
                    {/*<a href="https://www.shuzizhongwen.com/" target="_blank">唐人家</a>*/}
                </p>
                <p>
                    &copy; Copyright &copy;2003-2018 HEYDAY INTERACTIVE IT CO., LTD.
                </p>
                <p>华语经纬（北京）国际文化发展中心</p>
                <p>Chinese Jingwei (Beijing) International Cultural Development Center</p>
                <p>京ICP备17015534号</p>
            </footer>
        );
    }
}

