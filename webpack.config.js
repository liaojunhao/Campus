var path = require("path")
var webpack = require("webpack")

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/page/index/main.js'),
        list: path.resolve(__dirname, 'src/page/list/main.js'),
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    devServer: {
        stats: { colors: true },
        port: 8080,
        contentBase: 'build',
        inline: true,
        hot: true
    },
    resolve: {
        extension: ['', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['react-hot-loader', 'babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
    ]
};