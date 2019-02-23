// 阻塞噪声
import React, { Component } from 'react'
import { Input, Select } from 'antd';
import styles from './style.less';
import { connect } from 'dva';
import propTypes from 'prop-types';

@connect(({ jammingProgramData }) => ({
    jammingProgramData
}))
export default class BlockingNoise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SpanValue: 80,
            ScopeValue: '不调制',
            type:'',
            value:'',
        }
    }
    getChildContext() {
        return {
                type:this.state.type,
                value:this.state.value,
        }
    }
    handleChange(e, type) {
        
        if(e ===null){
            this.setState({
                type,
                value: e.target.value,
            })
        }else{
            this.setState({
                type,
                value:e,
            })
        }
    

        // const { dispatch } = this.props;
        // // let BlockValue = [];
        // // BlockValue.push({
        // //     Jamvalues: this.props.Jamvalues,
        // //     FreqValue: this.state.FreqValue,
        // //     SpanValue: this.state.SpanValue,
        // //     ReciveValue: this.state.ReciveValue,
        // //     EmitTimeValue: this.state.EmitTimeValue,
        // //     ScopeValue: this.state.ScopeValue,
        // //     TZFreqValue: this.state.TZFreqValue,
        // // })
        // dispatch({
        //     type: 'jammingProgramData/JamBlockingData',
        //     payload: 1,
        // });
    }
    // handleChangeFreq = (e) => {
    //     this.setState({
    //         FreqValue: e.target.value
    //     })
    //     this.state.BlockValue.push({
    //         FreqValue: e.target.value
    //     })
    // }
    // handleChangeSpan = (value) => {
    //     this.setState({
    //         SpanValue: value,
    //     })
    //     this.state.BlockValue.push({
    //         SpanValue: value,
    //     })
    // }
    // handleChangeRecive = (e) => {
    //     this.setState({
    //         ReciveValue: e.target.value,
    //     })
    //     this.handleChange()
    // }
    // handleChangeEmitTime = (e) => {
    //     this.setState({
    //         EmitTimeValue: e.target.value,
    //     })
    //     this.handleChange()
    // }
    // handleChangeScope = (value) => {
    //     this.setState({
    //         ScopeValue: value,
    //     })
    //     this.handleChange()
    // }
    // handleChangeTZFreq = (e) => {
    //     this.setState({
    //         TZFreqValue: e.target.value,
    //     })
    //     this.handleChange()
    // }
    // componentU(){
    //     this.setState({
    //         BlockValue: [],
    //     })
    // }
    // componentDidMount () {
    //     const { dispatch } = this.props;
    //         let BlockValue = [];
    //         BlockValue.push({
    //             Jamvalues: this.props.Jamvalues,
    //             FreqValue: this.state.FreqValue,
    //             SpanValue: this.state.SpanValue,
    //             ReciveValue: this.state.ReciveValue,
    //             EmitTimeValue: this.state.EmitTimeValue,
    //             ScopeValue: this.state.ScopeValue,
    //             TZFreqValue: this.state.TZFreqValue,
    //         })
    //         debugger
    //         if (this.props.signed === 1) {
    //             dispatch({
    //                 type: 'jammingProgramData/JamBlockingData',
    //                 payload: BlockValue,
    //             });
    //         }
    // this.setState({
    //     signed: nextProps.signed
    // })
    // }

    // componentDidMount() {
    //     const { dispatch } = this.props;
    //     let BlockValue = [];
    //     BlockValue.push({
    //         Jamvalues: this.props.Jamvalues,
    //         FreqValue: this.state.FreqValue,
    //         SpanValue: this.state.SpanValue,
    //         ReciveValue: this.state.ReciveValue,
    //         EmitTimeValue: this.state.EmitTimeValue,
    //         ScopeValue: this.state.ScopeValue,
    //         TZFreqValue: this.state.TZFreqValue,
    //     })
    //     debugger
    //     if (this.props.signed === 1) {
    //         dispatch({
    //             type: 'jammingProgramData/JamBlockingData',
    //             payload: BlockValue,
    //         });
    //     }
    // }

    render() {
        console.log(this.state.type, '55555555555')
        // const { dispatch } = this.props;
        let { value } = this.state;
        console.log('zusai', value);
        let { Jamvalues } = this.props;
        console.log('122', Jamvalues)
        const Option = Select.Option;

        // let BlockValue = [];
        // BlockValue.push({
        //     Jamvalues: this.props.Jamvalues,
        //     FreqValue: this.state.FreqValue,
        //     SpanValue: this.state.SpanValue,
        //     ReciveValue: this.state.ReciveValue,
        //     EmitTimeValue: this.state.EmitTimeValue,
        //     ScopeValue: this.state.ScopeValue,
        //     TZFreqValue: this.state.TZFreqValue,
        // })
        // if (this.props.signed===1 ) {
        //         dispatch({
        //             type: 'jammingProgramData/JamBlockingData',
        //             payload:BlockValue,
        //         });
        //     }
        return (
            <div className={styles['AimingFrequency']}>
                <div>阻塞噪声参数</div>
                <>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">信号频率： </label>
                            <span >
                                <Input onChange={(e) => this.handleChange(e, 'signalFreq')} />
                            </span>
                            <span><label htmlFor="unit">MHz</label></span>
                        </div>
                        <div style={{ marginLeft: '25px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">噪声宽带： </label>
                            <span >
                                <Select onChange={(e) => this.handleChange(e, 'noiseBand')} defaultValue="80">
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
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">接收时间： </label>
                            <span >
                                <Input onChange={(e) => this.handleChange(e, 'receiptTime')} />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                        <div style={{ marginLeft: '42px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">发射时间： </label>
                            <span >
                                <Input onChange={(e) => this.handleChange(e, 'emitTime')} />
                            </span>
                            <span><label htmlFor="unit">us</label></span>
                        </div>
                    </div>
                    <div className={styles['NarrowBandNoiseFirst']}>
                        <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">幅度调制： </label>
                            <span >
                                <Select onChange={(e) => this.handleChange(e, 'AM')} defaultValue="NoModulation" style={{ width: 124 }}>
                                    <Option value="NoModulation">不调制</Option>
                                    <Option value="YesModulation">调制</Option>
                                </Select>
                            </span>
                        </div>
                        <div style={{ marginLeft: '32px', marginTop: '5px', marginBottom: '5px' }}>
                            <label htmlFor="name">调制频率： </label>
                            <span >
                                <Input onChange={(e) => this.handleChange(e, 'modulationFreq')} />
                            </span>
                            <span><label htmlFor="unit">Hz</label></span>
                        </div>
                    </div>
                </>
            </div >
        )
    }
}

BlockingNoise.propTypes = {
    type:propTypes.string,
    value:propTypes.string,
};
