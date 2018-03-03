# 安装

通过 html-webpack-plugin 生成的 html 将自动引入打包后的 JS 与 CSS 文件。

```sh
npm i -D html-webpack-plugin
```

# 配置

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html', // 可以是 pug ejs 等模板语言（需要预先安装相应的 loader）
        chunks: ['app'], // 如果项目有多个入口文件，在不指定 chunks 的情况下，所有打包文件都会被插入 HTML
        minify: { // 内部使用了 html-minify 这个包
            collapseWhitespace: true // 删除标签间的换行与空格
        }
        
    })
]
```

# 处理 HTML 中引入的图片

如果在 HTML template 中引入图片，也想通过 webpack 打包处理，就需要使用

* html-loader

```js
{
    test: /\.(jpeg|jpg|png|gif)/,
    options: {
        name: '[name]-[hash:5].[ext]',
        outputPath: 'assets/img'
        // 去除了 useRelativePath 
    }
},
{
    test: /\.html$/,
    options: {
        attrs: ['img:src', 'img:data-src'] // 指定这两个属性引用的文件要进行打包处理
    }
}
```

# 不使用 html-loader 处理 HTML 中的图片

```html
<html>
    <body>
        <img src="${require('./src/assets/elephant.png'}" date-src="${require('./src/assets/dog.png')}" alt="">
    </body>
</html>
```

# 优化：将 webpack 加载代码添入 html 文件，减少一次 HTTP 请求

* html-webpack-inline-chunk-plugin

```js
plugin: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
    }),
    new HtmlWebpackInlineChunkPlugin({
        inlineChunks: ['manifest']
    })
]
```