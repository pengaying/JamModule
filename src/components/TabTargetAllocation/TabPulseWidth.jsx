import {
    Table, Input, Button, Popconfirm, Form,
} from 'antd';
import React, { Component } from 'react';
import './FreqTabTargetAllocation.less'
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    }

    handleClickOutside = (e) => {
        const { editing } = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    }

    save = () => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    }

    render() {
        const { editing } = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                        <div
                                            className="editable-cell-value-wrap"
                                            style={{ paddingRight: 24 }}
                                            onClick={this.toggleEdit}
                                        >
                                            {restProps.children}
                                        </div>
                                    )
                            );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

export default class TabPulseWidth extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '序号',
            dataIndex: 'num',
            width: '10%',
        }, {
            title: '脉宽（us）',
            dataIndex: 'Freq',
            width: '15%',
            editable: true,
        }, {
            title: '序号',
            dataIndex: 'twoNum',
            width:'10%'
        },{
            title: '脉宽（us）',
            dataIndex: 'twoFreq',
            width: '10%',
            editable: true,
        },{
            title: '序号',
            dataIndex: 'threeNum',
            width:'10%'
        },{
            title: '脉宽（us）',
            dataIndex: 'threeFreq',
            width: '15%',
            editable: true,
        },{
            title: '序号',
            dataIndex: 'fourNum',
            width:'10%'
        },{
            title: '脉宽（us）',
            dataIndex: 'fourFreq',
            editable: true,
        }];

        this.state = {
            dataSource: [{
                key: '0',
                num: '1',
                Freq: '0',
                twoNum: '9',
                twoFreq: '0',
                threeNum: '17',
                threeFreq: '0',
                fourNum: '25',
                fourFreq: '0',
            },{
                key: '2',
                num: '2',
                Freq: '0',
                twoNum: '10',
                twoFreq: '0',
                threeNum: '18',
                threeFreq: '0',
                fourNum: '26',
                fourFreq: '0',
            },{
                key: '3',
                num: '3',
                Freq: '0',
                twoNum: '11',
                twoFreq: '0',
                threeNum: '19',
                threeFreq: '0',
                fourNum: '27',
                fourFreq: '0',
            },{
                key: '4',
                num: '4',
                Freq: '0',
                twoNum: '12',
                twoFreq: '0',
                threeNum: '20',
                threeFreq: '0',
                fourNum: '28',
                fourFreq: '0',
            },{
                key: '5',
                num: '5',
                Freq: '0',
                twoNum: '13',
                twoFreq: '0',
                threeNum: '21',
                threeFreq: '0',
                fourNum: '29',
                fourFreq: '0',
            },{
                key: '6',
                num: '6',
                Freq: '0',
                twoNum: '14',
                twoFreq: '0',
                threeNum: '22',
                threeFreq: '0',
                fourNum: '30',
                fourFreq: '0',
            },{
                key: '7',
                num: '7',
                Freq: '0',
                twoNum: '15',
                twoFreq: '0',
                threeNum: '23',
                threeFreq: '0',
                fourNum: '31',
                fourFreq: '0',
            },{
                key: '8',
                num: '8',
                Freq: '0',
                twoNum: '16',
                twoFreq: '0',
                threeNum: '24',
                threeFreq: '0',
                fourNum: '32',
                fourFreq: '0',
            }],
            count: 2,
        };
    }

    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    }

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                pagination={false}
                columns={columns}
                scroll={{ y: 121 }}
            />
        );
    }
}
