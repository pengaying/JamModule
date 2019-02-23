// 窄带噪声
import React, { Component } from 'react'
import styles from './style.less';
import { Input, Select } from 'antd';

export default class SpeedCheatInterfere extends Component {
    render() {
        const Option = Select.Option;
        return (
            <div className={styles['NarrowBandNoise']}>
                <div>速度欺骗</div>
                <>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">起始速度： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">m/s</label></span>
                        </div>
                        <div style={{ marginLeft: '30px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">终止速度： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">m/s</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">假目标数量： </label>
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
                        <div style={{ marginLeft: '52px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">方向： </label>
                            <span >
                                <Select defaultValue="NoModulation" style={{ width: 124 }}>
                                    <Option value="NoModulation">向雷达方向运动</Option>
                                    <Option value="YesModulation">向远离雷达方向运动</Option>
                                </Select>
                            </span>
                        </div>
                        <div style={{ marginLeft: '32px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">起托时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">s</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">托引时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">s</label></span>
                        </div>
                        <div style={{ marginLeft: '48px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">停托时间： </label>
                            <span>
                                <Input />
                            </span>
                            <span>
                                <label htmlFor="unit">us</label>
                            </span>
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
                        <div style={{ marginLeft: '32px', marginTop: '5px', marginBottom: '5px' }}>
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
