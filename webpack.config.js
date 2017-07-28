var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
let extract = new ExtractTextPlugin('[name].css');

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
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['react-hot-loader', 'babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test : /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
                test : /\.less$/,
                loader: ExtractTextPlugin.extract('css-loader', 'less-loader')
            }

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        extract,
        new HtmlWebpackPlugin({
            title: '岗位列表',
            template: './src/list.temp.html',
            filename: 'list.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            title: '美联校招',
            template: './src/index.temp.html',
            filename: 'index.html',
            inject: false
        })
    ]
};