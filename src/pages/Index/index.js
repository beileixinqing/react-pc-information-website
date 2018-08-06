import React, { Component } from 'react';
import './index.less';

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import ProfessorList from '../../components/ProfessorList';
import HotNewsList from '../../components/HotNewsList';
import HotTags from '../../components/HotTags';
import Follow from '../../components/Follow';
import ToolBar from '../../components/ToolBar';
import Footer from '../../components/Footer';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="index-container">
                        <div className="left-box">
                            <NewsList type="index"/>
                        </div>
                        <div className="right-box">
                            <ProfessorList/>
                            <HotNewsList/>
                            <HotTags/>
                            <Follow/>
                            <ToolBar/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

