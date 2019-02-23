import React, { Component } from 'react'
import { Checkbox } from 'antd';
export default class CheckInvestigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // checked: this.props.checked,
        }
    }

    render() {
        console.log('jjj',this.state.checked)
        return (
            <Checkbox onChange={this.props.Change}>{this.props.CheckName}</Checkbox>
        )
    }
}
