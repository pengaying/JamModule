import React, { Component } from 'react'
import styles from './style.less'
import { Link } from 'dva/router';

export default class BandProtection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tt: 1,
        }
    }
    handleClick = () => {
        this.setState({
            
        })
    }

    onMouseOver = (e) => {
        this.setState({
            tt: 2,
        })
    }
    onMouseOut = (e) => {
        this.setState({
            tt: 1,
        })
    }
    render() {
        let { tt } = this.state;
        console.log(tt);
        return (
            <div className={styles.JammingMode}>
                <div className={styles.JamButton}>
                    <div className={styles.Image_Area} onClick={this.handleClick} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut}>
                        <Link to='/rbandProtection' ><img src={require('../../../assets/Cardinal_132.png')} className={styles.Image} alt='图片' /></Link>
                    </div>
                    <div className={styles.Image_Power}>
                        <span>频段保护</span>
                    </div>
                </div>
                <div className={styles.ToolButton_Title}>
                    <span style={{ fontFamily: '微软雅黑', color: '#909cb9' }}>目标分配</span>
                </div>
            </div>
        )
    }
}
