import React, { Component } from 'react';
import { Radio } from 'antd';
import AimingFrequency from '../NoiseInterfere/AimingFrequency';
import BlockingNoise from '../NoiseInterfere/BlockingNoise';
import DopplerNoise from '../NoiseInterfere/DopplerNoise';
import NarrowBandNoise from '../NoiseInterfere/NarrowBandNoise';
import HighRepetitionFrequencyDecoy from '../NoiseInterfere/HighRepetitionFrequencyDecoy';
import styles from './style.less'
const RadioGroup = Radio.Group;
export default class NoiseInterfere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "阻塞噪声",
        }
    }

    onChange = (e) =>{
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        let { signed } = this.props;
        const radioStyle = {
            display: 'block',
            height: '40px',
            lineHeight: '30px',
        };
        console.log("222222222",signed)
        let { value } = this.state;
        let component = null;
        switch (value) {
            // 瞄频噪声
            case '瞄频噪声':
                component = <AimingFrequency Jamvalues={value}  />;
                break;
            // 阻塞噪声
            case '阻塞噪声':
                component = <BlockingNoise Jamvalues={value} signed={signed} />;
                break;
            // 多普勒噪声
            case '多普勒噪声':
                component = <DopplerNoise Jamvalues={value} />;
                break;
            case '窄带噪声':
                component = <NarrowBandNoise Jamvalues={value} />;
                break;
            case '高重频假目标':
                component = <HighRepetitionFrequencyDecoy Jamvalues={value} />;
                break;
            default:
                break;
                break;
        }

        return (
            <div className={styles['NoiseInterfere']}>
                <div>
                    <div>干扰模式</div>
                    <div className={styles['JamRadioLeft']}>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio style={radioStyle} value="阻塞噪声">阻塞噪声</Radio>
                            <Radio style={radioStyle} value="窄带噪声">窄带噪声</Radio>
                            <Radio style={radioStyle} value="瞄频噪声">瞄频噪声</Radio>
                            <Radio style={radioStyle} value="多普勒噪声">多普勒噪声</Radio>
                            <Radio style={radioStyle} value="高重频假目标">高重频假目标</Radio>
                        </RadioGroup>
                    </div>
                    {/* <div style={{ margin: '10px 10px 20px 10px' }}>
                            <input type="radio" value="阻塞噪声" onClick={this.handleclick} name="model" defaultChecked />
                            <span>阻塞噪声</span>
                        </div>
                        <div style={{ margin: '10px 10px 20px 10px' }}>
                            <input type="radio" value="窄带噪声" onClick={this.handleclick} name="model" />
                            <span>窄带噪声</span>
                        </div>
                        <div style={{ margin: '10px 10px 20px 10px' }}>
                            <input type="radio" value="瞄频噪声" name="model" onClick={this.handleclick} />
                            <span>瞄频噪声</span>
                        </div>
                        <div style={{ margin: '10px 10px 20px 10px' }}>
                            <input type="radio" value="多普勒噪声" onClick={this.handleclick} name="model" />
                            <span>多普勒噪声</span>
                        </div> */}
                </div>
                <div className={styles['SecondInterfere']}>
                    {component}
                </div>
            </div>
        )
    }
}