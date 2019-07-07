import React, {Component} from 'react';

class Head extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'10086',
            name: '褶子怪'
        }
    }

    render(){
        let that = this.state;
        return (
            <div className="al-layout__header">
                <span className="al-head__icon">
                    <i className="al-icon al-icon__my"></i>
                </span>
                <span className="al-head__id">
                    工号：{that.id}
                </span>
                <span className="al-head__name">
                    姓名：{that.name}
                </span>
            </div>
        )
    }
}

export default Head