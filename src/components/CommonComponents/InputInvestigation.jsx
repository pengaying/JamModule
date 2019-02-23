import React, { Component } from 'react'
import styles from './InputInvestigation.less'
export default class InputInvestigation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let { disabled,value} = this.props;
    return (
      // <div>
      <input className={styles['inputSheet']}
        onChange={this.props.ChangeValue}
        disabled={disabled}

        type="text"
        value={value} 
        />
      // </div>
    )
  }
}

