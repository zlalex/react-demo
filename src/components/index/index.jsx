import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import asyncCom from '../../utils/asyncCom';
import '../styles.scss';

const Head = asyncCom(_ => import('../package/head.jsx'));
const Nav = asyncCom(_ => import('../package/nav.jsx'));
class Index extends Component {
    render(){
        return (
            <div className="al-layout__page">
                <Head/>
                <div className="al-layout__section al-flex__wrap al-handle__optation">
                    <div className="al-flex__item al-nav__col al-flexbox">
                        <Link to="/">
                            <div className="al-nav__img al-img__just">
                                <img src={require('../images/daichuli_icon.png')} alt=""/>
                            </div>
                            <p className="al-nav__txt al-align__center">待处理</p>
                        </Link>
                    </div>
                    <div className="al-flex__item al-nav__col al-flexbox">
                        <Link to="/">
                            <div className="al-nav__img al-img__just">
                                <img src={require('../images/yichuli_icon.png')} alt=""/>
                            </div>
                            <p className="al-nav__txt al-align__center">已处理</p>
                        </Link>
                    </div>
                </div>
                <Nav/>
            </div>
        )
    }
}

export default Index