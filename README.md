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

# 代码分割与懒加载

通过两种方法实现：

* webpack methods（逐渐淘汰）
* ES 2015 Loader spec 推荐

[代码分割与懒加载](./代码分割与懒加载/代码分割与懒加载.md)

**代码分割**

* 分享业务代码和第三方依赖
* 分享业务代码和业务公共代码和第三方依赖
* 分离首次加载和访问后加载的代码

# 处理 CSS

[css](./css/css.md)

* css-loader 将 CSS 转换为 JS 代码
* style-loader 将转换为 JS 的 CSS 代码作为一个 style 标签插入 HTML
  * style-loader/url
  * style-loader/useable

[less & sass](./css/less_sass.md)

## 提取 CSS 文件

* extract-loader
* ExtractTextWebpackPlugin（主流）

[ExtracTextWebpackPlugin](./css/ExtracTextWebpackPlugin.md)

## PostCSS

[PostCSS](./css/postcss.md)

常用插件：

* autoprefixer
* cssnano
* css-next
* postcss-import
* postcss-url
* postcs-assets

# browserslist

由于很多插件依赖 browserslist，所以可以将 browserslist 的配置提取出来，可以写在 package.json 里，也可以写在项目根目录的 .browserslistrc 文件。

package.json：

```
{
    ...,
    "browserslist": [
        ">= 1%",
        "last 2 versions"
    ],
    ...,
}
```

.browserslistrc

```plain
> 1%
Last 2 versions
IE 10
```

# Tree Shaking

* [JS Tree Shaking](./Tree-Shaking/js-treeshaking.md)
* [CSS Tree Shaking](./Tree-Shaking/css-treeshaking.md)

**应用场景：**

* 常规优化
* 打包第三方库

webpack 会将冗余代码标识出来，再通过插件进行删除。（webpack.optimize.uglifyJS）

