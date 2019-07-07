import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            secondNav: [
                {
                    path: '',
                    icon: 'al-icon__shoplight',
                    text: '销售计划'
                },
                {
                    path: '',
                    icon: 'al-icon__shoplight',
                    text: '生产计划'
                },
                {
                    path: '',
                    icon: 'al-icon__shoplight',
                    text: '出入库单'
                },
                {
                    path: '',
                    icon: 'al-icon__shoplight',
                    text: '系统管理'
                },
                {
                    path: '',
                    icon: 'al-icon__shoplight',
                    text: '生产监控'
                }
            ]
        }
    }

    render(){
        return (
            <div className="al-home">
                <div className="al-banner">
                    <a href="">
                        <img src={require('./images/img-banner.jpg')} alt=""/>
                    </a>
                </div>
                <div className="al-nav__second">
                    <ul className="al-flex__wrap">
                        {
                            this.state.secondNav.map((el, i) => (
                                <li className="al-flex__item al-second__navitem" 
                                    key={el.text}>
                                    <Link to="/">
                                        <div className="al-second__item">
                                            <i className={"al-icon " + el.icon}></i>
                                        </div>
                                        <p className="al-second__item-text al-align__center">{el.text}</p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="al-home__section">
                </div>
            </div>
        )
    }
}

export default Home