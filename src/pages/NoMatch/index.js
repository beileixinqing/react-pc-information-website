import React, { Component } from 'react';
import './index.less';

export default class NoMatch extends Component {
    render() {
        return (
            <div className="no-match">
                <p>哎呀,找不到该页面了……(/ □ \)</p>
            </div>
        );
    }
}

