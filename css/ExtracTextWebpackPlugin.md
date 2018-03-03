# 安装

```js
npm i -D extract-text-webpack-plugin
```

```js
module: {
    rules: [
        {
            test: /\.(scss|sass)$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: {
                    loader: 'style-loader',
                    options: {
                        singleton: true,
                        transform: './css.transform.js'
                    }
                },
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[path][name]_[local]_[hash:base64:5]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            })
        }
    ]
}
plugins: [
    new ExtractTextWebpackPlugin({
        filename: '[name].min.css',
        allChunks: false
    })
],
```

# allChunks 参数

默认值为 false.即不会将异步加载模块中引入的 css 打包到 css 文件中。

```js
// subA.js
import './src/subA.css'
export default 'subA'

// app.js
import(/* webpackChunkName: 'a' */ './src/subA')
    .then((a) => { console.log(a) })
```

如果 allChunks 设为 false（默认值）那么，subA.css 就不会被 提取出来，而是被打包到了 a.bundle.js 异步模块里。