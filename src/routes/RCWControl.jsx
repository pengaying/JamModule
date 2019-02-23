import React, { Component } from 'react';
import styles from './RCWControl.less';
import Draggable from 'react-draggable';
import { Link } from 'dva/router';
export default class RCWControl extends Component {
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
        return (
            <div className={styles['system_content']}>
                <Draggable handle="strong" {...dragHandlers}>
                    <div className={styles['jam_normal']}>
                        <div className={styles['jam_title']}>
                            <div className={styles['jam_title_character']}>
                                <strong>连续波控制</strong>
                            </div>
                            <span>
                                <Link to='/' ><img src={require('../assets/close.png')} alt='图片' className={styles['Close_Window']} /></Link>
                            </span>
                        </div>
                        {/*内容*/}
                        <div className={styles['jam_content']}>
                            <div className={styles['jam_content_top']}>
                                <div className={styles['NarrowBandNoise']}>

                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        );
    }
}
