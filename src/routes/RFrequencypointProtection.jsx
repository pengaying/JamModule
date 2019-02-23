import React, { Component } from 'react';
import styles from './RFrequencypointProtection.less';
import InputInvestigation from '../components/CommonComponents/InputInvestigation';
import Draggable from 'react-draggable';
import { Link } from 'dva/router';
import { Input } from 'antd';
import LesserButtonInvestigation from '../components/CommonComponents/LesserButtonInvestigation';
import ButtonInvestigation from '../components/CommonComponents/ButtonInvestigation';

export default class RFrequencypointProtection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            side: "瞄频噪声",
            interferenceModel: 'nosie',
            hidden: false,
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            visible: false,
            childrenDrawer: false
        };
    }
    onControlledDrag = (e, position) => {
        const { x, y } = position;
        this.setState({ controlledPosition: { x, y } });
    }

    onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
    }

    adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { controlledPosition } = this.state;
        const { x, y } = controlledPosition;
        this.setState({ controlledPosition: { x: x - 10, y } });
    }

    adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { controlledPosition } = this.state;
        const { x, y } = controlledPosition;
        this.setState({ controlledPosition: { x, y: y - 10 } });
    }

    handleDrag = (e, ui) => {
        const { deltaPosition } = this.state;
        const { x, y } = deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            },
        });
    }
    handlebuttonclick = (e) => {
        this.setState({
            interferenceModel: e.target.id,
        })
    };

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <div className={styles['system_content']}>
                <Draggable handle="strong" {...dragHandlers}>
                    <div className={styles['jam_normal']}>
                        <div className={styles['jam_title']}>
                            <div className={styles['jam_title_character']}>
                                <strong>频率保护</strong>
                            </div>
                            <span>
                                <Link to='/' ><img src={require('../assets/close.png')} alt='图片' className={styles['Close_Window']} /></Link>
                            </span>
                        </div>
                        {/*内容*/}
                        <div className={styles['jam_content']}>
                            <div className={styles['jam_content_top']}>
                                <div className={styles['NarrowBandNoise']}>
                                    <div className={styles['FreqSheet']}>
                                        <div className={styles['NarrowBandNoiseFirst']}>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点1： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点2： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点3： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点4： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['FreqSheet']}>
                                        <div className={styles['NarrowBandNoiseFirst']}>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点5： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点6： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点7： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点8： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['FreqSheet']}>
                                        <div className={styles['NarrowBandNoiseFirst']}>
                                            <div style={{ marginLeft: '24px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点9： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点10： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点11： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点12： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['FreqSheet']}>
                                        <div className={styles['NarrowBandNoiseFirst']}>
                                            <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点13： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点14： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点15： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                            <div style={{ marginLeft: '18px', marginTop: '5px', marginBottom: '5px' }}>
                                                <label htmlFor="name">频率点16： </label>
                                                <span >
                                                    <Input />
                                                </span>
                                                <span><label htmlFor="unit">GHz</label></span>
                                            </div>
                                        </div>
                                        <div className={styles['bottom_content']}>
                                            <ButtonInvestigation name="确定" />
                                            <LesserButtonInvestigation name="取消" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        );
    }
}
