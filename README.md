# Daily

```js

 npm install -g create-react-app
 
 create-react-app ProjectName
 
 cd ProjectName
 
 npm run eject // 切换到自主配置模式（开启后，会生成config文件夹和scripts文件夹）

```

## yarn 包管理工具

每次下载npm都会有各自问题出现，一气之下就换成yarn了

```shell
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

## proxy 配置(代理服务器设置)

```json
"proxy": {
    "/api/v1": { "target": "https://cnodejs.org" }
}

// proxy 表示会将 /api/v1/ 下的所有请求转发到 "https://cnodejs.org";
// axios支持设置proxy，详情查看相关文档;
```

## css 模块化

> 修改 webpack.config.dev 和 webpack.config.prod

```js
// webpack.config.dev.js
{
    // ...
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        module: true // 新增 module 属性为 true，即会使生产的css变成唯一的（看情况啦）;
    }
    // ...
}

// webpack.config.prod.js
{
    // ...
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        minimize: true,
        module: true,
        sourceMap: shouldUseSourceMap,
    },
    // ...
}
```

## postcss-px2rem

```js
sudo npm install postcss-px2rem

// webpack.config.dev.js 引入该插件
const px2rem = require('postcss-px2rem');

// 然后在 postcss-loader 的 plugins 中加入 px2rem({remUnit: 75}) 表示一个单位 rem 等于 75px。

// src/index.js

const newSize = document.documentElement.getBoundingClientRect().width / 10; // 假定设计稿宽度 750px，分成 10 份

document.documentElement.style.fontSize = `${newSize}px`;
```

## react-router && react-router-dom

```js
import { HashRouter, Link, Switch, Redirect} from 'react-router-dom'

// react-router 与 react-router-dom 引入一个即可。后者比前者多了Link、BorwserRouter两个组件。
// https://blog.csdn.net/sinat_17775997/article/details/69218382

// react-router v4 以上的版本不支持路由嵌套。[吐槽：被官方文档折腾的欲仙欲死] 具体路由嵌套规则查看 ./src/router/README.md
// https://www.jianshu.com/p/6a45e2dfc9d9
```

## plugins

```js
npm install axios --save-dev

npm install fastclick --save-dev

npm install sass-loader node-sass --save-dev

// index.js
import FastClick from 'fastclick';
FastClick.attach(document.body);
import './css/index.scss';

// webpack.config.dev.js与webpack.config.prod.js 写sass配置
{
    exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
    loader: require.resolve('file-loader'),
    options: {
        name: 'static/media/[name].[hash:8].[ext]',
    },
},
{
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
}

// 或者在css-loader里新增loader: require.relove('sass-loader);
```


## get Scss tips

```scss

$item-arr: (1, $item-red) (2, $item-yellow) (3,$item-green) (4,$default-blue) (5,$item-purple);

@each $item in $item-arr {
    $index: nth($item, 1);
    $color: nth($item, 2);
    .al-second__navitem:nth-child(#{$index}){
        .al-second__item{
            background-color: $color;
        }
    }
}

// each 循环生成不同的css
```

## stylus && sass

我很喜欢用sass，但是node-sass安装经常报错，不论是npm 安装还是 yarn 安装，都遇到过，这个让我很难过。
退而求其次，我又用上了stylus。

## import source

```js
import 'index.css'

// 加载的静态资源写在第一行
```

## 加载图片

```js
<Component>
    <img src={reqiure('path')}>
</Component>
```

## 组件异步加载

```js
const asyncCom = function (importCom) {
    class AsyncCom extends Component {
        constructor(props){
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount(){
            const {default: component } = await importCom();
            this.setState({component});
        }

        render(){
            const COM = this.state.component;

            return COM ? <COM {...this.props} /> : null;
        }
    }
    return AsyncCom
}
```
## 关于class Tag extends Component

当该组件存在生命周期的时候，请使用 class Tag extends Component {} 创建组件、
当组件只是一个显示元素时，可以直接通过函数创建。

## 路由与模块的联系

```
 HashRouter
  │
  └─ Switch
       │
       ├─ Login/ 
       │
       └─ Index/ 
       │
       └─ About/ 
       │
       └─ scan/ [扫描]
```

redux 待续...