# 场景

* 引用远程的第三方库
    * 直接在 HTML 引入 CDN 地址即可
* 下载本地的第三方库但不想打包到业务文件中

# webpack.ProvidePlugin

使用这个插件注册模块后，其余模块就不需要再 require 了，直接使用设定的模块的键值即可。

webpack.config.js

```js
plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery'
    })
]
```

如果 jquery 并非通过 npm 安装，可以这样设置：

```js
resolve: {
    alias: {
        jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js')
    }
},
plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery'
    })
]
```

# imports-loader

它与 webpack.ProvidePlugin 的功能与配置方式基本相同：

```js
{
    test: path.resolve(__dirname, 'src/app.js'),
    use: [
        {
            loader: 'imports-loader',
            options: {
                $: 'jquery' // 同样它也可以通过 resolve.alias 指定文件路径
            }
        }
    ]
}
```

# window

通过 window 使用第三方库。

```js
// app.js
const $ = window.$;
```