import React, { Component } from 'react';
import './index.less';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

export default class Search extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">
                <TopBar/>
                搜索页面
                <Footer/>
            </div>
        );
    }
}

