import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                [{
                    path: '/',
                    text: '来料检验'
                },
                {
                    path: '/',
                    text: '巡检'
                },
                {
                    path: '/',
                    text: '首末件检验'
                }],
                [{
                    path: '/',
                    text: '入库检验'
                },
                {
                    path: '/',
                    text: '出库检验'
                },
                {
                    path: '/',
                    text: '报警处理'
                }]
            ]
        }
    }

    render(){
        let that = this.state;

        return (
            <div className="al-layout__nav">
                <div className="al-layout__section al-flex__wrap al-nav__row">
                    {
                        that.data[0].map((el, i) => (
                            <div className="al-flex__item al-flexbox al-nav__col al-bd__bottom" key={el.text}>
                                <Link to={el.path}>
                                    <div className="al-img__just al-nav__img">
                                        <img src={require('../images/icon'+ (i + 1) + '.png')} alt=""/>
                                    </div>
                                    <p className="al-nav__txt al-align__center">{el.text}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="al-layout__section al-flex__wrap al-nav__row">
                    {
                        that.data[1].map((el, i) => (
                            <div className="al-flex__item al-nav__col al-flexbox" key={el.text}>                                
                                <Link to={el.path}>
                                    <div className="al-img__just al-nav__img">
                                        <img src={require('../images/icon'+ (i + 4) + '.png')} alt=""/>
                                    </div>
                                    <p className="al-nav__txt al-align__center">{el.text}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Nav;