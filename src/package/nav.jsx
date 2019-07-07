import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: 0,
            navArr:[
                {
                    path: '/',
                    icon: 'al-icon__home',
                    text: '首页'
                },
                {
                    path: '/member',
                    icon: 'al-icon__app',
                    text: '产品'
                },
                {
                    path: '/module',
                    icon: 'al-icon__shopcar',
                    text: '模具'
                },
                {
                    path: '/product',
                    icon: 'al-icon__my',
                    text: '我的'
                },
            ]            
        }
    }
    
    render(){
        return (
            <nav className="al-nav al-abs">
            <ul className="al-nav__wrap al-flex__wrap">
                {this.state.navArr.map((el, i) => {
                    return (
                        <li className={"al-nav__item al-flex__item" + (this.state.active === i ? " active" : "")} 
                            onClick={(e) => this.setState({active: i})}
                            key={el.path} >
                            <Link to={el.path}>
                                <i className={('al-icon ' + el.icon)}></i>
                                <span className="al-nav__text">{el.text}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        )
    }
}

export default Nav