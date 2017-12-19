const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJS = require('uglifyjs-webpack-plugin')

const baseConf = require('./webpack.base.conf')

module.exports = merge(baseConf, {
    devtool: 'source-map',
    plugins: [
        new UglifyJS({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
})