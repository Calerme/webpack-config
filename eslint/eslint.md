# 安装

* eslint
* eslint-loader
* eslint-plugin-html
* eslint-friendly-formatter

```sh
npm i -D eslint eslint-loader eslint-plugin-html eslint-friendly-formatter
```

# 配置

```js
{
    test: /\.js$/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
        },
        {
            loader: 'eslint-loader',
            options: {
                formatter: require('eslint-friendly-formatter'), // 使用第三方插件显示提示信息
                
            }
        }
    ]
}
```

.eslintrc.js：

```js
module.exports = {
    root: true,
    extends: 'standard',
    plugins: [],
    env: {
        browser: true,
        node: true
    },
    globals: {
        $: true // $ 是一个全局变量
    },
    rules: {
        
    }
}
```

webpack.config.js：

```js
devServer: {
    overlay: true
}
```

