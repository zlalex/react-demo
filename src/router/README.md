# react-router v4.0 配置

```js
import render from 'react-dom';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

const App = () =>(
    <HashRouter>
        <div className="al-app">
            <nav className="al-nav">
                <ul className="al-nav__wrap">
                    <li className="al-nav__item">
                        <Link to="/">首页</Link>
                    </li>
                    <li className="al-nav__item">
                        <Link to="/member">个人中心</Link>
                    </li>
                    <li className="al-nav__item">
                        <Link to="/setting">设置</Link>
                    </li>
                    <li className="al-nav__item">
                        <Link to="/product">产品信息</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact  path="/" component={Home} />
                <Route path="/member" component={Member} />
                <Route path="/setting" component={Setting} />
                <Route path="/product" component={Product} />
            </Switch>
        </div>
    </HashRouter>
)

/**
 * <Router> 与 <BrowserRouter> 只能存在一个，否则报错。
 * 默认展示的首页 <Route> 需要设置 exact 属性。
 * 嵌套路由需要另外写在子组件下，用<Route />指定方向。
 */

const Home = () => (
    <div className="al-home">
        首页模版
    </div>
);

const Member = () => (
    <div className="al-member">
        个人中心模版
    </div>
);

const Setting = () => (
    <div className="al-setting">
        设置模版
    </div>
);

const Product = ({match}) => (
    <div className="al-product">
        产品信息模版
        <ul className="al-product__wrap">
            <li className="al-product__item">
                <Link to={`${match.url}/product_item1`}>西瓜啊</Link>
            </li>
            <li className="al-product__item">
                <Link to={`${match.url}/product_item2`}>苹果啊</Link>
            </li>
            <li className="al-product__item">
                <Link to={`${match.url}/product_item3`}>菠萝啊</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:id`} component={ProductItem}/>
    </div>
);

const ProductItem = ({match}) => (
    <div className="al-product__item">
        <p> 都是西瓜啊 </p>
        <p>{match.params.id}</p>
    </div>
)

render(<App />, document.getElementById('app'));

```
