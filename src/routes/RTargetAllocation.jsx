import React, { PureComponent } from 'react';
// import './RTargetAllocation.less';
import styles from './RTargetAllocation.less';
import Draggable from 'react-draggable';
import { Link } from 'dva/router';
import { Tabs, Input, Select, Divider } from 'antd';
import ButtonInvestigation from '../components/CommonComponents/ButtonInvestigation';
import TabPulseWidth from '../components/TabTargetAllocation/TabPulseWidth';
import TabRepetitionPeriod from '../components/TabTargetAllocation/TabRepetitionPeriod';
import FreqTabTargetAllocation from '../components/TabTargetAllocation/FreqTabTargetAllocation';
import TableTarfetAllocation from '../components/TabTargetAllocation/TableTarfetAllocation';

export default class RTargetAllocation extends PureComponent {
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
        const TabPane = Tabs.TabPane;
        const Option = Select.Option;
        return (
            <div className={styles['system_content']}>
                <Draggable handle="strong" {...dragHandlers}>
                    <div className={styles['jam_normal']}>
                        <div className={styles['jam_title']}>
                            <div className={styles['jam_title_character']}>
                                <strong >目标分配</strong>
                            </div>
                            <span>
                                <Link to='/' ><img src={require('../assets/close.png')} alt='图片' className={styles['Close_Window']} /></Link>
                            </span>
                        </div>
                        {/*内容*/}
                        <div className={styles['NarrowBandNoise']}>
                            <div className={styles['content_top']}>
                                <div className={styles['content_top_top']}>
                                    {/* <div style={{ marginTop: '10px', marginLeft: '5px',fontSize: '14px', fontFamily: '微软雅黑', lineHeight: '16px' }}>新增目标信息</div> */}
                                    <Divider orientation="left">新增目标信息</Divider>
                                </div>
                                <div className={styles['content_top_bottom']}>
                                    <div className={styles['top_set']}>
                                        <label style={{ marginLeft: '29px', marginTop: '5px', marginRight: '5px' }}>方位:</label>
                                        <Input />
                                        <span>°</span>
                                    </div>
                                    <div className={styles['top_set']}>
                                        <label style={{ marginTop: '5px', marginRight: '5px' }}>频率类型:</label>
                                        <Select defaultValue="fixed" style={{ width: 124 }}>
                                            <Option value="fixed">fixed</Option>
                                            <Option value="Agile">Agile</Option>
                                            <Option value="Jump">Jump</Option>
                                            <Option value="Switch">Switch</Option>
                                            <Option value="Step">Step</Option>
                                            <Option value="Sweep">Sweep</Option>
                                            <Option value="Complex">Complex</Option>
                                        </Select>
                                    </div>
                                    <div className={styles['top_set']}>
                                        <label style={{ marginRight: '5px', marginTop: '5px' }}>频率数量:</label>
                                        <Input />
                                    </div>
                                    <div className={styles['top_set']}>
                                        <label style={{ marginRight: '5px', marginTop: '5px' }}>重复周期类型:</label>
                                        <Select defaultValue="fixed" style={{ width: 124 }}>
                                            <Option value="fixed">fixed</Option>
                                            <Option value="Stagger">Stagger</Option>
                                            <Option value="Jitter">Jitter</Option>
                                            <Option value="Slide">Slide</Option>
                                            <Option value="CW">CW</Option>
                                            <Option value="Switch">Switch</Option>
                                            <Option value="Complex">Complex</Option>
                                            <Option value="合并">合并</Option>
                                        </Select>
                                    </div>
                                    <div className={styles['top_set']}>
                                        <label style={{ marginLeft: '5px', marginTop: '5px', marginRight: '5px' }}>重频数量:</label>
                                        <Input />
                                    </div>
                                    <div className={styles['top_set']}>
                                        <label style={{ marginRight: '5px', marginTop: '5px' }}>脉宽数量:</label>
                                        <Input />
                                    </div>
                                    <div className={styles['top_set']}>
                                        <label style={{ marginRight: '5px', marginTop: '5px' }}>脉内调制:</label>
                                        <Select defaultValue="UNK" style={{ width: 124 }}>
                                            <Option value="UNK">UNK</Option>
                                            <Option value="fixed">fixed</Option>
                                            <Option value="FMOP">FMOP</Option>
                                            <Option value="PMOP">PMOP</Option>
                                        </Select>
                                    </div>
                                    <div className={styles['top_set']}>
                                        <label style={{ marginLeft: '48px', marginRight: '5px', marginTop: '5px' }}>幅度:</label>
                                        <Input />
                                    </div>
                                    <div >
                                        <label style={{ marginLeft: '22px', marginRight: '5px', marginTop: '5px' }}>抖动比:</label>
                                        <Input />
                                        <span>%</span>
                                    </div>
                                    <div style={{ marginLeft: '24px' }}>
                                        <label style={{ marginLeft: '48px', marginTop: '5px', marginRight: '5px' }}>带宽:</label>
                                        <Input />
                                        <span>MHz</span>
                                    </div>
                                    <div>
                                        <label style={{ marginLeft: '28px', marginRight: '5px', marginTop: '5px' }}>中心+频率:</label>
                                        <Input />
                                        <span>MHz</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['content_middile']}>
                                <Tabs type="card">
                                    <TabPane tab="频率" defaultActiveKey key="1"><FreqTabTargetAllocation /></TabPane>
                                    <TabPane tab="重复周期" key="2"><TabRepetitionPeriod /></TabPane>
                                    <TabPane tab="脉宽" key="3"><TabPulseWidth /></TabPane>
                                </Tabs>
                            </div>
                            <div className={styles['content_bottom']}>
                                {/* <div style={{ fontSize: '14px', fontFamily: '微软雅黑', lineHeight: '16px' }}>目标信息分配表</div> */}
                                <Divider orientation="left">目标信息分配表</Divider>
                                <div style={{ marginTop: '15px' }}><TableTarfetAllocation /></div>
                            </div>
                            <div className={styles['btn_Sheet']}>
                                <Link to='/jammingModeSet' > <ButtonInvestigation name="新增目标" /></Link>
                                <ButtonInvestigation name="目标分配" />
                                <ButtonInvestigation name="目标全清" />
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        );
    }
}
