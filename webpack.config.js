module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].[hash:5].js',
        path: './dist'
    }
};