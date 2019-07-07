import asyncCom from '../../utils/asyncCom';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Home = asyncCom(_ => import('./home.jsx'));
const Member = asyncCom(_ => import('../member/member.jsx'));
const Module = asyncCom(_ => import('../module/module.jsx'));
const Product = asyncCom(_ => import('../product/product.jsx'));
const Nav = asyncCom(_ => import('../../package/nav.jsx'));
const Header = asyncCom(_ => import('../../package/header.jsx'))

const App = () =>(
    <HashRouter>
        <div className="al-app">
            <Header />
            <Nav />
            <Switch>
                <Route exact  path="/" component={Home} />
                <Route path="/member" component={Member} />
                <Route path="/module" component={Module} />
                <Route path="/product" component={Product} />
            </Switch>
        </div>
    </HashRouter>
)

export default App