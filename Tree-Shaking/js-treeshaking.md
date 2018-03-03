# 概述

webpack 会在打包的过程将没有用到的代码通过注释标注出来，再通过 webpack.optimize.uglifyJsPlugin() 进行删除。

Tree-shaking 对使用 ES6 Module 格式书写的代码支持最好。

# 配置

```js
const webpack = require('webpack')

plugins: [
    new webpack.optimize.uglifyJsPlugin()
]
```

# lodash 支持 Tree-Shaking

当使用 webpack 打包 lodash 时，发现无论是使用原版的 lodash 还是 lodash-es 都无法很好地支持 Tree-shaking，可以使用一个 babel 插件间接实现——babel-plugin-lodash：

.babelrc：

```json
{
    "presets": [ "env" ],
    "plugins": [ 'lodash' ]
}
```