import React, { Component } from 'react';
import './index.less';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

export default class NoMatch extends Component {
    render() {
        return (
            <div className="no-match">
                <p>哎呀,小库找不到该页面……(/ □ \)</p>
            </div>
        );
    }
}

