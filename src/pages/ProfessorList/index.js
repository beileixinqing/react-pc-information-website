import React, { Component } from 'react';
import './index.less';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class ProfessorList extends Component {
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
                <Header/>
                专家列表
                {/*<img src={logo} className="IndexContainer-logo" alt="logo" />*/}
                {/*<h1 className="">Welcome to React</h1>*/}
                <Footer/>
            </div>
        );
    }
}

