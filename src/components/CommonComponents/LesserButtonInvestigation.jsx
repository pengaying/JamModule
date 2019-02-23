import React, { Component } from 'react';
import styles from './ButtonInvestigation.less';
export default class LesserButtonInvestigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
             btnBcgd: { background: '#D0DAE5' },
        }
    }
    handleClick = (e) => {
        this.setState({
            btnBcgd: { background: '#D0DAE5',borderColor:'#1C6FBC',color:'#1C6FBC' },

        })
    }
    onMouseOver = (e) => {
        this.setState({
            btnBcgd: { background: '#D0DAE5', borderColor:'#2D81CE',color:'#2D81CE' },
        })
    }
    onMouseOut = (e) => {
        this.setState({
            btnBcgd: { background: '#D0DAE5'},
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
