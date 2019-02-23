import React, { Component } from 'react'
import styles from './style.less';
import { Input, Select } from 'antd';
export default class BlockingNoiseAimingFrequency extends Component {
    render() {
        const Option = Select.Option;
        return (
            <div className={styles['NarrowBandNoise']}>
                <div className={styles['NarrowBandNoiseTitle']}>
                    <div>窄带噪声参数</div>
                    <div style={{ marginLeft: '200px' }}>瞄频噪声参数</div>
                </div>
                <div className={styles['NarrowBandNoiseFirst']}>
                    <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">中心频率： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">MHz</label></span>
                    </div>
                    <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">起始时间： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">us</label></span>
                    </div>
                </div>
                <div className={styles['NarrowBandNoiseFirst']}>
                    <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">噪声宽带： </label>
                        <span >
                            <Select defaultValue="80">
                                <Option value="80">80</Option>
                                <Option value="100">100</Option>
                                <Option value="200" >200</Option>
                                <Option value="300">300</Option>
                                <Option value="400">400</Option>
                                <Option value="800">800</Option>
                            </Select>
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
                    <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">接收时间： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">MHz</label></span>
                    </div>
                    <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
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
                    <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">发射时间： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">us</label></span>
                    </div>
                    <div style={{ marginLeft: '40px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">噪声带宽： </label>
                        <span >
                            <Input />
                        </span>
                        <span><label htmlFor="unit">MHz</label></span>
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
                        <label htmlFor="name">组合方式： </label>
                        <span>
                            <Select defaultValue="NoModulation" style={{ width: 124 }}>
                                <Option value="NoModulation">直接叠加</Option>
                                <Option value="YesModulation">分时</Option>
                            </Select>
                        </span>
                        <span>
                            <label htmlFor="unit">us</label>
                        </span>
                    </div>
                </div>
                <div style={{ marginLeft: '34px', marginTop: '5px', marginBottom: '5px' }}>
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
