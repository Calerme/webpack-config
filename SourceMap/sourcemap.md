# 三种方式设置 SourceMap

* Devtool
* webpack.SourceMapDevToolPlugin
* webpack.EvalSourceMapDevToolPlugin

# devtool 的七种值

* 开发环境下
    * eval
    * eval-source-map
    * cheap-eval-source-map
    * cheap-module-source-map （常用）
* 生产环境
    * source-map （常用）
    * hidden-source-map
    * nosource-source-map
    
==除要要设置好 devtool 外，还要在相应的 loader 里设置好 sourcemap。==

各种 loader 的 options 加上 `sourceMap: true` 字段。

