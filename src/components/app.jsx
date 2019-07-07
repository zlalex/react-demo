import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import asyncCom from '../utils/asyncCom';

const Login = asyncCom(_ => import('./login/login')),
    Index = asyncCom(_ => import('./index/index')),
    Scan = asyncCom(_ => import('./scan/scan'));

const App = () =>(
    <HashRouter>
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/index' component={Index} />
            <Route path='/scan' component={Scan} />
        </Switch>
    </HashRouter>
)    

export default App