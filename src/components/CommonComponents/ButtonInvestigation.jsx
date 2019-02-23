import React, { Component } from 'react';
import styles from './ButtonInvestigation.less';
export default class ButtonInvestigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnBcgd: { background: '#2884D8' },
        }
    }
    handleClick = (e) => {
        this.setState({
            btnBcgd: { background: '#1C6FBC'},

        })
    }
    onMouseOver = (e) => {
        this.setState({
            btnBcgd: { background: '#2D81CE'},
        })
    }
    onMouseOut = (e) => {
        this.setState({
            btnBcgd: { background: '#2884D8'},
        })
    }
    render() {
        let { btnBcgd } = this.state;
        return (
            <div >
                <button className={styles['btn']} style={btnBcgd} onClick={this.handleClick} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut} type="button">{this.props.name}</button>
            </div>
        )
    }
}
