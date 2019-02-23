import React, { Component } from 'react';
import BlockingNoiseAimingFrequency from '../CombinationInterfere/BlockingNoiseAimingFrequency';
import DistanceFalseTarget from '../CombinationInterfere/DistanceFalseTarget';
import SARInterfere from '../CombinationInterfere/SARInterfere';
import { Radio } from 'antd';
import styles from './style.less';
const RadioGroup = Radio.Group;
export default class NoiseInterfere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "阻塞噪声+瞄频噪声",
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
            // 阻塞噪声+瞄频噪声
            case '阻塞噪声+瞄频噪声':
                component = <BlockingNoiseAimingFrequency />;
                break;
            // 速度欺骗
            case '瞄频噪声+距离假目标':
                component = <DistanceFalseTarget />;
                break;
            // SAR干扰
            case 'SAR干扰':
                component = <SARInterfere />;
                break;
            default:
                break;
        }
        return (
            <div className={styles['NoiseInterfere']}>
                <div>
                    <div>组合干扰</div>
                    <div className={styles['JamRadioLeft']}>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio style={radioStyle} value="阻塞噪声+瞄频噪声">阻塞噪声+瞄频噪声</Radio>
                            <Radio style={radioStyle} value="瞄频噪声+距离假目标">瞄频噪声+距离假目标</Radio>
                            <Radio style={radioStyle} value="SAR干扰">SAR干扰</Radio>
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