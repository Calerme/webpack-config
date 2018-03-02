# 安装

```sh
npm i -D babel-loader babel-core babel-preset-env

# 安装最新版
npm i -d babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env
```

# babel-polyfill & babel-runtime & babel-plugin-transform-runtime

## babel-polyfill

babel-core 只转换最新的一些语法，对新增添的 API 并不进行转换，babel-polyfill 是一个垫片库，但它会污染全局，它的主要用于开发应用时使用。

使用方法，直接引入 js 文件即可：

```js
import 'babel-polyfill';
```

## babel-runtime & babel-plugin-transform-runtime

它是一个局部垫片，它会将新 API 转换成局部方法，不会污染，主要在开发框架时使用。

并且 babel-transform-runtime 会将转换的代码进行封装，进而在使用到新 API 的地方进行公用，这样在最终打包的文件不会出现重复的转换代码。

安装：

```sh
npm i -D babel-plugin-transform-runtime
npm i -S babel-runtime

# 安装最新版
npm i -D @babel/plugin-transform-runtime
npm i -S @babel/runtime
```

# 配置

```js
module: {
    rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['> 1%', 'last 2 version']
                                }
                            }
                        ]
                    ]
                }
            },
            exclude: 'node_modules'
        }
    ]
}
```

## 使用 .babelrc

更多时候是将 babel 放在项目根目录下的 .babelrc 文件中。

.babelrc:

```json
{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["last 2 version"]
            }
        }]
    ],
    "plugins": ["@babel/transform-runtime"]
}
```