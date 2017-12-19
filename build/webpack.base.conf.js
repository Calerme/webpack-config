'use strict'
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const conf = require('./env.conf')

module.exports = {
    // 默认为 process.cwd() 的值
    context: conf.context,
    entry: {
        // 以 context 为基础目录进行解析
        app: './src/app.js'
    },
    module: {
        // 忽略大型 library 提高构建性能
        noParse: function (content) {
            return /jquery|lodash/.test(content)
        },
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: conf.postCssConf
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },,
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: conf.postCssConf
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader:'babel-loader',
                        options: {
                            presets: ['latest']
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        context: path.resolve(conf.context, 'src'),
                        name: '[path][name].[ext]',
                        limit: 1
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*'],
            {
                root: conf.context,
                // exclude:['index.html'],
            }
        ),
        new HtmlWebpackPlugin({
            template: path.resolve(conf.srcPath, 'index.html')
        })
    ],
    output: {
        filename: '[name]-[chunkhash:8].bundle.js',
        // 输出路径应该是一个绝对路径
        path: conf.distPath
    }
}