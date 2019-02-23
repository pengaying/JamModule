import React, { Component } from 'react'
import styles from './style.less';
import { Radio } from 'antd';
import RadioInvestigation from '../../CommonComponents/RadioInvestigation'
const RadioGroup = Radio.Group;
export default class ModeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tt: 1,
            value: 1,
        }
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    onMouseOver = (e) => {
        this.setState({
            tt: 2,
        })
    }
    onMouseOut = (e) => {
        this.setState({
            tt: 1,
        })
    }
    render() {
        return (
            <div className={styles.JammingMode}>
                <div className={styles.JamButton}>
                    <RadioGroup onChange={this.onChange} value={this.state.value}>
                        <RadioInvestigation value={1} name="自动模式" />
                        <RadioInvestigation value={2} name="手动模式" />
                    </RadioGroup>
                </div>
                <div className={styles.ToolButton_Title}>
                    <span style={{ fontFamily: '微软雅黑', color: '#909cb9' }}>模式选择</span>
                </div>
            </div>
        )
    }
}
