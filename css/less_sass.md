# 安装 & 配置

```sh
npm i -D sass-loader node-sass
npm i -D less-loader less
```

webpack.config.js：

```js
rules: [
    {
        test: /\.(scss|sass)$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            },
            {
                loader: 'sass-loader'
            }
        ]
    }
]
```