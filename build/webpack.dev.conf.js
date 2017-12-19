const merge = require('webpack-merge')

const baseConf = require('./webpack.base.conf')

module.exports = merge(baseConf, {
    devtool: 'inline-source-map',

})