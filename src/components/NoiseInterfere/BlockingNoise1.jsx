// // 阻塞噪声
import React, { Component } from 'react'
import styles from './style.less';
import { connect } from 'dva';
import {
    Form, Input, Select, Button,
} from 'antd';

class PriceInput extends React.Component {
    static getDerivedStateFromProps(nextProps) {
        // Should be a controlled component.
        if ("value" in nextProps) {
            return {
                ...(nextProps.value || {})
            };
        }
        return null;
    }

    constructor(props) {
        super(props);

        const value = props.value || {};
        this.state = {
            number: value.number || 0,
            currency: value.currency || "rmb" || "1"
        };
    }

    handleNumberChange = e => {
        const number = parseInt(e.target.value || 0, 10);
        if (Number.isNaN(number)) {
            return;
        }
        if (!("value" in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    };

    handleCurrencyChange = currency => {
        if (!("value" in this.props)) {
            this.setState({ currency });
        }
        this.triggerChange({ currency });
    };

    handleCurrencyChange = currency1 => {
        if (!("value" in this.props)) {
            this.setState({ currency1 });
        }
        this.triggerChange({ currency1 });
    };

    triggerChange = changedValue => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    };

    render() {
        const Option = Select.Option;
        const { size } = this.props;
        const state = this.state;
        return (
            <span>
                <Input
                    type="text"
                    size={size}
                    value={state.number}
                    onChange={this.handleNumberChange}
                // style={{ width: '65%', marginRight: '3%' }}
                />
                <Select
                    value={state.currency}
                    size={size}
                    // style={{ width: '32%' }}
                    onChange={this.handleCurrencyChange}
                >
                    <Option value="rmb">RMB</Option>
                    <Option value="dollar">Dollar</Option>
                </Select>
                <Select
                    value={state.currency1}
                    size={size}
                    // style={{ width: '32%' }}
                    onChange={this.handleCurrencyChange}
                >
                    <Option value="1">w</Option>
                    <Option value="2">s</Option>
                </Select>
            </span>
        );
    }
}


class Demo extends React.Component {
    checkPrice = (rule, value, callback) => {
      if (value.number > 0) {
        callback();
        return;
      }
      callback("Price must greater than zero!");
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item label="Price">
            {getFieldDecorator("price", {
              initialValue: { number: 0, currency: "rmb" },
              rules: [{ validator: this.checkPrice }]
            })(<PriceInput />)}
          </Form.Item>
        </Form>
      );
    }
  }


 const BlockingNoise = Form.create({ name: "customized_form_controls" })(Demo);

 export  default BlockingNoise;






