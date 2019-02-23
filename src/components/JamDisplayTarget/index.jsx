import { Table } from 'antd';
import './style.less'
import React, { Component } from 'react'

export default class JamDisplayTarget extends Component {
    render() {
        const columns = [{
            title: '干扰序号',
            dataIndex: 'jamNum',
            width: '6%',
        }, {
            title: '干扰标志',
            dataIndex: 'jamSign',
            width: '6%',
        }, {
            title: '威胁等级',
            dataIndex: 'threatLevel',
            width: '6%',
        },{
            title: '方位（Deg）',
            dataIndex: 'azimuth',
            width: '6%',
        }, {
            title: '频率类型',
            dataIndex: 'frequencyType',
            width: '6%',
        }, {
            title: '频率下限(MHz)',
            dataIndex: 'FreqDown',
            width: '6%',
        },{
            title: '频率上限(MHz)',
            dataIndex: 'freqUp',
            width: '6%',
        }, {
            title: '重复周期类型',
            dataIndex: 'repeatCycletType',
            width: '8%',
        }, {
            title: '重复周期下限（us）',
            dataIndex: 'repeatCycletDown',
            width: '8%',
        },{
            title: '重复周期上限（us）',
            dataIndex: 'repeatCycletUp',
            width: '8%',
        }, {
            title: '脉宽',
            dataIndex: 'pulseWidthType',
            width: '6%',
        }, {
            title: '带宽（MHz）',
            dataIndex: 'tapeWidth',
            width: '8%',
        },{
            title: '干扰样式',
            dataIndex: 'jammingMode',
            width: '6%',
        }, {
            title: '开始时间',
            dataIndex: 'startTime',
            width: '8%',
        }, {
            title: '结束时间',
            dataIndex: 'endTime',
        }];

        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                tt: i,
            });
        }
        return (
            <div>
                <Table columns={columns}
                dataSource={data} 
                 bordered
                 pagination={false}
                 scroll={{ x:1280,y: 138 }}
                 />
            </div>
        )
    }
}

