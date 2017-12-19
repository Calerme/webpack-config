'use strict'
const path = require('path')

const context = path.resolve(__dirname, '..')

function getPath(...parts) {
    parts.unshift(context)
    return path.resolve.apply(path, parts)
}
module.exports = {
    context: context,
    srcPath: getPath('src'),
    distPath: getPath('dist'),
    postCssConf: getPath('build', 'postcss.config.js')
}