// import css
import './css/iconfont/iconfont.css';
import './css/reset.scss';
import './css/core.scss';
import './css/index.scss';

// import scripts && modules
import asyncCom from './utils/asyncCom';
import React from 'react';
import { render } from 'react-dom';

// plugin fastclick
import FastClick from 'fastclick';

FastClick.attach(document.body);

// newly about px2rem
let rootSize = document.documentElement.getBoundingClientRect().width / 10; // 假定设计稿宽度 750px，分成 10 份

rootSize = rootSize > 48 ? 48 : rootSize;
document.documentElement.style.fontSize = `${rootSize}px`;

// React render 
// const App = asyncCom(_ =>
//     import ('./views/home/app.jsx'));
const App = asyncCom(_ =>
    import ('./components/app'));

render( <App/> , document.getElementById('app'));