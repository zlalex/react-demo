import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Tmp from './demo';

const App = () => (
    <HashRouter>
        <Switch>
            <Route path="/" component={Tmp} />
        </Switch>
    </HashRouter>
)

export default App