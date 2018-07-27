import React, { Component } from 'react';
import './index.less';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

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
            <div className="container">
                <TopBar/>
                联系我们页面
                {/*<Header className="">*/}
                {/*<img src={logo} className="IndexContainer-logo" alt="logo" />*/}
                {/*<h1 className="">Welcome to React</h1>*/}
                <Footer/>
            </div>
        );
    }
}

