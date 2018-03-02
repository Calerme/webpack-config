# webpack-cli

webpack 命令行工具。

```sh
# 查看帮助
webpack --help

# 常用的两个参数
webpack <entry> [<entry>] -o <output>
webpack --config webpack.config.js
```

# 配置 babel-loader

[babel](./babel/babel.md)

# 配置 TypeScript

[typescript](./typescript/typescript.md)

# 提取公用代码 CommonsChunkPlugin

* 减少代码冗余
* 提高加载速度

[webpack.optimize.CommonsChunkPlugin](./webpack.optimize/CommonsChunkPlugin.md)

# 代码分割和懒加载

通过两种方法实现：

* webpack methods（逐渐淘汰）
* ES 2015 Loader spec 推荐

**代码分割**

* 分享业务代码和第三方依赖
* 分享业务代码和业务公共代码和第三方依赖
* 分离首次加载和访问后加载的代码

# 处理 CSS

* css-loader 将 CSS 转换为 JS 代码
* style-loader 将转换为 JS 的 CSS 代码作为一个 style 标签插入 HTML
  * style-loader/url
  * style-loader/useable