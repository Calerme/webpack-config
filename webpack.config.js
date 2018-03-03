module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].[hash:5].js',
        path: './dist',
        publicPath: '/static',
        chunkFilename: '[name].chunk.js' // 异步模块的名字格式
    }
};