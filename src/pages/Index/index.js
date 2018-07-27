import React, { Component } from 'react';
import './index.less';

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import ProfessorList from '../../components/ProfessorList';
import HotTags from '../../components/HotTags';
import Follow from '../../components/Follow';
import Footer from '../../components/Footer';

export default class Index extends Component {
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
            <div className="wrapper">
                <Header/>
                <div className="container">
                    <div className="index-container">
                        <div className="left-box">
                            <NewsList/>
                        </div>
                        <div className="right-box">
                            <ProfessorList/>
                            <HotTags/>
                            <Follow/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

