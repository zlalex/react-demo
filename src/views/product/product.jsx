import asyncCom from '../../utils/asyncCom';
import React from 'react';
import {Route, Link } from 'react-router-dom';

const ProductItem = asyncCom(_ => import('./product-item'));

const Product = ({match}) => (
    <div className="al-product">
        产品信息模版
        <ul className="al-product__wrap al-flex__wrap">
            <li className="al-product__item al-flex">
                <Link to={`${match.url}/product_item1`}>点点西瓜啊</Link>
            </li>
            <li className="al-product__item al-flex">
                <Link to={`${match.url}/product_item2`}>点点苹果啊</Link>
            </li>
            <li className="al-product__item al-flex">
                <Link to={`${match.url}/product_item3`}>点点菠萝啊</Link>
            </li>
        </ul>
        <div className="box" style={{marginTop: '20px'}}>
            <Route path={`${match.url}/:id`} component={ProductItem} />
        </div>
    </div>
);

export default Product