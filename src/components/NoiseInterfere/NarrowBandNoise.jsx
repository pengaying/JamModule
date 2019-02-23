// 窄带噪声
import React, { Component } from 'react'
import styles from './style.less';
import { Input, Select } from 'antd';
export default class NarrowBandNoise extends Component {
    render() {
        const Option = Select.Option;
        return (
            <div className={styles['NarrowBandNoise']}>
                <div>窄带噪声参数</div>
                <>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">中心频率1： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">中心频率2： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">中心频率3： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">中心频率4： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">中心频率5： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">中心频率6： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">中心频率7： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">中心频率8： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '32px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">接收时间： </label>
                            <span>
                                <Input />
                            </span>
                            <span>
                                <label htmlFor="unit">us</label>
                            </span>
                        </div>
                        <div style={{ marginLeft: '48px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">发射时间： </label>
                            <span>
                                <Input />
                            </span>
                            <span>
                                <label htmlFor="unit">us</label>
                            </span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '32px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">幅度调制： </label>
                            <span >
                                <Select defaultValue="NoModulation" style={{ width: 124 }}>
                                    <Option value="NoModulation">不调制</Option>
                                    <Option value="YesModulation">调制</Option>
                                </Select>
                            </span>
                        </div>
                        <div style={{ marginLeft: '40px', marginTop: '5px', marginBottom: '5px' }}>
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
