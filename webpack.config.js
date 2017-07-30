var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// 打包公共组件

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/page/index/main.js'),
        list: path.resolve(__dirname, 'src/page/list/main.js'),
        vendor: ['react', 'react-dom','react-router']
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
                test: /\.js[x]?$/,
                loader: ['react-hot-loader', 'babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test : /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test : /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!less-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10240, // 10KB 以下使用 base64
                    name: 'images/[name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader?limit=10240&name=[name]-[hash:6].[ext]'
            }

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        new ExtractTextPlugin('[name].css'),
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