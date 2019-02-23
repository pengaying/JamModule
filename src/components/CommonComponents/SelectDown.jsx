import React, { Component } from 'react'
import styles from './SelectDown.less'
export default class SelectDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // btnBcgd: { background: '#1C6FBC'},
        }
    }
    onMouseOver = (e) => {
        this.setState({
         
        })
    }
    // select传值过来
    // 例如： const selectvalue =['xia','shang','zuo','you'];
    // <SelectDown selectValue={selectvalue}/>
    //调用父类的方法onselect
    render() {
        let { selectValue } = this.props;
        return (
            <>
                <select className={styles['selectSheet']}>
                    {
                        selectValue.map((item, i) => {
                            return (
                                <option onMouseEnter={this.onMouseOver} className={styles['optionSheet']} key={`project${i}`} value={item.id}>{item}</option>
                            )
                        })
                    }
                </select>
            </>
        )
    }
}
