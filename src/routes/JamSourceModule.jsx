import React, { Component, Fragment } from 'react';
import styles from './JamSourceModule.less'
import { Route, Switch } from 'dva/router';
import { connect } from 'dva';
import whiteLight from '../assets/2_choice.png'
import greenLight from '../assets/png133_020.png'
import redLight from '../assets/png133_099.png'


import { Modal } from 'antd'
import dynamic from 'dva/dynamic';
import DisplayJammingMode from './DisplayJammingMode'
import * as app from '..';
import ModeSelect from '../components/Menue/ModeSelect';
import FrequencyPointProtection from '../components/Menue/FrequencyPointProtection';
import BandProtection from '../components/Menue/BandProtection';
import JammingMode from '../components/Menue/JammingMode';
import SectorProtection from '../components/Menue/SectorProtection';
import TargetAssignment from '../components/Menue/TargetAssignment';
import CWControl from '../components/Menue/CWControl';
import { isUndefined } from 'util';


export default class Extension extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className={styles['system-layout']}>
                    {/* 菜单栏 */}
                    <SystemMenue />
                    {/* 内容区 */}
                    <Content />
                </div>
            </div>
        )
    }
}
function SystemMenue() {
    const selectvalue = ['不调制', '调制'];

    return (
        <div className={styles['system-menue']}>
            <ModeSelect />
            <FrequencyPointProtection />
            <BandProtection />
            <SectorProtection />
            <JammingMode />
            <TargetAssignment />
            <CWControl />
            {/* <FloatingWindows /> */}
        </div>
    )
}
function Content() {
    return (
        <div className={styles.Layout_Content}>
            {/* 上部分 */}
            <div className={styles.Top_Content}>
                {/* 弹窗区域 */}
                <div className={styles.Popup_Content}>
                    <Switch>
                        <Route path='/jammingModeSet' exact component={
                            dynamic({
                                app,
                                component: () => import('./JammingModeSet')
                            })
                        } />
                        <Route path='/rfrequencypointProtection' component={
                            dynamic({
                                app,
                                component: () => import('./RFrequencypointProtection')
                            })
                        } />
                        <Route path='/rbandProtection' component={
                            dynamic({
                                app,
                                component: () => import('./RBandProtection')
                            })
                        } />
                        <Route path='/rsectorProtection' component={
                            dynamic({
                                app,
                                component: () => import('./RSectorProtection')
                            })
                        } />
                        <Route path='/rcwcontrol' component={
                            dynamic({
                                app,
                                component: () => import('./RCWControl')
                            })
                        } />
                        <Route path='/rtargetAllocation' component={
                            dynamic({
                                app,
                                component: () => import('./RTargetAllocation')
                            })
                        } />
                        <Route path='/displayJammingMode' component={
                            dynamic({
                                app,
                                component: () => import('./DisplayJammingMode')
                            })
                        } />
                    </Switch>
                </div>
                <div className={styles['right_content']}>
                    <div className={styles.LayoutSide}>
                        <div className={styles.Button_Control_Seventeen}>
                            {/* 系统状态 */}
                            <span style={{ fontSize: '14px', color: '#6a6a6a', fontFamily: 'PingFangSC-Regular', lineHeight: '20px', marginLeft: '10px', marginTop: '15px' }}>
                                系统状态
                            </span>
                            <br />
                            <div className={styles.SystemState_Button}>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>测频</span>
                                </div>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>测向</span>
                                </div>
                                <JamSourcePop />
                                <br />
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>伺服</span>
                                </div>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>脉内</span>
                                </div>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>液冷</span>
                                </div>
                                <br />
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>电源</span>
                                </div>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>功率</span>
                                </div>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>状态</span>
                                </div>
                                <br />
                                <div className={styles.ButtonImages_interface}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section_interface}>接口/电源1</span>
                                </div>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>接口/电源2</span>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className={styles.Button_Control_Three}>
                            {/* 发射机 */}
                            <span style={{ fontSize: '14px', color: '#6a6a6a', fontFamily: 'PingFangSC-Regular', lineHeight: '20px', marginLeft: '10px', marginTop: '15px' }}>
                                发射机(0.5~2G)
                        </span>
                            <div style={{ height: '70px', width: '290px' }}>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} id='Electric' className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>电源</span>
                                </div>
                                <div className={styles.ButtonImages}>
                                    <img src={require('../assets/2_choice.png')} id='Power' className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>功率</span>
                                </div>

                                <div className={styles.ButtonImages} >
                                    <img src={require('../assets/2_choice.png')} id='State' className={styles.Image} alt='图片' />
                                    <span className={styles.span_section}>状态</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* 下边停靠区 */}
            <div className={styles.Bottom_Content}>
                <DisplayJammingMode />
            </div>
        </div>
    )
}



@connect(({ socketio }) => ({
    socketio
}))

class JamSourcePop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    handleJamClick = () => {
        this.setState({
            visible: true
        })
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    // let light1 = whiteLight;
    // let light2 = whiteLight;
    // let light3 = whiteLight;
    // let light4 = whiteLight;
    // let light5 = whiteLight;
    // let light6 = whiteLight;
    // let light7 = whiteLight;
    // let light8 = whiteLight;
    // let light9 = whiteLight;
    // let light10 = whiteLight;
    // let light11 = whiteLight;
    // let light12 = whiteLight;
    // let light13 = whiteLight;    
    render() {
        let lights = ['light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7',
            'light8', 'light9', 'light10', 'light11', 'light12'
        ];
        let light = whiteLight;

        // if (this.props.socketio.default !== null) {
        // light = this.props.socketio.data;
        // for (let i = 0; i < 4; i++) {
        //     if (this.props.socketio.data[1 + 5 * i] != null) {//DCJS1、2、3、4z组的第一位
        //         if (this.props.socketio.data[1 + 5 * i] === 1) {
        //             lights[5 * i] = redLight;
        //         }
        //         else if (this.props.socketio.data[1 + 5 * i] === 0) {
        //             lights[5 * i] = greenLight;
        //         }
        //     }

        //     if (this.props.socketio.data[2 + 5 * i] != null) {
        //         if (this.props.socketio.data[2 + 5 * i] === 1) {
        //             lights[1 + 5 * i] = redLight;
        //         }
        //         else if (this.props.socketio.data[2 + 5 * i] === 0) {
        //             lights[1 + 5 * i] = greenLight;
        //         }
        //     }

        //     if (this.props.socketio.data[3 + 5 * i] != null) {
        //         if (this.props.socketio.data[3 + 5 * i] === 1) {
        //             lights[2 + 5 * i] = redLight;
        //         }
        //         else if (this.props.socketio.data[3 + 5 * i] === 0) {
        //             lights[2 + 5 * i] = greenLight;
        //         }
        //     }

        //     // if (this.props.socketio.data[4 + 5 * i] != null) {
        //     //     let ADTemp = this.props.socketio.data[4 + 5 * i];
        //     // }

        //     // if (this.props.socketio.data[5 + 5 * i] != null) {
        //     //     let FpgaTemp = this.props.socketio.data[4 + 5 * i];
        //     // }
        // }
        // }
        // if (this.props.socketio.default === 'default') {
        //     light = whiteLight;
        //     for (let i = 0; i < 12; i++) {
        //         lights[i];
        //     }
        // let ADTemp = " ";
        // let FpgaTemp = " ";
        // }

        for (let i = 0; i < 12; i++) {
            lights[i];
        }

        return (
            <Fragment>
                <div className={styles.ButtonImages}>
                    <img src={require('../assets/2_choice.png')} onClick={this.handleJamClick} className={styles.Image} alt='图片' />
                    <span className={styles.span_section}>干扰</span>
                </div>

                <Modal
                    title="干扰状态"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    className={styles.jamModalpop}
                    mask={false}
                >
                    <div>
                        {/* <div>干扰控制板</div> */}
                        <div className={styles.ButtonImages} style={{ marginRight: '200px' }}>
                            <span className={styles.span_jamsource}>干扰控制板</span>
                            <img
                                // src={light}
                                src={require('../assets/2_choice.png')}
                                id='Electric' className={styles.Image} alt='图片' />
                        </div>

                        <div className={styles.jamPop}>
                            <div style={{ fontWeight: 'bold' }}>DCJS1</div>
                            <div>
                                <div className={styles.ButtonImages}>
                                    <div className={styles.span_jamsection}>AD</div>
                                    <img
                                        // src={lights[0]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.ButtonImages}>
                                    <div className={styles.span_jamsection}>DA</div>
                                    <img
                                        // src={lights[1]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.ButtonImages}>
                                    <span className={styles.span_memorysection}>存储器</span>
                                    <img
                                        // src={lights[2]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div style={{ float: 'left', width: '100px' }}>
                                    <p>
                                        AD温度：
                                        {/* {this.props.socketio.data !== null ? this.props.socketio.data[5] : ""} */}
                                    </p>
                                </div>
                                <div style={{ float: 'left', width: '100px' }}>
                                    <p>
                                        FPGA温度：
                                        {/* {this.props.socketio.data !== null ? this.props.socketio.data[6] : " "} */}
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className={styles.jamPop}>
                            <div style={{ fontWeight: 'bold' }}>DCJS2</div>
                            <div>
                                <div className={styles.ButtonImages}>
                                    <div className={styles.span_jamsection}>AD</div>
                                    <img
                                        // src={lights[3]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.ButtonImages}>
                                    <div className={styles.span_jamsection}>DA</div>
                                    <img
                                        // src={lights[4]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.ButtonImages}>
                                    <span className={styles.span_memorysection}>存储器</span>
                                    <img
                                        // src={lights[5]}          
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div style={{ float: 'left', width: '100px' }}>
                                    <p>
                                        AD温度：
                                        {/* {this.props.socketio.data !== null ? this.props.socketio.data[10] : ""} */}
                                    </p>
                                </div>
                                <div style={{ float: 'left', width: '100px' }}>
                                    <p>
                                        FPGA温度：
                                        {/* {this.props.socketio.data !== null ? this.props.socketio.data[11] : ""} */}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.jamPop}>
                            <div style={{ fontWeight: 'bold' }}>DCJS3</div>
                            <div>
                                <div className={styles.ButtonImages}>
                                    <div className={styles.span_jamsection}>AD</div>
                                    <img
                                        // src={lights[6]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.ButtonImages}>
                                    <div className={styles.span_jamsection}>DA</div>
                                    <img
                                        // src={lights[7]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.ButtonImages}>
                                    <span className={styles.span_memorysection}>存储器</span>
                                    <img
                                        // src={lights[8]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div style={{ float: 'left', width: '100px' }}>
                                    <p>
                                        AD温度：
                                        {/* {this.props.socketio.data !== null ? this.props.socketio.data[15] : ""} */}
                                    </p>
                                </div>
                                <div style={{ float: 'left', width: '100px' }}>
                                    <p>
                                        FPGA温度：
                                        {/* {this.props.socketio.data !== null ? this.props.socketio.data[16] : ""} */}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.jamPop}>
                            <div style={{ fontWeight: 'bold' }}>DCJS4</div>
                            <div>
                                <div className={styles.ButtonImages}>
                                    <div className={styles.span_jamsection}>AD</div>
                                    <img
                                        // src={lights[9]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.ButtonImages}>
                                    <div className={styles.span_jamsection}>DA</div>
                                    <img
                                        // src={lights[10]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div className={styles.ButtonImages}>
                                    <span className={styles.span_memorysection}>存储器</span>
                                    <img
                                        // src={lights[11]}
                                        src={require('../assets/2_choice.png')}
                                        className={styles.Image} alt='图片' />
                                </div>
                                <div style={{ float: 'left', width: '100px' }}>
                                    <p>
                                        AD温度：
                                        {/* {this.props.socketio.data !== null ? this.props.socketio.data[20] : ""} */}
                                    </p>
                                </div>
                                <div style={{ float: 'left', width: '100px' }}>
                                    <p>
                                        FPGA温度：
                                        {/* {this.props.socketio.data !== null ? this.props.socketio.data[21] : ""} */}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal>
            </Fragment >
        )
    }
}
