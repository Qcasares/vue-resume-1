/**
 * Created by pomy on 11/5/16.
 */
'use sreict';

var path = require('path');

module.exports = {
    entry: {
        app:[path.resolve(__dirname, '../client/index.js')]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/assets/'),
        publicPath: path.resolve(__dirname, '/assets/')
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve:{
        extensions:["",".js",".vue"]
    },
    externals: {
        "jquery": "jQuery"
    },
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    }
}