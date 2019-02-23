import React, { Component } from 'react';
import styles from './style.less';
import { Input, Select } from 'antd';
export default class CoherentDecoy extends Component {
    render() {
        const Option = Select.Option;
        return (
            <div className={styles['NarrowBandNoise']}>
                <div>距离欺骗</div>
                <>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">起始时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                        <div style={{ marginLeft: '27px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">终止时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '52px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">数量： </label>
                            <span >
                                <Input />
                            </span>
                        </div>
                        <div style={{ marginLeft: '42px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">最小间隔： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">最大间隔： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                        <div style={{ marginLeft: '55px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">速度： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">m/s</label></span>
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
                        <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">调制频率： </label>
                            <span>
                                <Input />
                            </span>
                            <span>
                                <label htmlFor="unit">Hz</label>
                            </span>
                        </div>
                    </div>
                </>
            </div >
        )
    }
}
