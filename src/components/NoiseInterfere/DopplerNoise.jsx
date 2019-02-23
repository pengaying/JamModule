//多普勒噪声
import React, { Component } from 'react'
import styles from './style.less';
import { Input, Select } from 'antd';
export default class DopplerNoise extends Component {
    render() {
        const Option = Select.Option;
        return (
            <div className={styles['AimingFrequency']}>
                <div>多普勒噪声参数</div>
                <>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">频偏下限： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">kHz</label></span>
                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">频偏上限： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">kHz</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">起始时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                        <div style={{ marginLeft: '34px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">终止时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">幅度调制： </label>
                            <span >
                                <Select defaultValue="NoModulation" style={{ width: 124 }}>
                                    <Option value="NoModulation">不调制</Option>
                                    <Option value="YesModulation">调制</Option>
                                </Select>
                            </span>
                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">调制频率： </label>
                            <span >
                                <Input />
                            </span>
                            <span>
                                <label htmlFor="unit">Hz</label>
                            </span>
                        </div>
                    </div>
                </>
            </div>
        )
    }
}
