import React, { Component } from 'react';
import { Radio } from 'antd';
import './RadioInvestigation.less'

export default class RadioInvestigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
    }
    render() {
        let { name } = this.props;
        console.log(name);
        return (
            <Radio onChange={this.props.Change} value={this.props.value}>{name}</Radio>
        )
    }
}
