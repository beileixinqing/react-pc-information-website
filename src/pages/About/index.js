import React, { Component } from 'react';
import './index.less';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

export default class About extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">
                <TopBar/>
                关于我们页面
                <Footer/>
            </div>
        );
    }
}

