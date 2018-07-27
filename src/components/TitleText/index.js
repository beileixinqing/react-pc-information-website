import React, { Component } from 'react';
import './index.less';

export default class TitleText extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="title-text">
                — {this.props.headerName}
            </div>
        );
    }
}

