import React, {Component} from 'react';
import './index.less';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo from '../../images/logo-white.png';

export default class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: true,
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleSearch(keywods) {
        this.setState({
            filterText: keywods
        });
    }

    handleCheckBox(checkBoxStatus) {
        this.setState({
            inStockOnly: checkBoxStatus
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="introduction">
                    <div className="container">
                        <div className="intro-title">
                            智库概况
                        </div>
                        <div className="intro-logo">
                            <img src={logo} alt="华语智库logo" className="logo"/>
                        </div>
                        <br/>
                        <p className="text-center">简介</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;华语经纬（北京）国际文化发展中心，简称：华语智库，是经政府相关部门注册登记的国际文化交流研究机构，致力于打造具有国际影响力的中国民间国际化交流平台，力求为政府有关部门建言献策，为企业提升国际影响力出谋划策。经天纬地，从中国看世界，从世界看中国。</p>

                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;华语经纬（北京）国际文化发展中心拥有一大批在学术界、企业界、媒体等领域具有国际影响力的知名专家、学者和企业家担任理事会特邀嘉宾、理事和学术高级研究员，其中大部分专家长期从事国际问题的调研和报道，有坚实的理论功底、丰富的实践经验和非常高的政治素质。华语经纬（北京）国际文化发展中心以强大的专家智囊团为基础，力求实现“从世界的角度审视中国问题，从中国的视角研究世界问题”，为政府职能部门和中国企业服务。</p>
                        <br/>
                        <p className="text-center">宗旨与任务</p>
                        <p>坚决拥护以习近平同志为核心的中国共产党的领导。</p>
                        <p>坚持道路自信、理论自信、制度自信、文化自信，为实现中华民族伟大复兴的中国梦营造健康的舆论环境。</p>
                        <p>深入开展国际问题研究，为认识世界提供中国观察，为认识中国拓展世界视野。</p>
                        <p>开展学术咨询，为落实“一带一路”倡议服务，为中国企业“走出去”服务。</p>
                        <p>实行专家、媒体、企业三结合，重视新媒体传播，探索学术领域市场化运作的新机制。</p>
                        <p>坚持民族气节、家国情怀，坚持实事求是、脚踏实地，努力创建中国一流民间智库。</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

