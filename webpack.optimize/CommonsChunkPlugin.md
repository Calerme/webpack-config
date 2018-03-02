# 配置

```js
{
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(options)
    ]
}
```

## options.name || options.names

name: chunk 的名称。

names: []，当多个 chunk 的其它配置相同时，可以用一个数组写在一起。

## options.filename

公用代码打包后的文件名。

## options.minChunks

* 数字 - 代码引用 n 次就提取为公用代码
* Infinity - 不会将任何的模块打包
* 函数 - 自定义提取代码的逻辑

## options.chunks

指定提取代码的范围（在哪些模块中提取公用的代码）。

## options.children || options.deepChildren

是不是在 entry 的子模块中查找所有的依赖。

## options.async

创建一个异步的公共代码块。

# 应用场景

* 单面应用
* 单面应用 + 第三方依赖
* 多面应用 + 第三方依赖 + webpack 生成代码

# 示例

## 示例一：单入口文件

假设项目中有四个文件：

```js
// moduleA.js
export default 'moduleA'

// subPageA.js
import moduleA from './moduleA'
export default 'subPageA'

// subPageB.js
import moduleA from './moduleB'
export default 'subPageB'

// pageA.js
import pageA from './subPageA'
import pageB from './subPageB'

export default 'pageA'
```

webpack.config.js：

```js
const webpack = require('webpack');

module.exports = {
    entry: {
        'pageA': './src/pageA',
    },
    output: {
        path: './dist',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2 // chunk 引用 2 次就提出为公共代码
        })
    ]
}
```

此时使用 webpack 打包，会生成 common.chucnk.js 和 pageA.bundle.js 两个谁的，但 chunk.js 中除了 webpack 本身的打包代码外，并没有按照我们的期望将 moduleA 打包进去， moduleA 依然被打包进了 pageA.bundle.js 文件中。

这是因为 CommonsChunkPlugin 并不会提取单入口文件的公共代码。

## 示例二：多入口文件

假设项目有 5 个文件：

```js
// moduleA.js
export default 'moduleA'

// subPageA.js
import moduleA from './moduleA'
export default 'subPageA'

// subPageB.js
import moduleA from './moduleA'
export default 'sbuPageB'

// pageA.js
import subPageA from './subPageA'
export default 'pageA'

// pageB.js
import subPageB from './subPageB'
export default 'pageB'
```

webpack.config.js：

```js
module.exports = {
    entry: {
        pageA: './src/pageA',
        pageB: './src/pageB'
    },

    output: {
        path: './dist',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        })
    ]
}
```

此时使用 webpack 打包会生成三个文件 pageA.bundle.js pageB.bundle.js common.chunk.js。

subPageA subPageB moduleA 已经被打包进 common.chunk.js 了。

## 示例三：打包第三方包

修改上一个救命，使 pageA 与 pageB 中都引入 lodash：

```js
import * as _ from 'lodash'
```

webpack.config.js：

```js
const webpack = require('webpack');
module.exports = {
    entry: {
        pageA: './src/pageA',
        pageB: './src/pageB',
        vendor: ['lodash'] // 直接引入第三方库
    }
    ...,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2,
            chunks: ['pageA', 'pageB'] // 如果不指定范围， webpack 会报一个没能具体说明原因的错误
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        })
    ]
}
```

* common.chunk.js 会打包 pageA 和 pageB 中公共的代码
* vendor.chunk.js 会打包 lodash 的代码
* manifest.chunk.js 会打包 webpack 的公共代码（如果没有这一条，会将这些代码打包进 vendor.chunk.js 中

**其中 vendor 与 manifest 可以写成一条配置：**

```js
new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
    minChunks: Infinity
})
```