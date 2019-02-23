import React, { Component } from 'react';
import styles from './JammingModeSet.less';
import Draggable from 'react-draggable';
import { Link } from 'dva/router';
import { Tabs, Table, Divider, Modal, Button, Input } from 'antd';
import NoiseInterfere from '../components/TabsInterfere/NoiseInterfere';
import CheatInterfere from '../components/TabsInterfere/CheatInterfere';
import CombinationInterfere from '../components/TabsInterfere/CombinationInterfere';
import propTypes from 'prop-types';
import { connect } from 'dva';
@connect(({ jammingProgramData }) => ({
  jammingProgramData
}))
export default class JammingModeSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "瞄频噪声",
      interferenceModel: 'nosie',
      hidden: false,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      visible: false,
      childrenDrawer: false,
      count: 1,
      signed: 0,
      ok: false
    };
  }
  ProjectName = (e) => {
    this.setState({
      projectName: e.target.value,
    })
  }
  ShowModel = (e) => {
    this.setState({
      signed: 0,
      visible: true,
    })
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
      signed: 0,
    });
  }

  handleOk = (e) => {
    debugger
    const { type, value } = this.context;
    console.log(type,value)
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'jammingProgramData/JamBlockingData',
    //   payload: 2,
    // });
    this.setState({
      signed: 1,
      visible: false,
      ok: true
    })
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
  //   componentDidMount() {
  //     debugger
  //     //设置500 ms后执行
  //     this.timer = setTimeout(() => {
  //        this.setState({
  //         signed:this.state.signed+2,
  //        })
  //     }, 500);
  // }
  // componentWillUnmount() {
  //   //在unmount回调清除定时器
  //   this.timer && clearTimeout(this.timer);
  // }
  render() {
   
    // console.log('111111111111111111222222222222222',this.props.jammingProgramData.data)      
    const columns = [{
      title: '序号',
      dataIndex: 'num',
      width: '12%',
    }, {
      title: '名称',
      dataIndex: 'name',
      width: '12%',
    }, {
      title: '干扰目标描述',
      dataIndex: 'jamsub',
      width: '20%',
    }, {
      title: '干扰样式',
      dataIndex: 'jamMode',
      width: '15%',
    }, {
      title: '备注',
      dataIndex: 'notes',
      width: '12%',
    }, {
      title: '创建日期',
      dataIndex: 'date',
      width: '15%',
    }, {
      title: '任务号',
      dataIndex: 'task',
      width: '33%',
    }];
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const data = [];
    data.push({
      num: this.state.count,
      name: this.state.Name,
    });

    const { TextArea } = Input;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const TabPane = Tabs.TabPane;
    return (
      <div className={styles['system_content']}>
        <Draggable handle="strong" {...dragHandlers}>
          <div className={styles['jam_normal']}>
            <div className={styles['jam_title']}>
              <div className={styles['jam_title_character']}>
                <strong>干扰样式</strong>
              </div>
              <span>
                <Link to='/' ><img src={require('../assets/close.png')} alt='图片' className={styles['Close_Window']} /></Link>
              </span>
            </div>
            {/*内容*/}
            <div className={styles['jam_content']}>
              <div className={styles['jam_content_top']}>
                <Tabs type="card">
                  <TabPane tab="噪声干扰" onClick={this.handlebuttonclick} defaultActiveKey key="1"><NoiseInterfere signed={this.state.signed} /></TabPane>
                  <TabPane tab="欺骗干扰" key="2"><CheatInterfere /></TabPane>
                  <TabPane tab="组合干扰" key="3"><CombinationInterfere /></TabPane>
                </Tabs>
              </div>
              <div className={styles['jam_content_bottom']}>
                <Divider orientation="left">方案</Divider>
                <Table
                  // rowSelection={rowSelection}
                  columns={columns}
                  // size={'small'}
                  dataSource={data}
                  bordered
                  // className={styles.myClass}
                  pagination={false}
                  rowClassName={(record, index) => index % 2 === 0 ? styles.odd : styles.even}
                  scroll={{ y: 100 }}
                />
                <div className={styles['BtnBottom']}>
                  <Button onClick={this.ShowModel}>保存</Button>
                  <Modal
                    title="保存工程"
                    destroyOnClose
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <div className={styles['ModelSheet']}>
                      <div style={{ marginRight: '42px' }} className={styles['ModelName']}> <span >干扰方案名称:  </span><div style={{ marginLeft: '20px' }}><Input onChange={this.ProjectName} /></div></div>
                      <div style={{ marginRight: '34px' }} className={styles['ModelName']}> <span style={{ marginRight: '10px' }} >干扰目标描述:  </span><Input /></div>
                      <div style={{ marginLeft: '26px' }} className={styles['ModelName']}><span style={{ marginRight: '-5px', marginTop: '25px' }}>备注:</span><div style={{ marginLeft: '20px' }}><TextArea rows={4} /></div></div>
                    </div>
                  </Modal>
                  <Link to='/rtargetAllocation' ><Button>确定</Button></Link>
                  <Link to='/' ><Button>取消</Button></Link>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}
JammingModeSet.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
}
