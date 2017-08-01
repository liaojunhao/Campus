var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// 打包公共组件的样式
module.exports = {
    entry: {
        ac2: './src/common/css/reset.css',
        ac3: './src/common/iconCss/iconfont.css'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].css"
    },
    module: {
        loaders: [
            {
                test : /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!less-loader'
                })
            },
            {
                test : /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10240, // 10KB 以下使用 base64
                    name: 'images/[name]-[hash:6].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/page/index/main.js'),
        list: path.resolve(__dirname, 'src/page/list/main.js')
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
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
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
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // (the commons chunk name)
            filename: "commons.js",
            // (the filename of the commons chunk)
            minChunks: 2,
            // (Modules must be shared between 3 entries)
            chunks: ["index", "list"],
            // (Only use these entries)
        }),
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