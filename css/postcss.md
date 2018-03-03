# 安装

```js
npm i -D postcss postcss-loader autoprefixer cssnano postcss-cssnext
```

# 配置

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
                loader: 'postcss-loader'
                options: {
                    ident: 'postcss', // 表明接下来的插件是给 postcss 使用的
                    plugins: [
                        require('autoprefixer')(),
                        require('postcss-cssnext')()

                    ]
                }
            },
            {
                loader: 'sass-loader'
            }
        ]
    }
]
```
