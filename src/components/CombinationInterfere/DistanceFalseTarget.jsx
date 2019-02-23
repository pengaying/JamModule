import React, { Component } from 'react'
import styles from './style.less';
import { Input, Select } from 'antd';
export default class BlockingNoiseAimingFrequency extends Component {
    render() {
        const Option = Select.Option;
        return (
            <div className={styles['NarrowBandNoise']}>
                <div className={styles['NarrowBandNoiseTitle']}>
                    <div>距离假目标参数</div>
                    <div style={{ marginLeft: '180px' }}>瞄频噪声参数</div>
                </div>
                <div className={styles['NarrowBandNoiseFirst']}>
                    <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">起始时间： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">us</label></span>
                    </div>
                    <div style={{ marginLeft: '30px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">起始时间： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">us</label></span>
                    </div>
                </div>
                <div className={styles['NarrowBandNoiseFirst']}>
                    <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">终止时间： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">us</label></span>
                    </div>
                    <div style={{ marginLeft: '30px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">终止时间： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">us</label></span>
                    </div>
                </div>
                <div className={styles['NarrowBandNoiseFirst']}>
                    <div style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">假目标数量： </label>
                        <span >
                            <Input />
                        </span>
                    </div>
                    <div style={{ marginLeft: '45px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">存储方式： </label>
                        <span >
                            <Select defaultValue="NoModulation" style={{ width: 124 }}>
                                <Option value="NoModulation">下降沿存储</Option>
                                <Option value="YesModulation">时间存储</Option>
                            </Select>
                        </span>
                    </div>
                </div>
                <div className={styles['NarrowBandNoiseFirst']}>
                    <div style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">假目标间隔： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">us</label></span>
                    </div>
                    <div style={{ marginLeft: '30px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">噪声带宽： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">MHz</label></span>
                    </div>
                </div>
                <div className={styles['NarrowBandNoiseFirst']}>
                    <div style={{ marginLeft: '52px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">速度： </label>
                        <span >
                            <Input />
                        </span>
                    </div>
                    <div style={{ marginLeft: '45px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">幅度调制： </label>
                        <span >
                            <Select defaultValue="NoModulation" style={{ width: 124 }}>
                                <Option value="NoModulation">不调制</Option>
                                <Option value="YesModulation">调制</Option>
                            </Select>
                        </span>
                    </div>
                </div>
                <div style={{ marginLeft: '252px', marginTop: '5px', marginBottom: '5px' }}>
                    <label htmlFor="name">调制频率： </label>
                    <span>
                        <Input />
                    </span>
                    <span>
                        <label htmlFor="unit">Hz</label>
                    </span>
                </div>
            </div>
        )
    }
}
