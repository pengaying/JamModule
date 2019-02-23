// 瞄频噪声
import React, { Component } from 'react';
import { Input, Select } from 'antd';
import styles from './style.less';

export default class HighRepetitionFrequencyDecoy extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    ChangeValue = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        const Option = Select.Option;
        return (
            <div className={styles['AimingFrequency']} >
                <div>瞄频噪声</div>
                <>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">起始时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">终止时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '38px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">数量： </label>
                            <span >
                                <Input />
                            </span>
                        </div>
                        <div style={{ marginLeft: '42px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">假目标间隔： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">最大速度： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">m/s</label></span>
                        </div>
                        <div style={{ marginLeft: '30px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">最小速度： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">m/s</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">存储方式： </label>
                            <span >
                                <Select defaultValue="NoModulation" style={{ width: 124 }}>
                                    <Option value="NoModulation">下降沿存储</Option>
                                    <Option value="YesModulation">时间存储</Option>
                                </Select>
                            </span>
                        </div>
                        <div style={{ marginLeft: '32px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">幅度调制： </label>
                            <span >
                                <Select defaultValue="NoModulation" style={{ width: 124 }}>
                                    <Option value="NoModulation">不调制</Option>
                                    <Option value="YesModulation">调制</Option>
                                </Select>
                            </span>
                        </div>
                    </div>
                    <div style={{ marginLeft: '20px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">调制频率： </label>
                        <span >
                            <Input />
                        </span>
                        <span>
                            <label htmlFor="unit">Hz</label>
                        </span>
                    </div>
                </>
            </div>
        )
    }
}
