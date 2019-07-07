import React from 'react';
import {Link} from 'react-router-dom';

const Header = _ => (
    <div className="al-header al-abs">
        <div className="al-flex__wrap">
            <div className="al-flex__item al-address">
                <span>南京</span>
                <i className="al-icon al-icon__bottom-arr"></i>
            </div>
            <div className="al-flex__item al-search__wrap al-rel">
                <Link to="/">
                    <i className="al-icon al-icon__search al-abs al-center__vertical"></i>
                    <span className="al-input__fake">搜索生产计划编号</span>
                </Link>
            </div>
        </div>
    </div>
)

export default Header