var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: [
        './src/app.js',
    ],
    devtool: 'source-map',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: [
                'babel-loader?'+JSON.stringify({
                    presets: ['es2015', 'react']
                })
            ],
        }],
    }
};
