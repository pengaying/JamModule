// 瞄频噪声
import React, { Component } from 'react';
import { Input, Select } from 'antd';
import styles from './style.less';

export default class AimingFrequency extends Component {
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
        console.log('11',this.props.Jamvalues)
        const Option = Select.Option;
        return (
            <div className={styles['AimingFrequency']} >
                <div>瞄频噪声</div>
                <>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">噪声带宽： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">起始时间： </label>
                            <span >
                                <Input defaultValue="50"/>
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">终止时间： </label>
                            <span >
                                <Input defaultValue="100"/>
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                        <div style={{ marginLeft: '40px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">存储方式： </label>
                            <span >
                                <Select defaultValue="NoModulation" >
                                    <Option value="NoModulation">下降沿存储</Option>
                                    <Option value="YesModulation">时间存储</Option>
                                </Select>
                            </span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">幅度调制： </label>
                            <span >
                                <Select defaultValue="NoModulation">
                                    <Option value="NoModulation">不调制</Option>
                                    <Option value="YesModulation">调制</Option>
                                </Select>
                            </span>
                        </div>
                        <div style={{ marginLeft: '32px', marginTop: '5px', marginBottom: '5px' }}>
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
