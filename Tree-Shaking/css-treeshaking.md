# 概述

CSS Tree Shaking 是借助 purifycss-webpack 实现的。

无论是模板中使用到的 CSS 还是通过 JS 动态添加的 CSS，purifycss-webpack 都能检测到。

# 安装

```sh
npm i -D glob-all
npm i -D purifycss-webpack
```

# 配置

webpack.config.js：

```js
plugins: [
    new ExtractTextWebpackPlugin({
        filename: '[name].min.css',
        allChunks: false
    }),
    new PurifyCSS({
        path: glob.sync([
            path.join(__dirname, './*.html'),
            path.joing(__dirname, './src/**/*.js'
        ])
    }),
    new Webpack.optimize.UglifyJsPlugin()
]
```

==PurifyCSS 一定要写在 ExtractTextWebpackPlugin 的后面。==