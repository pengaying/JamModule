import React, { Component } from 'react'
import styles from './style.less';
import { Input, Checkbox } from 'antd';
export default class SARInterfere extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked1: true,
            disabled1: false,
            checked2: true,
            disabled2: false,
            checked3: true,
            disabled3: false,
        }
    }
    onChange1 = (e) => {
        this.setState({

            checked1: !this.state.checked1,
            disabled1: !this.state.disabled1,
        })
    }

    onChange2 = (e) => {
        this.setState({
            checked2: !this.state.checked2,
            disabled2: !this.state.disabled2,
        })
    }
    onChange3 = (e) => {
        this.setState({
            checked3: !this.state.checked3,
            disabled3: !this.state.disabled3,
        })
    }
    render() {
        console.log(this.state.checkValue)
        let { checked1, disabled1, checked2, disabled2, checked3, disabled3 } = this.state;
        console.log("disabled", this.state.disabled)
        return (
            <div className={styles['NarrowBandNoise']}>
                <div>SAR干扰</div>
                <>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '23px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">起始时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                        <div style={{ marginLeft: '60px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">终止时间： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '9px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">假目标数量： </label>
                            <span >
                                <Input />
                            </span>
                        </div>
                        <div style={{ marginLeft: '62px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">假目标间隔： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '-5px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">目标平台速度： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">m/s</label></span>
                        </div>
                        <div style={{ marginLeft: '22px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">目标平台斜距： </label>
                            <span >
                                <Input />
                            </span>
                            <span><label htmlFor="unit">km</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                            <Checkbox checked={checked1} onChange={this.onChange1}>条带干扰</Checkbox>
                        </div>
                        <div style={{ marginLeft: '160px', marginTop: '5px', marginBottom: '5px' }}>
                            <Checkbox checked={checked2} onChange={this.onChange2}>网状干扰</Checkbox>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '23px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">固定移频： </label>
                            <span >
                                <Input disabled={disabled1} />
                            </span>
                            <span><label htmlFor="unit">米</label></span>
                        </div>
                        <div style={{ marginLeft: '48px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">距离向间隔： </label>
                            <span >
                                <Input disabled={disabled2} />
                            </span>
                            <span><label htmlFor="unit">米</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                            <Checkbox checked={checked3} onChange={this.onChange3}>条带干扰</Checkbox>
                        </div>
                        <div style={{ marginLeft: '153px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">距离向长度： </label>
                            <span >
                                <Input disabled={disabled2} />
                            </span>
                            <span><label htmlFor="unit">米</label></span>
                        </div>
                    </div>
                    <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                        <label htmlFor="name">方位向间隔： </label>
                        <span >
                            <Input disabled={disabled3} />
                        </span>
                        <span><label htmlFor="unit">米</label></span>
                    </div>
                    <div style={{ marginLeft: '18px', marginTop: '0px', marginBottom: '5px' }}>
                        <label htmlFor="name">方位向长度： </label>
                        <span >
                            <Input disabled={disabled3} />
                        </span>
                        <span><label htmlFor="unit">米</label></span>
                    </div>
                </>
            </div >
        )
    }
}
