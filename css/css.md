# 安装 & 使用

```sh
npm i -D css-loader style-loader
```

webpack.config.js：

```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }
            ]
        }
    ]
}
```

app.js：

```
import './src/css/main.css'
```

# style-loader

## 使用 style-loader/url

配合 file-loader 可以将 CSS 以 link 的方式插入页面中。但它不能将多个 CSS 文件合并为一个文件，所以不太常用。

webpack.config.js：

```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader/url',
                },
                {
                    loader: 'file-loader'
                }
            ]
        }
    ]
}
```

## 使用 style-loader/useable

它可以控制样式是否插入。

webpack.config.js：

```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader/useable'
                },
                {
                    loader: 'css-loader'
                }
            ]
        }
    ]
}
```

app.js：

```js
import base from './css/base.css'
import common from './css/common.css'

base.use() // 会被插入
common.unuse() // 不会被插入

let flag = false

setInterval(()=>{
    flag ? base.use() : base.unuse()
    flag = !flag
}, 500);
```

## options

* insertAt 插入位置
* insertInto 插入到某个 dom
    * 值为 css 选择符
* singleton 是否只使用一个 style 标签
    * 布尔值
* transform 转化
    * 值是一个路径，指向一个 js 文件

```js
use: [
    {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader',
                options: {
                    insertInto: '#app',
                    transform: './src/css-transform.js'
                }
            }
        ]
    }
]
```

**transform** 指向的 js 文件并不会在打包 css 的时候执行，而是在 style 被插入到 HTML 前执行 js ：

```js
// css-transform.js
module.exports = function (css) {
    console.log(css);
    if (window.innerWidth >= 768) {
        return css.replace('red', 'orange');
    } else {
        return css.replace('red', 'blue');
    }
};
```

# css-loader

## options

* alias 解析的别名
* importLoader
* minimize 是否压缩（内部调用 CSSNANO 实现）
* modules 是否启用 css Modules

webpack.config.js：

```js
use: [
    {
        loader: 'css-loader',
        options: {
            minimize: true,
            modules: true,
            localIdentName: '[path][name]_[local]_[hash:base64:5]' // 定义 css Modules 名字格式
        }
    }
]
```

## CSS Module 用法

webpack.config.js

```js
use: [
    {
        loader: 'css-loader',
        options: { module: true }
    }
]
```

app.js：

```js
import base form './src/base.css'

const dom = document.getElementById('dom')

dom.innerHTML = '<span class=' + base.color + '>Hello World!</span>'
```