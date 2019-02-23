import React, { Component } from 'react';
import DistanceCheatInterfere from '../CheatInterfere/DistanceCheatInterfere';
import SpeedCheatInterfere from '../CheatInterfere/SpeedCheatInterfere';
import RandomDecoy  from '../CheatInterfere/RandomDecoy';
import CoherentDecoy from '../CheatInterfere/CoherentDecoy';
import { Radio } from 'antd';
import DistanceSpeedCheat from '../CheatInterfere/DistanceSpeedCheat';
import styles from './style.less'
const RadioGroup = Radio.Group;
export default class NoiseInterfere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "距离欺骗",
        }
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        const radioStyle = {
            display: 'block',
            height: '40px',
            lineHeight: '30px',
        };
        let { value } = this.state;
        let component = null;
        switch (value) {
            // 距离欺骗
            case '距离欺骗':
                component = <DistanceCheatInterfere />;
                break;
            // 速度欺骗
            case '速度欺骗':
                component = <SpeedCheatInterfere />;
                break;
            // 随机假目标
            case '随机假目标':
                component = <RandomDecoy />;
                break;
            case '相干假目标':
                component = <CoherentDecoy />;
                break;
            case '距离和速度复合欺骗':
                component = <DistanceSpeedCheat />;
                break;
            default:
                break;
        }
        return (
            <div className={styles['NoiseInterfere']}>
                <div>
                    <div>欺骗模式</div>
                    <div className={styles['JamRadioLeft']}>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio style={radioStyle} value="距离欺骗">距离欺骗</Radio>
                            <Radio style={radioStyle} value="速度欺骗">速度欺骗</Radio>
                            <Radio style={radioStyle} value="随机假目标">随机假目标</Radio>
                            <Radio style={radioStyle} value="相干假目标">相干假目标</Radio>
                            <Radio style={radioStyle} value="距离和速度复合欺骗">距离和速度复合欺骗</Radio>
                        </RadioGroup>
                    </div>
                    {/* <div style={{ margin: '10px 10px 20px 10px' }}>
                        <input type="radio" value="距离欺骗" onClick={this.handleclick} name="model" defaultChecked  />
                        <span>距离欺骗</span>
                    </div>
                    <div style={{ margin: '10px 10px 20px 10px' }}>
                        <input type="radio" value="速度欺骗" onClick={this.handleclick} name="model" />
                        <span>速度欺骗</span>
                    </div>
                    <div style={{ margin: '10px 10px 20px 10px' }}>
                        <input type="radio" value="随机假目标" name="model" onClick={this.handleclick} />
                        <span>随机假目标</span>
                    </div>
                    <div style={{ margin: '10px 10px 20px 10px' }}>
                        <input type="radio" value="相干假目标" name="model" onClick={this.handleclick} />
                        <span>相干假目标</span>
                    </div>
                    <div style={{ margin: '10px 10px 20px 10px' }}>
                        <input type="radio" value="距离和速度复合欺骗" onClick={this.handleclick} name="model" />
                        <span>距离和速度复合欺骗</span>
                    </div> */}
                </div>
                <div className={styles['SecondInterfere']}>
                    {component}
                </div>
            </div>
        )
    }
}