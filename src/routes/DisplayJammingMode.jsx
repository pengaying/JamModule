import React, { Component } from 'react';
import styles from './DisplayJammingMode.less';
import Draggable from 'react-draggable';
import { Link } from 'dva/router';
import { Tabs, Table,Select, Input,Divider } from 'antd';
import TableTarfetAllocation from '../components/TabTargetAllocation/TableTarfetAllocation';
import ButtonInvestigation from '../components/CommonComponents/ButtonInvestigation';
import InputInvestigation from '../components/CommonComponents/InputInvestigation';
import JamDisplayTarget from '../components/JamDisplayTarget';
export default class JammingModeSet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
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
    handleClick = (e) => {
        this.setState({
            hiden: !this.state.hidden,
        })
    }
    render() {
        let { hiden } = this.state;
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <div className={styles['DisplayJammingMode']} hidden={hiden}>
                <Draggable handle="strong" {...dragHandlers}>
                    <div className={styles['jam_normal']}>
                        <div className={styles['jam_title']}>
                            <div className={styles['jam_title_character']}>
                                <strong>干扰显示区</strong>
                            </div>
                            <span>
                                <img src={require('../assets/close.png')} alt='图片' onClick={this.handleClick} className={styles['Close_Window']} />
                            </span>
                        </div>
                        {/*内容*/}
                        <div className={styles['jam_content']}>
                            <div className={styles['jam_content_left']}>
                                <JamDisplayTarget />
                            </div>
                            <div className={styles['jam_content_right']}>
                                <div className={styles['jam_content_right_top']}>
                                    <ButtonInvestigation name="目标分配" />
                                    <div > <ButtonInvestigation name="目标全清" /></div>
                                </div>
                                <div className={styles['jam_content_right_bottomOne']}>
                                    <span className={styles['inputSheet']}>AZ1:</span>
                                    <Input />
                                    <span className={styles['inputSheet']}>AZ2:</span>
                                    <Input />
                                </div>
                                <div className={styles['jam_content_right_bottomTwo']}>
                                    <span className={styles['inputSheet']}>AZ3:</span>
                                    <Input />
                                    <span className={styles['inputSheet']}>AZ4:</span>
                                    <Input />
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        );
    }
}
