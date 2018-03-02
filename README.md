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
